import { useState } from 'react'
import { useTranslation } from 'react-i18next'

const Contact = () => {
  const { t } = useTranslation()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      console.log('Form submitted:', formData)
      alert(t('contact.form.success'))
      setFormData({ name: '', email: '', subject: '', message: '' })
      setIsSubmitting(false)
    }, 1000)
  }

  const contactInfo = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: t('contact.info.email'),
      value: t('contact.office.email'),
      link: `mailto:${t('contact.office.email')}`
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      title: t('contact.info.phone'),
      value: t('contact.office.phone'),
      link: `tel:${t('contact.office.phone')}`
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        </svg>
      ),
      title: t('contact.info.address'),
      value: t('contact.office.address'),
      link: "#"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: t('contact.info.hours'),
      value: t('contact.office.hours'),
      link: "#"
    }
  ]

  const socialLinks = [
    {
      name: t('social.twitter'),
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
        </svg>
      ),
      link: t('contact.social.twitter')
    },
    {
      name: t('social.instagram'),
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987c6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.418-3.323C6.001 8.198 7.152 7.708 8.449 7.708s2.448.49 3.323 1.416c.875.875 1.365 2.026 1.365 3.323s-.49 2.448-1.365 3.323C10.897 16.498 9.746 16.988 8.449 16.988z"/>
        </svg>
      ),
      link: t('contact.social.instagram')
    },
    {
      name: t('social.linkedin'),
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
      link: t('contact.social.linkedin')
    }
  ]

  return (
    <section id="contact" className="py-20 px-4 bg-gradient-to-b from-primary-50/30 via-neutral-50 to-white">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-accent-100 text-accent-700 rounded-full text-sm font-semibold mb-6">
            📞 {t('contact.badge')}
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-800 mb-4">
            {t('contact.title')} <span className="bg-gradient-to-r from-accent-600 to-primary-600 bg-clip-text text-transparent">{t('contact.title_highlight')}</span>
          </h2>
          <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white border border-neutral-200 rounded-2xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold text-neutral-800 mb-6">{t('contact.form.title')}</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-neutral-700 text-sm font-semibold mb-2">{t('contact.form.name')}</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-neutral-50 border border-neutral-300 rounded-lg text-neutral-800 placeholder-neutral-500 focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-colors"
                    placeholder={t('contact.form.name_placeholder')}
                  />
                </div>
                <div>
                  <label className="block text-neutral-700 text-sm font-semibold mb-2">{t('contact.form.email')}</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-neutral-50 border border-neutral-300 rounded-lg text-neutral-800 placeholder-neutral-500 focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-colors"
                    placeholder={t('contact.form.email_placeholder')}
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-neutral-700 text-sm font-semibold mb-2">{t('contact.form.subject')}</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-neutral-50 border border-neutral-300 rounded-lg text-neutral-800 placeholder-neutral-500 focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-colors"
                  placeholder={t('contact.form.subject_placeholder')}
                />
              </div>
              
              <div>
                <label className="block text-neutral-700 text-sm font-semibold mb-2">{t('contact.form.message')}</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-neutral-50 border border-neutral-300 rounded-lg text-neutral-800 placeholder-neutral-500 focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-colors resize-none"
                  placeholder={t('contact.form.message_placeholder')}
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-8 py-4 bg-gradient-to-r from-primary-600 to-accent-600 text-white font-semibold rounded-lg hover:from-primary-700 hover:to-accent-700 transition-all duration-300 transform hover:scale-105 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? t('contact.form.sending') : t('contact.form.send')}
                <svg className="inline-block ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-neutral-800 mb-6">{t('contact.info.title')}</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.link}
                    className="flex items-center space-x-4 p-4 bg-white border border-neutral-200 rounded-xl hover:border-primary-300 hover:shadow-lg transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-primary-100 to-accent-100 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <div className="text-primary-600">
                        {info.icon}
                      </div>
                    </div>
                    <div>
                      <div className="text-neutral-500 text-sm font-medium">{info.title}</div>
                      <div className="text-neutral-800 font-semibold">{info.value}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-xl font-bold text-neutral-800 mb-4">{t('contact.social.title')}</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    className="w-12 h-12 bg-white border border-neutral-200 rounded-lg flex items-center justify-center hover:border-primary-300 hover:bg-primary-50 transition-all duration-300 group shadow-md"
                  >
                    <div className="text-neutral-600 group-hover:text-primary-600 transition-colors">
                      {social.icon}
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Additional CTA */}
            <div className="bg-gradient-to-r from-primary-500 to-accent-500 rounded-2xl p-6 text-white">
              <h4 className="text-xl font-bold mb-2">{t('contact.cta.title')}</h4>
              <p className="text-primary-100 mb-4">{t('contact.cta.subtitle')}</p>
              <button className="px-6 py-2 bg-white text-primary-600 font-semibold rounded-lg hover:bg-neutral-100 transition-colors">
                {t('contact.cta.button')}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
