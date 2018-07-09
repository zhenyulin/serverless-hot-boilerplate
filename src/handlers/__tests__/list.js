import Todo from 'models/todo';
import { handler } from 'handlers/list';

Todo.scan = jest.fn(() => ({
	exec: jest.fn(),
}));

describe('list.handler', () => {
	beforeEach(() => {
		Todo.scan.mockClear();
	});

	test('list all todo items', async () => {
		const req = {};
		const res = {
			json: jest.fn(),
		};
		await handler(req, res);
		expect(Todo.scan.mock.calls).toHaveLength(1);
	});
});
