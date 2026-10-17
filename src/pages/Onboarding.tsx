import { useRedirect } from '../router'
import Step1 from './onboarding/Step1Welcome'
import Step2 from './onboarding/Step2Ready'
import Step3 from './onboarding/Step3Mobile'
import Step4 from './onboarding/Step4Kyc'
import Step5 from './onboarding/Step5Pending'

const steps = { 1: Step1, 2: Step2, 3: Step3, 4: Step4, 5: Step5 } as const

/** Resolves /onboarding/1..5. Anything else is redirected to step 1. */
export default function Onboarding({ path }: { path: string }) {
  const match = /^\/onboarding\/([1-5])\/?$/.exec(path)
  useRedirect(match ? null : '/onboarding/1')
  if (!match) return null
  const Step = steps[Number(match[1]) as keyof typeof steps]
  return <Step />
}
