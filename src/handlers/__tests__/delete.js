import Todo from 'models/todo';
import { handler } from 'handlers/delete';

jest.mock('models/todo');

describe('delete.handler', () => {
	beforeEach(() => {
		Todo.mockClear();
	});

	test('delete an todo item by id', async () => {
		const mockId = 'xxxx-xxxx';
		const req = {
			params: {
				id: mockId,
			},
		};
		const res = {
			json: jest.fn(),
			status: jest.fn(() => res),
			end: jest.fn(),
		};
		await handler(req, res);
		expect(Todo.delete.mock.calls).toHaveLength(1);
	});
});