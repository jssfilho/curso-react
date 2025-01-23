import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import PrimeiroComponente from './components/PrimeiroComponente/PrimeiroComponente.tsx'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import PrimeiroComponenteMaterial from './components/PrimeiroComponente/PrimeiroComponenteMaterial.tsx'
import PrimeiroComponenteTaiwind from './components/PrimeiroComponente/PrimeiroComponenteTaiwind.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
      <Routes>
          <Route path="/" element={ <App />} />
          <Route path="/primeiro-componente" element={<PrimeiroComponente />} />
          <Route path="/primeiro-componente-material" element={<PrimeiroComponenteMaterial />} />
          <Route path="/primeiro-componente-taiwind" element={<PrimeiroComponenteTaiwind />} />
          <Route path="*" element={<h1>Pagina não encontrada </h1>} />
      </Routes>
    </Router>

  </StrictMode>,
)
