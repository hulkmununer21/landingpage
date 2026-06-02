'use client'

export default function WhatWeDo() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container-custom">
        <h2 className="section-title text-center">What We Do</h2>
        <p className="section-subtitle text-center">
          Blue Horizon connects global businesses with raw material opportunities
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <div className="bg-white rounded-lg shadow-md p-8 border-l-4 border-blue-500">
            <div className="text-4xl mb-4">🌍</div>
            <h3 className="text-xl font-bold mb-3">Global Sourcing Network</h3>
            <p className="text-gray-600">
              We connect suppliers from Africa and Asia with buyers worldwide, specializing in raw materials, commodities, and B2B products. Our verified network spans multiple countries and industries.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8 border-l-4 border-green-500">
            <div className="text-4xl mb-4">💼</div>
            <h3 className="text-xl font-bold mb-3">B2B Trade Facilitation</h3>
            <p className="text-gray-600">
              We facilitate direct connections between sellers and buyers, provide trade documentation support, manage regulatory compliance, and ensure secure transactions in international B2B commerce.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8 border-l-4 border-purple-500">
            <div className="text-4xl mb-4">📊</div>
            <h3 className="text-xl font-bold mb-3">Expert Consultancy</h3>
            <p className="text-gray-600">
              Our consultancy team helps businesses navigate complex global supply chains, optimize sourcing strategies, perform market research, and manage supplier relationships efficiently.
            </p>
          </div>
        </div>

        <div className="mt-12 bg-white rounded-lg shadow-lg p-8 md:p-12 max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold mb-4 text-center">Why Choose Blue Horizon?</h3>
          
          <div className="grid grid-cols-2 md:grid-cols-2 gap-6">
            <div className="flex items-start">
              <span className="text-2xl text-blue-600 mr-3">✓</span>
              <div>
                <h4 className="font-bold text-gray-900">Verified Partners</h4>
                <p className="text-sm text-gray-600">All suppliers and buyers are verified for legitimacy</p>
              </div>
            </div>
            <div className="flex items-start">
              <span className="text-2xl text-blue-600 mr-3">✓</span>
              <div>
                <h4 className="font-bold text-gray-900">Secure Transactions</h4>
                <p className="text-sm text-gray-600">Protected payment systems and escrow options</p>
              </div>
            </div>
            <div className="flex items-start">
              <span className="text-2xl text-blue-600 mr-3">✓</span>
              <div>
                <h4 className="font-bold text-gray-900">Trade Compliance</h4>
                <p className="text-sm text-gray-600">Expertise in import/export regulations worldwide</p>
              </div>
            </div>
            <div className="flex items-start">
              <span className="text-2xl text-blue-600 mr-3">✓</span>
              <div>
                <h4 className="font-bold text-gray-900">Market Intelligence</h4>
                <p className="text-sm text-gray-600">Real-time pricing and trend analysis data</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center bg-blue-50 rounded-lg p-8">
          <div>
            <div className="text-4xl font-bold text-blue-600">50+</div>
            <p className="text-gray-700 font-semibold">Countries Connected</p>
          </div>
          <div>
            <div className="text-4xl font-bold text-blue-600">1000+</div>
            <p className="text-gray-700 font-semibold">Verified Suppliers</p>
          </div>
          <div>
            <div className="text-4xl font-bold text-blue-600">$100M+</div>
            <p className="text-gray-700 font-semibold">Trade Volume Facilitated</p>
          </div>
        </div>
      </div>
    </section>
  )
}
