import serverless from 'serverless-http';
import express from 'express';
import bodyParser from 'body-parser';
import uuid from 'uuid';

import Todo from 'models/todo';

const handler = async (req, res) => {
	try {
		const { text } = req.body;
		const result = await Todo.create({
			id: uuid.v1(),
			text,
			checked: false,
		});
		res.json(result);
	} catch (e) {
		res.json(e);
		throw e;
	}
};

export const app = express().use([bodyParser.json(), handler]);

export default serverless(app);
