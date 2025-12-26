import { useRef, useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { CheckCircle2, ShieldCheck, Clock, Zap, ChevronRight } from 'lucide-react'
import serviceTecnologia from '@/assets/images/services/service-tecnologia.svg'
import serviceAgilidade from '@/assets/images/services/service-agilidade.svg'
import serviceProtecao from '@/assets/images/services/service-protecao.svg'
import serviceGarantia from '@/assets/images/services/service-garantia.svg'

const services = [
  {
    id: 1,
    title: "Tecnologia",
    description: "Equipamentos que removem chuva ácida sem riscar.",
    icon: <Zap className="w-6 h-6 text-cyan-400" />,
    image: serviceTecnologia,
  },
  {
    id: 2,
    title: "Agilidade",
    description: "Processo rápido. Não paramos sua rotina.",
    icon: <Clock className="w-6 h-6 text-blue-400" />,
    image: serviceAgilidade,
  },
  {
    id: 3,
    title: "Proteção",
    description: "Blindagem que repele sujeira por muito mais tempo.",
    icon: <ShieldCheck className="w-6 h-6 text-cyan-400" />,
    image: serviceProtecao,
  },
  {
    id: 4,
    title: "Garantia",
    description: "Satisfação total ou refazemos o trabalho.",
    icon: <CheckCircle2 className="w-6 h-6 text-blue-400" />,
    image: serviceGarantia,
  }
]

export function Services() {
  const [width, setWidth] = useState(0)
  const carousel = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if(carousel.current) {
      // Calcula o limite máximo que pode arrastar para não sair da tela
      setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
    }
  }, [])

  return (
    <section className="py-16 md:py-24 bg-brand-dark relative overflow-hidden">
      
      {/* Luz de fundo sutil */}
      <div className="absolute top-1/2 left-0 w-full h-[500px] bg-gradient-to-r from-blue-900/10 to-cyan-900/10 blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6">
        
        {/* Cabeçalho */}
        <div className="mb-8 md:mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-2">
              Padrão <span className="text-gradient">RestauraSC</span>
            </h2>
            <p className="text-slate-400 max-w-md text-sm md:text-base">
              Arraste para o lado para conhecer nossa tecnologia.
            </p>
        </div>

        {/* CARROSSEL DRAGGABLE (MÁGICA AQUI) */}
        {/* 'cursor-grab' indica que pode pegar. 'active:cursor-grabbing' indica que pegou */}
        <motion.div 
          ref={carousel} 
          className="cursor-grab active:cursor-grabbing overflow-hidden"
          whileTap={{ cursor: "grabbing" }}
        >
          <motion.div 
            drag="x" 
            dragConstraints={{ right: 0, left: -width }} 
            className="flex gap-4 md:gap-6"
          >
            {services.map((service) => (
              <motion.div
                key={service.id}
                className="min-w-[85vw] sm:min-w-[350px] md:min-w-[300px] relative h-[420px] rounded-2xl overflow-hidden bg-brand-surface border border-white/5 shadow-lg group pointer-events-none md:pointer-events-auto"
              >
                {/* Imagem (pointer-events-none evita que a imagem seja 'arrastada' ao invés do card) */}
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 pointer-events-none"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

                <div className="absolute bottom-0 left-0 w-full p-6 flex flex-col justify-end h-full">
                  <div className="bg-white/10 backdrop-blur-md p-3 rounded-xl w-fit mb-4 border border-white/10">
                    {service.icon}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
                    {service.title}
                  </h3>
                  
                  <p className="text-slate-300 text-sm leading-relaxed opacity-90">
                    {service.description}
                  </p>
                </div>
                
                {/* Borda Glow */}
                <div className="absolute inset-0 border border-white/10 group-hover:border-cyan-500/50 rounded-2xl transition-colors duration-500" />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Dica visual Mobile */}
        <div className="flex justify-center md:hidden mt-6 text-slate-500 text-xs uppercase tracking-widest animate-pulse">
            ← Arraste para navegar →
        </div>

      </div>
    </section>
  )
}

export default Services