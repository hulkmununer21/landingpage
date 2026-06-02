# Deployment Guide - Logistics Pro

This guide provides step-by-step instructions for deploying Logistics Pro to Vercel.

## Prerequisites

- GitHub account with the repository pushed
- Vercel account (free tier available)
- Twilio account with API credentials
- SendGrid account with API key

## Step 1: Prepare Your Repository

### 1.1 Initialize Git (if not already done)

```bash
cd /workspaces/landingpage
git init
git add .
git commit -m "Initial commit: Logistics Pro complete website"
git remote add origin https://github.com/yourusername/landingpage.git
git branch -M main
git push -u origin main
```

### 1.2 Verify .gitignore

Make sure `.env.local` is in `.gitignore` - it should NOT be committed:

```bash
cat .gitignore | grep ".env"
```

## Step 2: Set Up Vercel

### 2.1 Create Vercel Account

1. Go to [vercel.com](https://vercel.com)
2. Click "Sign Up"
3. Choose "Continue with GitHub"
4. Authorize Vercel to access your repositories

### 2.2 Import Project

1. Click "Add New..." → "Project"
2. Select your `landingpage` repository
3. Click "Import"

## Step 3: Configure Environment Variables

### 3.1 In Vercel Dashboard

1. After importing, you'll be on the "Configure Project" page
2. Scroll to "Environment Variables"

### 3.2 Add Each Variable

Add the following variables from your `.env.local`:

**Twilio Configuration:**
- `NEXT_PUBLIC_TWILIO_ACCOUNT_SID`: Your Twilio Account SID
- `TWILIO_AUTH_TOKEN`: Your Twilio Auth Token
- `TWILIO_PHONE_NUMBER`: Your Twilio phone number

**SendGrid Configuration:**
- `SENDGRID_API_KEY`: Your SendGrid API Key
- `SENDGRID_FROM_EMAIL`: Your sender email
- `SENDGRID_FROM_NAME`: Your company name

**Application Configuration:**
- `NEXT_PUBLIC_APP_URL`: Your deployment URL (e.g., https://logistics-pro.vercel.app)
- `NEXT_PUBLIC_COMPANY_EMAIL`: Your support email
- `NEXT_PUBLIC_COMPANY_PHONE`: Your support phone
- `NEXT_PUBLIC_DATA_RETENTION_DAYS`: 90

**Important:** Click "Select environment" and choose:
- For production variables: Select "Production"
- For all variables: Select all environments

### 3.3 Example Environment Variables

```
NEXT_PUBLIC_TWILIO_ACCOUNT_SID = ACxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
TWILIO_AUTH_TOKEN = (keep this secret!)
TWILIO_PHONE_NUMBER = +1234567890
SENDGRID_API_KEY = SG.xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
SENDGRID_FROM_EMAIL = noreply@logistics-pro.com
SENDGRID_FROM_NAME = Logistics Pro
NEXT_PUBLIC_APP_URL = https://logistics-pro.vercel.app
NEXT_PUBLIC_COMPANY_EMAIL = hello@logistics-pro.com
NEXT_PUBLIC_COMPANY_PHONE = +1-800-LOGISTICS
NEXT_PUBLIC_DATA_RETENTION_DAYS = 90
```

## Step 4: Deploy

### 4.1 Deploy to Vercel

1. Click "Deploy" button
2. Wait for deployment to complete (usually 2-3 minutes)
3. You should see "Congratulations! Your site is deployed!"

### 4.2 View Your Site

- Click "Visit" to see your live website
- Or go to `https://yourproject-name.vercel.app`

## Step 5: Configure Custom Domain (Optional)

### 5.1 Add Domain

1. Go to Project Settings → Domains
2. Click "Add Domain"
3. Enter your domain (e.g., logistics-pro.com)
4. Follow DNS configuration instructions

### 5.2 DNS Configuration

Add CNAME record to your DNS provider:
- Name: `www`
- Value: `cname.vercel.app`

Or use Vercel's nameservers for easier setup.

## Step 6: Test Your Deployment

### 6.1 Test SMS

1. Go to `/contact` page
2. Fill out form with your phone number
3. Opt-in to SMS
4. Submit and check if you receive SMS

### 6.2 Test Email

1. Check your email for contact form submissions
2. Verify emails arrive within minutes

### 6.3 Test Other Features

- [ ] Homepage loads correctly
- [ ] Tracking page works with example tracking number
- [ ] All compliance pages are accessible
- [ ] Navigation works on mobile
- [ ] Forms submit successfully
- [ ] API endpoints respond (check console for errors)

## Step 7: Set Up Monitoring (Optional)

### 7.1 Enable Analytics

In Vercel Dashboard:
1. Go to Analytics tab
2. Enable Web Analytics
3. Monitor traffic and performance

### 7.2 Set Up Error Tracking

Install Sentry for error monitoring:

```bash
npm install @sentry/nextjs
```

Create `sentry.config.js` and configure error tracking.

## Step 8: Domain & SSL

### 8.1 SSL Certificate

Vercel automatically provides SSL certificate for your domain.

### 8.2 Enforce HTTPS

Add to `vercel.json`:
```json
"redirects": [
  {
    "source": "/",
    "destination": "https://:host:port:pathname",
    "permanent": false
  }
]
```

## Continuous Deployment

### Enable Auto-Deploy

By default, Vercel auto-deploys on every push to main branch.

### Test Deployments

For testing before production:
1. Create a `develop` branch
2. Create a preview deployment for that branch
3. Test changes before merging to main

## Troubleshooting Deployment

### Issue: Build Fails

**Solution:**
```bash
# Clear build cache in Vercel
# Go to Settings → Git → Clear Build Cache
# Then redeploy
```

### Issue: Environment Variables Not Working

**Solution:**
1. Verify variables are set in Vercel dashboard
2. Make sure variable names match exactly (case-sensitive)
3. Redeploy after changing variables
4. Check that variables are set for "Production" environment

### Issue: SMS/Email Not Sending

**Solution:**
1. Verify Twilio/SendGrid credentials
2. Check API keys haven't expired
3. Review API rate limits
4. Check function logs in Vercel dashboard

### Issue: Custom Domain Not Working

**Solution:**
1. Wait 24-48 hours for DNS to propagate
2. Verify DNS records are correct
3. Check domain is not already in use
4. Contact domain registrar support

## Monitoring & Maintenance

### Weekly Tasks

- [ ] Monitor analytics for traffic
- [ ] Check error logs for issues
- [ ] Review API quotas (Twilio/SendGrid)
- [ ] Test SMS/email sending

### Monthly Tasks

- [ ] Review compliance pages for accuracy
- [ ] Check for security updates
- [ ] Monitor costs and billing

### Quarterly Tasks

- [ ] Audit privacy policy compliance
- [ ] Review data retention practices
- [ ] Test disaster recovery plan

## Scaling Considerations

As traffic grows, consider:

1. **CDN**: Vercel provides global CDN by default
2. **Database**: Add for user accounts, messages, tracking data
3. **Rate Limiting**: Implement to prevent abuse
4. **Caching**: Configure Redis for improved performance
5. **Load Testing**: Test under high traffic

## Security Checklist

Before going live:

- [ ] All environment variables configured
- [ ] HTTPS enabled and working
- [ ] Security headers in place (vercel.json)
- [ ] SMS/Email rate limiting enabled
- [ ] Input validation working
- [ ] Privacy policy updated
- [ ] Terms of Service reviewed
- [ ] GDPR compliance verified
- [ ] Error logging configured
- [ ] Monitoring enabled
- [ ] Backup plan in place
- [ ] Support contact working

## Support

For Vercel deployment support:
- [Vercel Docs](https://vercel.com/docs)
- [Vercel Community](https://github.com/vercel/vercel)
- [Vercel Support](https://vercel.com/help)

For application-specific issues:
- Check error logs in Vercel dashboard
- Review application logs with `vercel logs`
- Contact your development team

---

**Deployment Complete!** 🎉

Your Logistics Pro website is now live on Vercel. Monitor the dashboard regularly and keep your environment variables up to date.
