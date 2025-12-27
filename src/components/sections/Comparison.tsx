import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ChevronsLeftRight } from 'lucide-react'

// Importe suas imagens aqui
import beforeImage from '@/assets/images/before.png' // Vidro Sujo
import afterImage from '@/assets/images/after.png'   // Vidro Limpo

export function Comparison() {
  const [sliderPosition, setSliderPosition] = useState(50)
  const [isDragging, setIsDragging] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const handleMove = (event: React.MouseEvent | React.TouchEvent) => {
    if (!containerRef.current) return

    // Prevenir scroll padrão em touch events
    if ('touches' in event) {
      event.preventDefault()
    }

    const { left, width } = containerRef.current.getBoundingClientRect()
    let clientX

    if ('touches' in event) {
      clientX = event.touches[0].clientX
    } else {
      clientX = (event as React.MouseEvent).clientX
    }

    const position = ((clientX - left) / width) * 100
    setSliderPosition(Math.min(100, Math.max(0, position)))
  }

  const handleMouseDown = () => setIsDragging(true)
  const handleMouseUp = () => setIsDragging(false)

  // Adiciona listeners globais para quando o mouse sai do componente
  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMove as any)
      window.addEventListener('mouseup', handleMouseUp)
      // iOS Safari: passive: false permite preventDefault
      window.addEventListener('touchmove', handleMove as any, { passive: false })
      window.addEventListener('touchend', handleMouseUp)
    } else {
      window.removeEventListener('mousemove', handleMove as any)
      window.removeEventListener('mouseup', handleMouseUp)
      window.removeEventListener('touchmove', handleMove as any)
      window.removeEventListener('touchend', handleMouseUp)
    }
    return () => {
      window.removeEventListener('mousemove', handleMove as any)
      window.removeEventListener('mouseup', handleMouseUp)
      window.removeEventListener('touchmove', handleMove as any)
      window.removeEventListener('touchend', handleMouseUp)
    }
  }, [isDragging])

  return (
    <section className="py-12 md:py-20 bg-brand-dark overflow-hidden">
      <div className="container mx-auto px-6">
        
        <div className="text-center mb-6 md:mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-4"
          >
            Veja a <span className="text-gradient">Realidade.</span>
          </motion.h2>
          <p className="text-slate-400">Arraste para comparar o antes e depois.</p>
        </div>

        {/* CONTAINER DA COMPARAÇÃO */}
        <div className="relative w-full max-w-lg mx-auto aspect-[4/5] rounded-3xl overflow-hidden border-4 border-white/10 shadow-2xl shadow-cyan-900/20">
          
          <div 
            ref={containerRef}
            className="relative w-full h-full cursor-col-resize select-none"
            onMouseDown={handleMouseDown}
            onTouchStart={handleMouseDown}
          >
            {/* 1. IMAGEM DO DEPOIS (Fundo / Base) */}
            <img 
              src={afterImage} 
              alt="Vidro Restaurado" 
              className="absolute inset-0 w-full h-full object-cover pointer-events-none"
            />
            {/* Label Depois */}
            <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-md text-white text-xs font-bold px-3 py-1 rounded-full border border-white/20">
              DEPOIS
            </div>

            {/* 2. IMAGEM DO ANTES (Sobreposta com Clip) */}
            <div 
              className="absolute inset-0 overflow-hidden pointer-events-none"
              style={{ width: `${sliderPosition}%` }}
            >
              <img 
                src={beforeImage} 
                alt="Vidro Sujo" 
                className="absolute top-0 left-0 max-w-none h-full object-cover"
                style={{ width: containerRef.current?.offsetWidth || '100%' }} // Mantém a proporção correta
              />
              {/* Label Antes */}
              <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-md text-white text-xs font-bold px-3 py-1 rounded-full border border-white/20">
                ANTES
              </div>
            </div>

            {/* 3. A BARRA (Slider Handle) */}
            <div 
              className="absolute top-0 bottom-0 w-1 bg-white cursor-col-resize z-10 flex items-center justify-center shadow-[0_0_20px_rgba(0,0,0,0.5)]"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg text-brand-dark transform active:scale-90 transition-transform">
                <ChevronsLeftRight size={20} />
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}

export default Comparison