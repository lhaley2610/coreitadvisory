'use client'

import { motion } from 'framer-motion'
import Navigation from '../components/Navigation'
import PageHeader from '../components/PageHeader'
import { useTranslation } from '../context/LanguageContext'

const serviceIcons = ['🚀', '🏗️', '🤖', '🥽']

export default function Services() {
  // Hole alle Übersetzungen direkt
  const card1Title = useTranslation('services.card1.title')
  const card1Desc = useTranslation('services.card1.description')
  const card2Title = useTranslation('services.card2.title')
  const card2Desc = useTranslation('services.card2.description')
  const card3Title = useTranslation('services.card3.title')
  const card3Desc = useTranslation('services.card3.description')
  const card4Title = useTranslation('services.card4.title')
  const card4Desc = useTranslation('services.card4.description')

  const methodologyTitle = useTranslation('services.methodology.title')
  const step1 = useTranslation('services.methodology.step1')
  const step2 = useTranslation('services.methodology.step2')
  const step3 = useTranslation('services.methodology.step3')
  const step4 = useTranslation('services.methodology.step4')
  const step5 = useTranslation('services.methodology.step5')

  const cardContents = [
    { title: card1Title, description: card1Desc },
    { title: card2Title, description: card2Desc },
    { title: card3Title, description: card3Desc },
    { title: card4Title, description: card4Desc }
  ]

  const methodologySteps = [step1, step2, step3, step4, step5]

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
            {cardContents.map((card, index) => (
              <motion.div
                key={`service-${index + 1}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="text-4xl mb-4">{serviceIcons[index]}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {card.title}
                </h3>
                <p className="text-gray-700">
                  {card.description}
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