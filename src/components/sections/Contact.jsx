import { ArrowUpRight, Mail, MapPin, MessageSquareText, Phone } from 'lucide-react'

export default function Contact() {
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
      <form className="contact-form frame-shadow" action="mailto:j.kerroumi.dev@gmail.com" method="post" encType="text/plain">
        <div className="form-row">
          <label><span>Your name</span><input type="text" name="name" placeholder="Jamal Kerroumi" required /></label>
          <label><span>Your email</span><input type="email" name="email" placeholder="you@example.com" required /></label>
        </div>
        <label><span>Subject</span><input type="text" name="subject" placeholder="Project enquiry" required /></label>
        <label><span>Your message</span><textarea name="message" rows="6" placeholder="Tell me a little about your project..." required /></label>
        <button className="button button-yellow" type="submit">Send message <ArrowUpRight aria-hidden="true" /></button>
      </form>
    </section>
  )
}
