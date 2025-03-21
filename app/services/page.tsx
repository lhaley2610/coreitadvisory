'use client'

import { motion } from 'framer-motion'
import Navigation from '../components/Navigation'
import PageHeader from '../components/PageHeader'
import { 
  CpuChipIcon, 
  ArrowPathIcon, 
  LightBulbIcon,
  CodeBracketIcon 
} from '@heroicons/react/24/outline'

const services = [
  {
    title: 'IT-Strategie & Architektur',
    description: 'Entwicklung zukunftssicherer IT-Strategien und Enterprise-Architekturen für Ihr Unternehmen.',
    icon: CpuChipIcon,
    features: [
      'IT-Strategieentwicklung',
      'Enterprise Architecture Management',
      'Cloud-Transformation',
      'IT-Governance'
    ]
  },
  {
    title: 'Digitale Transformation',
    description: 'Begleitung Ihrer digitalen Transformation von der Strategie bis zur Umsetzung.',
    icon: ArrowPathIcon,
    features: [
      'Prozessdigitalisierung',
      'Change Management',
      'Digitale Workflows',
      'Automatisierung'
    ]
  },
  {
    title: 'Innovative Technologien',
    description: 'Integration modernster Technologien für Ihren Wettbewerbsvorteil.',
    icon: LightBulbIcon,
    features: [
      'Künstliche Intelligenz',
      'Machine Learning',
      'Augmented Reality',
      'Virtual Reality'
    ]
  },
  {
    title: 'Software & Technologie',
    description: 'Professionelle Beratung bei der Auswahl und Implementierung von Software-Lösungen.',
    icon: CodeBracketIcon,
    features: [
      'Software-Evaluation',
      'Implementierungsberatung',
      'System-Integration',
      'Performance-Optimierung'
    ]
  }
]

export default function Services() {
  return (
    <main className="min-h-screen">
      <Navigation />
      
      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <PageHeader 
            title="Unsere Leistungen"
            description="Wir bieten ein umfassendes Portfolio an IT-Beratungsleistungen, maßgeschneidert auf die Bedürfnisse Ihres Unternehmens."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow p-6"
              >
                <div className="flex items-center mb-4">
                  <service.icon className="h-8 w-8 text-[#0055FF] mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
                </div>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-gray-700">
                      <svg className="h-5 w-5 text-[#6B46C1] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-16 text-center"
          >
            <a href="/contact" className="btn-primary">
              Beratungsgespräch vereinbaren
            </a>
          </motion.div>
        </div>
      </div>
    </main>
  )
} 