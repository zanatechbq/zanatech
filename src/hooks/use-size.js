import * as React from "react"

/**
 * Measures the width/height of a DOM element via ResizeObserver.
 * Returns null until the first measurement lands (before first paint,
 * via useLayoutEffect + ResizeObserver's initial callback).
 */
export function useSize(ref) {
  const [size, setSize] = React.useState(null)

  React.useLayoutEffect(() => {
    const node = ref.current
    if (!node) return

    const observer = new ResizeObserver((entries) => {
      const entry = entries[0]
      if (!entry) return
      const { width, height } = entry.contentRect
      setSize({ width, height })
    })

    observer.observe(node)
    return () => observer.disconnect()
  }, [ref])

  return size
}
