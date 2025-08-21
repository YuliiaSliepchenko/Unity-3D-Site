/**
 * Pricing section component with course pricing plans
 */
import { Check, Star } from 'lucide-react'
import { Button } from './ui/button'

export default function PricingSection() {
  const plans = [
    {
      name: "Базовий",
      price: "2999",
      originalPrice: "3999",
      duration: "4 модулі",
      popular: false,
      features: [
        "24 відеоуроки", 
        "Доступ до матеріалів на 6 місяців",
        "Практичні завдання",
        "Сертифікат про завершення",
        "Чат підтримки"
      ]
    },
    {
      name: "Преміум",
      price: "4999", 
      originalPrice: "6999",
      duration: "4 модулі + бонуси",
      popular: true,
      features: [
        "24 відеоуроки + бонусні матеріали",
        "Доступ до матеріалів на 1 рік", 
        "Практичні завдання з перевіркою",
        "Персональний наставник",
        "Групові онлайн зустрічі",
        "Сертифікат про завершення",
        "Пріоритетна підтримка 24/7",
        "Доступ до спільноти ItEnAi"
      ]
    },
    {
      name: "VIP",
      price: "7999",
      originalPrice: "9999", 
      duration: "Індивідуальне навчання",
      popular: false,
      features: [
        "Індивідуальні уроки з викладачем",
        "Персоналізована програма",
        "Безлімітний доступ до матеріалів",
        "Миттєва підтримка викладача",
        "Додаткові проєкти та завдання",
        "Підготовка портфоліо",
        "Рекомендації для подальшого навчання",
        "Гарантія результату"
      ]
    }
  ]

  /**
   * Handles scroll to contact section for plan selection
   */
  const selectPlan = (planName: string) => {
    const element = document.getElementById('contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="pricing" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Обери свій 
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              тарифний план
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ми пропонуємо різні варіанти навчання, щоб кожна дитина могла знайти підходящий формат
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`relative rounded-3xl p-8 ${
                plan.popular 
                  ? 'bg-gradient-to-br from-purple-500 to-pink-500 text-white transform scale-105 shadow-2xl' 
                  : 'bg-white shadow-lg hover:shadow-xl'
              } transition-all duration-300`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-orange-400 text-white px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2">
                    <Star className="w-4 h-4" />
                    Найпопулярніший
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className={`text-2xl font-bold mb-2 ${plan.popular ? 'text-white' : 'text-gray-900'}`}>
                  {plan.name}
                </h3>
                <div className="mb-4">
                  <span className={`text-4xl font-bold ${plan.popular ? 'text-white' : 'text-gray-900'}`}>
                    ₴{plan.price}
                  </span>
                  <span className={`text-lg line-through ml-2 ${plan.popular ? 'text-purple-200' : 'text-gray-500'}`}>
                    ₴{plan.originalPrice}
                  </span>
                </div>
                <p className={`text-sm ${plan.popular ? 'text-purple-100' : 'text-gray-600'}`}>
                  {plan.duration}
                </p>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                      plan.popular ? 'bg-white text-purple-500' : 'bg-green-100 text-green-600'
                    }`}>
                      <Check className="w-3 h-3" />
                    </div>
                    <span className={`text-sm ${plan.popular ? 'text-white' : 'text-gray-700'}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Button 
                onClick={() => selectPlan(plan.name)}
                className={`w-full py-3 ${
                  plan.popular 
                    ? 'bg-white text-purple-600 hover:bg-gray-100' 
                    : 'bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white'
                }`}
              >
                Обрати план
              </Button>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-6 py-3 rounded-full">
            <span className="font-medium">💰 Знижка 25% до кінця місяця!</span>
          </div>
        </div>
      </div>
    </section>
  )
}