/**
 * About section component describing the course details
 */
import { BookOpen, Code, Gamepad2, Palette } from 'lucide-react'

export default function AboutSection() {
  const features = [
    {
      icon: BookOpen,
      title: "Навчання основам",
      description: "3D-моделювання та скульптинг від простих форм до складних об'єктів"
    },
    {
      icon: Palette,
      title: "Створення персонажів",
      description: "Моделювання персонажів, предметів і середовищ для ігор та візуалізацій"
    },
    {
      icon: Code,
      title: "Анімація та ефекти",
      description: "Основи анімації, візуальні ефекти та фізична симуляція"
    },
    {
      icon: Gamepad2,
      title: "Експорт у Unity",
      description: "Підготовка моделей для використання у іграх та інших проєктах"
    }
  ]

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Про курс 
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Blender
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Цей курс ідеально підходить для дітей, які хочуть освоїти 3D-графіку. 
            Blender — це потужний безкоштовний інструмент, який допоможе створювати власні 
            3D-об'єкти для ігор, візуалізацій і творчих проєктів.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="text-center p-6 rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                <feature.icon className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Що дає курс вашій дитині?
            </h3>
            <ul className="space-y-4">
              {[
                "Розвиток просторового мислення та креативності",
                "Технічні навички для геймдеву та цифрових професій", 
                "Вміння створювати власні 3D-проєкти",
                "Основи професійного 3D-моделювання",
                "Навички роботи з анімацією та візуальними ефектами",
                "Підготовка до сучасних IT-професій"
              ].map((benefit, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-gradient-to-r from-green-400 to-blue-400 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span className="text-gray-700">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="relative">
            <img 
              src="https://pub-cdn.sider.ai/u/U0Y3H2XG568/web-coder/6883a2eef2d3a0ac8dc38920/resource/ae9190f8-a745-4d57-9458-16df48d7ae32.jpg"
              alt="Діти навчаються 3D моделюванню"
              className="w-full h-auto rounded-2xl shadow-xl object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}