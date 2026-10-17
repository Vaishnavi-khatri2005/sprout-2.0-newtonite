import { useRef, useState } from 'react'
import type { FormEvent } from 'react'
import { navigate } from '../../router'
import OnboardingLayout from '../../components/onboarding/OnboardingLayout'
import Actions from '../../components/onboarding/Actions'
import { CheckRow, DemoNotice, FieldError } from '../../components/onboarding/formParts'
import { inputClass, secondaryBtnClass } from '../../constants'
import { useCopy, useOnboarding } from '../../onboarding/context'

const PAN_FORMAT = /^[A-Z]{5}[0-9]{4}[A-Z]$/
const SAMPLE_PAN = 'ABCDE1234F' // well-known placeholder, not a real person's PAN

export default function Step4() {
  const c = useCopy()
  const { state, set } = useOnboarding()

  // The PAN value lives only in this component's memory. It is never put in shared state,
  // storage, the URL, the console or any network request, and disappears when you leave the screen.
  const [pan, setPan] = useState('')
  const [attempted, setAttempted] = useState(false)
  const panRef = useRef<HTMLInputElement>(null)

  const panValid = PAN_FORMAT.test(pan)
  const showPanError = (attempted || pan.length === 10) && !panValid
  const aadhaarError = attempted && !state.aadhaarReady

  const submit = (e: FormEvent) => {
    e.preventDefault()
    setAttempted(true)
    if (!panValid) {
      panRef.current?.focus()
      return
    }
    if (!state.aadhaarReady) return
    set({ panFormatChecked: true })
    navigate('/onboarding/5')
  }

  return (
    <OnboardingLayout step={4} title={c.s4.title}>
      <p className="text-base leading-relaxed text-charcoal/80 sm:text-lg">{c.s4.intro}</p>
      <div className="mt-4">
        <DemoNotice>{c.s4.demoWarning}</DemoNotice>
      </div>

      <form onSubmit={submit} noValidate className="mt-6" autoComplete="off">
        <label htmlFor="pan" className="block text-sm font-semibold text-charcoal">
          {c.s4.panLabel}
        </label>
        <input
          ref={panRef}
          id="pan"
          type="text"
          autoComplete="off"
          autoCapitalize="characters"
          spellCheck={false}
          maxLength={10}
          placeholder="ABCDE1234F"
          value={pan}
          onChange={(e) => setPan(e.target.value.toUpperCase().replace(/[^A-Z0-9]/g, '').slice(0, 10))}
          aria-invalid={showPanError ? true : undefined}
          aria-describedby={showPanError ? 'pan-help pan-error' : 'pan-help'}
          className={`${inputClass} mt-2 tracking-widest ${showPanError ? '!border-[#B42318]' : ''}`}
        />
        <p id="pan-help" className="mt-2 text-sm text-charcoal/80">
          {c.s4.panHelp}
        </p>
        {showPanError && <FieldError id="pan-error">{c.s4.panError}</FieldError>}
        {panValid && (
          <p role="status" className="mt-2 text-sm font-medium text-forest">
            ✓ {c.s4.panOk}
          </p>
        )}
        <button
          type="button"
          onClick={() => setPan(SAMPLE_PAN)}
          className={`${secondaryBtnClass} mt-3 !min-h-11 !px-5 !text-sm`}
        >
          {c.s4.useSample}
        </button>

        <fieldset className="mt-8">
          <legend className="text-sm font-semibold text-charcoal">{c.s4.aadhaarLegend}</legend>
          <p id="aadhaar-help" className="mb-3 mt-1 text-sm text-charcoal/80">
            {c.s4.aadhaarHelp}
          </p>
          <div className="space-y-3" aria-describedby="aadhaar-help">
            <CheckRow
              checked={state.aadhaarReady}
              onChange={(v) => set({ aadhaarReady: v })}
              title={c.s4.aadhaarReady}
            />
            <CheckRow
              checked={state.aadhaarLinked}
              onChange={(v) => set({ aadhaarLinked: v })}
              title={c.s4.aadhaarLinked}
            />
          </div>
          {aadhaarError && <FieldError id="aadhaar-error">{c.s4.aadhaarError}</FieldError>}
        </fieldset>

        <Actions submit onBack={() => navigate('/onboarding/3')} />
      </form>
    </OnboardingLayout>
  )
}
