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
  'anicafe': {
    title: 'Anicafe',
    status: 'Sold',
    body: [
      'Founder-led anime community platform grown to 100k+ monthly organic visits through SEO, content, and community.',
      'Pivoted from streaming and downloading to original and user-generated content after compliance concerns.',
      'Built a 20k+ Telegram community and launched an Anicafe t-shirt line that sold 800+ units.',
      'Google AdSense was approved after the content-model pivot, creating an advertising revenue stream.',
      'Sold the website and merch business in a profitable exit.',
      'This experience led to SuiteGenie: keeping Anicafe social channels active was the problem I wanted to solve next.'
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


