# Replit to AWS Deployment Workflow

## Overview
This document outlines how to maintain your Conversia AI website on Replit while deploying to AWS Amplify with your custom domain conversia-ai.io.

## Architecture

```
Replit (Development) → GitHub (Version Control) → AWS Amplify (Production) → conversia-ai.io
```

## Daily Workflow

### 1. Development in Replit
- Continue developing your website in Replit as usual
- Use the "Start application" workflow to test changes locally
- Preview changes at the Replit URL before deploying

### 2. Deployment Process
When you're ready to deploy changes to production:

```bash
# In Replit Shell
git add .
git commit -m "Descriptive message about your changes"
git push origin main
```

### 3. Automatic AWS Deployment
- AWS Amplify automatically detects the GitHub push
- Builds and deploys your website within 2-3 minutes
- Changes become live at conversia-ai.io

## Git Commands Reference

### Initial Setup (One-time)
```bash
git init
git remote add origin https://github.com/YOUR_USERNAME/conversia-ai-website.git
git branch -M main
```

### Regular Updates
```bash
# Check status
git status

# Add all changes
git add .

# Commit with message
git commit -m "Update hero section styling"

# Push to production
git push origin main

# Check deployment status (optional)
git log --oneline -5
```

### Advanced Workflows

#### Feature Branch Development
For major changes, use branches:
```bash
# Create and switch to feature branch
git checkout -b feature/new-section

# Make changes, then:
git add .
git commit -m "Add new testimonials section"
git push origin feature/new-section

# Create pull request on GitHub, then merge to main
```

#### Emergency Rollback
If you need to quickly revert:
```bash
# Find the commit to revert to
git log --oneline

# Revert to specific commit
git reset --hard COMMIT_HASH
git push --force origin main
```

## Environment Management

### Replit Environment
- Keep all your secrets in Replit's environment variables
- Use for development and testing
- HubSpot API key should be configured here

### AWS Amplify Environment
- Only essential production environment variables
- `NODE_ENV=production`
- `HUBSPOT_API_KEY` (same as Replit)

## File Structure for Deployment

### Important Files
- `amplify.yml` - AWS build configuration
- `package.json` - Dependencies and build scripts
- `.gitignore` - Files to exclude from deployment
- `vite.config.ts` - Build configuration

### Excluded from Deployment (via .gitignore)
- `node_modules/`
- `.env` files
- Temporary files
- Development-only assets

## Monitoring Your Deployment

### AWS Amplify Console
1. Log into AWS Console
2. Navigate to Amplify
3. View your app dashboard
4. Monitor build status and logs

### Build Logs
- Success: Green checkmark, site updates automatically
- Failure: Red X, previous version remains live
- Check logs for specific error messages

### Domain Status
- Monitor SSL certificate status
- Check DNS propagation
- Verify domain redirects work correctly

## Common Issues and Solutions

### Build Failures
1. **Node.js Version Mismatch**
   - Ensure Amplify uses Node.js 18 or 20
   - Update amplify.yml if needed

2. **Missing Dependencies**
   - Run `npm install` in Replit before pushing
   - Verify all packages are in package.json

3. **Environment Variables**
   - Check HubSpot API key is correctly set
   - Verify no typos in variable names

### DNS Issues
1. **Domain Not Resolving**
   - Check DNS propagation (can take 24-48 hours)
   - Verify CNAME/A records are correct
   - Use DNS checker tools

2. **SSL Certificate Problems**
   - Wait for AWS to provision certificate
   - Check domain ownership verification
   - Contact AWS support if stuck

### Performance Issues
1. **Slow Loading**
   - Enable Amplify CDN features
   - Optimize images and assets
   - Review network requests

## Best Practices

### Code Management
- Commit frequently with descriptive messages
- Test all changes in Replit before pushing
- Use semantic versioning for major releases

### Security
- Never commit API keys or secrets
- Keep dependencies updated
- Monitor for security vulnerabilities

### Performance
- Optimize images before deployment
- Minimize bundle size
- Use efficient CSS and JavaScript

## Support Resources

### AWS Amplify Documentation
- [AWS Amplify Hosting](https://docs.aws.amazon.com/amplify/latest/userguide/)
- [Custom Domain Setup](https://docs.aws.amazon.com/amplify/latest/userguide/custom-domains.html)

### GitHub Documentation
- [Git Basics](https://git-scm.com/doc)
- [GitHub Workflow](https://guides.github.com/introduction/flow/)

### Troubleshooting Contacts
- AWS Support (for infrastructure issues)
- GitHub Support (for repository issues)
- HubSpot Support (for form integration issues)

---

This workflow ensures you can continue developing comfortably in Replit while maintaining a professional production deployment at conversia-ai.io.