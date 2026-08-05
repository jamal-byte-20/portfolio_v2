import { approach } from '../../data/portfolioData'

export default function Experience() {
  return (
    <section className="experience-section" id="experience">
      <div className="experience-copy" data-reveal>
        <span className="section-label">How I work</span>
        <h2>Thoughtful process.<br /><span>Reliable results.</span></h2>
        <p>My development approach keeps each project clear, responsive, maintainable, and ready to grow.</p>
      </div>
      <div className="approach-panel frame-shadow">
        {approach.map(({ title, text, icon: Icon }) => (
          <article key={title}><span><Icon aria-hidden="true" /></span><h3>{title}</h3><p>{text}</p></article>
        ))}
      </div>
    </section>
  )
}
