import { Routes, Route, Navigate } from 'react-router-dom'
import { CourseProvider } from './context/CourseContext.jsx'
import { primerPasoId } from './data/curso.js'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'
import Curso from './pages/Curso.jsx'
import NotFound from './pages/NotFound.jsx'

export default function App() {
  return (
    <CourseProvider>
      <div className="app">
        <ScrollToTop />
        <Navbar />
        <main className="main">
          <Routes>
            <Route path="/" element={<Navigate to={`/curso/${primerPasoId}`} replace />} />
            <Route path="/curso" element={<Navigate to={`/curso/${primerPasoId}`} replace />} />
            <Route path="/curso/:pasoId" element={<Curso />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </CourseProvider>
  )
}
