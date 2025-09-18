
import { blogPosts } from '@/data/blog.js';
import { useParams, Link } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';

export default function BlogPost() {
  const { id } = useParams();
  const post = blogPosts.find(p => p.id === id);

  if (!post) {
    return (
      <section className="container py-16">
        <div className="text-2xl font-bold mb-6 text-red-400">Blog post not found.</div>
        <Link to="/blog" className="btn-secondary">← Back to Blog</Link>
      </section>
    );
  }

  const isSuiteGenie = post.id === 'suitegenie-story';

  // --- Chapter Guide Logic (for SuiteGenie only) ---
  const contentRef = useRef(null);
  const [chapters, setChapters] = useState([]);

  useEffect(() => {
    if (!isSuiteGenie) return;
    // Parse <h2> from the rendered HTML
    const temp = document.createElement('div');
    temp.innerHTML = post.content;
    const h2s = Array.from(temp.querySelectorAll('h2'));
    setChapters(
      h2s.map((el, idx) => ({
        id: `chapter-${idx + 1}`,
        text: el.textContent || `Chapter ${idx + 1}`
      }))
    );
  }, [isSuiteGenie, post.content]);

  // Add IDs to <h2> after render for anchor navigation
  useEffect(() => {
    if (!isSuiteGenie || !contentRef.current) return;
    const h2s = contentRef.current.querySelectorAll('h2');
    chapters.forEach((ch, idx) => {
      if (h2s[idx]) h2s[idx].id = ch.id;
    });
  }, [isSuiteGenie, chapters]);

  // Scroll to chapter
  const scrollToChapter = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className={`container py-16 ${isSuiteGenie ? 'max-w-5xl' : 'max-w-3xl'} mx-auto`}>
      {isSuiteGenie ? (
        <div className="relative bg-zinc-900/80 rounded-2xl shadow-2xl p-0 md:p-0 border border-zinc-800 overflow-hidden flex flex-col md:flex-row">
          {/* Timeline bar */}
          <div className="hidden md:block absolute left-8 top-0 h-full w-2 bg-gradient-to-b from-cyan-500/80 to-blue-500/40 rounded-full opacity-60 z-0" />
          {/* Chapter Guide Sidebar (Desktop) */}
          {chapters.length > 0 && (
            <nav className="hidden md:flex flex-col gap-2 absolute right-0 top-0 h-full w-64 p-8 bg-zinc-950/80 border-l border-zinc-800 z-20">
              <div className="font-bold text-cyan-300 mb-4 text-lg tracking-wide">Chapters</div>
              <ul className="flex flex-col gap-2">
                {chapters.map(ch => (
                  <li key={ch.id}>
                    <button
                      className="text-left w-full px-3 py-2 rounded-lg hover:bg-cyan-900/30 text-cyan-200 font-medium transition"
                      onClick={() => scrollToChapter(ch.id)}
                    >
                      {ch.text}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          )}
          {/* Chapter Guide (Mobile) */}
          {chapters.length > 0 && (
            <nav className="md:hidden w-full overflow-x-auto bg-zinc-950/80 border-b border-zinc-800 sticky top-0 z-20">
              <ul className="flex gap-2 px-2 py-3">
                {chapters.map(ch => (
                  <li key={ch.id}>
                    <button
                      className="px-3 py-2 rounded-lg hover:bg-cyan-900/30 text-cyan-200 font-medium whitespace-nowrap transition"
                      onClick={() => scrollToChapter(ch.id)}
                    >
                      {ch.text}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          )}
          <div className="relative z-10 px-4 md:px-16 py-10 w-full md:w-[calc(100%-16rem)]" ref={contentRef}>
            <h1 className="text-4xl font-extrabold mb-8 gradient-text text-center drop-shadow-lg font-serif tracking-wide">{post.title}</h1>
            <div
              className="prose prose-lg max-w-none mx-auto mb-8 prose-img:rounded-xl prose-img:shadow-lg prose-img:border prose-img:border-zinc-800 prose-h2:mt-16 prose-h2:mb-6 prose-h2:pl-8 prose-h2:relative prose-h2:font-extrabold prose-h2:text-cyan-300 prose-h2:font-serif prose-h2:tracking-wide prose-h2:before:content-[''] prose-h2:before:absolute prose-h2:before:-left-8 prose-h2:before:top-1/2 prose-h2:before:-translate-y-1/2 prose-h2:before:w-6 prose-h2:before:h-6 prose-h2:before:bg-cyan-400 prose-h2:before:rounded-full prose-h2:before:shadow-lg prose-h2:before:ring-2 prose-h2:before:ring-cyan-700 prose-h2:before:opacity-80 prose-h3:mt-8 prose-h3:mb-2 prose-h3:text-cyan-400 prose-p:leading-relaxed prose-blockquote:bg-cyan-900/10 prose-blockquote:border-cyan-500 prose-blockquote:rounded-lg prose-blockquote:p-4 prose-blockquote:my-6 prose-strong:text-cyan-300 prose-strong:font-semibold prose-hr:my-10 prose-hr:border-cyan-700"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
            <div className="mt-8 text-center">
              <Link to="/blog" className="btn-secondary">← Back to Blog</Link>
            </div>
          </div>
        </div>
      ) : (
        <div className="bg-zinc-900/80 rounded-2xl shadow-2xl p-8 md:p-12 border border-zinc-800">
          <h1 className="text-4xl font-extrabold mb-8 gradient-text text-center drop-shadow-lg">{post.title}</h1>
          <div
            className="prose prose-lg max-w-none mx-auto mb-8 prose-img:rounded-xl prose-img:shadow-lg prose-img:border prose-img:border-zinc-800 prose-h2:mt-12 prose-h2:mb-4 prose-h2:border-l-4 prose-h2:border-cyan-500 prose-h2:pl-4 prose-h2:bg-zinc-800/60 prose-h2:py-2 prose-h2:font-bold prose-h2:text-cyan-300 prose-h3:mt-8 prose-h3:mb-2 prose-h3:text-cyan-400 prose-p:leading-relaxed prose-blockquote:bg-cyan-900/10 prose-blockquote:border-cyan-500 prose-blockquote:rounded-lg prose-blockquote:p-4 prose-blockquote:my-6"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
          <div className="mt-8 text-center">
            <Link to="/blog" className="btn-secondary">← Back to Blog</Link>
          </div>
        </div>
      )}
    </section>
  );
}
