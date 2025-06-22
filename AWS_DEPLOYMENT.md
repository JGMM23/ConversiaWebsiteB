# AWS Amplify Deployment Guide for conversia-ai.io

## Prerequisites
1. AWS Account with Amplify access
2. GitHub account for repository hosting
3. Domain: conversia-ai.io (already owned)
4. HubSpot API key for contact form integration

## Step 1: Set Up GitHub Repository

1. Create a new repository on GitHub named `conversia-ai-website`
2. In Replit Shell, run:
```bash
git init
git add .
git commit -m "Initial commit - Conversia AI website"
git remote add origin https://github.com/YOUR_USERNAME/conversia-ai-website.git
git branch -M main
git push -u origin main
```

Note: Replace YOUR_USERNAME with your actual GitHub username.

## Step 2: Set Up AWS Amplify

1. Log into AWS Console
2. Navigate to AWS Amplify
3. Click "New app" → "Host web app"
4. Connect your Git repository
5. Select your repository and main branch

## Step 3: Configure Build Settings

Amplify will auto-detect your build settings from `amplify.yml`. Verify these settings:
- Build command: `npm run build`
- Output directory: `dist`
- Node.js version: Latest LTS

## Step 4: Set Environment Variables

In Amplify console, add these environment variables:
- `NODE_ENV`: `production`
- `HUBSPOT_API_KEY`: Your HubSpot private app API key (required for contact form)

Note: Database environment variables are no longer needed as we've streamlined to HubSpot-only integration.

## Step 5: Custom Domain Setup for conversia-ai.io

1. In Amplify console, go to "Domain management"
2. Click "Add domain"
3. Enter `conversia-ai.io`
4. Configure DNS settings:
   - Add CNAME record: `www` pointing to your Amplify domain
   - Add A/ALIAS record: `@` (root) pointing to your Amplify domain
5. AWS will automatically provision SSL certificate
6. Verification may take 24-48 hours

## Step 6: Deploy

1. Click "Save and deploy" in Amplify
2. Monitor build logs for any issues
3. Your app will be available at the generated Amplify URL
4. Once DNS propagates, it will be accessible at conversia-ai.io

## Step 7: Ongoing Development Workflow

### From Replit:
1. Make changes to your website in Replit
2. Test changes using the Replit preview
3. When ready to deploy:
```bash
git add .
git commit -m "Description of changes"
git push origin main
```
4. AWS Amplify will automatically detect the push and redeploy
5. Changes will be live at conversia-ai.io within 2-3 minutes

### Branch Strategy (Recommended):
- `main` branch: Production deployment to conversia-ai.io
- `development` branch: Testing changes before production
- Create pull requests to merge development into main

## Cost Estimate
- Amplify hosting: $1-5/month (based on traffic)
- Domain (conversia-ai.io): Already owned
- SSL Certificate: Free (included with Amplify)
- Total monthly cost: $1-5

## Troubleshooting

If build fails, check:
1. Node.js version compatibility (use Node.js 18 or 20)
2. HUBSPOT_API_KEY environment variable is set correctly
3. All dependencies are in package.json
4. Build command `npm run build` completes successfully in Replit

## Benefits of This Setup

1. **Professional Domain**: Your website will be accessible at conversia-ai.io
2. **Easy Updates**: Continue developing in Replit, push to GitHub when ready
3. **Automatic Deployment**: Every push triggers automatic rebuild and deployment
4. **High Performance**: AWS Amplify provides CDN and global distribution
5. **SSL Security**: Automatic SSL certificate for secure HTTPS
6. **Cost Effective**: Minimal monthly costs compared to traditional hosting

## Next Steps After Deployment

1. Set up Google Analytics for website tracking
2. Configure SEO metadata for better search rankings
3. Set up monitoring for uptime and performance
4. Create staging environment for testing major changes