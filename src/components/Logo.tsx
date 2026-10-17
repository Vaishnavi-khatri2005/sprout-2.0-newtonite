type Props = { className?: string }

/** Small geometric sprout mark: stem plus two leaves. */
export function SproutIcon({ className = 'h-8 w-8' }: Props) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true" focusable="false">
      <rect width="32" height="32" rx="9" fill="#0F5132" />
      <path d="M16 26V15" stroke="#E6F4EA" strokeWidth="2.4" strokeLinecap="round" />
      <path d="M16 15C16 10 12 8 7 8c0 5 3 7 9 7Z" fill="#CFEFD6" />
      <path d="M16 17c0-5 4-7 9-7 0 5-3 7-9 7Z" fill="#E6F4EA" />
    </svg>
  )
}

export function Wordmark({ light = false }: { light?: boolean }) {
  return (
    <span className="inline-flex items-center gap-2.5">
      <SproutIcon />
      <span
        className={`text-xl font-semibold tracking-tight ${light ? 'text-cream' : 'text-forest'}`}
      >
        Sprout <span className="font-medium opacity-80">2.0</span>
      </span>
    </span>
  )
}
