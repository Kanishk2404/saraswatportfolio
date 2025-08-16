import { Outlet, Link, NavLink } from 'react-router-dom'
import { Github, Linkedin, Mail, Palette, ArrowUp } from 'lucide-react'
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Analytics from './components/Analytics';

export default function App() {
  const [navOpen, setNavOpen] = useState(false);
  const [theme, setTheme] = useState('cyan'); // 'cyan' or 'red'
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [pathname]);

  useEffect(() => {
    // Check for saved theme preference or default to cyan
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  useEffect(() => {
    // Apply theme to document
    if (theme === 'red') {
      document.documentElement.setAttribute('data-theme', 'red');
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    // Scroll progress and back to top functionality
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.body.offsetHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      setScrollProgress(scrollPercent);
      setShowBackToTop(scrollTop > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === 'cyan' ? 'red' : 'cyan');
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Scroll Progress Bar */}
      <div 
        className="scroll-progress" 
        style={{ width: `${scrollProgress}%` }}
      />
      
      <header className="sticky top-0 z-50 border-b border-zinc-800/80 bg-[#07090f]/60 backdrop-blur supports-[backdrop-filter]:bg-[#07090f]/40 dark:bg-[#07090f]/60 dark:supports-[backdrop-filter]:bg-[#07090f]/40">
        <div className="container h-14 flex items-center justify-between">
          <Link to="/" className="font-extrabold text-lg tracking-tight">
            <span className="text-cyan-400 hover:text-cyan-300 transition-colors text-2xl font-black tracking-widest" style={{letterSpacing: '0.15em'}}>KS</span>
          </Link>
          <nav className="hidden md:flex items-center gap-4 text-sm">
            {[
              ['Home','/'],
              ['About','/about'],
              ['Skills','/skills'],
              ['Projects','/projects'],
              ['Ventures','/ventures'],
              ['Experience','/experience'],
              ['Blog','/blog'],
              ['Contact','/contact'],
            ].map(([label,href]) => (
              <NavLink key={href} to={href} className={({isActive})=>`px-3 py-1.5 rounded-md border border-transparent hover:border-zinc-800 ${isActive? 'bg-zinc-900/70 text-cyan-300' : 'text-zinc-300'}`}>{label}</NavLink>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            {/* Theme Toggle */}
            <button 
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-zinc-900 border border-zinc-800 transition-colors text-zinc-300"
              aria-label="Toggle theme"
              title={theme === 'cyan' ? 'Switch to red theme' : 'Switch to cyan theme'}
            >
              <Palette size={16} />
            </button>
            
            <a href="mailto:saraswatkanishk24@gmail.com" className="p-2 rounded-lg hover:bg-zinc-900 border border-zinc-800 transition-colors" aria-label="Email" title="Email"><Mail size={16} /></a>
            <a href="https://github.com/Kanishk2404" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg hover:bg-zinc-900 border border-zinc-800 transition-colors" aria-label="GitHub" title="GitHub"><Github size={16} /></a>
            <a href="https://linkedin.com/in/kanishk-saraswat" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg hover:bg-zinc-900 border border-zinc-800 transition-colors" aria-label="LinkedIn" title="LinkedIn"><Linkedin size={16} /></a>
          </div>
          <button className="md:hidden p-2 rounded-lg border border-zinc-800 text-zinc-300" onClick={()=>setNavOpen(v=>!v)} aria-label="Open navigation">
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
          </button>
        </div>
        {/* Mobile Nav */}
        {navOpen && (
          <nav className="md:hidden bg-[#07090f] border-t border-zinc-800 px-4 py-4 flex flex-col gap-2 animate-fade-in">
            {[
              ['Home','/'],
              ['About','/about'],
              ['Skills','/skills'],
              ['Projects','/projects'],
              ['Ventures','/ventures'],
              ['Experience','/experience'],
              ['Blog','/blog'],
              ['Contact','/contact'],
            ].map(([label,href]) => (
              <NavLink key={href} to={href} className={({isActive})=>`px-4 py-3 rounded-lg border border-transparent hover:border-cyan-700 text-lg font-semibold ${isActive? 'bg-zinc-900/70 text-cyan-300' : 'text-zinc-300'}`} onClick={()=>setNavOpen(false)}>{label}</NavLink>
            ))}
          </nav>
        )}
      </header>
      <main className="flex-1"><Outlet /></main>
      <Analytics />
      <footer className="border-t border-zinc-800 py-12">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            {/* Brand Section */}
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-cyan-400 text-2xl font-black tracking-widest">KS</span>
                <span className="text-xl font-bold text-zinc-100">Kanishk Saraswat</span>
              </div>
              <p className="text-zinc-400 mb-4 max-w-md">
                Full-stack developer and DevOps enthusiast passionate about building scalable web applications 
                and solving real-world problems with modern technology.
              </p>
              <div className="flex gap-3">
                <a 
                  href="https://github.com/Kanishk2404" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 transition-colors text-zinc-300 hover:text-white"
                  aria-label="GitHub"
                >
                  <Github size={20} />
                </a>
                <a 
                  href="https://linkedin.com/in/kanishk-saraswat" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 transition-colors text-zinc-300 hover:text-white"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
                <a 
                  href="mailto:saraswatkanishk24@gmail.com"
                  className="p-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 transition-colors text-zinc-300 hover:text-white"
                  aria-label="Email"
                >
                  <Mail size={20} />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold text-zinc-100 mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link to="/" className="text-zinc-400 hover:text-cyan-400 transition-colors">Home</Link></li>
                <li><Link to="/about" className="text-zinc-400 hover:text-cyan-400 transition-colors">About</Link></li>
                <li><Link to="/projects" className="text-zinc-400 hover:text-cyan-400 transition-colors">Projects</Link></li>
                <li><Link to="/experience" className="text-zinc-400 hover:text-cyan-400 transition-colors">Experience</Link></li>
                <li><Link to="/contact" className="text-zinc-400 hover:text-cyan-400 transition-colors">Contact</Link></li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg font-semibold text-zinc-100 mb-4">Services</h3>
              <ul className="space-y-2">
                <li className="text-zinc-400">Web Development</li>
                <li className="text-zinc-400">DevOps & Cloud</li>
                <li className="text-zinc-400">SEO Optimization</li>
                <li className="text-zinc-400">Cybersecurity</li>
                <li className="text-zinc-400">Content Writing</li>
              </ul>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-zinc-700 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-zinc-400">
              © {new Date().getFullYear()} Kanishk Saraswat. All rights reserved.
            </div>
            <div className="flex items-center gap-6 text-sm text-zinc-400">
              <span>Built with React, Tailwind, and Express</span>
              <span>•</span>
              <span>Security enthusiast</span>
              <span>•</span>
              <span>Top 500 picoCTF ranking</span>
            </div>
          </div>
        </div>
      </footer>
      
      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className={`back-to-top ${showBackToTop ? 'visible' : ''}`}
        aria-label="Back to top"
      >
        <ArrowUp size={20} />
      </button>
    </div>
  )
}
