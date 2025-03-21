'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Navigation from '../components/Navigation'
import PageHeader from '../components/PageHeader'
import { useTranslation } from '../context/LanguageContext'

const features = [1, 2, 3, 4]

export default function About() {
  // Hole alle Übersetzungen direkt
  const ceoRole = useTranslation('about.ceo.role')
  const ceoDescription = useTranslation('about.ceo.description')

  const featureTitles = features.map(index => 
    useTranslation(`about.features.title${index}`)
  )
  const featureDescriptions = features.map(index => 
    useTranslation(`about.features.desc${index}`)
  )

  return (
    <main className="min-h-screen">
      <Navigation />
      
      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <PageHeader 
            titleKey="about.title"
            descriptionKey="about.description"
          />

          {/* CEO Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-[#4287f5] to-[#9d7cf5] rounded-lg blur-2xl opacity-30"></div>
                <div className="relative">
                  <Image
                    src="/images/Beraterprofil IMG 1968 (1).jpg"
                    alt="Jan Michalewicz - CEO"
                    width={400}
                    height={400}
                    className="rounded-lg shadow-xl object-cover"
                    priority
                  />
                </div>
              </div>
              <div className="space-y-6">
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="text-3xl font-bold bg-gradient-to-r from-[#4287f5] to-[#9d7cf5] bg-clip-text text-transparent"
                >
                  Jan Michalewicz
                  <span className="block text-xl text-gray-700 mt-1">{ceoRole}</span>
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="text-lg text-gray-700 leading-relaxed"
                >
                  {ceoDescription}
                </motion.p>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {features.map((index) => (
              <motion.div
                key={`feature-${index}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: (index - 1) * 0.2 }}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {featureTitles[index - 1]}
                </h3>
                <p className="text-gray-700">
                  {featureDescriptions[index - 1]}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="bg-gradient-to-br from-[#0055FF] via-[#6B46C1] to-[#1A1A1A] text-white rounded-lg p-8 shadow-xl"
          >
            <h2 className="text-2xl font-bold mb-4">Unser Versprechen</h2>
            <p className="text-lg mb-4">
              Wir bieten maßgeschneiderte Lösungen, die Ihr Unternehmen in die digitale Zukunft führen. Dabei setzen wir auf:
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>Persönliche und individuelle Beratung</li>
              <li>Nachhaltige und skalierbare Lösungen</li>
              <li>Transparente Kommunikation</li>
              <li>Messbaren Mehrwert für Ihr Unternehmen</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </main>
  )
} 