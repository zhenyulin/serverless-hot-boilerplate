import request from 'supertest';

import Todo from 'models/todo';
import { app } from 'handlers/get';

jest.mock('models/todo');

describe('get.app', () => {
	beforeEach(() => {
		jest.clearAllMocks();
	});

	test('get an todo item by id', async () => {
		const mockId = 'xxxx-xxxx';
		const response = await request(app).get(`/todos/${mockId}`);
		expect(response.status).toBe(200);
		expect(Todo.get.mock.calls).toMatchSnapshot();
	});
});
