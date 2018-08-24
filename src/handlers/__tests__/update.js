import request from 'supertest';

import Todo from 'models/todo';
import { app } from 'handlers/update';

describe('get.app', () => {
	test('get an todo item by id', async () => {
		const mockId = 'xxxx-xxxx';
		const mockItem = {
			id: mockId,
			text: 'item 1',
			checked: false,
		};
		await Todo.create(mockItem);

		const updatedText = 'update one item';
		const response = await request(app)
			.put(`/todos/${mockId}`)
			.send({ text: updatedText });
		expect(response.status).toBe(200);
		expect(response.body.text).toBe(updatedText);

		const updatedItem = await Todo.get({
			id: mockId,
		});
		expect(updatedItem.text).toBe(updatedText);

		await Todo.delete({ id: mockId });
	});
});
