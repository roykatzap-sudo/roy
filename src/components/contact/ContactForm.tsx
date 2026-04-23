'use client'

import { useState } from 'react'
import { cn } from '@/lib/utils'

type FormState = {
  name: string
  email: string
  subject: string
  message: string
}

type Status = 'idle' | 'submitting' | 'success' | 'error'

const subjects = [
  'סדנת AI למשרד',
  'קורס דיגיטלי',
  'ייעוץ שוטף',
  'שאלה כללית',
  'אחר',
]

const inputClass =
  'w-full rounded-xl border border-navy/20 bg-white px-4 py-3 text-navy text-sm placeholder:text-navy/30 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent transition-all'

export default function ContactForm() {
  const [form, setForm] = useState<FormState>({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [status, setStatus] = useState<Status>('idle')

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('submitting')

    const subject = encodeURIComponent(
      `[Lawgorithm] ${form.subject || 'פנייה חדשה'}`
    )
    const body = encodeURIComponent(
      `שם: ${form.name}\nמייל: ${form.email}\nנושא: ${form.subject}\n\n${form.message}`
    )
    window.location.href = `mailto:info@lawgorithm.co.il?subject=${subject}&body=${body}`

    setTimeout(() => {
      setStatus('success')
      setForm({ name: '', email: '', subject: '', message: '' })
    }, 500)
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5 mt-8">
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-navy mb-1.5"
        >
          שם מלא <span className="text-gold">*</span>
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          placeholder="ישראל ישראלי"
          value={form.name}
          onChange={handleChange}
          className={inputClass}
        />
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-navy mb-1.5"
        >
          דוא״ל <span className="text-gold">*</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          placeholder="israel@example.com"
          value={form.email}
          onChange={handleChange}
          className={inputClass}
          dir="ltr"
        />
      </div>

      <div>
        <label
          htmlFor="subject"
          className="block text-sm font-medium text-navy mb-1.5"
        >
          נושא <span className="text-gold">*</span>
        </label>
        <select
          id="subject"
          name="subject"
          required
          value={form.subject}
          onChange={handleChange}
          className={cn(inputClass, 'cursor-pointer')}
        >
          <option value="" disabled>
            בחרו נושא...
          </option>
          {subjects.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-navy mb-1.5"
        >
          הודעה <span className="text-gold">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="כתבו את הודעתכם כאן..."
          value={form.message}
          onChange={handleChange}
          className={cn(inputClass, 'resize-none')}
        />
      </div>

      <button
        type="submit"
        disabled={status === 'submitting'}
        className={cn(
          'self-start inline-flex items-center px-8 py-3 bg-gold text-navy text-sm font-semibold rounded-full transition-all duration-200 hover:bg-gold-dark active:scale-95',
          status === 'submitting' && 'opacity-60 cursor-not-allowed'
        )}
      >
        {status === 'submitting' ? 'שולח...' : 'שלח הודעה'}
      </button>

      {status === 'success' && (
        <p className="text-sm text-green-700 bg-green-50 border border-green-200 rounded-xl px-4 py-3">
          ✓ ההודעה נשלחה בהצלחה! נחזור אליכם בהקדם.
        </p>
      )}
    </form>
  )
}
