import { useMemo, useState } from 'react'
import { useLang } from '../i18n/LanguageContext'
import { projects } from '../data/projects'
import ProjectCard from '../components/ProjectCard'
import { Reveal } from '../components/ui'

export default function Projects() {
  const { t, lang, pick } = useLang()
  const [filter, setFilter] = useState('All')

  const categories = useMemo(
    () => ['All', ...Array.from(new Set(projects.map((p) => p.category)))],
    [],
  )

  const shown = filter === 'All' ? projects : projects.filter((p) => p.category === filter)

  const labelFor = (c) => {
    if (c === 'All') return t.projectsPage.all
    const match = projects.find((p) => p.category === c)
    return lang === 'kh' && match ? pick(match, 'category') : c
  }

  return (
    <div className="bg-cream text-ink">
      <header className="mx-auto max-w-[1600px] px-6 pb-10 pt-36 md:px-10 md:pt-44">
        <Reveal>
          <h1 className="font-serif text-6xl font-light leading-none tracking-wide md:text-8xl">
            {t.projectsPage.title}
          </h1>
          <p className="mt-6 max-w-xl text-[15px] font-light leading-relaxed text-ink/65">
            {t.projectsPage.intro}
          </p>
        </Reveal>

        <div className="mt-12 flex flex-wrap items-center gap-x-7 gap-y-3 border-t border-ink/15 pt-6">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`label transition-colors duration-300 hover:text-ink ${
                filter === c ? 'text-ink' : 'text-ink/45'
              }`}
            >
              {labelFor(c)}
            </button>
          ))}
          <span className="label ml-auto text-ink/35">{t.projectsPage.count(shown.length)}</span>
        </div>
      </header>

      <div className="mx-auto max-w-[1600px] px-6 pb-24 md:px-10">
        {shown.length === 0 ? (
          <p className="py-20 text-center text-ink/50">{t.projectsPage.empty}</p>
        ) : (
          <div className="grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
            {shown.map((p, i) => (
              <Reveal key={p.slug} delay={(i % 3) * 90}>
                <ProjectCard project={p} ratio="aspect-[4/3]" />
              </Reveal>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
