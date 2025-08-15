export default function Experience(){
  return (
    <section className="container py-16">
      <h1 className="text-3xl font-bold mb-6">Experience</h1>

      <Exp
        company="Sparklehood"
        role="DevOps/SEO/Full‑Stack"
        date="Jul 2025 – Present"
        bullets={[
          'Hosting and DevOps for internal tools (n8n) and a Python/Flask AI app on AWS (VPC, EC2, RDS)',
          'Built initial React + headless CMS iteration; pivoted to Framer as requested',
          'Implemented SEO foundations; supported deployments and ops'
        ]}
      />

      <Exp
        company={<a href="https://www.fotographiya.com/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">Fotographiya</a>}
        role="Frontend + SEO + Security Research"
        date="Jun 2024 – Dec 2024"
        bullets={[
          'React/Tailwind contributions; GA4 and Search Console instrumentation',
          'Local SEO campaign; ~25% organic traffic lift on selected keywords',
          'Python module for a hardware‑security demo; research support'
        ]}
      />

      <Exp
        company="Anicafe (Founder)"
        role="Product, SEO, Community, Ops"
        date="Built → Exited; brand revival ongoing"
        bullets={[
          'Initially an anime/movies streaming and downloading site; later converted to blogging, recommendations, and fan theories (user submissions, comments)',
          'Reached 100,000 users in 8 months; 15,000+ community; 15 admins and 7 core admins; sold the property',
          'Reviving brand as an anime merch store (see Ventures)'
        ]}
      />
    </section>
  )
}

function Exp({company, role, date, bullets}){
  return (
    <div className="card p-8 mb-8 rounded-2xl bg-zinc-800/70 border border-cyan-700 shadow-xl hover:scale-[1.01] transition-transform duration-300">
      <div className="flex flex-wrap items-center gap-3 mb-2">
        <div className="font-extrabold text-2xl text-cyan-300">{company}</div>
        <span className="chip text-base font-semibold bg-cyan-900/40 text-cyan-200 px-3 py-1 rounded-full">{role}</span>
        <div className="ml-auto text-sm text-zinc-400 font-mono italic whitespace-nowrap">{date}</div>
      </div>
      <ul className="list-disc pl-6 text-zinc-200 mt-4 space-y-2">
        {bullets.map(b=> <li key={b} className="leading-relaxed text-base">{b}</li>)}
      </ul>
    </div>
  )
}
