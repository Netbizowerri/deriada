import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Globe, FileCheck, Truck, Warehouse, ArrowRight, CheckCircle } from 'lucide-react'
import { Link } from 'react-router-dom'
import { companyInfo, seoKeywords } from '../data/company'

export default function ImportServices() {
  const features = [
    {
      icon: FileCheck,
      title: 'Customs Documentation',
      description: 'Complete documentation handling including customs clearance, import licenses, and regulatory compliance.'
    },
    {
      icon: Globe,
      title: 'Global Sourcing',
      description: 'Access to international suppliers and products from major markets worldwide.'
    },
    {
      icon: Warehouse,
      title: 'Warehousing',
      description: 'Secure storage solutions for imported goods with inventory management.'
    },
    {
      icon: Truck,
      title: 'Last Mile Delivery',
      description: 'Efficient transportation and delivery to your specified destination.'
    }
  ]

  const process = [
    { step: '01', title: 'Consultation', desc: 'We discuss your import requirements and identify the best sourcing options.' },
    { step: '02', title: 'Sourcing', desc: 'We connect you with verified suppliers and negotiate favorable terms.' },
    { step: '03', title: 'Documentation', desc: 'We handle all customs paperwork and ensure compliance with regulations.' },
    { step: '04', title: 'Delivery', desc: 'Your goods are shipped and delivered safely to your specified location.' }
  ]

  return (
    <>
      <Helmet>
        <title>Import Services | {companyInfo.name}</title>
        <meta name="description" content="Professional import services from Deriada Global Resources. We handle customs documentation, regulatory compliance, global sourcing, and reliable delivery." />
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
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Import Services</h1>
            <p className="text-white/80 max-w-2xl mx-auto text-lg">
              Seamless import solutions with customs compliance and reliable global sourcing
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
                Simplifying Your Import Operations
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Our import services simplify global sourcing with full customs documentation, regulatory compliance, and reliable delivery to your destination. We navigate the complexities of international trade so you can focus on growing your business.
              </p>
              <p className="text-gray-600 leading-relaxed">
                With our extensive network of carriers and customs brokers, we ensure your goods clear customs efficiently and reach you on time, every time.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="aspect-video bg-gradient-to-br from-brand-primary/10 to-brand-secondary/10 rounded-2xl flex items-center justify-center"
            >
              <Globe className="w-24 h-24 text-brand-primary" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section-padding bg-brand-light">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">Our Import Capabilities</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Comprehensive solutions for all your import needs</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg"
              >
                <div className="w-14 h-14 gold-gradient rounded-xl flex items-center justify-center mb-4">
                  <feature.icon className="text-brand-dark w-7 h-7" />
                </div>
                <h3 className="text-lg font-semibold text-brand-dark mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">Our Import Process</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">A streamlined approach to get your goods to market</p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6">
            {process.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 gold-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-brand-dark font-bold text-xl">{item.step}</span>
                </div>
                <h3 className="text-lg font-semibold text-brand-dark mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
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
              Need Help with Imports?
            </h2>
            <p className="text-white/90 mb-8 max-w-xl mx-auto">
              Contact us today to discuss your import requirements.
            </p>
            <Link
              to="/contact"
              className="btn-secondary inline-flex items-center gap-2 text-lg"
            >
              Get in Touch <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  )
}
