import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  const navLink = (to, label) => (
    <Link
      to={to}
      onClick={() => setOpen(false)}
      className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
        location.pathname === to
          ? 'text-white bg-white/10'
          : 'text-slate-200 hover:text-white hover:bg-white/10'
      }`}
    >
      {label}
    </Link>
  )

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-slate-900/60 bg-slate-900/80 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-md bg-gradient-to-tr from-blue-700 to-blue-500" />
          <span className="text-white font-semibold tracking-tight">ParadigmatiX</span>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {navLink('/', 'Home')}
          {navLink('/services', 'Services')}
          {navLink('/portfolio', 'Portfolio')}
        </nav>

        <div className="hidden md:block">
          <Link
            to="/services"
            className="px-4 py-2 rounded-md bg-yellow-400 text-slate-900 font-semibold hover:bg-yellow-300 transition-colors"
          >
            Start Your Project
          </Link>
        </div>

        <button
          className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-md text-slate-2 00 hover:text-white hover:bg-white/10"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-top border-white/10 bg-slate-900/80 backdrop-blur">
          <div className="px-4 py-3 flex flex-col gap-2">
            {navLink('/', 'Home')}
            {navLink('/services', 'Services')}
            {navLink('/portfolio', 'Portfolio')}
            <Link
              to="/services"
              onClick={() => setOpen(false)}
              className="mt-2 px-4 py-2 rounded-md bg-yellow-400 text-slate-900 font-semibold text-center hover:bg-yellow-300"
            >
              Start Your Project
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
