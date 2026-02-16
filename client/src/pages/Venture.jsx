import { useParams, Link } from 'react-router-dom'

const ventures = {
  'suitegenie': {
    title: 'SuiteGenie',
    status: 'Live',
    body: [
      'All-in-one AI suite for creators, marketers, and teams to automate content creation, scheduling, and publishing.',
      'Tweet Genie: AI-powered tweet and thread generation with OAuth integration, bulk creation, and performance analytics.',
      'LinkedIn Automator: Professional networking made effortless with thought-leadership content generation and scheduling.',
      'WordPress Automator: Transform your blog into a content powerhouse with SEO-optimized posts and auto-publishing.',
      'Bulk Scheduling: Create and schedule dozens of posts in one go. Plan entire campaigns, fill your calendar, and save hours of work - no more manual posting.',
      'Features: Content & Image Generation, Engagement Analytics, BYOK (Bring Your Own Keys), and Campaign Planning.',
      'Trusted by creators and businesses worldwide, delivering meaningful savings on AI costs with support for BYOK (bring your own keys).'
    ]
  },
  'anicafe-merch': {
    title: 'Anicafe - Merch',
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



