import dynamoose from 'dynamoose';

/* istanbul ignore next */
if (process.env.IS_OFFLINE) {
	process.env.AWS_REGION = 'localhost';
	dynamoose.local();
}

/* istanbul ignore next */
if (process.env.INTEGRATION_TEST) {
	process.env.AWS_REGION = 'localhost';
	process.env.DYNAMODB_TABLE = `test-table-${process.env.JEST_WORKER_ID}`;
	dynamoose.local();
}

export default dynamoose;
