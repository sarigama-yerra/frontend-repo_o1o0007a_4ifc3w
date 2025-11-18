export default function Logos() {
  const logos = ['Global Tech Co.', 'International Finance', 'Luxury Retail Group', 'Apex Consulting', 'Nova Systems', 'Vertex Capital']

  return (
    <section className="py-16 bg-slate-950/80 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-center text-slate-400">Trusted by the world's most demanding brands</p>
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 items-center">
          {logos.map((name) => (
            <div key={name} className="h-10 flex items-center justify-center rounded bg-white/5 text-slate-300 text-sm tracking-wide uppercase">
              {name}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
