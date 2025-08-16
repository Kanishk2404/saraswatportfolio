import { motion } from 'framer-motion';
import ProfileCard from './ProfileCard';
import { Mail, Github, Linkedin, MessageCircle, Download, Loader2, CheckCircle, AlertCircle } from 'lucide-react';
import { useState } from 'react';
import SEO from '@/components/SEO.jsx';

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    const formData = new FormData(e.target);
    const name = formData.get('name');
    const email = formData.get('email');
    const linkedin = formData.get('linkedin');
    const company = formData.get('company');
    const message = formData.get('message');
    const subject = `Portfolio Contact - ${name}`;
    
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          name, 
          email, 
          linkedin, 
          company, 
          subject, 
          message 
        })
      });
      
      if (res.ok) {
        setSubmitStatus('success');
        e.target.reset();
      } else {
        setSubmitStatus('error');
      }
    } catch (err) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleResumeDownload = () => {
    // For now, show a message. You can replace this with actual resume download
    alert('Resume download feature coming soon! In the meantime, feel free to reach out via email.');
  };

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
          'Contact Form'
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
              
              {/* Contact Form */}
              <div className="bg-zinc-800/50 p-6 rounded-lg mb-8">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-zinc-300 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 bg-zinc-900 border border-zinc-700 rounded-lg text-zinc-100 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-zinc-300 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 bg-zinc-900 border border-zinc-700 rounded-lg text-zinc-100 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="linkedin" className="block text-sm font-medium text-zinc-300 mb-2">
                      LinkedIn Profile (required)
                    </label>
                    <input
                      type="url"
                      id="linkedin"
                      name="linkedin"
                      required
                      className="w-full px-4 py-3 bg-zinc-900 border border-zinc-700 rounded-lg text-zinc-100 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                      placeholder="https://linkedin.com/in/your-profile"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-zinc-300 mb-2">
                      Company Name (optional)
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      className="w-full px-4 py-3 bg-zinc-900 border border-zinc-700 rounded-lg text-zinc-100 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                      placeholder="Your company name (optional)"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-zinc-300 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="4"
                      required
                      className="w-full px-4 py-3 bg-zinc-900 border border-zinc-700 rounded-lg text-zinc-100 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                      placeholder="Tell me about your project or opportunity..."
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full btn-primary flex items-center justify-center gap-2"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        Sending...
                      </>
                    ) : submitStatus === 'success' ? (
                      <>
                        <CheckCircle className="h-4 w-4" />
                        Message Sent!
                      </>
                    ) : (
                      <>
                        <Mail className="h-4 w-4" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
                {submitStatus && (
                  <div className={`mt-4 p-3 rounded-lg text-center ${
                    submitStatus === 'success' ? 'bg-green-500/20 text-green-200' : 'bg-red-500/20 text-red-200'
                  }`}>
                    {submitStatus === 'success' ? 'Message sent! I will get back to you soon.' : 'Failed to send message. Please try again later.'}
                  </div>
                )}
              </div>        

              {/* Social Links */}
              <div className="bg-zinc-800/50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-zinc-200 mb-4">Connect & Follow</h3>
                <div className="grid grid-cols-2 gap-4">
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
                    href="https://hub.docker.com/u/kanishk2404"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 bg-zinc-900/50 rounded-lg hover:bg-zinc-700/50 transition-colors group"
                  >
                    <MessageCircle size={20} className="text-zinc-400 group-hover:text-zinc-200" />
                    <span className="text-zinc-300 group-hover:text-zinc-100">Docker Hub</span>
                  </a>
                  
                  <a
                    href="https://play.picoctf.org/users/kanishk2404"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 bg-zinc-900/50 rounded-lg hover:bg-zinc-700/50 transition-colors group"
                  >
                    <MessageCircle size={20} className="text-zinc-400 group-hover:text-zinc-200" />
                    <span className="text-zinc-300 group-hover:text-zinc-100">picoCTF</span>
                  </a>
                </div>
              </div>

              {/* Resume Download */}
              <div className="bg-zinc-800/50 p-6 rounded-lg mt-6">
                <h3 className="text-lg font-semibold text-zinc-200 mb-3">Resume</h3>
                <p className="text-zinc-300 mb-4">Download my latest resume to learn more about my experience and skills.</p>
                <button className="btn-secondary inline-flex items-center gap-2" onClick={handleResumeDownload}>
                  <Download size={18} />
                  Download Resume (PDF)
                </button>
                <p className="text-xs text-zinc-400 mt-2">Resume will be available soon.</p>
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
