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
  logger: false
})

// Declare a route
fastify.get('/', (request, reply) => {
  reply.send({ hello: 'world' })
})

const cluster = require('cluster');
const http = require('http');
const numCPUs = require('os').cpus().length;

if (cluster.isMaster) {
  console.log(`Master ${process.pid} is running`);

  // Fork workers.
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on('exit', (worker, code, signal) => {
    console.log(`worker ${worker.process.pid} died`);
  });
} else {
  // Run the server!
  fastify.listen(3000, (err, address) => {
    if (err) throw err
    fastify.log.info(`server listening on ${address}`)
  })
  console.log(`Worker ${process.pid} started`);
}

/*
 self_kpxvndz@ABUNADH  ~\..\..\lewis.tests  autocannon -d 10 -c 10 -p 1 http://localhost:3000/
Running 10s test @ http://localhost:3000/
10 connections

┌─────────┬──────┬──────┬───────┬──────┬─────────┬─────────┬──────────┐
│ Stat    │ 2.5% │ 50%  │ 97.5% │ 99%  │ Avg     │ Stdev   │ Max      │
├─────────┼──────┼──────┼───────┼──────┼─────────┼─────────┼──────────┤
│ Latency │ 0 ms │ 0 ms │ 0 ms  │ 0 ms │ 0.01 ms │ 0.09 ms │ 11.61 ms │
└─────────┴──────┴──────┴───────┴──────┴─────────┴─────────┴──────────┘
┌───────────┬────────┬────────┬─────────┬─────────┬──────────┬─────────┬────────┐
│ Stat      │ 1%     │ 2.5%   │ 50%     │ 97.5%   │ Avg      │ Stdev   │ Min    │
├───────────┼────────┼────────┼─────────┼─────────┼──────────┼─────────┼────────┤
│ Req/Sec   │ 28671  │ 28671  │ 40575   │ 41087   │ 39519.28 │ 3445.34 │ 28659  │
├───────────┼────────┼────────┼─────────┼─────────┼──────────┼─────────┼────────┤
│ Bytes/Sec │ 4.7 MB │ 4.7 MB │ 6.66 MB │ 6.74 MB │ 6.48 MB  │ 565 kB  │ 4.7 MB │
└───────────┴────────┴────────┴─────────┴─────────┴──────────┴─────────┴────────┘

Req/Bytes counts sampled once per second.

435k requests in 11.04s, 71.3 MB read
*/
/*
 self_kpxvndz@ABUNADH  ~\..\..\lewis.tests  autocannon -d 10 -c 100 -p 100 http://localhost:3000/
Running 10s test @ http://localhost:3000/
100 connections with 100 pipelining factor

┌─────────┬──────┬──────┬───────┬──────┬─────────┬──────────┬───────────┐
│ Stat    │ 2.5% │ 50%  │ 97.5% │ 99%  │ Avg     │ Stdev    │ Max       │
├─────────┼──────┼──────┼───────┼──────┼─────────┼──────────┼───────────┤
│ Latency │ 0 ms │ 0 ms │ 0 ms  │ 1 ms │ 1.02 ms │ 10.39 ms │ 258.41 ms │
└─────────┴──────┴──────┴───────┴──────┴─────────┴──────────┴───────────┘
┌───────────┬─────────┬─────────┬─────────┬─────────┬─────────┬─────────┬─────────┐
│ Stat      │ 1%      │ 2.5%    │ 50%     │ 97.5%   │ Avg     │ Stdev   │ Min     │
├───────────┼─────────┼─────────┼─────────┼─────────┼─────────┼─────────┼─────────┤
│ Req/Sec   │ 84607   │ 84607   │ 101311  │ 106751  │ 99980.8 │ 6200.94 │ 84600   │
├───────────┼─────────┼─────────┼─────────┼─────────┼─────────┼─────────┼─────────┤
│ Bytes/Sec │ 13.9 MB │ 13.9 MB │ 16.6 MB │ 17.5 MB │ 16.4 MB │ 1.02 MB │ 13.9 MB │
└───────────┴─────────┴─────────┴─────────┴─────────┴─────────┴─────────┴─────────┘

Req/Bytes counts sampled once per second.

1000k requests in 10.43s, 164 MB read
*/