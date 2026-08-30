import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { dictionary } from './dictionary'

const LanguageContext = createContext(null)

const STORAGE_KEY = 'baa-lang'

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    try {
      return localStorage.getItem(STORAGE_KEY) === 'kh' ? 'kh' : 'en'
    } catch {
      return 'en'
    }
  })

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, lang)
    } catch {
      /* storage may be blocked — the toggle still works for this visit */
    }
    document.documentElement.lang = lang === 'kh' ? 'km' : 'en'
  }, [lang])

  const value = useMemo(
    () => ({
      lang,
      setLang,
      toggle: () => setLang((l) => (l === 'en' ? 'kh' : 'en')),
      t: dictionary[lang],
      // pick the Khmer field of a data record when the Khmer UI is on
      pick: (record, field) =>
        (lang === 'kh' && record[`${field}Kh`]) || record[field],
    }),
    [lang],
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLang() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLang must be used inside <LanguageProvider>')
  return ctx
}
