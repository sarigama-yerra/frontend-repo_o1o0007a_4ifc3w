import { Briefcase, Presentation, Mic, BarChart3 } from 'lucide-react'

const services = [
  {
    icon: Presentation,
    title: 'Investor Pitch Decks',
    desc: 'Crystallize your story, validate traction, and persuade with clarity and momentum.'
  },
  {
    icon: Briefcase,
    title: 'Sales Enablement',
    desc: 'Modular decks for discovery, product demos, proposals, and enterprise narratives.'
  },
  {
    icon: Mic,
    title: 'Keynotes & Events',
    desc: 'On-stage storytelling with cinematic visuals, timed builds, and speaker notes.'
  },
  {
    icon: BarChart3,
    title: 'Strategy Reports',
    desc: 'Data-dense slides simplified into decision-ready insights and frameworks.'
  }
]

export default function ServicesTeaser() {
  return (
    <section className="py-24 bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">What We Build</h2>
            <p className="mt-3 text-slate-300 max-w-2xl">Presentation products engineered for persuasion and performance across sales, fundraising, and leadership communications.</p>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-yellow-400 to-amber-300 text-slate-900 flex items-center justify-center">
                <Icon />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white">{title}</h3>
              <p className="mt-2 text-slate-300 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
