terraform {
  required_version = ">= 1.5.0"

  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }
}

# Primary region — bucket and IAM live here. CloudFront and ACM are global
# services; the certificate ARN is simply referenced (it must be in us-east-1).
provider "aws" {
  region = "af-south-1"

  default_tags {
    tags = {
      Project   = "pippamanicom"
      ManagedBy = "terraform"
    }
  }
}
