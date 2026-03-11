import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Ship, Truck, Package, MapPin, ArrowRight, CheckCircle } from 'lucide-react'
import { Link } from 'react-router-dom'
import { companyInfo, seoKeywords } from '../data/company'

export default function Logistics() {
  const services = [
    {
      icon: Ship,
      title: 'Freight Forwarding',
      description: 'International sea and air freight services with competitive rates and reliable schedules.'
    },
    {
      icon: Truck,
      title: 'Clearing & Forwarding',
      description: 'Professional customs clearance and documentation services for seamless border crossings.'
    },
    {
      icon: Package,
      title: 'Cargo Handling',
      description: 'Safe loading, unloading, and handling of all types of cargo with modern equipment.'
    },
    {
      icon: MapPin,
      title: 'Shipment Tracking',
      description: 'Real-time tracking and updates on your shipments from origin to destination.'
    }
  ]

  return (
    <>
      <Helmet>
        <title>Logistics Services | {companyInfo.name}</title>
        <meta name="description" content="Professional logistics services including freight forwarding, clearing & forwarding, cargo handling, and shipment tracking. Reliable global shipping solutions from West Africa." />
        <meta name="keywords" content={seoKeywords.join(', ')} />
      </Helmet>

      {/* Page Header */}
      <section className="pt-32 pb-16 bg-brand-primary">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Logistics Services</h1>
            <p className="text-white/80 max-w-2xl mx-auto text-lg">
              Reliable freight forwarding and shipping solutions to connect you with global markets
            </p>
          </motion.div>
        </div>
      </section>

      {/* Introduction */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-6">
                Your Trusted Logistics Partner
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                We offer freight forwarding, clearing & forwarding, cargo handling, and shipment tracking to ensure timely and secure delivery worldwide. Our experienced team manages every aspect of your logistics needs.
              </p>
              <p className="text-gray-600 leading-relaxed">
                With our global network of carriers and partners, we provide end-to-end logistics solutions that simplify your supply chain and reduce costs.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="aspect-video bg-gradient-to-br from-brand-primary/10 to-brand-secondary/10 rounded-2xl flex items-center justify-center"
            >
              <Ship className="w-24 h-24 text-brand-primary" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-brand-light">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">Our Logistics Solutions</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Comprehensive shipping and logistics services</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-8 shadow-lg flex gap-6"
              >
                <div className="w-16 h-16 gold-gradient rounded-xl flex items-center justify-center flex-shrink-0">
                  <service.icon className="text-brand-dark w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-brand-dark mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Logistics */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">Why Choose Our Logistics?</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              'Global Network Coverage',
              'Competitive Shipping Rates',
              'Real-time Tracking',
              'Experienced Customs Team',
              'Secure Cargo Handling',
              'On-time Delivery'
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-3"
              >
                <CheckCircle className="text-brand-secondary flex-shrink-0" size={24} />
                <span className="text-gray-700 font-medium">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-brand-primary">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Need Logistics Support?
            </h2>
            <p className="text-white/90 mb-8 max-w-xl mx-auto">
              Get a quote for your shipping and logistics requirements.
            </p>
            <Link
              to="/contact"
              className="btn-secondary inline-flex items-center gap-2 text-lg"
            >
              Get a Quote <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  )
}
