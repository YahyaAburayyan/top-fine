import { useTranslation } from 'react-i18next'

interface HeroProps {
  onNavigate: (section: string) => void
}

const Hero = ({ onNavigate }: HeroProps) => {
  const { t } = useTranslation()
  
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-white overflow-hidden">
      {/* Background Image or Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-accent-50 opacity-80"></div>
      
      {/* Decorative Elements */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-primary-100 rounded-full opacity-30 blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-secondary-100 rounded-full opacity-20 blur-3xl"></div>

      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-left">
            <div className="mb-6">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary-100 text-primary-800">
                ✨ {t('hero.badge')}
              </span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              {t('hero.title')}
              <span className="block text-primary-600">{t('hero.subtitle')}</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-lg">
              {t('hero.description')}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button
                onClick={() => onNavigate('gallery')}
                className="inline-flex items-center justify-center px-8 py-4 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                {t('hero.cta')}
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
              
              <button
                onClick={() => onNavigate('products')}
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:border-primary-300 hover:text-primary-600 transition-all duration-200"
              >
                {t('hero.secondaryCta')}
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-8 text-sm text-gray-500">
              <div className="flex items-center">
                <div className="flex -space-x-2 mr-3">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="w-8 h-8 rounded-full bg-primary-200 border-2 border-white flex items-center justify-center">
                      <span className="text-xs font-semibold text-primary-700">★</span>
                    </div>
                  ))}
                </div>
                <span>{t('hero.trustedBy')}</span>
              </div>
              <div className="grid grid-cols-3 gap-4 text-xs">
                <div className="text-center">
                  <div className="font-bold text-primary-600">500+</div>
                  <div>{t('hero.stats.products')}</div>
                </div>
                <div className="text-center">
                  <div className="font-bold text-primary-600">10K+</div>
                  <div>{t('hero.stats.customers')}</div>
                </div>
                <div className="text-center">
                  <div className="font-bold text-primary-600">15+</div>
                  <div>{t('hero.stats.experience')}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Image Showcase */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="aspect-square bg-white rounded-2xl shadow-lg overflow-hidden">
                  <img 
                    src="/WhatsApp Image 2025-08-15 at 16.02.14_34797aca.jpg" 
                    alt="Creative work sample"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-[4/3] bg-white rounded-2xl shadow-lg overflow-hidden">
                  <img 
                    src="/WhatsApp Image 2025-08-15 at 16.02.14_73e18cb9.jpg" 
                    alt="Creative work sample"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="aspect-[4/3] bg-white rounded-2xl shadow-lg overflow-hidden">
                  <img 
                    src="/WhatsApp Image 2025-08-15 at 16.02.15_be5eda51.jpg" 
                    alt="Creative work sample"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-square bg-white rounded-2xl shadow-lg overflow-hidden">
                  <img 
                    src="/WhatsApp Image 2025-08-15 at 16.02.16_a578a4c5.jpg" 
                    alt="Creative work sample"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
            
            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-2xl p-6 border border-gray-100">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Premium Quality</p>
                  <p className="text-sm text-gray-500">Professional Standards</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
