'use client'

import Link from 'next/link'

export default function CTA() {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
      <div className="container-custom text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Transform Your Supply Chain?</h2>
        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
          Join thousands of businesses trusting Blue Horizon for efficient raw materials sourcing and B2B connections.
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-4">
          <Link
            href="/contact"
            className="px-8 py-4 bg-white text-blue-600 font-bold rounded-lg hover:bg-gray-100 transition-colors"
          >
            Start Today
          </Link>
          <Link
            href="/privacy-policy"
            className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-lg hover:bg-blue-700 transition-colors"
          >
            Learn About Security
          </Link>
        </div>
      </div>
    </section>
  )
}
