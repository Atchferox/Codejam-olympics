"use client"

import { useEffect, useRef } from "react"

export default function CanvasDiv() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const canvasSize = 256
    const divSize = 128

    canvas.width = canvasSize
    canvas.height = canvasSize

    const x = (canvasSize - divSize) / 2
    const y = (canvasSize - divSize) / 2

    const radius = 6

    ctx.fillStyle = "#ffffff"
    ctx.beginPath()
    ctx.roundRect(x, y, divSize, divSize, radius)
    ctx.fill()

    ctx.strokeStyle = "#9ca3af"
    ctx.lineWidth = 1
    ctx.beginPath()
    ctx.roundRect(x, y, divSize, divSize, radius)
    ctx.stroke()

    ctx.fillStyle = "#000000"
    ctx.font = "16px system-ui, sans-serif"
    ctx.textAlign = "left"
    ctx.textBaseline = "top"
    ctx.fillText("Canvas", x + 8, y + 8)
  }, [])

  return <canvas ref={canvasRef} className="w-full h-full" />
}
