import Link from 'next/link'
import FadeInView from '@/components/ui/FadeInView'

export default function HeroSection() {
  return (
    <section className="min-h-screen bg-navy flex items-center pt-16 md:pt-20 relative overflow-hidden">
      {/* Subtle background texture */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            'radial-gradient(circle at 2px 2px, #c9a84c 1px, transparent 0)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="container-max relative z-10 py-24">
        <div className="max-w-4xl">
          <FadeInView>
            <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-6">
              Legal Tech · Israel
            </p>
          </FadeInView>

          <FadeInView delay={0.1}>
            <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-cream leading-tight">
              משפט{' '}
              <span className="text-gold">×</span>{' '}
              בינה מלאכותית
              <br />
              <span className="text-cream/80">– בשפה שלך</span>
            </h1>
          </FadeInView>

          <FadeInView delay={0.22}>
            <p className="mt-8 text-lg md:text-xl text-cream/60 max-w-2xl leading-relaxed">
              Lawgorithm מחברת בין עולם המשפט לעולם הטכנולוגיה.
              סדנאות, קורסים וייעוץ אישי שיעזרו לך להוביל את המהפכה המשפטית-דיגיטלית.
            </p>
          </FadeInView>

          <FadeInView delay={0.35}>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/services"
                className="inline-flex items-center px-8 py-4 bg-gold text-navy text-base font-semibold rounded-full hover:bg-gold-dark transition-all duration-200 active:scale-95"
              >
                לשירותים שלנו
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center px-8 py-4 border-2 border-cream/30 text-cream text-base font-semibold rounded-full hover:border-cream/60 hover:bg-cream/5 transition-all duration-200"
              >
                קראו עוד
              </Link>
            </div>
          </FadeInView>
        </div>

        {/* Scroll indicator */}
        <FadeInView delay={0.6} direction="none">
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce-slow">
            <span className="text-cream/30 text-xs">גלול</span>
            <div className="w-px h-8 bg-cream/20" />
          </div>
        </FadeInView>
      </div>
    </section>
  )
}
