# AWS Deployment Guide: S3 + CloudFront + Route 53

This guide will help you deploy your Conversia AI website using AWS S3 for hosting, CloudFront for CDN, and Route 53 for DNS management with your GoDaddy domain.

## Architecture Overview

We'll use:
- **S3**: Static website hosting
- **CloudFront**: Global CDN for fast content delivery
- **Route 53**: DNS management and domain routing
- **Certificate Manager**: SSL certificates
- **GitHub Actions**: Automated deployment pipeline

## Prerequisites

1. AWS Account
2. GitHub repository with your code
3. GoDaddy domain
4. Node.js application (already configured)

## Step 1: Prepare Your Repository

Your current project structure is ready for deployment. Key files:
- `package.json` - Contains build scripts
- `vite.config.ts` - Vite configuration
- `server/index.ts` - Express server
- Built-in HubSpot integration

## Step 2: Set Up S3 Bucket

### 2.1 Create S3 Bucket
1. Go to AWS Console → S3
2. Click "Create bucket"
3. Bucket name: `conversia-ai-website` (must be globally unique)
4. Region: `us-east-1` (required for CloudFront)
5. Uncheck "Block all public access"
6. Enable "Static website hosting"
7. Index document: `index.html`
8. Error document: `index.html` (for SPA routing)

### 2.2 Configure Bucket Policy
Add this bucket policy (replace `conversia-ai-website` with your bucket name):

```json
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "PublicReadGetObject",
            "Effect": "Allow",
            "Principal": "*",
            "Action": "s3:GetObject",
            "Resource": "arn:aws:s3:::conversia-ai-website/*"
        }
    ]
}
```

## Step 3: Set Up CloudFront Distribution

### 3.1 Create Distribution
1. Go to AWS Console → CloudFront
2. Click "Create distribution"
3. Origin domain: Select your S3 bucket
4. Origin access: Use OAC (Origin Access Control)
5. Default root object: `index.html`
6. Error pages: Add custom error response
   - HTTP Error Code: 404
   - Response page path: `/index.html`
   - HTTP Response Code: 200

### 3.2 Configure Caching
- Caching behavior: Caching optimized for S3
- Cache policy: Managed-CachingOptimized
- Compress objects automatically: Yes

## Step 4: Request SSL Certificate

### 4.1 AWS Certificate Manager
1. Go to AWS Console → Certificate Manager
2. Request public certificate
3. Domain names: 
   - `yourdomain.com`
   - `www.yourdomain.com`
4. Validation: DNS validation
5. Add CNAME records to GoDaddy DNS (provided by AWS)

## Step 5: Set Up Route 53

### 5.1 Create Hosted Zone
1. Go to AWS Console → Route 53
2. Create hosted zone for your domain
3. Note the 4 name servers provided

### 5.2 Update GoDaddy Name Servers
1. Log into GoDaddy domain management
2. Change name servers to Route 53 values:
   - `ns-xxx.awsdns-xx.com`
   - `ns-xxx.awsdns-xx.co.uk` 
   - `ns-xxx.awsdns-xx.net`
   - `ns-xxx.awsdns-xx.org`

### 5.3 Create DNS Records
In Route 53, create:
- A record: `@` → CloudFront distribution
- CNAME record: `www` → CloudFront distribution

## Step 5: SSL Certificate

Amplify automatically provisions SSL certificates for custom domains.
- Certificate validation happens automatically
- HTTPS redirect is enabled by default

## Step 6: GitHub Actions Deployment

GitHub Actions will automatically:
- Build the website on push to main branch
- Deploy to S3 bucket
- Invalidate CloudFront cache
- Provide deployment status

Environment variables needed in GitHub Secrets:
- `AWS_ACCESS_KEY_ID`
- `AWS_SECRET_ACCESS_KEY`
- `S3_BUCKET_NAME`
- `CLOUDFRONT_DISTRIBUTION_ID`

## Step 7: Performance Optimizations

### 7.1 Enable Caching
- Static assets cached automatically via CloudFront
- Configure cache headers in your Express server

### 7.2 Compression
Your Vite build already includes:
- Asset minification
- Tree shaking
- Code splitting

## Troubleshooting

### Common Issues:

1. **Build Failures**
   - Check Node.js version compatibility
   - Verify all dependencies in package.json
   - Review build logs in Amplify Console

2. **Domain Not Working**
   - DNS propagation can take 24-48 hours
   - Verify DNS records in GoDaddy
   - Check SSL certificate status

3. **Environment Variables**
   - Ensure HUBSPOT_API_KEY is set
   - Restart deployment after adding variables

## Cost Estimation

S3 + CloudFront + Route 53 pricing (approximate):
- S3 storage: $0.023/GB per month
- CloudFront data transfer: $0.085/GB (first 10TB)
- Route 53 hosted zone: $0.50/month
- Certificate Manager: Free

Expected monthly cost for small-medium traffic: $2-10

## Security Best Practices

1. Enable branch protection in GitHub
2. Use environment variables for secrets
3. Enable AWS CloudTrail for audit logging
4. Regular dependency updates via Dependabot

## Monitoring & Analytics

1. Enable CloudWatch logs
2. Set up CloudWatch alarms for:
   - High error rates
   - Slow response times
   - Unusual traffic patterns

## Next Steps After Deployment

1. Test all functionality on production URL
2. Set up monitoring and alerts
3. Configure backup strategy
4. Document deployment process for team

## Additional AWS Services (Optional)

Consider adding:
- **Route 53**: Advanced DNS management
- **CloudFront**: Additional CDN customization
- **WAF**: Web application firewall
- **Certificate Manager**: SSL certificate management

## Support Resources

- AWS Amplify Documentation
- GitHub Actions for advanced CI/CD
- AWS Support for technical issues