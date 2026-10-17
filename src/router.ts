import { useEffect, useSyncExternalStore } from 'react'

/** Tiny History-API router: avoids adding a routing dependency for a handful of routes. */
const subscribe = (cb: () => void) => {
  window.addEventListener('popstate', cb)
  return () => window.removeEventListener('popstate', cb)
}

export function usePathname() {
  return useSyncExternalStore(subscribe, () => window.location.pathname)
}

export function navigate(to: string, opts: { replace?: boolean } = {}) {
  if (opts.replace) window.history.replaceState({}, '', to)
  else window.history.pushState({}, '', to)
  window.dispatchEvent(new PopStateEvent('popstate'))
  window.scrollTo(0, 0)
}

/** Redirect (replacing history) from an effect, e.g. for unknown routes. */
export function useRedirect(to: string | null) {
  useEffect(() => {
    if (to) navigate(to, { replace: true })
  }, [to])
}
