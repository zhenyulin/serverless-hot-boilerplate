import dynamoose from 'dynamoose';

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

export default dynamoose.model('serverless-example-todos', TodoSchema);
