build: $(shell find src -type f)
	@echo 'Building…'
	@rm -rf dist
	@npx babel src -d dist --ignore '**/__tests__/*.js'

lint:
	@echo 'linting…'
	@npx eslint src

lint-fix:
	@npx eslint src --fix

lint-watch:
	@npx nodemon --watch src -q --exec 'make lint-fix'

test:
	@npx jest --config test-setup.js

test-watch:
	@npx jest --watch --config test-setup.js

coverage:
	@npx jest --coverage

deploy:
	@sls deploy -v