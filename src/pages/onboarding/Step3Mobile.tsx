import { useRef, useState } from 'react'
import type { FormEvent } from 'react'
import { navigate } from '../../router'
import OnboardingLayout from '../../components/onboarding/OnboardingLayout'
import Actions from '../../components/onboarding/Actions'
import OtpInput from '../../components/onboarding/OtpInput'
import { DemoNotice, FieldError } from '../../components/onboarding/formParts'
import { inputClass, secondaryBtnClass } from '../../constants'
import { useCopy, useOnboarding } from '../../onboarding/context'

export default function Step3() {
  const c = useCopy()
  const { state, set } = useOnboarding()
  const stage = state.phoneStage

  const [phoneError, setPhoneError] = useState('')
  const [digits, setDigits] = useState<string[]>(Array(6).fill(''))
  const [otpError, setOtpError] = useState('')
  const phoneRef = useRef<HTMLInputElement>(null)

  const submitPhone = (e: FormEvent) => {
    e.preventDefault()
    if (state.phone.length === 0) return fail(c.s3.phoneErrorEmpty)
    if (!/^\d{10}$/.test(state.phone)) return fail(c.s3.phoneErrorShort)
    setPhoneError('')
    set({ phoneStage: 'otp' })
  }
  const fail = (msg: string) => {
    setPhoneError(msg)
    phoneRef.current?.focus()
  }

  const submitOtp = (e: FormEvent) => {
    e.preventDefault()
    const emptyIdx = digits.findIndex((d) => !/^\d$/.test(d))
    if (emptyIdx !== -1) {
      setOtpError(c.s3.otpError)
      document.querySelector<HTMLInputElement>(`[data-otp-digit="${emptyIdx}"]`)?.focus()
      return
    }
    setOtpError('')
    set({ phoneStage: 'done' })
  }

  const back = () => {
    if (stage === 'enter') navigate('/onboarding/2')
    else {
      setDigits(Array(6).fill(''))
      setOtpError('')
      set({ phoneStage: 'enter' })
    }
  }

  return (
    <OnboardingLayout step={3} title={c.s3.title}>
      <DemoNotice>{c.s3.demoNotice}</DemoNotice>

      {stage === 'enter' && (
        <form onSubmit={submitPhone} noValidate className="mt-6">
          <p className="mb-4 text-lg leading-relaxed text-charcoal/80">{c.s3.body}</p>
          <label htmlFor="phone" className="block text-sm font-semibold text-charcoal">
            {c.s3.phoneLabel}
          </label>
          <div className="mt-2 flex gap-2">
            <span
              aria-label={c.s3.countryCode}
              role="img"
              className="flex min-h-12 items-center rounded-xl border border-forest/30 bg-mint px-4 text-base font-semibold text-forest"
            >
              +91
            </span>
            <input
              ref={phoneRef}
              id="phone"
              name="demo-phone"
              type="tel"
              inputMode="numeric"
              autoComplete="off"
              maxLength={14}
              placeholder="9876543210"
              value={state.phone}
              onChange={(e) => {
                set({ phone: e.target.value.replace(/\D/g, '').slice(0, 10) })
                if (phoneError) setPhoneError('')
              }}
              aria-invalid={phoneError ? true : undefined}
              aria-describedby={phoneError ? 'phone-help phone-error' : 'phone-help'}
              className={`${inputClass} ${phoneError ? '!border-[#B42318]' : ''}`}
            />
          </div>
          <p id="phone-help" className="mt-2 text-sm text-charcoal/80">
            {c.s3.phoneHelp}
          </p>
          {phoneError && <FieldError id="phone-error">{phoneError}</FieldError>}

          <Actions submit onBack={back} />
        </form>
      )}

      {stage !== 'enter' && (
        <form onSubmit={submitOtp} noValidate className="mt-6">
          <p className="text-sm text-charcoal/80">
            +91 {state.phone}{' '}
            <button
              type="button"
              onClick={back}
              className="ml-1 inline-flex min-h-11 items-center font-semibold text-forest underline underline-offset-4"
            >
              {c.s3.change}
            </button>
          </p>

          <h2 id="otp-label" className="mt-2 text-lg font-semibold text-charcoal">
            {c.s3.otpTitle}
          </h2>
          <p id="otp-help" className="mb-3 mt-1 text-sm text-charcoal/80">
            {c.s3.otpHelp}
          </p>
          <OtpInput
            value={digits}
            onChange={(d) => {
              setDigits(d)
              if (otpError) setOtpError('')
            }}
            labelledBy="otp-label"
            describedBy={otpError ? 'otp-help otp-error' : 'otp-help'}
            invalid={!!otpError}
            readOnly={stage === 'done'}
          />
          {otpError && <FieldError id="otp-error">{otpError}</FieldError>}

          {stage === 'otp' ? (
            <div className="mt-6 flex gap-3">
              <button type="button" onClick={back} className={secondaryBtnClass}>
                {c.back}
              </button>
              <button
                type="submit"
                className="inline-flex min-h-12 flex-1 items-center justify-center rounded-full bg-forest px-7 text-base font-semibold text-cream hover:bg-[#0b3f27]"
              >
                {c.s3.verify}
              </button>
            </div>
          ) : (
            <>
              <p role="status" className="mt-5 rounded-xl bg-mint px-4 py-3 text-sm font-medium text-forest">
                {c.s3.done}
              </p>
              <Actions onBack={back} onContinue={() => navigate('/onboarding/4')} />
            </>
          )}
        </form>
      )}
    </OnboardingLayout>
  )
}
