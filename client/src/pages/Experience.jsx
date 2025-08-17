import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, TrendingUp, Users, Award, Code, Shield } from 'lucide-react';
import { Trophy } from 'lucide-react';

export default function Experience(){
  const metrics = [
    { icon: Users, label: "Users Reached", value: "100K+", desc: "Platform users" },
    { icon: TrendingUp, label: "Traffic Growth", value: "25%", desc: "Organic lift" },
    { icon: Award, label: "CTF Ranking", value: "Top 500", desc: "picoCTF global" },
  { icon: Trophy, label: "Sports", value: "Cricket, Football, Table Tennis", desc: "Sports taught me discipline, strategic thinking, and teamwork." },
    { icon: Code, label: "Projects", value: "5+", desc: "Completed" }
  ];
  return (
    <div className="bg-grid min-h-screen">
      <section className="container py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Experience</h1>
          <p className="text-lg text-zinc-300 max-w-3xl mx-auto">
            My professional journey in tech, from startups to enterprise solutions
          </p>
        </motion.div>

        {/* Key Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid md:grid-cols-4 gap-6 mb-16"
        >
          {metrics.map((metric, i) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 + i * 0.1 }}
              className="neo hover:scale-[1.02] transition-transform duration-300"
            >
              <div className="inner p-6 text-center">
                <metric.icon size={32} className="text-cyan-400 mx-auto mb-3" />
                <div className="text-2xl font-bold text-zinc-100 mb-1">{metric.value}</div>
                <div className="text-sm font-semibold text-cyan-300 mb-1">{metric.label}</div>
                <div className="text-xs text-zinc-400">{metric.desc}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Experience Timeline */}
        <div className="space-y-8">
                     <Exp
             company="Sparklehood"
             role="DevOps/SEO/Full‑Stack"
             date="Jul 2025 – Present"
             location="Remote"
             achievements={[
               'Hosting and DevOps for internal tools (n8n) and a Node.js AI app on AWS (VPC, EC2, RDS)',
               'Built initial React + headless CMS iteration; pivoted to Framer as requested',
               'Implemented SEO foundations; supported deployments and ops',
               'Reduced deployment time by 40% through CI/CD optimization'
             ]}
                           tech={['AWS', 'React', 'Node.js', 'Framer', 'SEO', 'Content Writing']}
             icon={Code}
           />

          <Exp
            company="Fotographiya"
            role="Frontend + SEO + Security Research"
            date="Jun 2024 – Dec 2024"
            location="Remote"
            achievements={[
              'React/Tailwind contributions; GA4 and Search Console instrumentation',
              'Local SEO campaign; ~25% organic traffic lift on selected keywords',
              'Python module for a hardware‑security demo; research support',
              'Improved page load speed by 35% through optimization'
            ]}
                         tech={['React', 'Tailwind', 'Python', 'GA4', 'SEO', 'Content Writing']}
            icon={Shield}
          />

          <Exp
            company="Anicafe (Founder)"
            role="Product, SEO, Community, Ops"
            date="Built → Exited; brand revival ongoing"
            location="Remote"
            achievements={[
              'Initially an anime/movies streaming and downloading site; later converted to blogging, recommendations, and fan theories (user submissions, comments)',
              'Reached 100,000 users in 8 months; 15,000+ community; 15 admins and 7 core admins; sold the property',
              'Reviving brand as an anime merch store (see Ventures)',
              'Achieved top 10 Google rankings for competitive keywords'
            ]}
                         tech={['WordPress', 'SEO', 'Community Management', 'Analytics', 'Content Writing']}
            icon={TrendingUp}
          />
        </div>
      </section>
    </div>
  )
}

function Exp({company, role, date, location, achievements, tech, icon}){
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="card p-8 rounded-2xl bg-zinc-800/70 border border-cyan-700 shadow-xl hover:scale-[1.01] transition-transform duration-300"
    >
      <div className="flex items-start gap-4 mb-6">
        <div className="p-3 bg-cyan-900/30 rounded-xl">
          <icon size={24} className="text-cyan-400" />
        </div>
        <div className="flex-1">
          <div className="flex flex-wrap items-center gap-3 mb-2">
            <div className="font-extrabold text-2xl text-cyan-300">{company}</div>
            <span className="chip text-base font-semibold bg-cyan-900/40 text-cyan-200 px-3 py-1 rounded-full">{role}</span>
          </div>
          <div className="flex items-center gap-4 text-sm text-zinc-400">
            <div className="flex items-center gap-1">
              <Calendar size={14} />
              {date}
            </div>
            <div className="flex items-center gap-1">
              <MapPin size={14} />
              {location}
            </div>
          </div>
        </div>
      </div>
      
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <h4 className="text-lg font-semibold text-zinc-200 mb-3 flex items-center gap-2">
            <Briefcase size={18} className="text-cyan-400" />
            Key Achievements
          </h4>
          <ul className="space-y-2">
            {achievements.map((achievement, idx) => (
              <li key={idx} className="text-zinc-300 flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></span>
                <span className="leading-relaxed text-sm">{achievement}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div>
          <h4 className="text-lg font-semibold text-zinc-200 mb-3 flex items-center gap-2">
            <Code size={18} className="text-cyan-400" />
            Technologies
          </h4>
          <div className="flex flex-wrap gap-2">
            {tech.map(technology => (
              <span key={technology} className="chip text-xs">{technology}</span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

