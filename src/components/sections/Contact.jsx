import { useState } from 'react'
import { AlertCircle, ArrowUpRight, CheckCircle2, LoaderCircle, Mail, MapPin, MessageSquareText, Phone } from 'lucide-react'

const FORM_ENDPOINT = 'https://formsubmit.co/ajax/j.kerroumi.dev@gmail.com'

export default function Contact() {
  const [status, setStatus] = useState('idle')
  const [feedback, setFeedback] = useState('')

  async function handleSubmit(event) {
    event.preventDefault()
    setStatus('sending')
    setFeedback('')

    const form = event.currentTarget
    const formData = new FormData(form)

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: formData,
      })
      const result = await response.json()

      if (!response.ok || result.success === 'false' || result.success === false) {
        throw new Error(result.message || 'The message could not be sent.')
      }

      form.reset()
      setStatus('success')
      setFeedback('Thanks! Your message has been sent. I’ll get back to you soon.')
    } catch {
      setStatus('error')
      setFeedback('Something went wrong. Please try again or email me directly.')
    }
  }

  return (
    <section className="contact-section" id="contact">
      <div className="contact-heading" data-reveal>
        <span className="section-label">Contact me</span>
        <h2>Let’s build something <span>impactful.</span></h2>
        <p>Have a project in mind, a question, or just want to say hello? Send me a message and I’ll get back to you.</p>
        <div className="contact-methods">
          <a href="mailto:j.kerroumi.dev@gmail.com"><span><Mail /></span><div><small>Email</small><strong>j.kerroumi.dev@gmail.com</strong></div></a>
          <div><span><MapPin /></span><div><small>Location</small><strong>Beni Mellal, Morocco</strong></div></div>
          <a href="tel:+212690533140"><span><Phone /></span><div><small>Phone</small><strong>+212 690 533 140</strong></div></a>
          <div><span><MessageSquareText /></span><div><small>Availability</small><strong>Open to new projects</strong></div></div>
        </div>
      </div>
      <form className="contact-form frame-shadow" onSubmit={handleSubmit}>
        <input className="form-honeypot" type="text" name="_honey" tabIndex="-1" autoComplete="off" aria-hidden="true" />
        <input type="hidden" name="_subject" value="New portfolio contact message" />
        <input type="hidden" name="_template" value="table" />
        <div className="form-row">
          <label><span>Your name</span><input type="text" name="name" placeholder="Your name" autoComplete="name" required disabled={status === 'sending'} /></label>
          <label><span>Your email</span><input type="email" name="email" placeholder="you@example.com" autoComplete="email" required disabled={status === 'sending'} /></label>
        </div>
        <label><span>Subject</span><input type="text" name="subject" placeholder="Project enquiry" required disabled={status === 'sending'} /></label>
        <label><span>Your message</span><textarea name="message" rows="6" placeholder="Tell me a little about your project..." required disabled={status === 'sending'} /></label>
        <button className="button button-yellow" type="submit" disabled={status === 'sending'}>
          {status === 'sending' ? 'Sending...' : 'Send message'}
          {status === 'sending' ? <LoaderCircle className="spin" aria-hidden="true" /> : <ArrowUpRight aria-hidden="true" />}
        </button>
        {feedback && (
          <p className={`form-feedback ${status}`} role="status" aria-live="polite">
            {status === 'success' ? <CheckCircle2 aria-hidden="true" /> : <AlertCircle aria-hidden="true" />}
            {feedback}
          </p>
        )}
      </form>
    </section>
  )
}
