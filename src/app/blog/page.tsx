import type { Metadata } from 'next'
import Link from 'next/link'
import { blogPosts } from '@/data/blogPosts'
import BlogCard from '@/components/blog/BlogCard'
import SectionHeading from '@/components/ui/SectionHeading'
import FadeInView from '@/components/ui/FadeInView'

export const metadata: Metadata = {
  title: 'בלוג',
  description: 'מאמרים, תובנות וחדשות מעולם הלגלטק הישראלי',
}

export default function BlogPage() {
  return (
    <div className="section-py pt-32">
      <div className="container-max">
        <FadeInView>
          <SectionHeading
            title="בלוג"
            subtitle="מאמרים, תובנות וחדשות מעולם הלגלטק הישראלי"
            centered
          />
        </FadeInView>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, i) => (
            <FadeInView key={post.id} delay={i * 0.08}>
              <BlogCard post={post} />
            </FadeInView>
          ))}
        </div>

        <FadeInView delay={0.2}>
          <div className="mt-16 text-center bg-navy rounded-card p-10">
            <p className="text-cream/70 mb-2 text-lg font-heading">
              פוסטים נוספים ותובנות יומיות
            </p>
            <p className="text-cream/40 text-sm mb-6">
              עקבו אחרינו ב-LinkedIn לתוכן עדכני על AI ומשפט
            </p>
            <Link
              href="https://www.linkedin.com/company/lawgorithm"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-3 bg-gold text-navy text-sm font-semibold rounded-full hover:bg-gold-dark transition-colors"
            >
              עקבו ב-LinkedIn
            </Link>
          </div>
        </FadeInView>
      </div>
    </div>
  )
}
