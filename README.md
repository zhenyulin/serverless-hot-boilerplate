# serverless-example

Basic Restful API of a Todo app based on serverless, dynamoDB(Dynamoose)

## Feature
* Local Preview (serverless-offline)
* Hot Module Reload (serverless-webpack)
* Development DB (serverless-local-dynamodb)

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
* integrate prettier into webpack
