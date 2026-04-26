#!/bin/bash
set -e

echo "Building Next.js app for static export..."
npm run build

echo "Syncing to S3 bucket: yuchia.dev..."
aws s3 sync out/ s3://yuchia.dev --delete



echo "Deployed successfully!"
