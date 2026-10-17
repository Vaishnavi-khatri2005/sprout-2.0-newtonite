import { navigate } from '../../router'
import Mascot from '../../components/Mascot'
import OnboardingLayout from '../../components/onboarding/OnboardingLayout'
import { ctaClass, secondaryBtnClass } from '../../constants'
import { useCopy, useOnboarding } from '../../onboarding/context'

export default function Step5() {
  const c = useCopy()
  const { state } = useOnboarding()
  const count = state.checklist.filter(Boolean).length
  const rows = [
    c.s5.summary.checklist(count),
    c.s5.summary.mobile(state.phoneStage === 'done'),
    c.s5.summary.pan(state.panFormatChecked),
  ]

  return (
    <OnboardingLayout step={5} title={c.s5.title}>
      <div className="relative mx-auto mb-5 flex max-w-xs flex-col items-center">
        <div className="absolute inset-x-8 inset-y-4 rounded-[2rem] bg-mint" aria-hidden="true" />
        <Mascot className="relative h-44 w-auto sm:h-52" />
        <div className="relative mt-3 flex gap-1.5" aria-hidden="true">
          <span className="h-2 w-2 animate-pulse rounded-full bg-forest" />
          <span className="h-2 w-2 animate-pulse rounded-full bg-forest/60 [animation-delay:200ms]" />
          <span className="h-2 w-2 animate-pulse rounded-full bg-forest/30 [animation-delay:400ms]" />
        </div>
      </div>

      <p className="text-lg leading-relaxed text-charcoal">{c.s5.body}</p>
      <p className="mt-2 text-base leading-relaxed text-charcoal/80">{c.s5.body2}</p>

      <section aria-labelledby="summary-title" className="mt-6 rounded-2xl border border-forest/15 bg-white/70 p-5">
        <h2 id="summary-title" className="text-sm font-semibold uppercase tracking-wider text-forest">
          {c.s5.summaryTitle}
        </h2>
        <ul className="mt-3 space-y-2 text-base text-charcoal">
          {rows.map((r) => (
            <li key={r} className="flex gap-2">
              <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-forest" />
              {r}
            </li>
          ))}
        </ul>
      </section>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <button type="button" onClick={() => navigate('/')} className={`${ctaClass} sm:flex-1`}>
          {c.s5.backHome}
        </button>
        <button type="button" onClick={() => navigate('/onboarding/4')} className={`${secondaryBtnClass} sm:flex-1`}>
          {c.s5.review}
        </button>
      </div>
    </OnboardingLayout>
  )
}
