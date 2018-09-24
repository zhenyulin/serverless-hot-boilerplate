import serverless from 'serverless-http';
import express from 'express';

export const handler = async (req, res) => {
	res.status(200).send('OK');
};

export const app = express().use('/__alive', handler);

export default serverless(app);
