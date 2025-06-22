# Step-by-Step AWS Deployment Guide

## Phase 1: Prepare Your Code (5 minutes)

### Step 1: Test Local Build
```bash
npm run build
```
Verify the `dist` folder is created with your website files.

### Step 2: Push to GitHub
```bash
git add .
git commit -m "Prepare for AWS S3 deployment"
git push origin main
```

## Phase 2: AWS Infrastructure Setup (30-45 minutes)

### Step 3: Create S3 Bucket
1. Go to [AWS S3 Console](https://s3.console.aws.amazon.com/)
2. Click "Create bucket"
3. Bucket name: `conversia-ai-website-[yourname]` (must be globally unique)
4. Region: **us-east-1** (required for CloudFront)
5. **UNCHECK** "Block all public access"
6. Click "Create bucket"

### Step 4: Configure S3 for Static Website
1. Click on your bucket
2. Go to "Properties" tab
3. Scroll to "Static website hosting"
4. Click "Edit"
5. Enable static website hosting
6. Index document: `index.html`
7. Error document: `index.html`
8. Save changes

### Step 5: Set Bucket Policy
1. Go to "Permissions" tab
2. Click "Bucket policy" → "Edit"
3. Paste this policy (replace `YOUR-BUCKET-NAME`):

```json
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "PublicReadGetObject",
            "Effect": "Allow",
            "Principal": "*",
            "Action": "s3:GetObject",
            "Resource": "arn:aws:s3:::YOUR-BUCKET-NAME/*"
        }
    ]
}
```

### Step 6: Upload Initial Files
1. Build your site locally: `npm run build`
2. Go to "Objects" tab in S3
3. Click "Upload"
4. Upload all files from your `dist` folder
5. Test the S3 website URL (found in Properties → Static website hosting)

### Step 7: Create CloudFront Distribution
1. Go to [CloudFront Console](https://console.aws.amazon.com/cloudfront/)
2. Click "Create distribution"
3. Origin domain: Select your S3 bucket from dropdown
4. Origin access: "Origin access control settings"
5. Create new OAC (use default settings)
6. Default root object: `index.html`
7. Click "Create distribution"
8. **Note the Distribution ID** - you'll need this later

### Step 8: Configure Error Pages
1. In your CloudFront distribution
2. Go to "Error pages" tab
3. Click "Create custom error response"
4. HTTP error code: `404`
5. Response page path: `/index.html`
6. HTTP response code: `200`
7. Create error response

### Step 9: Request SSL Certificate
1. Go to [Certificate Manager Console](https://console.aws.amazon.com/acm/)
2. **Make sure you're in us-east-1 region**
3. Click "Request certificate"
4. Domain names:
   - `yourdomain.com`
   - `www.yourdomain.com`
5. Validation method: DNS validation
6. Request certificate
7. **Write down the CNAME records** - you'll add these to GoDaddy

## Phase 3: Domain Setup (15 minutes + 24-48 hours for propagation)

### Step 10: Set Up Route 53
1. Go to [Route 53 Console](https://console.aws.amazon.com/route53/)
2. Click "Create hosted zone"
3. Domain name: `yourdomain.com`
4. Create hosted zone
5. **Note the 4 name servers** - you'll need these for GoDaddy

### Step 11: Update GoDaddy DNS
1. Log into GoDaddy
2. Go to your domain settings
3. Change name servers to the 4 Route 53 name servers
4. Add the SSL certificate CNAME records from Step 9

### Step 12: Create DNS Records in Route 53
1. In your Route 53 hosted zone
2. Create record:
   - Record type: A
   - Name: leave blank (for root domain)
   - Alias: Yes
   - Route traffic to: CloudFront distribution
   - Select your distribution
3. Create another record:
   - Record type: CNAME
   - Name: www
   - Value: your CloudFront distribution domain

## Phase 4: GitHub Actions Setup (10 minutes)

### Step 13: Create IAM User for GitHub
1. Go to [IAM Console](https://console.aws.amazon.com/iam/)
2. Create new user: `github-actions-user`
3. Attach policies:
   - `AmazonS3FullAccess`
   - `CloudFrontFullAccess`
4. Create access key
5. **Save the Access Key ID and Secret Access Key**

### Step 14: Add GitHub Secrets
1. Go to your GitHub repository
2. Settings → Secrets and variables → Actions
3. Add these secrets:
   - `AWS_ACCESS_KEY_ID`: Your IAM user access key
   - `AWS_SECRET_ACCESS_KEY`: Your IAM user secret key
   - `S3_BUCKET_NAME`: Your bucket name
   - `CLOUDFRONT_DISTRIBUTION_ID`: From Step 7

### Step 15: Test Deployment
```bash
git add .
git commit -m "Trigger GitHub Actions deployment"
git push origin main
```

Check the Actions tab in GitHub to see the deployment progress.

## Phase 5: Verification (5 minutes)

### Step 16: Test Everything
1. Wait for CloudFront deployment (15-20 minutes)
2. Test your CloudFront URL
3. Test your custom domain (after DNS propagation)
4. Verify SSL certificate is working (https://)
5. Test contact form submission
6. Check mobile responsiveness

## Timeline Summary
- AWS setup: 30-45 minutes
- DNS propagation: 10 minutes - 48 hours
- Total active work: ~1 hour

## What You Need Ready
1. Your domain name from GoDaddy
2. AWS account with payment method
3. GitHub repository access
4. About 1 hour of focused time

## Cost Estimate
- Monthly: $2-10 for typical small business traffic
- Setup: $0 (all services used are in free tier initially)

---

**Ready to start? Let me know your domain name and I'll help you through each step!**