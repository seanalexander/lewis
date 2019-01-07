'use strict'

var cluster = require('cluster');
var http = require('http');
var numCPUs = require('os').cpus().length;

const autocannon = require('autocannon')

if (cluster.isMaster) {
    // Fork workers.
    for (var i = 0; i < numCPUs; i++) {
        cluster.fork();
    }

    cluster.on('exit', function(worker, code, signal) {
        console.log('worker ' + worker.process.pid + ' died');
    });
} else {
  autocannon({
    url: 'http://localhost:3000',
    connections: 10, //default
    pipelining: 1, // default
    duration: 10 // default
  }, console.log)
}