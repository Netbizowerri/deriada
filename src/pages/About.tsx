import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Award, Users, Globe, Leaf, CheckCircle, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { companyInfo, seoKeywords } from '../data/company'

export default function About() {
  return (
    <>
      <Helmet>
        <title>About Us | {companyInfo.name}</title>
        <meta name="description" content="Learn about Deriada Global Resources Limited, a certified export company under the Nigerian Export Promotion Council, specializing in agricultural exports, import services, and logistics." />
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
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">About Us</h1>
            <p className="text-white/80 max-w-2xl mx-auto text-lg">
              Your trusted partner in global trade, connecting West Africa to the world
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-6">
                Driving Trade Excellence Since Inception
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                {companyInfo.description}
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                We are committed to providing premium quality products and seamless services to our clients worldwide. Our team of experienced professionals ensures that every transaction is handled with the utmost care and professionalism.
              </p>
              <div className="flex flex-wrap gap-3">
                {companyInfo.certifications.map((cert, index) => (
                  <span key={index} className="bg-brand-light text-brand-primary px-4 py-2 rounded-full text-sm font-medium">
                    {cert}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="bg-brand-primary/5 rounded-2xl p-6 text-center">
                <Award className="w-12 h-12 text-brand-accent mx-auto mb-4" />
                <h3 className="text-3xl font-bold text-brand-dark">NEPC</h3>
                <p className="text-gray-600 text-sm">Certified</p>
              </div>
              <div className="bg-brand-secondary/5 rounded-2xl p-6 text-center">
                <Globe className="w-12 h-12 text-brand-accent mx-auto mb-4" />
                <h3 className="text-3xl font-bold text-brand-dark">Global</h3>
                <p className="text-gray-600 text-sm">Network</p>
              </div>
              <div className="bg-brand-accent/10 rounded-2xl p-6 text-center">
                <Users className="w-12 h-12 text-brand-accent mx-auto mb-4" />
                <h3 className="text-3xl font-bold text-brand-dark">Expert</h3>
                <p className="text-gray-600 text-sm">Team</p>
              </div>
              <div className="bg-brand-primary/10 rounded-2xl p-6 text-center">
                <Leaf className="w-12 h-12 text-brand-accent mx-auto mb-4" />
                <h3 className="text-3xl font-bold text-brand-dark">Sustainable</h3>
                <p className="text-gray-600 text-sm">Sourcing</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-brand-light">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-lg"
            >
              <div className="w-14 h-14 gold-gradient rounded-xl flex items-center justify-center mb-6">
                <Award className="text-brand-dark w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-brand-dark mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To be the leading export and import company in West Africa, delivering premium quality products and exceptional services while fostering sustainable trade relationships that benefit communities and businesses alike.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-2xl p-8 shadow-lg"
            >
              <div className="w-14 h-14 gold-gradient rounded-xl flex items-center justify-center mb-6">
                <Globe className="text-brand-dark w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-brand-dark mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To bridge the gap between West African producers and global markets, creating lasting partnerships that drive economic growth and development across the region.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">Our Core Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">The principles that guide everything we do</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Quality', desc: 'We maintain the highest standards in all our products and services' },
              { title: 'Integrity', desc: 'Honest and transparent business practices in every transaction' },
              { title: 'Reliability', desc: 'Consistent delivery on our commitments to clients' }
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="text-center p-8"
              >
                <div className="w-16 h-16 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="text-brand-primary w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-brand-dark mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

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
              Ready to Work with Us?
            </h2>
            <p className="text-white/90 mb-8 max-w-xl mx-auto">
              Partner with a company that understands global trade and delivers results.
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
