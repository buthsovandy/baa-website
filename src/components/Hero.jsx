import { useEffect, useState } from 'react'
import { useLang } from '../i18n/LanguageContext'
import { ArrowLink, Img, Ornament } from './ui'

const HERO_IMAGE =
  'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=2400&q=85'

export default function Hero() {
  const { t } = useLang()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const id = requestAnimationFrame(() => setMounted(true))
    return () => cancelAnimationFrame(id)
  }, [])

  // the stagger itself is set per-element with an inline transitionDelay
  const rise = () =>
    `transition-all duration-[1200ms] ease-[cubic-bezier(.16,1,.3,1)] ${
      mounted ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
    }`

  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden bg-ink">
      <Img
        src={HERO_IMAGE}
        alt="BAA project at dusk"
        className="absolute inset-0 h-full w-full"
        imgClassName="scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/70 to-ink/25" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-ink/60" />

      {/* left rail */}
      <div className="absolute bottom-24 left-6 hidden flex-col items-center gap-5 md:flex">
        <span className="label rotate-180 text-cream/50 [writing-mode:vertical-rl]">
          {t.hero.scroll}
        </span>
        <span className="h-20 w-px bg-cream/25" />
      </div>

      <div className="relative mx-auto grid w-full max-w-[1600px] gap-12 px-6 pt-32 md:px-10 lg:grid-cols-[1.4fr_1fr] lg:items-end lg:pt-40">
        <div>
          <h1
            className={`font-serif text-[22vw] font-light leading-[0.82] tracking-[0.02em] text-cream sm:text-[16vw] lg:text-[12rem] ${rise()}`}
            style={{ transitionDelay: '0ms' }}
          >
            BAA
          </h1>

          <div
            className={`mt-8 space-y-2 text-[13px] uppercase leading-relaxed tracking-[0.3em] text-cream/85 md:text-sm ${rise()}`}
            style={{ transitionDelay: '150ms' }}
          >
            <p>{t.hero.line1}</p>
            <p>{t.hero.line2}</p>
            <p>{t.hero.line3}</p>
          </div>

          <div
            className={`mt-12 ${rise()}`}
            style={{ transitionDelay: '300ms' }}
          >
            <ArrowLink to="/projects" className="text-cream hover:text-gold">
              {t.hero.cta}
            </ArrowLink>
          </div>
        </div>

        <div
          className={`relative pb-16 lg:pb-28 ${rise()}`}
          style={{ transitionDelay: '450ms' }}
        >
          <Ornament className="absolute -left-10 top-0 hidden h-28 w-8 text-gold/70 xl:block" />
          <blockquote className="max-w-md text-[15px] font-light leading-relaxed text-cream/90 md:text-base">
            {t.hero.quote}
          </blockquote>
          <div className="mt-6">
            <p className="label text-cream">— {t.hero.founder}</p>
            <p className="label mt-1 text-cream/50">{t.hero.role}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
