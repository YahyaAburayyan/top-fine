import { useState } from 'react'
import { useTranslation } from 'react-i18next'

const Gallery = () => {
  const { t } = useTranslation()
  const images = [
    {
      src: 'WhatsApp Image 2025-08-15 at 16.02.14_34797aca.jpg',
      title: t('products.items.premium_tissues.name'),
      description: t('products.items.premium_tissues.description'),
      category: 'featured'
    },
    {
      src: 'WhatsApp Image 2025-08-15 at 16.02.14_73e18cb9.jpg',
      title: t('products.items.paper_towels.name'),
      description: t('products.items.paper_towels.description'),
      category: 'recent'
    },
    {
      src: 'WhatsApp Image 2025-08-15 at 16.02.15_be5eda51.jpg',
      title: t('products.items.napkins.name'),
      description: t('products.items.napkins.description'),
      category: 'featured'
    },
    {
      src: 'WhatsApp Image 2025-08-15 at 16.02.16_a578a4c5.jpg',
      title: t('products.items.toilet_paper.name'),
      description: t('products.items.toilet_paper.description'),
      category: 'recent'
    },
    {
      src: 'WhatsApp Image 2025-08-15 at 16.02.16_f1635a27.jpg',
      title: t('products.items.facial_tissues.name'),
      description: t('products.items.facial_tissues.description'),
      category: 'featured'
    },
    {
      src: 'WhatsApp Image 2025-08-15 at 16.02.18_cd3e4f88.jpg',
      title: t('products.items.kitchen_rolls.name'),
      description: t('products.items.kitchen_rolls.description'),
      category: 'recent'
    }
  ]

  const [selectedImage, setSelectedImage] = useState<typeof images[0] | null>(null)
  const [filter, setFilter] = useState('all')

  const filters = [
    { id: 'all', label: t('products.filters.all') },
    { id: 'featured', label: t('products.filters.featured') },
    { id: 'recent', label: t('products.filters.recent') }
  ]

  const filteredImages = filter === 'all' 
    ? images 
    : images.filter(image => image.category === filter)

  return (
    <section id="gallery" className="py-20 px-4 bg-gradient-to-b from-white via-accent-50/30 to-neutral-50">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold mb-6">
            🛍️ {t('products.title')}
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-800 mb-4">
            TopFine <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">{t('products.title')}</span>
          </h2>
          <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
            {t('products.subtitle')}
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center mb-12">
          <div className="flex flex-wrap gap-2 p-2 bg-white rounded-xl shadow-md border border-neutral-200">
            {filters.map((filterOption) => (
              <button
                key={filterOption.id}
                onClick={() => setFilter(filterOption.id)}
                className={`px-6 py-2 rounded-lg text-sm font-semibold transition-all duration-300 ${
                  filter === filterOption.id
                    ? 'bg-gradient-to-r from-primary-500 to-accent-500 text-white shadow-md'
                    : 'text-neutral-600 hover:text-primary-600 hover:bg-primary-50'
                }`}
              >
                {filterOption.label}
              </button>
            ))}
          </div>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredImages.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl border border-neutral-200 hover:border-primary-300 transition-all duration-500 cursor-pointer transform hover:-translate-y-2"
              onClick={() => setSelectedImage(image)}
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={`/${image.src}`}
                  alt={image.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-white font-semibold text-lg mb-2">{image.title}</h3>
                  <p className="text-neutral-200 text-sm">{image.description}</p>
                  <div className="mt-3">
                    <span className="inline-block px-3 py-1 bg-primary-500 text-white text-xs font-semibold rounded-full">
                      {image.category}
                    </span>
                  </div>
                </div>
              </div>

              {/* View Icon */}
              <div className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg">
                <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <button className="px-8 py-3 bg-gradient-to-r from-primary-500 to-accent-500 text-white font-semibold rounded-full hover:from-primary-600 hover:to-accent-600 transition-all duration-300 transform hover:scale-105 shadow-lg">
            Load More Images
          </button>
        </div>
      </div>

      {/* Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="relative max-w-5xl max-h-full">
            {/* Close Button */}
            <button
              className="absolute -top-12 right-0 text-white hover:text-neutral-300 z-10"
              onClick={() => setSelectedImage(null)}
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            {/* Image */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={`/${selectedImage.src}`}
                alt={selectedImage.title}
                className="max-w-full max-h-[70vh] object-contain"
                onClick={(e) => e.stopPropagation()}
              />
              
              {/* Image Info */}
              <div className="p-6">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-neutral-800 font-bold text-xl mb-2">{selectedImage.title}</h3>
                    <p className="text-neutral-600 mb-3">{selectedImage.description}</p>
                    <span className="inline-block px-3 py-1 bg-primary-100 text-primary-700 text-sm font-semibold rounded-full">
                      {selectedImage.category}
                    </span>
                  </div>
                  <button className="px-4 py-2 bg-gradient-to-r from-primary-500 to-accent-500 text-white font-semibold rounded-lg hover:from-primary-600 hover:to-accent-600 transition-all duration-300">
                    Download
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default Gallery
