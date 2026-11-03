  import { motion } from 'framer-motion';
  import ProfileCard from './ProfileCard';
  import { Mail, Github, Linkedin, Download } from 'lucide-react';
  import SEO from '@/components/SEO.jsx';

  export default function Contact() {
    return (
    <>
      <SEO 
        title="Contact"
        description="Get in touch with Kanishk Saraswat for web development projects, collaborations, or just to discuss technology. Let's build something amazing together."
        keywords={[
          'Contact Kanishk Saraswat',
          'Web Developer Contact',
          'Hire Developer',
          'Project Collaboration',
          'Web Development Services',
          'Freelance Developer',
          'Professional Contact Details'
        ]}
        url="/contact"
      />
      <div className="bg-grid min-h-screen">
      <section className="container py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Let's Connect</h1>
          <p className="text-lg text-zinc-300 max-w-3xl mx-auto">
            I'm always open to discussing new opportunities, collaborations, or just having a chat about technology and innovation.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-2xl font-bold mb-6 text-zinc-100">Get In Touch</h2>

              {/* Social Links */}
              <div className="bg-zinc-800/50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-zinc-200 mb-4">Connect & Follow</h3>
                <div className="grid sm:grid-cols-3 gap-4">
                  <a
                    href="https://github.com/Kanishk2404"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 bg-zinc-900/50 rounded-lg hover:bg-zinc-700/50 transition-colors group"
                  >
                    <Github size={20} className="text-zinc-400 group-hover:text-zinc-200" />
                    <span className="text-zinc-300 group-hover:text-zinc-100">GitHub</span>
                  </a>
                  
                  <a
                    href="https://linkedin.com/in/kanishk-saraswat"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 bg-zinc-900/50 rounded-lg hover:bg-zinc-700/50 transition-colors group"
                  >
                    <Linkedin size={20} className="text-zinc-400 group-hover:text-zinc-200" />
                    <span className="text-zinc-300 group-hover:text-zinc-100">LinkedIn</span>
                  </a>
                  
                  <a
                    href="mailto:saraswatkanishk24@gmail.com"
                    className="flex items-center gap-3 p-3 bg-zinc-900/50 rounded-lg hover:bg-zinc-700/50 transition-colors group"
                  >
                    <Mail size={20} className="text-zinc-400 group-hover:text-zinc-200" />
                    <span className="text-zinc-300 group-hover:text-zinc-100">Gmail</span>
                  </a>
                </div>
              </div>

              {/* Resume Download */}
              <div className="bg-zinc-800/50 p-6 rounded-lg mt-6">
                <h3 className="text-lg font-semibold text-zinc-200 mb-3">Resume</h3>
                <p className="text-zinc-300 mb-4">Download my latest resume to learn more about my experience and skills.</p>
                <a
                  className="btn-secondary inline-flex items-center gap-2"
                  href="https://drive.google.com/file/d/1ZDZpCayTf8h0uAaK3ZKqNk8XcWN2xY3G/view?usp=drive_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  download
                >
                  <Download size={18} />
                  Download Resume (PDF)
                </a>
                <p className="text-xs text-zinc-400 mt-2">Resume is always up to date and accessible.</p>
              </div>
            </div>
          </motion.div>

          {/* Profile Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-start justify-center lg:justify-start pt-16"
          >
            <ProfileCard
              name="Kanishk Saraswat"
              title="Full-Stack & DevOps"
              handle="kanishk2404"
              status="Online"
              contactText="Contact Me"
              avatarUrl="/images/profile_card.png"
              iconUrl="data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg opacity='0.35'%3E%3Cpath d='M20 30 l10 10 l-10 10' stroke='%2300c1ff' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M60 30 l-10 10 l10 10' stroke='%2300c1ff' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/g%3E%3C/svg%3E"
              showBehindGradient={true}
              showUserInfo={true}
              enableTilt={true}
              enableMobileTilt={false}
              onContactClick={() => window.open('mailto:saraswatkanishk24@gmail.com')}
            />
          </motion.div>
        </div>
      </section>
      </div>
    </>
  );
}
