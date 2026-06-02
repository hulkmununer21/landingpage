import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'GDPR Compliance - Blue Horizon',
  description: 'GDPR compliance information and data protection rights for Blue Horizon B2B platform.',
}

export default function GDPR() {
  return (
    <>
      <Header />
      <main className="container-custom py-16">
        <article className="max-w-4xl mx-auto prose prose-lg">
          <h1>GDPR Compliance & Data Protection</h1>
          <p className="text-gray-600">Last updated: January 2026</p>

          <section className="mt-8">
            <h2>1. Commitment to GDPR</h2>
            <p>
              Blue Horizon is committed to full compliance with the General Data Protection Regulation (GDPR)
              and all applicable EU and UK data protection laws. This page outlines our commitment and your rights
              as a B2B platform user.
            </p>
          </section>

          <section>
            <h2>2. Legal Basis for Processing</h2>
            <p>We process personal data under the following legal bases:</p>
            <ul>
              <li><strong>Consent:</strong> For marketing communications, market updates, and non-essential processing</li>
              <li><strong>Contract:</strong> To facilitate B2B connections and provide platform services</li>
              <li><strong>Legal Obligation:</strong> For tax compliance, trade law compliance, law enforcement requests</li>
              <li><strong>Legitimate Interests:</strong> For fraud prevention, security, compliance verification, and service improvements</li>
            </ul>
          </section>

          <section>
            <h2>3. Your GDPR Rights</h2>
            
            <h3>3.1 Right to Access (Article 15)</h3>
            <p>
              You have the right to access all personal data we hold about you. We will provide this within 30 days
              in a commonly used electronic format.
            </p>

            <h3>3.2 Right to Rectification (Article 16)</h3>
            <p>
              If your data is inaccurate or incomplete, you can request correction. We will update your information
              and notify relevant third parties within 30 days.
            </p>

            <h3>3.3 Right to Erasure (Article 17)</h3>
            <p>
              You can request deletion of your personal data under certain circumstances:
            </p>
            <ul>
              <li>When it is no longer necessary for its original purpose</li>
              <li>When you withdraw consent</li>
              <li>When you object to legitimate interest processing</li>
              <li>When processing is unlawful</li>
            </ul>
            <p>
              Note: We may retain data if required by law or to fulfill contractual obligations.
            </p>

            <h3>3.4 Right to Restrict Processing (Article 18)</h3>
            <p>
              You can restrict how we use your data while we verify its accuracy or assess the lawfulness of processing.
              During restriction, we will only store your data but not actively process it.
            </p>

            <h3>3.5 Right to Data Portability (Article 20)</h3>
            <p>
              You can request your personal data in a structured, commonly used, and machine-readable format
              (such as CSV). We will provide this within 30 days at no cost.
            </p>

            <h3>3.6 Right to Object (Article 21)</h3>
            <p>
              You can object to processing of your data for marketing, profiling, or legitimate interest purposes.
              We will stop processing within 30 days of receiving your objection.
            </p>

            <h3>3.7 Right to Protection from Automated Decision-Making (Article 22)</h3>
            <p>
              You have rights regarding automated decision-making and profiling. We will provide human review
              upon request for significant decisions affecting you.
            </p>

            <h3>3.8 Right to Lodge Complaints (Article 77)</h3>
            <p>
              If you believe we have violated your GDPR rights, you can lodge a complaint with your local
              Data Protection Authority (DPA):
            </p>
            <ul>
              <li><strong>EU:</strong> Your national DPA</li>
              <li><strong>UK:</strong> Information Commissioner's Office (ICO) - www.ico.org.uk</li>
              <li><strong>EEA:</strong> Your country's data protection authority</li>
            </ul>
          </section>

          <section>
            <h2>4. Data Protection Officer</h2>
            <p>
              We have appointed a Data Protection Officer (DPO) to oversee our GDPR compliance. Contact our DPO for any
              data protection inquiries:
            </p>
            <ul>
              <li>Email: dpo@logisticscompany.com</li>
              <li>Phone: {process.env.NEXT_PUBLIC_COMPANY_PHONE}</li>
            </ul>
          </section>

          <section>
            <h2>5. Data Processing Agreements</h2>
            <p>
              We have executed Data Processing Agreements (DPAs) with all processors handling your data, including:
            </p>
            <ul>
              <li>Cloud infrastructure providers</li>
              <li>SMS and email service providers</li>
              <li>Payment processors</li>
              <li>Analytics providers</li>
            </ul>
            <p>
              These agreements include Standard Contractual Clauses (SCCs) for international transfers.
            </p>
          </section>

          <section>
            <h2>6. International Data Transfers</h2>
            <p>
              When we transfer your data outside the EEA/UK, we implement appropriate safeguards:
            </p>
            <ul>
              <li>EU/UK adequacy decisions (if applicable)</li>
              <li>Standard Contractual Clauses (SCCs)</li>
              <li>Binding Corporate Rules (BCRs)</li>
              <li>Supplementary technical and organizational measures</li>
            </ul>
          </section>

          <section>
            <h2>7. Consent Management</h2>
            <p>
              We obtain explicit consent for optional processing, such as:
            </p>
            <ul>
              <li>Marketing emails and SMS messages</li>
              <li>Profiling and personalization</li>
              <li>Analytics and tracking (beyond necessity)</li>
            </ul>
            <p>
              You can withdraw consent anytime. Withdrawal of consent does not affect the lawfulness of processing
              before withdrawal.
            </p>
          </section>

          <section>
            <h2>8. Data Retention</h2>
            <p>
              We keep your personal data only as long as necessary:
            </p>
            <ul>
              <li>Shipping data: {process.env.NEXT_PUBLIC_DATA_RETENTION_DAYS} days after delivery</li>
              <li>Account data: Duration of account + {process.env.NEXT_PUBLIC_DATA_RETENTION_DAYS} days of inactivity</li>
              <li>Marketing data: Until opt-out</li>
              <li>Financial records: 6 years (tax requirement)</li>
            </ul>
          </section>

          <section>
            <h2>9. Security Measures</h2>
            <p>
              We implement comprehensive security measures to protect your data:
            </p>
            <ul>
              <li>Encryption in transit (TLS 1.3) and at rest (AES-256)</li>
              <li>Regular security audits and penetration testing</li>
              <li>Access controls and authentication mechanisms</li>
              <li>Employee data protection training</li>
              <li>Incident response procedures</li>
            </ul>
          </section>

          <section>
            <h2>10. Data Breach Notification</h2>
            <p>
              In case of a data breach, we will:
            </p>
            <ul>
              <li>Notify your DPA within 72 hours (when legally required)</li>
              <li>Notify affected individuals without undue delay</li>
              <li>Provide details about the breach and mitigation measures</li>
              <li>Maintain detailed breach records</li>
            </ul>
          </section>

          <section>
            <h2>11. Third-Party Processors</h2>
            <p>
              We use the following third-party processors:
            </p>
            <ul>
              <li><strong>Twilio:</strong> SMS delivery</li>
              <li><strong>SendGrid:</strong> Email delivery</li>
              <li><strong>Vercel:</strong> Website hosting</li>
              <li><strong>Stripe:</strong> Payment processing</li>
            </ul>
            <p>
              All processors have adequate GDPR safeguards in place.
            </p>
          </section>

          <section>
            <h2>12. How to Exercise Your Rights</h2>
            <p>
              To exercise any GDPR right, contact us:
            </p>
            <ul>
              <li>Email: dpo@logisticscompany.com or {process.env.NEXT_PUBLIC_COMPANY_EMAIL}</li>
              <li>Phone: {process.env.NEXT_PUBLIC_COMPANY_PHONE}</li>
              <li>Post: Logistics Pro Legal Department, 123 Main Street, Tech City, TC 12345, USA</li>
            </ul>
            <p>
              We will respond within 30 days (extendable by 60 days for complex requests).
            </p>
          </section>

          <section>
            <h2>13. Updates to This Policy</h2>
            <p>
              We review our GDPR compliance regularly and update this policy as needed. Significant changes
              will be notified via email.
            </p>
          </section>
        </article>
      </main>
      <Footer />
    </>
  )
}
