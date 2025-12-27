import { useState, type FormEvent } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Send } from 'lucide-react'
import whatsappPattern from '@/assets/images/whatsapp-background-pattern.svg'

// Estilos injetados para o efeito de Radar (Pulse) exato do CodePen
const styles = `
  @keyframes pulse-green {
    0% {
      box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.7);
    }
    70% {
      box-shadow: 0 0 0 20px rgba(37, 211, 102, 0);
    }
    100% {
      box-shadow: 0 0 0 0 rgba(37, 211, 102, 0);
    }
  }
  
  .whatsapp-pulse {
    animation: pulse-green 2s infinite;
  }
`

export function FloatingWhatsApp() {
  const [isOpen, setIsOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    phone: ''
  })

  // SEU NÚMERO AQUI
  const phoneNumber = "5548999447125" 

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    
    const message = `Olá! Me chamo *${formData.name}* (Tel: ${formData.phone}). Gostaria de solicitar um orçamento para restauração.`
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    
    window.open(whatsappUrl, '_blank')
  }

  return (
    <>
      <style>{styles}</style>
      
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4 font-sans">
        
        {/* JANELA DO CHAT */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="w-[300px] sm:w-[350px] bg-[#e9e0d7] rounded-2xl shadow-2xl overflow-hidden border border-white/20 origin-bottom-right"
              style={{ 
                backgroundImage: `url(${whatsappPattern})`,
                backgroundBlendMode: "overlay"
              }}
            >
              {/* Cabeçalho */}
              <div className="bg-[#075e54] p-4 flex items-center justify-between text-white shadow-md">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#075e54] font-bold border-2 border-white/20 overflow-hidden">
                      {/* Logo simples ou Letra se não tiver foto */}
                      R
                    </div>
                    <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 border-2 border-[#075e54] rounded-full animate-pulse"></span>
                  </div>
                  <div>
                    <h3 className="font-bold text-sm">RestauraSC</h3>
                    <p className="text-[10px] text-green-100 opacity-90 uppercase tracking-wide">Online Agora</p>
                  </div>
                </div>
                
                <button 
                  onClick={() => setIsOpen(false)}
                  className="hover:bg-white/10 p-1 rounded-full transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Corpo */}
              <div className="p-4 bg-[#e9e0d7]/90 backdrop-blur-[2px]">
                
                <div className="bg-white p-3 rounded-tr-xl rounded-bl-xl rounded-br-xl shadow-sm mb-4 max-w-[90%] text-sm text-slate-800 relative">
                  Olá! Preencha abaixo para um orçamento rápido. 👇
                  <div className="absolute top-0 -left-2 w-0 h-0 border-t-[10px] border-t-white border-l-[10px] border-l-transparent"></div>
                </div>

                <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                  <input 
                    type="text" 
                    required
                    placeholder="Nome"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    // CORREÇÃO: text-slate-900 força a cor escura, resolvendo o bug do texto invisível
                    className="px-4 py-3 rounded-lg border border-gray-200 shadow-sm text-sm text-slate-900 placeholder:text-slate-500 focus:ring-2 focus:ring-[#25d366] focus:border-[#25d366] outline-none bg-white"
                  />
                  
                  <input 
                    type="tel" 
                    required
                    placeholder="(48) 99999-9999"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    // CORREÇÃO: text-slate-900 força a cor escura
                    className="px-4 py-3 rounded-lg border border-gray-200 shadow-sm text-sm text-slate-900 placeholder:text-slate-500 focus:ring-2 focus:ring-[#25d366] focus:border-[#25d366] outline-none bg-white"
                  />

                  <button 
                    type="submit"
                    className="mt-1 bg-[#075e54] hover:bg-[#054c44] text-white font-bold py-3 rounded-lg shadow-lg flex items-center justify-center gap-2 transition-all active:scale-95"
                  >
                    <span>Iniciar Conversa</span>
                    <Send size={16} />
                  </button>
                </form>
                
                <div className="text-center mt-3 text-[10px] text-slate-500 flex items-center justify-center gap-1">
                   <span className="w-2 h-2 rounded-full bg-green-500"></span>
                   Ambiente Seguro
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* BOTÃO FLUTUANTE (TRIGGER) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          // AQUI ESTÁ A CLASSE 'whatsapp-pulse' que cria o efeito do CodePen
          className="w-16 h-16 bg-[#25D366] hover:bg-[#20b858] rounded-full flex items-center justify-center transition-all duration-300 whatsapp-pulse z-50 relative group border-none outline-none"
          aria-label="Abrir WhatsApp"
        >
          <AnimatePresence mode='wait'>
             {isOpen ? (
                <X key="close" className="text-white w-8 h-8" />
             ) : (
                /* LOGO OFICIAL SVG (Vetorizado e Nítido) */
                <svg key="logo" viewBox="0 0 24 24" className="w-9 h-9 fill-white" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
             )}
          </AnimatePresence>
        </button>
      </div>
    </>
  )
}
