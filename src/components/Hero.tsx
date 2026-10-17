import AppLink from './AppLink'
import Mascot from './Mascot'
import { ctaClass, RISK_TEXT } from '../constants'

export default function Hero() {
  return (
    <section id="top" className="mx-auto max-w-6xl px-5 pb-16 pt-8 sm:px-8 md:pb-24 md:pt-16">
      <div className="grid items-center gap-12 md:grid-cols-[1.05fr_0.95fr] md:gap-10 lg:gap-16">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full bg-mint px-3.5 py-1.5 text-sm font-medium text-forest">
            <span className="h-1.5 w-1.5 rounded-full bg-forest" aria-hidden="true" />
            A simpler start to investing
          </p>
          <h1 className="mt-5 text-[2.25rem] font-semibold leading-[1.12] tracking-tight text-charcoal sm:text-5xl lg:text-6xl">
            Your <span className="text-forest">first step</span> towards investing starts here.
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-charcoal/80">
            Begin your investing journey with ₹100. Understand each step, complete your setup and
            move forward at your own pace.
          </p>

          <div className="mt-7 flex flex-col items-stretch gap-4 sm:flex-row sm:items-center sm:gap-6">
            <AppLink to="/onboarding/1" className={ctaClass}>
              Get Started
            </AppLink>
            <a
              href="#how-it-works"
              className="inline-flex min-h-11 items-center justify-center gap-1.5 font-semibold text-forest underline decoration-forest/30 underline-offset-4 hover:decoration-forest"
            >
              See how it works <span aria-hidden="true">→</span>
            </a>
          </div>

          <p className="mt-4 text-base font-medium text-forest">Start small. Learn as you go.</p>

          <p
            role="note"
            className="mt-5 max-w-xl rounded-xl border border-forest/15 bg-white/60 px-4 py-3 text-sm leading-relaxed text-charcoal"
          >
            {RISK_TEXT}
          </p>
        </div>

        <HeroArt />
      </div>
    </section>
  )
}

function HeroArt() {
  return (
    <div className="relative mx-auto w-full max-w-md md:max-w-none" aria-hidden="false">
      {/* decorative shapes */}
      <div className="absolute inset-x-4 inset-y-2 -z-0 rounded-[2.5rem] bg-mint sm:inset-x-8" aria-hidden="true" />
      <div className="absolute -right-1 top-6 h-14 w-14 rounded-full bg-light-green" aria-hidden="true" />
      <div className="absolute bottom-24 left-0 h-8 w-8 rotate-45 rounded-md bg-light-green" aria-hidden="true" />
      <svg className="absolute left-6 top-4 h-10 w-10 text-forest/30" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <circle cx="8" cy="8" r="2" /><circle cx="20" cy="8" r="2" /><circle cx="32" cy="8" r="2" />
        <circle cx="8" cy="20" r="2" /><circle cx="20" cy="20" r="2" /><circle cx="32" cy="20" r="2" />
      </svg>

      <div className="relative z-10 px-6 pb-6 pt-8 sm:px-10">
        <Mascot className="mx-auto h-64 w-auto sm:h-80 lg:h-[22rem]" />

        <div className="mx-auto mt-3 max-w-xs rounded-2xl border border-forest/10 bg-cream p-4 shadow-[0_10px_30px_-12px_rgba(15,81,50,0.25)] sm:p-5">
          <p className="text-sm font-medium text-charcoal/80">Your journey starts with</p>
          <p className="mt-0.5 text-3xl font-semibold tracking-tight text-forest">₹100</p>
          <div className="mt-3 flex items-center gap-1.5" aria-hidden="true">
            <span className="h-2 flex-1 rounded-full bg-forest" />
            <span className="h-2 flex-1 rounded-full bg-light-green" />
            <span className="h-2 flex-1 rounded-full bg-light-green" />
          </div>
          <p className="mt-2 text-sm text-charcoal/80">Step 1 of 3 · Small steps, at your pace</p>
        </div>
      </div>
    </div>
  )
}

