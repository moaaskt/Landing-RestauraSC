import { motion } from 'framer-motion'
import Button from '@/components/ui/Button'
import heroVideo from '@/assets/video/hero1.mp4'

export function Hero() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-brand-dark">
      
      {/* EFEITOS DE FUNDO (AMBIENT LIGHT) */}
      <div className="absolute top-0 inset-x-0 h-[500px] bg-gradient-to-b from-cyan-900/20 via-blue-900/10 to-transparent pointer-events-none" />
      <div className="absolute -top-[20%] -left-[10%] w-[600px] h-[600px] bg-cyan-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 pt-36 md:pt-40 pb-20 flex flex-col-reverse lg:flex-row items-center gap-16 z-10">
        
        {/* TEXTO */}
        <div className="w-full lg:w-1/2 flex flex-col gap-8 text-center lg:text-left">
          
          {/* Badge 'Novo' (Opcional, dá um ar de tech) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex justify-center lg:justify-start"
          >
            <span className="px-3 py-1 rounded-full bg-cyan-900/30 border border-cyan-500/30 text-cyan-300 text-xs font-semibold tracking-wider uppercase">
              Especialistas em Fachadas
            </span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.1] tracking-tight"
          >
            Sua vista merece <br />
            <span className="text-gradient">ser vista.</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-slate-400 max-w-xl mx-auto lg:mx-0 leading-relaxed"
          >
            Tecnologia avançada para restauração de vidros e fachadas. 
            Remova manchas de chuva ácida e recupere a transparência original <strong className="text-slate-100">sem trocar os vidros.</strong>
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          >
            <Button>
              Solicitar Avaliação Gratuita
            </Button>
            {/* <Button variant="outline">
              Ver Projetos
            </Button> */}
          </motion.div>
        </div>

        {/* VÍDEO / VISUAL */}
        <motion.div 
           initial={{ opacity: 0, scale: 0.9 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 0.8 }}
           className="w-full lg:w-1/2 relative"
        >
            {/* Moldura do Vídeo com Efeito Neon */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-brand-surface border border-white/10 group">
                {/* Glow atrás do vídeo */}
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
                
                <div className="relative rounded-2xl overflow-hidden bg-black">
                    <video 
                        autoPlay 
                        loop 
                        muted 
                        playsInline 
                        className="w-full h-auto object-cover opacity-90 hover:opacity-100 transition-opacity duration-500"
                    >
                        <source src={heroVideo} type="video/mp4" />
                    </video>
                    
                    {/* Overlay para garantir contraste se tiver texto sobre o vídeo futuramente */}
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-transparent to-transparent pointer-events-none"></div>
                </div>
            </div>
        </motion.div>

      </div>
    </section>
  );
}

export default Hero