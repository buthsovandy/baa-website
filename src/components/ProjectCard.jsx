import { Link } from 'react-router-dom'
import { useLang } from '../i18n/LanguageContext'
import { Img } from './ui'

export default function ProjectCard({ project, dark = false, ratio = 'aspect-[4/3]' }) {
  const { pick } = useLang()

  return (
    <Link to={`/projects/${project.slug}`} className="group block">
      <div className={`relative overflow-hidden ${ratio}`}>
        <Img
          src={project.image}
          alt={pick(project, 'title')}
          className="h-full w-full"
          imgClassName="transition-transform duration-[1400ms] ease-[cubic-bezier(.16,1,.3,1)] group-hover:scale-[1.06]"
        />
        <span className="absolute inset-0 bg-ink/0 transition-colors duration-700 group-hover:bg-ink/25" />
      </div>

      <h3
        className={`mt-5 text-[13px] uppercase tracking-[0.18em] transition-colors duration-300 group-hover:text-gold ${
          dark ? 'text-cream' : 'text-ink'
        }`}
      >
        {pick(project, 'title')}
      </h3>
      <p className={`mt-1.5 text-[13px] font-light ${dark ? 'text-cream/60' : 'text-ink/55'}`}>
        {pick(project, 'location')}
      </p>
      <p
        className={`mt-4 border-t pt-3 text-[10px] uppercase tracking-[0.24em] ${
          dark ? 'border-cream/15 text-cream/50' : 'border-ink/15 text-ink/45'
        }`}
      >
        {pick(project, 'category')}
      </p>
    </Link>
  )
}
