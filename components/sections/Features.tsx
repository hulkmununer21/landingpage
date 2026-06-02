export default function Features() {
  const features = [
    {
      icon: '🌍',
      title: 'Global Network',
      description: 'Connected suppliers and buyers across Africa, Asia, and South America.'
    },
    {
      icon: '📱',
      title: 'Direct Communication',
      description: 'Real-time updates via SMS and email for all transactions and negotiations.'
    },
    {
      icon: '🔒',
      title: 'Verified Partners',
      description: 'All suppliers and buyers verified for authenticity and compliance.'
    },
    {
      icon: '💼',
      title: 'B2B Focused',
      description: 'Designed specifically for business-to-business raw materials trading.'
    },
    {
      icon: '📋',
      title: 'Expert Consultancy',
      description: 'Professional sourcing guidance for efficient procurement worldwide.'
    },
    {
      icon: '🤝',
      title: '24/7 Support',
      description: 'Dedicated support team across multiple time zones for seamless operations.'
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container-custom">
        <h2 className="section-title text-center">Why Choose Blue Horizon?</h2>
        <p className="section-subtitle text-center">
          The leading B2B platform for global raw materials trading and consultancy
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition-shadow"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
