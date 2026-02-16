import { motion } from 'framer-motion';
import { Cloud, Shield, Layers, LineChart, Code, Database, Server, Zap, CreditCard, Key, Users, Lock, BarChart } from 'lucide-react';
import SEO from '@/components/SEO.jsx';
import { projects, ventures } from '@/data/projects.js'

const skillCategories = [
  {
    title: 'Frontend',
    icon: Code,
    description: 'Modern frontend stack for SuiteGenie',
    skills: [
      { name: 'React.js', badge: 'https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=white&style=flat-square' },
      { name: 'Tailwind CSS', badge: 'https://img.shields.io/badge/Tailwind-06B6D4?logo=tailwind-css&logoColor=white&style=flat-square' },
      { name: 'React Helmet (SEO)', badge: 'https://img.shields.io/badge/React%20Helmet-000000?logo=react&logoColor=white&style=flat-square' },
      { name: 'Quill.js (Rich Text Editor)', badge: 'https://img.shields.io/badge/Quill.js-006AFF?logo=quill&logoColor=white&style=flat-square' }
    ]
  },
  {
    title: 'Backend',
    icon: Server,
    description: 'API and authentication layer powering SuiteGenie',
    skills: [
      { name: 'Node.js', badge: 'https://img.shields.io/badge/Node.js-339933?logo=node.js&logoColor=white&style=flat-square' },
      { name: 'Express.js', badge: 'https://img.shields.io/badge/Express-000000?logo=express&logoColor=white&style=flat-square' },
      { name: 'JWT Authentication', badge: 'https://img.shields.io/badge/JWT-000000?logo=JSON%20web%20tokens&logoColor=white&style=flat-square' },
      { name: 'HTTP-only Cookies', badge: null }
    ]
  },
  {
    title: 'Database & Caching',
    icon: Database,
    description: 'Persistent storage and fast caching',
    skills: [
      { name: 'PostgreSQL (Supabase)', badge: 'https://img.shields.io/badge/PostgreSQL-336791?logo=postgresql&logoColor=white&style=flat-square' },
      { name: 'Redis (Upstash)', badge: 'https://img.shields.io/badge/Redis-DC382D?logo=redis&logoColor=white&style=flat-square' }
    ]
  },
  {
    title: 'Payment',
    icon: CreditCard,
    description: 'In-app payments and billing',
    skills: [
      { name: 'Razorpay', badge: 'https://img.shields.io/badge/Razorpay-0E1B3C?logo=razorpay&logoColor=white&style=flat-square' }
    ]
  },
  {
    title: 'Authentication',
    icon: Key,
    description: 'Third-party auth and OAuth flows',
    skills: [
      { name: 'OAuth 2.0 (Twitter/X, LinkedIn)', badge: 'https://img.shields.io/badge/OAuth2-0A0A0A?logo=oauth&logoColor=white&style=flat-square' }
    ]
  },
  {
    title: 'DevOps & Infrastructure',
    icon: Cloud,
    description: 'Hosting, sitemaps, and robots for SEO and scaling',
    skills: [
      { name: 'Multi-subdomain hosting', badge: null },
      { name: 'XML Sitemaps', badge: null },
      { name: 'robots.txt', badge: null }
    ]
  },
  {
    title: 'Security',
    icon: Lock,
    description: 'HTTP security headers and best practices',
    skills: [
      { name: 'HSTS', badge: null },
      { name: 'CSP (Content Security Policy)', badge: null },
      { name: 'X-Frame-Options', badge: null },
      { name: 'X-Content-Type-Options', badge: null }
    ]
  },
  {
    title: 'Tools & Observability',
    icon: BarChart,
    description: 'Analytics and real-time updates',
    skills: [
      { name: 'Chart.js', badge: 'https://img.shields.io/badge/Chart.js-FF6384?logo=chartdotjs&logoColor=white&style=flat-square' },
      { name: 'Server-Sent Events (SSE)', badge: null }
    ]
  }
];

const getLevelColor = (level) => {
  if (level === 'Learning') return 'text-blue-400 bg-blue-400/10';
  return 'text-zinc-400 bg-zinc-400/10';
};

