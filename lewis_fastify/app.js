'use strict'

const path = require('path')
const AutoLoad = require('fastify-autoload')

module.exports = function (fastify, opts, next) {
  // Place here your custom code!

  // Do not touch the following lines

  // This loads all plugins defined in plugins
  // those should be support plugins that are reused
  // through your application
  fastify.register(AutoLoad, {
    dir: path.join(__dirname, 'plugins'),
    options: Object.assign({}, opts)
  })

  // This loads all plugins defined in services
  // define your routes in one of these
  fastify.register(AutoLoad, {
    dir: path.join(__dirname, 'services'),
    options: Object.assign({}, opts)
  })

  // Make sure to call next when done
  next()
}

// Require the framework and instantiate it
const fastify = require('fastify')({
/*
autocannon -d 10 -c 10 -p 1  http://localhost:3000/
Running 10s test @ http://localhost:3000/
10 connections

Req/Bytes counts sampled once per second.

188k requests in 11.04s, 30.9 MB read
*/
  logger: false
})

// Declare a route
fastify.get('/', (request, reply) => {
  reply.send({ hello: 'world' })
})

// Run the server!
fastify.listen(3000, (err, address) => {
  if (err) throw err
  fastify.log.info(`server listening on ${address}`)
})

/*
autocannon -d 10 -c 10 -p 1 http://localhost:3000/
Running 10s test @ http://localhost:3000/
10 connections

Req/Bytes counts sampled once per second.

324k requests in 11.04s, 53.1 MB read
*/
/*
autocannon -d 10 -c 100 -p 100 http://localhost:3000/
Running 10s test @ http://localhost:3000/
100 connections with 100 pipelining factor

Req/Bytes counts sampled once per second.

775k requests in 11.06s, 127 MB read
*/