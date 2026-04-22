import './index.css'
import { Nav } from './components/Nav'
import { Hero } from './components/Hero'
import { Features } from './components/Features'
import { MenuSection } from './components/MenuSection'
import { AboutSection } from './components/AboutSection'
import { ReviewsSection } from './components/ReviewsSection'
import { CTASection } from './components/CTASection'
import { Footer } from './components/Footer'

function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Features />
        <MenuSection />
        <AboutSection />
        <ReviewsSection />
        <CTASection />
      </main>
      <Footer />
    </>
  )
}

export default App
