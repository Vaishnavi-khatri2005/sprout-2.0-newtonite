import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import HowItWorks from '../components/HowItWorks'
import WhySprout from '../components/WhySprout'
import Checklist from '../components/Checklist'
import Faq from '../components/Faq'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-50 focus:rounded-full focus:bg-forest focus:px-4 focus:py-3 focus:text-cream"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main">
        <Hero />
        <HowItWorks />
        <WhySprout />
        <Checklist />
        <Faq />
      </main>
      <Footer />
    </>
  )
}
