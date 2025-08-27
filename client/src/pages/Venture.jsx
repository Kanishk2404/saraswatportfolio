import { useParams, Link } from 'react-router-dom'

const ventures = {
  'autoverse': {
    title: 'Autoverse',
    status: 'Building',
    body: [
      'Building a platform that includes AI with modular tools for content and social workflows.',
      'Starting with separate modules; simple, logged‑in access.',
      'Also built a local AI for content development; will host publicly after traction (traffic, initial revenue, or grant).'
    ]
  },
  'anicafe-merch': {
    title: 'Anicafe — Merch',
    status: 'In progress',
    body: [
      'Reviving the Anicafe brand as an anime merchandise store with a modern e‑commerce stack and CI/CD.'
    ]
  }
}

export default function Venture(){
  const { slug } = useParams()
  const v = slug ? ventures[slug] : undefined
  if(!v) return (
    <section className="container py-16">
      <div className="text-zinc-400">Venture not found.</div>
      <Link to="/ventures" className="text-cyan-400 hover:underline">← Back to ventures</Link>
    </section>
  )
  return (
    <section className="container py-16">
      <Link to="/ventures" className="text-cyan-400 hover:underline">← Back to ventures</Link>
      <h1 className="text-3xl font-bold mt-4">{v.title}</h1>
      <div className="text-sm text-zinc-400 mt-1">Status: {v.status}</div>
      <ul className="list-disc pl-5 text-zinc-300 mt-4">
        {v.body.map(p => <li key={p}>{p}</li>)}
      </ul>
      <Link to="/contact" className="btn-primary mt-6 inline-block">Contact →</Link>
    </section>
  )
}



