'use strict';

const uuid = require('uuid');
const Todo = require('./model');

module.exports.handler = async (event, context, callback) => {
	const timestamp = new Date().getTime();
	const data = JSON.parse(event.body);

	if (typeof data.text !== 'string') {
		console.log('Validation Failed');
		callback(new Error('Couldn\'t create the todo item.'));
		return;
	}

	try {
		const result = await Todo.create({
			id: uuid.v1(),
			text: data.text,
			checked: false,
			createdAt: timestamp,
			updatedAt: timestamp,
		});
		const response = {
			statusCode: 200,
			body: JSON.stringify(result),
		};
		callback(null, response);
	} catch (e) {
		console.log(e);
		callback(new Error('Couldn\'t create the todo item.'));
		throw e;
	}
};
