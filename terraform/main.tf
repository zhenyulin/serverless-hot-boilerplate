provider "aws" {
  version = "~> 1.37"
}

resource "aws_route53_zone" "primary" {
  name = "" # add your domain name hosted in Route 53
}

resource "aws_route53_record" "api_eu" {
  zone_id = "${aws_route53_zone.primary.zone_id}"
  name    = "" # insert the custom domain you setup in API gateway
  type    = "CNAME"
  ttl     = "5"

  latency_routing_policy {
    region = "eu-west-1"
  }

  set_identifier = "eu"
  records = [""] # insert distribution domain name for the custom domain name in API gateway
}

resource "aws_route53_record" "api_us" {
  zone_id = "${aws_route53_zone.primary.zone_id}"
  name    = "" # insert the custom domain you setup in API gateway
  type    = "CNAME"
  ttl     = "5"

  latency_routing_policy {
    region = "us-west-2"
  }

  set_identifier = "us"
  records = [""] # insert distribution domain name for the custom domain name in API gateway
}
