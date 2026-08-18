variable "site_name" {
  description = "Short name used to prefix resource names"
  type        = string
  default     = "pippamanicom"
}

variable "domain_aliases" {
  description = "Domain names served by the CloudFront distribution (must be covered by the ACM certificate)"
  type        = list(string)
  default     = ["pippamanicom.co.za", "www.pippamanicom.co.za"]
}

variable "acm_certificate_arn" {
  description = "ARN of an ISSUED ACM certificate in us-east-1 covering all domain_aliases"
  type        = string
  default     = "arn:aws:acm:us-east-1:298533577531:certificate/8a79c214-858d-4cf1-810c-065623d4beb7"

  validation {
    condition     = startswith(var.acm_certificate_arn, "arn:aws:acm:us-east-1:")
    error_message = "CloudFront requires the ACM certificate to be in us-east-1."
  }
}

variable "cloudfront_price_class" {
  description = "CloudFront price class. PriceClass_200 includes the South African edge locations (Johannesburg, Cape Town) plus Kenya, so African users are served locally without paying for PriceClass_All."
  type        = string
  default     = "PriceClass_200"

  validation {
    condition     = contains(["PriceClass_100", "PriceClass_200", "PriceClass_All"], var.cloudfront_price_class)
    error_message = "Must be PriceClass_100, PriceClass_200, or PriceClass_All. Note: PriceClass_100 has NO African edge locations."
  }
}

variable "github_repository" {
  description = "GitHub repository (owner/repo) allowed to deploy via OIDC"
  type        = string
  default     = "kaizentech-sa/pippamanicom"
}

variable "create_github_oidc_provider" {
  description = "Set to false if the account already has an IAM OIDC provider for token.actions.githubusercontent.com"
  type        = bool
  default     = true
}
