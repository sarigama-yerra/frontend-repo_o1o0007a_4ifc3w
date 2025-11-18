import { useEffect, useRef, useState } from 'react'

const slides = [
  {
    title: 'Dark-mode Financial Report',
    img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Tech Startup Pitch',
    img: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Luxury Brand Lookbook',
    img: 'https://images.unsplash.com/photo-1514894780887-121968d00567?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Clean Strategy Report',
    img: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1200&auto=format&fit=crop',
  },
]

export default function PortfolioCarousel() {
  const [index, setIndex] = useState(0)
  const intervalRef = useRef(null)

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length)
    }, 3000)
    return () => clearInterval(intervalRef.current)
  }, [])

  return (
    <section className="py-24 bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Visual Proof</h2>
            <p className="mt-3 text-slate-300">A snapshot of distinct styles tailored to industry, audience, and outcome.</p>
          </div>

          <div className="relative rounded-xl overflow-hidden border border-white/10 bg-slate-900">
            <div className="aspect-[16/10]">
              {slides.map((s, i) => (
                <img
                  key={s.title}
                  src={s.img}
                  alt={s.title}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${i === index ? 'opacity-100' : 'opacity-0'}`}
                />
              ))}
            </div>
            <div className="absolute bottom-3 left-3 right-3 flex justify-center gap-2">
              {slides.map((_, i) => (
                <button
                  key={i}
                  aria-label={`Go to slide ${i + 1}`}
                  onClick={() => setIndex(i)}
                  className={`w-2.5 h-2.5 rounded-full ${i === index ? 'bg-white' : 'bg-white/40'}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
