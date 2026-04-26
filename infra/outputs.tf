output "s3_bucket_id" {
  description = "Name of the S3 bucket to sync Next.js 'out' directory"
  value       = aws_s3_bucket.website.id
}

output "s3_website_endpoint" {
  description = "S3 Website Endpoint. Create a CNAME record in Cloudflare pointing your domain to this URL."
  value       = aws_s3_bucket_website_configuration.website.website_endpoint
}

output "website_url" {
  description = "The custom domain URL"
  value       = "http://${var.domain_name}"
}
