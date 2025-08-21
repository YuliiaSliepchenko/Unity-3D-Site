/**
 * Benefits section component highlighting course advantages
 */
import { Award, Brain, Code2, Globe, Rocket, Users } from 'lucide-react'

export default function BenefitsSection() {
  const benefits = [
    {
      icon: Brain,
      title: "Розвиток мислення",
      description: "Просторове та логічне мислення, креативність та уява"
    },
    {
      icon: Code2,
      title: "Технічні навички",
      description: "Професійні інструменти та методи роботи з 3D-графікою"
    },
    {
      icon: Rocket,
      title: "Швидкий старт",
      description: "Від перших кроків до створення власних проєктів за 4 модулі"
    },
    {
      icon: Users,
      title: "Підтримка спільноти",
      description: "Спілкування з однолітками та досвідченими викладачами"
    },
    {
      icon: Award,
      title: "Сертифікат",
      description: "Офіційний сертифікат після завершення курсу"
    },
    {
      icon: Globe,
      title: "Майбутні професії",
      description: "Підготовка до карʼєри в геймдеві, анімації, архвізуалізації"
    }
  ]

  const stats = [
    { number: "500+", label: "Випускників", color: "from-purple-500 to-purple-600" },
    { number: "95%", label: "Задоволених учнів", color: "from-pink-500 to-pink-600" },
    { number: "4.9", label: "Рейтинг курсу", color: "from-orange-500 to-orange-600" },
    { number: "24/7", label: "Підтримка", color: "from-blue-500 to-blue-600" }
  ]

  return (
    <section id="benefits" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Чому обирають 
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              наш курс?
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ми створили найкращі умови для навчання дітей 3D-моделюванню
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="text-center p-6 rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100"
            >
              <div className={`text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="group p-8 rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-14 h-14 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform">
                <benefit.icon className="w-7 h-7" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {benefit.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* Testimonial */}
        <div className="mt-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-3xl p-8 text-center text-white">
          <div className="max-w-3xl mx-auto">
            <div className="text-6xl opacity-20 mb-4">"</div>
            <blockquote className="text-xl mb-6 leading-relaxed">
              Мій син навчався на курсі Blender і тепер створює неймовірні 3D-моделі! 
              Викладачі професійні, а програма дуже цікава та зрозуміла для дітей.
            </blockquote>
            <div className="font-medium">
              Олена Петренко, мама учня
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}