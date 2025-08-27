import { projects } from '@/data/projects.js';
import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import SEO from '@/components/SEO.jsx';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');

  const allTechnologies = useMemo(() => {
    const techSet = new Set();
    Object.values(projects).forEach(project => {
      project.tech.forEach(tech => techSet.add(tech));
    });
    return Array.from(techSet).sort();
  }, []);

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'All') return Object.values(projects);
    return Object.values(projects).filter(project => 
      project.tech.includes(activeFilter)
    );
  }, [activeFilter]);

  return (
    <>
      <SEO
        title="Projects"
        description="Explore my portfolio of web development projects, including full-stack applications, e-commerce platforms, and DevOps solutions. See real examples of my work."
        keywords={[
          'Web Development Projects',
          'React Projects',
          'Node.js Projects',
          'Full Stack Projects',
          'E-commerce Projects',
          'DevOps Projects',
          'Portfolio Projects',
          'Web Applications',
          'Project Showcase'
        ]}
        url="/projects"
      />
      <section className="container py-16">
        {/* Header */}
        <header className="mb-16 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 gradient-text">
            Projects
          </h1>
          <p className="text-xl text-zinc-300 max-w-3xl mx-auto leading-relaxed">
            A collection of web applications, tools, and solutions I've built. 
            Each project represents real-world problems solved with modern technology.
          </p>
        </header>

        {/* Featured Projects Section */}
        <section className="mb-16">
          <h2 className="section-title mb-10">Featured Projects</h2>
          <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
            {[projects['cloud-bouncer'], projects['anicafe']].map(project => (
              <article key={project.title} className="card bg-gradient-to-br from-cyan-900/60 to-zinc-900/80 p-8 rounded-3xl shadow-2xl border-2 border-cyan-700 hover:scale-[1.03] transition-all duration-300 hover:shadow-cyan-500/20">
                <div className="overflow-hidden rounded-2xl mb-7">
                  <img
                    src={project.images?.[0] || project.image}
                    alt={project.title}
                    className="object-cover w-full h-56 md:h-64 lg:h-72 shadow-lg"
                  />
                </div>
                <h3 className="font-bold text-2xl mb-3 gradient-text">{project.title}</h3>
                <p className="text-zinc-300 mb-5 text-lg leading-relaxed">{project.oneLiner || project.description}</p>
                {/* Key Highlights */}
                {/* Key Highlights Styled */}
                {(project.highlights && project.highlights.length > 0 ? project.highlights :
                  project.id === 'cloud-bouncer'
                    ? [
                        ...(projects['cloud-bouncer'].modules || []),
                        ...(projects['cloud-bouncer'].functionality || []),
                        `Team: ${projects['cloud-bouncer'].team?.join(', ')}`
                      ]
                    : []
                ).length > 0 && (
                  <div className="mb-6">
                    <div className="font-semibold text-zinc-200 mb-2">Key Highlights:</div>
                    <ul className="space-y-2">
                      {(project.highlights && project.highlights.length > 0 ? project.highlights :
                        project.id === 'cloud-bouncer'
                          ? [
                              ...(projects['cloud-bouncer'].modules || []),
                              ...(projects['cloud-bouncer'].functionality || []),
                              `Team: ${projects['cloud-bouncer'].team?.join(', ')}`
                            ]
                          : []
                      ).map((highlight, idx) => (
                        <li key={idx}>
                          <div className="flex items-center bg-zinc-900 rounded-lg px-4 py-2">
                            <span className="w-2 h-2 rounded-full bg-cyan-400 mr-3"></span>
                            <span className="text-zinc-200 text-base">{highlight}</span>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech?.map(tech => (
                    <span key={tech} className="chip text-xs bg-cyan-700/30 text-cyan-200 border-cyan-500/40 font-semibold shadow-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                {/* Case Study Link and Add links if available */}
                <div className="flex gap-3 mt-auto">
                  <Link
                    to={project.title.includes('Cloud Bouncer') ? '/projects/cloud-bouncer' : '/projects/anicafe'}
                    className="btn-secondary flex items-center gap-2"
                  >
                    <ArrowRight size={16} />
                    Read More
                  </Link>
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn-secondary flex items-center gap-2">
                      <Github size={16} />
                      Code
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Filter Tags */}
        <div className="flex flex-wrap gap-2 justify-center mb-10">
          <button
            className={`chip text-sm px-4 py-2 ${activeFilter === 'All' ? 'bg-cyan-600 text-white' : 'bg-zinc-800 text-cyan-300'}`}
            onClick={() => setActiveFilter('All')}
          >
            All
          </button>
          {allTechnologies.map(tech => (
            <button
              key={tech}
              className={`chip text-sm px-4 py-2 ${activeFilter === tech ? 'bg-cyan-600 text-white' : 'bg-zinc-800 text-cyan-300'}`}
              onClick={() => setActiveFilter(tech)}
            >
              {tech}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(projects)
            .filter(([key, project]) => filteredProjects.includes(project) && !['cloud-bouncer', 'anicafe'].includes(key))
            .map(([key, project]) => (
              <div key={key} className="card p-6 flex flex-col group hover:scale-105 transition-transform duration-300">
                {/* Project Image */}
                <div className="mb-4 overflow-hidden rounded-lg">
                  <img 
                    src={project.image || project.images?.[0]} 
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>

                {/* Project Title */}
                <h3 className="text-xl font-bold mb-3 gradient-text group-hover:text-cyan-300 transition-colors">
                  {project.title}
                </h3>

                {/* Project Description */}
                <p className="text-zinc-300 mb-4 flex-1 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map(tech => (
                    <span key={tech} className="chip text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
                {/* Case Study Link and Add links if available */}
                <div className="flex gap-2 mt-auto">
                  <Link
                    to={`/projects/${key}`}
                    className="btn-secondary flex items-center gap-2"
                  >
                    <ArrowRight size={16} />
                    Read More
                  </Link>
                  {project.live && (
                    <a href={project.live} target="_blank" rel="noopener noreferrer" className="btn-secondary flex items-center gap-2">
                      <ExternalLink size={16} />
                      Live
                    </a>
                  )}
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn-secondary flex items-center gap-2">
                      <Github size={16} />
                      Code
                    </a>
                  )}
                </div>
              </div>
            ))}
        </div>

        {/* No Projects Message */}
        {filteredProjects.filter(project => !['cloud-bouncer', 'anicafe'].includes(project.id)).length === 0 && (
          <div className="text-center py-16">
            <p className="text-zinc-400 text-lg mb-4">
              No projects found with the selected filter.
            </p>
            <button
              onClick={() => setActiveFilter('All')}
              className="btn-secondary"
            >
              View All Projects
            </button>
          </div>
        )}

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold mb-4 text-zinc-200">
            Ready to Build Something Amazing?
          </h2>
          <p className="text-zinc-400 mb-6 max-w-2xl mx-auto">
            Let's collaborate on your next project. I'm always excited to work on new challenges 
            and bring innovative ideas to life.
          </p>
          <Link to="/contact" className="btn-primary inline-flex items-center gap-2">
            Get In Touch
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
