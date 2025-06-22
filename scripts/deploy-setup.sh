#!/bin/bash

# Conversia AI - AWS Deployment Setup Script
echo "🚀 Setting up Conversia AI for AWS deployment..."

# Check if required files exist
echo "📋 Checking deployment configuration..."

if [ ! -f "package.json" ]; then
    echo "❌ package.json not found"
    exit 1
fi

if [ ! -f "amplify.yml" ]; then
    echo "❌ amplify.yml not found"
    exit 1
fi

# Install dependencies
echo "📦 Installing dependencies..."
npm ci

# Run tests (if any)
echo "🧪 Running tests..."
npm test --if-present

# Build the application
echo "🔨 Building application..."
npm run build

# Check build output
if [ ! -d "dist" ]; then
    echo "❌ Build failed - dist directory not created"
    exit 1
fi

echo "✅ Build successful"

# Generate deployment checklist
echo "📝 Creating deployment checklist..."
cat > DEPLOYMENT_CHECKLIST.md << EOF
# Deployment Checklist

## Pre-deployment
- [ ] Code committed to GitHub
- [ ] Environment variables documented
- [ ] Build tested locally
- [ ] Dependencies updated

## AWS Setup
- [ ] Amplify app created
- [ ] GitHub repository connected
- [ ] Build settings configured
- [ ] Environment variables set

## Domain Setup
- [ ] Domain added in Amplify
- [ ] DNS records updated in GoDaddy
- [ ] SSL certificate verified

## Post-deployment
- [ ] All pages load correctly
- [ ] Contact form works
- [ ] HubSpot integration working
- [ ] Performance tested
- [ ] Monitoring configured

## Environment Variables Required
- HUBSPOT_API_KEY
- NODE_ENV=production
EOF

echo "✅ Deployment setup complete!"
echo "📄 Review DEPLOYMENT_CHECKLIST.md before proceeding"
echo "📖 See AWS_GITHUB_DEPLOYMENT.md for detailed instructions"