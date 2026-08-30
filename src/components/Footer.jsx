import { Link } from 'react-router-dom'
import { useLang } from '../i18n/LanguageContext'

const socials = [
  { label: 'Instagram', href: 'https://instagram.com' },
  { label: 'Facebook', href: 'https://facebook.com' },
  { label: 'LinkedIn', href: 'https://linkedin.com' },
]

export default function Footer() {
  const { t } = useLang()

  return (
    <footer className="border-t border-cream/10 bg-ink">
      <div className="mx-auto flex max-w-[1600px] flex-col gap-8 px-6 py-10 md:px-10 lg:flex-row lg:items-center lg:justify-between lg:gap-10">
        <Link to="/" className="flex items-end gap-4">
          <span className="font-serif text-3xl leading-none tracking-[0.06em] text-cream">BAA</span>
          <span className="text-[10px] uppercase leading-[1.6] tracking-[0.16em] text-cream/60">
            {t.footer.name}
            <br />
            {t.footer.city}
          </span>
        </Link>

        <div className="flex flex-wrap items-center gap-x-10 gap-y-4">
          <a href="mailto:info@baa-arch.com" className="label link-underline text-cream/75 hover:text-gold">
            INFO@BAA-ARCH.COM
          </a>
          <a href="tel:+85523223998" className="label link-underline text-cream/75 hover:text-gold">
            +855 23 223 998
          </a>
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              className="label link-underline text-cream/75 hover:text-gold"
            >
              {s.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-8">
          <p className="text-[11px] tracking-[0.12em] text-cream/45">{t.footer.rights}</p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            aria-label={t.footer.top}
            className="grid h-10 w-10 place-items-center border border-cream/20 text-cream/70 transition-colors duration-300 hover:border-gold hover:text-gold"
          >
            ↑
          </button>
        </div>
      </div>
    </footer>
  )
}
