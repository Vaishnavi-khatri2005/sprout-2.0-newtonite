import type { MouseEvent, ReactNode } from 'react'
import { navigate } from '../router'

type AppLinkProps = {
  to: string
  className?: string
  children: ReactNode
}

/** Anchor that does client-side navigation but still works with open-in-new-tab and no-JS. */
export default function AppLink({ to, className, children }: AppLinkProps) {
  const onClick = (e: MouseEvent<HTMLAnchorElement>) => {
    if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return
    e.preventDefault()
    navigate(to)
  }
  return (
    <a href={to} onClick={onClick} className={className}>
      {children}
    </a>
  )
}
