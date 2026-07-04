import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import App from './App.jsx'
import './styles/global.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* HashRouter usa # en la URL: funciona perfecto en GitHub Pages
        sin necesidad de configurar redirecciones 404. */}
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>,
)
