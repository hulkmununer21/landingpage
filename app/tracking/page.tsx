'use client'

import { useState } from 'react'
import { useSearchParams } from 'next/navigation'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

interface TrackingUpdate {
  date: string
  time: string
  status: string
  location: string
  description: string
}

interface TrackingData {
  trackingNumber: string
  status: 'In Transit' | 'Delivered' | 'Out for Delivery' | 'Exception'
  sender: string
  recipient: string
  estimatedDelivery: string
  updates: TrackingUpdate[]
}

// Mock tracking data - replace with actual API call
const mockTrackingData: { [key: string]: TrackingData } = {
  'LP123456789': {
    trackingNumber: 'LP123456789',
    status: 'Out for Delivery',
    sender: 'Tech Store NYC, New York, NY 10001',
    recipient: 'John Doe, Los Angeles, CA 90001',
    estimatedDelivery: '2024-01-15',
    updates: [
      {
        date: '2024-01-13',
        time: '09:30 AM',
        status: 'In Transit',
        location: 'Chicago, IL',
        description: 'Package is in transit to destination',
      },
      {
        date: '2024-01-14',
        time: '02:15 PM',
        status: 'Out for Delivery',
        location: 'Los Angeles, CA',
        description: 'Package is out for delivery today',
      },
      {
        date: '2024-01-12',
        time: '11:45 AM',
        status: 'Picked Up',
        location: 'New York, NY',
        description: 'Package picked up from sender',
      },
    ],
  },
}

