import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Privacy Policy - Blue Horizon',
  description: 'Our privacy policy explains how Blue Horizon collects, uses, and protects your personal data in our B2B raw materials trading platform.',
}

export default function PrivacyPolicy() {
  return (
    <>
      <Header />
      <main className="container-custom py-16">
        <article className="max-w-4xl mx-auto prose prose-lg">
          <h1>Privacy Policy</h1>
          <p className="text-gray-600">Last updated: January 2026</p>

          <section className="mt-8">
            <h2>1. Introduction</h2>
            <p>
              Blue Horizon ("Company", "we", "our", or "us") operates the B2B global raw materials platform connecting suppliers and buyers across Africa, Asia, and South America.
              This Privacy Policy explains our data practices and your rights regarding your personal information.
            </p>
          </section>

          <section>
            <h2>2. Information We Collect</h2>
            <h3>2.1 Information You Provide</h3>
            <ul>
              <li>Business name, contact person, email address, and phone number</li>
              <li>Company registration and verification details</li>
              <li>Business address and operational locations</li>
              <li>Payment and billing information</li>
              <li>Trading preferences and sourcing requirements</li>
              <li>Communication preferences for SMS and email updates</li>
              <li>Customer support interactions and inquiries</li>
            </ul>

            <h3>2.2 Information Collected Automatically</h3>
            <ul>
              <li>Device and browser information</li>
              <li>IP address and location data</li>
              <li>Website usage patterns and analytics</li>
              <li>Cookies and similar tracking technologies</li>
            </ul>

            <h3>2.3 Information from Third Parties</h3>
            <ul>
              <li>SMS and email service providers</li>
              <li>Payment processors</li>
              <li>Shipping partners and carriers</li>
              <li>Public databases for address verification</li>
            </ul>
          </section>

          <section>
            <h2>3. How We Use Your Information</h2>
            <ul>
              <li>Facilitating B2B connections between suppliers and buyers</li>
              <li>Processing payments and billing for transactions</li>
              <li>Sending SMS and email trade updates and market information (with your consent)</li>
              <li>Providing consultancy services and market research</li>
              <li>Improving our platform and services</li>
              <li>Legal compliance and fraud prevention</li>
              <li>Customer support and business communication</li>
              <li>Marketing communications (only with your consent)</li>
            </ul>
          </section>

          <section>
            <h2>4. Legal Basis for Processing</h2>
            <p>We process your data based on:</p>
            <ul>
              <li>Your explicit consent for SMS and email communications</li>
              <li>Contractual necessity to provide our services</li>
              <li>Legal obligations and regulatory compliance</li>
              <li>Legitimate business interests with appropriate safeguards</li>
            </ul>
          </section>

          <section>
            <h2>5. SMS and Email Communication Policy</h2>
            <h3>5.1 Consent Management</h3>
            <p>
              We require explicit opt-in consent before sending promotional SMS or email messages.
              You can manage your communication preferences anytime:
            </p>
            <ul>
              <li>Click "Unsubscribe" in email messages</li>
              <li>Reply "STOP" to SMS messages</li>
              <li>Update preferences in your account dashboard</li>
              <li>Contact us at {process.env.NEXT_PUBLIC_COMPANY_EMAIL}</li>
            </ul>

            <h3>5.2 Transactional Messages</h3>
            <p>
              Trade alerts, market updates, and business transaction confirmations are sent regardless of opt-in status,
              as these are essential to service delivery. You can disable these in account settings
              but may miss important trading information.
            </p>

            <h3>5.3 Frequency & Standards</h3>
            <p>
              We comply with SMS (TCPA) and email (CAN-SPAM) regulations. SMS messages are typically
              1-3 per significant business event. Marketing emails are sent at most weekly based on your preferences.
            </p>
          </section>

          <section>
            <h2>6. Data Retention</h2>
            <ul>
              <li>Transaction records: Retained for 7 years for compliance and audit purposes</li>
              <li>Payment information: Retained per PCI-DSS standards</li>
              <li>Marketing data: Retained until opt-out or 2 years of inactivity</li>
              <li>Support communications: Retained for 2 years</li>
              <li>Trade documentation: Retained per regulatory requirements</li>
            </ul>
            <p>
              You may request data deletion anytime at {process.env.NEXT_PUBLIC_COMPANY_EMAIL}
            </p>
          </section>

          <section>
            <h2>7. Data Sharing & Disclosure</h2>
            <p>We share your data only when necessary and only with:</p>
            <ul>
              <li>SMS providers (Twilio) - only with your consent</li>
              <li>Email service providers (SendGrid) - for delivery</li>
              <li>Trade partners - only with your explicit consent for B2B connections</li>
              <li>Payment processors - for transactions</li>
              <li>Compliance and verification services - for business verification</li>
              <li>Law enforcement - when legally required</li>
            </ul>
            <p>
              We do NOT sell your personal information to third parties. All data sharing for B2B connections requires your explicit consent.
            </p>
          </section>

          <section>
            <h2>8. Security Measures</h2>
            <ul>
              <li>SSL/TLS encryption for data in transit</li>
              <li>AES-256 encryption for data at rest</li>
              <li>Regular security audits and penetration testing</li>
              <li>Access controls and authentication</li>
              <li>Data breach notification within 72 hours (GDPR compliance)</li>
            </ul>
          </section>

          <section>
            <h2>9. Your Rights</h2>
            <h3>GDPR Rights (EU/UK users)</h3>
            <ul>
              <li>Right to access your data</li>
              <li>Right to rectification of inaccurate data</li>
              <li>Right to erasure ("right to be forgotten")</li>
              <li>Right to restrict processing</li>
              <li>Right to data portability</li>
              <li>Right to object to processing</li>
              <li>Right to lodge a complaint with a supervisory authority</li>
            </ul>

            <h3>CCPA Rights (California users)</h3>
            <ul>
              <li>Right to know what personal information is collected</li>
              <li>Right to delete personal information collected</li>
              <li>Right to opt-out of the sale of personal information</li>
              <li>Right to non-discrimination for exercising CCPA rights</li>
            </ul>

            <p className="mt-4">
              To exercise any of these rights, contact us at {process.env.NEXT_PUBLIC_COMPANY_EMAIL}
            </p>
          </section>

          <section>
            <h2>10. International Data Transfers</h2>
            <p>
              If you are located outside the US, your data may be transferred to the US or other countries
              for processing. We implement appropriate safeguards including Standard Contractual Clauses
              and adequacy decisions.
            </p>
          </section>

          <section>
            <h2>11. Third-Party Links</h2>
            <p>
              Our website may contain links to third-party sites. We are not responsible for their privacy practices.
              Please review their privacy policies before providing your information.
            </p>
          </section>

          <section>
            <h2>12. Children's Privacy</h2>
            <p>
              We do not knowingly collect information from children under 13. If we become aware of such collection,
              we will delete the information immediately. For GDPR regions, we provide additional protection for users under 16.
            </p>
          </section>

          <section>
            <h2>13. Changes to Privacy Policy</h2>
            <p>
              We may update this policy occasionally. We will notify you of material changes via email or prominent website notice.
              Your continued use constitutes acceptance of the updated policy.
            </p>
          </section>

          <section>
            <h2>14. Contact Information</h2>
            <p>For privacy inquiries, contact our Data Protection Officer:</p>
            <ul>
              <li>Email: {process.env.NEXT_PUBLIC_COMPANY_EMAIL}</li>
              <li>Phone: {process.env.NEXT_PUBLIC_COMPANY_PHONE}</li>
              <li>Address:35530 STEPHANIE STREET
                APT 204 ROMULUS, MI 48174, USA</li>
            </ul>
          </section>
        </article>
      </main>
      <Footer />
    </>
  )
}
