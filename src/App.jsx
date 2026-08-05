import { useEffect, useRef } from 'react'
import { animate } from 'animejs'
import gsap from 'gsap'
import './App.css'

import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Contact from './components/sections/Contact'
import Experience from './components/sections/Experience'
import Projects from './components/sections/Projects'
import Skills from './components/sections/Skills'
import Footer from './components/layout/Footer'
import Header from './components/layout/Header'
import usePortfolioAnimations from './hooks/usePortfolioAnimations'

function App() {
  const portfolio = useRef(null)
  usePortfolioAnimations(portfolio)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined

    const controls = document.querySelectorAll('.button, .menu-button, .nav a, .socials a, .back-top, .project-arrow')
    const cleanups = []

    controls.forEach((control) => {
      const enter = () => gsap.to(control, { y: -3, scale: 1.025, duration: .22, ease: 'back.out(2.5)', overwrite: 'auto' })
      const leave = () => gsap.to(control, { y: 0, scale: 1, rotate: 0, duration: .28, ease: 'power2.out', overwrite: 'auto' })
      const move = (event) => {
        const bounds = control.getBoundingClientRect()
        const tilt = ((event.clientX - bounds.left) / bounds.width - .5) * 2.2
        gsap.to(control, { rotate: tilt, duration: .18, ease: 'power2.out', overwrite: 'auto' })
      }
      const press = () => {
        const animatedPart = control.querySelector('svg') || control
        animate(animatedPart, { scale: [1, .72, 1.18, 1], rotate: [0, -8, 5, 0], duration: 460, ease: 'out(3)' })
        control.classList.remove('just-clicked')
        void control.offsetWidth
        control.classList.add('just-clicked')
      }

      control.addEventListener('pointerenter', enter)
      control.addEventListener('pointerleave', leave)
      control.addEventListener('pointermove', move)
      control.addEventListener('focus', enter)
      control.addEventListener('blur', leave)
      control.addEventListener('click', press)
      cleanups.push(() => {
        control.removeEventListener('pointerenter', enter)
        control.removeEventListener('pointerleave', leave)
        control.removeEventListener('pointermove', move)
        control.removeEventListener('focus', enter)
        control.removeEventListener('blur', leave)
        control.removeEventListener('click', press)
      })
    })

    return () => cleanups.forEach((cleanup) => cleanup())
  }, [])

  return (
    <div className="app">
      <div className="scene-decor" aria-hidden="true">
        <span className="geo geo-cross">+</span>
        <span className="geo geo-square" />
        <span className="geo geo-ring" />
        <span className="geo geo-grid" />
        <span className="geo geo-diamond" />
      </div>
      <Header />
      <main>
        <div className="portfolio-content" ref={portfolio}>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Contact />
          <Footer />
        </div>
      </main>
    </div>
  )
}

export default App
