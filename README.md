# serverless-example

Basic Restful API of a Todo app based on serverless, dynamoDB(Dynamoose)

## About
* Local Preview (serverless-offline)
* Hot Module Reload (serverless-webpack)
* Development DB (serverless-local-dynamodb)
* auto fix and format code with eslint, prettier and webpack

## Development

```shell
yarn # install deps
sls dynamodb install # install the dynamodb-local
make run
```

## Todos
* e2e test with a local test dynamoDB instance
* mock tools for express, dynamoose
* experimenting with hapi, koa and other web server frameworks together with serverless-http
