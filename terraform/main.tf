provider "aws" {
  version = "~> 1.37"
}

# add your domain name to set up hosted zone in Route 53
# use `terraform import aws_route53_zone.primary ${ZONE_ID}` if it exists already
resource "aws_route53_zone" "primary" {
  name = ""
}

resource "aws_route53_record" "api_eu" {
  zone_id = "${aws_route53_zone.primary.zone_id}"
  name    = "" # custom domain name for your endpoint, e.g. api.example.com
  type    = "CNAME"
  ttl     = "5"

  latency_routing_policy {
    region = "eu-west-1"
  }

  set_identifier = "eu"
  records = [""] # target domain name of the custom domain name set in API gateway
}

resource "aws_route53_record" "api_us" {
  zone_id = "${aws_route53_zone.primary.zone_id}"
  name    = ""
  type    = "CNAME"
  ttl     = "5"

  latency_routing_policy {
    region = "us-west-2"
  }

  set_identifier = "us"
  records = [""]
}

resource "aws_dynamodb_global_table" "myTable" {

  name = "serverless-hot-boilerplate-prod"

  replica {
    region_name = "eu-west-1"
  }

  replica {
    region_name = "us-west-2"
  }
}
