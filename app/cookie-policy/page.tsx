import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Cookie Policy - Blue Horizon',
  description: 'Information about how Blue Horizon uses cookies and tracking technologies.',
}

export default function CookiePolicy() {
  return (
    <>
      <Header />
      <main className="container-custom py-16">
        <article className="max-w-4xl mx-auto prose prose-lg">
          <h1>Cookie Policy</h1>
          <p className="text-gray-600">Last updated: January 2026</p>

          <section className="mt-8">
            <h2>1. What Are Cookies?</h2>
            <p>
              Cookies are small data files stored on your browser or device. They help websites remember your
              preferences and provide a better user experience. Cookies can be either "session" cookies
              (deleted when you close your browser) or "persistent" cookies (remain until expiration).
            </p>
          </section>

          <section>
            <h2>2. How We Use Cookies</h2>
            
            <h3>2.1 Essential/Necessary Cookies</h3>
            <p>
              These cookies are essential for the website to function properly. They enable core functionality such as:
            </p>
            <ul>
              <li>User authentication and login sessions</li>
              <li>Security and fraud prevention</li>
              <li>Remembering your trading preferences and saved partners</li>
              <li>Processing transactions and payments</li>
              <li>CSRF protection</li>
            </ul>
            <p>
              These cookies do NOT require consent and cannot be disabled.
            </p>

            <h3>2.2 Analytics Cookies</h3>
            <p>
              We use analytics cookies to understand how you interact with our website:
            </p>
            <ul>
              <li>Pages visited and time spent</li>
              <li>Bounce rates and click patterns</li>
              <li>Device and browser information</li>
              <li>Geographic location (country/city level)</li>
            </ul>
            <p>
              Tools used: Google Analytics, Vercel Analytics
              <br />
              Duration: Up to 2 years
              <br />
              Consent: Required (opt-in for EU/UK users)
            </p>

            <h3>2.3 Marketing/Advertising Cookies</h3>
            <p>
              These cookies help us deliver relevant content and measure campaign effectiveness:
            </p>
            <ul>
              <li>Tracking ads across websites (retargeting)</li>
              <li>Measuring ad performance</li>
              <li>Personalizing promotional content</li>
              <li>Social media integration</li>
            </ul>
            <p>
              Tools used: Google Ads, Facebook Pixel
              <br />
              Duration: Up to 2 years
              <br />
              Consent: Required
            </p>

            <h3>2.4 Performance & Functionality Cookies</h3>
            <p>
              These cookies enhance website functionality and performance:
            </p>
            <ul>
              <li>Website speed and performance optimization</li>
              <li>User preference storage (language, layout)</li>
              <li>Feature testing and optimization</li>
            </ul>
            <p>
              Duration: Session to 1 year
              <br />
              Consent: Required (unless strictly necessary)
            </p>
          </section>

          <section>
            <h2>3. Cookie Consent</h2>
            
            <h3>3.1 Consent Banner</h3>
            <p>
              A consent banner appears on your first visit allowing you to:
            </p>
            <ul>
              <li>Accept all cookies</li>
              <li>Reject optional cookies</li>
              <li>Customize cookie preferences</li>
            </ul>

            <h3>3.2 Managing Your Preferences</h3>
            <p>
              You can change your cookie preferences at any time by:
            </p>
            <ul>
              <li>Using our cookie preferences tool at the bottom of the page</li>
              <li>Clearing cookies in your browser settings</li>
              <li>Contacting us at {process.env.NEXT_PUBLIC_COMPANY_EMAIL}</li>
            </ul>

            <h3>3.3 Your Choices</h3>
            <p>
              Disabling certain cookies may affect website functionality:
            </p>
            <ul>
              <li>Disabling analytics cookies: We won't track your activity</li>
              <li>Disabling marketing cookies: You may see less relevant ads</li>
              <li>Disabling essential cookies: Website may not function properly</li>
            </ul>
          </section>

          <section>
            <h2>4. Third-Party Cookies</h2>
            <p>
              Third parties may place cookies on your device:
            </p>
            <ul>
              <li><strong>Google Analytics:</strong> Performance tracking</li>
              <li><strong>Google Ads:</strong> Advertising network</li>
              <li><strong>Facebook Pixel:</strong> Social media tracking</li>
              <li><strong>Twilio:</strong> SMS communication (if applicable)</li>
            </ul>
            <p>
              These third parties have their own privacy policies. We recommend reviewing their policies
              for more information about their data practices.
            </p>
          </section>

          <section>
            <h2>5. Browser-Level Privacy Controls</h2>
            <p>
              Your browser provides privacy controls for cookies:
            </p>
            <ul>
              <li><strong>Chrome:</strong> Settings → Privacy and security → Cookies</li>
              <li><strong>Firefox:</strong> Preferences → Privacy & Security → Cookies</li>
              <li><strong>Safari:</strong> Preferences → Privacy → Cookies and website data</li>
              <li><strong>Edge:</strong> Settings → Privacy → Cookies</li>
            </ul>
            <p>
              You can also enable "Do Not Track" in your browser settings, though we cannot guarantee
              all websites will honor this signal.
            </p>
          </section>

          <section>
            <h2>6. Tracking Technologies</h2>
            <p>
              Beyond cookies, we may use other tracking technologies:
            </p>
            <ul>
              <li><strong>Pixels/Web Beacons:</strong> Tiny images tracking page visits</li>
              <li><strong>Local Storage:</strong> Stores data on your device</li>
              <li><strong>Session Storage:</strong> Stores temporary session data</li>
              <li><strong>Log Files:</strong> Server-side tracking of requests</li>
            </ul>
          </section>

          <section>
            <h2>7. Cookie Table</h2>
            <table className="w-full border border-gray-300 mt-4">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 p-2">Cookie Name</th>
                  <th className="border border-gray-300 p-2">Type</th>
                  <th className="border border-gray-300 p-2">Duration</th>
                  <th className="border border-gray-300 p-2">Purpose</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 p-2">session_id</td>
                  <td className="border border-gray-300 p-2">Essential</td>
                  <td className="border border-gray-300 p-2">Session</td>
                  <td className="border border-gray-300 p-2">User authentication</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2">_ga</td>
                  <td className="border border-gray-300 p-2">Analytics</td>
                  <td className="border border-gray-300 p-2">2 years</td>
                  <td className="border border-gray-300 p-2">Google Analytics tracking</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2">_fbp</td>
                  <td className="border border-gray-300 p-2">Marketing</td>
                  <td className="border border-gray-300 p-2">3 months</td>
                  <td className="border border-gray-300 p-2">Facebook Pixel tracking</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2">preferences</td>
                  <td className="border border-gray-300 p-2">Functional</td>
                  <td className="border border-gray-300 p-2">1 year</td>
                  <td className="border border-gray-300 p-2">User preference storage</td>
                </tr>
              </tbody>
            </table>
          </section>

          <section>
            <h2>8. EU/UK Users - ePrivacy Regulations</h2>
            <p>
              Under ePrivacy Directive (2002/58/EC) and PECR, we must obtain your explicit consent before
              storing non-essential information on your device. We comply by:
            </p>
            <ul>
              <li>Displaying a clear consent banner on first visit</li>
              <li>Providing granular consent options</li>
              <li>Allowing easy consent withdrawal</li>
              <li>Only using essential cookies before consent</li>
            </ul>
          </section>

          <section>
            <h2>9. CCPA - California Users</h2>
            <p>
              California residents have rights under the California Consumer Privacy Act (CCPA):
            </p>
            <ul>
              <li>Right to know what cookies track you</li>
              <li>Right to delete cookies about you</li>
              <li>Right to opt-out of sale of information</li>
              <li>Right to non-discrimination for exercising CCPA rights</li>
            </ul>
            <p>
              You can exercise these rights at: {process.env.NEXT_PUBLIC_COMPANY_EMAIL}
            </p>
          </section>

          <section>
            <h2>10. Opt-Out Links</h2>
            <ul>
              <li><a href="https://tools.google.com/dlpage/gaoptout">Google Analytics Opt-Out</a></li>
              <li><a href="https://www.facebook.com/ads/preferences/">Facebook Ad Preferences</a></li>
              <li><a href="https://optout.networkadvertising.org/">NAI Opt-Out</a></li>
            </ul>
          </section>

          <section>
            <h2>11. Contact & Questions</h2>
            <p>
              For questions about our cookie practices:
            </p>
            <ul>
              <li>Email: {process.env.NEXT_PUBLIC_COMPANY_EMAIL}</li>
              <li>Phone: {process.env.NEXT_PUBLIC_COMPANY_PHONE}</li>
            </ul>
          </section>

          <section>
            <h2>12. Policy Updates</h2>
            <p>
              We may update this Cookie Policy as we change our practices or as laws change.
              Significant updates will be notified via email.
            </p>
          </section>
        </article>
      </main>
      <Footer />
    </>
  )
}
