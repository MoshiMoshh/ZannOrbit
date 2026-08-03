import { HelmetProvider } from 'react-helmet-async'
import { CursorProvider } from './context/CursorContext'
import { useLenis } from './hooks/useLenis'
import { Cursor } from './components/cursor/Cursor'
import { Navbar } from './components/layout/Navbar'
import { Footer } from './components/layout/Footer'
import { SEO } from './components/layout/SEO'
import { Hero } from './sections/Hero'
import { About } from './sections/About'
import { Experience } from './sections/Experience'
import { FeaturedProjects } from './sections/FeaturedProjects'
import { Contact } from './sections/Contact'

function App() {
  useLenis();

  return (
    <HelmetProvider>
      <SEO />
      <CursorProvider>
        <Cursor />
        <div className="min-h-screen selection:bg-primary/20 selection:text-primary">
          <Navbar />
          
          <main>
            <Hero />
            <About />
            <Experience />
            <FeaturedProjects />
            <Contact />
          </main>

          <Footer />
        </div>
      </CursorProvider>
    </HelmetProvider>
  )
}

export default App
