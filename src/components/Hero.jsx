import Spline from '@splinetool/react-spline'
import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] flex items-center">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/cEecEwR6Ehj4iT8T/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/40 via-slate-900/70 to-slate-900 pointer-events-none" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-28">
        <div className="max-w-2xl">
          <p className="text-yellow-300 font-semibold tracking-wide uppercase">ParadigmatiX</p>
          <h1 className="mt-4 text-4xl sm:text-6xl font-bold text-white leading-tight">
            Stop Presenting. Start Persuading.
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-slate-200 max-w-xl">
            ParadigmatiX transforms complex international narratives into visually stunning, high-impact presentations for leading global brands.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <Link to="/portfolio" className="px-5 py-3 rounded-md bg-white text-slate-900 font-semibold hover:bg-slate-100 transition">
              View Our Portfolio
            </Link>
            <Link to="/services" className="px-5 py-3 rounded-md bg-yellow-400 text-slate-900 font-semibold hover:bg-yellow-300 transition">
              Start Your Project
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
