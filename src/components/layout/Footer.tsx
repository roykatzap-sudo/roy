import Link from 'next/link'
import { navLinks } from '@/data/navigation'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-navy text-cream/80">
      <div className="container-max py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <p className="font-heading text-2xl font-bold text-cream mb-3">
            Lawgorithm<span className="text-gold">.</span>
          </p>
          <p className="text-sm leading-relaxed text-cream/60">
            משפט × בינה מלאכותית – בשפה שלך.
          </p>
          <div className="flex gap-4 mt-5">
            <Link
              href="https://www.linkedin.com/company/lawgorithm"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cream/50 hover:text-gold transition-colors text-sm"
            >
              LinkedIn
            </Link>
            <Link
              href="https://wa.me/972500000000"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cream/50 hover:text-gold transition-colors text-sm"
            >
              WhatsApp
            </Link>
          </div>
        </div>

        <div>
          <h3 className="text-cream font-semibold mb-4 text-sm uppercase tracking-widest">
            ניווט
          </h3>
          <ul className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-cream/60 hover:text-gold transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-cream font-semibold mb-4 text-sm uppercase tracking-widest">
            צרו קשר
          </h3>
          <p className="text-sm text-cream/60">info@lawgorithm.co.il</p>
          <Link
            href="/contact"
            className="inline-block mt-4 px-5 py-2 bg-gold text-navy text-sm font-semibold rounded-full hover:bg-gold-dark transition-colors"
          >
            שלחו הודעה
          </Link>
        </div>
      </div>

      <div className="border-t border-cream/10 py-4">
        <p className="container-max text-xs text-cream/30 text-center">
          © {year} Lawgorithm. כל הזכויות שמורות.
        </p>
      </div>
    </footer>
  )
}
