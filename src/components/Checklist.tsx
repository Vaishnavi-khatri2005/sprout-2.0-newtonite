const items = [
  { title: 'PAN card', hint: 'Your Permanent Account Number card' },
  { title: 'Aadhaar card', hint: 'Your Aadhaar number or card' },
  { title: 'Mobile number linked to Aadhaar', hint: 'A phone you can access, for one-time codes' },
]

export default function Checklist() {
  return (
    <section id="get-ready" className="mx-auto max-w-6xl scroll-mt-20 px-5 pb-16 sm:px-8 md:pb-24">
      <div className="grid gap-8 rounded-[2rem] bg-mint p-6 sm:p-10 md:grid-cols-[0.9fr_1.1fr] md:items-center md:gap-14 md:p-14">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-forest">Getting ready</p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight text-charcoal sm:text-4xl">
            Keep these ready.
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-charcoal/80">
            Having these ready can help you prepare for verification.
          </p>
        </div>

        <ul className="space-y-3">
          {items.map((it) => (
            <li key={it.title} className="flex items-center gap-4 rounded-2xl border border-forest/10 bg-cream p-4 sm:p-5">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-forest text-cream">
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M5 12.5l4.5 4.5L19 7.5" />
                </svg>
              </span>
              <div>
                <p className="text-base font-semibold text-charcoal">{it.title}</p>
                <p className="text-sm text-charcoal/80">{it.hint}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
