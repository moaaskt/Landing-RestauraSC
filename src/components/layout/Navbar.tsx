import { useState } from 'react'
import { motion, useScroll, useMotionValueEvent } from 'framer-motion'
import Button from '@/components/ui/Button'
import { Menu, X } from 'lucide-react'

export function Navbar() {
  const { scrollY } = useScroll()
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setIsScrolled(latest > 20)
  })

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${
          isScrolled
            ? 'bg-black/40 backdrop-blur-xl saturate-150 border-white/10 py-3 shadow-2xl shadow-black/20'
            : 'bg-transparent border-transparent py-6'
        }`}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">

          {/* LOGO COMPLETA */}
          <div className="flex items-center gap-3 group">

            {/* Imagem SVG */}
            <div className="relative w-20 h-14 sm:w-16 sm:h-16 md:w-12 md:h-12 flex items-center justify-center flex-shrink-0">
            <img
  src="/logo-restaura.svg"
  alt="Logo RestauraSC"
  className="w-full h-full scale-[1.4] object-contain"
 />

            </div>

            {/* Ícone decorativo */}
            <div className="relative w-10 h-10 flex items-center justify-center">
              {/* <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500 to-blue-600 rounded-xl rotate-3 group-hover:rotate-6 transition-transform duration-300 shadow-lg shadow-cyan-500/30"></div> */}
{/* 
              <div className="absolute inset-0.5 bg-black rounded-[10px] flex items-center justify-center z-10">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="url(#gradient)"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <defs>
                    <linearGradient id="gradient" x1="0" y1="0" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#22d3ee" />
                      <stop offset="100%" stopColor="#3b82f6" />
                    </linearGradient>
                  </defs>
                  <path d="M12 3v18" />
                  <path d="M3 12h18" />
                  <path d="M17 7l-5 5-5-5" opacity="0.5" />
                </svg>
              </div> */}
            </div>

            {/* Texto */}
            {/* <div className="flex flex-col leading-none">
              <span className="text-xl font-extrabold text-white tracking-tight">
                RESTAURA<span className="text-cyan-400">SC</span>
              </span>
              <span className="text-[10px] font-medium text-slate-400 uppercase tracking-[0.2em] transition-colors group-hover:text-cyan-300">
                Fachadas & Vidros
              </span>
            </div> */}
          </div>

          {/* MENU DESKTOP */}
          <div className="hidden md:flex items-center gap-8">
            <nav className="flex gap-6">
              {['Serviços', 'Tecnologia', 'Projetos'].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-sm font-medium text-slate-300 hover:text-white transition-colors relative group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </nav>

            <Button
              variant="outline"
              className="h-10 px-5 text-xs uppercase tracking-wide border-white/20 hover:bg-white/10 hover:border-cyan-400/50"
            >
              Área do Cliente
            </Button>
          </div>

          {/* BOTÃO MOBILE */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-white hover:bg-white/10 rounded-lg transition-colors"
            >
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* MENU MOBILE */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed inset-0 z-40 bg-black/95 backdrop-blur-xl pt-24 px-6 md:hidden"
        >
          <nav className="flex flex-col gap-6 text-center">
            <a href="#" className="text-2xl font-bold text-white">Serviços</a>
            <a href="#" className="text-2xl font-bold text-white">Tecnologia</a>
            <a href="#" className="text-2xl font-bold text-white">Projetos</a>
            <Button className="w-full mt-4">Solicitar Orçamento</Button>
          </nav>
        </motion.div>
      )}
    </>
  )
}
