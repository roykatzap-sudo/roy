import Link from 'next/link'
import { cn } from '@/lib/utils'
import type { Service } from '@/types'

export default function ServiceCard({ service }: { service: Service }) {
  return (
    <div
      className={cn(
        'bg-white rounded-card shadow-card p-8 flex flex-col h-full relative',
        service.highlighted && 'border-2 border-gold shadow-card-hover'
      )}
    >
      {service.highlighted && (
        <div className="absolute -top-3 start-8">
          <span className="bg-gold text-navy text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
            מומלץ
          </span>
        </div>
      )}

      <div className="flex items-start justify-between gap-4 mb-4">
        <h3 className="font-heading text-xl font-bold text-navy leading-snug">
          {service.title}
        </h3>
        {service.price && (
          <span
            className="text-gold font-bold text-lg shrink-0 whitespace-nowrap"
            dir="ltr"
          >
            {service.price}
          </span>
        )}
      </div>

      <p className="text-navy/60 text-sm leading-relaxed mb-6">
        {service.description}
      </p>

      <ul className="flex flex-col gap-3 flex-1 mb-8">
        {service.features.map((feature) => (
          <li key={feature} className="flex items-start gap-3 text-sm text-navy/70">
            <svg
              className="w-4 h-4 text-gold shrink-0 mt-0.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M5 13l4 4L19 7"
              />
            </svg>
            {feature}
          </li>
        ))}
      </ul>

      <Link
        href={service.ctaHref}
        className={cn(
          'inline-flex items-center justify-center px-6 py-3 rounded-full text-sm font-semibold transition-all duration-200',
          service.highlighted
            ? 'bg-gold text-navy hover:bg-gold-dark'
            : 'border-2 border-navy text-navy hover:bg-navy hover:text-cream'
        )}
      >
        {service.ctaLabel}
      </Link>
    </div>
  )
}
