import dynamoose from 'dynamoose';

if (process.env.IS_OFFLINE) {
	process.env.AWS_REGION = 'localhost';
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
