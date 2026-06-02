import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Services - Blue Horizon',
  description: 'B2B raw materials trading, consultancy, and supply chain solutions.',
}

export default function Services() {
  const services = [
    {
      title: 'Supplier Connection',
      description: 'Direct access to verified raw material suppliers across Africa and Asia',
      features: ['Verified suppliers', 'Direct negotiations', 'Quality assurance', 'Export documentation'],
      price: 'Starting $99/month',
      icon: '🌐',
    },
    {
      title: 'Buyer Network',
      description: 'Connect with global businesses sourcing raw materials and B2B products',
      features: ['Global buyer access', 'Lead generation', 'Transaction support', 'Market exposure'],
      price: 'Starting $149/month',
      icon: '👥',
    },
    {
      title: 'Sourcing Consultancy',
      description: 'Expert guidance for efficient procurement and supplier relationship management',
      features: ['Market research', 'Supplier vetting', 'Negotiation support', 'Quality oversight'],
      price: 'Custom Quote',
      icon: '📊',
    },
    {
      title: 'Supply Chain Management',
      description: 'End-to-end solutions for managing complex B2B supply chains',
      features: ['Logistics coordination', 'Customs clearance', 'Inventory management', 'Trade compliance'],
      price: 'Custom Quote',
      icon: '📦',
    },
    {
      title: 'Trade Documentation',
      description: 'Assistance with import/export documents, compliance, and certifications',
      features: ['Document preparation', 'Regulatory compliance', 'Certificate verification', 'Legal support'],
      price: 'Starting $50/transaction',
      icon: '📋',
    },
    {
      title: 'Market Research & Analytics',
      description: 'Detailed insights on raw material markets, trends, and pricing intelligence',
      features: ['Price analysis', 'Market trends', 'Competitor insights', 'Sourcing recommendations'],
      price: 'Starting $500',
      icon: '📈',
    },
  ]

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16 md:py-24">
          <div className="container-custom text-center">
            <h1 className="text-5xl font-bold mb-4">Our Services</h1>
            <p className="text-xl text-blue-100">
              Complete B2B solutions for global raw materials trading and consultancy
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow border border-gray-200 overflow-hidden"
                >
                  <div className="p-8">
                    <div className="text-5xl mb-4">{service.icon}</div>
                    <h3 className="text-2xl font-bold mb-2 text-gray-900">{service.title}</h3>
                    <p className="text-gray-600 mb-6">{service.description}</p>

                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Features:</h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start">
                            <span className="text-green-500 mr-2">✓</span>
                            <span className="text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="border-t border-gray-200 pt-6">
                      <p className="text-3xl font-bold text-blue-600 mb-4">{service.price}</p>
                      <button className="btn-primary w-full">Learn More</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Service Comparison */}
        <section className="py-20 bg-gray-50">
          <div className="container-custom">
            <h2 className="section-title text-center">Service Comparison</h2>
            <p className="section-subtitle text-center">
              Choose the right service package for your B2B needs
            </p>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-200">
                    <th className="border border-gray-300 p-4 text-left font-bold">Feature</th>
                    <th className="border border-gray-300 p-4 text-center font-bold">Basic</th>
                    <th className="border border-gray-300 p-4 text-center font-bold">Professional</th>
                    <th className="border border-gray-300 p-4 text-center font-bold">Enterprise</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 p-4 font-semibold">Supplier Access</td>
                    <td className="border border-gray-300 p-4 text-center">Limited</td>
                    <td className="border border-gray-300 p-4 text-center">Full</td>
                    <td className="border border-gray-300 p-4 text-center">Full</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 p-4 font-semibold">Market Updates</td>
                    <td className="border border-gray-300 p-4 text-center">✓</td>
                    <td className="border border-gray-300 p-4 text-center">✓</td>
                    <td className="border border-gray-300 p-4 text-center">✓</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-4 font-semibold">Trade Documentation</td>
                    <td className="border border-gray-300 p-4 text-center">Per transaction</td>
                    <td className="border border-gray-300 p-4 text-center">✓</td>
                    <td className="border border-gray-300 p-4 text-center">✓</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 p-4 font-semibold">Consultancy Support</td>
                    <td className="border border-gray-300 p-4 text-center">—</td>
                    <td className="border border-gray-300 p-4 text-center">Available</td>
                    <td className="border border-gray-300 p-4 text-center">✓</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-4 font-semibold">Account Manager</td>
                    <td className="border border-gray-300 p-4 text-center">—</td>
                    <td className="border border-gray-300 p-4 text-center">—</td>
                    <td className="border border-gray-300 p-4 text-center">✓</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Compliance & Trust */}
        <section className="py-20 bg-blue-50">
          <div className="container-custom">
            <h2 className="section-title text-center">Compliance & Trust</h2>
            <p className="section-subtitle text-center">
              Enterprise-grade compliance for international B2B operations
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
              <div className="text-center">
                <div className="text-4xl mb-4">🔒</div>
                <h3 className="font-bold mb-2">GDPR Compliant</h3>
                <p className="text-gray-600">
                  Full compliance with EU data protection for international B2B transactions.
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">🌍</div>
                <h3 className="font-bold mb-2">Trade Compliance</h3>
                <p className="text-gray-600">
                  Support for import/export regulations across Africa, Asia, and South America.
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">✅</div>
                <h3 className="font-bold mb-2">Business Verification</h3>
                <p className="text-gray-600">
                  All partners verified for authenticity and regulatory compliance.
                </p>
              </div>
            </div>

            <div className="mt-8 text-center">
              <a href="/privacy-policy" className="text-blue-600 hover:underline font-semibold">
                Learn more about our compliance practices →
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