export default function Skills() {
  return (
    <>
      <SEO 
        title="Skills"
        description="Explore Kanishk Saraswat's comprehensive technical skills including full-stack development, DevOps, cybersecurity, SEO, and AI tools. See expertise in React, Node.js, AWS, Docker, and more."
        keywords={[
          'Technical Skills',
          'Full Stack Developer Skills',
          'React Developer',
          'Node.js Developer',
          'DevOps Skills',
          'AWS Developer',
          'Cybersecurity Skills',
          'SEO Expert',
          'Docker Kubernetes',
          'Web Development Skills'
        ]}
        url="/skills"
      />
      <div className="bg-grid min-h-screen">
      <section className="container py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Skills & Expertise</h1>
          <p className="text-lg text-zinc-300 max-w-3xl mx-auto">
            A comprehensive overview of my technical skills, tools, and areas of expertise. 
            Continuously learning and expanding my knowledge in emerging technologies.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="neo hover:scale-[1.02] transition-transform duration-300"
            >
              <div className="inner p-6 h-full">
                <div className="flex items-center gap-3 mb-4">
                  <category.icon size={24} className="text-cyan-300" />
                  <h3 className="text-xl font-bold text-zinc-100">{category.title}</h3>
                </div>
                
                <p className="text-zinc-400 text-sm mb-6 leading-relaxed">
                  {category.description}
                </p>

                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="flex flex-col gap-2 p-3 bg-zinc-800/50 rounded-lg">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          {skill.badge ? (
                            <img src={skill.badge} alt={skill.name} className="h-6 rounded-sm" />
                          ) : (
                            <span className="inline-block w-8 h-8 bg-zinc-700/40 rounded-full flex items-center justify-center text-xs text-zinc-200 font-semibold">{skill.name.split(' ').slice(0,2).map(w=>w[0]).join('')}</span>
                          )}
                          <span className="text-zinc-300 text-sm font-medium">{skill.name}</span>
                        </div>
                        {skill.level && (
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${getLevelColor(skill.level)}`}>
                            {skill.level}
                          </span>
                        )}
                      </div>

                      {/* Implementations: show projects/ventures where this skill was used */}
                      {(() => {
                        const normalize = s => (s || '').toString().toLowerCase().replace(/[^a-z0-9]+/g, '');
                        const skillNorm = normalize(skill.name);
                        const impls = [];

                        // check projects
                        Object.entries(projects).forEach(([pid, proj]) => {
                          const techLists = [];
                          if (proj.tech) techLists.push(...proj.tech);
                          if (proj.stack) techLists.push(...proj.stack);
                          if (proj.techStack) techLists.push(...proj.techStack);
                          if (proj.techStack === undefined && proj.stack === undefined && proj.tech === undefined) {
                            // ignore
                          }
                          const found = techLists.some(t => {
                            const tNorm = normalize(t);
                            return tNorm.includes(skillNorm) || skillNorm.includes(tNorm);
                          });
                          if (found) impls.push({ type: 'project', id: pid, title: proj.title });
                        });

                        // check ventures (link by id or title match)
                        ventures.forEach(v => {
                          if (projects[v.id]) {
                            // already covered as project
                            return;
                          }
                          const titleNorm = normalize(v.title);
                          if (titleNorm.includes(skillNorm) || skillNorm.includes(titleNorm)) {
                            impls.push({ type: 'venture', id: v.id, title: v.title });
                          }
                        });

                        if (impls.length === 0) return null;

                        return (
                          <div className="flex flex-wrap gap-2 mt-2">
                            <span className="text-xs text-zinc-400 mr-2">Implemented in:</span>
                            {impls.map((imp, i) => (
                              <a key={i} href={imp.type === 'project' ? `/projects/${imp.id}` : `/ventures/${imp.id}`} className="chip text-xs bg-zinc-900/40 text-zinc-200 hover:bg-cyan-600/40">
                                {imp.title}
                              </a>
                            ))}
                          </div>
                        )
                      })()}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-zinc-800/50 rounded-xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-zinc-100 mb-4">Continuous Learning</h3>
            <p className="text-zinc-300 leading-relaxed">
              I believe in staying current with technology trends and continuously improving my skills. 
              Currently focusing on Kubernetes orchestration, Terraform infrastructure as code, and advanced 
              AWS services. Always open to learning new technologies and methodologies.
            </p>
          </div>
        </motion.div>
      </section>
      </div>
    </>
  );
}
