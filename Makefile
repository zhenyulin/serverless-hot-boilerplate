install:
	@yarn

setup:
	@sls dyanmodb remove \
	@sls dynamodb install

run:
	@sls offline start

lint:
	@echo 'linting…'
	@npx eslint src

lint-fix:
	@echo 'lint-fixing…'
	@npx eslint src --fix

lint-watch:
	@set +e
	@npx nodemon --watch src -q --exec 'make lint-fix'

test:
	@npx jest --config jest.config.js

test-watch:
	@set +e
	@npx jest --watch --config jest.config.js

test-coverage:
	@npx jest --coverage --config jest.config.js

deploy:
	@sls deploy -v

destroy:
	@sls remove