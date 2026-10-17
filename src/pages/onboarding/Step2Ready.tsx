import { navigate } from '../../router'
import OnboardingLayout from '../../components/onboarding/OnboardingLayout'
import Actions from '../../components/onboarding/Actions'
import { CheckRow } from '../../components/onboarding/formParts'
import { useCopy, useOnboarding } from '../../onboarding/context'

export default function Step2() {
  const c = useCopy()
  const { state, set } = useOnboarding()
  const count = state.checklist.filter(Boolean).length

  const toggle = (i: number, v: boolean) => {
    const next = [...state.checklist] as typeof state.checklist
    next[i] = v
    set({ checklist: next })
  }

  return (
    <OnboardingLayout step={2} title={c.s2.title}>
      <p className="text-lg leading-relaxed text-charcoal/80">{c.s2.intro}</p>

      <fieldset className="mt-6">
        <legend className="mb-3 flex w-full items-center justify-between text-sm font-semibold text-charcoal">
          <span>{c.s2.legend}</span>
          <span role="status" className="rounded-full bg-light-green px-3 py-1 text-forest">
            {c.s2.ready(count)}
          </span>
        </legend>
        <div className="space-y-3">
          {c.s2.items.map((it, i) => (
            <CheckRow
              key={it.title}
              checked={state.checklist[i]}
              onChange={(v) => toggle(i, v)}
              title={it.title}
              hint={it.hint}
            />
          ))}
        </div>
      </fieldset>

      <p className="mt-4 text-sm text-charcoal/80">{c.s2.note}</p>

      <Actions onBack={() => navigate('/onboarding/1')} onContinue={() => navigate('/onboarding/3')} />
    </OnboardingLayout>
  )
}
