import dynamoose from 'dynamoose';

if (process.env.IS_OFFLINE) {
	process.env.AWS_REGION = 'localhost';
	dynamoose.local();
}

if (process.env.INTEGRATION_TEST) {
	process.env.AWS_REGION = 'localhost';
	process.env.DYNAMODB_TABLE = `test-table-${process.env.JEST_WORKER_ID}`;
	dynamoose.local();
}

const TodoSchema = new dynamoose.Schema(
	{
		id: String,
		text: String,
		checked: Boolean,
	},
	{
		timestamps: true,
	},
);

export default dynamoose.model(process.env.DYNAMODB_TABLE, TodoSchema);
