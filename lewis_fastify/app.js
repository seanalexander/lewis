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
 self_kpxvndz@ABUNADH  ~\..\..\lewis.tests  autocannon -d 10 -c 10 -p 1  http://localhost:3000/
Running 10s test @ http://localhost:3000/
10 connections

┌─────────┬──────┬──────┬───────┬──────┬─────────┬─────────┬──────────┐
│ Stat    │ 2.5% │ 50%  │ 97.5% │ 99%  │ Avg     │ Stdev   │ Max      │
├─────────┼──────┼──────┼───────┼──────┼─────────┼─────────┼──────────┤
│ Latency │ 0 ms │ 0 ms │ 0 ms  │ 0 ms │ 0.04 ms │ 1.65 ms │ 149.3 ms │
└─────────┴──────┴──────┴───────┴──────┴─────────┴─────────┴──────────┘
┌───────────┬─────────┬─────────┬─────────┬─────────┬─────────┬─────────┬─────────┐
│ Stat      │ 1%      │ 2.5%    │ 50%     │ 97.5%   │ Avg     │ Stdev   │ Min     │
├───────────┼─────────┼─────────┼─────────┼─────────┼─────────┼─────────┼─────────┤
│ Req/Sec   │ 15079   │ 15079   │ 17583   │ 18143   │ 17129.1 │ 1020.47 │ 15079   │
├───────────┼─────────┼─────────┼─────────┼─────────┼─────────┼─────────┼─────────┤
│ Bytes/Sec │ 2.47 MB │ 2.47 MB │ 2.88 MB │ 2.98 MB │ 2.81 MB │ 167 kB  │ 2.47 MB │
└───────────┴─────────┴─────────┴─────────┴─────────┴─────────┴─────────┴─────────┘

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
 self_kpxvndz@ABUNADH  ~\..\..\lewis.tests  autocannon -d 10 -c 10 -p 1 http://localhost:3000/
Running 10s test @ http://localhost:3000/
10 connections

┌─────────┬──────┬──────┬───────┬──────┬─────────┬─────────┬──────────┐
│ Stat    │ 2.5% │ 50%  │ 97.5% │ 99%  │ Avg     │ Stdev   │ Max      │
├─────────┼──────┼──────┼───────┼──────┼─────────┼─────────┼──────────┤
│ Latency │ 0 ms │ 0 ms │ 0 ms  │ 0 ms │ 0.01 ms │ 0.09 ms │ 10.37 ms │
└─────────┴──────┴──────┴───────┴──────┴─────────┴─────────┴──────────┘
┌───────────┬─────────┬─────────┬─────────┬─────────┬──────────┬─────────┬─────────┐
│ Stat      │ 1%      │ 2.5%    │ 50%     │ 97.5%   │ Avg      │ Stdev   │ Min     │
├───────────┼─────────┼─────────┼─────────┼─────────┼──────────┼─────────┼─────────┤
│ Req/Sec   │ 22863   │ 22863   │ 30095   │ 30319   │ 29434.91 │ 2087.56 │ 22863   │
├───────────┼─────────┼─────────┼─────────┼─────────┼──────────┼─────────┼─────────┤
│ Bytes/Sec │ 3.75 MB │ 3.75 MB │ 4.94 MB │ 4.97 MB │ 4.83 MB  │ 342 kB  │ 3.75 MB │
└───────────┴─────────┴─────────┴─────────┴─────────┴──────────┴─────────┴─────────┘

Req/Bytes counts sampled once per second.

324k requests in 11.04s, 53.1 MB read
*/
/*
 self_kpxvndz@ABUNADH  ~\..\..\lewis.tests  autocannon -d 10 -c 100 -p 100 http://localhost:3000/
Running 10s test @ http://localhost:3000/
100 connections with 100 pipelining factor

┌─────────┬──────┬──────┬───────┬───────┬────────┬──────────┬───────────┐
│ Stat    │ 2.5% │ 50%  │ 97.5% │ 99%   │ Avg    │ Stdev    │ Max       │
├─────────┼──────┼──────┼───────┼───────┼────────┼──────────┼───────────┤
│ Latency │ 0 ms │ 0 ms │ 0 ms  │ 50 ms │ 1.4 ms │ 13.96 ms │ 245.08 ms │
└─────────┴──────┴──────┴───────┴───────┴────────┴──────────┴───────────┘
┌───────────┬─────────┬─────────┬─────────┬─────────┬─────────┬─────────┬─────────┐
│ Stat      │ 1%      │ 2.5%    │ 50%     │ 97.5%   │ Avg     │ Stdev   │ Min     │
├───────────┼─────────┼─────────┼─────────┼─────────┼─────────┼─────────┼─────────┤
│ Req/Sec   │ 57407   │ 57407   │ 72831   │ 73599   │ 70445.1 │ 4623.32 │ 57381   │
├───────────┼─────────┼─────────┼─────────┼─────────┼─────────┼─────────┼─────────┤
│ Bytes/Sec │ 9.41 MB │ 9.41 MB │ 11.9 MB │ 12.1 MB │ 11.6 MB │ 760 kB  │ 9.41 MB │
└───────────┴─────────┴─────────┴─────────┴─────────┴─────────┴─────────┴─────────┘

Req/Bytes counts sampled once per second.

775k requests in 11.06s, 127 MB read
*/