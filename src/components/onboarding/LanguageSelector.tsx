import { useOnboarding, useCopy } from '../../onboarding/context'
import type { Lang } from '../../onboarding/i18n'

const options: { value: Lang; label: string }[] = [
  { value: 'en', label: 'English' },
  { value: 'hi', label: 'हिंदी' },
]

/** Segmented radio group: native radios give arrow-key support and correct semantics for free. */
export default function LanguageSelector() {
  const { state, set } = useOnboarding()
  const c = useCopy()

  return (
    <fieldset>
      <legend className="text-sm font-semibold text-charcoal">{c.s1.langLegend}</legend>
      <div className="mt-2 inline-flex rounded-full border border-forest/30 bg-white p-1">
        {options.map((o) => (
          <label key={o.value} className="relative">
            <input
              type="radio"
              name="language"
              value={o.value}
              checked={state.lang === o.value}
              onChange={() => set({ lang: o.value })}
              className="peer sr-only"
            />
            <span
              lang={o.value}
              className="flex min-h-11 min-w-24 cursor-pointer items-center justify-center rounded-full px-5 text-base font-semibold text-forest peer-checked:bg-forest peer-checked:text-cream peer-focus-visible:outline-3 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-forest"
            >
              {o.label}
            </span>
          </label>
        ))}
      </div>
      {state.lang === 'hi' && (
        <p role="status" className="mt-3 rounded-xl bg-light-green/60 px-4 py-2.5 text-sm text-charcoal">
          {c.s1.protoNote}
          <span lang="en" className="mt-1 block">
            The Hindi translation is a prototype and may be incomplete.
          </span>
        </p>
      )}
    </fieldset>
  )
}
