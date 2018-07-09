# serverless-example

Basic Restful API of a Todo app based on serverless, dynamoDB(Dynamoose)

## About
* Local Preview (serverless-offline)
* Hot Module Reload (serverless-webpack)
* Development DB (serverless-local-dynamodb)
* auto fix and format code (eslint, prettier and webpack)
* ..less path resolve (webpack, eslint, jest)

## Development

```shell
yarn # install deps
sls dynamodb install # install the dynamodb-local
make run # start serverless-offline
```

## Todos
* integration test with a test dynamoDB instance in CI

## Nice to have
* experimenting with hapi, koa and other web server frameworks together with serverless-http
* mock tooling packages for express, dynamoose
* graphql endpoint
