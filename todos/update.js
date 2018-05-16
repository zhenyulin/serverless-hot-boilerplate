'use strict';

const AWS = require('aws-sdk');

const dynamoDb = new AWS.DynamoDb.DocumentClient();

module.exports.handler = async (event, context, callback) => {
	const timestamp = new Date().getTime();
	const data = JSON.parse(event.body);

	if (typeof data.text !== 'string' || typeof data.checked !== 'boolean') {
		console.log('Validation Failed');
		callback(new Error('Couldn\'t update the todo item.'));
    	return;
	}

	const params = {
		TableName: process.env.TODOS_TABLE_NAME,
		Key: {
			id: event.pathParameters.id,
		},
		ExpressionAttributeNames: {
			'#todo_text': 'text',
		},
		ExpressionAttributeValues: {
			':text': data.text,
			':checked': data.checked,
			':updatedAt': timestamp,
		},
		UpdateExpression: 'SET #todo_text = :text, checked = :checked, updatedAt = :updatedAt',
		ReturnValues: 'ALL_NEW',
	};

	try {

		const result = await dynamoDb.update(params);

		const response = {
			statusCode: 200,
			body: JSON.stringify(result.Attributes),
		};
		callback(null, response);
	} catch(e) {
		console.log(e);
		callback(e);
	}
};
