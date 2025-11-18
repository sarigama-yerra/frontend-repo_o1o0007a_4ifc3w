export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-slate-400 text-sm">© {new Date().getFullYear()} ParadigmatiX. All rights reserved.</p>
        <p className="text-slate-400 text-sm">Global Strategy • Visual Mastery • Impact</p>
      </div>
    </footer>
  )
}
