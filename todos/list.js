'use strict';

const Todo = require('./model');

module.exports.handler = async (event, context, callback) => {
	try {
		const result = await Todo.get();
		const response = {
			statusCode: 200,
			body: JSON.stringify(result),
		};
		callback(null, response);
	} catch(e) {
		console.log(e);
		callback(new Error('Couldn\'t fetch the todos.'));
	}
};
