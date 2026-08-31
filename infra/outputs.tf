output "site_bucket_name" {
  description = "S3 bucket holding the built site — set as S3_BUCKET repo variable"
  value       = aws_s3_bucket.site.id
}

output "cloudfront_distribution_id" {
  description = "CloudFront distribution ID — set as CLOUDFRONT_DISTRIBUTION_ID repo variable"
  value       = aws_cloudfront_distribution.site.id
}

output "cloudfront_domain_name" {
  description = "Point DNS (CNAME/ALIAS) for the site domains at this hostname"
  value       = aws_cloudfront_distribution.site.domain_name
}

output "github_deploy_role_arn" {
  description = "IAM role for GitHub Actions — set as AWS_DEPLOY_ROLE_ARN repo variable"
  value       = aws_iam_role.github_deploy.arn
}
