# Quick Deployment Steps: S3 + CloudFront + Route 53

## Step-by-Step AWS Deployment

### 1. Create S3 Bucket
1. AWS Console → S3 → Create bucket
2. Name: `conversia-ai-website` (globally unique)
3. Region: `us-east-1`
4. Uncheck "Block all public access"
5. Enable static website hosting
6. Set index/error document to `index.html`

### 2. Create CloudFront Distribution
1. AWS Console → CloudFront → Create distribution
2. Origin: Your S3 bucket
3. Use Origin Access Control (OAC)
4. Default root object: `index.html`
5. Add error page: 404 → `/index.html` (200 response)

### 3. Request SSL Certificate
1. AWS Console → Certificate Manager
2. Request public certificate
3. Domains: `yourdomain.com`, `www.yourdomain.com`
4. DNS validation
5. Add CNAME records to GoDaddy

### 4. Set Up Route 53
1. AWS Console → Route 53 → Create hosted zone
2. Domain: `yourdomain.com`
3. Note the 4 name servers

### 5. Update GoDaddy Name Servers
1. GoDaddy domain management
2. Change name servers to Route 53 values
3. DNS propagation: 24-48 hours

### 6. Create DNS Records in Route 53
- A record: `@` → CloudFront distribution (alias)
- CNAME: `www` → CloudFront distribution

### 7. Set Up GitHub Actions
Add these secrets to GitHub repository:
- `AWS_ACCESS_KEY_ID`
- `AWS_SECRET_ACCESS_KEY` 
- `S3_BUCKET_NAME`
- `CLOUDFRONT_DISTRIBUTION_ID`

### 8. Deploy
```bash
git add .
git commit -m "Deploy to AWS S3"
git push origin main
```

GitHub Actions will automatically:
- Build the website
- Deploy to S3
- Invalidate CloudFront cache

## Expected Timeline
- S3 setup: 5 minutes
- CloudFront distribution: 15-20 minutes
- SSL certificate: 10-30 minutes
- DNS propagation: 10 minutes - 48 hours

## Monthly Cost Estimate
- S3 + CloudFront + Route 53: $2-10/month
- Much cheaper than managed hosting solutions

## Verification Checklist
- [ ] Website loads at CloudFront URL
- [ ] Custom domain works (after DNS propagation)
- [ ] HTTPS certificate active
- [ ] Contact form submits to HubSpot
- [ ] All pages accessible
- [ ] Mobile responsive