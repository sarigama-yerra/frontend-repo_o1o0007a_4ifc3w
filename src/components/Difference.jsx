import { Globe2, Palette, TrendingUp } from 'lucide-react'

const items = [
  {
    icon: Globe2,
    title: 'Global Strategy',
    desc: 'Understanding international communication standards and audience nuance.'
  },
  {
    icon: Palette,
    title: 'Visual Mastery',
    desc: 'World-class design principles applied to every slide.'
  },
  {
    icon: TrendingUp,
    title: 'Impact & Conversion',
    desc: 'Built not just to inform, but to close deals.'
  }
]

export default function Difference() {
  return (
    <section className="relative py-24 bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">The ParadigmatiX Difference</h2>
        <p className="mt-3 text-slate-300 max-w-2xl">Design meets strategy. Every detail is intentional and every slide moves your audience to act.</p>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-emerald-400 to-cyan-400 flex items-center justify-center text-slate-900">
                <Icon />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-white">{title}</h3>
              <p className="mt-2 text-slate-300">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
