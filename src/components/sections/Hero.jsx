import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import signalVideo from '../../assets/images/signal.mp4'
import GrediantVideo from '../../assets/images/Scene.mp4'

gsap.registerPlugin(ScrollTrigger)

export default function Hero() {
  const heroRef = useRef(null)
  const videoRef = useRef(null)
  const contentRef = useRef(null)


  return (
    <section
      ref={heroRef}
      id="home"
      className="relative isolate flex min-h-screen items-end overflow-hidden px-5 pb-10 pt-32 sm:px-8 sm:pb-14 lg:items-center lg:px-14 lg:pb-0 lg:pt-24 bg-white"
    >
      <video
        ref={videoRef}
        className="absolute inset-0 -z-30 size-full object-fill"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden="true"
      >
        <source src={GrediantVideo} type="video/mp4" />
      </video>

      <div className="absolute inset-0 -z-20" />
      <div className="absolute inset-0 -z-20" />
      <div className="absolute -bottom-24 -left-16 -z-10 size-80 rounded-full  blur-3xl" />

      <div
        ref={contentRef}
        className="mx-auto w-full max-w-[1180px] will-change-transform"
      >
        <div className="max-w-3xl">
          <div
            data-hero-reveal
            className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-white/25  px-4 py-2 text-sm font-medium text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.18)] backdrop-blur-xl"
          >
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-300 opacity-70" />
              <span className="relative inline-flex size-2 rounded-full bg-emerald-300" />
            </span>
            Available for new opportunities
          </div>

          <p
            data-hero-reveal
            className="mb-3 text-sm font-bold uppercase tracking-[0.24em] text-violet-200 sm:text-base"
          >
            Full-stack developer
          </p>

          <h1
            data-hero-reveal
            className="max-w-3xl text-[clamp(3.3rem,8vw,7.5rem)] font-black leading-[0.86] tracking-[-0.065em] text-white"
          >
            Jamal
            <span className="block bg-gradient-to-r from-white via-violet-200 to-fuchsia-300 bg-clip-text text-transparent">
              Kerroumi.
            </span>
          </h1>

          <p
            data-hero-reveal
            className="mt-7 max-w-xl text-base leading-7 text-white/70 sm:text-lg sm:leading-8"
          >
            I build thoughtful digital products from polished interfaces to
            reliable back-end systems.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <a
              data-hero-button
              href="/jamal-kerroumi-cv.pdf"
              download
              className="group inline-flex min-h-14 items-center gap-3 rounded-2xl border border-white/80 bg-white px-5 font-bold text-[#171223] shadow-[0_14px_35px_rgba(0,0,0,0.2)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(0,0,0,0.28)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              Download CV
              <span className="grid size-8 place-items-center rounded-[10px] bg-[#171223] text-white transition-transform duration-300 group-hover:translate-y-0.5">
                ↓
              </span>
            </a>

            <a
              data-hero-button
              href="#contact"
              className="group inline-flex min-h-14 items-center gap-3 rounded-2xl border border-white/30 bg-white/10 px-5 font-bold text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.2)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:bg-white/20 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              Contact me
              <span className="text-xl transition-transform duration-300 group-hover:translate-x-1">
                ↗
              </span>
            </a>
          </div>
        </div>
      </div>

      <div className="absolute right-8 bottom-8 hidden items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-white/55 lg:flex">
        <span className="h-px w-12 bg-white/35" />
        Scroll to explore
      </div>
    </section>
  )
}
