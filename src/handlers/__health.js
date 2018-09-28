import serverless from 'serverless-http';
import express from 'express';

import Todo from 'models/todo';

const healthCheck = resourceStatuses =>
	Promise.all(
		Object.keys(resourceStatuses).map(async resource => {
			try {
				await resourceStatuses[resource]();
				return { resource, status: 'OK' };
			} catch (e) {
				const failure = { resource, status: 'ERROR', error: e };
				throw failure;
			}
		}),
	);

const resourceStatuses = {
	dynamodb: () => Todo.waitForActive(5000),
};

export const handler = async (req, res) => {
	try {
		const result = await healthCheck(resourceStatuses);
		res.status(200).send(result);
	} catch (e) {
		res.status(500).send(e);
	}
};

export const app = express().use('/__health', handler);

export default serverless(app);
