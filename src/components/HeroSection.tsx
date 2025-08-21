/**
 * Hero section component with main course introduction
 */
import { Play, Star, Users } from 'lucide-react'
import { Button } from './ui/button'

export default function HeroSection() {
  /**
   * Handles scroll to contact section
   */
  const scrollToContact = () => {
    const element = document.getElementById('contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="pt-24 pb-16 bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Star className="w-4 h-4" />
              Топ курс з 3D моделювання
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Blender: Від основ до 
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                анімації
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Навчись створювати неймовірні 3D-моделі, персонажів та анімації в безкоштовному професійному редакторі Blender. Курс для дітей 9-18 років від школи ItEnAi.
            </p>

            {/* Stats */}
            <div className="flex items-center justify-center lg:justify-start gap-8 mb-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">4</div>
                <div className="text-sm text-gray-600">Модулі</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">24</div>
                <div className="text-sm text-gray-600">Уроки</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">9-18</div>
                <div className="text-sm text-gray-600">Років</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                onClick={scrollToContact}
                size="lg"
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-4 text-lg"
              >
                Записатися на курс
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="bg-transparent border-gray-300 hover:bg-gray-50 px-8 py-4 text-lg"
              >
                <Play className="w-5 h-5 mr-2" />
                Дивитися відео
              </Button>
            </div>

            {/* Social Proof */}
            <div className="flex items-center justify-center lg:justify-start gap-4 mt-8 pt-8 border-t border-gray-200">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div 
                    key={i}
                    className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 border-2 border-white flex items-center justify-center text-white text-sm font-medium"
                  >
                    {i}
                  </div>
                ))}
              </div>
              <div className="text-sm text-gray-600">
                <div className="font-medium">500+ учнів</div>
                <div>вже навчаються з нами</div>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative">
            <div className="relative z-10">
              <img 
                src="https://pub-cdn.sider.ai/u/U0Y3H2XG568/web-coder/6883a2eef2d3a0ac8dc38920/resource/19bf883c-e216-46aa-bc47-052b91be9bfe.jpg"
                alt="3D моделювання в Blender"
                className="w-full h-auto rounded-2xl shadow-2xl object-cover"
              />
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-xl">
              3D
            </div>
            
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-r from-green-400 to-blue-400 rounded-full flex items-center justify-center text-white">
              <Users className="w-8 h-8" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}