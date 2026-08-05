import { stackRows } from '../../data/portfolioData'

export default function TechLogoMarquee() {
  const logos = stackRows.flatMap((row) => row.items)

  return (
    <div className="logo-marquee" aria-label="Technology stack">
      {[0, 1].map((track) => (
        <div className="logo-track" key={track} aria-hidden={track === 1}>
          {logos.map(({ name, icon: Icon, color }) => (
            <span className="moving-logo" key={`${track}-${name}`} title={name} style={{ '--brand-color': color }}><Icon /></span>
          ))}
        </div>
      ))}
    </div>
  )
}
