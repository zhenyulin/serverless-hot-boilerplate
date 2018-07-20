import dynamoose from 'libs/dynamoose';

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
