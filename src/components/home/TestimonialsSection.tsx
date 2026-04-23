import FadeInView from '@/components/ui/FadeInView'
import SectionHeading from '@/components/ui/SectionHeading'
import { testimonials } from '@/data/testimonials'

export default function TestimonialsSection() {
  return (
    <section className="section-py bg-navy">
      <div className="container-max">
        <FadeInView>
          <SectionHeading
            title="מה אומרים עלינו"
            subtitle="לקוחות ותלמידים שכבר עשו את המהלך"
            centered
            className="[&_h2]:text-cream [&_p]:text-cream/50 [&_h2]:after:mx-auto"
          />
        </FadeInView>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <FadeInView key={t.id} delay={i * 0.12}>
              <div className="bg-navy-light border border-cream/10 rounded-card p-8 flex flex-col h-full">
                <span className="text-gold font-heading text-6xl leading-none mb-4 select-none">
                  ״
                </span>
                <p className="text-cream/80 leading-relaxed text-sm italic flex-1">
                  {t.quote}
                </p>
                <div className="mt-6 pt-6 border-t border-cream/10">
                  <p className="text-cream font-semibold text-sm">
                    {t.authorName}
                  </p>
                  <p className="text-cream/40 text-xs mt-0.5">{t.authorRole}</p>
                </div>
              </div>
            </FadeInView>
          ))}
        </div>
      </div>
    </section>
  )
}
