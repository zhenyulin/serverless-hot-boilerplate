'use strict';

const Todo = require('./model');

module.exports.handler = async (event, context, callback) => {
	try {
		await Todo.delete({
			id: event.pathParameters.id
		});

		const response = {
			statusCode: 200,
			body: JSON.stringify({}),
		};
		callback(null, response);
	} catch(e) {
		console.log(e);
		callback(e);
	}
};
