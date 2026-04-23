import { cn } from '@/lib/utils'
import Link from 'next/link'

type Variant = 'primary' | 'outline' | 'ghost'
type Size = 'sm' | 'md' | 'lg'

interface ButtonProps {
  variant?: Variant
  size?: Size
  className?: string
  children: React.ReactNode
  href?: string
  external?: boolean
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
  onClick?: () => void
}

const variantClasses: Record<Variant, string> = {
  primary:
    'bg-gold text-navy font-semibold hover:bg-gold-dark active:scale-95',
  outline:
    'border-2 border-navy text-navy hover:bg-navy hover:text-cream',
  ghost: 'text-gold hover:text-gold-dark underline-offset-4 hover:underline',
}

const sizeClasses: Record<Size, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
}

export default function Button({
  variant = 'primary',
  size = 'md',
  className,
  children,
  href,
  external,
  type = 'button',
  disabled,
  onClick,
}: ButtonProps) {
  const classes = cn(
    'inline-flex items-center justify-center rounded-full transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold cursor-pointer',
    variantClasses[variant],
    sizeClasses[size],
    disabled && 'opacity-60 cursor-not-allowed',
    className
  )

  if (href) {
    return (
      <Link
        href={href}
        className={classes}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
      >
        {children}
      </Link>
    )
  }

  return (
    <button
      type={type}
      className={classes}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
