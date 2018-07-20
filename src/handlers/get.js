import serverless from 'serverless-http';
import express from 'express';

import Todo from 'models/todo';

export const handler = async (req, res) => {
	const result = await Todo.get({
		id: req.params.id,
	});
	res.json(result);
};

export const app = express().use('/todos/:id', handler);

export default serverless(app);
