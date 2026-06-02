import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Data Processing Agreement - Blue Horizon',
  description: 'Data Processing Agreement outlining Blue Horizon\'s processing of personal data for B2B operations.',
}

export default function DataProcessing() {
  return (
    <>
      <Header />
      <main className="container-custom py-16">
        <article className="max-w-4xl mx-auto prose prose-lg">
          <h1>Data Processing Agreement</h1>
          <p className="text-gray-600">Last updated: January 2026</p>

          <section className="mt-8">
            <h2>1. Scope and Purpose</h2>
            <p>
              This Data Processing Agreement ("DPA") sets out the terms and conditions for the processing
              of personal data by Blue Horizon on behalf of our B2B clients, suppliers, and customers
              for B2B raw materials trading and consultancy services.
            </p>
          </section>

          <section>
            <h2>2. Definitions</h2>
            <ul>
              <li><strong>Personal Data:</strong> Any information relating to an identified or identifiable person</li>
              <li><strong>Processing:</strong> Any operation performed on personal data</li>
              <li><strong>Data Controller:</strong> You (the B2B customer/supplier/trading partner)</li>
              <li><strong>Data Processor:</strong> Blue Horizon</li>
              <li><strong>Data Subject:</strong> The individual to whom the personal data relates (your employees, contacts, etc.)</li>
            </ul>
          </section>

          <section>
            <h2>3. Processing Instructions</h2>
            <p>
              We process personal data only on documented instructions from you, including regarding:
            </p>
            <ul>
              <li>The purpose of processing (B2B connections, trading, consultancy)</li>
              <li>The type of personal data processed (names, business addresses, phone numbers, business contacts)</li>
              <li>The recipients of the data (verified trading partners, consultants)</li>
              <li>The duration of processing</li>
            </ul>
          </section>

          <section>
            <h2>4. Data Categories</h2>
            <p>
              The following categories of personal data are processed:
            </p>
            <ul>
              <li>Business contact name, company name, business address, phone number, email</li>
              <li>Trading partner information (suppliers, buyers, consultancy clients)</li>
              <li>Business transaction and negotiation history</li>
              <li>Payment and billing information</li>
              <li>Communication history and correspondence</li>
              <li>Business verification and compliance documentation</li>
            </ul>
          </section>

          <section>
            <h2>5. Sensitive Data</h2>
            <p>
              We do not knowingly process special categories of personal data (racial origin, political opinions,
              religious beliefs, etc.). If your shipment contains such information, you must inform us immediately
              and ensure appropriate safeguards are in place.
            </p>
          </section>

          <section>
            <h2>6. Data Processor Obligations</h2>
            <p>
              As a data processor, Blue Horizon commits to:
            </p>
            <ul>
              <li>Process data only in accordance with your written instructions</li>
              <li>Ensure persons authorized to process data are committed to confidentiality</li>
              <li>Implement and maintain appropriate technical and organizational security measures</li>
              <li>Not subcontract processing without prior authorization and DPA</li>
              <li>Assist you in fulfilling data subject rights requests</li>
              <li>Delete or return personal data after service termination</li>
              <li>Make available all information necessary to demonstrate compliance</li>
              <li>Cooperate with data protection authorities and conduct DPAs</li>
              <li>Maintain records of processing activities</li>
            </ul>
          </section>

          <section>
            <h2>7. Security & Confidentiality</h2>
            
            <h3>7.1 Technical Measures</h3>
            <ul>
              <li>Encryption of data in transit (TLS 1.3)</li>
              <li>Encryption of data at rest (AES-256)</li>
              <li>Secure authentication and access controls</li>
              <li>Regular security patches and updates</li>
              <li>Network segmentation and firewalls</li>
            </ul>

            <h3>7.2 Organizational Measures</h3>
            <ul>
              <li>Employee confidentiality agreements</li>
              <li>Data protection training and awareness programs</li>
              <li>Least privilege access principles</li>
              <li>Incident response procedures</li>
              <li>Data protection impact assessments</li>
            </ul>

            <h3>7.3 Monitoring</h3>
            <ul>
              <li>Regular security audits and penetration testing</li>
              <li>Continuous monitoring of access logs</li>
              <li>Quarterly security reviews</li>
              <li>Compliance certifications (SOC 2, ISO 27001)</li>
            </ul>
          </section>

          <section>
            <h2>8. Sub-processors</h2>
            <p>
              Logistics Pro may engage the following sub-processors with your explicit consent:
            </p>
            <ul>
              <li><strong>Twilio:</strong> SMS delivery - US-based</li>
              <li><strong>SendGrid:</strong> Email delivery - US-based</li>
              <li><strong>Vercel:</strong> Web hosting - Global CDN</li>
              <li><strong>Stripe:</strong> Payment processing - US-based</li>
              <li><strong>Shipping carriers:</strong> Local and international delivery partners</li>
            </ul>
            <p>
              We will notify you of any changes to sub-processors 30 days in advance.
            </p>
          </section>

          <section>
            <h2>9. International Data Transfers</h2>
            <p>
              Logistics Pro is based in the United States. By using our services, you consent to the transfer
              of personal data outside the European Union/EEA. We implement Standard Contractual Clauses (SCCs)
              for all international transfers and maintain supplementary technical and organizational measures
              to ensure an adequate level of protection.
            </p>
          </section>

          <section>
            <h2>10. Data Subject Rights</h2>
            <p>
              We will assist you in responding to data subject rights requests within 30 days:
            </p>
            <ul>
              <li>Right of access to personal data</li>
              <li>Right to rectification of inaccurate data</li>
              <li>Right to erasure</li>
              <li>Right to restrict processing</li>
              <li>Right to data portability</li>
              <li>Right to object to processing</li>
              <li>Rights related to automated decision-making</li>
            </ul>
          </section>

          <section>
            <h2>11. Data Retention</h2>
            <p>
              Personal data will be retained for the following periods:
            </p>
            <ul>
              <li>Active shipment data: Until {process.env.NEXT_PUBLIC_DATA_RETENTION_DAYS} days after delivery</li>
              <li>Archived data: Up to 7 years for audit purposes</li>
              <li>After service termination: Deleted within 30 days unless legally required to retain</li>
            </ul>
          </section>

          <section>
            <h2>12. Data Breach Notification</h2>
            <p>
              In case of a confirmed data breach, we will:
            </p>
            <ul>
              <li>Notify you without undue delay and no later than 72 hours</li>
              <li>Provide details of the breach, affected data, and likely consequences</li>
              <li>Outline mitigation measures taken or proposed</li>
              <li>Provide contact information for our Data Protection Officer</li>
            </ul>
          </section>

          <section>
            <h2>13. Assistance & Cooperation</h2>
            <p>
              Logistics Pro will reasonably assist you in:
            </p>
            <ul>
              <li>Conducting Data Protection Impact Assessments</li>
              <li>Implementing technical and organizational security measures</li>
              <li>Responding to data subject rights requests</li>
              <li>Responding to data protection authority requests</li>
              <li>Demonstrating compliance with applicable laws</li>
            </ul>
            <p>
              Note: Excessive requests for assistance may incur additional fees.
            </p>
          </section>

          <section>
            <h2>14. Audit & Inspection</h2>
            <p>
              You reserve the right to audit our processing activities for compliance with this DPA.
              Audits may be conducted:
            </p>
            <ul>
              <li>Annually upon reasonable notice (at your expense)</li>
              <li>Upon reasonable suspicion of non-compliance (at your expense)</li>
              <li>By data protection authorities (without notice)</li>
            </ul>
          </section>

          <section>
            <h2>15. Data Deletion or Return</h2>
            <p>
              Upon termination of our services, you may request that we:
            </p>
            <ul>
              <li>Delete all personal data within 30 days</li>
              <li>Return personal data in a structured format</li>
              <li>Provide certification of deletion</li>
            </ul>
            <p>
              We may retain data as required by law or if necessary for compliance verification.
            </p>
          </section>

          <section>
            <h2>16. Liability</h2>
            <p>
              Both parties assume responsibility for damages caused by violation of their obligations under this DPA.
              Liability is limited to direct damages only, except where prohibited by applicable law.
            </p>
          </section>

          <section>
            <h2>17. Amendments</h2>
            <p>
              We may amend this DPA to comply with legal requirements. Material changes will be communicated
              60 days in advance, with your consent required for non-compliance-driven changes.
            </p>
          </section>

          <section>
            <h2>18. Governing Law</h2>
            <p>
              This DPA is governed by applicable data protection laws, including GDPR for EU/UK residents.
              Disputes will be resolved according to the terms and conditions of your service agreement.
            </p>
          </section>

          <section>
            <h2>19. Contact</h2>
            <p>
              For questions about data processing, contact:
            </p>
            <ul>
              <li>Data Protection Officer: dpo@BLUEHORIZONCO.com</li>
              <li>Privacy Team: {process.env.NEXT_PUBLIC_COMPANY_EMAIL}</li>
              <li>Phone: {process.env.NEXT_PUBLIC_COMPANY_PHONE}</li>
            </ul>
          </section>
        </article>
      </main>
      <Footer />
    </>
  )
}
