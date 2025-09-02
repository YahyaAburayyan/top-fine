import { useTranslation } from 'react-i18next'

const About = () => {
  const { t } = useTranslation()
  
  const features = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: t('about.values.quality.title'),
      description: t('about.values.quality.description')
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: t('about.values.innovation.title'),
      description: t('about.values.innovation.description')
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: t('about.values.sustainability.title'),
      description: t('about.values.sustainability.description')
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      title: t('about.values.customer.title'),
      description: t('about.values.customer.description')
    }
  ]

  const stats = [
    { number: "50+", label: t('about.stats.products') },
    { number: "1000+", label: t('about.stats.customers') },
    { number: "15+", label: t('about.stats.experience') },
    { number: "25+", label: t('about.stats.countries') }
  ]

  return (
    <section id="about" className="py-20 px-4 bg-gradient-to-b from-neutral-50 via-white to-primary-50/30">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-secondary-100 text-secondary-700 rounded-full text-sm font-semibold mb-6">
            🏢 {t('about.title')}
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-800 mb-4">
            {t('about.title')}
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            {t('about.subtitle')}
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h3 className="text-3xl font-bold text-neutral-800 mb-6">{t('about.mission.title')}</h3>
            <p className="text-neutral-600 text-lg leading-relaxed mb-6">
              {t('about.mission.description')}
            </p>
            <h3 className="text-3xl font-bold text-neutral-800 mb-6 mt-8">{t('about.vision.title')}</h3>
            <p className="text-neutral-600 text-lg leading-relaxed mb-8">
              {t('about.vision.description')}
            </p>
            
            {/* CTA Button */}
            <button className="px-8 py-3 bg-gradient-to-r from-primary-600 to-accent-600 text-white font-semibold rounded-full hover:from-primary-700 hover:to-accent-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
              Start Your Project
            </button>
          </div>

          <div className="relative">
            <div className="bg-white rounded-3xl p-8 shadow-2xl border border-neutral-100">
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent mb-2">
                      {stat.number}
                    </div>
                    <div className="text-neutral-600 font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-primary-200 to-accent-200 rounded-full blur-xl opacity-70"></div>
            <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-gradient-to-br from-secondary-200 to-primary-200 rounded-full blur-xl opacity-70"></div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white border border-neutral-200 rounded-2xl p-6 hover:border-primary-300 hover:shadow-xl transition-all duration-300 group"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-primary-100 to-accent-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <div className="text-primary-600">
                  {feature.icon}
                </div>
              </div>
              <h4 className="text-neutral-800 font-bold text-xl mb-3">{feature.title}</h4>
              <p className="text-neutral-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About
