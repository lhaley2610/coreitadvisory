'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useTranslation } from '../context/LanguageContext'

export default function Navigation() {
  const pathname = usePathname()

  const isActive = (path: string) => pathname === path

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-white bg-opacity-90 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link href="/" className="flex items-center">
              <span className="text-xl font-bold bg-gradient-to-r from-[#4287f5] to-[#9d7cf5] bg-clip-text text-transparent">
                CoreIT Advisory
              </span>
            </Link>
          </div>

          <div className="flex space-x-8">
            <Link
              href="/"
              className={`inline-flex items-center px-1 pt-1 text-sm font-medium ${
                isActive('/') 
                  ? 'text-[#4287f5]'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              {useTranslation('nav.home')}
            </Link>

            <Link
              href="/about"
              className={`inline-flex items-center px-1 pt-1 text-sm font-medium ${
                isActive('/about')
                  ? 'text-[#4287f5]'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              {useTranslation('nav.about')}
            </Link>

            <Link
              href="/services"
              className={`inline-flex items-center px-1 pt-1 text-sm font-medium ${
                isActive('/services')
                  ? 'text-[#4287f5]'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              {useTranslation('nav.services')}
            </Link>

            <Link
              href="/contact"
              className={`inline-flex items-center px-1 pt-1 text-sm font-medium ${
                isActive('/contact')
                  ? 'text-[#4287f5]'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              {useTranslation('nav.contact')}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
} 