import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const projects = [
  { industry: 'Fintech', type: '2024 Q3 Investor Deck', result: 'Increased funding by 30%' },
  { industry: 'Automotive', type: 'Global Product Launch Deck', result: 'Accelerated dealer sign-ups' },
  { industry: 'Management Consulting', type: 'Transformation Strategy Report', result: 'Executive alignment in 3 weeks' },
  { industry: 'Luxury Goods', type: 'Brand Lookbook & Market Entry', result: 'Retail partnerships secured' },
  { industry: 'Enterprise SaaS', type: 'Series B Pitch Deck', result: 'Closed $40M round' },
  { industry: 'Healthcare', type: 'Sales Enablement Toolkit', result: 'Win rate up 18%' },
]

export default function Portfolio() {
  return (
    <div className="bg-slate-900 min-h-screen">
      <Navbar />

      <section className="pt-28 pb-12 bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-white">Portfolio</h1>
          <p className="mt-3 text-slate-300 max-w-2xl">A curated selection of outcomes across industries. Highly visual. Purpose-built.</p>

          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((p, idx) => (
              <div key={idx} className="group rounded-xl border border-white/10 bg-white/5 overflow-hidden">
                <div className="h-40 bg-gradient-to-br from-slate-700 to-slate-800" />
                <div className="p-5">
                  <p className="text-emerald-300 text-xs tracking-wide uppercase">{p.industry}</p>
                  <h3 className="mt-2 text-white font-semibold">{p.type}</h3>
                  <p className="mt-1 text-slate-300 text-sm">{p.result}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-xl border border-white/10 p-6 bg-white/5">
            <blockquote className="text-xl text-white italic">“They translated complexity into clarity — our board called it the best deck they’ve seen.”</blockquote>
            <p className="mt-2 text-slate-400 text-sm">— Global VP, Strategy, Fortune 500</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
