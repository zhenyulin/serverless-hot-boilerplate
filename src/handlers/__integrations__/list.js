import request from 'supertest';

import Todo from 'models/todo';
import { app } from 'handlers/list';

describe('list.app', () => {
	test('list all todo items', async () => {
		const mockItem = {
			id: '1',
			text: 'item 1',
			checked: false,
		};
		await Todo.create(mockItem);

		const response = await request(app).get('/');
		expect(response.status).toBe(200);
		expect(response.body).toHaveLength(1);
		expect(response.body[0]).toMatchObject(mockItem);

		await Todo.delete({
			id: '1',
		});
	});
});
