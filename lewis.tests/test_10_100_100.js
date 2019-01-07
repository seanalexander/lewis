'use strict'

const autocannon = require('autocannon')

autocannon({
  url: 'http://localhost:3000',
  connections: 100, //default
  pipelining: 100, // default
  duration: 10 // default
}, console.log)