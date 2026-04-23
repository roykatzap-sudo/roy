import FadeInView from '@/components/ui/FadeInView'
import SectionHeading from '@/components/ui/SectionHeading'
import Link from 'next/link'

const audiences = [
  {
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
        />
      </svg>
    ),
    title: 'סטודנטים למשפטים',
    description:
      'קורסים מקוונים שיכינו אתכם לשוק העבודה של המחר. למדו להשתמש בכלי AI לפני כולם ותהיו רלוונטיים מהיום הראשון.',
    cta: 'לקורס הדיגיטלי',
    href: '/services',
  },
  {
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
    title: 'מתמחים',
    description:
      'ייעוץ אישי שיעזור לכם לבלוט במשרד ולהפוך את הידע הטכנולוגי ליתרון תחרותי אמיתי בשוק העבודה.',
    cta: 'לייעוץ אישי',
    href: '/contact',
  },
  {
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
    title: 'יזמים ומשרדים',
    description:
      'סדנאות מותאמות אישית ולווי שוטף שיטמיעו בינה מלאכותית בתהליכי העבודה של המשרד ויחסכו שעות בכל שבוע.',
    cta: 'לסדנת AI',
    href: '/services',
  },
]

export default function AudienceSection() {
  return (
    <section className="section-py bg-cream">
      <div className="container-max">
        <FadeInView>
          <SectionHeading
            title="מי אנחנו עוזרים?"
            subtitle="Lawgorithm מותאמת לשלושה קהלים מרכזיים"
            centered
          />
        </FadeInView>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {audiences.map((item, i) => (
            <FadeInView key={item.title} delay={i * 0.12}>
              <div className="bg-white rounded-card shadow-card p-8 flex flex-col h-full group hover:shadow-card-hover transition-shadow duration-300">
                <div className="w-14 h-14 rounded-2xl bg-navy/5 flex items-center justify-center text-gold mb-6 group-hover:bg-gold/10 transition-colors">
                  {item.icon}
                </div>
                <h3 className="font-heading text-xl font-bold text-navy mb-3">
                  {item.title}
                </h3>
                <p className="text-navy/60 leading-relaxed text-sm flex-1">
                  {item.description}
                </p>
                <Link
                  href={item.href}
                  className="mt-6 inline-flex items-center text-gold text-sm font-semibold hover:text-gold-dark transition-colors gap-1 group-hover:gap-2"
                >
                  <span>{item.cta}</span>
                  <span className="rtl:rotate-180 inline-block transition-transform">
                    ←
                  </span>
                </Link>
              </div>
            </FadeInView>
          ))}
        </div>
      </div>
    </section>
  )
}
