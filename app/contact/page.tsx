'use client'

import { useState } from 'react'
import Navigation from '../components/Navigation'
import PageHeader from '../components/PageHeader'
import { useTranslation } from '../context/LanguageContext'

export default function Contact() {
  const [email, setEmail] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Hier können Sie die E-Mail-Adresse verarbeiten, z.B. an einen Server senden
    setEmail('')
  }

  return (
    <main className="min-h-screen">
      <Navigation />
      
      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <PageHeader 
            titleKey="contact.title"
            descriptionKey="contact.description"
          />
          
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-semibold mb-4">{useTranslation('contact.getInTouch')}</h3>
                <p className="text-gray-600 mb-6">{useTranslation('contact.reachOut')}</p>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-gray-800">{useTranslation('contact.address')}</h4>
                    <p className="text-gray-600">
                      CoreIT Advisory GmbH<br />
                      Friedrichstraße 171<br />
                      10117 Berlin
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-gray-800">{useTranslation('contact.email')}</h4>
                    <a href="mailto:info@coreit-advisory.de" className="text-blue-600 hover:text-blue-800">
                      info@coreit-advisory.de
                    </a>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-gray-800">{useTranslation('contact.phone')}</h4>
                    <a href="tel:+4930120878000" className="text-blue-600 hover:text-blue-800">
                      +49 (30) 120 87 8000
                    </a>
                  </div>
                </div>
              </div>
              
              <div>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                      {useTranslation('contact.form.name')}
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                      {useTranslation('contact.form.email')}
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                      {useTranslation('contact.form.message')}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300"
                  >
                    {useTranslation('contact.form.submit')}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
} 