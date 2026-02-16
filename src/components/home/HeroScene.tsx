'use client'

import { useRef, useEffect, useState } from 'react'

const CODE_SNIPPETS = [
  '</>',  '{ }',  '=>',  'const',  'async',  'import',
  'React', 'tsx',  '( )',  'npm',   '0x3B',  'git',
  'API',  '[ ]',  'fn()', 'AI',    '&&',     '===',
  'node', 'next', '::',   'expo',  'type',   '?.',
]

const CONNECT_DIST = 120

interface Particle {
  x: number
  y: number
  z: number
  vx: number
  vy: number
  size: number
  opacity: number
}

interface CodeFloat {
  x: number
  y: number
  z: number
  text: string
  opacity: number
  size: number
  angle: number
  radius: number
  speed: number
  yOffset: number
  ySpeed: number
}

export function HeroScene() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [ready, setReady] = useState(false)
  const mouseRef = useRef({ x: 0, y: 0 })
  const photoRef = useRef<HTMLImageElement | null>(null)

  useEffect(() => {
    setReady(true)
  }, [])

  useEffect(() => {
    if (!ready) return

    const container = containerRef.current
    const canvas = canvasRef.current
    if (!container || !canvas) return

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const mobile = window.innerWidth < 768
    const particleCount = mobile ? 25 : 60
    const snippetCount = mobile ? 10 : CODE_SNIPPETS.length

    // Load profile photo
    const photo = new Image()
    photo.src = '/images/me.png'
    photo.onload = () => {
      photoRef.current = photo
    }

    let w = container.offsetWidth
    let h = container.offsetHeight
    if (w === 0 || h === 0) return

    const dpr = Math.min(window.devicePixelRatio, 2)
    canvas.width = w * dpr
    canvas.height = h * dpr
    canvas.style.width = w + 'px'
    canvas.style.height = h + 'px'
    ctx.scale(dpr, dpr)

    let cx = w / 2
    let cy = h / 2
    const photoRadius = mobile ? Math.min(w, h) * 0.2 : Math.min(w, h) * 0.22

    // Create particles
    const particles: Particle[] = Array.from({ length: particleCount }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      z: Math.random() * 0.5 + 0.5,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      size: Math.random() * 2 + 1,
      opacity: Math.random() * 0.5 + 0.2,
    }))

    // Create floating code snippets
    const codeFloats: CodeFloat[] = CODE_SNIPPETS.slice(0, snippetCount).map((text, i) => {
      const angle = (i / snippetCount) * Math.PI * 2
      const radius = photoRadius + (mobile ? 30 : 40) + Math.random() * (mobile ? 60 : 100)
      return {
        x: 0, y: 0, z: Math.random() * 0.5 + 0.5,
        text,
        opacity: 0.3 + Math.random() * 0.5,
        size: mobile ? 8 + Math.random() * 3 : 10 + Math.random() * 4,
        angle,
        radius,
        speed: 0.0003 + Math.random() * 0.0006,
        yOffset: Math.random() * Math.PI * 2,
        ySpeed: 0.001 + Math.random() * 0.002,
      }
    })

    let time = 0
    let paused = false
    let frameId = 0

    const onMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect()
      mouseRef.current.x = ((e.clientX - rect.left) / w - 0.5) * 2
      mouseRef.current.y = ((e.clientY - rect.top) / h - 0.5) * 2
    }
    if (!mobile) {
      container.addEventListener('mousemove', onMouseMove)
    }

    function drawPhoto(t: number) {
      if (!ctx) return
      const img = photoRef.current
      const mx = mobile ? 0 : mouseRef.current.x * 8
      const my = mobile ? 0 : mouseRef.current.y * 8
      const pcx = cx + mx
      const pcy = cy + my

      // Outer glow rings
      for (let i = 3; i >= 0; i--) {
        const r = photoRadius + 8 + i * 6
        const alpha = 0.08 - i * 0.015 + Math.sin(t * 1.5 + i) * 0.03
        ctx.beginPath()
        ctx.arc(pcx, pcy, r, 0, Math.PI * 2)
        const pulse = Math.sin(t * 2 + i * 0.5) * 0.3 + 0.7
        ctx.strokeStyle = `rgba(59, 130, 246, ${alpha * pulse})`
        ctx.lineWidth = 2
        ctx.stroke()
      }

      // Rotating dashed ring
      ctx.save()
      ctx.translate(pcx, pcy)
      ctx.rotate(t * 0.3)
      ctx.beginPath()
      ctx.arc(0, 0, photoRadius + 18, 0, Math.PI * 2)
      ctx.setLineDash([4, 12])
      ctx.strokeStyle = 'rgba(59, 130, 246, 0.2)'
      ctx.lineWidth = 1
      ctx.stroke()
      ctx.setLineDash([])
      ctx.restore()

      // Photo circle with clipping
      ctx.save()
      ctx.beginPath()
      ctx.arc(pcx, pcy, photoRadius, 0, Math.PI * 2)

      if (img) {
        ctx.clip()
        const size = photoRadius * 2
        ctx.drawImage(img, pcx - photoRadius, pcy - photoRadius, size, size)
      } else {
        const grad = ctx.createRadialGradient(pcx, pcy, 0, pcx, pcy, photoRadius)
        grad.addColorStop(0, 'rgba(59, 130, 246, 0.3)')
        grad.addColorStop(1, 'rgba(15, 23, 42, 0.8)')
        ctx.fillStyle = grad
        ctx.fill()
      }
      ctx.restore()

      // Border ring
      ctx.beginPath()
      ctx.arc(pcx, pcy, photoRadius, 0, Math.PI * 2)
      ctx.strokeStyle = 'rgba(59, 130, 246, 0.4)'
      ctx.lineWidth = 2
      ctx.stroke()

      // Scanning line effect
      const scanY = Math.sin(t * 0.8) * photoRadius * 0.8
      ctx.save()
      ctx.beginPath()
      ctx.arc(pcx, pcy, photoRadius - 1, 0, Math.PI * 2)
      ctx.clip()
      const scanGrad = ctx.createLinearGradient(pcx - photoRadius, pcy + scanY - 15, pcx - photoRadius, pcy + scanY + 15)
      scanGrad.addColorStop(0, 'rgba(59, 130, 246, 0)')
      scanGrad.addColorStop(0.5, 'rgba(59, 130, 246, 0.08)')
      scanGrad.addColorStop(1, 'rgba(59, 130, 246, 0)')
      ctx.fillStyle = scanGrad
      ctx.fillRect(pcx - photoRadius, pcy + scanY - 15, photoRadius * 2, 30)
      ctx.restore()
    }

    function drawParticles() {
      if (!ctx) return
      const mx = mobile ? 0 : mouseRef.current.x * 15
      const my = mobile ? 0 : mouseRef.current.y * 15

      for (const p of particles) {
        p.x += p.vx
        p.y += p.vy

        if (p.x < 0) p.x = w
        if (p.x > w) p.x = 0
        if (p.y < 0) p.y = h
        if (p.y > h) p.y = 0

        const px = p.x + mx * p.z
        const py = p.y + my * p.z

        ctx.beginPath()
        ctx.arc(px, py, p.size * p.z, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(59, 130, 246, ${p.opacity * p.z})`
        ctx.fill()
      }

      // Draw connections (neural network effect)
      const connectDist = mobile ? 90 : CONNECT_DIST
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i]
          const b = particles[j]
          const ax = a.x + mx * a.z
          const ay = a.y + my * a.z
          const bx = b.x + mx * b.z
          const by = b.y + my * b.z
          const dist = Math.hypot(ax - bx, ay - by)
          if (dist < connectDist) {
            const alpha = (1 - dist / connectDist) * 0.15
            ctx.beginPath()
            ctx.moveTo(ax, ay)
            ctx.lineTo(bx, by)
            ctx.strokeStyle = `rgba(59, 130, 246, ${alpha})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        }
      }
    }

    function drawCodeFloats(t: number) {
      if (!ctx) return
      const mx = mobile ? 0 : mouseRef.current.x * 12
      const my = mobile ? 0 : mouseRef.current.y * 12
      const pcx = cx + (mobile ? 0 : mouseRef.current.x * 8)
      const pcy = cy + (mobile ? 0 : mouseRef.current.y * 8)

      for (const cf of codeFloats) {
        cf.angle += cf.speed * 16.67

        const x = pcx + Math.cos(cf.angle) * cf.radius + mx * cf.z
        const y = pcy + Math.sin(cf.angle) * cf.radius * 0.6 + Math.sin(t * cf.ySpeed * 60 + cf.yOffset) * 20 + my * cf.z
        cf.x = x
        cf.y = y

        const depthScale = 0.7 + cf.z * 0.3
        const alpha = cf.opacity * (0.4 + Math.sin(t * 1.5 + cf.angle) * 0.2)

        ctx.save()
        ctx.font = `${cf.size * depthScale}px "JetBrains Mono", "Fira Code", monospace`
        ctx.fillStyle = `rgba(148, 163, 184, ${alpha})`
        ctx.textAlign = 'center'
        ctx.textBaseline = 'middle'
        ctx.fillText(cf.text, x, y)
        ctx.restore()
      }
    }

    function drawCenterGlow(t: number) {
      if (!ctx) return
      const pcx = cx + (mobile ? 0 : mouseRef.current.x * 8)
      const pcy = cy + (mobile ? 0 : mouseRef.current.y * 8)
      const pulse = 0.8 + Math.sin(t * 1.2) * 0.2
      const grad = ctx.createRadialGradient(pcx, pcy, photoRadius * 0.8, pcx, pcy, photoRadius * 2.5)
      grad.addColorStop(0, `rgba(59, 130, 246, ${0.05 * pulse})`)
      grad.addColorStop(0.5, `rgba(59, 130, 246, ${0.02 * pulse})`)
      grad.addColorStop(1, 'rgba(59, 130, 246, 0)')
      ctx.fillStyle = grad
      ctx.fillRect(0, 0, w, h)
    }

    function animate() {
      frameId = requestAnimationFrame(animate)
      if (paused || !ctx) return

      time += 1 / 60

      ctx.clearRect(0, 0, w, h)
      drawCenterGlow(time)
      drawParticles()
      drawCodeFloats(time)
      drawPhoto(time)
    }
    animate()

    const onVisibility = () => { paused = document.hidden }
    document.addEventListener('visibilitychange', onVisibility)

    const onResize = () => {
      w = container.offsetWidth
      h = container.offsetHeight
      if (w === 0 || h === 0) return
      cx = w / 2
      cy = h / 2
      const newDpr = Math.min(window.devicePixelRatio, 2)
      canvas.width = w * newDpr
      canvas.height = h * newDpr
      canvas.style.width = w + 'px'
      canvas.style.height = h + 'px'
      ctx.setTransform(newDpr, 0, 0, newDpr, 0, 0)
    }
    window.addEventListener('resize', onResize)

    return () => {
      cancelAnimationFrame(frameId)
      document.removeEventListener('visibilitychange', onVisibility)
      window.removeEventListener('resize', onResize)
      container.removeEventListener('mousemove', onMouseMove)
    }
  }, [ready])

  return (
    <div ref={containerRef} className="h-full w-full">
      <canvas ref={canvasRef} className="h-full w-full" />
    </div>
  )
}
