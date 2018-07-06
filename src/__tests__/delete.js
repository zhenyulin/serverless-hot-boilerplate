import Todo from '../model';
import { handler } from '../delete';

jest.mock('../model');

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
			status: jest.fn(),
			end: jest.fn(),
		};
		await handler(req, res);
		expect(Todo.delete.mock.calls).toHaveLength(1);
	});
});
