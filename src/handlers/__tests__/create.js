import request from 'supertest';

import Todo from 'models/todo';
import { app } from 'handlers/create';

jest.mock('models/todo');
jest.mock('uuid', () => ({
	v1: jest.fn(() => 'mock-id'),
}));

describe('create.app', () => {
	beforeEach(() => {
		jest.clearAllMocks();
	});

	test('create an item in Dynamo', async () => {
		const response = await request(app)
			.post('/')
			.send({ text: 'add one item' });
		expect(response.status).toBe(200);
		expect(Todo.create.mock.calls).toMatchSnapshot();
	});
});
