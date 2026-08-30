import { Link, useParams } from 'react-router-dom'
import { useLang } from '../i18n/LanguageContext'
import { projects } from '../data/projects'
import { ArrowLink, Img, Reveal } from '../components/ui'

export default function ProjectDetail() {
  const { slug } = useParams()
  const { t, pick } = useLang()

  const index = projects.findIndex((p) => p.slug === slug)
  const project = projects[index]

  if (!project) {
    return (
      <div className="grid min-h-[70vh] place-items-center bg-cream px-6 text-center text-ink">
        <div>
          <h1 className="font-serif text-5xl font-light">404</h1>
          <p className="mt-4 text-ink/60">Project not found.</p>
          <div className="mt-8 flex justify-center">
            <ArrowLink to="/projects" className="text-ink/70 hover:text-ink">
              {t.detail.back}
            </ArrowLink>
          </div>
        </div>
      </div>
    )
  }

  const next = projects[(index + 1) % projects.length]

  const facts = [
    [t.detail.location, pick(project, 'location')],
    [t.detail.category, pick(project, 'category')],
    [t.detail.year, project.year],
    [t.detail.status, project.status],
    [t.detail.area, project.area],
    [t.detail.client, project.client],
  ]

  return (
    <article className="bg-cream text-ink">
      {/* hero */}
      <div className="relative h-[72vh] min-h-[420px] w-full overflow-hidden bg-ink">
        <Img src={project.image} alt={pick(project, 'title')} className="absolute inset-0 h-full w-full" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/45 to-ink/55" />
        <div className="absolute inset-x-0 bottom-0 mx-auto max-w-[1600px] px-6 pb-12 md:px-10 md:pb-16">
          <p className="label text-gold">{pick(project, 'category')}</p>
          <h1 className="mt-4 font-serif text-5xl font-light leading-[1.05] tracking-wide text-cream md:text-7xl">
            {pick(project, 'title')}
          </h1>
          <p className="mt-3 text-[13px] uppercase tracking-[0.22em] text-cream/70">
            {pick(project, 'location')} — {project.year}
          </p>
        </div>
      </div>

      {/* text + facts */}
      <div className="mx-auto grid max-w-[1600px] gap-12 px-6 py-16 md:px-10 md:py-24 lg:grid-cols-[1.4fr_1fr]">
        <Reveal>
          <p className="max-w-2xl font-serif text-2xl font-light leading-relaxed text-ink/85 md:text-[2rem]">
            {pick(project, 'excerpt')}
          </p>
          <div className="mt-10">
            <Link to="/projects" className="label text-ink/50 transition-colors hover:text-ink">
              ← {t.detail.back}
            </Link>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <dl className="divide-y divide-ink/12 border-y border-ink/12">
            {facts.map(([k, v]) => (
              <div key={k} className="flex items-baseline justify-between gap-6 py-4">
                <dt className="label text-ink/45">{k}</dt>
                <dd className="text-right text-[14px] font-light text-ink/85">{v}</dd>
              </div>
            ))}
          </dl>
          <div className="mt-8">
            <ArrowLink href="mailto:info@baa-arch.com" className="text-ink/70 hover:text-ink">
              {t.detail.enquire}
            </ArrowLink>
          </div>
        </Reveal>
      </div>

      {/* gallery */}
      <div className="mx-auto max-w-[1600px] space-y-6 px-6 pb-24 md:px-10">
        {project.gallery?.map((src, i) => (
          <Reveal key={src}>
            <Img
              src={src}
              alt={`${pick(project, 'title')} — ${i + 1}`}
              className={`w-full ${i % 3 === 0 ? 'aspect-[16/9]' : 'aspect-[16/10] md:w-[80%]'}`}
            />
          </Reveal>
        ))}
      </div>

      {/* next project */}
      <Link to={`/projects/${next.slug}`} className="group relative block h-[46vh] min-h-[300px] overflow-hidden bg-ink">
        <Img
          src={next.image}
          alt={pick(next, 'title')}
          className="absolute inset-0 h-full w-full"
          imgClassName="opacity-70 transition-transform duration-[1600ms] ease-[cubic-bezier(.16,1,.3,1)] group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-ink/45" />
        <div className="relative mx-auto flex h-full max-w-[1600px] flex-col justify-center px-6 md:px-10">
          <p className="label text-gold">{t.detail.next}</p>
          <h2 className="mt-4 font-serif text-4xl font-light tracking-wide text-cream transition-colors duration-300 group-hover:text-gold md:text-6xl">
            {pick(next, 'title')}
          </h2>
        </div>
      </Link>
    </article>
  )
}
