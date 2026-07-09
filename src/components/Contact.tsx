import { type FormEvent, useState } from 'react'
import { Reveal } from './Reveal'
import { SectionHead } from './SectionHead'
import { useInView } from '../hooks/useInView'

interface Status {
  text: string
  tone: 'accent' | 'coral'
}

const LINKS = [
  { icon: '✉', label: 'Email', href: 'mailto:albindana3@gmail.com', external: false },
  { icon: '⌥', label: 'GitHub', href: 'https://github.com/Albindana', external: true },
  { icon: 'in', label: 'LinkedIn', href: 'https://www.linkedin.com/in/albin-dana-374812292/', external: true },
  { icon: '⤓', label: 'CV', href: '/Albin_Dana_CV.pdf', external: true, download: true },
]

export function Contact() {
  const [status, setStatus] = useState<Status | null>(null)
  const { ref: formRef, inView: formInView } = useInView<HTMLFormElement>()

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    if (!data.get('name') || !data.get('email') || !data.get('message')) {
      setStatus({ text: '✗ all fields are required', tone: 'coral' })
      return
    }

    setStatus({ text: '⟳ sending...', tone: 'accent' })

    const endpoint = import.meta.env.VITE_CONTACT_FORM_ENDPOINT as string | undefined

    if (endpoint) {
      try {
        const response = await fetch(endpoint, {
          method: 'POST',
          body: new FormData(form),
          headers: { Accept: 'application/json' },
        })

        if (!response.ok) {
          throw new Error('request failed')
        }

        setStatus({ text: "✓ message sent — I'll get back to you soon.", tone: 'accent' })
        form.reset()
      } catch {
        setStatus({ text: '✗ something went wrong — please email me directly.', tone: 'coral' })
      }
      return
    }

    form.submit()
  }

  return (
    <section className="section" id="contact">
      <SectionHead cmd="$ ./contact --reach-out" title="Open a Connection" />
      <div className="contact">
        <form
          ref={formRef}
          className={`contact__form reveal ${formInView ? 'is-visible' : ''}`}
          onSubmit={onSubmit}
          method="POST"
          action="/"
          data-netlify="true"
          name="contact"
          noValidate
        >
          <input type="hidden" name="form-name" value="contact" />
          <input type="text" name="bot-field" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />
          <label>
            name <input type="text" name="name" required placeholder="your name" />
          </label>
          <label>
            email <input type="email" name="email" required placeholder="you@domain.com" />
          </label>
          <label>
            message
            <textarea name="message" rows={4} required placeholder="let's build something..." />
          </label>
          <button type="submit" className="btn btn--solid" data-magnetic>
            Send message
          </button>
          <p
            className="contact__status"
            aria-live="polite"
            style={status ? { color: `var(--${status.tone})` } : undefined}
          >
            {status?.text}
          </p>
        </form>

        <Reveal className="contact__links">
          {LINKS.map((l) => (
            <a
              key={l.label}
              href={l.href}
              data-magnetic
              {...(l.external ? { target: '_blank', rel: 'noopener' } : {})}
              {...('download' in l && l.download ? { download: 'Albin_Dana_CV.pdf' } : {})}
            >
              <span>{l.icon}</span> {l.label}
            </a>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
