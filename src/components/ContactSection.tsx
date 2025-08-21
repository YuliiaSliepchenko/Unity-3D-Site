/**
 * Contact section component with registration form
 */
import { Mail, MessageCircle, Phone, MapPin } from 'lucide-react'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { useState } from 'react'

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    age: '',
    plan: 'Базовий'
  })

  /**
   * Handles form input changes
   */
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  /**
   * Handles form submission
   */
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission logic here
    console.log('Form submitted:', formData)
    alert('Дякуємо за заявку! Ми зв\'яжемося з вами найближчим часом.')
  }

  const contactInfo = [
    {
      icon: Phone,
      title: "Телефон",
      value: "+380 (67) 123-45-67",
      color: "from-green-500 to-green-600"
    },
    {
      icon: Mail,
      title: "Email",
      value: "info@itenai.com.ua",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: MessageCircle,
      title: "Telegram",
      value: "@ItEnAi_School",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: MapPin,
      title: "Адреса",
      value: "м. Київ, вул. Хрещатик, 1",
      color: "from-orange-500 to-orange-600"
    }
  ]

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Записатися на 
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              курс
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Залиште заявку і наш менеджер зв'яжеться з вами для консультації
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Форма реєстрації
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Ім'я дитини *
                </label>
                <Input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Введіть ім'я"
                  required
                  className="w-full"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email батьків *
                </label>
                <Input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="example@email.com"
                  required
                  className="w-full"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Телефон *
                </label>
                <Input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="+380 (67) 123-45-67"
                  required
                  className="w-full"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Вік дитини *
                </label>
                <Input
                  type="number"
                  name="age"
                  value={formData.age}
                  onChange={handleInputChange}
                  placeholder="9-18 років"
                  min="9"
                  max="18"
                  required
                  className="w-full"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Тарифний план
                </label>
                <select
                  name="plan"
                  value={formData.plan}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                >
                  <option value="Базовий">Базовий - ₴2999</option>
                  <option value="Преміум">Преміум - ₴4999</option>
                  <option value="VIP">VIP - ₴7999</option>
                </select>
              </div>

              <Button 
                type="submit"
                className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white py-3"
              >
                Записатися на курс
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Контактна інформація
            </h3>
            
            <div className="space-y-6 mb-8">
              {contactInfo.map((contact, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className={`w-12 h-12 bg-gradient-to-r ${contact.color} rounded-xl flex items-center justify-center text-white`}>
                    <contact.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{contact.title}</div>
                    <div className="text-gray-600">{contact.value}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl p-6 text-white">
              <h4 className="font-bold text-lg mb-2">🎯 Безкоштовна консультація</h4>
              <p className="text-purple-100 mb-4">
                Не знаєте який план обрати? Замовте безкоштовну консультацію з нашим експертом!
              </p>
              <Button 
                className="bg-white text-purple-600 hover:bg-gray-100"
              >
                Замовити консультацію
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}