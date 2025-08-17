import { Link } from 'react-router-dom'

const ventures = [
  {
    slug: 'autoverse',
    title: 'Autoverse',
    status: 'Building',
    body: [
      'Building a platform that includes AI with modular tools for content and social workflows.',
      'Starting with separate modules; simple, logged‑in access.',
      'Also built a local AI for content development; will host publicly after traction (traffic, initial revenue, or grant).'
    ]
  },
  {
    slug: 'anicafe-merch',
    title: 'Anicafe — Merch',
    status: 'In progress',
    body: [
      'Reviving the Anicafe brand as an anime merchandise store with a modern e‑commerce stack and CI/CD.'
    ]
  }
]

export default function Ventures(){
  return (
    <section className="container py-16">
      <h1 className="text-3xl font-bold mb-4">Ventures</h1>
      <p className="subtle max-w-3xl">Founder‑led builds bigger than single tech demos—longer‑term products with clear roadmaps.</p>

      <div className="grid md:grid-cols-2 gap-10 mt-10">
        {ventures.map(v => (
          <div key={v.slug} className="card p-8 shadow-xl bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-800 rounded-2xl flex flex-col">
            <div className="flex items-center justify-between mb-6">
              <div className="text-2xl md:text-3xl font-bold gradient-text">{v.title}</div>
              <span className="chip bg-cyan-600 text-white border-none text-base px-4 py-2">{v.status}</span>
            </div>
            <div className="flex flex-col md:flex-row gap-6 items-center mb-6">
              <div className="flex-1">
                <ul className="list-disc pl-5 subtle space-y-2 text-lg">
                  {v.body.map(p => <li key={p}>{p}</li>)}
                </ul>
              </div>
              {v.image && (
                <div className="flex-shrink-0">
                  <img src={v.image} alt={v.title + ' - Venture logo or screenshot'} loading="lazy" width="224" height="160" className="rounded-xl border-4 border-cyan-600 object-cover h-40 w-56 shadow-lg" />
                </div>
              )}
            </div>
            <div className="mt-auto flex justify-end">
              <Link to="/contact" className="btn-primary">Contact →</Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
