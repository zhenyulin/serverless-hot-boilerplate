'use strict';

const Todo = require('./model');

module.exports.handler = async (event, context, callback) => {
	const timestamp = new Date().getTime();
	const data = JSON.parse(event.body);

	if (typeof data.text !== 'string' || typeof data.checked !== 'boolean') {
		console.log('Validation Failed');
		callback(new Error('Couldn\'t update the todo item.'));
    	return;
	}

	try {
		const result = await Todo.update({ id: event.pathParameters.id }, {
			text: data.text,
			checked: data.checked,
			updatedAt: timestamp
		});

		const response = {
			statusCode: 200,
			body: JSON.stringify(result),
		};
		callback(null, response);
	} catch(e) {
		console.log(e);
		callback(e);
	}
};
