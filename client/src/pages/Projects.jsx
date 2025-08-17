import { projects } from '@/data/projects.js';
import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import SEO from '@/components/SEO.jsx';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');

  const allTechnologies = useMemo(() => {
    const techSet = new Set();
    projects.forEach(project => {
      project.tech.forEach(tech => techSet.add(tech));
    });
    return Array.from(techSet).sort();
  }, []);

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'All') return projects;
    return projects.filter(project => 
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

        {/* Filter Buttons */}
        <div className="mb-12 flex flex-wrap gap-3 justify-center">
          <button
            className={`chip ${activeFilter === 'All' ? 'bg-cyan-600 text-white' : ''}`}
            onClick={() => setActiveFilter('All')}
          >
            All Projects
          </button>
          {allTechnologies.map(tech => (
            <button
              key={tech}
              className={`chip ${activeFilter === tech ? 'bg-cyan-600 text-white' : ''}`}
              onClick={() => setActiveFilter(tech)}
            >
              {tech}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map(project => (
            <div key={project.id} className="card p-6 flex flex-col group hover:scale-105 transition-transform duration-300">
              {/* Project Image */}
              <div className="mb-4 overflow-hidden rounded-lg">
                <img 
                  src={project.image} 
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

              {/* Project Links */}
              <div className="flex items-center gap-3 mt-auto">
                {project.live && (
                  <a 
                    href={project.live} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn-secondary flex items-center gap-2 group-hover:bg-cyan-600 group-hover:text-white transition-colors"
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                )}
                {project.github && (
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn-secondary flex items-center gap-2 group-hover:bg-cyan-600 group-hover:text-white transition-colors"
                  >
                    <Github size={16} />
                    Code
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* No Projects Message */}
        {filteredProjects.length === 0 && (
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
