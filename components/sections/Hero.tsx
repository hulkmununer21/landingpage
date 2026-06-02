'use client'

import Link from 'next/link'

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20 md:py-32">
      <div className="container-custom text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Global B2B Raw Materials Platform
        </h1>
        <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
          Connect suppliers and buyers across Africa, Asia, and South America. Expert consultancy for efficient sourcing worldwide.
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-4">
          <Link
            href="/services"
            className="px-8 py-4 bg-white text-blue-600 font-bold rounded-lg hover:bg-gray-100 transition-colors"
          >
            Explore Services
          </Link>
          <Link
            href="/contact"
            className="px-8 py-4 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-400 transition-colors border border-white"
          >
            Get Consultancy
          </Link>
        </div>
      </div>
    </section>
  )
}
