import { Wordmark } from './Logo'
import { RISK_TEXT } from '../constants'

const footLinks = [
  { href: '#how-it-works', label: 'How It Works' },
  { href: '#why-sprout', label: 'Why Sprout' },
  { href: '#get-ready', label: 'Getting ready' },
  { href: '#faqs', label: 'FAQs' },
]

export default function Footer() {
  return (
    <footer className="bg-forest text-cream">
      <div className="mx-auto max-w-6xl px-5 py-12 sm:px-8">
        <div className="grid gap-10 md:grid-cols-[1.2fr_1fr_1fr]">
          <div>
            <Wordmark light />
            <p className="mt-3 text-base text-cream/90">Small Steps. Big Futures.</p>
          </div>

          <nav aria-label="Footer">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-light-green">Explore</h2>
            <ul className="mt-3">
              {footLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="inline-flex min-h-11 min-w-11 items-center text-base text-cream hover:underline focus-visible:outline-cream">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-light-green">Contact</h2>
            <p className="mt-3 text-base text-cream/90">Contact details to be added.</p>
          </div>
        </div>

        <div className="mt-10 border-t border-cream/20 pt-6">
          <p className="text-sm leading-relaxed text-cream/90">
            <strong className="font-semibold">Risk disclaimer:</strong> {RISK_TEXT} Returns are not
            guaranteed, and investing may not be suitable for everyone.
          </p>
          <p className="mt-3 text-sm text-cream/80">© 2026 Sprout 2.0. Design assignment project.</p>
        </div>
      </div>
    </footer>
  )
}

