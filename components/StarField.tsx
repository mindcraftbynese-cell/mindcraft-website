'use client'

import { useEffect, useRef } from 'react'

const PALETTE = [
  '#EDE8DC', '#EDE8DC', '#EDE8DC', '#EDE8DC', '#EDE8DC',
  '#E8DFC8', '#D9CEB0',
  '#EDE8DC', '#F2EDE3',
]

interface Star {
  x: number
  y: number
  z: number
  pz: number
  color: string
}

export function StarField() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const N = 320
    const DEPTH = 1200
    const SPEED = 3
    const FOV = 350

    let W = window.innerWidth
    let H = window.innerHeight
    canvas.width = W
    canvas.height = H

    const spawn = (): Star => ({
      x: (Math.random() - 0.5) * DEPTH * 2.5,
      y: (Math.random() - 0.5) * DEPTH * 2.5,
      z: Math.random() * DEPTH,
      pz: DEPTH,
      color: PALETTE[Math.floor(Math.random() * PALETTE.length)],
    })

    const stars: Star[] = Array.from({ length: N }, spawn)

    const project = (x: number, y: number, z: number): [number, number] => [
      (x / z) * FOV + W * 0.5,
      (y / z) * FOV + H * 0.5,
    ]

    let raf = 0

    const draw = () => {
      ctx.clearRect(0, 0, W, H)

      for (const s of stars) {
        s.pz = s.z
        s.z -= SPEED

        if (s.z <= 1) {
          Object.assign(s, spawn())
          s.z = DEPTH
          s.pz = DEPTH
          continue
        }

        const [sx, sy] = project(s.x, s.y, s.z)
        if (sx < -30 || sx > W + 30 || sy < -30 || sy > H + 30) continue

        const t = 1 - s.z / DEPTH
        const radius = 0.3 + t * 2.8
        const alpha = Math.min(t * 1.4, 0.68)

        // Motion streak
        const [ox, oy] = project(s.x, s.y, s.pz)
        const grad = ctx.createLinearGradient(ox, oy, sx, sy)
        grad.addColorStop(0, 'rgba(0,0,0,0)')
        grad.addColorStop(1, s.color)
        ctx.globalAlpha = alpha * 0.3
        ctx.strokeStyle = grad
        ctx.lineWidth = radius * 0.8
        ctx.beginPath()
        ctx.moveTo(ox, oy)
        ctx.lineTo(sx, sy)
        ctx.stroke()

        // Star dot
        ctx.globalAlpha = alpha
        ctx.fillStyle = s.color
        ctx.beginPath()
        ctx.arc(sx, sy, radius, 0, Math.PI * 2)
        ctx.fill()
      }

      ctx.globalAlpha = 1
      raf = requestAnimationFrame(draw)
    }

    draw()

    const onResize = () => {
      W = window.innerWidth
      H = window.innerHeight
      canvas.width = W
      canvas.height = H
    }
    window.addEventListener('resize', onResize, { passive: true })

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', onResize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        inset: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        pointerEvents: 'none',
      }}
    />
  )
}
