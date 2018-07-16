# serverless-hot-boilerplate

[![Build Status](https://travis-ci.org/zhenyulin/serverless-hot-boilerplate.svg?branch=master)](https://travis-ci.org/zhenyulin/serverless-hot-boilerplate)
[![Coverage Status](https://coveralls.io/repos/github/zhenyulin/serverless-hot-boilerplate/badge.svg?branch=master)](https://coveralls.io/github/zhenyulin/serverless-hot-boilerplate?branch=master)
[![Known Vulnerabilities](https://snyk.io/test/github/zhenyulin/serverless-hot-boilerplate/badge.svg)](https://snyk.io/test/github/zhenyulin/serverless-hot-boilerplate)
[![Scrutinizer Code Quality](https://scrutinizer-ci.com/g/zhenyulin/serverless-hot-boilerplate/badges/quality-score.png?b=master)](https://scrutinizer-ci.com/g/zhenyulin/serverless-hot-boilerplate/?branch=master)
[![Dependencies](https://david-dm.org/zhenyulin/serverless-hot-boilerplate.svg)](https://david-dm.org/zhenyulin/serverless-hot-boilerplate)
[![devDependencies](https://david-dm.org/zhenyulin/serverless-hot-boilerplate/dev-status.svg)](https://david-dm.org/zhenyulin/serverless-hot-boilerplate?type=dev)

ultimate-hot-boilerplate for serverless, build, test and deploy globally scalable APIs cheaper and faster

## Development Experience
* Local Offline (serverless-offline, serverless-local-dynamodb)
* Hot Module Reload (serverless-webpack)
* auto fix and code format (eslint, prettier and webpack)
* `..`less path resolve (webpack, eslint, jest)
* packages with friendly apis (express, dynamoose)

## Development

```shell
make install # install deps
make setup # install the dynamodb-local
make run # start serverless-offline
```

## Todos
* integration test with a test dynamoDB instance in CI
* production build and deploy
* lambda function keep warm

## Nice to have
* experimenting with hapi, koa and other web server frameworks together with serverless-http
* mock tooling packages for express, dynamoose
* graphql endpoint
