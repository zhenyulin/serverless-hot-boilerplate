import serverless from 'serverless-http';
import express from 'express';

import Todo from 'models/todo';

export const handler = async (req, res) => {
	await Todo.delete({
		id: req.params.id,
	});
	res.status(204).end();
};

export const app = express().use('/todos/:id', handler);

export default serverless(app);
