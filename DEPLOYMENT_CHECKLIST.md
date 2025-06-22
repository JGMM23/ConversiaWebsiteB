# Deployment Checklist for conversia-ai.io

## Pre-Deployment (Complete these in Replit)

### ✅ Code Preparation
- [x] Database cleanup completed (removed PostgreSQL dependencies)
- [x] Design tokens implemented for consistent styling
- [x] HubSpot integration working for contact forms
- [x] All components renamed for better maintainability
- [x] Build process tested (`npm run build`)

### ✅ Environment Setup
- [ ] GitHub repository created
- [ ] Code pushed to GitHub main branch
- [ ] Environment variables documented

## AWS Amplify Setup

### Step 1: Repository Connection
- [ ] AWS Amplify console accessed
- [ ] GitHub repository connected
- [ ] Main branch selected for deployment
- [ ] Build settings verified (should auto-detect from amplify.yml)

### Step 2: Environment Variables
Add these in Amplify Environment Variables:
- [ ] `NODE_ENV` = `production`
- [ ] `HUBSPOT_API_KEY` = [Your HubSpot API Key]

### Step 3: Domain Configuration
- [ ] Custom domain added in Amplify
- [ ] DNS records configured for conversia-ai.io:
  - [ ] CNAME: `www` → [amplify-domain]
  - [ ] A/ALIAS: `@` → [amplify-domain]
- [ ] SSL certificate status: Pending/Issued

### Step 4: Deployment
- [ ] Initial deployment successful
- [ ] Build logs reviewed (no errors)
- [ ] Website accessible at temporary Amplify URL
- [ ] Website accessible at conversia-ai.io (after DNS propagation)

## Post-Deployment Testing

### Functionality Tests
- [ ] Homepage loads correctly
- [ ] All navigation links work
- [ ] Hero section displays properly
- [ ] Service offerings section visible
- [ ] Healthcare solutions section functional
- [ ] About section renders correctly
- [ ] Company info section displays
- [ ] Footer links operational

### Contact Form Testing
- [ ] Demo form accessible at /get-demo
- [ ] Form validation working
- [ ] HubSpot integration functional
- [ ] Form submission creates contact in HubSpot
- [ ] Success message displays after submission
- [ ] Error handling works for invalid inputs

### Performance & SEO
- [ ] Page load speed acceptable (<3 seconds)
- [ ] Mobile responsiveness verified
- [ ] SSL certificate active (https://)
- [ ] Meta tags and descriptions present
- [ ] Google Analytics setup (optional)

### Cross-Browser Testing
- [ ] Chrome desktop
- [ ] Firefox desktop
- [ ] Safari desktop
- [ ] Chrome mobile
- [ ] Safari mobile

## Ongoing Workflow

### Development Process
1. [ ] Make changes in Replit
2. [ ] Test changes in Replit preview
3. [ ] Commit changes with descriptive message
4. [ ] Push to GitHub main branch
5. [ ] Monitor Amplify deployment
6. [ ] Verify changes at conversia-ai.io

### Monitoring Setup
- [ ] Set up uptime monitoring
- [ ] Configure error alerting
- [ ] Analytics tracking implemented
- [ ] Performance monitoring active

## Emergency Procedures

### Rollback Process
1. [ ] Access Amplify console
2. [ ] Go to deployment history
3. [ ] Select previous successful deployment
4. [ ] Click "Redeploy this version"

### Troubleshooting Steps
1. [ ] Check Amplify build logs
2. [ ] Verify environment variables
3. [ ] Test HubSpot API connectivity
4. [ ] Review DNS configuration
5. [ ] Contact AWS support if needed

## Contact Information

- **Domain Registrar**: [Where conversia-ai.io is registered]
- **DNS Provider**: [Current DNS provider]
- **AWS Account**: [Account email/ID]
- **GitHub Repository**: [Repository URL]
- **HubSpot Account**: [Account details]

## Notes

- DNS propagation can take 24-48 hours
- Amplify deployments typically complete in 2-3 minutes
- Always test changes in Replit before pushing to production
- Keep this checklist updated as the deployment evolves

---

**Last Updated**: [Current Date]
**Deployment Status**: [Pending/In Progress/Complete]
**Domain Status**: [Pending/Active]