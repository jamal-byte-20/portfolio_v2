import { useRef } from 'react'
import { ArrowDownToLine, ArrowUpRight, Smile } from 'lucide-react'

export default function Hero() {
  const portrait = useRef(null)

  const movePortrait = (event) => {
    if (!portrait.current || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const bounds = event.currentTarget.getBoundingClientRect()
    const x = (event.clientX - bounds.left) / bounds.width - .5
    const y = (event.clientY - bounds.top) / bounds.height - .5
    portrait.current.style.transform = `translate3d(${x * 13}px, ${y * 9}px, 0)`
  }

  return (
    <section className="hero" id="home">
      <div className="dot-field" aria-hidden="true" />
      <div className="hero-copy">
        <div className="eyebrow" data-hero="eyebrow">Jamal Kerroumi · Full stack developer</div>
        <h1 data-hero="title">I build <span className="violet-text">complete</span><br />web solutions<br />that <span className="highlight">work.</span></h1>
        <p className="hero-intro" data-hero="copy">From responsive interfaces to robust backends,<br />I turn ideas into fast, useful web experiences.</p>
        <div className="hero-actions" data-hero="actions">
          <a className="button button-yellow" href="#projects">View my work <ArrowUpRight aria-hidden="true" /></a>
          <a className="button button-light" href="/Jamal-Kerroumi-CV.pdf" download>Download CV <ArrowDownToLine aria-hidden="true" /></a>
        </div>
      </div>
      <div className="portrait-panel frame-shadow" onMouseMove={movePortrait} onMouseLeave={() => { if (portrait.current) portrait.current.style.transform = '' }}>
        <div className="corner-x" aria-hidden="true">×</div><div className="accent-square" aria-hidden="true" /><div className="panel-dots" aria-hidden="true" />
        <img ref={portrait} src="/jamal-portrait.png" alt="Jamal Kerroumi" />
        <div className="availability" aria-label="Available for freelance work"><span>Available for</span><b><Smile aria-hidden="true" /></b><span>freelance</span></div>
      </div>
    </section>
  )
}
