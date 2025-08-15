import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, ExternalLink, Github, Calendar, User, Target, Code, BookOpen, Lightbulb, CheckCircle, ArrowUpRight, Shield, Globe, Server, Users } from 'lucide-react'
import { projects } from '@/data/projects.js'
import ImageGallery from '@/components/ImageGallery.jsx'

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

export default function Project() {
  const { slug } = useParams()
  const p = slug ? projects[slug] : undefined
  
  if (!p) return (
    <section className="container py-16">
      <div className="subtle">Project not found.</div>
      <Link to="/projects" className="text-cyan-400 hover:underline">← Back to projects</Link>
    </section>
  )

  return (
    <div className="bg-grid">
      <motion.section 
        className="container py-16 md:py-20"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="mb-8">
          <Link to="/projects" className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-medium mb-6">
            <ArrowLeft size={18} />
            Back to Projects
          </Link>
          
          <div className="flex flex-wrap items-center gap-4 mb-4">
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight">
              {p.title}
            </h1>
            {p.role && (
              <span className="chip text-sm font-medium">
                <User size={14} className="mr-1" />
                {p.role}
              </span>
            )}
          </div>
          
          {p.oneLiner && (
            <p className="text-xl text-zinc-300 leading-relaxed max-w-4xl">
              {p.oneLiner}
            </p>
          )}
        </motion.div>

        {/* Key Information Grid */}
        <motion.div variants={itemVariants} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {p.tech && (
            <div className="neo">
              <div className="inner p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Code size={20} className="text-cyan-300" />
                  <h3 className="font-semibold text-lg">Tech Stack</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {p.tech.map((tech, idx) => (
                    <span key={idx} className="chip text-xs">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {p.status && (
            <div className="neo">
              <div className="inner p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Target size={20} className="text-cyan-300" />
                  <h3 className="font-semibold text-lg">Status</h3>
                </div>
                <p className="text-zinc-300">{p.status}</p>
              </div>
            </div>
          )}

          {(p.github || p.live) && (
            <div className="neo">
              <div className="inner p-6">
                <div className="flex items-center gap-2 mb-3">
                  <ExternalLink size={20} className="text-cyan-300" />
                  <h3 className="font-semibold text-lg">Links</h3>
                </div>
                <div className="space-y-2">
                  {p.github && (
                    <a href={p.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300">
                      <Github size={16} />
                      View Code
                      <ArrowUpRight size={14} />
                    </a>
                  )}
                  {p.live && (
                    <a href={p.live} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300">
                      <ExternalLink size={16} />
                      Live Demo
                      <ArrowUpRight size={14} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          )}
        </motion.div>

        {/* Highlights Section */}
        {p.highlights && (
          <motion.div variants={itemVariants} className="mb-12">
            <div className="neo">
              <div className="inner p-8">
                <h2 className="section-title mb-6 flex items-center gap-2">
                  <CheckCircle size={24} className="text-cyan-300" />
                  Key Highlights
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {p.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-3 bg-zinc-800/50 rounded-lg">
                      <span className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></span>
                      <span className="text-zinc-300">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Modules Section (for Cloud Bouncer) */}
        {p.modules && (
          <motion.div variants={itemVariants} className="mb-12">
            <div className="neo">
              <div className="inner p-8">
                <h2 className="section-title mb-6 flex items-center gap-2">
                  <Code size={24} className="text-cyan-300" />
                  System Modules
                </h2>
                <div className="space-y-4">
                  {p.modules.map((module, idx) => (
                    <div key={idx} className="p-4 bg-zinc-800/50 rounded-lg border-l-4 border-cyan-400">
                      <p className="text-zinc-300">{module}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Journey Section (for Anicafe) */}
        {p.journey && (
          <motion.div variants={itemVariants} className="mb-12">
            <div className="neo">
              <div className="inner p-8">
                <h2 className="section-title mb-6 flex items-center gap-2">
                  <BookOpen size={24} className="text-cyan-300" />
                  Project Journey
                </h2>
                <div className="space-y-4">
                  {p.journey.map((step, idx) => (
                    <div key={idx} className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-cyan-400 rounded-full flex items-center justify-center text-black font-bold text-sm flex-shrink-0">
                        {idx + 1}
                      </div>
                      <p className="text-zinc-300 pt-1">{step}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Learnings Section */}
        {p.learnings && (
          <motion.div variants={itemVariants} className="mb-12">
            <div className="neo">
              <div className="inner p-8">
                <h2 className="section-title mb-6 flex items-center gap-2">
                  <Lightbulb size={24} className="text-cyan-300" />
                  Key Learnings
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {p.learnings.map((learning, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-3 bg-zinc-800/50 rounded-lg">
                      <span className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></span>
                      <span className="text-zinc-300">{learning}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Setup/Infrastructure Section (for Docker, AWS projects) */}
        {p.setup && (
          <motion.div variants={itemVariants} className="mb-12">
            <div className="neo">
              <div className="inner p-8">
                <h2 className="section-title mb-6 flex items-center gap-2">
                  <Code size={24} className="text-cyan-300" />
                  Technical Setup
                </h2>
                <div className="space-y-4">
                  {p.setup.map((step, idx) => (
                    <div key={idx} className="p-4 bg-zinc-800/50 rounded-lg border-l-4 border-cyan-400">
                      <p className="text-zinc-300">{step}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* IAM Configuration (for AWS projects) */}
        {p.iamConfiguration && (
          <motion.div variants={itemVariants} className="mb-12">
            <div className="neo">
              <div className="inner p-8">
                <h2 className="section-title mb-6 flex items-center gap-2">
                  <Shield size={24} className="text-cyan-300" />
                  IAM Configuration
                </h2>
                <div className="space-y-4">
                  {p.iamConfiguration.map((config, idx) => (
                    <div key={idx} className="p-4 bg-zinc-800/50 rounded-lg border-l-4 border-cyan-400">
                      <p className="text-zinc-300">{config}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* VPC & Networking (for AWS projects) */}
        {p.vpcNetworking && (
          <motion.div variants={itemVariants} className="mb-12">
            <div className="neo">
              <div className="inner p-8">
                <h2 className="section-title mb-6 flex items-center gap-2">
                  <Globe size={24} className="text-cyan-300" />
                  VPC & Networking
                </h2>
                <div className="space-y-4">
                  {p.vpcNetworking.map((networking, idx) => (
                    <div key={idx} className="p-4 bg-zinc-800/50 rounded-lg border-l-4 border-cyan-400">
                      <p className="text-zinc-300">{networking}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Infrastructure Details (for deployment projects) */}
        {p.infrastructure && (
          <motion.div variants={itemVariants} className="mb-12">
            <div className="neo">
              <div className="inner p-8">
                <h2 className="section-title mb-6 flex items-center gap-2">
                  <Server size={24} className="text-cyan-300" />
                  Infrastructure
                </h2>
                <div className="space-y-4">
                  {p.infrastructure.map((infra, idx) => (
                    <div key={idx} className="p-4 bg-zinc-800/50 rounded-lg border-l-4 border-cyan-400">
                      <p className="text-zinc-300">{infra}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* SSL & Security (for HTTPS projects) */}
        {p.sslSecurity && (
          <motion.div variants={itemVariants} className="mb-12">
            <div className="neo">
              <div className="inner p-8">
                <h2 className="section-title mb-6 flex items-center gap-2">
                  <Shield size={24} className="text-cyan-300" />
                  SSL & Security
                </h2>
                <div className="space-y-4">
                  {p.sslSecurity.map((security, idx) => (
                    <div key={idx} className="p-4 bg-zinc-800/50 rounded-lg border-l-4 border-cyan-400">
                      <p className="text-zinc-300">{security}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Team Section (for Cloud Bouncer) */}
        {p.team && (
          <motion.div variants={itemVariants} className="mb-12">
            <div className="neo">
              <div className="inner p-8">
                <h2 className="section-title mb-6 flex items-center gap-2">
                  <Users size={24} className="text-cyan-300" />
                  Team
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {p.team.map((member, idx) => (
                    <div key={idx} className="p-3 bg-zinc-800/50 rounded-lg">
                      <p className="text-zinc-300">{member}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Future Plans */}
        {p.futurePlans && (
          <motion.div variants={itemVariants} className="mb-12">
            <div className="neo">
              <div className="inner p-8">
                <h2 className="section-title mb-6 flex items-center gap-2">
                  <Target size={24} className="text-cyan-300" />
                  Future Plans
                </h2>
                <div className="space-y-4">
                  {p.futurePlans.map((plan, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-3 bg-zinc-800/50 rounded-lg">
                      <span className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></span>
                      <span className="text-zinc-300">{plan}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Notes */}
        {p.notes && (
          <motion.div variants={itemVariants} className="mb-12">
            <div className="neo">
              <div className="inner p-8">
                <h2 className="section-title mb-6 flex items-center gap-2">
                  <BookOpen size={24} className="text-cyan-300" />
                  Additional Notes
                </h2>
                <p className="text-zinc-300 leading-relaxed">{p.notes}</p>
              </div>
            </div>
          </motion.div>
        )}

        {/* Project Image Gallery at Bottom */}
        {p.images && p.images.length > 0 && (
          <motion.div variants={itemVariants} className="mb-12">
            <ImageGallery images={p.images} title={p.title} />
          </motion.div>
        )}
        {/* Back to Projects */}
        <motion.div variants={itemVariants} className="text-center pt-8">
          <Link to="/projects" className="btn-secondary">
            ← View All Projects
          </Link>
        </motion.div>
      </motion.section>
    </div>
  )
}
