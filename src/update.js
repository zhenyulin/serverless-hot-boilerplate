import serverless from 'serverless-http';
import express from 'express';
import bodyParser from 'body-parser';

import Todo from './model';

const app = express();

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

app.use(bodyParser.json());
app.use(handler);

export default serverless(app);
