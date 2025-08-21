/**
 * Home page component for ItEnAi 3D Blender course landing page
 */
import Header from '../components/Header'
import HeroSection from '../components/HeroSection'
import AboutSection from '../components/AboutSection'
import ModulesSection from '../components/ModulesSection'
import BenefitsSection from '../components/BenefitsSection'
import PricingSection from '../components/PricingSection'
import ContactSection from '../components/ContactSection'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ModulesSection />
        <BenefitsSection />
        <PricingSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}