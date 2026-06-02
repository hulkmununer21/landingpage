# Quick Start Guide - Logistics Pro

Get your Logistics Pro website up and running in minutes!

## ⚡ 5-Minute Setup

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure Environment
```bash
cp .env.example .env.local
# Edit .env.local with your credentials
```

### 3. Get Your Credentials

#### Twilio (SMS)
1. Go to [twilio.com](https://www.twilio.com)
2. Sign up for free account
3. Get your Account SID and Auth Token from dashboard
4. Buy a phone number (or use trial number)

#### SendGrid (Email)
1. Go to [sendgrid.com](https://sendgrid.com)
2. Sign up for free account
3. Generate API key from Settings
4. Verify your sender email

### 4. Fill `.env.local`
```env
NEXT_PUBLIC_TWILIO_ACCOUNT_SID=ACxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
TWILIO_AUTH_TOKEN=your_token_here
TWILIO_PHONE_NUMBER=+1234567890
SENDGRID_API_KEY=SG.xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
SENDGRID_FROM_EMAIL=noreply@yourcompany.com
SENDGRID_FROM_NAME=Your Company
NEXT_PUBLIC_APP_URL=http://localhost:3000
NEXT_PUBLIC_COMPANY_EMAIL=hello@yourcompany.com
NEXT_PUBLIC_COMPANY_PHONE=+1-800-YOUR-PHONE
```

### 5. Start Development Server
```bash
npm run dev
```

### 6. Open in Browser
Visit [http://localhost:3000](http://localhost:3000)

## 🎯 Key Pages to Test

| Page | URL | What to Test |
|------|-----|--------------|
| Home | `/` | Hero section, navigation, features |
| Services | `/services` | Service cards, comparison table |
| Tracking | `/tracking` | Try example: LP123456789 |
| Contact | `/contact` | Form submission, consent checkboxes |
| Privacy Policy | `/privacy-policy` | All compliance sections |
| Terms | `/terms-of-service` | Shipping terms |
| GDPR | `/gdpr` | Data subject rights |
| Cookie Policy | `/cookie-policy` | Cookie management |
| Accessibility | `/accessibility` | WCAG compliance |

## 🧪 Testing SMS & Email

### Test SMS Sending
1. Go to `/contact`
2. Fill form with your phone number
3. Check "I consent to receive SMS"
4. Submit form
5. You should receive an SMS within seconds

### Test Email Sending
1. Fill contact form with any email
2. Submit the form
3. Check your email inbox
4. You should receive confirmation email

## 📁 Project Structure
```
/app
  /api/send-sms
  /api/send-email
  /privacy-policy
  /terms-of-service
  /gdpr
  /data-processing
  /cookie-policy
  /accessibility
  /contact
  /services
  /tracking
  page.tsx (Home)
  layout.tsx

/components
  Header.tsx
  Footer.tsx
  /sections (Hero, Features, Services, etc.)
```

## 🚀 Customization Tips

### Change Company Name
Edit `Header.tsx` and `Footer.tsx`:
```typescript
<span className="font-bold text-xl">Your Company Name</span>
```

### Update Colors
Edit `tailwind.config.ts`:
```typescript
colors: {
  primary: '#your-color',
  secondary: '#your-color',
  accent: '#your-color',
}
```

### Edit Compliance Pages
Each page is a simple React component:
- `/app/privacy-policy/page.tsx`
- `/app/terms-of-service/page.tsx`
- etc.

### Update Company Info
Edit `.env.local`:
```env
NEXT_PUBLIC_COMPANY_EMAIL=your@email.com
NEXT_PUBLIC_COMPANY_PHONE=+1-800-YOUR-PHONE
```

## 📦 Build for Production

### Build
```bash
npm run build
```

### Test Production Build
```bash
npm run start
```

### Deploy to Vercel
See [DEPLOYMENT.md](./DEPLOYMENT.md)

## 🔒 Security Reminders

- ✅ Never commit `.env.local` (it's in .gitignore)
- ✅ Keep API keys secret
- ✅ Use HTTPS in production
- ✅ Enable rate limiting on APIs
- ✅ Monitor API usage

## 📚 Documentation

- [README.md](./README.md) - Full project overview
- [DEPLOYMENT.md](./DEPLOYMENT.md) - Deploy to Vercel
- [COMPLIANCE.md](./COMPLIANCE.md) - Compliance details
- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)

## 🆘 Troubleshooting

### Port 3000 already in use
```bash
npm run dev -- -p 3001
```

### Dependencies not installing
```bash
rm -rf node_modules package-lock.json
npm install
```

### Build errors
```bash
npm run build
# Check error messages carefully
```

### SMS not working
- Check credentials in `.env.local`
- Verify Twilio account has money/credits
- Check phone number format: +1234567890

### Emails not working
- Verify SendGrid API key is correct
- Make sure sender email is verified in SendGrid
- Check spam folder

## ✨ Next Steps

1. **Customize** - Add your company branding
2. **Test** - Send test SMS and emails
3. **Deploy** - Follow DEPLOYMENT.md
4. **Monitor** - Set up error logging (Sentry)
5. **Maintain** - Keep dependencies updated

## 💡 Pro Tips

- Use browser DevTools to debug components
- Check Network tab for API calls
- Use React DevTools browser extension
- Read error messages carefully
- Check console logs for clues
- Test on mobile devices
- Use Lighthouse for performance audits

## 🎓 Learning Resources

New to Next.js? Check these:
- [Next.js Learn Course](https://nextjs.org/learn)
- [Next.js Examples](https://github.com/vercel/next.js/tree/canary/examples)
- [TypeScript Handbook](https://www.typescriptlang.org/docs)
- [Tailwind CSS Tutorial](https://tailwindcss.com/docs/installation)

## 📞 Support

For issues:
1. Check error messages in terminal/console
2. Review [README.md](./README.md)
3. Check [COMPLIANCE.md](./COMPLIANCE.md)
4. Review [DEPLOYMENT.md](./DEPLOYMENT.md)

---

**Ready to go?** Run `npm run dev` and visit http://localhost:3000! 🚀
