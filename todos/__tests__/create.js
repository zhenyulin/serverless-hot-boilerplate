const Todo = require('../model');
const { handler } = require('../create');

jest.mock('../model');

describe('create.handler', function () {
	beforeEach(() => {
	  Todo.mockClear();
	});

	test('create an item in Dynamo', async function () {
		const event = {
			body: JSON.stringify({
				text: 'add one item',
			}),
		};
		const context = {};
		const callback = () => {};
		await handler(event, context, callback);
		expect(Todo.create.mock.calls).toHaveLength(1);
	});
});
