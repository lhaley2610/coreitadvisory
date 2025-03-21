'use client'

import { motion } from 'framer-motion'
import Navigation from '../components/Navigation'
import PageHeader from '../components/PageHeader'

const services = [
  {
    title: 'IT-Strategie & Digitale Transformation',
    description: 'Entwicklung zukunftssicherer IT-Strategien und Begleitung der digitalen Transformation.',
    icon: '🚀'
  },
  {
    title: 'Enterprise Architecture',
    description: 'Gestaltung und Optimierung von IT-Architekturen für maximale Effizienz und Skalierbarkeit.',
    icon: '🏗️'
  },
  {
    title: 'KI & Machine Learning',
    description: 'Integration von KI-Lösungen zur Prozessoptimierung und Entscheidungsunterstützung.',
    icon: '🤖'
  },
  {
    title: 'AR/VR Lösungen',
    description: 'Entwicklung innovativer AR/VR-Anwendungen für Training, Wartung und Kundenservice.',
    icon: '🥽'
  }
]

export default function Services() {
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
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-700">{service.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-16 bg-gradient-to-br from-[#4287f5] to-[#9d7cf5] text-white rounded-lg p-8 shadow-xl"
          >
            <h2 className="text-2xl font-bold mb-4">Unsere Methodik</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Analyse der aktuellen IT-Landschaft</li>
              <li>Entwicklung maßgeschneiderter Lösungen</li>
              <li>Agile Implementierung</li>
              <li>Kontinuierliche Optimierung</li>
              <li>Wissenstransfer und Schulung</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </main>
  )
} 