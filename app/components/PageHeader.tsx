'use client'

import { motion } from 'framer-motion'

interface PageHeaderProps {
  title: string
  description: string
}

export default function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-center mb-16"
    >
      <div className="relative mb-4">
        <span className="absolute inset-0 bg-gradient-to-r from-[#0055FF] to-[#6B46C1] blur-2xl opacity-40"></span>
        <h1 className="relative text-4xl sm:text-5xl font-bold">
          <span className="bg-gradient-to-r from-[#4287f5] to-[#9d7cf5] bg-clip-text text-transparent drop-shadow-lg">
            {title}
          </span>
        </h1>
      </div>
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-xl text-gray-700 max-w-3xl mx-auto font-medium drop-shadow-md"
      >
        {description}
      </motion.p>
    </motion.div>
  )
} 