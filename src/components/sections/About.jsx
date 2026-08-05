import { ArrowDownToLine, CalendarDays, CodeXml, Globe2, Mail, MapPin, Phone } from 'lucide-react'
import { services } from '../../data/portfolioData'
import TechLogoMarquee from '../ui/TechLogoMarquee'

export default function About() {
  return (
    <section className="about-section" id="about">
      <TechLogoMarquee />
      <div className="about-top">
        <div className="about-intro" data-reveal>
          <span className="section-label">About me</span>
          <h2>Building modern web experiences from <span>front-end</span> to <span>back-end.</span></h2>
          <p>I’m Jamal Kerroumi, a full-stack developer who enjoys turning ideas into fast, responsive, and scalable web applications. I focus on clean interfaces, solid architecture, and efficient development workflows.</p>
          <a className="button button-light" href="/Jamal-Kerroumi-CV.pdf" download>Download resume <ArrowDownToLine aria-hidden="true" /></a>
        </div>
        <aside className="identity-card frame-shadow">
          <div className="code-visual" aria-hidden="true">
            <span className="window-dots"><i /><i /><i /></span><CodeXml /><div><b /><b /><b /></div>
          </div>
          <div className="identity-details">
            <h3>Jamal Kerroumi</h3><strong>Full Stack Developer</strong>
            <ul>
              <li><MapPin /> Beni Mellal, Morocco</li>
              <li><Mail /> j.kerroumi.dev@gmail.com</li>
              <li><Phone /> +212 690 533 140</li>
              <li><Globe2 /> jamalkerroumi.dev</li>
              <li><CalendarDays /> Available for new projects</li>
            </ul>
          </div>
        </aside>
      </div>
      <div className="about-block">
        <span className="section-label">What I do</span>
        <div className="service-grid">
          {services.map(({ title, text, icon: Icon }) => (
            <article className="service-card frame-shadow" key={title}>
              <span className="service-icon"><Icon aria-hidden="true" /></span>
              <div><h3>{title}</h3><p>{text}</p></div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
