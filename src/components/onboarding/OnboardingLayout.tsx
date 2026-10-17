import { useEffect } from 'react'
import type { ReactNode } from 'react'
import AppLink from '../AppLink'
import { Wordmark } from '../Logo'
import { useCopy } from '../../onboarding/context'

type Props = {
  step: number
  title: string
  children: ReactNode
}

/** Shared frame for every onboarding screen: header, progress, heading, risk disclosure. */
export default function OnboardingLayout({ step, title, children }: Props) {
  const c = useCopy()

  useEffect(() => {
    document.title = `${title} | Sprout 2.0`
  }, [title])

  // Move focus to the heading only when the step changes (not on language change).
  useEffect(() => {
    document.getElementById('step-heading')?.focus({ preventScroll: true })
  }, [step])

  return (
    <div className="flex min-h-dvh flex-col bg-cream">
      <header className="border-b border-forest/10">
        <div className="mx-auto flex h-16 max-w-2xl items-center justify-between gap-3 px-5 sm:px-8">
          <AppLink to="/" className="inline-flex min-h-11 items-center rounded-full" >
            <span className="sr-only">{c.homeAria}</span>
            <Wordmark />
          </AppLink>
          <span className="rounded-full bg-mint px-3 py-1 text-xs font-semibold text-forest sm:text-sm">
            {c.protoBadge}
          </span>
        </div>
      </header>

      <main className="mx-auto w-full max-w-2xl flex-1 px-5 pb-10 pt-6 sm:px-8 sm:pt-10">
        <div
          role="progressbar"
          aria-label={c.progressLabel}
          aria-valuemin={1}
          aria-valuemax={5}
          aria-valuenow={step}
          aria-valuetext={c.stepOf(step)}
          className="flex gap-1.5"
        >
          {[1, 2, 3, 4, 5].map((n) => (
            <span
              key={n}
              aria-hidden="true"
              className={`h-1.5 flex-1 rounded-full ${n <= step ? 'bg-forest' : 'bg-light-green'}`}
            />
          ))}
        </div>
        <p className="mt-3 text-sm font-semibold text-forest">{c.stepOf(step)}</p>

        <h1
          id="step-heading"
          tabIndex={-1}
          className="mt-2 text-[1.75rem] font-semibold leading-tight tracking-tight text-charcoal outline-none sm:text-4xl"
        >
          {title}
        </h1>

        <div className="mt-5">{children}</div>
      </main>

      <footer className="border-t border-forest/10 bg-mint/50">
        <p role="note" aria-label={c.riskLabel} className="mx-auto max-w-2xl px-5 py-4 text-sm leading-relaxed text-charcoal sm:px-8">
          {c.risk}
        </p>
      </footer>
    </div>
  )
}
