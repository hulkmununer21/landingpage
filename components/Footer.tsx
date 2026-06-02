import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center font-bold text-white">
                BH
              </div>
              <span className="font-bold text-lg">Blue Horizon</span>
            </div>
            <p className="text-gray-400">
              Global B2B platform connecting suppliers and buyers for raw materials across Africa, Asia, and South America.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/" className="hover:text-white">Home</Link></li>
              <li><Link href="/services" className="hover:text-white">Services</Link></li>
              <li><Link href="/tracking" className="hover:text-white">Track Package</Link></li>
              <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
            </ul>
          </div>

          {/* Compliance */}
          <div>
            <h4 className="font-bold mb-4">Compliance & Legal</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/privacy-policy" className="hover:text-white">Privacy Policy</Link></li>
              <li><Link href="/terms-of-service" className="hover:text-white">Terms of Service</Link></li>
              <li><Link href="/gdpr" className="hover:text-white">GDPR</Link></li>
              <li><Link href="/cookie-policy" className="hover:text-white">Cookie Policy</Link></li>
              <li><Link href="/data-processing" className="hover:text-white">Data Processing</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Email: {process.env.NEXT_PUBLIC_COMPANY_EMAIL}</li>
              <li>Phone: {process.env.NEXT_PUBLIC_COMPANY_PHONE}</li>
              <li className="pt-2 text-sm">
                {process.env.NEXT_PUBLIC_COMPANY_ADDRESS}
              </li>
              <li className="pt-2">
                <span className="text-sm">Global B2B platform for raw materials & consultancy services.</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} Logistics Pro. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0 text-gray-400 text-sm">
              <Link href="/privacy-policy" className="hover:text-white">Privacy</Link>
              <Link href="/terms-of-service" className="hover:text-white">Terms</Link>
              <Link href="/accessibility" className="hover:text-white">Accessibility</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
