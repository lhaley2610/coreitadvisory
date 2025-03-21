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