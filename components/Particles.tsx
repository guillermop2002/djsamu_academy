"use client"

import { useEffect, useState } from "react"

interface Particle {
  id: number
  left: number
  size: number
  duration: number
  delay: number
  opacity: number
}

export default function Particles() {
  const [particles, setParticles] = useState<Particle[]>([])

  useEffect(() => {
    setParticles(
      Array.from({ length: 35 }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        size: Math.random() * 3.5 + 1,
        duration: Math.random() * 7 + 5,
        delay: Math.random() * 10,
        opacity: Math.random() * 0.5 + 0.15,
      }))
    )
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full animate-ember"
          style={{
            left: `${p.left}%`,
            bottom: "-10px",
            width: `${p.size}px`,
            height: `${p.size}px`,
            background: "radial-gradient(circle, #ef4444, #991b1b)",
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
            ["--p-opacity" as string]: p.opacity,
          }}
        />
      ))}
    </div>
  )
}
