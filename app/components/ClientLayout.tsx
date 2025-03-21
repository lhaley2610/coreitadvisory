'use client'

import { LanguageProvider } from '../context/LanguageContext'
import LanguageSwitcher from './LanguageSwitcher'

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <LanguageProvider>
      <LanguageSwitcher />
      {children}
    </LanguageProvider>
  )
} 