'use client'

import React, { createContext, useContext, useState } from 'react'

type Language = 'de' | 'en'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  translations: {
    [key: string]: {
      de: string
      en: string
    }
  }
}

const translations = {
  'nav.home': {
    de: 'Startseite',
    en: 'Home'
  },
  'nav.about': {
    de: 'Über uns',
    en: 'About'
  },
  'nav.services': {
    de: 'Leistungen',
    en: 'Services'
  },
  'nav.contact': {
    de: 'Kontakt',
    en: 'Contact'
  },
  'about.title': {
    de: 'Über CoreIT Advisory',
    en: 'About CoreIT Advisory'
  },
  'about.description': {
    de: 'Mit über drei Jahrzehnten Erfahrung sind wir Ihr verlässlicher Partner für die digitale Transformation und strategische IT-Beratung.',
    en: 'With over three decades of experience, we are your reliable partner for digital transformation and strategic IT consulting.'
  },
  'contact.title': {
    de: 'Kontakt',
    en: 'Contact'
  },
  'contact.description': {
    de: 'Bleiben Sie informiert über unsere Dienstleistungen und Entwicklungen in der IT-Beratung.',
    en: 'Stay informed about our services and developments in IT consulting.'
  },
  'contact.newsletter': {
    de: 'Newsletter Anmeldung',
    en: 'Newsletter Signup'
  },
  'contact.email': {
    de: 'E-Mail-Adresse',
    en: 'Email Address'
  },
  'contact.submit': {
    de: 'Anmelden',
    en: 'Sign Up'
  },
  'contact.thanks': {
    de: 'Vielen Dank!',
    en: 'Thank you!'
  },
  'contact.success': {
    de: 'Ihre E-Mail-Adresse wurde erfolgreich registriert.',
    en: 'Your email address has been successfully registered.'
  },
  'contact.direct': {
    de: 'Direkter Kontakt',
    en: 'Direct Contact'
  },
  'services.title': {
    de: 'Unsere Leistungen',
    en: 'Our Services'
  },
  'services.description': {
    de: 'Wir bieten ein umfassendes Portfolio an IT-Beratungsleistungen, maßgeschneidert auf die Bedürfnisse Ihres Unternehmens.',
    en: 'We offer a comprehensive portfolio of IT consulting services, tailored to your company\'s needs.'
  },
  'services.card1.title': {
    de: 'IT-Strategie & Digitale Transformation',
    en: 'IT Strategy & Digital Transformation'
  },
  'services.card1.description': {
    de: 'Entwicklung zukunftssicherer IT-Strategien und Begleitung der digitalen Transformation.',
    en: 'Development of future-proof IT strategies and digital transformation guidance.'
  },
  'services.card2.title': {
    de: 'Enterprise Architecture',
    en: 'Enterprise Architecture'
  },
  'services.card2.description': {
    de: 'Gestaltung und Optimierung von IT-Architekturen für maximale Effizienz und Skalierbarkeit.',
    en: 'Design and optimization of IT architectures for maximum efficiency and scalability.'
  },
  'services.card3.title': {
    de: 'KI & Machine Learning',
    en: 'AI & Machine Learning'
  },
  'services.card3.description': {
    de: 'Integration von KI-Lösungen zur Prozessoptimierung und Entscheidungsunterstützung.',
    en: 'Integration of AI solutions for process optimization and decision support.'
  },
  'services.card4.title': {
    de: 'AR/VR Lösungen',
    en: 'AR/VR Solutions'
  },
  'services.card4.description': {
    de: 'Entwicklung innovativer AR/VR-Anwendungen für Training, Wartung und Kundenservice.',
    en: 'Development of innovative AR/VR applications for training, maintenance, and customer service.'
  },
  'services.methodology.title': {
    de: 'Unsere Methodik',
    en: 'Our Methodology'
  },
  'services.methodology.step1': {
    de: 'Analyse der aktuellen IT-Landschaft',
    en: 'Analysis of current IT landscape'
  },
  'services.methodology.step2': {
    de: 'Entwicklung maßgeschneiderter Lösungen',
    en: 'Development of tailored solutions'
  },
  'services.methodology.step3': {
    de: 'Agile Implementierung',
    en: 'Agile implementation'
  },
  'services.methodology.step4': {
    de: 'Kontinuierliche Optimierung',
    en: 'Continuous optimization'
  },
  'services.methodology.step5': {
    de: 'Wissenstransfer und Schulung',
    en: 'Knowledge transfer and training'
  }
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('de')

  return (
    <LanguageContext.Provider value={{ language, setLanguage, translations }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}

export function useTranslation(key: string) {
  const { language, translations } = useLanguage()
  return translations[key]?.[language] || key
} 