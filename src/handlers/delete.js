import serverless from 'serverless-http';
import express from 'express';

import Todo from 'models/todo';

const app = express();

export const handler = async (req, res) => {
	try {
		await Todo.delete({
			id: req.params.id,
		});
		res.status(204).end();
	} catch (e) {
		res.json(e);
		throw e;
	}
};

app.use('/todos/:id', handler);

export default serverless(app);
