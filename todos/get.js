'use strict';

const AWS = require('aws-sdk');

const dynamoDb = new AWS.DynamoDb.DocumentClient();

module.exports.handler = async (event, context, callback) => {
	try {
		const params = {
			TableName: process.env.TODOS_TABLE_NAME,
			Key: {
				id: event.pathParameters.id,
			},
		};

		const result = await dynamoDb.get(params);

		const response = {
			statusCode: 200,
			body: JSON.stringify(result.Item),
		};
		callback(null, response);
	} catch(e) {
		console.log(e);
		callback(e);
	}
};
