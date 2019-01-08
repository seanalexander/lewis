var express = require('express');
var app = express();
var fs = require("fs");

app.get('/listUsers', function (req, res) {
    /*
    fs.readFile(__dirname + "/" + "users.json", 'utf8', function (err, data) {
        //console.log(data);
        res.end(data);
    });
    */
   res.end("hero");
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

    const port = 3000
    app.get('/', (req, res) => res.send({ hello: 'world' }))
    app.post('/', (req, res) => res.send({ hello: 'world' }))
    app.listen(port, () => console.log(`Example app listening on port ${port}!`))

    console.log(`Worker ${process.pid} started`);
}
/*
 self_kpxvndz@ABUNADH  ~\..\..\lewis.tests  autocannon -d 10 -c 10 -p 1 http://localhost:3000/
Running 10s test @ http://localhost:3000/
10 connections

┌─────────┬──────┬──────┬───────┬──────┬─────────┬────────┬──────────┐
│ Stat    │ 2.5% │ 50%  │ 97.5% │ 99%  │ Avg     │ Stdev  │ Max      │
├─────────┼──────┼──────┼───────┼──────┼─────────┼────────┼──────────┤
│ Latency │ 0 ms │ 0 ms │ 0 ms  │ 0 ms │ 0.01 ms │ 0.1 ms │ 12.15 ms │
└─────────┴──────┴──────┴───────┴──────┴─────────┴────────┴──────────┘
┌───────────┬────────┬────────┬─────────┬─────────┬──────────┬─────────┬────────┐
│ Stat      │ 1%     │ 2.5%   │ 50%     │ 97.5%   │ Avg      │ Stdev   │ Min    │
├───────────┼────────┼────────┼─────────┼─────────┼──────────┼─────────┼────────┤
│ Req/Sec   │ 20975  │ 20975  │ 33727   │ 34175   │ 32512.73 │ 3668.73 │ 20969  │
├───────────┼────────┼────────┼─────────┼─────────┼──────────┼─────────┼────────┤
│ Bytes/Sec │ 4.8 MB │ 4.8 MB │ 7.73 MB │ 7.83 MB │ 7.45 MB  │ 840 kB  │ 4.8 MB │
└───────────┴────────┴────────┴─────────┴─────────┴──────────┴─────────┴────────┘

Req/Bytes counts sampled once per second.

358k requests in 11.04s, 81.9 MB read
*/
/*
 self_kpxvndz@ABUNADH  ~\..\..\lewis.tests  autocannon -d 10 -c 100 -p 100 http://localhost:3000/
Running 10s test @ http://localhost:3000/
100 connections with 100 pipelining factor

┌─────────┬──────┬──────┬───────┬──────┬─────────┬─────────┬───────────┐
│ Stat    │ 2.5% │ 50%  │ 97.5% │ 99%  │ Avg     │ Stdev   │ Max       │
├─────────┼──────┼──────┼───────┼──────┼─────────┼─────────┼───────────┤
│ Latency │ 0 ms │ 0 ms │ 0 ms  │ 3 ms │ 1.31 ms │ 19.6 ms │ 441.23 ms │
└─────────┴──────┴──────┴───────┴──────┴─────────┴─────────┴───────────┘
┌───────────┬─────────┬─────────┬───────┬─────────┬─────────┬─────────┬─────────┐
│ Stat      │ 1%      │ 2.5%    │ 50%   │ 97.5%   │ Avg     │ Stdev   │ Min     │
├───────────┼─────────┼─────────┼───────┼─────────┼─────────┼─────────┼─────────┤
│ Req/Sec   │ 65855   │ 65855   │ 74239 │ 79743   │ 75328   │ 4168.69 │ 65800   │
├───────────┼─────────┼─────────┼───────┼─────────┼─────────┼─────────┼─────────┤
│ Bytes/Sec │ 15.1 MB │ 15.1 MB │ 17 MB │ 18.3 MB │ 17.3 MB │ 957 kB  │ 15.1 MB │
└───────────┴─────────┴─────────┴───────┴─────────┴─────────┴─────────┴─────────┘

Req/Bytes counts sampled once per second.

753k requests in 10.2s, 172 MB read
*/