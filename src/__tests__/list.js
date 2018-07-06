import Todo from '../model';
import { handler } from '../list';

jest.mock('../model');

describe('list.handler', () => {
	beforeEach(() => {
		Todo.mockClear();
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
