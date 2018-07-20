import request from 'supertest';

import Todo from 'models/todo';
import { app } from 'handlers/list';

describe('list.app', () => {
	afterEach(() => {
		Todo.scan.mockRestore();
	});

	test('list all todo items', async () => {
		const mockTodos = [
			{ id: '1', text: 'item 1' },
			{ id: '2', text: 'item 2' },
		];
		Todo.scan = jest.fn(() => ({
			exec: () => mockTodos,
		}));
		const response = await request(app).get('/');
		expect(response.header['content-type']).toContain('application/json');
		expect(response.status).toBe(200);
		expect(response.body).toEqual(mockTodos);
		expect(Todo.scan.mock.calls).toHaveLength(1);
	});
});
