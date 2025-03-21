'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Navigation from '../components/Navigation'
import PageHeader from '../components/PageHeader'
import { useTranslation } from '../context/LanguageContext'

export default function Contact() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Hier können Sie die E-Mail-Adresse verarbeiten, z.B. an einen Server senden
    setSubmitted(true)
    setEmail('')
  }

  return (
    <main className="min-h-screen">
      <Navigation />
      
      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <PageHeader 
            titleKey="contact.title"
            descriptionKey="contact.description"
          />

          <div className="max-w-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-lg shadow-xl p-8"
            >
              {!submitted ? (
                <>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">
                    {useTranslation('contact.newsletter')}
                  </h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        {useTranslation('contact.email')}
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
                        placeholder="ihre.email@beispiel.de"
                      />
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      className="w-full bg-gradient-to-r from-[#4287f5] to-[#9d7cf5] text-white py-3 px-6 rounded-lg font-semibold hover:opacity-90 transition duration-200"
                    >
                      {useTranslation('contact.submit')}
                    </motion.button>
                  </form>
                </>
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center py-8"
                >
                  <div className="text-5xl mb-4">✓</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {useTranslation('contact.thanks')}
                  </h3>
                  <p className="text-gray-600">
                    {useTranslation('contact.success')}
                  </p>
                </motion.div>
              )}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-12 text-center"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {useTranslation('contact.direct')}
              </h3>
              <p className="text-gray-600 mb-2">
                CoreIT Advisory GmbH
              </p>
              <a
                href="mailto:info@coreit-advisory.de"
                className="text-blue-600 hover:text-blue-800 transition duration-200"
              >
                info@coreit-advisory.de
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </main>
  )
} 