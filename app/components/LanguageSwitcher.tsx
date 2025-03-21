'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '../context/LanguageContext'
import Image from 'next/image'

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage()

  return (
    <div className="fixed top-4 right-4 z-50 flex space-x-2">
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setLanguage('de')}
        className={`relative w-8 h-8 rounded-full overflow-hidden ${
          language === 'de' ? 'ring-2 ring-blue-500' : 'opacity-70 hover:opacity-100'
        }`}
      >
        <Image
          src="/images/de-flag.svg"
          alt="Deutsch"
          width={32}
          height={32}
          className="object-cover"
        />
      </motion.button>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setLanguage('en')}
        className={`relative w-8 h-8 rounded-full overflow-hidden ${
          language === 'en' ? 'ring-2 ring-blue-500' : 'opacity-70 hover:opacity-100'
        }`}
      >
        <Image
          src="/images/en-flag.svg"
          alt="English"
          width={32}
          height={32}
          className="object-cover"
        />
      </motion.button>
    </div>
  )
} 