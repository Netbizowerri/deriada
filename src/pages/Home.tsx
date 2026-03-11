import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle, Truck, Globe, Package, Star, ChevronRight } from 'lucide-react'
import { companyInfo, heroData, servicesData, whyChooseUs, seoKeywords } from '../data/company'
import { products } from '../data/products'

export default function Home() {
  const featuredProducts = products.slice(0, 8)

  return (
    <>
      <Helmet>
        <title>Home | {companyInfo.name}</title>
        <meta name="description" content={heroData.subtitle} />
        <meta name="keywords" content={seoKeywords.join(', ')} />
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center hero-gradient">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>

        <div className="container-custom relative z-10 pt-20">
          <div className="max-w-3xl">
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
            >
              {heroData.title}
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed"
            >
              {heroData.subtitle}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                to="/export-products"
                className="btn-secondary inline-flex items-center justify-center gap-2 text-lg"
              >
                {heroData.ctaPrimary}
                <ArrowRight size={20} />
              </Link>
              <Link
                to="/contact"
                className="btn-outline border-white text-white hover:bg-white hover:text-brand-primary inline-flex items-center justify-center gap-2 text-lg"
              >
                {heroData.ctaSecondary}
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="w-1.5 h-3 bg-white rounded-full"
            />
          </div>
        </motion.div>
      </section>

      {/* About Preview Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-6">
                {companyInfo.name.split(' Limited')[0]}
              </h2>
              <h3 className="text-xl text-brand-accent font-semibold mb-4">
                Who We Are
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                {companyInfo.description}
              </p>
              <div className="space-y-3">
                {companyInfo.certifications.map((cert, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="text-brand-secondary flex-shrink-0" size={20} />
                    <span className="text-gray-700">{cert}</span>
                  </div>
                ))}
              </div>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-brand-primary font-semibold mt-6 hover:text-brand-secondary transition-colors"
              >
                Learn More <ChevronRight size={20} />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="aspect-square bg-gradient-to-br from-brand-primary/10 to-brand-secondary/10 rounded-2xl flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-24 h-24 gold-gradient rounded-full flex items-center justify-center mx-auto mb-6">
                    <Globe className="text-brand-dark w-12 h-12" />
                  </div>
                  <h4 className="text-2xl font-bold text-brand-dark mb-2">Global Trade Excellence</h4>
                  <p className="text-gray-600">Connecting West Africa to the World</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Summary Section */}
      <section className="section-padding bg-brand-light">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">
              Our Core Services
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive trade and logistics solutions tailored to meet your global business needs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {servicesData.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="service-card"
              >
                <div className="w-14 h-14 gold-gradient rounded-xl flex items-center justify-center mb-6">
                  {service.icon === 'Truck' && <Truck className="text-brand-dark w-7 h-7" />}
                  {service.icon === 'Globe' && <Globe className="text-brand-dark w-7 h-7" />}
                  {service.icon === 'Package' && <Package className="text-brand-dark w-7 h-7" />}
                </div>
                <h3 className="text-xl font-bold text-brand-dark mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">
              Our Export Products
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Premium quality agricultural products sourced from the finest West African farms
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-brand-light rounded-xl p-6 text-center card-hover"
              >
                <div className="w-12 h-12 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Package className="text-brand-primary w-6 h-6" />
                </div>
                <h4 className="font-semibold text-brand-dark">{product.name}</h4>
                <span className="text-sm text-brand-secondary">{product.category}</span>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              to="/export-products"
              className="btn-primary inline-flex items-center gap-2"
            >
              View All Products <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section-padding bg-brand-primary">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Deriada?
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto">
              Your trusted partner for seamless global trade operations
            </p>
          </motion.div>

          <div className="grid md:grid-cols-5 gap-6">
            {whyChooseUs.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center"
              >
                <div className="w-12 h-12 gold-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="text-brand-dark w-6 h-6" />
                </div>
                <h4 className="font-semibold text-white">{point}</h4>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner Section */}
      <section className="section-padding bg-brand-light">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-brand-primary to-brand-secondary rounded-2xl p-8 md:p-12 text-center"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Ready to Partner with a Reliable Global Trade Company?
            </h2>
            <p className="text-white/90 mb-8 max-w-2xl mx-auto">
              Get in touch with us today for product orders, export documentation, import services, and logistics solutions.
            </p>
            <Link
              to="/contact"
              className="btn-secondary inline-flex items-center gap-2 text-lg"
            >
              Request a Quote <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  )
}
