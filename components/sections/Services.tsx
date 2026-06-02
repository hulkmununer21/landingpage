export default function Services() {
  const services = [
    {
      name: 'Supplier Connection',
      description: 'Connect directly with verified raw material suppliers across Africa and Asia',
      price: 'Starting $99/month',
      icon: '🌐',
    },
    {
      name: 'Buyer Network',
      description: 'Access global buyers and businesses sourcing raw materials',
      price: 'Starting $149/month',
      icon: '👥',
    },
    {
      name: 'Sourcing Consultancy',
      description: 'Expert guidance for efficient procurement and supplier vetting',
      price: 'Custom Quote',
      icon: '📊',
    },
    {
      name: 'Supply Chain Management',
      description: 'End-to-end solutions for managing complex supply chains',
      price: 'Custom Quote',
      icon: '📦',
    },
    {
      name: 'Trade Documentation',
      description: 'Assistance with import/export documents and compliance',
      price: 'Starting $50/transaction',
      icon: '📋',
    },
    {
      name: 'Market Research',
      description: 'Detailed insights on raw material markets and pricing trends',
      price: 'Starting $500',
      icon: '📈',
    }
  ]

  return (
    <section className="py-20">
      <div className="container-custom">
        <h2 className="section-title text-center">Our Services</h2>
        <p className="section-subtitle text-center">
          Comprehensive logistics solutions for every need
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow border border-gray-200 overflow-hidden"
            >
              <div className="p-8">
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">{service.name}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>

                <div className="border-t border-gray-200 pt-6">
                  <p className="text-2xl font-bold text-blue-600 mb-4">{service.price}</p>
                  <button className="btn-primary w-full">Learn More</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
