import { motion } from 'framer-motion';
import { Cloud, Shield, Layers, LineChart, Code, Database, Server, Zap } from 'lucide-react';
import SEO from '@/components/SEO.jsx';

const skillCategories = [
  {
    title: 'DevOps/Cloud',
    icon: Cloud,
    description: 'Infrastructure as code, cloud deployment, and automation',
    skills: [
      { name: 'AWS (EC2, Route53, ECS, Lambda)', level: null },
      { name: 'Docker & Containerization', level: null },
      { name: 'Jenkins CI/CD', level: null },
      { name: 'Linux Administration', level: null },
      { name: 'Nginx & HTTPS/Certbot', level: null },
      { name: 'Kubernetes', level: 'Learning' },
      { name: 'Terraform', level: 'Learning' }
    ]
  },
  {
    title: 'Full-Stack Development',
    icon: Code,
    description: 'Frontend and backend development with modern frameworks',
    skills: [
      { name: 'Html,CSS, Js', level: null },

      { name: 'React', level: null },
      { name: 'Node.js & Express', level: null },
      { name: 'Tailwind CSS, Bootstrap', level: null },
     
    ]
  },
  {
    title: 'Security & Cybersecurity',
    icon: Shield,
    description: 'Web application security and penetration testing',
    skills: [
      { name: 'Web App Pentesting', level: null },
      { name: 'Burp Suite', level: null },
      { name: 'Wireshark', level: null },
      { name: 'nslookup & DNS', level: null },
      { name: 'picoCTF Top 500', level: null },
      { name: 'PortSwigger Web Security Academy', level: null },
      { name: 'TryHackMe', level: null }
    ]
  },
  {
    title: 'Growth & SEO',
    icon: LineChart,
    description: 'Search engine optimization and digital marketing',
    skills: [
      { name: 'WordPress at Scale', level: null },
      { name: 'Google Analytics (GA4)', level: null },
      { name: 'Search Console', level: null },
      { name: 'Local SEO', level: null },
      { name: 'AdSense Management', level: null },
      { name: 'Content Strategy', level: null }
    ]
  },
  {
    title: 'AI Tools & Automation',
    icon: Zap,
    description: 'Leveraging AI for productivity and automation',
    skills: [
      { name: 'ChatGPT & Prompting', level: null },
      { name: 'Notion AI', level: null },
      { name: 'Framer AI', level: null },
      { name: 'GitHub Copilot', level: null },
      { name: 'AI Workflow Automation', level: null },
      { name: 'Content Generation', level: null }
    ]
  },
  {
    title: 'Databases & Backend',
    icon: Database,
    description: 'Database design and backend infrastructure',
    skills: [
      { name: 'DynamoDB', level: null },
      { name: 'RDS (PostgreSQL/MySQL)', level: 'Learning' },
    ]
  },
  {
    title: 'Serverless & Cloud Services',
    icon: Server,
    description: 'Modern cloud-native architectures',
    skills: [
      { name: 'AWS Lambda', level: null },
      { name: 'API Gateway', level: null },
      { name: 'SNS & SQS', level: null },
      { name: 'AWS Amplify', level: null },
      { name: 'Serverless Architecture', level: null }
    ]
  },
  {
    title: 'Tools & Technologies',
    icon: Layers,
    description: 'Development tools and version control',
    skills: [
      { name: 'Git & GitHub', level: null },
      { name: 'VS Code', level: null },
      { name: 'Postman/Insomnia', level: null },
      { name: 'Docker Desktop', level: null },
      { name: 'Terminal/CLI', level: null }
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
                    <div key={skillIndex} className="flex items-center justify-between p-3 bg-zinc-800/50 rounded-lg">
                      <span className="text-zinc-300 text-sm font-medium">{skill.name}</span>
                      {skill.level && (
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${getLevelColor(skill.level)}`}>
                          {skill.level}
                        </span>
                      )}
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
