import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { Mail, Phone, MapPin, Send, CheckCircle, Loader2 } from 'lucide-react'
import { companyInfo, seoKeywords } from '../data/company'

// Formspree form ID - replace with your actual form ID
const FORMSPREE_FORM_ID = 'YOUR_FORMSPREE_FORM_ID'

interface FormData {
  fullName: string
  companyName: string
  email: string
  phone: string
  serviceRequired: string
  message: string
}

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<FormData>()

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true)
    setSubmitStatus('idle')
    
    try {
      const response = await fetch(`https://formspree.io/f/${FORMSPREE_FORM_ID}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      
      if (response.ok) {
        setSubmitStatus('success')
        reset()
      } else {
        setSubmitStatus('error')
      }
    } catch {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const serviceOptions = [
    'Export Services',
    'Import Services',
    'Logistics Services',
    'Product Inquiry',
    'Partnership',
    'Other'
  ]

  return (
    <>
      <Helmet>
        <title>Contact Us | {companyInfo.name}</title>
        <meta name="description" content="Contact Deriada Global Resources Limited for product orders, export documentation, import services, and logistics solutions. We value partnerships and inquiries." />
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
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Contact Us</h1>
            <p className="text-white/80 max-w-2xl mx-auto text-lg">
              We value partnerships and inquiries. Get in touch with us today.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-brand-dark mb-6">Get in Touch</h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                We value partnerships and inquiries. Contact Deriada Global Resources Limited for product orders, export documentation, import services, and logistics solutions.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 gold-gradient rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-brand-dark w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-brand-dark mb-1">Address</h3>
                    <p className="text-gray-600">{companyInfo.address}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 gold-gradient rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="text-brand-dark w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-brand-dark mb-1">Phone</h3>
                    <p className="text-gray-600">{companyInfo.phone}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 gold-gradient rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="text-brand-dark w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-brand-dark mb-1">Email</h3>
                    <p className="text-gray-600">{companyInfo.email}</p>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div className="mt-8 p-6 bg-brand-light rounded-xl">
                <h3 className="font-semibold text-brand-dark mb-4">Business Hours</h3>
                <div className="space-y-2 text-gray-600">
                  <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                  <p>Saturday: 9:00 AM - 2:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-brand-light rounded-2xl p-8"
            >
              <h2 className="text-2xl font-bold text-brand-dark mb-6">Send Us a Message</h2>
              
              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg mb-6 flex items-center gap-3"
                >
                  <CheckCircle size={20} />
                  <span>Message sent successfully! We'll get back to you soon.</span>
                </motion.div>
              )}

              {submitStatus === 'error' && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg mb-6">
                  Something went wrong. Please try again or email us directly.
                </div>
              )}

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                    <input
                      type="text"
                      {...register('fullName', { required: 'Full name is required' })}
                      className="form-input"
                      placeholder="John Doe"
                    />
                    {errors.fullName && (
                      <p className="text-red-500 text-sm mt-1">{errors.fullName.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Company Name</label>
                    <input
                      type="text"
                      {...register('companyName')}
                      className="form-input"
                      placeholder="Your Company Ltd"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                    <input
                      type="email"
                      {...register('email', { 
                        required: 'Email is required',
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: 'Invalid email address'
                        }
                      })}
                      className="form-input"
                      placeholder="john@example.com"
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone *</label>
                    <input
                      type="tel"
                      {...register('phone', { required: 'Phone is required' })}
                      className="form-input"
                      placeholder="+234 XXX XXX XXXX"
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Service Required *</label>
                  <select
                    {...register('serviceRequired', { required: 'Please select a service' })}
                    className="form-input"
                  >
                    <option value="">Select a service</option>
                    {serviceOptions.map((option) => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </select>
                  {errors.serviceRequired && (
                    <p className="text-red-500 text-sm mt-1">{errors.serviceRequired.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Message *</label>
                  <textarea
                    {...register('message', { required: 'Please enter your message' })}
                    rows={5}
                    className="form-input resize-none"
                    placeholder="Tell us about your requirements..."
                  />
                  {errors.message && (
                    <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="animate-spin" size={20} />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}
