import type { Metadata } from 'next'
import { services } from '@/data/services'
import ServiceCard from '@/components/services/ServiceCard'
import SectionHeading from '@/components/ui/SectionHeading'
import FadeInView from '@/components/ui/FadeInView'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'שירותים',
  description:
    'סדנאות AI למשרדי עורכי דין, קורסים דיגיטליים לסטודנטים וייעוץ שוטף בלגלטק',
}

export default function ServicesPage() {
  return (
    <div className="section-py pt-32 bg-cream">
      <div className="container-max">
        <FadeInView>
          <SectionHeading
            title="שירותים ומוצרים"
            subtitle="בחרו את המסלול המתאים לכם ותתחילו להוביל את המהפכה המשפטית-טכנולוגית"
            centered
          />
        </FadeInView>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-4 items-stretch">
          {services.map((service, i) => (
            <FadeInView key={service.id} delay={i * 0.12}>
              <ServiceCard service={service} />
            </FadeInView>
          ))}
        </div>

        <FadeInView delay={0.3}>
          <div className="mt-16 bg-navy-light rounded-card p-8 md:p-12 text-center border border-navy/5">
            <p className="font-heading text-2xl text-navy mb-3">
              לא בטוחים מה מתאים לכם?
            </p>
            <p className="text-navy/60 mb-6">
              צרו קשר ונשמח לעזור לכם לבחור את המסלול הנכון
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-3 bg-gold text-navy text-sm font-semibold rounded-full hover:bg-gold-dark transition-colors"
            >
              לשיחת ייעוץ חינם
            </Link>
          </div>
        </FadeInView>
      </div>
    </div>
  )
}
