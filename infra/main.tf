

# S3 Bucket
resource "aws_s3_bucket" "website" {
  bucket = var.domain_name
}

resource "aws_s3_bucket_website_configuration" "website" {
  bucket = aws_s3_bucket.website.id

  index_document {
    suffix = "index.html"
  }

  error_document {
    key = "404.html"
  }
}

# Public Access Block (Must allow public policies for website hosting)
resource "aws_s3_bucket_public_access_block" "website" {
  bucket = aws_s3_bucket.website.id

  block_public_acls       = false
  block_public_policy     = false
  ignore_public_acls      = false
  restrict_public_buckets = false
}

# S3 Bucket Policy to allow public read access
data "aws_iam_policy_document" "website_policy" {
  statement {
    sid       = "PublicReadGetObject"
    actions   = ["s3:GetObject"]
    resources = ["${aws_s3_bucket.website.arn}/*"]
    principals {
      type        = "*"
      identifiers = ["*"]
    }
  }
}

resource "aws_s3_bucket_policy" "website_policy_attachment" {
  bucket = aws_s3_bucket.website.id
  policy = data.aws_iam_policy_document.website_policy.json

  depends_on = [aws_s3_bucket_public_access_block.website]
}

# Cloudflare DNS configuration
resource "cloudflare_record" "root" {
  zone_id = var.cloudflare_zone_id
  name    = var.domain_name
  value   = aws_s3_bucket_website_configuration.website.website_endpoint
  type    = "CNAME"
  proxied = true
}

resource "cloudflare_record" "www" {
  zone_id = var.cloudflare_zone_id
  name    = "www"
  content = aws_s3_bucket_website_configuration.website.website_endpoint
  type    = "CNAME"
  proxied = true
}
