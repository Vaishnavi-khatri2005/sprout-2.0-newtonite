import { useEffect } from 'react'
import Home from './pages/Home'
import Onboarding from './pages/Onboarding'
import OnboardingProvider from './onboarding/OnboardingProvider'
import { usePathname } from './router'

const HOME_TITLE = 'Sprout 2.0 | Small Steps. Big Futures.'

export default function App() {
  const path = usePathname()
  const inOnboarding = path.startsWith('/onboarding')

  // The homepage is English-only: restore its title and language when leaving onboarding.
  useEffect(() => {
    if (!inOnboarding) {
      document.title = HOME_TITLE
      document.documentElement.lang = 'en'
    }
  }, [inOnboarding])

  return (
    <OnboardingProvider>{inOnboarding ? <Onboarding path={path} /> : <Home />}</OnboardingProvider>
  )
}