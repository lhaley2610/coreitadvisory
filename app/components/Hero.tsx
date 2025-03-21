'use client'

import { motion } from 'framer-motion'
import { ChevronDownIcon } from '@heroicons/react/24/outline'

export default function Hero() {
  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    })
  }

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0055FF] via-[#6B46C1] to-[#1A1A1A] opacity-10 animate-gradient"></div>
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-[#0055FF] rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-[#6B46C1] rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-[#1A1A1A] rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <motion.h1 
            className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="relative">
              <span className="absolute inset-0 bg-gradient-to-r from-[#0055FF] to-[#6B46C1] blur-2xl opacity-40"></span>
              <span className="relative">
                <span className="text-[#4287f5]">Willkommen bei </span>
                <span className="bg-gradient-to-r from-[#4287f5] to-[#9d7cf5] bg-clip-text text-transparent drop-shadow-lg">
                  CoreIT Advisory
                </span>
              </span>
            </span>
          </motion.h1>
          
          <motion.p 
            className="text-xl sm:text-2xl md:text-3xl text-gray-700 font-medium mb-8 max-w-3xl mx-auto drop-shadow-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Ihr Partner für IT-Strategie, digitale Transformation und innovative Technologien
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <a 
              href="/contact" 
              className="btn-primary group relative overflow-hidden px-8 py-4 text-lg shadow-blue"
            >
              <span className="relative z-10">
                Jetzt Beratung anfordern
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#6B46C1] to-[#0055FF] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
            <a 
              href="/services" 
              className="text-gray-700 hover:text-[#0055FF] transition-colors duration-300 flex items-center gap-2 text-lg font-medium"
            >
              Unsere Leistungen
              <span className="text-[#0055FF]">→</span>
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16"
          >
            {[
              { number: '30+', label: 'Jahre Erfahrung' },
              { number: '500+', label: 'Erfolgreiche Projekte' },
              { number: '50+', label: 'Experten' },
              { number: '98%', label: 'Kundenzufriedenheit' }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-[#4287f5] to-[#9d7cf5] bg-clip-text text-transparent drop-shadow">{stat.number}</div>
                <div className="text-gray-700 font-medium">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 1, y: 10 }}
        transition={{ 
          duration: 1,
          repeat: Infinity,
          repeatType: "reverse"
        }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
        onClick={scrollToContent}
      >
        <ChevronDownIcon className="h-8 w-8 text-gray-600 hover:text-[#0055FF] transition-colors duration-300" />
      </motion.div>
    </section>
  )
} 