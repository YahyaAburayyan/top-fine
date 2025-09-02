import { useTranslation } from 'react-i18next'

const Footer = () => {
  const { t } = useTranslation()
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    company: [
      { name: t('footer.company.about'), href: "#about" },
      { name: t('footer.company.team'), href: "#" },
      { name: t('footer.company.careers'), href: "#" },
      { name: t('footer.company.contact'), href: "#contact" }
    ],
    products: [
      { name: t('footer.products.tissues'), href: "#products" },
      { name: t('footer.products.paper_towels'), href: "#products" },
      { name: t('footer.products.napkins'), href: "#products" },
      { name: t('footer.products.toilet_paper'), href: "#products" }
    ],
    support: [
      { name: t('footer.support.help'), href: "#" },
      { name: t('footer.support.shipping'), href: "#" },
      { name: t('footer.support.returns'), href: "#" },
      { name: t('footer.support.faq'), href: "#" }
    ]
  }

  const socialLinks = [
    {
      name: t('social.twitter'),
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
        </svg>
      ),
      href: t('contact.social.twitter')
    },
    {
      name: t('social.instagram'),
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987c6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.418-3.323C6.001 8.198 7.152 7.708 8.449 7.708s2.448.49 3.323 1.416c.875.875 1.365 2.026 1.365 3.323s-.49 2.448-1.365 3.323C10.897 16.498 9.746 16.988 8.449 16.988z"/>
        </svg>
      ),
      href: t('contact.social.instagram')
    },
    {
      name: t('social.linkedin'),
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
      href: t('contact.social.linkedin')
    },
    {
      name: t('social.whatsapp'),
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
      ),
      href: t('contact.social.whatsapp')
    }
  ]

  return (
    <footer className="bg-neutral-800 border-t border-neutral-700">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-primary-400">
                <img 
                  src="/logo.png" 
                  alt="TopFine Logo" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-white font-bold text-xl">TopFine</h3>
                <p className="text-xs text-neutral-400 font-medium">{t('footer.brand.tagline')}</p>
              </div>
            </div>
            <p className="text-neutral-400 mb-6 max-w-md leading-relaxed">
              {t('footer.brand.description')}
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-neutral-700 border border-neutral-600 rounded-lg flex items-center justify-center hover:border-primary-400 hover:bg-primary-500/20 transition-all duration-300 group"
                  aria-label={social.name}
                >
                  <div className="text-neutral-400 group-hover:text-primary-400 transition-colors">
                    {social.icon}
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">{t('footer.company.title')}</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-neutral-400 hover:text-primary-400 transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">{t('footer.products.title')}</h4>
            <ul className="space-y-3">
              {footerLinks.products.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-neutral-400 hover:text-primary-400 transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">{t('footer.support.title')}</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-neutral-400 hover:text-primary-400 transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-neutral-700 flex flex-col md:flex-row justify-between items-center">
          <p className="text-neutral-400 text-sm mb-4 md:mb-0">
            © {currentYear} {t('footer.copyright')}
          </p>
          
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-neutral-400 hover:text-primary-400 transition-colors duration-200">
              {t('footer.legal.privacy')}
            </a>
            <a href="#" className="text-neutral-400 hover:text-primary-400 transition-colors duration-200">
              {t('footer.legal.terms')}
            </a>
            <a href="#" className="text-neutral-400 hover:text-primary-400 transition-colors duration-200">
              {t('footer.legal.cookies')}
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
