import { useRef } from 'react'
import Hero from './components/Hero'
import WhyGold from './components/WhyGold'
import HowItWorks from './components/HowItWorks'
import WhyAurum from './components/WhyAurum'
import Testimonials from './components/Testimonials'
import Education from './components/Education'
import Calculator from './components/Calculator'
import LeadForm from './components/LeadForm'
import FAQ from './components/FAQ'
import About from './components/About'
import Assistant from './components/Assistant'
import Footer from './components/Footer'

function App() {
  const leadRef = useRef(null)
  const scrollLead = () => {
    const el = document.getElementById('lead')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-black">
      <header className="fixed top-0 inset-x-0 z-40 bg-black/60 backdrop-blur border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 text-white">
            <div className="w-6 h-6 rounded-sm bg-gradient-to-br from-amber-400 to-yellow-300"/>
            <span className="font-semibold">Aurum Vision</span>
          </div>
          <nav className="hidden sm:flex items-center gap-6 text-zinc-300">
            <a href="#" className="hover:text-white">Why Gold</a>
            <a href="#calculator" className="hover:text-white">Calculator</a>
            <a href="#lead" className="hover:text-white">Consultation</a>
          </nav>
          <button onClick={scrollLead} className="px-4 py-2 rounded-full bg-amber-400 text-black font-semibold">Book Consultation</button>
        </div>
      </header>

      <main className="pt-16">
        <Hero onPrimaryCta={scrollLead} />
        <WhyGold />
        <HowItWorks />
        <WhyAurum />
        <Testimonials />
        <Education />
        <Calculator />
        <About />
        <LeadForm />
        <FAQ />
      </main>

      <Assistant />
      <Footer />
    </div>
  )
}

export default App