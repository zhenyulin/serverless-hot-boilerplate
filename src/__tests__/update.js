import Todo from '../model';
import { handler } from '../update';

jest.mock('../model');

describe('update.handler', () => {
	beforeEach(() => {
		Todo.mockClear();
	});

	test('update an todo item by id', async () => {
		const mockId = 'xxxx-xxxx';
		const req = {
			params: {
				id: mockId,
			},
			body: JSON.stringify({
				text: 'update one item',
			}),
		};
		const res = {
			json: jest.fn(),
		};
		await handler(req, res);
		expect(Todo.update.mock.calls).toHaveLength(1);
	});
});
