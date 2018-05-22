const dynamoose = require('dynamoose');

const Todo = dynamoose.model('Todo', {
	id: String,
	text: String,
	checked: Boolean,
	createdAt: String,
	updatedAt: String,
});

module.exports = Todo;
