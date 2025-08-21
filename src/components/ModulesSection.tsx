/**
 * Modules section component displaying course curriculum
 */
import { CheckCircle, Clock, Target } from 'lucide-react'

export default function ModulesSection() {
  const modules = [
    {
      number: 1,
      title: "Основи 3D моделювання",
      duration: "6 уроків",
      color: "from-purple-500 to-purple-600",
      topics: [
        "Знайомство з Blender-інтерфейс, навігація, гарячі клавіші",
        "Основи моделювання - екструзія, boolean-операції",
        "Моделювання простих об'єктів - куб, сфера, циліндр",
        "Деталізація та топологія",
        "Оптимізація сітки, правильне розташування полігонів",
        "Збірка фінальної сцени - розташування об'єктів у сцені"
      ]
    },
    {
      number: 2,
      title: "Матеріали та текстури",
      duration: "6 уроків", 
      color: "from-pink-500 to-pink-600",
      topics: [
        "Основи матеріалів у Blender - Shader Editor, принципи PBR",
        "Створення простих матеріалів - кольори, прозорість, відблиск",
        "Процедурні текстури - створення складних матеріалів без текстур",
        "Скульптинг та детализацiя",
        "Імпорт PBR-текстур - робота з реалістичними матеріалами",
        "Фіналізація проєкту - завершення текстурованої сцени"
      ]
    },
    {
      number: 3,
      title: "Освітлення та рендер",
      duration: "6 уроків",
      color: "from-orange-500 to-orange-600", 
      topics: [
        "Види світла в Blender - точкове, площинне, сонячне, HDRI",
        "Композиція кадру - як правильно вибудовувати сцену",
        "Динамічне освітлення - як зробити сцену атмосферною",
        "Деталізація сцени - додавання дрібних елементів",
        "Фіналізація проєкту - отримання високоякісного рендеру"
      ]
    },
    {
      number: 4,
      title: "Анімація та фізика", 
      duration: "6 уроків",
      color: "from-blue-500 to-blue-600",
      topics: [
        "Основи анімації - ключові кадри, принципи руху",
        "Анімація камери - створення динамічних рухів камери",
        "Анімація об'єктів - зміна позиції, обертання, масштабування",
        "Фізика в анімації - модифікатори фізики",
        "Фізика в анімації - тканини, тверді тіла, частинки",
        "Рендер анімації - оптимізація та вивід відео"
      ]
    }
  ]

  return (
    <section id="modules" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Програма 
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              навчання
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            4 модулі, 24 уроки - від основ до створення професійних 3D-проєктів
          </p>
        </div>

        <div className="grid gap-8">
          {modules.map((module, index) => (
            <div 
              key={index}
              className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <div className="p-8">
                <div className="flex flex-col lg:flex-row lg:items-center gap-6 mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-r ${module.color} rounded-2xl flex items-center justify-center text-white font-bold text-2xl flex-shrink-0`}>
                    {module.number}
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      Модуль {module.number}: {module.title}
                    </h3>
                    <div className="flex items-center gap-4 text-gray-600">
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        <span>{module.duration}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Target className="w-4 h-4" />
                        <span>Практичні завдання</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  {module.topics.map((topic, topicIndex) => (
                    <div 
                      key={topicIndex}
                      className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm">{topic}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 px-6 py-3 rounded-full">
            <span className="font-medium">Фінальний проєкт після кожного модуля</span>
          </div>
        </div>
      </div>
    </section>
  )
}