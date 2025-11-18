import Home from './pages/Home'
import Services from './pages/Services'
import Portfolio from './pages/Portfolio'
import { Routes, Route } from 'react-router-dom'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<Services />} />
      <Route path="/portfolio" element={<Portfolio />} />
    </Routes>
  )
}
