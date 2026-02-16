import { Link } from 'react-router-dom'
import { ventures as venturesData } from '@/data/projects.js'

export default function Ventures(){
  return (
    <section className="container py-16">
      <h1 className="text-3xl font-bold mb-4">Ventures</h1>
      <p className="subtle max-w-3xl">Founder‑led builds bigger than single tech demos—longer‑term products with clear roadmaps.</p>

      <div className="grid md:grid-cols-2 gap-10 mt-10">
        {venturesData.map(v => (
          <div key={v.id} className="card p-8 shadow-xl bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-800 rounded-2xl flex flex-col">
            <div className="flex items-center justify-between mb-6">
              <div className="text-2xl md:text-3xl font-bold gradient-text">{v.title}</div>
              <span className="chip bg-cyan-600 text-white border-none text-base px-4 py-2">{v.status}</span>
            </div>
            <div className="flex flex-col md:flex-row gap-6 items-center mb-6">
              <div className="flex-1">
                <p className="text-lg subtle mb-3">{v.description}</p>
                {v.metrics && (
                  <div className="flex flex-wrap gap-3">
                    {v.metrics.map((m, idx) => (
                      <div key={idx} className="bg-zinc-900/60 rounded-md px-4 py-3">
                        <div className="font-bold text-lg text-zinc-100">{m.value}</div>
                        <div className="text-sm text-zinc-400">{m.label} {m.sub ? <span className="text-zinc-500">· {m.sub}</span> : null}</div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
              {v.image && (
                <div className="flex-shrink-0">
                  <img src={v.image} alt={v.title + ' - Venture logo or screenshot'} loading="lazy" width="224" height="160" className="rounded-xl border-4 border-cyan-600 object-cover h-40 w-56 shadow-lg" />
                </div>
              )}
            </div>
            <div className="mt-auto flex justify-end">
              <a href={v.ctaLink || '/contact'} className="btn-primary" target={v.ctaLink && v.ctaLink.startsWith('http') ? '_blank' : '_self'} rel="noreferrer">{v.cta} →</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
