import { useState } from 'react'
import { motion, useScroll, useMotionValueEvent } from 'framer-motion'
import Button from '@/components/ui/Button'
import { Menu, X } from 'lucide-react'

export function Navbar() {
  const { scrollY } = useScroll()
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setIsScrolled(latest > 8)
  })

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 overflow-hidden transition-all duration-500 ${
          isScrolled
            ? `
              bg-white/5
              backdrop-blur-2xl
              border border-white/20
              shadow-[0_8px_30px_rgba(0,0,0,0.25)]
              py-3
            `
            : `
              bg-transparent
              border-transparent
              py-6
            `
        }`}
      >
        {/* GLASS HIGHLIGHT (iOS magic) */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-white/5 to-transparent" />
        </div>

        {/* CONTENT */}
        <div className="relative container mx-auto px-6 flex items-center justify-between">

          {/* LOGO */}
          <div className="flex items-center">
  <img
    src="/logo-restaura.svg"
    alt="RestauraSC"
    className="
      h-12 sm:h-16 md:h-20
      w-auto
      object-contain
      transition-all duration-300
    "
  />
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
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white/70 transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </nav>

            <Button
              variant="outline"
              className="
                h-10 px-5 text-xs uppercase tracking-wide
                bg-white/5
                backdrop-blur-md
                border border-white/20
                hover:bg-white/10
                hover:border-white/30
                transition-all
              "
            >
              Área do Cliente
            </Button>
          </div>

          {/* MOBILE BUTTON */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="
                p-2 rounded-lg
                bg-white/5
                backdrop-blur-md
                border border-white/20
                text-white
                hover:bg-white/10
                transition-all
              "
            >
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* MOBILE MENU */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="
            fixed inset-0 z-40
            bg-black/70
            backdrop-blur-2xl
            pt-28 px-6
            md:hidden
          "
        >
          <nav className="flex flex-col gap-6 text-center">
            <a href="#" className="text-2xl font-bold text-white">Serviços</a>
            <a href="#" className="text-2xl font-bold text-white">Tecnologia</a>
            <a href="#" className="text-2xl font-bold text-white">Projetos</a>

            <Button
              className="
                mt-6
                bg-white/10
                backdrop-blur-md
                border border-white/20
              "
            >
              Solicitar Orçamento
            </Button>
          </nav>
        </motion.div>
      )}
    </>
  )
}
