import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const services = [
  {
    title: 'Investor Pitch Decks',
    desc: 'Compelling narratives, sharp visuals, and data clarity to inspire confidence and investment.'
  },
  {
    title: 'Sales Enablement Presentations',
    desc: 'Persuasive storylines and modular slides to accelerate pipeline and close deals faster.'
  },
  {
    title: 'Keynote Speaker Decks',
    desc: 'Stage-ready, cinematic slides that elevate your message and captivate audiences.'
  },
  {
    title: 'Internal Strategy Reports',
    desc: 'Board-level polish and precision for complex initiatives, transformations, and updates.'
  },
]

const steps = [
  'Strategy',
  'Content Refinement',
  'Design',
  'Revisions',
  'Delivery'
]

export default function Services() {
  return (
    <div className="bg-slate-900 min-h-screen">
      <Navbar />

      <section className="pt-28 pb-12 bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-white">Services</h1>
          <p className="mt-3 text-slate-300 max-w-2xl">We design presentations that persuade — crafted for global audiences across tech, finance, consulting, and luxury.</p>

          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s) => (
              <div key={s.title} className="rounded-xl border border-white/10 bg-white/5 p-6">
                <h3 className="text-xl font-semibold text-white">{s.title}</h3>
                <p className="mt-2 text-slate-300 text-sm">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white">Process</h2>
          <div className="mt-6 flex flex-wrap gap-4">
            {steps.map((step, i) => (
              <div key={step} className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-emerald-400 text-slate-900 font-bold flex items-center justify-center">{i+1}</div>
                <span className="text-slate-200">{step}</span>
                {i < steps.length - 1 && <span className="text-slate-500">→</span>}
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-xl border border-white/10 p-6 bg-white/5">
            <h3 className="text-white font-semibold">Pricing & Engagement</h3>
            <p className="mt-2 text-slate-300 text-sm">Flexible models tailored to your needs: Per-Project, Retainer, or Template Design. Get in touch to scope your engagement.</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
