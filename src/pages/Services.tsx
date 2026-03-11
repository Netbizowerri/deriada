import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Truck, Globe, Package, ArrowRight, CheckCircle } from 'lucide-react'
import { Link } from 'react-router-dom'
import { companyInfo, seoKeywords } from '../data/company'

export default function Services() {
  const services = [
    {
      id: 'export',
      icon: Truck,
      title: 'Export Services',
      description: 'We provide structured export solutions for hardwood charcoal and agricultural commodities. From sourcing to international delivery, we ensure compliance, quality assurance, and secure shipping.',
      features: [
        'Premium Hardwood Charcoal Export',
        'Agricultural Commodities Export',
        'Quality Assurance & Inspection',
        'International Shipping & Documentation',
        'Compliance with Export Regulations'
      ]
    },
    {
      id: 'import',
      icon: Globe,
      title: 'Import Services',
      description: 'Our import services simplify global sourcing with full customs documentation, regulatory compliance, and reliable delivery to your destination.',
      features: [
        'Seamless Import Solutions',
        'Customs Documentation',
        'Regulatory Compliance',
        'Global Sourcing',
        'Reliable Delivery'
      ]
    },
    {
      id: 'logistics',
      icon: Package,
      title: 'Logistics Services',
      description: 'We offer freight forwarding, clearing & forwarding, cargo handling, and shipment tracking to ensure timely and secure delivery worldwide.',
      features: [
        'Freight Forwarding',
        'Clearing & Forwarding',
        'Cargo Handling',
        'Shipment Tracking',
        'Global Network'
      ]
    }
  ]

  return (
    <>
      <Helmet>
        <title>Services | {companyInfo.name}</title>
        <meta name="description" content="Explore our comprehensive export, import, and logistics services. Deriada Global Resources offers premium hardwood charcoal, agricultural commodities, and global trade solutions." />
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
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Services</h1>
            <p className="text-white/80 max-w-2xl mx-auto text-lg">
              Comprehensive trade and logistics solutions tailored to your business needs
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Detail */}
      {services.map((service, index) => (
        <section key={service.id} className={`section-padding ${index % 2 === 0 ? 'bg-white' : 'bg-brand-light'}`}>
          <div className="container-custom">
            <div className={`grid md:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 gold-gradient rounded-2xl flex items-center justify-center mb-6">
                  <service.icon className="text-brand-dark w-8 h-8" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">{service.title}</h2>
                <p className="text-gray-600 leading-relaxed mb-6">{service.description}</p>
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <CheckCircle className="text-brand-secondary flex-shrink-0" size={20} />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className="btn-primary inline-flex items-center gap-2"
                >
                  Get Started <ArrowRight size={20} />
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? 40 : -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="aspect-video bg-gradient-to-br from-brand-primary/10 to-brand-secondary/10 rounded-2xl flex items-center justify-center"
              >
                <div className="text-center p-8">
                  <service.icon className="w-20 h-20 text-brand-primary mx-auto mb-4" />
                  <h4 className="text-xl font-semibold text-brand-dark">{service.title}</h4>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA Section */}
      <section className="section-padding bg-brand-primary">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Need Custom Trade Solutions?
            </h2>
            <p className="text-white/90 mb-8 max-w-xl mx-auto">
              Contact us today to discuss your specific requirements.
            </p>
            <Link
              to="/contact"
              className="btn-secondary inline-flex items-center gap-2 text-lg"
            >
              Contact Us <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  )
}
