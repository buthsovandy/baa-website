import { useLang } from '../i18n/LanguageContext'
import { ArrowLink, Ornament } from '../components/ui'

export default function ComingSoon({ titleKey }) {
  const { t } = useLang()

  return (
    <section className="grid min-h-[80vh] place-items-center bg-ink px-6 pt-24 text-center">
      <div>
        <Ornament className="mx-auto h-24 w-8 text-gold/60" />
        <p className="label mt-8 text-gold">{t.nav[titleKey]}</p>
        <h1 className="mt-4 font-serif text-5xl font-light tracking-wide text-cream md:text-7xl">
          {t.soon.title}
        </h1>
        <p className="mx-auto mt-6 max-w-md text-[15px] font-light leading-relaxed text-cream/60">
          {t.soon.text}
        </p>
        <div className="mt-10 flex justify-center">
          <ArrowLink to="/" className="text-cream/80 hover:text-gold">
            {t.soon.back}
          </ArrowLink>
        </div>
      </div>
    </section>
  )
}
