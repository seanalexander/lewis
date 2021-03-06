# Lewis

A project to explore testing frameworks in node

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

What things you need to install the software and how to install them

```
Give examples
```

## Running the tests

### Start the Web Server you want to test

Visit one of the lewis_ folders, such as:
```
cd lewis_express
```

and run:
```
node .\app.js
```


### Run a Test

Run a default test for test seconds, 1 pipeline


```
autocannon -d 10 -c 10 -p 1 http://localhost:3000/
```

Run a default test for test seconds, 100 pipelines
```
autocannon -d 10 -c 100 -p 100 http://localhost:3000/
```

## Projects

* [express](https://expressjs.com/) - web server
* [fastify](https://www.fastify.io/) - web server
* [autocannon](https://github.com/mcollina/autocannon) - Used to generate load tests

## Contributing

Send a merge request.

## Authors

* **Seann Alexander** - *Initial work* - [seanalexander](https://github.com/seanalexander)

## License

This project is licensed under the Apache License 2.0 - see the [LICENSE](LICENSE) file for details
