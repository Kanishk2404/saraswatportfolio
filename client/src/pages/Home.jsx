import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Cloud, Shield, Layers, LineChart } from 'lucide-react'
import CertificationsCarousel from '@/components/CertificationsCarousel.jsx'

const skills = [
  { title: 'DevOps/Cloud', icon: Cloud, items: ['AWS (EC2, Route53, ECS, Lambda)', 'Docker', 'Jenkins', 'Nginx', 'HTTPS/Certbot'] },
  { title: 'Full‑Stack', icon: Layers, items: ['React', 'Next.js', 'Tailwind', 'Node.js', 'Express.js'] },
  { title: 'Security', icon: Shield, items: ['Web app pentesting', 'Burp Suite', 'Wireshark', 'nslookup', 'PortSwigger Web Security Academy', 'picoCTF Top 500'] },
  { title: 'Growth/SEO', icon: LineChart, items: ['WordPress at scale', 'GA4', 'Search Console', 'MOZ'] },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
}

export default function Home() {
  return (
    <div className="bg-grid">
      <section className="container py-16 md:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-6"
          >
            <motion.div variants={itemVariants} className="badge">
              Full‑Stack • DevOps/SRE • Security & SEO aware
            </motion.div>
            
            <motion.h1 
              variants={itemVariants}
              className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight"
            >
              I build <span className="gradient-text">real systems</span> for real problems
            </motion.h1>
            
            <motion.p 
              variants={itemVariants}
              className="text-lg subtle leading-relaxed"
            >
              Nothing here was built for a resume—every project started from a real pain I faced, one I saw others struggle with, or as focused learning. React/Node on apps; AWS/Docker/Jenkins on infra; security‑ and SEO‑aware.
            </motion.p>
            
            <motion.div 
              variants={itemVariants}
              className="flex gap-3 flex-wrap"
            >
              <Link to="/projects" className="btn-primary">View Projects</Link>
              <Link to="/ventures" className="btn-secondary">Ventures</Link>
              <Link to="/contact" className="btn-secondary">Contact</Link>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{opacity:0,scale:0.9}} 
            animate={{opacity:1,scale:1}} 
            transition={{duration:0.8,delay:0.4}}
            className="flex justify-center lg:justify-end"
          >
            <motion.div 
              className="w-80 h-80 rounded-full overflow-hidden shadow-2xl"
              animate={{ 
                y: [0, -10, 0],
                rotate: [0, 2, -2, 0]
              }}
              transition={{ 
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <img 
                src="/images/profile.jpg" 
                alt="Kanishk Saraswat" 
                loading="lazy" width="320" height="320"
                className="w-full h-full object-cover rounded-full"
                onError={(e) => {
                  e.target.src = "https://via.placeholder.com/320x320/0ea5e9/FFFFFF?text=Kanishk+Saraswat"
                }}
              />
            </motion.div>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-4 mt-16">
          {/* ...existing code... */}
        </div>

      </section>

      <div className="hr" />

      {/* Skills Section - Moved Above Featured Projects */}
      <section className="container py-16">
  <h2 className="section-title mb-6 text-white">Skills</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((group, i) => (
            <motion.div 
              key={group.title} 
              initial={{opacity:0,y:8}} 
              whileInView={{opacity:1,y:0}} 
              viewport={{once:true}} 
              transition={{delay: i*0.05}} 
              className="neo hover:scale-[1.02] transition-transform duration-300"
            >
              <div className="inner p-6 h-full">
                <div className="flex items-center gap-2 mb-3">
                  <group.icon size={20} className="text-cyan-300" />
                  <div className="font-semibold text-lg">{group.title}</div>
                </div>
                <ul className="space-y-2">
                  {group.items.map((item, idx) => (
                    <li key={idx} className="text-sm text-zinc-400 flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-zinc-600 rounded-full mt-2 flex-shrink-0"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link to="/skills" className="btn-secondary">View All Skills</Link>
        </div>
      </section>

      <div className="hr" />

      {/* Featured Projects Section - Moved Below Skills */}
      <section className="container py-16">
  <h2 className="section-title mb-8 text-center text-white">Featured Projects</h2>
        <div className="grid lg:grid-cols-2 gap-8">
          {[{
            title: 'Anicafe',
            to: '/projects/anicafe',
            badge: 'Exit',
            desc: 'From anime streaming to legal blogging success. Pivoted due to copyright concerns, scaled to 100k users in 8 months, built 15k+ community, managed 22 admins, achieved high SEO rankings, and successfully exited.',
            chips: ['SEO','Community','Product','Scale','WordPress','Analytics'],
            highlights: ['100k users in 8 months', '15k+ community', '22 admins managed', 'High SEO rankings', 'Successful exit', 'Legal compliance pivot'],
            images: ['/images/anicafe1.jpeg','/images/anicafe2.jpeg','/images/anicafe3.jpeg']
          },{
            title: 'Cloud Bouncer (2024)',
            to: '/projects/cloud-bouncer',
            badge: 'SIH (MoD)',
            desc: 'AI-powered DDoS/DoS protection tool with automated detection, response, and analysis. Team lead for SIH Smart India Hackathon project with comprehensive traffic monitoring.',
            chips: ['React','Node','Python','MongoDB','AI','Cybersecurity','Team Lead'],
            highlights: ['AI traffic classification', 'Automated rate limiting', 'Real-time analysis', 'Team lead role', 'SIH participation', 'Future Filter module'],
            images: ['/images/cloudbouncer_!.jpeg','/images/cloudbouncer_2.jpeg','/images/cloudbouncer_3.jpeg']
          }].map((card, i) => (
            <motion.div 
              key={card.to} 
              initial={{opacity:0,y:8}} 
              whileInView={{opacity:1,y:0}} 
              viewport={{once:true}} 
              transition={{delay: i*0.05}} 
              className="neo h-[600px]"
            >
              <div className="inner p-8 h-full flex flex-col">
                {/* Header Section */}
                <div className="mb-6 flex-shrink-0">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-2xl font-bold text-zinc-100">{card.title}</h3>
                    <span className="chip font-medium">{card.badge}</span>
                  </div>
                  <p className="text-zinc-300 text-base leading-relaxed overflow-safe-multiline">{card.desc}</p>
                </div>

                {/* Images Section */}
                <div className="mb-6 flex items-center justify-center">
                  <img 
                    src={card.images[0]}
                    alt={card.title + ' thumbnail'}
                    loading="lazy" width="256" height="176"
                    className="w-64 h-44 object-cover rounded-xl border border-zinc-700 bg-zinc-900/50 shadow-lg"
                    onError={(e) => {
                      e.target.src = `https://via.placeholder.com/256x176/${i === 0 ? '0ea5e9' : '8b5cf6'}/FFFFFF?text=${card.title.replace(/\s+/g, '+')}+Image`
                    }}
                  />
                </div>

                {/* Highlights Section */}
                <div className="mb-6 flex-grow overflow-hidden">
                  <h4 className="text-sm font-semibold text-zinc-200 mb-3">Key Highlights:</h4>
                  <div className="space-y-2">
                    {card.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-center gap-3 p-2 bg-zinc-800/50 rounded-md">
                        <span className="w-2 h-2 bg-cyan-400 rounded-full flex-shrink-0"></span>
                        <span className="text-sm text-zinc-300 leading-relaxed">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer Section */}
                <div className="mt-auto flex-shrink-0">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {card.chips.map(tech => (
                      <span key={tech} className="chip text-xs font-medium">{tech}</span>
                    ))}
                  </div>
                  <Link 
                    to={card.to} 
                    className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-medium text-base transition-colors"
                  >
                    View case study <ArrowRight size={18} />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link to="/projects" className="btn-secondary">View All Projects</Link>
        </div>
      </section>

      <CertificationsCarousel />
    </div>
  )
}
