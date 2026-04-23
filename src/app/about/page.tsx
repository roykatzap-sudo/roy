import type { Metadata } from 'next'
import Image from 'next/image'
import SectionHeading from '@/components/ui/SectionHeading'
import FadeInView from '@/components/ui/FadeInView'
import AudienceSection from '@/components/home/AudienceSection'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'אודות',
  description: 'הסיפור של Lawgorithm – המשימה, הקהלים והאנשים שמאחורי המותג',
}

export default function AboutPage() {
  return (
    <>
      {/* Brand story */}
      <section className="section-py pt-32 bg-cream">
        <div className="container-max">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
            <FadeInView>
              <SectionHeading title="אודות Lawgorithm" />
              <p className="text-navy/70 leading-relaxed text-lg mb-5">
                Lawgorithm נולדה מתוך הבנה פשוטה: עולם המשפט בישראל עומד בפני
                שינוי טכנולוגי מהותי, ורוב עורכי הדין והסטודנטים למשפטים עדיין
                לא יודעים כיצד להיות חלק ממנו.
              </p>
              <p className="text-navy/70 leading-relaxed text-lg mb-5">
                אנחנו כאן כדי לגשר על הפער הזה. עם שפה ברורה, כלים מעשיים וידע
                שמתאים לשוק הישראלי – אנחנו עוזרים לכם לא רק להבין את עולם ה-AI
                המשפטי, אלא להוביל אותו.
              </p>
              <p className="text-navy/70 leading-relaxed text-lg">
                Lawgorithm היא לא עוד חברת ייעוץ. אנחנו שותפים לדרך שלכם.
              </p>

              <div className="flex flex-wrap gap-4 mt-8">
                <Link
                  href="/services"
                  className="inline-flex items-center px-6 py-3 bg-gold text-navy text-sm font-semibold rounded-full hover:bg-gold-dark transition-colors"
                >
                  לשירותים שלנו
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center px-6 py-3 border-2 border-navy text-navy text-sm font-semibold rounded-full hover:bg-navy hover:text-cream transition-colors"
                >
                  צרו קשר
                </Link>
              </div>
            </FadeInView>

            <FadeInView delay={0.2} direction="left">
              <div className="relative aspect-square w-full max-w-md mx-auto rounded-2xl overflow-hidden shadow-card-hover">
                <Image
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80"
                  alt="מייסד Lawgorithm"
                  fill
                  sizes="(max-width: 768px) 100vw, 448px"
                  className="object-cover"
                />
              </div>
            </FadeInView>
          </div>
        </div>
      </section>

      {/* Mission banner */}
      <section className="bg-navy py-20">
        <div className="container-max text-center">
          <FadeInView>
            <p className="text-gold/40 font-heading text-6xl leading-none mb-4 select-none">
              ״
            </p>
            <blockquote className="text-cream font-heading text-2xl md:text-3xl lg:text-4xl leading-relaxed max-w-3xl mx-auto">
              להנגיש את עולם הבינה המלאכותית לכל מי שנוגע במשפט – בעברית, בבהירות ובמקצועיות.
            </blockquote>
            <p className="mt-6 text-cream/40 text-sm">המשימה של Lawgorithm</p>
          </FadeInView>
        </div>
      </section>

      {/* Values */}
      <section className="section-py bg-cream-dark">
        <div className="container-max">
          <FadeInView>
            <SectionHeading
              title="הערכים שלנו"
              centered
            />
          </FadeInView>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'בהירות',
                description:
                  'טכנולוגיה מורכבת בשפה פשוטה. ללא ז׳רגון מיותר, ללא בלבול.',
              },
              {
                title: 'רלוונטיות',
                description:
                  'הכל מותאם לדין הישראלי, לשוק הישראלי ולאתגרים הספציפיים של עורכי הדין בישראל.',
              },
              {
                title: 'מעשיות',
                description:
                  'לא תיאוריה – כלים שעובדים כבר ביום הבא. כל מה שאנחנו מלמדים ניתן ליישם מיד.',
              },
            ].map((value, i) => (
              <FadeInView key={value.title} delay={i * 0.12}>
                <div className="bg-white rounded-card shadow-card p-8">
                  <h3 className="font-heading text-xl font-bold text-navy mb-3">
                    {value.title}
                  </h3>
                  <p className="text-navy/60 text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      {/* Audiences */}
      <AudienceSection />
    </>
  )
}
