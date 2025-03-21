'use client'

import { motion } from 'framer-motion'
import { useTranslation } from '../context/LanguageContext'

interface PageHeaderProps {
  titleKey: string
  descriptionKey: string
}

export default function PageHeader({ titleKey, descriptionKey }: PageHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-center mb-16"
    >
      <div className="relative mb-4">
        <span className="absolute inset-0 bg-gradient-to-r from-[#0055FF] to-[#6B46C1] blur-2xl opacity-40"></span>
        <h1 className="relative text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#4287f5] to-[#9d7cf5] bg-clip-text text-transparent drop-shadow-lg">
          {useTranslation(titleKey)}
        </h1>
      </div>
      <p className="text-lg md:text-xl font-medium text-gray-800 max-w-3xl mx-auto leading-relaxed">
        {useTranslation(descriptionKey)}
      </p>
    </motion.div>
  )
} 