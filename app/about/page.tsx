'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Navigation from '../components/Navigation'
import PageHeader from '../components/PageHeader'

const features = [
  {
    title: '30+ Jahre Erfahrung',
    description: 'Jahrzehntelange Expertise in IT- und Unternehmensberatung'
  },
  {
    title: 'Innovative Lösungen',
    description: 'Fokus auf zukunftsweisende Technologien wie KI und AR/VR'
  },
  {
    title: 'Branchenexpertise',
    description: 'Spezialisierung auf Finanzdienstleistungen, Banking und Compliance'
  },
  {
    title: 'Ganzheitlicher Ansatz',
    description: 'Integration von IT-Strategie, Architektur und Prozessoptimierung'
  }
]

export default function About() {
  return (
    <main className="min-h-screen">
      <Navigation />
      
      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <PageHeader 
            title="Über CoreIT Advisory"
            description="Wir sind Ihr verlässlicher Partner für die digitale Transformation. Mit über drei Jahrzehnten Erfahrung unterstützen wir Unternehmen dabei, ihre IT-Strategie zukunftssicher zu gestalten."
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
                    width={500}
                    height={500}
                    className="rounded-lg shadow-xl"
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
                  <span className="block text-xl text-gray-700 mt-1">CEO & Senior IT-Berater</span>
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="text-lg text-gray-700 leading-relaxed"
                >
                  Mit über 30 Jahren Erfahrung in IT-Strategie, digitaler Transformation und innovativen Technologien berät Jan Michalewicz Unternehmen in der Finanzbranche. Sein Fokus liegt auf IT-Architektur, Prozessoptimierung und Zukunftstechnologien wie KI und AR/VR.
                </motion.p>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-700">{feature.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="bg-gradient-to-br from-[#0055FF] via-[#6B46C1] to-[#1A1A1A] text-white rounded-lg p-8 shadow-xl"
          >
            <h2 className="text-2xl font-bold mb-4">Unsere Schwerpunkte</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>IT-Strategie und Enterprise Architecture</li>
              <li>Prozess-Digitalisierung und Optimierung</li>
              <li>Künstliche Intelligenz und Machine Learning</li>
              <li>Augmented und Virtual Reality Lösungen</li>
              <li>Compliance und Sicherheit</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </main>
  )
} 