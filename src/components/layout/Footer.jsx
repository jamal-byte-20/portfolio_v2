import { ArrowUpRight } from 'lucide-react'
import { FaLinkedin } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { SiGithub } from 'react-icons/si'

export default function Footer() {
  return (
    <footer className="site-footer frame-shadow" data-reveal>
      <a className="footer-brand" href="#home">JK<span>.</span></a>
      <p>Full-stack developer building fast, responsive, and scalable web experiences.</p>
      <div className="socials">
        <a href="https://github.com/jamal-byte-20" target="_blank" rel="noreferrer" aria-label="GitHub"><SiGithub aria-hidden="true" /></a>
        <a href="https://linkedin.com" aria-label="LinkedIn"><FaLinkedin aria-hidden="true" /></a>
        <a href="mailto:j.kerroumi.dev@gmail.com" aria-label="Email"><MdEmail aria-hidden="true" /></a>
      </div>
      <small>© {new Date().getFullYear()} Jamal Kerroumi. All rights reserved.</small>
      <a className="back-top" href="#home">Back to top <ArrowUpRight aria-hidden="true" /></a>
    </footer>
  )
}
