const points = [
  { title: 'Start with ₹100', text: 'A low starting amount so you can begin without a big commitment.' },
  { title: 'Simple, beginner-friendly guidance', text: 'Plain language at every step, so you know what is happening and why.' },
  { title: 'Clear verification instructions', text: 'Know what to keep ready before you begin, so setup feels less uncertain.' },
  { title: 'Transparent about risk', text: 'Market investments carry risk. Returns are not guaranteed and investing may not suit everyone.' },
]

export default function WhySprout() {
  return (
    <section id="why-sprout" className="mx-auto max-w-6xl scroll-mt-20 px-5 py-16 sm:px-8 md:py-24">
      <div className="grid gap-10 md:grid-cols-[0.8fr_1.2fr] md:gap-16">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-forest">Why Sprout</p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight text-charcoal sm:text-4xl">
            Built for first-time investors.
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-charcoal/80">
            Investing can feel unfamiliar. Sprout aims to keep each step clear and honest.
          </p>
        </div>

        <ul className="divide-y divide-forest/10 border-y border-forest/10">
          {points.map((p, i) => (
            <li key={p.title} className="flex gap-4 py-5 sm:gap-6 sm:py-6">
              <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-light-green text-sm font-semibold text-forest" aria-hidden="true">
                {i + 1}
              </span>
              <div>
                <h3 className="text-lg font-semibold text-charcoal">{p.title}</h3>
                <p className="mt-1 text-base leading-relaxed text-charcoal/80">{p.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
