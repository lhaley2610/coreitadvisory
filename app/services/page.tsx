'use client'

import { motion } from 'framer-motion'
import Navigation from '../components/Navigation'
import PageHeader from '../components/PageHeader'
import { useTranslation } from '../context/LanguageContext'

const serviceIcons = ['🚀', '🏗️', '🤖', '🥽']

export default function Services() {
  // Hole alle Übersetzungen am Anfang der Komponente
  const cardTitles = [1, 2, 3, 4].map(index => 
    useTranslation(`services.card${index}.title`)
  )
  const cardDescriptions = [1, 2, 3, 4].map(index => 
    useTranslation(`services.card${index}.description`)
  )
  const methodologyTitle = useTranslation('services.methodology.title')
  const methodologySteps = [1, 2, 3, 4, 5].map(step => 
    useTranslation(`services.methodology.step${step}`)
  )

  return (
    <main className="min-h-screen">
      <Navigation />
      
      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <PageHeader 
            titleKey="services.title"
            descriptionKey="services.description"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[1, 2, 3, 4].map((index) => (
              <motion.div
                key={`service-${index}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: (index - 1) * 0.2 }}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="text-4xl mb-4">{serviceIcons[index - 1]}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {cardTitles[index - 1]}
                </h3>
                <p className="text-gray-700">
                  {cardDescriptions[index - 1]}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-16 bg-gradient-to-br from-[#4287f5] to-[#9d7cf5] text-white rounded-lg p-8 shadow-xl"
          >
            <h2 className="text-2xl font-bold mb-4">
              {methodologyTitle}
            </h2>
            <ul className="list-disc list-inside space-y-2">
              {methodologySteps.map((step, index) => (
                <li key={`step-${index + 1}`}>
                  {step}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </main>
  )
} 