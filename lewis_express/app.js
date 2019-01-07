const express = require('express')
const app = express()

const port = 3000
app.get('/', (req, res) => res.send({ hello: 'world' }))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))

/*
 self_kpxvndz@ABUNADH  ~\..\..\lewis.tests  autocannon -d 10 -c 10 -p 1 http://localhost:3000/
Running 10s test @ http://localhost:3000/
10 connections

┌─────────┬──────┬──────┬───────┬──────┬─────────┬─────────┬──────────┐
│ Stat    │ 2.5% │ 50%  │ 97.5% │ 99%  │ Avg     │ Stdev   │ Max      │
├─────────┼──────┼──────┼───────┼──────┼─────────┼─────────┼──────────┤
│ Latency │ 0 ms │ 0 ms │ 0 ms  │ 1 ms │ 0.03 ms │ 0.23 ms │ 19.79 ms │
└─────────┴──────┴──────┴───────┴──────┴─────────┴─────────┴──────────┘
┌───────────┬─────────┬─────────┬─────────┬─────────┬──────────┬─────────┬─────────┐
│ Stat      │ 1%      │ 2.5%    │ 50%     │ 97.5%   │ Avg      │ Stdev   │ Min     │
├───────────┼─────────┼─────────┼─────────┼─────────┼──────────┼─────────┼─────────┤
│ Req/Sec   │ 10807   │ 10807   │ 17375   │ 17647   │ 16753.82 │ 1889.14 │ 10804   │
├───────────┼─────────┼─────────┼─────────┼─────────┼──────────┼─────────┼─────────┤
│ Bytes/Sec │ 2.48 MB │ 2.48 MB │ 3.98 MB │ 4.04 MB │ 3.84 MB  │ 432 kB  │ 2.47 MB │
└───────────┴─────────┴─────────┴─────────┴─────────┴──────────┴─────────┴─────────┘

Req/Bytes counts sampled once per second.

184k requests in 11.03s, 42.2 MB read
*/
/*
 self_kpxvndz@ABUNADH  ~\..\..\lewis.tests  autocannon -d 10 -c 100 -p 100 http://localhost:3000/
Running 10s test @ http://localhost:3000/
100 connections with 100 pipelining factor

┌─────────┬──────┬──────┬───────┬───────┬─────────┬──────────┬───────────┐
│ Stat    │ 2.5% │ 50%  │ 97.5% │ 99%   │ Avg     │ Stdev    │ Max       │
├─────────┼──────┼──────┼───────┼───────┼─────────┼──────────┼───────────┤
│ Latency │ 0 ms │ 0 ms │ 0 ms  │ 72 ms │ 3.27 ms │ 32.47 ms │ 579.17 ms │
└─────────┴──────┴──────┴───────┴───────┴─────────┴──────────┴───────────┘
┌───────────┬─────────┬─────────┬─────────┬─────────┬─────────┬────────┬─────────┐
│ Stat      │ 1%      │ 2.5%    │ 50%     │ 97.5%   │ Avg     │ Stdev  │ Min     │
├───────────┼─────────┼─────────┼─────────┼─────────┼─────────┼────────┼─────────┤
│ Req/Sec   │ 28511   │ 28511   │ 30303   │ 30527   │ 30003.2 │ 589.06 │ 28501   │
├───────────┼─────────┼─────────┼─────────┼─────────┼─────────┼────────┼─────────┤
│ Bytes/Sec │ 6.53 MB │ 6.53 MB │ 6.94 MB │ 6.99 MB │ 6.87 MB │ 135 kB │ 6.53 MB │
└───────────┴─────────┴─────────┴─────────┴─────────┴─────────┴────────┴─────────┘

Req/Bytes counts sampled once per second.

300k requests in 10.09s, 68.7 MB read
*/