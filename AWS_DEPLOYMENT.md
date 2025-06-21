# AWS Amplify Deployment Guide

## Prerequisites
1. AWS Account with Amplify access
2. GitHub/GitLab account for repository hosting
3. Domain name (optional, for custom domain)

## Step 1: Push Code to Git Repository

1. Create a new repository on GitHub/GitLab
2. From your local machine or Replit Shell:
```bash
git init
git add .
git commit -m "Initial commit - Conversia AI website"
git remote add origin https://github.com/yourusername/conversia-ai.git
git push -u origin main
```

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
- `DATABASE_URL`: Your PostgreSQL connection string
- `NODE_ENV`: `production`
- Any other secrets from your Replit environment

## Step 5: Database Setup

### Option A: Use Neon (Recommended)
1. Create account at neon.tech
2. Create new database
3. Copy connection string to Amplify environment variables

### Option B: Use AWS RDS
1. Create PostgreSQL instance in RDS
2. Configure security groups for access
3. Update DATABASE_URL in environment variables

## Step 6: Deploy

1. Click "Save and deploy" in Amplify
2. Monitor build logs for any issues
3. Your app will be available at the generated URL

## Custom Domain (Optional)

1. In Amplify console, go to "Domain management"
2. Add your custom domain
3. Follow DNS configuration instructions
4. SSL certificate will be automatically provisioned

## Ongoing Deployment

Once set up, every push to your main branch will trigger automatic deployment.

## Cost Estimate
- Amplify hosting: $1-10/month
- Neon database: Free tier available
- Custom domain: ~$12/year for .com

## Troubleshooting

If build fails, check:
1. Node.js version compatibility
2. Environment variables are set correctly
3. Database connection string is valid
4. All dependencies are in package.json