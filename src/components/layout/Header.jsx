import { useEffect, useState } from 'react'
import { ArrowUpRight, Menu, X } from 'lucide-react'

const links = ['home', 'about', 'skills', 'projects', 'experience', 'contact']

export default function Header() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('home')

  useEffect(() => {
    const sections = links
      .map((link) => document.getElementById(link))
      .filter(Boolean)

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)

        if (visible[0]) setActive(visible[0].target.id)
      },
      { rootMargin: '-25% 0px -55% 0px', threshold: [0, 0.1, 0.3] },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  return (
    <header className="site-header frame-shadow">
      <a className="brand" href="#home" aria-label="Jamal Kerroumi home">JK<span>.</span></a>
      <button
        className="menu-button"
        type="button"
        aria-label="Toggle navigation"
        aria-expanded={open}
        onClick={() => setOpen(!open)}
      >
        {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
      </button>
      <nav className={open ? 'nav is-open' : 'nav'} aria-label="Main navigation">
        {links.map((link) => (
          <a
            key={link}
            className={active === link ? 'active' : ''}
            href={`#${link}`}
            onClick={() => {
              setActive(link)
              setOpen(false)
            }}
          >
            {link}
          </a>
        ))}
      </nav>
      <a className="button button-yellow header-cta" href="#contact">Let's talk <ArrowUpRight aria-hidden="true" /></a>
    </header>
  )
}
