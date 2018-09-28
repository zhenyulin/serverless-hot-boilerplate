variable "domain_name" {} # e.g. example.com
variable "custom_domain_name" {} # e.g. api.example.com
variable "eu_lambda_url" {}
variable "us_lambda_url" {}
variable "eu_api_gateway_target_domain_name" {}
variable "us_api_gateway_target_domain_name" {}

variable "dynamodb_table_name" {
  default = "serverless-hot-boilerplate-prod"
}
