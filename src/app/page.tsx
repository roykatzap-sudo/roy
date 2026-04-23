import type { Metadata } from 'next'
import HeroSection from '@/components/home/HeroSection'
import AudienceSection from '@/components/home/AudienceSection'
import MediaLogosSection from '@/components/home/MediaLogosSection'
import TestimonialsSection from '@/components/home/TestimonialsSection'

export const metadata: Metadata = {
  title: 'בית',
  description:
    'Lawgorithm – משפט × בינה מלאכותית בשפה שלך. סדנאות, קורסים וייעוץ לעולם המשפטי.',
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AudienceSection />
      <MediaLogosSection />
      <TestimonialsSection />
    </>
  )
}
