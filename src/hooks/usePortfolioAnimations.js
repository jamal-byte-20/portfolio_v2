import { useLayoutEffect } from 'react'
import { animate } from 'animejs'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default function usePortfolioAnimations(root) {
  useLayoutEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined

    gsap.registerPlugin(ScrollTrigger)
    const context = gsap.context(() => {
      gsap.timeline({ defaults: { ease: 'power3.out' } })
        .from('[data-hero="eyebrow"]', { y: 22, autoAlpha: 0, duration: .55 })
        .from('[data-hero="title"]', { y: 55, autoAlpha: 0, duration: .8 }, '-=.3')
        .from('[data-hero="copy"]', { y: 25, autoAlpha: 0, duration: .55 }, '-=.45')
        .from('[data-hero="actions"]', { y: 25, autoAlpha: 0, duration: .55 }, '-=.38')
        .from('.portrait-panel', { x: 65, rotate: 1.8, autoAlpha: 0, duration: .9 }, '-=.85')

      gsap.to('.portrait-panel', { yPercent: 10, ease: 'none', scrollTrigger: { trigger: '.hero', start: 'top top+=100', end: 'bottom top', scrub: 1.2 } })
      gsap.to(document.querySelector('.geo-cross'), { y: 230, rotate: 220, ease: 'none', scrollTrigger: { trigger: root.current, start: 'top top', end: 'bottom bottom', scrub: 1.8 } })
      gsap.to(document.querySelector('.geo-grid'), { y: -180, ease: 'none', scrollTrigger: { trigger: root.current, start: 'top top', end: 'bottom bottom', scrub: 2 } })
      gsap.to(document.querySelector('.geo-ring'), { y: -260, rotate: -120, ease: 'none', scrollTrigger: { trigger: root.current, start: 'top top', end: 'bottom bottom', scrub: 2.2 } })

      gsap.utils.toArray('.section-label').forEach((label) => {
        gsap.from(label, { x: -35, autoAlpha: 0, duration: .65, ease: 'power3.out', scrollTrigger: { trigger: label, start: 'top 88%', once: true } })
      })
      gsap.utils.toArray('[data-reveal]').forEach((element) => {
        gsap.from(element, { y: 42, autoAlpha: 0, duration: .75, ease: 'power3.out', scrollTrigger: { trigger: element, start: 'top 86%', once: true } })
      })

      gsap.from('.identity-card', { y: 70, rotate: 1.3, autoAlpha: 0, duration: .9, ease: 'power3.out', scrollTrigger: { trigger: '.about-top', start: 'top 75%', once: true } })
      gsap.from('.service-card', { y: 48, rotate: .8, autoAlpha: 0, stagger: .09, duration: .7, ease: 'power3.out', scrollTrigger: { trigger: '.service-grid', start: 'top 82%', once: true } })
      gsap.from('.stack-row', { x: -35, autoAlpha: 0, stagger: .09, duration: .65, ease: 'power2.out', scrollTrigger: { trigger: '.stack-panel', start: 'top 78%', once: true } })
      gsap.from('.project-card', { y: 55, autoAlpha: 0, stagger: .08, duration: .65, ease: 'power3.out', scrollTrigger: { trigger: '.projects-grid', start: 'top 82%', once: true } })
      gsap.from('.approach-panel article', { x: 35, autoAlpha: 0, stagger: .12, duration: .6, ease: 'power2.out', scrollTrigger: { trigger: '.approach-panel', start: 'top 78%', once: true } })
      gsap.from('.contact-form', { x: 65, autoAlpha: 0, duration: .85, ease: 'power3.out', scrollTrigger: { trigger: '.contact-section', start: 'top 72%', once: true } })
      gsap.to('.logo-track', { xPercent: -100, duration: 24, repeat: -1, ease: 'none' })
    }, root)

    const loops = [
      animate('.accent-square', { translateY: [0, -15, 0], rotate: [0, 9, 0], duration: 4200, loop: true, ease: 'inOutSine' }),
      animate('.availability', { rotate: [0, -10, 0], scale: [1, 1.035, 1], duration: 5200, loop: true, ease: 'inOutSine' }),
      animate('.geo-square', { translateY: [0, -20, 0], rotate: [0, 14, 0], duration: 4800, loop: true, ease: 'inOutSine' }),
      animate('.geo-diamond', { translateX: [0, -16, 0], translateY: [0, 14, 0], rotate: [45, 135, 45], duration: 7000, loop: true, ease: 'inOutSine' }),
      animate('.code-visual', { translateY: [0, -7, 0], duration: 5000, loop: true, ease: 'inOutSine' }),
    ]

    return () => {
      context.revert()
      loops.forEach((animation) => animation.cancel())
    }
  }, [root])
}
