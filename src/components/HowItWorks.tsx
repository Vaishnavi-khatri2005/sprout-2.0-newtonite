import type { ReactNode } from 'react'

const iconProps = {
  viewBox: '0 0 24 24',
  className: 'h-6 w-6',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.8,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  'aria-hidden': true,
}

const steps: { title: string; text: string; icon: ReactNode }[] = [
  {
    title: 'Get started',
    text: 'Create your account.',
    icon: (
      <svg {...iconProps}>
        <circle cx="10" cy="8" r="3.5" />
        <path d="M3.5 20c.6-3.6 3-5.5 6.5-5.5" />
        <path d="M18 14v6M15 17h6" />
      </svg>
    ),
  },
  {
    title: 'Complete verification',
    text: 'Keep your required documents ready.',
    icon: (
      <svg {...iconProps}>
        <rect x="4" y="3.5" width="16" height="17" rx="3" />
        <path d="M8.5 12.5l2.5 2.5 4.5-5" />
      </svg>
    ),
  },
  {
    title: 'Explore investing',
    text: 'Understand available options before deciding.',
    icon: (
      <svg {...iconProps}>
        <circle cx="12" cy="12" r="8.5" />
        <path d="M15.5 8.5l-2 5-5 2 2-5 5-2Z" />
      </svg>
    ),
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="scroll-mt-20 bg-mint/60 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <p className="text-sm font-semibold uppercase tracking-wider text-forest">How it works</p>
        <h2 className="mt-2 max-w-xl text-3xl font-semibold tracking-tight text-charcoal sm:text-4xl">
          Three simple steps, one at a time.
        </h2>

        <ol className="mt-10 grid gap-5 md:grid-cols-3">
          {steps.map((s, i) => (
            <li
              key={s.title}
              className="relative rounded-2xl border border-forest/10 bg-cream p-6 shadow-[0_6px_20px_-14px_rgba(15,81,50,0.3)]"
            >
              <div className="flex items-center justify-between">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-light-green text-forest">
                  {s.icon}
                </span>
                <span className="text-sm font-semibold text-forest/70">Step {i + 1}</span>
              </div>
              <h3 className="mt-5 text-xl font-semibold text-charcoal">{s.title}</h3>
              <p className="mt-2 text-base leading-relaxed text-charcoal/80">{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
