'use strict';

const uuid = require('uuid');
const AWS = require('aws-sdk');

const dynamoDb = new AWS.DynamoDB.DocumentClient();

module.exports.create = async (event, context, callback) => {
	const timestamp = new Date().getTime();
	const data = JSON.parse(event.body);
	if (typeof data.text !== 'string') {
		console.log('Validation Failed');
		callback(new Error('Couldn\'t create the todo item.'));
		return;
	}

	const params = {
		TableName: process.env.TODOS_TABLE_NAME,
		Item: {
			id: uuid.v1(),
			text: data.text,
			checked: false,
			createdAt: timestamp,
			updatedAt: timestamp,
		},
	};

	try {
		const result = await dynamoDb.put(params).promise();
		const response = {
			statusCode: 200,
			body: JSON.stringify(result.Item),
		};
		callback(null, response);
	} catch (e) {
		console.log(e);
		callback(new Error('Couldn\'t create the todo item.'));
	}
};
