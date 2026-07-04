import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'
import Home from './pages/Home.jsx'
import Libro from './pages/Libro.jsx'
import TemaIndice from './pages/TemaIndice.jsx'
import TemaPagina from './pages/TemaPagina.jsx'
import Actividades from './pages/Actividades.jsx'
import ActividadDetalle from './pages/ActividadDetalle.jsx'
import NotFound from './pages/NotFound.jsx'

export default function App() {
  return (
    <div className="app">
      <ScrollToTop />
      <Navbar />
      <main className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/libro" element={<Libro />} />
          <Route path="/libro/:id" element={<TemaIndice />} />
          <Route path="/libro/:id/p/:num" element={<TemaPagina />} />
          <Route path="/actividades" element={<Actividades />} />
          <Route path="/actividad/:id" element={<ActividadDetalle />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
