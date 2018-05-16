'use strict';

const AWS = require('aws-sdk');

const dynamoDb = new AWS.DynamoDB.DocumentClient();
const params = {
	TableName: process.env.TODOS_TABLE_NAME
};

module.exports.handler = async (event, context, callback) => {
	try {
		const result = await dynamoDb.scan(params).promise();
		const response = {
			statusCode: 200,
			body: JSON.stringify(result.Items),
		};
		callback(null, response);
	} catch(e) {
		console.log(e);
		callback(new Error('Couldn\'t fetch the todos.'));
	}
};
