import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, ExternalLink, Github, Calendar, User, Target, Code, BookOpen, Lightbulb, CheckCircle, ArrowUpRight, Shield, Globe, Server, Users } from 'lucide-react'
import { projects, projectsIndexOrder } from '@/data/projects.js'

export default function Projects() {
  return (
    <div className="bg-grid min-h-screen">
      <section className="container py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Projects</h1>
          <p className="text-lg text-zinc-300 max-w-3xl mx-auto">
            Case studies of real systems — infra, SEO, and security considered. Every project started from solving actual problems.
          </p>
        </motion.div>

        {/* Featured Projects Section */}
        <section className="mb-20">
          <h2 className="text-2xl font-bold mb-10 text-center">Featured Projects</h2>
          <div className="grid lg:grid-cols-2 gap-8">
            {['anicafe', 'cloud-bouncer'].map((slug, i) => (
              <ProjectCard key={slug} slug={slug} featured={true} index={i} />
            ))}
          </div>
        </section>

        {/* Divider */}
        <div className="hr mb-20" />

        {/* More Projects Section */}
        <section>
          <h2 className="text-2xl font-bold mb-10 text-center">More Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projectsIndexOrder.filter(s => !['anicafe', 'cloud-bouncer'].includes(s)).map((slug, i) => (
              <ProjectCard key={slug} slug={slug} featured={false} index={i} />
            ))}
          </div>
        </section>
      </section>
    </div>
  )
}

