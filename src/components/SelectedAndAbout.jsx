import { useLang } from '../i18n/LanguageContext'
import { projects } from '../data/projects'
import ProjectCard from './ProjectCard'
import { ArrowLink, Img, Reveal } from './ui'

const RELIEF_IMAGE =
  'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=1600&q=85'

export default function SelectedAndAbout() {
  const { t } = useLang()
  const featured = projects.filter((p) => p.featured).slice(0, 4)

  return (
    <section className="grid bg-cream text-ink lg:grid-cols-[1.55fr_1fr]">
      {/* selected projects */}
      <div className="px-6 py-16 md:px-10 md:py-20">
        <Reveal className="flex items-center justify-between gap-6">
          <h2 className="label text-ink/70">{t.selected.title}</h2>
          <ArrowLink to="/projects" className="text-ink/70 hover:text-ink">
            {t.selected.viewAll}
          </ArrowLink>
        </Reveal>

        <div className="mt-10 grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
          {featured.map((p, i) => (
            <Reveal key={p.slug} delay={i * 90}>
              <ProjectCard project={p} />
            </Reveal>
          ))}
        </div>
      </div>

      {/* who we are */}
      <div className="relative flex items-center overflow-hidden bg-cream-deep px-6 py-16 md:px-12 md:py-20">
        <Img
          src={RELIEF_IMAGE}
          alt="Khmer bas-relief"
          className="absolute inset-0 h-full w-full"
          imgClassName="opacity-45 grayscale-[35%]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-cream-deep via-cream-deep/80 to-cream-deep/10" />

        <Reveal className="relative max-w-sm">
          <p className="label flex items-center gap-4 text-ink/60">
            {t.who.eyebrow}
            <span className="h-px w-10 bg-ink/30" />
          </p>

          <h2 className="mt-8 font-serif text-5xl font-light leading-[1.12] tracking-wide text-ink md:text-6xl">
            {t.who.words.map((w) => (
              <span key={w} className="block">
                {w}
              </span>
            ))}
          </h2>

          <p className="mt-8 max-w-xs text-[15px] font-light leading-relaxed text-ink/70">
            {t.who.body}
          </p>

          <div className="mt-10">
            <ArrowLink to="/studio" className="text-ink/75 hover:text-ink">
              {t.who.cta}
            </ArrowLink>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
