"use client"

import { useEffect, useState } from 'react'

export default function MotionControls() {
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    const root = document.documentElement
    if (paused) root.setAttribute('data-motion-paused', 'true')
    else root.removeAttribute('data-motion-paused')
  }, [paused])

  return (
    <div className="fixed top-3 right-3 z-40">
      <button
        type="button"
        aria-pressed={paused}
        aria-label={paused ? 'Animasyonları oynat' : 'Animasyonları duraklat'}
        onClick={() => setPaused((p) => !p)}
        className="px-3 py-2 rounded-md bg-black/40 text-sm ring-1 ring-white/10 hover:bg-black/60"
      >
        {paused ? 'Play' : 'Pause'}
      </button>
    </div>
  )
}