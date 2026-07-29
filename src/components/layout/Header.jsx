import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const navigation = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export default function Header() {
  const headerRef = useRef(null)


  const glass =
    'border border-white/15 bg-[#100c1d]/55 shadow-[0_16px_45px_rgba(3,2,10,0.28),inset_0_1px_0_rgba(255,255,255,0.12)] backdrop-blur-2xl backdrop-saturate-150'

  return (
    <header
      ref={headerRef}
      className="fixed inset-x-0 top-0 z-50 mx-auto grid w-[min(1180px,calc(100%-40px))] grid-cols-[1fr_auto_1fr] items-center py-6 max-md:w-[calc(100%-28px)] max-md:grid-cols-[1fr_auto] max-md:py-4"
    >
      <a
        data-header-item
        className={`${glass} group justify-self-start flex min-h-13 items-center gap-2.5 rounded-[18px] py-[7px] pr-[17px] pl-2 text-[1.08rem] font-bold tracking-[-0.04em] text-white no-underline transition-colors duration-300 hover:border-white/25 hover:bg-[#171127]/65`}
        href="#home"
        aria-label="Jamal — home"
      >
        <span
          className="relative grid size-[38px] place-items-center overflow-hidden rounded-[13px] border border-white/20 bg-gradient-to-br from-[#7257ff] via-[#9b63f5] to-[#f069aa] text-base font-extrabold text-white shadow-[0_8px_22px_rgba(132,84,255,0.38),inset_0_1px_1px_rgba(255,255,255,0.45)] transition-transform duration-300 group-hover:rotate-3 group-hover:scale-105"
          aria-hidden="true"
        >
          J
        </span>
        <span>jamal</span>
      </a>

      <nav
        data-header-item
        className={`glass-card flex items-center gap-1 rounded-[18px] p-1.5 max-md:col-span-2 max-md:row-start-2 max-md:mt-2 max-md:w-full max-md:justify-center`}
        aria-label="Main navigation"
      >
        {navigation.map((item) => (
          <a
            className="rounded-[13px] px-[17px] py-[11px] text-sm font-semibold text-white/60 no-underline transition duration-200 hover:-translate-y-px hover:bg-white/10 hover:text-white focus-visible:-translate-y-px focus-visible:bg-white/10 focus-visible:text-white focus-visible:outline-none max-md:flex-1 max-md:px-2 max-md:text-center"
            key={item.label}
            href={item.href}
          >
            {item.label}
          </a>
        ))}
      </nav>

      <a
        data-header-item
        className="group relative isolate flex min-h-13 justify-self-end items-center gap-[11px] overflow-hidden rounded-[18px] border border-white/70 bg-white/90 py-2 pr-[9px] pl-5 text-sm font-bold text-[#171223] no-underline shadow-[0_14px_35px_rgba(3,2,10,0.26),inset_0_1px_1px_rgba(255,255,255,0.9)] backdrop-blur-xl transition duration-200 hover:-translate-y-0.5 hover:bg-white hover:shadow-[0_18px_42px_rgba(3,2,10,0.32),0_0_28px_rgba(143,93,255,0.18)] focus-visible:-translate-y-0.5 focus-visible:outline-none"
        href="#contact"
      >
        <span className="absolute -top-8 -left-6 -z-10 h-16 w-24 -rotate-12 rounded-full bg-violet-300/45 blur-xl" />
        <span>Let&apos;s start</span>
        <span
          className="grid size-[37px] place-items-center rounded-xl border border-white/15 bg-[#171223] text-lg text-white shadow-[0_7px_15px_rgba(23,18,35,0.24)] transition-transform duration-200 group-hover:rotate-6"
          aria-hidden="true"
        >
          ↗
        </span>
      </a>
    </header>
  )
}
