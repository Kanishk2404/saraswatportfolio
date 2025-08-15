import { useEffect, useRef, useState } from 'react'

const certifications = [
  {
    title: 'Docker & Kubernetes Practical Guide',
    issuer: '2025 Edition',
    year: '2025',
    image: '/images/cert_docker_kubernetes_practical_guide[ 2025 edition ].jpeg'
  },
  {
    title: 'Jenkins Job & Pipelines',
    issuer: 'Certification',
    year: '2025',
    image: '/images/jenkins_ job, pipelines_Cert.jpeg'
  },
  {
    title: 'NPTEL Cloud Computing',
    issuer: 'NPTEL',
    year: '2025',
    image: '/images/cloud_computing_cert.pdf'
  },
  {
    title: 'SEO Strategy',
    issuer: 'Coursera',
    year: '2023',
    image: '/images/seo_strategy_cert.jpg'
  }
]

export default function CertificationsCarousel() {
  const [index, setIndex] = useState(0)
  const timeoutRef = useRef(null)

  useEffect(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    timeoutRef.current = setTimeout(() => {
      setIndex((i) => (i + 1) % certifications.length)
    }, 3000)
    return () => { if (timeoutRef.current) clearTimeout(timeoutRef.current) }
  }, [index])

  return (
    <section className="py-14 border-t border-zinc-800 bg-grid">
      <div className="container max-w-5xl mx-auto">
        {/* Achievements & Activities Section Above Certifications */}
        <section className="mb-16">
          <h4 className="text-2xl font-bold mb-8 text-center text-white">Achievements & Activities</h4>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card p-6 rounded-2xl shadow-xl flex flex-col items-start">
              <div className="font-bold text-xl mb-2 text-white">CTF & Tech Competitions</div>
              <ul className="list-disc pl-5 space-y-2 text-zinc-300">
                <li>Top 500 in PicoCTF (2025)</li>
                <li>Top 10 in Venture Space CTF</li>
              </ul>
            </div>
            <div className="card p-6 rounded-2xl shadow-xl flex flex-col items-start">
              <div className="text-2xl font-bold mb-2 text-white">Army, Olympiads & Defence</div>
              <ul className="list-disc pl-5 space-y-2 text-zinc-300">
                <li>Conference round SSB (Army)</li>
                <li>NSO Gold</li>
                <li>IMO Gold</li>
                <li>IMO States</li>
              </ul>
            </div>
            <div className="card p-6 rounded-2xl shadow-xl flex flex-col items-start">
              <div className="font-bold text-xl mb-2 text-white">Sports Achievements</div>
              <ul className="list-disc pl-5 space-y-2 text-zinc-300">
                <li>Table Tennis: Top 4 States, College Winner</li>
                <li>Basketball: States, College Winner</li>
                <li>District in Cricket</li>
              </ul>
            </div>
            <div className="card p-6 rounded-2xl shadow-xl flex flex-col items-start">
              <div className="font-bold text-xl mb-2 text-white">Personal & Other</div>
              <ul className="list-disc pl-5 space-y-2 text-zinc-300">
                <li>Athlete</li>
                <li>Multi-sport participant</li>
                <li>Leadership & teamwork in competitions</li>
              </ul>
            </div>
          </div>
        </section>
  <h3 className="text-3xl font-extrabold mb-8 text-center text-white">Certifications</h3>
        <div className="relative overflow-hidden">
          <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${index * 100}%)` }}>
            {certifications.map((c) => (
              <div key={c.title} className="min-w-full px-8 flex justify-center">
                <div className="card p-10 flex flex-col items-center shadow-2xl max-w-lg w-full rounded-2xl border-2 border-cyan-700 bg-zinc-900/80">
                  {c.image && c.image.endsWith('.pdf') ? (
                    <a href={c.image} target="_blank" rel="noopener noreferrer" className="mb-6 block w-full text-center">
                      <span className="inline-block px-4 py-2 bg-cyan-600 text-white rounded-lg font-semibold">View Certificate (PDF)</span>
                    </a>
                  ) : c.image && (
                    <img src={c.image} alt={c.title} loading="lazy" width="340" height="224" className="mb-6 rounded-xl border-2 border-cyan-600 object-cover max-h-56 w-full" style={{maxWidth:'340px'}} />
                  )}
                  <div className="text-2xl md:text-3xl font-bold text-center mb-2 gradient-text">{c.title}</div>
                  <div className="text-cyan-400 mt-1 text-center text-lg font-semibold">{c.issuer}</div>
                  <div className="text-zinc-400 text-base text-center mt-1 font-mono">{c.year}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center gap-2 mt-6">
            {certifications.map((_, i) => (
              <button key={i} onClick={()=>setIndex(i)} className={`w-3 h-3 rounded-full border-2 ${i===index? 'bg-cyan-400 border-cyan-600' : 'bg-zinc-700 border-zinc-600'}`} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
