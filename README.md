# serverless-hot-boilerplate

ultimate-hot-boilerplate for serverless, build, test and deploy globally scalable APIs cheaper and faster

## Development Experience
* Local Offline (serverless-offline, serverless-local-dynamodb)
* Hot Module Reload (serverless-webpack)
* auto fix and code format (eslint, prettier and webpack)
* ..less path resolve (webpack, eslint, jest)
* packages with friendly apis (express, dynamoose)

## Development

```shell
make install # install deps
make setup # install the dynamodb-local
make run # start serverless-offline
```

## Todos
* integration test with a test dynamoDB instance in CI

## Nice to have
* experimenting with hapi, koa and other web server frameworks together with serverless-http
* mock tooling packages for express, dynamoose
* graphql endpoint
