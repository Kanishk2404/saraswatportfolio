import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Trophy, Code, TrendingUp, Shield, Users, Award, Target, Heart } from 'lucide-react';
import Timeline from '@/components/Timeline.jsx';
import SEO from '@/components/SEO.jsx';

export default function About() {
  const personalInfo = [
    {
      icon: Trophy,
      title: "Sports Background",
  description: "Sports taught me discipline, strategic thinking, and teamwork.",
      color: "text-yellow-400"
    },
    {
      icon: Code,
      title: "Tech Passion",
      description: "Discovered my love for web development and problem-solving. Always eager to learn new technologies and build impactful solutions.",
      color: "text-cyan-400"
    },
    {
      icon: Target,
      title: "Goals & Vision",
      description: "Building scalable systems that solve real problems. Passionate about creating user-centric applications with modern tech stacks.",
      color: "text-green-400"
    },
    {
      icon: Heart,
      title: "Values",
      description: "Quality over quantity, continuous learning, and helping others grow. Believe in writing clean, maintainable code.",
      color: "text-purple-400"
    }
  ];

  const skills = [
    { category: "Frontend", skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"] },
    { category: "Backend", skills: ["Node.js", "Express", "Python", "PostgreSQL", "MongoDB"] },
    { category: "DevOps & Cloud", skills: ["AWS", "Docker", "Jenkins", "Kubernetes", "CI/CD"] },
    { category: "Other", skills: ["SEO", "Cybersecurity", "Content Writing", "Git", "REST APIs"] }
  ];

  return (
    <>
      <SEO 
        title="About"
  description="Learn more about Kanishk Saraswat - full-stack developer. Discover my journey, skills, and passion for building scalable web applications."
        keywords={[
          'About Kanishk Saraswat',
          'Developer Journey',
          'Athlete to Developer',
          'Full Stack Developer',
          'Web Development',
          'DevOps Engineer',
          'React Developer',
          'Node.js Developer',
          'AWS Developer',
          'Cybersecurity',
          'SEO Expert'
        ]}
        url="/about"
      />
      <div className="bg-grid min-h-screen">
      <section className="container py-16">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Me</h1>
          <p className="text-xl text-zinc-300 max-w-3xl mx-auto leading-relaxed">
            Hi, I'm <span className="text-cyan-400 font-semibold">Kanishk Saraswat</span>.<br />
            Passionate about building real systems that scale.<br />
            <span className="block mt-4 text-base text-zinc-400">I haven't built projects just for my resume; I build them to solve real problems I've faced, help others, or for the sake of learning something new.</span>
          </p>
        </motion.div>

        {/* Personal Info Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid md:grid-cols-2 gap-6 mb-20"
        >
          {personalInfo.map((info, i) => (
            <motion.div
              key={info.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 + i * 0.1 }}
              className="neo hover:scale-[1.02] transition-transform duration-300"
            >
              <div className="inner p-6 h-full">
                <div className="flex items-center gap-3 mb-4">
                  <info.icon size={24} className={info.color} />
                  <h3 className="text-xl font-bold text-zinc-100">{info.title}</h3>
                </div>
                <p className="text-zinc-300 leading-relaxed">{info.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-20"
        >
          <h2 className="section-title text-white mb-12">Skills & Technologies</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skillGroup, i) => (
              <motion.div
                key={skillGroup.category}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 + i * 0.1 }}
                className="bg-zinc-800/50 p-6 rounded-xl border border-zinc-700"
              >
                <h3 className="text-lg font-bold text-cyan-400 mb-4">{skillGroup.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.skills.map(skill => (
                    <span key={skill} className="chip text-sm">{skill}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* My Journey Timeline */}
        <Timeline />

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="text-center mt-20"
        >
          <h2 className="text-2xl font-bold text-zinc-100 mb-4">Ready to Work Together?</h2>
          <p className="text-zinc-300 mb-8 max-w-2xl mx-auto">
            Let's discuss your next project and bring your ideas to life. I'm always excited to work on challenging problems.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-primary">
              Get In Touch
            </Link>
            <Link to="/projects" className="btn-secondary">
              View My Work
            </Link>
          </div>
        </motion.div>
      </section>
      </div>
    </>
  );
}
