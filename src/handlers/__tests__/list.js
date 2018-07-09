import request from 'supertest';

import Todo from 'models/todo';
import { app } from 'handlers/list';

Todo.scan = jest.fn(() => ({
	exec: jest.fn(),
}));

describe('list.app', () => {
	beforeEach(() => {
		Todo.scan.mockClear();
	});

	test('list all todo items', async () => {
		const response = await request(app).get('/');
		expect(response.status).toBe(200);
		expect(Todo.scan.mock.calls).toHaveLength(1);
	});
});