function ProjectCard({ slug, featured, index }) {
  const project = projects[slug]
  if (!project) return null

  if (featured) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1 }}
        className="project-card card-spacing shadow-2xl border-2 border-cyan-600 bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-800 rounded-2xl mb-10"
      >
        <div className="inner p-10 h-full flex flex-col">
          {/* Header Section */}
          <div className="mb-8 flex-shrink-0">
            <div className="flex items-start justify-between mb-6">
              <h3 className="text-4xl font-extrabold gradient-text flex-1 mr-4 leading-tight drop-shadow-lg whitespace-normal break-words" style={{wordBreak: 'break-word', hyphens: 'auto'}}>{project.title}</h3>
              {project.role && (
                <span className="chip font-medium text-base whitespace-nowrap flex-shrink-0 bg-cyan-600 text-white border-none">{project.role}</span>
              )}
            </div>
            <p className="text-zinc-300 text-xl leading-relaxed font-medium mb-2">
              {project.oneLiner}
            </p>
          </div>

          {/* Image Section - Larger (Thumbnail from images array) */}
          <div className="rounded-2xl border-4 border-cyan-600 bg-zinc-900/70 h-72 flex items-center justify-center text-zinc-500 mb-8 overflow-hidden flex-shrink-0 shadow-lg">
            <img 
              src={project.images && project.images.length > 0 ? project.images[0] : ''} 
              alt={project.title} 
              loading="lazy" width="800" height="400"
              className="w-full h-full object-cover rounded-2xl"
              onError={(e) => {
                e.target.src = `https://via.placeholder.com/800x400/${index === 0 ? '0ea5e9' : '8b5cf6'}/FFFFFF?text=${project.title.replace(/\s+/g, '+')}`
              }}
            />
          </div>

          {/* Key Information Grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-8 flex-shrink-0">
            {project.tech && (
              <div className="bg-zinc-800/70 rounded-xl p-6 shadow-md">
                <h4 className="text-lg font-semibold text-cyan-400 mb-4 flex items-center gap-2">
                  <Code size={20} className="text-cyan-300" />
                  Tech Stack
                </h4>
                <div className="flex flex-wrap gap-3">
                  {project.tech.slice(0, 6).map(tech => (
                    <span key={tech} className="chip text-sm break-words">{tech}</span>
                  ))}
                  {project.tech.length > 6 && (
                    <span className="text-sm text-zinc-500 italic">+{project.tech.length - 6} more</span>
                  )}
                </div>
              </div>
            )}

            {project.status && (
              <div className="bg-zinc-800/50 rounded-lg p-4">
                <h4 className="text-sm font-semibold text-zinc-200 mb-3 flex items-center gap-2">
                  <Target size={16} className="text-cyan-300" />
                  Status
                </h4>
                <p className="text-zinc-300 text-sm">{project.status}</p>
              </div>
            )}
          </div>

          {/* Highlights Section - Enhanced */}
          {project.highlights && (
            <div className="mb-6 flex-grow overflow-hidden">
              <h4 className="text-sm font-semibold text-zinc-200 mb-4 flex items-center gap-2">
                <CheckCircle size={16} className="text-cyan-300" />
                Key Highlights
              </h4>
              <div className="space-y-3">
                {project.highlights.slice(0, 5).map((highlight, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3 bg-zinc-800/50 rounded-lg">
                    <span className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-sm text-zinc-300 leading-relaxed break-words">{highlight}</span>
                  </div>
                ))}
                {project.highlights.length > 5 && (
                  <div className="text-xs text-zinc-500 italic mt-3 text-center">
                    +{project.highlights.length - 5} more highlights available in full case study
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Additional Project Details */}
          <div className="mb-6 flex-shrink-0">
            {project.modules && (
              <div className="bg-zinc-800/50 rounded-lg p-4 mb-4">
                <h4 className="text-sm font-semibold text-zinc-200 mb-3 flex items-center gap-2">
                  <Server size={16} className="text-cyan-300" />
                  System Modules
                </h4>
                <div className="space-y-2">
                  {project.modules.slice(0, 2).map((module, idx) => (
                    <div key={idx} className="text-sm text-zinc-400 flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-zinc-600 rounded-full mt-2 flex-shrink-0"></span>
                      <span className="leading-relaxed">{module}</span>
                    </div>
                  ))}
                  {project.modules.length > 2 && (
                    <div className="text-xs text-zinc-500 italic mt-2">
                      +{project.modules.length - 2} more modules in full case study
                    </div>
                  )}
                </div>
              </div>
            )}

            {project.team && (
              <div className="bg-zinc-800/50 rounded-lg p-4">
                <h4 className="text-sm font-semibold text-zinc-200 mb-3 flex items-center gap-2">
                  <Users size={16} className="text-cyan-300" />
                  Team
                </h4>
                <div className="grid grid-cols-2 gap-2">
                  {project.team.slice(0, 4).map((member, idx) => (
                    <div key={idx} className="text-sm text-zinc-400 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-zinc-600 rounded-full"></span>
                      <span className="truncate">{member}</span>
                    </div>
                  ))}
                  {project.team.length > 4 && (
                    <div className="text-xs text-zinc-500 italic col-span-2 text-center">
                      +{project.team.length - 4} more team members
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Footer Section - Enhanced */}
          <div className="mt-auto flex-shrink-0">
            <div className="flex items-center justify-between p-4 bg-zinc-800/50 rounded-lg">
              <div className="flex items-center gap-4 text-sm text-zinc-400">
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300">
                    <Github size={16} />
                    Code
                  </a>
                )}
                {project.live && (
                  <a href={project.live} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300">
                    <ExternalLink size={16} />
                    Live
                  </a>
                )}
              </div>
              <Link 
                to={`/projects/${slug}`} 
                className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-medium text-base transition-colors hover:scale-105 bg-zinc-700/50 px-4 py-2 rounded-lg"
              >
                Read full case study <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      className="neo h-[500px] mb-6"
    >
      <div className="inner p-6 h-full flex flex-col">
        {/* Header */}
        <h3 className="text-xl font-bold mb-3 text-zinc-100 leading-tight flex-shrink-0">{project.title}</h3>
        
        {/* Image (Thumbnail from images array) */}
        <div className="rounded-lg border border-zinc-700 bg-zinc-900/50 h-40 flex items-center justify-center text-zinc-500 mb-4 overflow-hidden flex-shrink-0">
          <img 
            src={project.images && project.images.length > 0 ? project.images[0] : ''} 
            alt={project.title} 
            loading="lazy" width="400" height="200"
            className="w-full h-full object-cover rounded-lg"
            onError={(e) => {
              e.target.src = `https://via.placeholder.com/400x200/6b7280/FFFFFF?text=${project.title.replace(/\s+/g, '+')}`
            }}
          />
        </div>

        {/* Description */}
        <p className="text-zinc-300 text-sm leading-relaxed mb-4 flex-grow overflow-hidden break-words">
          {project.oneLiner}
        </p>

        {/* Quick Tech Preview */}
        {project.tech && (
          <div className="mb-4 flex-shrink-0">
            <div className="flex flex-wrap gap-2">
              {project.tech.slice(0, 3).map(tech => (
                <span key={tech} className="chip text-xs break-words">{tech}</span>
              ))}
              {project.tech.length > 3 && (
                <span className="text-xs text-zinc-500 italic">+{project.tech.length - 3} more</span>
              )}
            </div>
          </div>
        )}

        {/* Footer */}
        <div className="mt-auto flex-shrink-0">
          <Link 
            to={`/projects/${slug}`} 
            className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-medium text-sm transition-colors hover:scale-105 bg-zinc-700/50 px-3 py-2 rounded-lg w-full justify-center"
          >
            Read more <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </motion.div>
  )
}
