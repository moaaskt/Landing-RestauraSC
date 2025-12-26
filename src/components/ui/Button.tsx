import { forwardRef } from 'react'
import { motion, type HTMLMotionProps } from 'framer-motion'
import { cn } from '@/lib/utils'

type ButtonVariant = 'primary' | 'outline' | 'ghost'

export interface ButtonProps extends Omit<HTMLMotionProps<"button">, "ref"> {
  variant?: ButtonVariant
  children: React.ReactNode
  className?: string
}

const variantStyles: Record<ButtonVariant, string> = {
  // Primary agora tem um gradiente sutil e sombra colorida (Glow)
  primary: "bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-[0_0_20px_-5px_var(--color-brand-glow)] hover:shadow-[0_0_30px_-5px_var(--color-brand-glow)] hover:brightness-110 border border-white/10",
  
  outline: "border border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 hover:border-cyan-400 hover:shadow-[0_0_15px_-3px_rgba(6,182,212,0.3)]",
  
  ghost: "text-slate-300 hover:text-white hover:bg-white/5"
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', children, className, ...props }, ref) => {
    const baseStyles = "px-8 py-4 rounded-xl font-bold tracking-wide transition-all duration-300 active:scale-95"
    const selectedVariant: ButtonVariant = variant || 'primary'
    const variantClass = variantStyles[selectedVariant]

    return (
      <motion.button
        ref={ref}
        className={cn(baseStyles, variantClass, className)}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        {...props}
      >
        {children}
      </motion.button>
    )
  }
)

Button.displayName = "Button"

export default Button