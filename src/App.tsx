import { Navbar } from '@/components/layout/Navbar'
import Hero from '@/components/sections/Hero'
import Services from '@/components/sections/Services'
import Comparison from '@/components/sections/Comparison'
import { FloatingWhatsApp } from '@/components/ui/FloatingWhatsApp'

function App() {
  return (
    <main className="bg-brand-dark selection:bg-cyan-500/30">
      <Navbar />
      <Hero />
      <Services />
      <Comparison /> 
      <FloatingWhatsApp />
      
      <footer className="py-8 text-center text-slate-600 text-sm border-t border-white/5 bg-black/20">
        <p>© 2026 RestauraSC. Todos os direitos reservados.</p>
      </footer>
    </main>
  )
}

export default App