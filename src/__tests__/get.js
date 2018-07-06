import Todo from '../model';
import { handler } from '../get';

jest.mock('../model');

describe('get.handler', () => {
	beforeEach(() => {
		Todo.mockClear();
	});

	test('get an todo item by id', async () => {
		const mockId = 'xxxx-xxxx';
		const req = {
			params: {
				id: mockId,
			},
		};
		const res = {
			json: jest.fn(),
		};
		await handler(req, res);
		expect(Todo.get.mock.calls).toHaveLength(1);
	});
});
