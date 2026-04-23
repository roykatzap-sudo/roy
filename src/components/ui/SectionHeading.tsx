import { cn } from '@/lib/utils'

interface Props {
  title: string
  subtitle?: string
  centered?: boolean
  className?: string
}

export default function SectionHeading({
  title,
  subtitle,
  centered = false,
  className,
}: Props) {
  return (
    <div className={cn('mb-12', centered && 'text-center', className)}>
      <h2
        className={cn(
          'text-3xl md:text-4xl font-heading font-bold text-navy gold-line',
          centered && 'after:mx-auto'
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            'mt-4 text-lg text-navy/60 max-w-2xl',
            centered && 'mx-auto'
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  )
}
