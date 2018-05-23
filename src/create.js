import serverless from 'serverless-http';
import express from 'express';
import bodyParser from 'body-parser';
import uuid from 'uuid';

import Todo from './model';

const app = express();

export const handler = async (req, res) => {
	try {
		const result = await Todo.create({
			id: uuid.v1(),
			text: req.body.text,
			checked: false,
		});
		res.json(result);
	} catch (e) {
		res.json(e);
		throw e;
	}
};

app.use(bodyParser.json());
app.use(handler);

export default serverless(app);
