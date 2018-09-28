# serverless-hot-boilerplate

[![Build Status](https://travis-ci.org/zhenyulin/serverless-hot-boilerplate.svg?branch=master)](https://travis-ci.org/zhenyulin/serverless-hot-boilerplate)
[![Coverage Status](https://coveralls.io/repos/github/zhenyulin/serverless-hot-boilerplate/badge.svg?branch=master)](https://coveralls.io/github/zhenyulin/serverless-hot-boilerplate?branch=master)
[![Known Vulnerabilities](https://snyk.io/test/github/zhenyulin/serverless-hot-boilerplate/badge.svg)](https://snyk.io/test/github/zhenyulin/serverless-hot-boilerplate)
[![Scrutinizer Code Quality](https://scrutinizer-ci.com/g/zhenyulin/serverless-hot-boilerplate/badges/quality-score.png?b=master)](https://scrutinizer-ci.com/g/zhenyulin/serverless-hot-boilerplate/?branch=master)
[![Dependencies](https://david-dm.org/zhenyulin/serverless-hot-boilerplate.svg)](https://david-dm.org/zhenyulin/serverless-hot-boilerplate)
[![devDependencies](https://david-dm.org/zhenyulin/serverless-hot-boilerplate/dev-status.svg)](https://david-dm.org/zhenyulin/serverless-hot-boilerplate?type=dev)

ultimate-hot-boilerplate for serverless, build, test and deploy globally scalable APIs cheaper and faster

## Development Experience
* One command to start local development `make run`
* Hot Module Reload with code linting and formatting
* absolute path resolve (`..`less) in development and test
* use express, dynamoose to improve development, and test experience
* no-staging deployment, using flags to control rollout and test
* multi-region deployment latency based routing and active-active failover, configured with terraform

## Development

```shell
make install # install deps
make setup # install the dynamodb-local
make run # start serverless-offline
```

## Related
[serverless-graphql-neo4j](https://github.com/zhenyulin/serverless-graphql-neo4j)

[serverless-graphql-mongo](https://github.com/zhenyulin/serverless-graphql-mongo)
