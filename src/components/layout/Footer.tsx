import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react'
import { companyInfo, navigationItems } from '../../data/company'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-brand-dark text-white">
      {/* Main Footer */}
      <div className="container-custom section-padding pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 gold-gradient rounded-lg flex items-center justify-center">
                <span className="text-brand-dark font-bold text-lg">D</span>
              </div>
              <span className="font-bold text-lg">Deriada</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              {companyInfo.description}
            </p>
            <div className="flex gap-4 pt-2">
              <a href="#" className="text-gray-400 hover:text-brand-accent transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-brand-accent transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-brand-accent transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-brand-accent transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-brand-accent">Quick Links</h3>
            <ul className="space-y-3">
              {navigationItems.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="text-gray-400 hover:text-brand-accent transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-brand-accent">Our Services</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/services" className="text-gray-400 hover:text-brand-accent transition-colors text-sm">
                  Export Services
                </Link>
              </li>
              <li>
                <Link to="/import-services" className="text-gray-400 hover:text-brand-accent transition-colors text-sm">
                  Import Services
                </Link>
              </li>
              <li>
                <Link to="/logistics" className="text-gray-400 hover:text-brand-accent transition-colors text-sm">
                  Logistics & Freight
                </Link>
              </li>
              <li>
                <Link to="/export-products" className="text-gray-400 hover:text-brand-accent transition-colors text-sm">
                  Export Products
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-brand-accent">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-brand-accent flex-shrink-0 mt-0.5" />
                <span className="text-gray-400 text-sm">{companyInfo.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="text-brand-accent flex-shrink-0" />
                <span className="text-gray-400 text-sm">{companyInfo.phone}</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} className="text-brand-accent flex-shrink-0" />
                <span className="text-gray-400 text-sm">{companyInfo.email}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © {currentYear} {companyInfo.name}. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-500 hover:text-brand-accent transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-500 hover:text-brand-accent transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
