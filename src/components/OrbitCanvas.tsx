"use client"

import { useEffect, useRef } from 'react'

export default function OrbitCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationFrame = 0
    const stars = Array.from({ length: prefersReduced ? 40 : 120 }).map(() => ({
      x: Math.random(),
      y: Math.random(),
      z: Math.random(),
      r: Math.random() * 1.2 + 0.3,
      o: Math.random() * 0.6 + 0.2,
    }))

    function resize() {
      if (!canvas || !ctx) return
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      canvas.width = Math.floor(canvas.clientWidth * dpr)
      canvas.height = Math.floor(canvas.clientHeight * dpr)
      ctx.setTransform(1, 0, 0, 1, 0, 0)
      ctx.scale(dpr, dpr)
    }

    function draw() {
      if (!canvas || !ctx) return
      const width = canvas.width
      const height = canvas.height
      ctx.clearRect(0, 0, width, height)
      for (const s of stars) {
        const px = s.x * canvas.clientWidth
        const py = s.y * canvas.clientHeight
        ctx.beginPath()
        ctx.arc(px, py, s.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255,255,255,${s.o})`
        ctx.fill()
      }
    }

    function loop() {
      draw()
      animationFrame = requestAnimationFrame(loop)
    }

    const ro = new ResizeObserver(resize)
    ro.observe(canvas)
    resize()
    if (!prefersReduced) loop()
    else draw()

    return () => {
      cancelAnimationFrame(animationFrame)
      ro.disconnect()
    }
  }, [])

  return (
    <div aria-hidden className="absolute inset-0 -z-10 bg-stars">
      <canvas ref={canvasRef} className="w-full h-full block" />
    </div>
  )
}