import { useState, useEffect } from 'react'
import { Navbar, Hero, Gallery, About, Contact, Footer } from './components'
import './App.css'

function App() {
  const [activeSection, setActiveSection] = useState('home')

  // Set default language and direction to Arabic/RTL
  useEffect(() => {
    document.documentElement.dir = 'rtl'
    document.documentElement.lang = 'ar'
  }, [])

  const handleNavigate = (section: string) => {
    setActiveSection(section)
    
    if (section === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      // Map gallery to the correct section ID if needed
      const targetSection = section === 'gallery' ? 'gallery' : section
      const element = document.getElementById(targetSection)
      if (element) {
        const headerOffset = 100
        const elementPosition = element.offsetTop
        const offsetPosition = elementPosition - headerOffset
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        })
      }
    }
  }

  // Update active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'gallery', 'about', 'contact']
      const scrollPosition = window.scrollY + 150

      for (const section of sections.reverse()) {
        const element = document.getElementById(section === 'home' ? 'hero' : section)
        if (element && scrollPosition >= element.offsetTop) {
          setActiveSection(section)
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-white">
      <Navbar onNavigate={handleNavigate} activeSection={activeSection} />
      
      <main>
        <div id="hero">
          <Hero onNavigate={handleNavigate} />
        </div>
        
        <Gallery />
        <About />
        <Contact />
      </main>
      
      <Footer />
    </div>
  )
}

export default App
