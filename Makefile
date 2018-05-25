run:
	@export NODE_ENV=development
	@sls offline start

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
	@npx jest --coverage --config test-setup.js

deploy:
	@sls deploy -v

destroy:
	@sls remove