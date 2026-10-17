import { useEffect, useRef, useState } from 'react'
import AppLink from './AppLink'
import { ctaClass } from '../constants'
import { Wordmark } from './Logo'

const links = [
  { href: '#how-it-works', label: 'How It Works' },
  { href: '#why-sprout', label: 'Why Sprout' },
  { href: '#faqs', label: 'FAQs' },
]

const linkClass =
  'inline-flex min-h-11 items-center rounded-full px-4 text-[0.95rem] font-medium text-charcoal hover:bg-mint hover:text-forest'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const buttonRef = useRef<HTMLButtonElement>(null)
  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false)
        buttonRef.current?.focus()
      }
      if (e.key === 'Tab' && menuRef.current) {
        // keep focus within the toggle + menu while open
        const items = [
          buttonRef.current!,
          ...menuRef.current.querySelectorAll<HTMLElement>('a[href]'),
        ]
        const first = items[0]
        const last = items[items.length - 1]
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault()
          last.focus()
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault()
          first.focus()
        }
      }
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <header className="sticky top-0 z-40 border-b border-forest/10 bg-cream/90 backdrop-blur">
      <nav
        aria-label="Primary"
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8"
      >
        <a href="#top" aria-label="Sprout 2.0 home" className="inline-flex min-h-11 items-center rounded-full">
          <Wordmark />
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className={linkClass}>
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <AppLink to="/onboarding/1" className={`${ctaClass} !min-h-11 !px-5`}>
            Get Started
          </AppLink>
          <button
            ref={buttonRef}
            type="button"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((o) => !o)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full text-forest hover:bg-mint md:hidden"
          >
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
              {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </nav>

      <div
        id="mobile-menu"
        ref={menuRef}
        hidden={!open}
        className="border-t border-forest/10 bg-cream px-5 pb-5 pt-3 md:hidden"
      >
        <ul className="flex flex-col">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="flex min-h-12 items-center rounded-xl px-3 text-lg font-medium text-charcoal hover:bg-mint"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <span onClick={() => setOpen(false)} className="mt-3 block">
          <AppLink to="/onboarding/1" className={`${ctaClass} w-full`}>
            Get Started
          </AppLink>
        </span>
      </div>
    </header>
  )
}

