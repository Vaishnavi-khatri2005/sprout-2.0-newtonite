import { createContext, useContext } from 'react'
import { copy } from './i18n'
import type { Copy, Lang } from './i18n'

/**
 * Prototype state kept in memory only (never written to storage or sent anywhere).
 * Deliberately NOT held here: PAN value, OTP digits. Aadhaar number is never collected.
 */
export type OnboardingState = {
  lang: Lang
  checklist: [boolean, boolean, boolean]
  phone: string
  phoneStage: 'enter' | 'otp' | 'done'
  aadhaarReady: boolean
  aadhaarLinked: boolean
  panFormatChecked: boolean
}

export const initialState: OnboardingState = {
  lang: 'en',
  checklist: [false, false, false],
  phone: '',
  phoneStage: 'enter',
  aadhaarReady: false,
  aadhaarLinked: false,
  panFormatChecked: false,
}

type Ctx = {
  state: OnboardingState
  set: (patch: Partial<OnboardingState>) => void
}

export const OnboardingContext = createContext<Ctx | null>(null)

export function useOnboarding() {
  const ctx = useContext(OnboardingContext)
  if (!ctx) throw new Error('useOnboarding must be used inside OnboardingProvider')
  return ctx
}

export function useCopy(): Copy {
  return copy[useOnboarding().state.lang]
}
