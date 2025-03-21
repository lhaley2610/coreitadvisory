'use client'

import { motion } from 'framer-motion'
import Navigation from '../components/Navigation'
import PageHeader from '../components/PageHeader'
import { 
  EnvelopeIcon, 
  PhoneIcon, 
  MapPinIcon 
} from '@heroicons/react/24/outline'

export default function Contact() {
  return (
    <main className="min-h-screen">
      <Navigation />
      
      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <PageHeader 
            title="Kontaktieren Sie uns"
            description="Wir freuen uns darauf, von Ihnen zu hören. Kontaktieren Sie uns für ein unverbindliches Beratungsgespräch."
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-lg shadow-lg p-8"
            >
              <h2 className="text-2xl font-semibold mb-6">Schreiben Sie uns</h2>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#0055FF] focus:ring-[#0055FF] p-2 border"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    E-Mail
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#0055FF] focus:ring-[#0055FF] p-2 border"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                    Nachricht
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    rows={4}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#0055FF] focus:ring-[#0055FF] p-2 border"
                  ></textarea>
                </div>
                <div>
                  <button
                    type="submit"
                    className="w-full btn-primary"
                  >
                    Nachricht senden
                  </button>
                </div>
              </form>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="flex items-center space-x-4">
                  <EnvelopeIcon className="h-6 w-6 text-[#0055FF]" />
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">E-Mail</h3>
                    <p className="text-gray-600">kontakt@coreit-advisory.de</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="flex items-center space-x-4">
                  <PhoneIcon className="h-6 w-6 text-[#0055FF]" />
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">Telefon</h3>
                    <p className="text-gray-600">+49 (0) 123 456789</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="flex items-center space-x-4">
                  <MapPinIcon className="h-6 w-6 text-[#0055FF]" />
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">Adresse</h3>
                    <p className="text-gray-600">
                      Musterstraße 123<br />
                      12345 Musterstadt<br />
                      Deutschland
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-[#0055FF] via-[#6B46C1] to-[#1A1A1A] text-white rounded-lg p-6 shadow-lg">
                <h3 className="text-lg font-medium mb-2">Bürozeiten</h3>
                <p>Montag - Freitag<br />9:00 - 17:00 Uhr</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </main>
  )
} 