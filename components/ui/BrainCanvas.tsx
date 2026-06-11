'use client'

import { useEffect, useRef } from 'react'

function lerp(a: number, b: number, t: number) { return a + (b - a) * t }

interface AiNode { x: number; y: number; ph: number; spd: number }
interface Signal  { t: number; spd: number; fromBrain: boolean; pathIdx: number }

export function BrainCanvas({ className = '' }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const rafRef    = useRef(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')!
    if (!ctx) return

    /* ── dimensions ─────────────────────────────────────── */
    const parent = canvas.parentElement
    const W  = canvas.width  = parent?.clientWidth  ?? 500
    const H  = canvas.height = parent?.clientHeight ?? 500

    /* Brain lives in the LEFT half */
    const BCX = W * 0.23
    const BCY = H * 0.50
    const BS  = Math.min(W, H) / 700   // base brain scale

    /* Brain right-edge anchor points (virtual coords, × BS) */
    const ANCHORS_V: [number, number][] = [
      [104, -42],
      [126,  -9],
      [126,   9],
      [104,  42],
    ]

    /* ── AI node grid (right half, fractional positions) ── */
    const AI_FRAC: [number, number][] = [
      // col A – input nodes (leftmost)
      [0.56, 0.30], [0.55, 0.50], [0.56, 0.70],
      // col B
      [0.66, 0.20], [0.67, 0.40], [0.65, 0.60], [0.66, 0.80],
      // col C
      [0.76, 0.28], [0.77, 0.50], [0.75, 0.72],
      // col D – far right
      [0.86, 0.35], [0.87, 0.55], [0.85, 0.74],
    ]
    const aiNodes: AiNode[] = AI_FRAC.map(([fx, fy], i) => ({
      x: fx * W, y: fy * H,
      ph:  (i / AI_FRAC.length) * Math.PI * 2,
      spd: 0.016 + (i % 5) * 0.007,
    }))
    const AI_INP = aiNodes.slice(0, 3)   // leftmost column = input receivers

    const AI_CONNS: [number, number][] = [
      [0,3],[0,4],[1,3],[1,4],[1,5],[2,5],[2,6],
      [3,7],[4,7],[4,8],[5,8],[5,9],[6,9],
      [7,10],[8,10],[8,11],[9,11],[9,12],
      [3,4],[4,5],[5,6],
      [7,8],[8,9],
      [10,11],[11,12],
    ]

    /* ── Signal path definitions ────────────────────────── */
    type PD = { bIdx: number; aIdx: number; ph: number }
    const PATHS: PD[] = [
      { bIdx: 0, aIdx: 0, ph: 0.0 },
      { bIdx: 1, aIdx: 1, ph: 0.5 },
      { bIdx: 2, aIdx: 1, ph: 1.0 },
      { bIdx: 3, aIdx: 2, ph: 1.5 },
      { bIdx: 0, aIdx: 1, ph: 2.2 },
      { bIdx: 3, aIdx: 1, ph: 2.8 },
    ]

    /* Two signals per path (one each direction) */
    const signals: Signal[] = PATHS.flatMap((_, i) => [
      { t: (i / PATHS.length),            spd: 0.0042 + (i % 3) * 0.0015, fromBrain: true,  pathIdx: i },
      { t: (i / PATHS.length + 0.5) % 1, spd: 0.0035 + (i % 4) * 0.0012, fromBrain: false, pathIdx: i },
    ])

    /* ═══════════════════════════════════════════════════════
       DRAW — transparent canvas (no background fill)
    ════════════════════════════════════════════════════════ */

    let frame = 0   // shared by all inner functions via closure

    /* ── Brain silhouette ──────────────────────────────── */
    function drawBrain(breathS: number) {
      const sx = BS * breathS
      const cx = BCX, cy = BCY

      /* outer ambient glow */
      const og = ctx.createRadialGradient(cx, cy, 8 * sx, cx, cy, 155 * sx)
      og.addColorStop(0,    'rgba(74,123,167,0.20)')
      og.addColorStop(0.55, 'rgba(74,123,167,0.07)')
      og.addColorStop(1,    'rgba(74,123,167,0)')
      ctx.beginPath(); ctx.arc(cx, cy, 155 * sx, 0, Math.PI * 2)
      ctx.fillStyle = og; ctx.fill()

      /* fill gradient */
      const fill = ctx.createRadialGradient(cx - 10*sx, cy - 14*sx, 3, cx, cy, 136*sx)
      fill.addColorStop(0,    'rgba(42,74,106,0.78)')
      fill.addColorStop(0.40, 'rgba(58,99,144,0.60)')
      fill.addColorStop(0.75, 'rgba(74,123,167,0.38)')
      fill.addColorStop(1,    'rgba(10,16,40,0.04)')

      ctx.lineWidth = 1.6; ctx.lineCap = 'round'; ctx.lineJoin = 'round'
      const stroke = 'rgba(74,123,167,0.72)'

      /* LEFT hemisphere */
      ctx.beginPath()
      ctx.moveTo(cx-5*sx,  cy-74*sx)
      ctx.bezierCurveTo(cx-36*sx, cy-91*sx, cx-85*sx,  cy-80*sx, cx-114*sx, cy-45*sx)
      ctx.bezierCurveTo(cx-134*sx,cy-12*sx, cx-132*sx, cy+28*sx, cx-113*sx, cy+57*sx)
      ctx.bezierCurveTo(cx-93*sx, cy+83*sx, cx-54*sx,  cy+93*sx, cx-18*sx,  cy+80*sx)
      ctx.bezierCurveTo(cx-7*sx,  cy+73*sx, cx-3*sx,   cy+61*sx, cx-4*sx,   cy+48*sx)
      ctx.bezierCurveTo(cx-4*sx,  cy+10*sx, cx-4*sx,   cy-33*sx, cx-5*sx,   cy-74*sx)
      ctx.closePath()
      ctx.fillStyle = fill; ctx.fill()
      ctx.strokeStyle = stroke; ctx.stroke()

      /* RIGHT hemisphere */
      ctx.beginPath()
      ctx.moveTo(cx+5*sx,  cy-74*sx)
      ctx.bezierCurveTo(cx+36*sx, cy-91*sx, cx+85*sx,  cy-80*sx, cx+114*sx, cy-45*sx)
      ctx.bezierCurveTo(cx+134*sx,cy-12*sx, cx+132*sx, cy+28*sx, cx+113*sx, cy+57*sx)
      ctx.bezierCurveTo(cx+93*sx, cy+83*sx, cx+54*sx,  cy+93*sx, cx+18*sx,  cy+80*sx)
      ctx.bezierCurveTo(cx+7*sx,  cy+73*sx, cx+3*sx,   cy+61*sx, cx+4*sx,   cy+48*sx)
      ctx.bezierCurveTo(cx+4*sx,  cy+10*sx, cx+4*sx,   cy-33*sx, cx+5*sx,   cy-74*sx)
      ctx.closePath()
      ctx.fillStyle = fill; ctx.fill()
      ctx.strokeStyle = stroke; ctx.stroke()

      /* sulci */
      ctx.strokeStyle = 'rgba(147,197,253,0.34)'
      ctx.lineWidth = 0.9
      const SL: [number,number,number,number,number,number,number,number][] = [
        [-16,-78, -33,-57, -55,-25, -75,  8],
        [-53,-84, -69,-53, -85,-18, -95, 22],
        [-91,-65,-107,-36,-118, -4,-111, 30],
        [-31,-47, -51,-35, -71,-17, -81, -3],
      ]
      SL.forEach(([x1,y1,c1x,c1y,c2x,c2y,x2,y2]) => {
        ctx.beginPath()
        ctx.moveTo(cx+x1*sx, cy+y1*sx)
        ctx.bezierCurveTo(cx+c1x*sx,cy+c1y*sx,cx+c2x*sx,cy+c2y*sx,cx+x2*sx,cy+y2*sx)
        ctx.stroke()
        ctx.beginPath()
        ctx.moveTo(cx-x1*sx, cy+y1*sx)
        ctx.bezierCurveTo(cx-c1x*sx,cy+c1y*sx,cx-c2x*sx,cy+c2y*sx,cx-x2*sx,cy+y2*sx)
        ctx.stroke()
      })

      /* interhemispheric fissure */
      ctx.strokeStyle = 'rgba(96,165,250,0.68)'
      ctx.lineWidth = 1.1
      ctx.beginPath()
      ctx.moveTo(cx, cy-74*sx)
      ctx.bezierCurveTo(cx-2*sx,cy-22*sx, cx+2*sx,cy+22*sx, cx, cy+74*sx)
      ctx.stroke()

      /* right-edge anchor dots */
      ANCHORS_V.forEach(([vx, vy], i) => {
        const ax = cx + vx * sx
        const ay = cy + vy * sx
        const p = (Math.sin(frame * 0.032 + i * 1.1) + 1) / 2
        const g = ctx.createRadialGradient(ax, ay, 0, ax, ay, 11)
        g.addColorStop(0, `rgba(147,197,253,${0.55 + p * 0.45})`)
        g.addColorStop(1, 'rgba(96,165,250,0)')
        ctx.beginPath(); ctx.arc(ax, ay, 11, 0, Math.PI * 2)
        ctx.fillStyle = g; ctx.fill()
        ctx.beginPath(); ctx.arc(ax, ay, 2.2 + p * 1.4, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(210,230,255,${0.80 + p * 0.20})`; ctx.fill()
      })
    }

    /* ── AI node network ───────────────────────────────── */
    function drawAiNetwork() {
      AI_CONNS.forEach(([a, b]) => {
        ctx.beginPath()
        ctx.moveTo(aiNodes[a].x, aiNodes[a].y)
        ctx.lineTo(aiNodes[b].x, aiNodes[b].y)
        ctx.strokeStyle = 'rgba(167,139,250,0.18)'
        ctx.lineWidth = 0.7
        ctx.stroke()
      })

      aiNodes.forEach((n, i) => {
        n.ph += n.spd
        const p = (Math.sin(n.ph) + 1) / 2
        const isIn = i < 3
        const col = isIn ? '167,139,250' : '196,181,253'
        const gr = isIn ? 16 : 10

        const g = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, gr)
        g.addColorStop(0, `rgba(${col},${0.40 + p * 0.42})`)
        g.addColorStop(1, `rgba(${col},0)`)
        ctx.beginPath(); ctx.arc(n.x, n.y, gr, 0, Math.PI * 2)
        ctx.fillStyle = g; ctx.fill()

        const dr = (isIn ? 3.4 : 2.2) + p * 1.5
        ctx.beginPath(); ctx.arc(n.x, n.y, dr, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${col},${0.65 + p * 0.35})`; ctx.fill()

        ctx.beginPath(); ctx.arc(n.x, n.y, dr * 0.4, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(240,235,255,${0.55 + p * 0.45})`; ctx.fill()
      })
    }

    /* ── Signals (pulses that travel between brain & AI) ── */
    function drawSignals(breathS: number) {
      const sx = BS * breathS

      PATHS.forEach((pd, pi) => {
        /* anchor positions (scaled with breathing) */
        const bx = BCX + ANCHORS_V[pd.bIdx][0] * sx
        const by = BCY + ANCHORS_V[pd.bIdx][1] * sx
        const ai = AI_INP[pd.aIdx % AI_INP.length]
        const ax = ai.x, ay = ai.y

        /* quadratic bezier control point — gentle wave */
        const wave = Math.sin(frame * 0.05 + pd.ph) * 22
        const cpX  = lerp(bx, ax, 0.5)
        const cpY  = lerp(by, ay, 0.5) + wave

        /* draw faint path */
        ctx.beginPath()
        ctx.moveTo(bx, by)
        ctx.quadraticCurveTo(cpX, cpY, ax, ay)
        ctx.strokeStyle = 'rgba(129,140,248,0.09)'
        ctx.lineWidth = 1.1
        ctx.stroke()

        /* helper: point on quadratic bezier */
        const qPoint = (t: number): [number, number] => {
          const q = (1 - t) * (1 - t)
          const r = 2 * t * (1 - t)
          const s = t * t
          return [
            q * bx + r * cpX + s * ax,
            q * by + r * cpY + s * ay,
          ]
        }

        /* brain → AI signal */
        const sB = signals[pi * 2]
        sB.t += sB.spd
        if (sB.t > 1.12) sB.t = -0.05
        if (sB.t >= 0 && sB.t <= 1) {
          const [px, py] = qPoint(sB.t)
          pulse(px, py, sB.t, true)
        }

        /* AI → brain signal */
        const sA = signals[pi * 2 + 1]
        sA.t += sA.spd
        if (sA.t > 1.12) sA.t = -0.05
        if (sA.t >= 0 && sA.t <= 1) {
          const [px, py] = qPoint(1 - sA.t)   // reversed
          pulse(px, py, sA.t, false)
        }
      })
    }

    /* draw a single pulse dot with glow */
    function pulse(x: number, y: number, t: number, fromBrain: boolean) {
      /* blue (brain) ↔ violet (AI) color blend */
      const rr = Math.round(fromBrain ? lerp(96, 196, t)  : lerp(196, 96,  t))
      const gg = Math.round(fromBrain ? lerp(165,181, t)  : lerp(181, 165, t))
      const bb = Math.round(fromBrain ? lerp(250,253, t)  : lerp(253, 250, t))

      const glow = ctx.createRadialGradient(x, y, 0, x, y, 20)
      glow.addColorStop(0,    `rgba(${rr},${gg},${bb},0.82)`)
      glow.addColorStop(0.40, `rgba(${rr},${gg},${bb},0.22)`)
      glow.addColorStop(1,    `rgba(${rr},${gg},${bb},0)`)
      ctx.beginPath(); ctx.arc(x, y, 20, 0, Math.PI * 2)
      ctx.fillStyle = glow; ctx.fill()

      /* white-hot core */
      ctx.beginPath(); ctx.arc(x, y, 4, 0, Math.PI * 2)
      ctx.fillStyle = 'rgba(255,255,255,0.96)'; ctx.fill()

      ctx.beginPath(); ctx.arc(x, y, 2.2, 0, Math.PI * 2)
      ctx.fillStyle = `rgba(${rr},${gg},${bb},1)`; ctx.fill()
    }

    /* ── Animation loop ────────────────────────────────── */
    function loop() {
      frame++
      ctx.clearRect(0, 0, W, H)   // transparent — hero bg shows through

      const breathS = 1 + 0.055 * Math.sin(frame * 0.024)

      drawAiNetwork()
      drawBrain(breathS)
      drawSignals(breathS)

      rafRef.current = requestAnimationFrame(loop)
    }

    loop()
    return () => cancelAnimationFrame(rafRef.current)
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{ background: 'transparent' }}
      className={`block w-full h-full ${className}`}
    />
  )
}
