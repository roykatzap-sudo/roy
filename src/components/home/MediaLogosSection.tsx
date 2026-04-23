import FadeInView from '@/components/ui/FadeInView'

const mediaOutlets = [
  'Calcalist',
  'TheMarker',
  'Globes',
  'Ynet',
  'Israel Hayom',
  'Maariv',
]

export default function MediaLogosSection() {
  return (
    <section className="py-14 bg-cream-dark border-y border-navy/5">
      <div className="container-max">
        <FadeInView>
          <p className="text-center text-xs text-navy/30 uppercase tracking-widest mb-8">
            כפי שפורסם ב
          </p>
        </FadeInView>

        <FadeInView delay={0.1}>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            {mediaOutlets.map((outlet) => (
              <span
                key={outlet}
                className="font-heading text-lg md:text-xl font-bold text-navy/20 hover:text-navy/40 transition-colors cursor-default select-none"
              >
                {outlet}
              </span>
            ))}
          </div>
        </FadeInView>
      </div>
    </section>
  )
}
