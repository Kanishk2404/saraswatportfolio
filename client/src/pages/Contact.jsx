import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, MessageCircle, Download } from 'lucide-react';

export default function Contact() {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');
    const subject = `Portfolio Contact - ${name}`;
    try {
      const res = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, subject, message })
      });
      if (res.ok) {
        alert('Message sent! I will get back to you soon.');
        e.target.reset();
      } else {
        alert('Failed to send message. Please try again later.');
      }
    } catch (err) {
      alert('Error sending message.');
    }
  };

  return (
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
              <h2 className="text-2xl font-bold mb-6 text-zinc-100">Hire Me</h2>
              <div className="space-y-4">
                <div className="bg-zinc-800/50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-zinc-200 mb-2">Roles I'm Looking For</h3>
                  <ul className="text-zinc-300 space-y-1">
                    <li>• Full-Stack Developer with DevOps responsibilities</li>
                    <li>• Junior DevOps/SRE/Platform Engineer</li>
                    <li>• Cloud Infrastructure Engineer</li>
                    <li>• Security-focused Developer</li>
                  </ul>
                </div>
                
                <div className="bg-zinc-800/50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-zinc-200 mb-2">Availability</h3>
                  <p className="text-zinc-300">IST timezone • Full-time or contract positions</p>
                  <p className="text-zinc-300 mt-2">Open to remote opportunities worldwide</p>
                </div>

                <div className="bg-zinc-800/70 p-12 rounded-3xl shadow-2xl min-h-[540px] flex flex-col justify-center w-full max-w-xl mx-auto border border-cyan-700">
                  <h3 className="text-3xl font-extrabold text-cyan-300 mb-6 text-center tracking-tight">Get Started</h3>
                  <p className="text-zinc-300 mb-8 text-lg text-center">Request a 15-minute introduction call to discuss how we can work together.</p>
                  <form onSubmit={async (e) => {
                    e.preventDefault();
                    const formData = new FormData(e.target);
                    const name = formData.get('name');
                    const email = formData.get('email');
                    const company = formData.get('company');
                    const linkedin = formData.get('linkedin');
                    const preferredTime = formData.get('preferredTime');
                    const why = formData.get('why');
                    const message = `Request for intro call.\nPreferred time: ${preferredTime}\nCompany: ${company}\nLinkedIn: ${linkedin}\nWhy: ${why}`;
                    const subject = `Intro Call Request - ${name}`;
                    try {
                      const res = await fetch('http://localhost:5000/api/contact', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ name, email, subject, message })
                      });
                      if (res.ok) {
                        alert('Request sent! I will get back to you soon.');
                        e.target.reset();
                      } else {
                        alert('Failed to send request. Please try again later.');
                      }
                    } catch (err) {
                      alert('Error sending request.');
                    }
                  }} className="space-y-6 mt-2">
                    <input type="text" name="name" required placeholder="Your name" className="w-full px-5 py-4 bg-zinc-900 border border-cyan-600 rounded-2xl text-zinc-100 text-base focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent" />
                    <input type="email" name="email" required placeholder="Your email" className="w-full px-5 py-4 bg-zinc-900 border border-cyan-600 rounded-2xl text-zinc-100 text-base focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent" />
                    <input type="text" name="company" placeholder="Company name (optional)" className="w-full px-5 py-4 bg-zinc-900 border border-cyan-600 rounded-2xl text-zinc-100 text-base focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent" />
                    <input type="url" name="linkedin" required placeholder="LinkedIn profile (required)" className="w-full px-5 py-4 bg-zinc-900 border border-cyan-600 rounded-2xl text-zinc-100 text-base focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent" />
                    <input type="text" name="preferredTime" placeholder="Preferred time (optional)" className="w-full px-5 py-4 bg-zinc-900 border border-cyan-600 rounded-2xl text-zinc-100 text-base focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent" />
                    <select name="why" required className="w-full px-5 py-4 bg-zinc-900 border border-cyan-600 rounded-2xl text-zinc-100 text-base focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent">
                      <option value="" disabled selected>Why do you want to connect?</option>
                      <option value="hire">Hire</option>
                      <option value="discuss">Discuss Work</option>
                      <option value="collaborate">Collaborate</option>
                      <option value="network">Network</option>
                      <option value="other">Other</option>
                    </select>
                    <button type="submit" className="btn-primary w-full flex items-center justify-center gap-2 py-4 text-xl rounded-2xl mt-2">
                      <Mail size={24} />
                      Start Conversation
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form & Social Links */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
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
                    className="w-full btn-primary"
                  >
                    Send Message
                  </button>
                </form>
                {/* Message will be sent directly from the site. */}
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
                <button className="btn-secondary inline-flex items-center gap-2" onClick={() => alert('Resume not added yet. Will be available soon.')}>
                  <Download size={18} />
                  Download Resume (PDF)
                </button>
                <p className="text-xs text-zinc-400 mt-2">Resume will be available soon.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
