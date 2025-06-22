#!/bin/bash

# AWS S3 + CloudFront Setup Script
echo "🌊 Setting up AWS S3 + CloudFront deployment..."

# Variables (update these)
BUCKET_NAME="conversia-ai-website"
REGION="us-east-1"
DOMAIN_NAME="your-domain.com"

echo "📋 Configuration:"
echo "Bucket: $BUCKET_NAME"
echo "Region: $REGION"
echo "Domain: $DOMAIN_NAME"

# Check AWS CLI
if ! command -v aws &> /dev/null; then
    echo "❌ AWS CLI not found. Please install: https://aws.amazon.com/cli/"
    exit 1
fi

# Check if logged in
if ! aws sts get-caller-identity &> /dev/null; then
    echo "❌ Not logged into AWS. Run: aws configure"
    exit 1
fi

echo "✅ AWS CLI configured"

# Build the application
echo "🔨 Building application..."
npm run build

if [ ! -d "dist" ]; then
    echo "❌ Build failed - no dist directory"
    exit 1
fi

echo "✅ Build complete"

# Create S3 bucket
echo "🪣 Creating S3 bucket..."
aws s3 mb s3://$BUCKET_NAME --region $REGION

# Enable static website hosting
aws s3 website s3://$BUCKET_NAME --index-document index.html --error-document index.html

# Set bucket policy
BUCKET_POLICY='{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "PublicReadGetObject",
            "Effect": "Allow",
            "Principal": "*",
            "Action": "s3:GetObject",
            "Resource": "arn:aws:s3:::'$BUCKET_NAME'/*"
        }
    ]
}'

echo "$BUCKET_POLICY" > bucket-policy.json
aws s3api put-bucket-policy --bucket $BUCKET_NAME --policy file://bucket-policy.json
rm bucket-policy.json

echo "✅ S3 bucket configured"

# Upload files
echo "📤 Uploading files to S3..."
aws s3 sync dist/ s3://$BUCKET_NAME --delete

echo "✅ Files uploaded"

# Get S3 website URL
S3_URL="http://$BUCKET_NAME.s3-website-$REGION.amazonaws.com"
echo "🌐 S3 Website URL: $S3_URL"

echo ""
echo "🎉 S3 setup complete!"
echo ""
echo "Next steps:"
echo "1. Create CloudFront distribution (manual)"
echo "2. Request SSL certificate (manual)" 
echo "3. Set up Route 53 hosted zone (manual)"
echo "4. Update GoDaddy name servers (manual)"
echo "5. Configure GitHub Actions secrets"
echo ""
echo "See AWS_GITHUB_DEPLOYMENT.md for detailed instructions"