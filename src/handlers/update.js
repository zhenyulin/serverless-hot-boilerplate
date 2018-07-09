import serverless from 'serverless-http';
import express from 'express';
import bodyParser from 'body-parser';

import Todo from 'models/todo';

export const handler = async (req, res) => {
	try {
		const result = await Todo.update(
			{
				id: req.params.id,
			},
			req.body,
		);
		res.json(result);
	} catch (e) {
		res.json(e);
		throw e;
	}
};

export const app = express().use('/todos/:id', [bodyParser.json(), handler]);

export default serverless(app);
