run:
	@sls offline start

lint:
	@echo 'linting…'
	@npx eslint src

lint-fix:
	@npx eslint src --fix

lint-watch:
	@npx nodemon --watch src -q --exec 'make lint-fix'

test:
	@npx jest --config jest.config.js

test-watch:
	@npx jest --watch --config jest.config.js

coverage:
	@npx jest --coverage --config jest.config.js

deploy:
	@sls deploy -v

destroy:
	@sls remove