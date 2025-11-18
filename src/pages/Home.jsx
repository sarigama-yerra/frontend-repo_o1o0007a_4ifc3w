import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Difference from '../components/Difference'
import Logos from '../components/Logos'
import PortfolioCarousel from '../components/PortfolioCarousel'
import ServicesTeaser from '../components/ServicesTeaser'
import Process from '../components/Process'
import CTA from '../components/CTA'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className="bg-slate-900 min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Difference />
        <ServicesTeaser />
        <Logos />
        <PortfolioCarousel />
        <Process />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}
