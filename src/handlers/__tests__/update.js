import request from 'supertest';

import Todo from 'models/todo';
import { app } from 'handlers/update';

jest.mock('models/todo');

describe('update.app', () => {
	beforeEach(() => {
		jest.clearAllMocks();
	});

	test('update an todo item by id', async () => {
		const mockId = 'xxxx-xxxx';
		const response = await request(app)
			.put(`/todos/${mockId}`)
			.send({ text: 'update one item' });
		expect(response.status).toBe(200);
		expect(Todo.update.mock.calls).toMatchSnapshot();
	});
});
