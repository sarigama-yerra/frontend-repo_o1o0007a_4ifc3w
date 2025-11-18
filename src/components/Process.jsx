import { CheckCircle2 } from 'lucide-react'

const steps = [
  'Discovery & Strategy',
  'Content Architecture',
  'Design Exploration',
  'Iteration & Polish',
  'Delivery & Enablement'
]

export default function Process() {
  return (
    <section className="py-24 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">How We Work</h2>
          <p className="mt-3 text-slate-300">A simple, collaborative arc to move from idea to persuasive presentation—on time and on brand.</p>
        </div>

        <div className="mt-10 grid gap-4">
          {steps.map((s, i) => (
            <div key={s} className="relative overflow-hidden rounded-xl border border-white/10 bg-slate-900/60">
              <div className="absolute inset-y-0 left-0 w-1 bg-yellow-400" />
              <div className="p-5 sm:p-6 flex items-center gap-4">
                <div className="w-9 h-9 rounded-full bg-yellow-400/20 text-yellow-300 flex items-center justify-center">
                  <CheckCircle2 />
                </div>
                <div className="text-white/90 font-medium">{i + 1}. {s}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
