import { Link } from 'react-router-dom'
import { useLang } from '../i18n/LanguageContext'
import ProcessSketch from './ProcessSketch'
import { ArrowLink, Img, Reveal } from './ui'

const pillarImages = [
  'https://images.unsplash.com/photo-1508009603885-50cf7c579365?w=1200&q=80',
  'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80',
  'https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=1200&q=80',
  'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=1200&q=80',
]

export default function ProcessAndPillars() {
  const { t } = useLang()

  return (
    <section className="grid bg-ink lg:grid-cols-[1.05fr_1fr]">
      {/* design process */}
      <div className="px-6 py-16 md:px-10 md:py-20">
        <Reveal>
          <h2 className="label text-cream/70">{t.process.title}</h2>
        </Reveal>

        <div className="mt-12 grid gap-x-6 gap-y-12 sm:grid-cols-3 xl:grid-cols-5">
          {t.process.steps.map((step, i) => (
            <Reveal key={step.n} delay={i * 80} className="relative">
              <div className="relative">
                <div className="aspect-[5/4] border border-cream/12 p-3 text-cream/45">
                  <ProcessSketch index={i} className="h-full w-full" />
                </div>
                {i < t.process.steps.length - 1 && (
                  <span className="absolute -right-4 top-1/2 hidden text-gold/70 xl:block">→</span>
                )}
              </div>
              <p className="mt-5 text-[11px] tracking-[0.2em] text-gold/80">{step.n}</p>
              <h3 className="mt-2 text-[12px] uppercase tracking-[0.2em] text-cream">
                {step.title}
              </h3>
              <p className="mt-2 max-w-[18ch] text-[12px] font-light leading-relaxed text-cream/55">
                {step.text}
              </p>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-14">
          <ArrowLink to="/approach" className="text-cream/80 hover:text-gold">
            {t.process.cta}
          </ArrowLink>
        </Reveal>
      </div>

      {/* four pillars */}
      <div className="grid grid-cols-2 lg:grid-cols-4">
        {t.features.map((f, i) => (
          <Link key={f.title} to={f.to} className="group relative min-h-[280px] overflow-hidden border-cream/10 lg:min-h-full lg:border-r lg:last:border-r-0">
            <Img
              src={pillarImages[i]}
              alt={f.title}
              className="absolute inset-0 h-full w-full"
              imgClassName="transition-transform duration-[1600ms] ease-[cubic-bezier(.16,1,.3,1)] group-hover:scale-110"
            />
            <span className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/35 to-ink/10 transition-opacity duration-700 group-hover:from-ink/95" />
            <span className="absolute inset-x-0 bottom-0 block p-5 md:p-6">
              <span className="block text-[12px] uppercase tracking-[0.22em] text-cream transition-colors duration-300 group-hover:text-gold">
                {f.title}
              </span>
              <span className="mt-2 block max-w-[20ch] text-[12px] font-light leading-relaxed text-cream/70">
                {f.text}
              </span>
            </span>
          </Link>
        ))}
      </div>
    </section>
  )
}