export default function Tracking() {
  const searchParams = useSearchParams()
  const initialTrackingId = searchParams.get('id') || ''

  const [trackingNumber, setTrackingNumber] = useState(initialTrackingId)
  const [trackingData, setTrackingData] = useState<TrackingData | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [notificationPrefs, setNotificationPrefs] = useState({
    email: true,
    sms: false,
  })

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)
    setTrackingData(null)

    try {
      // Simulate API call - replace with actual API endpoint
      await new Promise(resolve => setTimeout(resolve, 500))

      const data = mockTrackingData[trackingNumber.toUpperCase()]

      if (data) {
        setTrackingData(data)
      } else {
        setError('Tracking number not found. Please check and try again.')
      }
    } catch (err) {
      setError('Failed to retrieve tracking information. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Delivered':
        return 'text-green-600'
      case 'Out for Delivery':
        return 'text-blue-600'
      case 'In Transit':
        return 'text-purple-600'
      case 'Exception':
        return 'text-red-600'
      default:
        return 'text-gray-600'
    }
  }

  const getStatusBg = (status: string) => {
    switch (status) {
      case 'Delivered':
        return 'bg-green-100'
      case 'Out for Delivery':
        return 'bg-blue-100'
      case 'In Transit':
        return 'bg-purple-100'
      case 'Exception':
        return 'bg-red-100'
      default:
        return 'bg-gray-100'
    }
  }

  return (
    <>
      <Header />
      <main className="container-custom py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-4 text-center">Track Your Package</h1>
          <p className="text-lg text-gray-600 text-center mb-12">
            Enter your tracking number to get real-time updates
          </p>

          {/* Search Form */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-12">
            <form onSubmit={handleSearch}>
              <div className="flex flex-col md:flex-row gap-4">
                <input
                  type="text"
                  placeholder="Enter tracking number (e.g., LP123456789)"
                  value={trackingNumber}
                  onChange={(e) => setTrackingNumber(e.target.value.toUpperCase())}
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  disabled={loading}
                  required
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="btn-primary whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? 'Searching...' : 'Track Now'}
                </button>
              </div>
            </form>

            {error && (
              <div className="mt-4 p-4 bg-red-50 text-red-800 border border-red-200 rounded-lg">
                {error}
              </div>
            )}
          </div>

          {/* Tracking Results */}
          {trackingData && (
            <div className="space-y-8">
              {/* Status Overview */}
              <div className="bg-white rounded-lg shadow-md p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h3 className="text-sm font-semibold text-gray-600 mb-2">Tracking Number</h3>
                    <p className="text-2xl font-bold text-gray-900">{trackingData.trackingNumber}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-gray-600 mb-2">Status</h3>
                    <p className={`text-2xl font-bold ${getStatusColor(trackingData.status)}`}>
                      {trackingData.status}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-sm font-semibold text-gray-600 mb-2">From</h3>
                    <p className="text-gray-900">{trackingData.sender}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-gray-600 mb-2">To</h3>
                    <p className="text-gray-900">{trackingData.recipient}</p>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-gray-200">
                  <h3 className="text-sm font-semibold text-gray-600 mb-2">Estimated Delivery</h3>
                  <p className="text-lg font-semibold text-blue-600">
                    {new Date(trackingData.estimatedDelivery).toLocaleDateString('en-US', {
                      weekday: 'long',
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </p>
                </div>
              </div>

              {/* Tracking Timeline */}
              <div className="bg-white rounded-lg shadow-md p-8">
                <h2 className="text-2xl font-bold mb-6">Delivery Timeline</h2>
                <div className="space-y-6">
                  {trackingData.updates.map((update, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="flex flex-col items-center">
                        <div className={`w-4 h-4 rounded-full ${getStatusBg(update.status)} border-2 border-blue-600`} />
                        {index < trackingData.updates.length - 1 && (
                          <div className="w-1 h-12 bg-gray-200 mt-2" />
                        )}
                      </div>
                      <div className="pb-4">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                          <div>
                            <p className="font-semibold text-gray-900">{update.status}</p>
                            <p className="text-gray-600">{update.location}</p>
                          </div>
                          <div className="text-right">
                            <p className="text-sm text-gray-600">{update.date}</p>
                            <p className="text-sm text-gray-600">{update.time}</p>
                          </div>
                        </div>
                        <p className="text-gray-600 mt-2">{update.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Notification Preferences */}
              <div className="bg-blue-50 rounded-lg shadow-md p-8 border border-blue-200">
                <h2 className="text-xl font-bold mb-4 text-gray-900">Notification Preferences</h2>
                <p className="text-gray-600 mb-6">
                  Get updates for this shipment. Your communication preferences are protected under our
                  <a href="/privacy-policy" className="text-blue-600 hover:underline ml-1">
                    Privacy Policy
                  </a>
                </p>

                <div className="space-y-4">
                  <label className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      checked={notificationPrefs.email}
                      onChange={(e) =>
                        setNotificationPrefs(prev => ({ ...prev, email: e.target.checked }))
                      }
                      className="mt-1 w-4 h-4 border-gray-300 rounded"
                    />
                    <span className="text-gray-700">
                      Email updates (Recommended) - Get delivery updates via email
                    </span>
                  </label>

                  <label className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      checked={notificationPrefs.sms}
                      onChange={(e) =>
                        setNotificationPrefs(prev => ({ ...prev, sms: e.target.checked }))
                      }
                      className="mt-1 w-4 h-4 border-gray-300 rounded"
                    />
                    <span className="text-gray-700">
                      SMS updates (Optional) - Receive text message alerts. Standard SMS rates apply.
                    </span>
                  </label>
                </div>

                <button className="btn-primary mt-6">Save Preferences</button>
              </div>
            </div>
          )}

          {/* Example Tracking Number */}
          {!trackingData && !error && (
            <div className="bg-gray-50 rounded-lg p-8 text-center">
              <p className="text-gray-600 mb-4">Try tracking with example number:</p>
              <button
                onClick={() => {
                  setTrackingNumber('LP123456789')
                  // Trigger search
                  setTimeout(() => {
                    setTrackingData(mockTrackingData['LP123456789'])
                  }, 500)
                }}
                className="text-blue-600 hover:underline font-semibold"
              >
                LP123456789
              </button>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  )
}
