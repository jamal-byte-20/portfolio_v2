import { stackRows } from '../../data/portfolioData'

export default function Skills() {
  return (
    <section className="skills-section" id="skills">
      <div className="section-title-row"><span className="section-label">Tech stack</span><h2>Tools I use to build.</h2></div>
      <div className="stack-panel frame-shadow">
        {stackRows.map((row) => (
          <div className="stack-row" key={row.label}>
            <b>{row.label}</b>
            <div>{row.items.map(({ name, icon: Icon, color }) => (
              <span className="tech-chip" key={name} style={{ '--brand-color': color }}><Icon aria-hidden="true" /><em>{name}</em></span>
            ))}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
