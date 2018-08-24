import request from 'supertest';

import Todo from 'models/todo';
import { app } from 'handlers/get';

describe('get.app', () => {
	test('get an todo item by id', async () => {
		const mockId = 'xxxx-xxxx';
		const mockItem = {
			id: mockId,
			text: 'item 1',
			checked: false,
		};
		await Todo.create(mockItem);

		const response = await request(app).get(`/todos/${mockId}`);
		expect(response.status).toBe(200);
		expect(response.body).toMatchObject(mockItem);

		await Todo.delete({
			id: mockId,
		});
	});
});
