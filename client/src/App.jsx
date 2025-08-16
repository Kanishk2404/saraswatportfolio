import { Outlet, Link, NavLink } from 'react-router-dom'
import { Github, Linkedin, Mail } from 'lucide-react'
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function App() {
  const [navOpen, setNavOpen] = useState(false);
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [pathname]);
  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-50 border-b border-zinc-800/80 bg-[#07090f]/60 backdrop-blur supports-[backdrop-filter]:bg-[#07090f]/40">
        <div className="container h-14 flex items-center justify-between">
          <Link to="/" className="font-extrabold text-lg tracking-tight">
            <span className="text-cyan-400 hover:text-cyan-300 transition-colors text-2xl font-black tracking-widest" style={{letterSpacing: '0.15em'}}>KS</span>
          </Link>
          <nav className="hidden md:flex items-center gap-4 text-sm">
            {[
              ['Home','/'],
              ['Projects','/projects'],
              ['Ventures','/ventures'],
              ['Experience','/experience'],
              ['Blog','/blog'],
              ['Contact','/contact'],
            ].map(([label,href]) => (
              <NavLink key={href} to={href} className={({isActive})=>`px-3 py-1.5 rounded-md border border-transparent hover:border-zinc-800 ${isActive? 'bg-zinc-900/70 text-cyan-300' : 'text-zinc-300'}`}>{label}</NavLink>
            ))}
          </nav>
          <button className="md:hidden p-2 rounded-lg border border-zinc-800 text-zinc-300" onClick={()=>setNavOpen(v=>!v)} aria-label="Open navigation">
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
          </button>
          <div className="flex items-center gap-2">
            <a href="mailto:saraswatkanishk24@gmail.com" className="p-2 rounded-lg hover:bg-zinc-900 border border-zinc-800 transition-colors" aria-label="Email" title="Email"><Mail size={16} /></a>
            <a href="https://github.com/Kanishk2404" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg hover:bg-zinc-900 border border-zinc-800 transition-colors" aria-label="GitHub" title="GitHub"><Github size={16} /></a>
            <a href="https://linkedin.com/in/kanishk-saraswat" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg hover:bg-zinc-900 border border-zinc-800 transition-colors" aria-label="LinkedIn" title="LinkedIn"><Linkedin size={16} /></a>
          </div>
        </div>
        {/* Mobile Nav */}
        {navOpen && (
          <nav className="md:hidden bg-[#07090f] border-t border-zinc-800 px-4 py-4 flex flex-col gap-2 animate-fade-in">
            {[
              ['Home','/'],
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
      <footer className="border-t border-zinc-800 py-8">
        <div className="container subtle text-sm">
          © {new Date().getFullYear()} Kanishk Saraswat. Built with React, Tailwind, and Express. 
          <span className="ml-2 text-zinc-500">• Security enthusiast with PortSwigger Web Security Academy labs experience</span>
        </div>
      </footer>
    </div>
  )
}
