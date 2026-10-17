import type { ReactNode } from 'react'
import { errorTextClass } from '../../constants'

export function FieldError({ id, children }: { id: string; children: ReactNode }) {
  return (
    <p id={id} role="alert" className={errorTextClass}>
      <svg viewBox="0 0 20 20" className="mt-0.5 h-4 w-4 shrink-0" fill="currentColor" aria-hidden="true">
        <path d="M10 1.5a8.5 8.5 0 1 0 0 17 8.5 8.5 0 0 0 0-17Zm-.9 4.5h1.8v5.2H9.1V6Zm.9 8.9a1.1 1.1 0 1 1 0-2.2 1.1 1.1 0 0 1 0 2.2Z" />
      </svg>
      <span>{children}</span>
    </p>
  )
}

export function DemoNotice({ children }: { children: ReactNode }) {
  return (
    <p className="rounded-xl border border-forest/20 bg-light-green/50 px-4 py-3 text-sm leading-relaxed text-charcoal">
      {children}
    </p>
  )
}

/** Native checkbox, visually replaced; keeps keyboard + screen-reader behaviour. */
export function CheckRow({
  checked,
  onChange,
  title,
  hint,
}: {
  checked: boolean
  onChange: (v: boolean) => void
  title: string
  hint?: string
}) {
  return (
    <label className="relative flex min-h-14 cursor-pointer items-center gap-4 rounded-2xl border border-forest/15 bg-white/70 p-4 hover:border-forest/40">
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className="peer sr-only"
      />
      <span className="absolute inset-0 rounded-2xl peer-checked:bg-mint/70 peer-focus-visible:outline-3 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-forest" aria-hidden="true" />
      <span
        aria-hidden="true"
        className={`relative flex h-7 w-7 shrink-0 items-center justify-center rounded-full border-2 ${
          checked ? 'border-forest bg-forest text-cream' : 'border-forest/40 bg-white text-transparent'
        }`}
      >
        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 12.5l4.5 4.5L19 7.5" />
        </svg>
      </span>
      <span className="relative">
        <span className="block text-base font-semibold text-charcoal">{title}</span>
        {hint && <span className="block text-sm text-charcoal/80">{hint}</span>}
      </span>
    </label>
  )
}
