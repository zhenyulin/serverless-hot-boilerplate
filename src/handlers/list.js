import serverless from 'serverless-http';
import express from 'express';

import Todo from '../models/todo';

const app = express();

export const handler = async (req, res) => {
	try {
		const result = await Todo.scan().exec();
		res.json(result);
	} catch (e) {
		res.json(e);
		throw e;
	}
};

app.use(handler);

export default serverless(app);
