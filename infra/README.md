# Infrastructure

Terraform for hosting pippamanicom.co.za as a static site:

- **S3** (private, versioned, encrypted) in **af-south-1** holding the Vite build output
- **CloudFront** in front via Origin Access Control, HTTPS-only, HTTP/2 + HTTP/3
- **Price class `PriceClass_200`** — includes the Johannesburg and Cape Town edge
  locations, so South African visitors are served locally (`PriceClass_100`
  has *no* African POPs; `PriceClass_All` adds only South America/Australia at
  extra cost)
- **GitHub OIDC deploy role** so CI needs no long-lived AWS keys

## Prerequisite: validate the ACM certificate

The certificate `383eb9db-...` is currently **PENDING_VALIDATION**. CloudFront
cannot attach an unissued certificate, so `terraform apply` will fail until
these CNAMEs exist at the DNS host for pippamanicom.co.za:

| Name | Value |
|---|---|
| `_688cf3cfb9551af5d2fabf6611543c91.pippamanicom.co.za` | `_3caa4aaa5fc57260030e7491545f61ee.jkddzztszm.acm-validations.aws` |
| `_4f8f6a930c0899e83ed2c080f86f9300.www.pippamanicom.co.za` | `_4ab7cbd3885b6f43e60a7b1b9572725a.jkddzztszm.acm-validations.aws` |

Wait for the certificate status to become `ISSUED`
(`aws acm describe-certificate --region us-east-1 --certificate-arn <arn>`).

## Apply

```bash
cd infra
terraform init
terraform plan
terraform apply
```

If the AWS account already has a GitHub OIDC provider
(`token.actions.githubusercontent.com`), apply with:

```bash
terraform apply -var create_github_oidc_provider=false
```

State is local by default. For team use, move it to a remote backend
(S3 + DynamoDB lock table) before anyone else runs Terraform.

## Wire up GitHub Actions

The deploy workflow (`.github/workflows/deploy.yml`) reads three repository
**variables** (Settings → Secrets and variables → Actions → Variables):

| Variable | Terraform output |
|---|---|
| `AWS_DEPLOY_ROLE_ARN` | `github_deploy_role_arn` |
| `S3_BUCKET` | `site_bucket_name` |
| `CLOUDFRONT_DISTRIBUTION_ID` | `cloudfront_distribution_id` |

```bash
gh variable set AWS_DEPLOY_ROLE_ARN --body "$(terraform output -raw github_deploy_role_arn)"
gh variable set S3_BUCKET --body "$(terraform output -raw site_bucket_name)"
gh variable set CLOUDFRONT_DISTRIBUTION_ID --body "$(terraform output -raw cloudfront_distribution_id)"
```

The deploy role can only be assumed by pushes to `main` of
`kaizentech-sa/pippamanicom`, and is limited to syncing the site bucket and
creating CloudFront invalidations.

## Point DNS at CloudFront

After apply, point both domains at the `cloudfront_domain_name` output:

- `pippamanicom.co.za` → ALIAS/ANAME (or your DNS host's apex-CNAME feature)
- `www.pippamanicom.co.za` → CNAME

## Caching strategy

Vite emits content-hashed filenames under `dist/assets/`, so the workflow
uploads those with `max-age=31536000, immutable`. `index.html`, `robots.txt`
and `sitemap.xml` are uploaded with `must-revalidate` and CloudFront is
invalidated on every deploy, so releases go live immediately.
