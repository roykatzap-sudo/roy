import type { Metadata } from 'next'
import Link from 'next/link'
import SectionHeading from '@/components/ui/SectionHeading'
import FadeInView from '@/components/ui/FadeInView'
import ContactForm from '@/components/contact/ContactForm'

export const metadata: Metadata = {
  title: 'צרו קשר',
  description: 'צרו קשר עם Lawgorithm – נשמח לשמוע מכם ולעזור',
}

export default function ContactPage() {
  return (
    <div className="section-py pt-32 bg-cream">
      <div className="container-max">
        <FadeInView>
          <SectionHeading
            title="צרו קשר"
            subtitle="נשמח לשמוע מכם, לענות על שאלות ולתאם שיחת היכרות"
          />
        </FadeInView>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-start">
          <FadeInView>
            <ContactForm />
          </FadeInView>

          <FadeInView delay={0.2} direction="left">
            <div className="bg-navy rounded-card p-8 text-cream sticky top-24">
              <h3 className="font-heading text-2xl font-bold mb-6">
                פרטי יצירת קשר
              </h3>

              <div className="flex flex-col gap-5">
                <div>
                  <p className="text-gold text-xs font-semibold uppercase tracking-widest mb-1">
                    דוא״ל
                  </p>
                  <Link
                    href="mailto:info@lawgorithm.co.il"
                    className="text-cream/70 text-sm hover:text-gold transition-colors"
                  >
                    info@lawgorithm.co.il
                  </Link>
                </div>

                <div>
                  <p className="text-gold text-xs font-semibold uppercase tracking-widest mb-1">
                    LinkedIn
                  </p>
                  <Link
                    href="https://www.linkedin.com/company/lawgorithm"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cream/70 text-sm hover:text-gold transition-colors"
                  >
                    linkedin.com/company/lawgorithm
                  </Link>
                </div>

                <div>
                  <p className="text-gold text-xs font-semibold uppercase tracking-widest mb-1">
                    WhatsApp
                  </p>
                  <Link
                    href="https://wa.me/972500000000"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cream/70 text-sm hover:text-gold transition-colors"
                  >
                    שלחו הודעה
                  </Link>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-cream/10">
                <p className="text-cream/40 text-xs leading-relaxed">
                  אנחנו מגיבים לכל פניה תוך 24-48 שעות בימי עבודה.
                </p>
              </div>

              <div className="mt-6">
                <Link
                  href="mailto:info@lawgorithm.co.il?subject=שיחת%20ייעוץ%20חינם"
                  className="inline-flex items-center px-6 py-3 bg-gold text-navy text-sm font-semibold rounded-full hover:bg-gold-dark transition-colors"
                >
                  שלחו מייל ישיר
                </Link>
              </div>
            </div>
          </FadeInView>
        </div>
      </div>
    </div>
  )
}
