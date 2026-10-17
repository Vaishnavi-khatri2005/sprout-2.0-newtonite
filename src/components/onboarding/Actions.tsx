import type { ReactNode } from 'react'
import { ctaClass, secondaryBtnClass } from '../../constants'
import { useCopy } from '../../onboarding/context'

type Props = {
  onBack?: () => void
  onContinue?: () => void
  /** Replaces the default "Continue" label. */
  continueLabel?: string
  /** Use type=submit so the surrounding <form> handles it (Enter key support). */
  submit?: boolean
  extra?: ReactNode
}

/** Back + Continue row used on every screen. Back is secondary, Continue is primary and fills the rest. */
export default function Actions({ onBack, onContinue, continueLabel, submit, extra }: Props) {
  const c = useCopy()
  return (
    <div className="mt-8">
      {extra}
      <div className="flex gap-3">
        {onBack && (
          <button type="button" onClick={onBack} className={secondaryBtnClass}>
            {c.back}
          </button>
        )}
        <button
          type={submit ? 'submit' : 'button'}
          onClick={submit ? undefined : onContinue}
          className={`${ctaClass} flex-1`}
        >
          {continueLabel ?? c.continue}
        </button>
      </div>
    </div>
  )
}
