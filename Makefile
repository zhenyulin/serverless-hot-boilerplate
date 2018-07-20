install:
	@yarn

cleanup:
	@rm -rf .serverless .webpack coverage node_modules *.log

setup:
	@sls dynamodb remove && sls dynamodb install

run:
	@sls offline start --dontPrintOutput

lint:
	@echo 'linting…'
	@npx eslint src

lint-fix:
	@echo 'lint-fixing…'
	@npx eslint src --fix

lint-watch:
	@npx nodemon --watch src -q --exec 'make lint-fix'

test:
	@npx jest --config jest.config.js

test-watch:
	@npx jest --watch --config jest.config.js

test-coverage:
	@npx jest --coverage --config jest.config.js

integration-test:
	@INTEGRATION_TEST=true npx jest --config jest.config.js

deploy:
	@sls deploy --verbose --stage dev --region eu-west-1

deploy-production:
	@sls deploy --verbose --stage prod --region eu-west-1

destroy:
	@sls remove --verbose --stage dev --region eu-west-1

destroy-production:
	@sls remove --verbose --stage prod --region eu-west-1