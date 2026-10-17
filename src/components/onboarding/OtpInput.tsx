import { useEffect, useRef } from 'react'
import type { ClipboardEvent, KeyboardEvent } from 'react'
import { useCopy } from '../../onboarding/context'

type Props = {
  value: string[]
  onChange: (next: string[]) => void
  labelledBy: string
  describedBy?: string
  invalid?: boolean
  readOnly?: boolean
}

/** Six single-digit boxes. Supports typing, backspace, arrow keys and paste. Demo only. */
export default function OtpInput({ value, onChange, labelledBy, describedBy, invalid, readOnly }: Props) {
  const c = useCopy()
  const refs = useRef<(HTMLInputElement | null)[]>([])

  useEffect(() => {
    if (!readOnly) refs.current[0]?.focus()
  }, [readOnly])

  const focusAt = (i: number) => refs.current[Math.max(0, Math.min(5, i))]?.focus()

  const setDigit = (i: number, d: string) => {
    const next = [...value]
    next[i] = d
    onChange(next)
  }

  const onKeyDown = (i: number, e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && !value[i]) {
      e.preventDefault()
      focusAt(i - 1)
      if (i > 0) setDigit(i - 1, '')
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault()
      focusAt(i - 1)
    } else if (e.key === 'ArrowRight') {
      e.preventDefault()
      focusAt(i + 1)
    }
  }

  const onPaste = (e: ClipboardEvent<HTMLInputElement>) => {
    const digits = e.clipboardData.getData('text').replace(/\D/g, '').slice(0, 6)
    if (!digits) return
    e.preventDefault()
    const next = Array.from({ length: 6 }, (_, k) => digits[k] ?? '')
    onChange(next)
    focusAt(Math.min(digits.length, 5))
  }

  return (
    <div role="group" aria-labelledby={labelledBy} aria-describedby={describedBy} className="flex gap-2 sm:gap-3">
      {value.map((d, i) => (
        <input
          key={i}
          data-otp-digit={i}
          ref={(el) => {
            refs.current[i] = el
          }}
          type="text"
          inputMode="numeric"
          pattern="[0-9]*"
          maxLength={1}
          autoComplete={i === 0 ? 'one-time-code' : 'off'}
          aria-label={c.s3.otpDigit(i + 1)}
          aria-invalid={invalid || undefined}
          readOnly={readOnly}
          value={d}
          onChange={(e) => {
            if (readOnly) return
            const digit = e.target.value.replace(/\D/g, '').slice(-1)
            setDigit(i, digit)
            if (digit) focusAt(i + 1)
          }}
          onKeyDown={(e) => {
            if (!readOnly) onKeyDown(i, e)
          }}
          onPaste={(e) => {
            if (!readOnly) onPaste(e)
          }}
          onFocus={(e) => e.target.select()}
          className={`h-14 min-w-0 flex-1 rounded-xl border text-center text-xl font-semibold text-charcoal ${
            readOnly
              ? 'border-forest/20 bg-mint/40'
              : invalid
                ? 'border-[#B42318] bg-white'
                : 'border-forest/30 bg-white hover:border-forest/60'
          }`}
        />
      ))}
    </div>
  )
}
