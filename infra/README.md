# Infrastructure Deployment (Terraform)

This directory contains the Infrastructure as Code (IaC) configuration required to serve your Next.js export globally on the edge, without requiring explicit cloud compute instances.

### What it builds
1. **AWS S3 Bucket**: Configured exclusively for static website hosting with a public read policy (`s3:GetObject`).
2. **Cloudflare DNS Records**: Automatically generates `CNAME` records linking your root domain (`@`) and `www` to the unique AWS S3 bucket endpoint, fully enabling Cloudflare's global edge cache and free SSL natively.

---

## ⚙️ Prerequisites

1. **AWS CLI** installed and configured locally (`aws configure`).
2. **Terraform** installed.
3. A domain currently managed by **Cloudflare**.
4. An active **Cloudflare API Token** (Required Permissions: `Zone | DNS | Edit`).

---

## 📝 Customization (Variables)

Before provisioning the infrastructure for yourself, you must declare your environment parameters. 

Create a file named `terraform.tfvars` inside the `infra/` folder. This file is safely `.gitignore`'d indefinitely and will prevent you from accidentally committing secrets.

Populate multiple keys by copying this template into `terraform.tfvars`:
```hcl
# AWS Configuration
aws_region  = "us-east-1"

# Domain Configuration
domain_name = "yourdomain.com"

# Cloudflare Configuration
cloudflare_zone_id   = "your-cloudflare-zone-id"
cloudflare_api_token = "your-cloudflare-api-token"
```

*(You can omit the variables or run Terraform dynamically by exporting `TF_VAR_domain_name=...` in your terminal if used in a CI/CD pipeline).*

---

## 🚀 Deployment Commands

Once your variables are securely configured, run these explicit commands step-by-step from inside the `/infra` directory:

#### 1. Initialize Terraform
Downloads the necessary AWS and Cloudflare provider plugins into your hidden state.
```bash
terraform init
```

#### 2. Preview Infrastructure
Previews the exact resources Terraform intends to create or modify. This is a safe, read-only command.
```bash
terraform plan
```

#### 3. Deploy to Cloud
Provisions the S3 bucket on AWS and natively injects the new caching DNS configurations directly into Cloudflare.
```bash
terraform apply
```

#### 4. Tear Down (Optional)
If you need to completely migrate or delete this project, this will securely purge the Cloudflare bindings and the S3 bucket from both providers automatically.
```bash
terraform destroy
```
