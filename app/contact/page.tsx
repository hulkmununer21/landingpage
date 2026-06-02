'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

interface ContactFormData {
  name: string
  email: string
  phone: string
  subject: string
  message: string
  consentEmail: boolean
  consentSMS: boolean
}

export default function Contact() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    consentEmail: false,
    consentSMS: false,
  })

  const [loading, setLoading] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error'; message: string } | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked
      setFormData(prev => ({
        ...prev,
        [name]: checked,
      }))
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value,
      }))
    }
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    setSubmitStatus(null)

    try {
      // Here you would typically send the form data to your backend
      // For now, we'll just validate and show a success message
      
      if (!formData.name || !formData.email || !formData.message) {
        setSubmitStatus({
          type: 'error',
          message: 'Please fill in all required fields.',
        })
        setLoading(false)
        return
      }

      // Simulate sending the message
      await new Promise(resolve => setTimeout(resolve, 1000))

      setSubmitStatus({
        type: 'success',
        message: 'Thank you for your message! We will get back to you within 24 hours.',
      })

      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        consentEmail: false,
        consentSMS: false,
      })
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'Failed to send message. Please try again later.',
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <Header />
      <main className="container-custom py-16">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-4 text-center">Contact Blue Horizon</h1>
          <p className="text-xl text-gray-600 text-center mb-12">
            Interested in B2B raw materials trading or consultancy? We're here to help connect your business with global opportunities.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="text-3xl mb-3">📧</div>
              <h3 className="font-bold mb-2">Email</h3>
              <a href={`mailto:${process.env.NEXT_PUBLIC_COMPANY_EMAIL}`} className="text-blue-600 hover:underline">
                {process.env.NEXT_PUBLIC_COMPANY_EMAIL}
              </a>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-3">📱</div>
              <h3 className="font-bold mb-2">Phone</h3>
              <a href={`tel:${process.env.NEXT_PUBLIC_COMPANY_PHONE}`} className="text-blue-600 hover:underline">
                {process.env.NEXT_PUBLIC_COMPANY_PHONE}
              </a>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-3">🕐</div>
              <h3 className="font-bold mb-2">Hours</h3>
              <p className="text-gray-600">24/7 Support Available</p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <form onSubmit={handleSubmit}>
              {/* Status Messages */}
              {submitStatus && (
                <div className={`mb-6 p-4 rounded-lg ${
                  submitStatus.type === 'success'
                    ? 'bg-green-50 text-green-800 border border-green-200'
                    : 'bg-red-50 text-red-800 border border-red-200'
                }`}>
                  {submitStatus.message}
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Your name"
                    required
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="your@email.com"
                    required
                  />
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="+1-555-0000"
                  />
                </div>

                {/* Subject */}
                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold mb-2">
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Select a subject</option>
                    <option value="sourcing">Supplier Sourcing Inquiry</option>
                    <option value="consultancy">Consultancy Services</option>
                    <option value="buyer">Buyer Connection</option>
                    <option value="partnership">Partnership Opportunity</option>
                    <option value="support">Customer Support</option>
                  </select>
                </div>
              </div>

              {/* Message */}
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-semibold mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Tell us more about your inquiry..."
                  required
                />
              </div>

              {/* Consent Checkboxes */}
              <div className="mb-6 space-y-4">
                <div className="flex items-start">
                  <input
                    type="checkbox"
                    id="consentEmail"
                    name="consentEmail"
                    checked={formData.consentEmail}
                    onChange={handleChange}
                    className="mt-1 mr-3 w-4 h-4 border-gray-300 rounded"
                  />
                  <label htmlFor="consentEmail" className="text-sm text-gray-600">
                    I consent to receive email updates about Blue Horizon services, market insights, and trading opportunities.
                    <a href="/privacy-policy" className="text-blue-600 hover:underline ml-1">
                      Privacy Policy
                    </a>
                  </label>
                </div>

                <div className="flex items-start">
                  <input
                    type="checkbox"
                    id="consentSMS"
                    name="consentSMS"
                    checked={formData.consentSMS}
                    onChange={handleChange}
                    className="mt-1 mr-3 w-4 h-4 border-gray-300 rounded"
                  />
                  <label htmlFor="consentSMS" className="text-sm text-gray-600">
                    I consent to receive SMS updates about my business inquiries, trading updates, and market information.
                    Standard SMS rates may apply.
                  </label>
                </div>

                <div className="flex items-start">
                  <input
                    type="checkbox"
                    id="consentTerms"
                    name="consentTerms"
                    required
                    className="mt-1 mr-3 w-4 h-4 border-gray-300 rounded"
                  />
                  <label htmlFor="consentTerms" className="text-sm text-gray-600">
                    I agree to the
                    <a href="/terms-of-service" className="text-blue-600 hover:underline mx-1">
                      Terms of Service
                    </a>
                    and
                    <a href="/privacy-policy" className="text-blue-600 hover:underline ml-1">
                      Privacy Policy
                    </a>
                  </label>
                </div>
              </div>

              {/* Privacy Notice */}
              <div className="mb-8 p-4 bg-blue-50 border border-blue-200 rounded-lg text-sm text-gray-700">
                <strong>Privacy Notice:</strong> Your data is protected under our privacy policy. We will not
                share your information with third parties without consent. You can change communication preferences
                anytime.
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
