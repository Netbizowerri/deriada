import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Package, Filter, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { products, productCategories, getProductsByCategory } from '../data/products'
import { companyInfo, seoKeywords } from '../data/company'

export default function ExportProducts() {
  const [activeCategory, setActiveCategory] = useState('All')
  const filteredProducts = getProductsByCategory(activeCategory)

  return (
    <>
      <Helmet>
        <title>Export Products | {companyInfo.name}</title>
        <meta name="description" content="Explore our premium export products including hardwood charcoal, ginger, garlic, spices, soybeans, and more. Quality agricultural commodities from West Africa." />
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
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Export Products</h1>
            <p className="text-white/80 max-w-2xl mx-auto text-lg">
              Premium quality agricultural products sourced from the finest West African farms
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="bg-brand-light py-8">
        <div className="container-custom">
          <div className="flex flex-wrap items-center justify-center gap-4">
            <div className="flex items-center gap-2 text-brand-dark">
              <Filter size={20} />
              <span className="font-medium">Filter by:</span>
            </div>
            {productCategories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  activeCategory === category
                    ? 'bg-brand-primary text-white'
                    : 'bg-white text-brand-dark hover:bg-brand-primary/10'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="bg-brand-light rounded-xl p-6 card-hover"
              >
                <div className="w-16 h-16 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Package className="text-brand-primary w-8 h-8" />
                </div>
                <h3 className="font-semibold text-brand-dark text-center mb-2">{product.name}</h3>
                <div className="text-center">
                  <span className="inline-block bg-brand-secondary/10 text-brand-secondary px-3 py-1 rounded-full text-sm">
                    {product.category}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <Package className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-500">No products found in this category.</p>
            </div>
          )}
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
              Interested in Our Products?
            </h2>
            <p className="text-white/90 mb-8 max-w-xl mx-auto">
              Contact us for product specifications, pricing, and export arrangements.
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
