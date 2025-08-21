/**
 * Header component with navigation for the ItEnAi 3D modeling course landing page
 */
import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { Button } from './ui/button'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  /**
   * Handles smooth scrolling to section
   */
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMenuOpen(false)
    }
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">3D</span>
          </div>
          <div>
            <h1 className="text-xl font-bold text-gray-900">ItEnAi</h1>
            <p className="text-xs text-gray-600">3D School</p>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <button 
            onClick={() => scrollToSection('about')}
            className="text-gray-700 hover:text-purple-600 transition-colors"
          >
            Про курс
          </button>
          <button 
            onClick={() => scrollToSection('modules')}
            className="text-gray-700 hover:text-purple-600 transition-colors"
          >
            Модулі
          </button>
          <button 
            onClick={() => scrollToSection('benefits')}
            className="text-gray-700 hover:text-purple-600 transition-colors"
          >
            Переваги
          </button>
          <button 
            onClick={() => scrollToSection('pricing')}
            className="text-gray-700 hover:text-purple-600 transition-colors"
          >
            Ціни
          </button>
          <Button 
            onClick={() => scrollToSection('contact')}
            className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
          >
            Записатися
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 rounded-lg hover:bg-gray-100"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white border-b border-gray-200 md:hidden">
            <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('about')}
                className="text-left text-gray-700 hover:text-purple-600 transition-colors"
              >
                Про курс
              </button>
              <button 
                onClick={() => scrollToSection('modules')}
                className="text-left text-gray-700 hover:text-purple-600 transition-colors"
              >
                Модулі
              </button>
              <button 
                onClick={() => scrollToSection('benefits')}
                className="text-left text-gray-700 hover:text-purple-600 transition-colors"
              >
                Переваги
              </button>
              <button 
                onClick={() => scrollToSection('pricing')}
                className="text-left text-gray-700 hover:text-purple-600 transition-colors"
              >
                Ціни
              </button>
              <Button 
                onClick={() => scrollToSection('contact')}
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 w-full"
              >
                Записатися
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}