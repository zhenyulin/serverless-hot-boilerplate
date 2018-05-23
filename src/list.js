import serverless from 'serverless-http';
import express from 'express';

import Todo from './model';

const app = express();

export const handler = async (req, res) => {
	try {
		const result = await Todo.scan();
		res.json(result);
	} catch (e) {
		res.json(e);
		throw e;
	}
};

app.use(handler);

export default serverless(app);
