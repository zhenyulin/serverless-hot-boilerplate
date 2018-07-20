import request from 'supertest';

import Todo from 'models/todo';
import { app } from 'handlers/delete';

describe('get.app', () => {
	test('get an todo item by id', async () => {
		const mockId = 'xxxx-xxxx';
		const mockItem = {
			id: mockId,
			text: 'item 1',
			checked: false,
		};
		await Todo.create(mockItem);

		const response = await request(app).delete(`/todos/${mockId}`);
		expect(response.status).toBe(204);
		const deletedItem = await Todo.get({
			id: mockId,
		});
		expect(deletedItem).toBe(undefined);
	});
});
