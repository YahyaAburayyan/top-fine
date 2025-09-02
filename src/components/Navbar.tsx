import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import LanguageSwitcher from './LanguageSwitcher'

interface NavbarProps {
  onNavigate: (section: string) => void
  activeSection: string
}

const Navbar = ({ onNavigate, activeSection }: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { t } = useTranslation()

  const navItems = [
    { id: 'home', label: t('nav.home') },
    { id: 'products', label: t('nav.products') },
    { id: 'about', label: t('nav.about') },
    { id: 'services', label: t('nav.services') },
    { id: 'contact', label: t('nav.contact') }
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center cursor-pointer" onClick={() => onNavigate('home')}>
            <div className="w-20 h-12 rounded-lg overflow-hidden">
              <img 
                src="/logo.png" 
                alt="TopFine Logo" 
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`text-base md:text-lg font-semibold transition-colors duration-200 ${
                  activeSection === item.id
                    ? 'text-primary-600 border-b-2 border-primary-600 pb-1'
                    : 'text-gray-600 hover:text-primary-600'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Language Switcher & CTA Button - Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <LanguageSwitcher />
            <button
              onClick={() => onNavigate('contact')}
              className="px-6 py-2 bg-primary-600 text-white text-base font-semibold rounded-lg hover:bg-primary-700 transition-colors duration-200"
            >
              {t('nav.getStarted')}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-gray-600 hover:text-gray-900"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    onNavigate(item.id)
                    setIsMenuOpen(false)
                  }}
                  className={`block w-full text-left px-4 py-3 text-base font-semibold transition-colors duration-200 ${
                    activeSection === item.id
                      ? 'text-primary-600 bg-primary-50 rounded-lg'
                      : 'text-gray-600 hover:text-primary-600 hover:bg-gray-50 rounded-lg'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              
              <div className="flex space-x-2 mt-4">
                <LanguageSwitcher />
                <button
                  onClick={() => {
                    onNavigate('contact')
                    setIsMenuOpen(false)
                  }}
                  className="flex-1 px-4 py-3 bg-primary-600 text-white text-base font-semibold rounded-lg hover:bg-primary-700 transition-colors duration-200"
                >
                  {t('nav.getStarted')}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
