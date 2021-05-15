provider "aws" {
  version = "~> 3.0"
}

# add your domain name to set up hosted zone in Route 53
# use `terraform import aws_route53_zone.primary ${ZONE_ID}` if it exists already
resource "aws_route53_zone" "primary" {
  name = "${var.domain_name}"
}

resource "aws_route53_health_check" "api_eu" {
  fqdn              = "${var.eu_lambda_url}"
  resource_path     = "/prod/__health"
  port              = 443
  type              = "HTTPS"
  failure_threshold = "5"
  request_interval  = "30"

  tags = {
    Name = "api-health-eu"
  }
}

resource "aws_route53_health_check" "api_us" {
  fqdn              = "${var.us_lambda_url}"
  resource_path     = "/prod/__health"
  port              = 443
  type              = "HTTPS"
  failure_threshold = "5"
  request_interval  = "30"

  tags = {
    Name = "api-health-us"
  }
}

resource "aws_route53_record" "api_eu" {
  zone_id = "${aws_route53_zone.primary.zone_id}"
  name    = "${var.custom_domain_name}"
  type    = "CNAME"
  ttl     = "5"

  latency_routing_policy {
    region = "eu-west-1"
  }

  health_check_id = "${aws_route53_health_check.api_eu.id}"

  set_identifier = "eu"
  records        = ["${var.eu_api_gateway_target_domain_name}"]
}

resource "aws_route53_record" "api_us" {
  zone_id = "${aws_route53_zone.primary.zone_id}"
  name    = "${var.custom_domain_name}"
  type    = "CNAME"
  ttl     = "5"

  latency_routing_policy {
    region = "us-west-2"
  }

  health_check_id = "${aws_route53_health_check.api_us.id}"

  set_identifier = "us"
  records        = ["${var.us_api_gateway_target_domain_name}"]
}

resource "aws_dynamodb_global_table" "myTable" {
  name = "${var.dynamodb_table_name}"

  replica {
    region_name = "eu-west-1"
  }

  replica {
    region_name = "us-west-2"
  }
}
