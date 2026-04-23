'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils'
import { navLinks } from '@/data/navigation'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <header
      className={cn(
        'fixed top-0 inset-x-0 z-50 transition-all duration-300',
        scrolled ? 'bg-cream/95 backdrop-blur-sm shadow-sm' : 'bg-transparent'
      )}
    >
      <nav className="container-max flex items-center justify-between h-16 md:h-20">
        <Link
          href="/"
          className="font-heading text-xl font-bold text-navy hover:text-gold transition-colors"
        >
          Lawgorithm<span className="text-gold">.</span>
        </Link>

        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={cn(
                  'text-sm font-medium transition-colors hover:text-gold pb-0.5',
                  pathname === link.href
                    ? 'text-gold border-b-2 border-gold'
                    : 'text-navy'
                )}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href="/contact"
          className="hidden md:inline-flex items-center px-5 py-2 bg-gold text-navy text-sm font-semibold rounded-full hover:bg-gold-dark transition-colors"
        >
          צרו קשר
        </Link>

        <button
          className="md:hidden p-2 text-navy"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? 'סגור תפריט' : 'פתח תפריט'}
        >
          <div className="w-6 flex flex-col gap-1.5">
            <span
              className={cn(
                'h-0.5 bg-navy transition-all duration-300 block',
                menuOpen && 'rotate-45 translate-y-2'
              )}
            />
            <span
              className={cn(
                'h-0.5 bg-navy transition-all duration-300 block',
                menuOpen && 'opacity-0'
              )}
            />
            <span
              className={cn(
                'h-0.5 bg-navy transition-all duration-300 block',
                menuOpen && '-rotate-45 -translate-y-2'
              )}
            />
          </div>
        </button>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="md:hidden bg-cream border-t border-cream-dark overflow-hidden"
          >
            <ul className="container-max flex flex-col py-4 gap-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className={cn(
                      'block text-base py-1 transition-colors hover:text-gold',
                      pathname === link.href
                        ? 'text-gold font-semibold'
                        : 'text-navy'
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/contact"
                  onClick={() => setMenuOpen(false)}
                  className="inline-flex items-center px-5 py-2 bg-gold text-navy text-sm font-semibold rounded-full mt-2"
                >
                  צרו קשר
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
