/**
 * Footer component with school information and links
 */
import { Facebook, Instagram, Youtube, Mail } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Youtube, href: '#', label: 'YouTube' },
    { icon: Mail, href: 'mailto:info@itenai.com.ua', label: 'Email' }
  ]

  const quickLinks = [
    { name: 'Про курс', href: '#about' },
    { name: 'Модулі', href: '#modules' },
    { name: 'Переваги', href: '#benefits' },
    { name: 'Ціни', href: '#pricing' },
    { name: 'Контакти', href: '#contact' }
  ]

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* School Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">3D</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">ItEnAi</h3>
                <p className="text-sm text-gray-400">3D School</p>
              </div>
            </div>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              Школа ItEnAi — провідний центр навчання дітей сучасним IT-технологіям. 
              Наш курс Blender допомагає дітям освоїти 3D-моделювання та анімацію на професійному рівні.
            </p>
            
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 transition-all duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Швидкі посилання</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Контакти</h4>
            <div className="space-y-3 text-gray-300">
              <p>📞 +380 (67) 123-45-67</p>
              <p>✉️ info@itenai.com.ua</p>
              <p>📍 м. Київ, вул. Хрещатик, 1</p>
              <p>🕒 Пн-Пт: 9:00-18:00</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {currentYear} ItEnAi School. Всі права захищені.
            </p>
            
            <div className="flex items-center gap-6 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors">
                Політика конфіденційності
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Умови використання
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}