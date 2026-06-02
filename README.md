# Logistics Pro - Professional Logistics Landing Page

A complete, production-ready React/Next.js website for a logistics company with SMS and email capabilities, comprehensive compliance pages, and privacy-first design.

## 🚀 Features

### Frontend Pages
- **Home**: Hero section with CTA, features showcase, services overview
- **Services**: Detailed service descriptions with pricing and comparison table
- **Tracking**: Real-time package tracking with SMS/email preferences
- **Contact**: Contact form with consent management
- **Privacy Policy**: Comprehensive privacy policy with SMS/email compliance
- **Terms of Service**: Complete terms governing service usage
- **GDPR**: Full GDPR compliance documentation with data subject rights
- **Data Processing**: Data Processing Agreement (DPA) for enterprise clients
- **Cookie Policy**: Detailed cookie usage and management
- **Accessibility**: WCAG 2.1 AA compliance statement

### Tech Stack
- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **SMS Provider**: Twilio
- **Email Provider**: SendGrid
- **Deployment**: Vercel (ready to deploy)
- **Form Validation**: React Hook Form + Zod
- **HTTP Client**: Axios

### Key Features
✅ SMS and Email integration with consent management
✅ GDPR, CCPA, and TCPA compliant
✅ Real-time package tracking system
✅ Responsive mobile-first design
✅ API routes for SMS and email sending
✅ Privacy-first architecture
✅ Accessibility (WCAG 2.1 AA)
✅ SEO optimized with metadata
✅ Environment variable configuration

## 📋 Prerequisites

- Node.js 18+ or higher
- npm, yarn, or pnpm package manager
- Twilio account (for SMS)
- SendGrid account (for Email)
- Vercel account (for deployment)

## 🛠️ Installation

### 1. Install dependencies

```bash
npm install
```

### 2. Set up environment variables

```bash
cp .env.example .env.local
```

Edit `.env.local` with your credentials:
```env
NEXT_PUBLIC_TWILIO_ACCOUNT_SID=your_twilio_sid
TWILIO_AUTH_TOKEN=your_twilio_token
TWILIO_PHONE_NUMBER=+1234567890
SENDGRID_API_KEY=SG.xxxxxxxxxxxxx
SENDGRID_FROM_EMAIL=noreply@company.com
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

### 3. Run development server

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
/app
  /api - SMS and Email API endpoints
  /privacy-policy - Privacy Policy page
  /terms-of-service - Terms of Service
  /gdpr - GDPR Compliance
  /data-processing - Data Processing Agreement
  /cookie-policy - Cookie Policy
  /accessibility - Accessibility Statement
  /contact - Contact Form
  /services - Services Page
  /tracking - Package Tracking
  page.tsx - Home Page

/components
  /sections - Page sections (Hero, Features, etc.)
  Header.tsx - Navigation
  Footer.tsx - Footer
```

## 🚀 Deployment

Deploy to Vercel:
1. Push code to GitHub
2. Connect repository to Vercel
3. Add environment variables
4. Deploy

## 📊 Compliance

- ✅ GDPR Compliant
- ✅ CCPA Compliant
- ✅ TCPA Compliant (SMS)
- ✅ CAN-SPAM Compliant (Email)
- ✅ WCAG 2.1 AA Accessibility
- ✅ Data Processing Agreement

## 🔒 Security

- Server-side environment variables for sensitive keys
- Input validation with Zod
- HTTPS/TLS encryption
- CORS configuration available

## 📱 SMS & Email APIs

### Send SMS
```bash
POST /api/send-sms
{ "phoneNumber": "+1...", "message": "..." }
```

### Send Email
```bash
POST /api/send-email
{ "toEmail": "...", "subject": "...", "htmlContent": "..." }
```

## 📚 Documentation

- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Twilio SMS](https://www.twilio.com/docs/sms)
- [SendGrid Email](https://docs.sendgrid.com/)

## 📄 License

Commercial use permitted