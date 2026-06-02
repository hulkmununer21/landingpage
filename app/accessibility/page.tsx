import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Accessibility - Blue Horizon',
  description: 'Accessibility statement and information about WCAG compliance for Blue Horizon.',
}

export default function Accessibility() {
  return (
    <>
      <Header />
      <main className="container-custom py-16">
        <article className="max-w-4xl mx-auto prose prose-lg">
          <h1>Accessibility Statement</h1>
          <p className="text-gray-600">Last updated: January 2026</p>

          <section className="mt-8">
            <h2>Commitment to Accessibility</h2>
            <p>
              Blue Horizon is committed to ensuring digital accessibility for all people,
              including those with disabilities. We continuously work to improve the accessibility
              of our B2B platform and services in compliance with Web Content Accessibility Guidelines (WCAG) 2.1 Level AA.
            </p>
          </section>

          <section>
            <h2>Accessibility Features</h2>
            <p>Our website includes the following accessibility features:</p>
            <ul>
              <li>Semantic HTML structure for proper document outlining</li>
              <li>Alt text descriptions for all images and graphics</li>
              <li>Keyboard navigation support throughout the site</li>
              <li>Focus indicators for keyboard users</li>
              <li>Color contrast ratios meeting WCAG AA standards</li>
              <li>Resizable text without loss of functionality</li>
              <li>Support for browser zoom up to 200%</li>
              <li>ARIA labels and roles for assistive technology</li>
              <li>Form labels properly associated with inputs</li>
              <li>Video captions and transcripts (where applicable)</li>
              <li>Skip navigation links</li>
              <li>Accessible form validation with clear error messages</li>
            </ul>
          </section>

          <section>
            <h2>Screen Reader Compatibility</h2>
            <p>
              Our website is compatible with popular screen readers including:
            </p>
            <ul>
              <li>NVDA (NonVisual Desktop Access)</li>
              <li>JAWS (Job Access With Speech)</li>
              <li>VoiceOver (Mac/iOS)</li>
              <li>Narrator (Windows)</li>
              <li>TalkBack (Android)</li>
            </ul>
          </section>

          <section>
            <h2>Keyboard Navigation</h2>
            <p>
              All functionality is available using keyboard navigation:
            </p>
            <ul>
              <li><strong>Tab:</strong> Move to next interactive element</li>
              <li><strong>Shift + Tab:</strong> Move to previous interactive element</li>
              <li><strong>Enter/Space:</strong> Activate buttons and links</li>
              <li><strong>Arrow Keys:</strong> Navigate menus and select options</li>
              <li><strong>Escape:</strong> Close menus and dialogs</li>
            </ul>
          </section>

          <section>
            <h2>Text Sizing and Zoom</h2>
            <p>
              You can adjust text size and zoom without breaking the layout:
            </p>
            <ul>
              <li>Browser zoom: Ctrl/Cmd + Plus to zoom in, Minus to zoom out</li>
              <li>Text size: Adjust browser text size settings</li>
              <li>The website remains fully functional up to 200% zoom</li>
            </ul>
          </section>

          <section>
            <h2>Color and Contrast</h2>
            <p>
              Our website meets WCAG AA color contrast requirements:
            </p>
            <ul>
              <li>Text/background contrast ratio of at least 4.5:1 for normal text</li>
              <li>3:1 contrast ratio for large text</li>
              <li>Information is not conveyed by color alone</li>
            </ul>
          </section>

          <section>
            <h2>Accessible Tracking</h2>
            <p>
              Our package tracking system includes:
            </p>
            <ul>
              <li>Accessible form controls with clear labels</li>
              <li>Tracking information presented in text-accessible format</li>
              <li>Timeline presented as accessible list rather than visual only</li>
              <li>Status indicators with text labels</li>
            </ul>
          </section>

          <section>
            <h2>Known Limitations</h2>
            <p>
              While we strive for complete accessibility, we recognize some limitations:
            </p>
            <ul>
              <li>Third-party embedded content (maps, social media) may have accessibility limitations</li>
              <li>PDF documents may not be fully accessible (we provide alternatives)</li>
              <li>Some legacy pages may have partial accessibility issues (we are updating these)</li>
            </ul>
            <p>
              If you encounter any of these issues, please contact us and we will provide an accessible alternative.
            </p>
          </section>

          <section>
            <h2>Accessibility Tools and Extensions</h2>
            <p>
              We recommend using the following tools to enhance web accessibility:
            </p>
            <ul>
              <li><a href="https://www.nvaccess.org/">NVDA - Free screen reader for Windows</a></li>
              <li><a href="https://www.freedomscientific.com/products/software/jaws/">JAWS - Premium screen reader</a></li>
              <li><a href="https://wave.webaim.org/extension/">WAVE - Accessibility evaluation extension</a></li>
              <li><a href="https://www.tpgi.com/color-contrast-checker/">Color Contrast Checker</a></li>
              <li><a href="https://www.w3.org/WAI/test-evaluate/">WebAIM Testing Tools</a></li>
            </ul>
          </section>

          <section>
            <h2>Accessibility Standards Compliance</h2>
            <p>
              We comply with or strive to meet:
            </p>
            <ul>
              <li><strong>WCAG 2.1:</strong> Web Content Accessibility Guidelines Level AA</li>
              <li><strong>Section 508:</strong> US federal accessibility standards</li>
              <li><strong>EN 301 549:</strong> EU Accessibility Requirements</li>
              <li><strong>ADA:</strong> Americans with Disabilities Act compliance</li>
            </ul>
          </section>

          <section>
            <h2>Browser and Assistive Technology Support</h2>
            <p>
              We support accessibility features in:
            </p>
            <ul>
              <li>Modern browsers (Chrome, Firefox, Safari, Edge)</li>
              <li>All major screen readers</li>
              <li>Voice control software</li>
              <li>Switch control systems</li>
              <li>Text-to-speech browsers</li>
            </ul>
          </section>

          <section>
            <h2>Report Accessibility Issues</h2>
            <p>
              If you find accessibility barriers on our website or need assistance, please contact us:
            </p>
            <ul>
              <li>Email: {process.env.NEXT_PUBLIC_COMPANY_EMAIL}</li>
              <li>Phone: {process.env.NEXT_PUBLIC_COMPANY_PHONE}</li>
              <li>TTY/TDD: Available upon request</li>
            </ul>
            <p>
              We will respond to accessibility reports within 3 business days and will work to provide
              a timely remedy or accessible alternative.
            </p>
          </section>

          <section>
            <h2>Accessibility Roadmap</h2>
            <p>
              We continuously improve accessibility. Our priorities include:
            </p>
            <ul>
              <li>Regular WCAG 2.1 Level AA compliance audits</li>
              <li>User testing with people who have disabilities</li>
              <li>Accessibility training for our development team</li>
              <li>Remediation of identified accessibility barriers</li>
              <li>Evaluation of new third-party tools for accessibility compliance</li>
            </ul>
          </section>

          <section>
            <h2>Additional Resources</h2>
            <ul>
              <li><a href="https://www.w3.org/WAI/">W3C Web Accessibility Initiative</a></li>
              <li><a href="https://webaim.org/">WebAIM - Web Accessibility In Mind</a></li>
              <li><a href="https://www.section508.gov/">Section 508 Resources</a></li>
              <li><a href="https://www.ada.gov/">ADA.gov - Americans with Disabilities Act</a></li>
            </ul>
          </section>

          <section>
            <h2>Feedback and Continuous Improvement</h2>
            <p>
              Your feedback is valuable. If you have suggestions to improve our accessibility,
              please share them at {process.env.NEXT_PUBLIC_COMPANY_EMAIL}. We are committed to making
              Logistics Pro accessible to everyone.
            </p>
          </section>
        </article>
      </main>
      <Footer />
    </>
  )
}
