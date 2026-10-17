import { useState } from 'react'

const faqs = [
  {
    q: 'Can I start with ₹100?',
    a: 'Sprout is designed so you can begin with as little as ₹100. Investment options and minimum amounts may vary, so please check the details of any option before you decide.',
  },
  {
    q: 'What documents do I need?',
    a: 'It helps to keep your PAN card, your Aadhaar card, and a mobile number linked to Aadhaar ready. Requirements may change, so follow the instructions shown during setup.',
  },
  {
    q: 'Are investments risk-free?',
    a: 'No. Investments in the market carry risk, you may lose some or all of the money you invest, and returns are not guaranteed. Mutual fund investments are subject to market risks, so please read all scheme-related documents carefully. Investing may not be suitable for everyone.',
  },
  {
    q: 'What happens during verification?',
    a: 'You will be guided through a short setup where you provide the details asked for. Having your documents ready can help you prepare. The exact steps will be explained as you go.',
  },
]

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faqs" className="mx-auto max-w-3xl scroll-mt-20 px-5 pb-16 sm:px-8 md:pb-24">
      <p className="text-sm font-semibold uppercase tracking-wider text-forest">FAQs</p>
      <h2 className="mt-2 text-3xl font-semibold tracking-tight text-charcoal sm:text-4xl">
        Questions you may have.
      </h2>

      <div className="mt-8 divide-y divide-forest/10 border-y border-forest/10">
        {faqs.map((f, i) => {
          const open = openIndex === i
          return (
            <div key={f.q}>
              <h3>
                <button
                  type="button"
                  id={`faq-btn-${i}`}
                  aria-expanded={open}
                  aria-controls={`faq-panel-${i}`}
                  onClick={() => setOpenIndex(open ? null : i)}
                  className="flex min-h-14 w-full items-center justify-between gap-4 py-4 text-left text-lg font-semibold text-charcoal hover:text-forest"
                >
                  {f.q}
                  <span
                    aria-hidden="true"
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-mint text-forest ${open ? 'rotate-45' : ''}`}
                  >
                    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
                      <path d="M12 5v14M5 12h14" />
                    </svg>
                  </span>
                </button>
              </h3>
              <div id={`faq-panel-${i}`} role="region" aria-labelledby={`faq-btn-${i}`} hidden={!open}>
                <p className="pb-5 pr-12 text-base leading-relaxed text-charcoal/80">{f.a}</p>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
