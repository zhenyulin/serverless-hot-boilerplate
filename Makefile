export PATH := ./node_modules/.bin:$(PATH)
SHELL := /bin/bash

REGION_EU := eu-west-1
REGION_US := us-west-2

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
	@eslint_d src

lint-fix:
	@echo 'lint-fixing…'
	@eslint_d src --fix

test:
	@jest

test-watch:
	@jest --watch

test-coverage:
	@jest --coverage

deploy:
	@sls deploy --verbose --stage dev --region $(REGION_EU)

deploy-production-eu:
	@sls deploy --verbose --stage prod --region $(REGION_EU)

deploy-production-us:
	@sls deploy --verbose --stage prod --region $(REGION_US)

destroy:
	@sls remove --verbose --stage dev --region $(REGION_EU)

destroy-production-eu:
	@sls remove --verbose --stage prod --region $(REGION_EU)

destroy-production-us:
	@sls remove --verbose --stage prod --region $(REGION_US)

update-infra-resources:
	@cd terraform && terraform apply -var-file=".env.tfvars"