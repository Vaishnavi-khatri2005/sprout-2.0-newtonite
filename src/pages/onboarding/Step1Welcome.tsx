import { navigate } from '../../router'
import AppLink from '../../components/AppLink'
import Mascot from '../../components/Mascot'
import OnboardingLayout from '../../components/onboarding/OnboardingLayout'
import LanguageSelector from '../../components/onboarding/LanguageSelector'
import Actions from '../../components/onboarding/Actions'
import { useCopy } from '../../onboarding/context'

export default function Step1() {
  const c = useCopy()
  return (
    <OnboardingLayout step={1} title={c.s1.title}>
      <p className="text-lg leading-relaxed text-charcoal/80">{c.s1.body}</p>

      <div className="relative mx-auto my-6 max-w-xs">
        <div className="absolute inset-x-6 inset-y-3 rounded-[2rem] bg-mint" aria-hidden="true" />
        <Mascot className="relative mx-auto h-56 w-auto sm:h-64" />
      </div>

      <LanguageSelector />

      <Actions onContinue={() => navigate('/onboarding/2')} />

      <p className="mt-5 text-center">
        <AppLink
          to="/"
          className="inline-flex min-h-11 items-center font-semibold text-forest underline decoration-forest/30 underline-offset-4 hover:decoration-forest"
        >
          <span aria-hidden="true">←&nbsp;</span>
          {c.backHome}
        </AppLink>
      </p>
    </OnboardingLayout>
  )
}
