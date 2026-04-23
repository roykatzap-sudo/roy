import Image from 'next/image'
import Link from 'next/link'
import type { BlogPost } from '@/types'

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('he-IL', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export default function BlogCard({ post }: { post: BlogPost }) {
  return (
    <article className="bg-white rounded-card shadow-card overflow-hidden flex flex-col group hover:shadow-card-hover transition-shadow duration-300 h-full">
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={post.imageUrl}
          alt={post.imageAlt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="p-6 flex flex-col flex-1">
        <time
          dateTime={post.date}
          className="text-xs text-navy/40 mb-3 block"
          dir="ltr"
        >
          {formatDate(post.date)}
        </time>

        <h3 className="font-heading text-lg font-bold text-navy leading-snug mb-3 line-clamp-2">
          {post.title}
        </h3>

        <p className="text-navy/60 text-sm leading-relaxed line-clamp-3 flex-1">
          {post.summary}
        </p>

        <div className="mt-5 flex items-center gap-3 flex-wrap">
          <Link
            href={`/blog/${post.slug}`}
            className="inline-flex items-center text-gold text-sm font-semibold hover:text-gold-dark transition-colors gap-1"
          >
            לקריאה
            <span className="rtl:rotate-180 inline-block">←</span>
          </Link>

          {post.linkedinUrl && (
            <Link
              href={post.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-navy/30 text-xs hover:text-gold transition-colors"
            >
              ב-LinkedIn ↗
            </Link>
          )}
        </div>
      </div>
    </article>
  )
}
