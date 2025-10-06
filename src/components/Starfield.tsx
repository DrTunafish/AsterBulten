import { useEffect, useRef } from 'react'

/**
 * Animated starfield with parallax scrolling effect
 * Creates multiple layers of stars that move at different speeds
 */
function Starfield() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Set canvas size
    const updateSize = () => {
      canvas.width = window.innerWidth
      canvas.height = document.documentElement.scrollHeight
    }
    updateSize()
    window.addEventListener('resize', updateSize)

    // Star colors matching strict palette
    const starColors = [
      '#E6EEF3', // Soft white with bluish tone
      '#FFD700', // Golden yellow (twinkling)
      '#00C9FF', // Bright turquoise (neon)
      '#98A8C8', // Grey-blue
    ]

    // Create stars with different layers for parallax
    interface Star {
      x: number
      y: number
      radius: number
      color: string
      baseOpacity: number // Base opacity (always visible)
      flashTimer: number // Timer for random flash effect
      flashDuration: number // How long the flash lasts
      isFlashing: boolean // Is currently flashing
      flashIntensity: number // Current flash intensity (0-1)
      nextFlashTime: number // When next flash should occur
      layer: number // For parallax effect (0-2)
    }

    const stars: Star[] = []
    const starCount = 250 // Increased star count for brighter starfield

    for (let i = 0; i < starCount; i++) {
      const nextFlash = Math.random() * 5000 + 2000 // Random initial flash time (2-7 seconds)
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2 + 0.5, // Larger stars (0.5 - 2.5px)
        color: starColors[Math.floor(Math.random() * starColors.length)],
        baseOpacity: Math.random() * 0.4 + 0.5, // Base opacity (0.5 - 0.9, always visible)
        flashTimer: 0,
        flashDuration: Math.random() * 800 + 400, // Flash duration (400-1200ms)
        isFlashing: false,
        flashIntensity: 0,
        nextFlashTime: nextFlash,
        layer: Math.floor(Math.random() * 2) + 1, // 1 or 2 (all stars move)
      })
    }

    let scrollY = window.scrollY
    let animationFrame: number
    let lastTime = performance.now()

    // Update scroll position
    const handleScroll = () => {
      scrollY = window.scrollY
    }
    window.addEventListener('scroll', handleScroll, { passive: true })

    // Animation loop with random flash effect
    const animate = (currentTime: number) => {
      const deltaTime = currentTime - lastTime
      lastTime = currentTime

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      stars.forEach((star) => {
        // Parallax effect based on layer
        const parallaxOffset = scrollY * (star.layer * 0.15)

        // Update flash timer
        star.flashTimer += deltaTime

        // Check if it's time to flash
        if (!star.isFlashing && star.flashTimer >= star.nextFlashTime) {
          star.isFlashing = true
          star.flashTimer = 0
        }

        // Handle flashing
        if (star.isFlashing) {
          // Flash intensity rises and falls (bell curve)
          const progress = star.flashTimer / star.flashDuration
          if (progress < 1) {
            // Smooth flash curve (0 -> 1 -> 0)
            star.flashIntensity = Math.sin(progress * Math.PI)
          } else {
            // Flash complete, reset
            star.isFlashing = false
            star.flashIntensity = 0
            star.flashTimer = 0
            // Set next random flash time (2-8 seconds)
            star.nextFlashTime = Math.random() * 6000 + 2000
          }
        }

        // Calculate final opacity (base + flash boost)
        const flashBoost = star.flashIntensity * 0.5 // Flash adds up to +0.5 opacity
        const finalOpacity = Math.min(1, star.baseOpacity + flashBoost)

        // Draw star
        ctx.beginPath()
        ctx.arc(star.x, star.y - parallaxOffset, star.radius, 0, Math.PI * 2)
        ctx.fillStyle = star.color
        ctx.globalAlpha = finalOpacity
        ctx.fill()

        // Add glow effect for flashing stars or larger stars
        if (star.isFlashing || star.radius > 1.2) {
          const glowSize = star.isFlashing ? star.radius * 3 : star.radius * 2
          const glowOpacity = star.isFlashing ? flashBoost * 0.6 : finalOpacity * 0.3

          ctx.beginPath()
          ctx.arc(star.x, star.y - parallaxOffset, glowSize, 0, Math.PI * 2)
          ctx.globalAlpha = glowOpacity
          ctx.fill()
        }
      })

      ctx.globalAlpha = 1
      animationFrame = requestAnimationFrame(animate)
    }

    animate(performance.now())

    // Cleanup
    return () => {
      window.removeEventListener('resize', updateSize)
      window.removeEventListener('scroll', handleScroll)
      cancelAnimationFrame(animationFrame)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full pointer-events-none"
      style={{ zIndex: 0 }}
      aria-hidden="true"
    />
  )
}

export default Starfield
