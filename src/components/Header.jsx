import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { useLang } from '../i18n/LanguageContext'

const links = [
  { to: '/projects', key: 'projects' },
  { to: '/studio', key: 'studio' },
  { to: '/approach', key: 'approach' },
  { to: '/research', key: 'research' },
  { to: '/journal', key: 'journal' },
  { to: '/contact', key: 'contact' },
]

export default function Header() {
  const { t, lang, setLang } = useLang()
  const { pathname } = useLocation()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  const onHome = pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => setOpen(false), [pathname])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const solid = scrolled || !onHome || open

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        solid ? 'bg-ink/92 backdrop-blur-md py-4' : 'bg-gradient-to-b from-black/55 to-transparent py-6'
      }`}
    >
      <div className="mx-auto flex max-w-[1600px] items-center justify-between px-6 md:px-10">
        <Link to="/" className="flex items-end gap-4 text-cream">
          <span className="font-serif text-3xl leading-none tracking-[0.06em] md:text-4xl">BAA</span>
          <span className="hidden text-[9px] uppercase leading-[1.5] tracking-[0.22em] text-cream/65 sm:block">
            Bunseang Architects
            <br />&amp; Associates
          </span>
        </Link>

        <nav className="hidden items-center gap-9 lg:flex">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                `label transition-colors duration-300 hover:text-gold ${
                  isActive ? 'text-gold' : 'text-cream/85'
                }`
              }
            >
              {t.nav[l.key]}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-6">
          <div className="label flex items-center gap-1.5 text-cream/70">
            <button
              onClick={() => setLang('en')}
              className={`transition-colors duration-300 hover:text-gold ${
                lang === 'en' ? 'text-cream' : ''
              }`}
            >
              EN
            </button>
            <span className="text-cream/30">/</span>
            <button
              onClick={() => setLang('kh')}
              className={`transition-colors duration-300 hover:text-gold ${
                lang === 'kh' ? 'text-cream' : ''
              }`}
            >
              KH
            </button>
          </div>

          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
            aria-expanded={open}
            className="flex h-6 w-7 flex-col justify-center gap-[6px]"
          >
            <span
              className={`block h-px w-full bg-cream transition-transform duration-300 ${
                open ? 'translate-y-[3.5px] rotate-45' : ''
              }`}
            />
            <span
              className={`block h-px w-full bg-cream transition-transform duration-300 ${
                open ? '-translate-y-[3.5px] -rotate-45' : ''
              }`}
            />
          </button>
        </div>
      </div>

      {/* full-screen overlay menu */}
      <div
        className={`fixed inset-0 top-0 -z-10 bg-ink transition-opacity duration-500 ${
          open ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        }`}
      >
        <div className="mx-auto flex h-full max-w-[1600px] flex-col justify-center px-6 md:px-10">
          {links.map((l, i) => (
            <Link
              key={l.to}
              to={l.to}
              className="group flex items-baseline gap-6 border-b border-cream/10 py-5 md:py-7"
              style={{ transitionDelay: `${i * 40}ms` }}
            >
              <span className="label w-8 text-gold/70">{String(i + 1).padStart(2, '0')}</span>
              <span className="font-serif text-4xl font-light tracking-wide text-cream transition-colors duration-300 group-hover:text-gold md:text-6xl">
                {t.nav[l.key]}
              </span>
            </Link>
          ))}
          <p className="label mt-10 text-cream/45">
            info@baa-arch.com &nbsp;·&nbsp; +855 23 223 998
          </p>
        </div>
      </div>
    </header>
  )
}
