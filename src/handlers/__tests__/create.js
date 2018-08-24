import request from 'supertest';
import uuid from 'uuid';

import Todo from 'models/todo';
import { app } from 'handlers/create';

uuid.v1 = () => 'mock-id';

describe('create.app', () => {
	test('create an item in Dynamo', async () => {
		const mockText = 'add one item';
		const response = await request(app)
			.post('/')
			.send({ text: mockText });
		expect(response.status).toBe(200);
		expect(response.body.text).toEqual(mockText);

		await Todo.delete({
			id: 'mock-id',
		});
	});
});
