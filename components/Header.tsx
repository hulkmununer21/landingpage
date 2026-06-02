'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="container-custom flex justify-between items-center h-16">
        <Link href="/" className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold">
            BH
          </div>
          <span className="font-bold text-xl text-gray-900">Blue Horizon</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <Link href="/" className="text-gray-600 hover:text-gray-900 font-medium">
            Home
          </Link>
          <Link href="/services" className="text-gray-600 hover:text-gray-900 font-medium">
            Services
          </Link>
          <Link href="/tracking" className="text-gray-600 hover:text-gray-900 font-medium">
            Track Package
          </Link>
          <Link href="/contact" className="text-gray-600 hover:text-gray-900 font-medium">
            Contact
          </Link>
          <Link href="/privacy-policy" className="text-gray-600 hover:text-gray-900 font-medium text-sm">
            Privacy
          </Link>
        </div>

        {/* CTA Button */}
        <button className="btn-primary hidden md:inline-block">Get Started</button>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="absolute top-16 left-0 right-0 bg-white shadow-lg md:hidden">
            <div className="flex flex-col p-4 space-y-4">
              <Link href="/" className="text-gray-600 hover:text-gray-900">Home</Link>
              <Link href="/services" className="text-gray-600 hover:text-gray-900">Services</Link>
              <Link href="/tracking" className="text-gray-600 hover:text-gray-900">Track Package</Link>
              <Link href="/contact" className="text-gray-600 hover:text-gray-900">Contact</Link>
              <Link href="/privacy-policy" className="text-gray-600 hover:text-gray-900 text-sm">Privacy Policy</Link>
              <Link href="/terms-of-service" className="text-gray-600 hover:text-gray-900 text-sm">Terms of Service</Link>
              <button className="btn-primary w-full">Get Started</button>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
