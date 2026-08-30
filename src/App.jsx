import { useEffect } from 'react'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import { LanguageProvider, useLang } from './i18n/LanguageContext'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Projects from './pages/Projects'
import ProjectDetail from './pages/ProjectDetail'
import ComingSoon from './pages/ComingSoon'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' })
  }, [pathname])
  return null
}

function Shell() {
  const { lang } = useLang()

  return (
    <div className={`min-h-screen ${lang === 'kh' ? 'font-khmer' : ''}`}>
      <ScrollToTop />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:slug" element={<ProjectDetail />} />
          <Route path="/studio" element={<ComingSoon titleKey="studio" />} />
          <Route path="/approach" element={<ComingSoon titleKey="approach" />} />
          <Route path="/research" element={<ComingSoon titleKey="research" />} />
          <Route path="/journal" element={<ComingSoon titleKey="journal" />} />
          <Route path="/contact" element={<ComingSoon titleKey="contact" />} />
          <Route path="*" element={<ComingSoon titleKey="projects" />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <Shell />
      </BrowserRouter>
    </LanguageProvider>
  )
}
