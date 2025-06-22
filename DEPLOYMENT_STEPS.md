# Quick Deployment Steps for Conversia AI

## Step-by-Step AWS Amplify Deployment

### 1. Push Code to GitHub
```bash
git add .
git commit -m "Prepare for AWS deployment"
git push origin main
```

### 2. Create AWS Amplify App
1. Log into AWS Console
2. Navigate to AWS Amplify
3. Click "New app" → "Host web app"
4. Select "GitHub" as source provider
5. Authorize GitHub and select your repository
6. Choose branch: `main` or `master`
7. Amplify will auto-detect build settings from `amplify.yml`

### 3. Configure Environment Variables
In Amplify Console → App Settings → Environment variables, add:
- `HUBSPOT_API_KEY`: Your HubSpot API key
- `NODE_ENV`: `production`

### 4. Deploy
Click "Save and deploy" - Amplify will:
- Clone your repository
- Install dependencies (`npm ci`)
- Build frontend (`npm run build`)
- Build backend (`npm run build:server`)
- Deploy to CloudFront CDN

### 5. Custom Domain Setup (GoDaddy)

#### In AWS Amplify:
1. Go to Domain management → Add domain
2. Enter your domain (e.g., `yoursite.com`)
3. AWS will provide DNS records

#### In GoDaddy DNS Management:
Add these records (use values provided by AWS):
```
Type: A
Name: @
Value: [AWS-provided-IP]

Type: CNAME  
Name: www
Value: [AWS-provided-domain]
```

### 6. Verify Deployment
- Check build logs in Amplify Console
- Test your live URL
- Verify contact form sends to HubSpot
- Confirm Login button opens staging app

## Expected Timeline
- Initial deployment: 5-10 minutes
- DNS propagation: 10 minutes - 48 hours
- SSL certificate: Automatic (5-10 minutes)

## Monthly Cost Estimate
- Small traffic website: $5-15/month
- Includes hosting, CDN, SSL, build minutes

## Support
If you encounter issues:
1. Check build logs in Amplify Console
2. Verify environment variables are set
3. Confirm GitHub repository is accessible
4. Review AWS_GITHUB_DEPLOYMENT.md for troubleshooting