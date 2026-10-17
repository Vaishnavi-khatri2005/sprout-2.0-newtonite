import { useCallback, useEffect, useMemo, useState } from 'react'
import type { ReactNode } from 'react'
import { OnboardingContext, initialState } from './context'
import type { OnboardingState } from './context'

export default function OnboardingProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<OnboardingState>(initialState)

  const set = useCallback((patch: Partial<OnboardingState>) => {
    setState((s) => ({ ...s, ...patch }))
  }, [])

  // Keep <html lang> in sync and load the Devanagari font only when Hindi is chosen.
  useEffect(() => {
    document.documentElement.lang = state.lang
    if (state.lang === 'hi') void import('@fontsource-variable/noto-sans-devanagari')
  }, [state.lang])

  const value = useMemo(() => ({ state, set }), [state, set])
  return <OnboardingContext.Provider value={value}>{children}</OnboardingContext.Provider>
}
