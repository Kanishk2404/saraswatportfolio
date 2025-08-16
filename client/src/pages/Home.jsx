import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Cloud, Shield, Layers, LineChart, Code, Zap, Target, TrendingUp } from 'lucide-react'
import CertificationsCarousel from '@/components/CertificationsCarousel.jsx'
import BlogPreview from '@/components/BlogPreview.jsx'
import SEO from '@/components/SEO.jsx'

const skills = [
  { title: 'DevOps/Cloud', icon: Cloud, items: ['AWS (EC2, Route53, ECS, Lambda)', 'Docker', 'Jenkins', 'Nginx', 'HTTPS/Certbot'] },
  { title: 'Full‑Stack', icon: Layers, items: ['React', 'Next.js', 'Tailwind', 'Node.js', 'Express.js'] },
  { title: 'Security', icon: Shield, items: ['Web app pentesting', 'Burp Suite', 'Wireshark', 'nslookup', 'PortSwigger Web Security Academy', 'picoCTF Top 500'] },
  { title: 'Growth/SEO', icon: LineChart, items: ['WordPress at scale', 'GA4', 'Search Console', 'MOZ'] },
]

const currentWork = [
  {
    title: "Anicafe - Merch Store",
    description: "Reviving the Anicafe brand as an anime merchandise store with e-commerce functionality",
    tech: ["WordPress", "WooCommerce"],
    progress: 70,
    icon: TrendingUp
  },
  {
    title: "Autoverse",
    description: "Building a unified social media platform with different modules for various platforms",
    tech: ["React", "Node.js", "Express", "PostgreSQL"],
    progress: 45,
    icon: Code
  },
  {
    title: "Portfolio & Blog",
    description: "Enhancing portfolio with interactive features and building a tech blog for sharing knowledge",
    tech: ["React", "Tailwind", "Node.js", "Express"],
    progress: 85,
    icon: Zap
  }
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
    <>
      <SEO 
        title="Home"
  description="Kanishk Saraswat - Full-stack developer and DevOps enthusiast. Building scalable web applications with modern technology."
        keywords={[
          'Kanishk Saraswat',
          'Full Stack Developer',
          'Web Developer',
          'DevOps Engineer',
          'React Developer',
          'Node.js Developer',
          'AWS Developer',
          'Portfolio',
          'Web Development',
          'Cybersecurity'
        ]}
        url="/"
      />
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
              <Zap className="w-4 h-4" />
              Web Developer • Cloud & DevOps • SEO • Cybersecurity
            </motion.div>
            
            <motion.h1 
              variants={itemVariants}
              className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight"
            >
              From <span className="gradient-text">athlete</span> to <span className="gradient-text">developer</span>
            </motion.h1>
            
            <motion.p 
              variants={itemVariants}
              className="text-lg subtle leading-relaxed"
            >
              Full-stack developer and DevOps enthusiast who builds scalable web applications. 
              From <span className="text-cyan-300 font-semibold">100k+ user platforms</span> to <span className="text-cyan-300 font-semibold">security tools</span>, I solve real problems with modern tech.
            </motion.p>
            
            <motion.div 
              variants={itemVariants}
              className="flex gap-3 flex-wrap"
            >
              <Link to="/projects" className="btn-primary">View Projects</Link>
              <Link to="/skills" className="btn-secondary">View Skills</Link>
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

        {/* Quick Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="quick-stats mt-16"
        >
          {[
            { number: "100K+", label: "Users Reached", icon: "👥" },
            { number: "25%", label: "Traffic Growth", icon: "📈" },
            { number: "Top 500", label: "CTF Ranking", icon: "🏆" },
            { number: "5+", label: "Projects", icon: "💻" }
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.8 + i * 0.1 }}
              className="stat-card hover-lift"
            >
              <div className="text-2xl mb-2">{stat.icon}</div>
              <div className="stat-number">{stat.number}</div>
              <div className="stat-label">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

      </section>

      <div className="hr" />

      {/* Currently Working On Section */}
      <section className="container py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="section-title text-white">Currently Working On</h2>
          <p className="text-lg text-zinc-300 max-w-3xl mx-auto">
            Active projects and ongoing development work
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentWork.map((project, i) => (
            <motion.div 
              key={project.title} 
              initial={{opacity:0,y:20}} 
              whileInView={{opacity:1,y:0}} 
              viewport={{once:true}} 
              transition={{delay: i*0.1}} 
              className="neo hover:scale-[1.02] transition-transform duration-300"
            >
              <div className="inner p-6 h-full">
                <div className="flex items-center gap-3 mb-4">
                  <project.icon size={24} className="text-cyan-300" />
                  <h3 className="font-bold text-lg text-zinc-100">{project.title}</h3>
                </div>
                <p className="text-zinc-300 text-sm mb-4 leading-relaxed">{project.description}</p>
                
                {/* Progress Bar */}
                <div className="mb-4">
                  <div className="flex justify-between text-xs text-zinc-400 mb-1">
                    <span>Progress</span>
                    <span>{project.progress}%</span>
                  </div>
                  <div className="w-full bg-zinc-800 rounded-full h-2">
                    <motion.div 
                      className="bg-gradient-to-r from-cyan-500 to-blue-500 h-2 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${project.progress}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: i * 0.2 }}
                    />
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {project.tech.map(tech => (
                    <span key={tech} className="chip text-xs">{tech}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
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

      <div className="hr" />

      {/* Testimonials Section - Commented out for now */}
      {/* 
      <section className="container py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="section-title text-white">What People Say</h2>
          <p className="text-lg text-zinc-300 max-w-3xl mx-auto">
            Feedback from colleagues, clients, and collaborators
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              name: "Sarah Chen",
              role: "Product Manager, Sparklehood",
              content: "Kanishk's technical expertise and problem-solving skills are exceptional. He consistently delivers high-quality solutions and is always willing to go the extra mile.",
              rating: 5
            },
            {
              name: "Alex Rodriguez",
              role: "CTO, Fotographiya",
              content: "Working with Kanishk was a game-changer for our platform. His security-first approach and DevOps knowledge helped us scale efficiently.",
              rating: 5
            },
            {
              name: "Priya Sharma",
              role: "Team Lead, SIH Project",
              content: "Kanishk's leadership during the Cloud Bouncer project was outstanding. His technical vision and ability to coordinate the team led to our success.",
              rating: 5
            }
          ].map((testimonial, i) => (
            <motion.div 
              key={testimonial.name} 
              initial={{opacity:0,y:20}} 
              whileInView={{opacity:1,y:0}} 
              viewport={{once:true}} 
              transition={{delay: i*0.1}} 
              className="neo hover:scale-[1.02] transition-transform duration-300"
            >
              <div className="inner p-6 h-full">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, idx) => (
                    <span key={idx} className="text-yellow-400">★</span>
                  ))}
                </div>
                <p className="text-zinc-300 text-sm mb-4 leading-relaxed italic">"{testimonial.content}"</p>
                <div className="border-t border-zinc-700 pt-4">
                  <div className="font-semibold text-zinc-100">{testimonial.name}</div>
                  <div className="text-sm text-zinc-400">{testimonial.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
      */}

      <BlogPreview />

      <CertificationsCarousel />

      {/* Call to Action Section */}
      <section className="bg-gradient-to-r from-zinc-900 via-zinc-800 to-zinc-900 py-20 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(14,165,233,0.1),transparent_50%)]"></div>
        </div>
        
        {/* Border Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-transparent to-blue-500/20"></div>
        
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-100 mb-4">
              Ready to Build Something <span className="gradient-text">Amazing</span>?
            </h2>
            <p className="text-zinc-300 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
              Let's discuss your next project and bring your ideas to life. Whether it's a web app, 
              e-commerce platform, or something entirely new, I'm here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn-primary">
                Start a Conversation
              </Link>
              <Link to="/about" className="btn-secondary">
                Learn More About Me
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
      </div>
    </>
  )
}
