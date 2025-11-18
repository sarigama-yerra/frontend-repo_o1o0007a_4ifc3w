import { Link } from 'react-router-dom'

export default function CTA() {
  return (
    <section className="py-24 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-8 sm:p-12 text-center">
          <h3 className="text-3xl sm:text-4xl font-bold text-white">Ready to elevate your next presentation?</h3>
          <p className="mt-3 text-slate-300 max-w-2xl mx-auto">Let’s craft a persuasive deck that moves investors, customers, and stakeholders to action.</p>
          <div className="mt-8 flex justify-center gap-3">
            <Link to="/services" className="px-6 py-3 rounded-md bg-yellow-400 text-slate-900 font-semibold hover:bg-yellow-300 transition">Start Your Project</Link>
            <Link to="/portfolio" className="px-6 py-3 rounded-md bg-white/10 text-white font-semibold hover:bg-white/20 transition">See Our Work</Link>
          </div>
        </div>
      </div>
    </section>
  )
}
