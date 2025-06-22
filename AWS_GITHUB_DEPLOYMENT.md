# AWS Deployment Guide with GitHub Integration

This guide will help you deploy your Conversia AI website to AWS using GitHub integration and connect your GoDaddy domain.

## Overview

We'll use AWS Amplify for hosting, which provides:
- Automatic deployments from GitHub
- Built-in CI/CD pipeline
- SSL certificates
- Custom domain support
- CDN (CloudFront) integration

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

## Step 2: Set Up AWS Amplify

### 2.1 Create Amplify App

1. Go to AWS Console → Amplify
2. Click "New app" → "Host web app"
3. Choose "GitHub" as source
4. Connect your GitHub account
5. Select your repository and branch (main/master)

### 2.2 Configure Build Settings

Use these build settings in Amplify:

```yaml
version: 1
frontend:
  phases:
    preBuild:
      commands:
        - npm ci
    build:
      commands:
        - npm run build
  artifacts:
    baseDirectory: dist
    files:
      - '**/*'
  cache:
    paths:
      - node_modules/**/*
backend:
  phases:
    preBuild:
      commands:
        - npm ci
    build:
      commands:
        - npm run build:server
  artifacts:
    baseDirectory: dist-server
    files:
      - '**/*'
```

## Step 3: Environment Variables

Set these environment variables in Amplify Console:

1. Go to App Settings → Environment variables
2. Add:
   - `HUBSPOT_API_KEY` = (your HubSpot API key)
   - `NODE_ENV` = production

## Step 4: Custom Domain Setup (GoDaddy)

### 4.1 Add Domain in Amplify

1. In Amplify Console → Domain management
2. Click "Add domain"
3. Enter your GoDaddy domain (e.g., conversia-ai.com)
4. Choose to redirect www to root domain (recommended)

### 4.2 Update DNS in GoDaddy

1. Log into GoDaddy DNS Management
2. Add these records (provided by Amplify):

```
Type: CNAME
Name: www
Value: [amplify-provided-url]

Type: A
Name: @
Value: [amplify-provided-ip]
```

Note: Amplify will provide specific values during domain setup

## Step 5: SSL Certificate

Amplify automatically provisions SSL certificates for custom domains.
- Certificate validation happens automatically
- HTTPS redirect is enabled by default

## Step 6: Continuous Deployment

Once connected to GitHub:
- Every push to main branch triggers automatic deployment
- Build logs available in Amplify Console
- Rollback capability available

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

AWS Amplify pricing (approximate):
- Build minutes: $0.01 per minute
- Data transfer: $0.15/GB
- Storage: $0.023/GB per month
- Custom domain: No additional cost

Expected monthly cost for small-medium traffic: $5-20

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