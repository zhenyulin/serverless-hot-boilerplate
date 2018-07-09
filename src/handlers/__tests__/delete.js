import request from 'supertest';

import Todo from 'models/todo';
import { app } from 'handlers/delete';

jest.mock('models/todo');

describe('delete.app', () => {
	beforeEach(() => {
		jest.clearAllMocks();
	});

	test('delete an todo item by id', async () => {
		const mockId = 'xxxx-xxxx';
		const response = await request(app).delete(`/todos/${mockId}`);
		expect(response.status).toBe(204);
		expect(Todo.delete.mock.calls).toMatchSnapshot();
	});
});
