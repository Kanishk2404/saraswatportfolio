import { blogCategories, blogPosts } from '@/data/blog.js';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, User, ArrowRight, BookOpen } from 'lucide-react';
import SEO from '@/components/SEO.jsx';

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'list'
  const [readingProgress, setReadingProgress] = useState(0);
  const filteredPosts = selectedCategory === 'All'
    ? blogPosts
    : blogPosts.filter(post => post.category === selectedCategory);

  // Reading progress effect
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      setReadingProgress(scrollPercent);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <SEO 
        title="Blog"
        description="Explore insights on web development, SEO, DevOps, and technology. Read about my experiences, projects, and learnings in the tech world."
        keywords={[
          'Blog',
          'Web Development Blog',
          'SEO Blog',
          'DevOps Blog',
          'Technology Blog',
          'Programming Blog',
          'Tech Insights',
          'Developer Blog'
        ]}
        url="/blog"
      />
      
      {/* Reading Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-zinc-800 z-50">
        <div 
          className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 transition-all duration-300"
          style={{ width: `${readingProgress}%` }}
        />
      </div>

      <section className="container py-16">
        {/* Enhanced Header with Stats */}
        <header className="mb-16 text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <BookOpen className="w-8 h-8 text-cyan-400" />
            <h1 className="text-4xl md:text-6xl font-extrabold gradient-text">
              Blog
            </h1>
          </div>
          <p className="text-xl text-zinc-300 max-w-3xl mx-auto leading-relaxed mb-8">
            Insights on web development, SEO, DevOps, and technology. Sharing my experiences, 
            learnings, and thoughts on building better software.
          </p>
          
          {/* Blog Stats Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
            <div className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-cyan-400">{blogPosts.length}</div>
              <div className="text-sm text-zinc-400">Articles</div>
            </div>
            <div className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-green-400">{blogCategories.length}</div>
              <div className="text-sm text-zinc-400">Categories</div>
            </div>
            <div className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-purple-400">2025</div>
              <div className="text-sm text-zinc-400">Started</div>
            </div>
            <div className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-orange-400">Weekly</div>
              <div className="text-sm text-zinc-400">Updates</div>
            </div>
          </div>
        </header>

        {/* Enhanced Controls */}
        <div className="mb-12 flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Category Filter */}
          <div className="flex flex-wrap gap-3">
            <button
              className={`chip transition-all duration-300 ${
                selectedCategory === 'All' 
                  ? 'bg-cyan-600 text-white shadow-lg shadow-cyan-600/25' 
                  : 'hover:bg-zinc-800 hover:border-cyan-500/50'
              }`}
              onClick={() => setSelectedCategory('All')}
            >
              All Posts
            </button>
            {blogCategories.map(cat => (
              <button
                key={cat}
                className={`chip transition-all duration-300 ${
                  selectedCategory === cat 
                    ? 'bg-cyan-600 text-white shadow-lg shadow-cyan-600/25' 
                    : 'hover:bg-zinc-800 hover:border-cyan-500/50'
                }`}
                onClick={() => setSelectedCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* View Mode Toggle */}
          <div className="flex items-center gap-2 bg-zinc-900/50 border border-zinc-800 rounded-lg p-1">
            <button
              className={`p-2 rounded-md transition-colors ${
                viewMode === 'grid' 
                  ? 'bg-cyan-600 text-white' 
                  : 'text-zinc-400 hover:text-white'
              }`}
              onClick={() => setViewMode('grid')}
              title="Grid View"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M3 3h7v7H3V3zm0 11h7v7H3v-7zm11-11h7v7h-7V3zm0 11h7v7h-7v-7z"/>
              </svg>
            </button>
            <button
              className={`p-2 rounded-md transition-colors ${
                viewMode === 'list' 
                  ? 'bg-cyan-600 text-white' 
                  : 'text-zinc-400 hover:text-white'
              }`}
              onClick={() => setViewMode('list')}
              title="List View"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z"/>
              </svg>
            </button>
          </div>
        </div>

        {/* Enhanced Blog Posts Display */}
        <div className={viewMode === 'grid' 
          ? "grid md:grid-cols-2 lg:grid-cols-3 gap-8" 
          : "space-y-6"
        }>
          {filteredPosts.map(post => (
            <article key={post.id} className="group">
              <div className={`card p-6 flex flex-col h-full hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/10 border border-zinc-800/50 hover:border-cyan-500/30 ${
                viewMode === 'list' ? 'md:flex-row md:items-center' : ''
              }`}>
                {/* Enhanced Featured Image */}
                {post.featuredImage && (
                  <div className={`overflow-hidden rounded-xl ${
                    viewMode === 'list' ? 'md:w-48 md:flex-shrink-0' : 'mb-6'
                  }`}>
                    <div className="relative">
                      <img 
                        src={post.featuredImage} 
                        alt={post.title}
                        className={`object-cover group-hover:scale-110 transition-transform duration-500 ${
                          viewMode === 'list' ? 'h-32 md:h-full' : 'w-full h-48'
                        }`}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  </div>
                )}

                <div className={`flex-1 ${viewMode === 'list' ? 'md:ml-6' : ''}`}>
                  {/* Enhanced Category & Tags */}
                  <div className="flex items-center gap-2 mb-4">
                    <span className="chip text-xs bg-cyan-600/20 text-cyan-300 border-cyan-600/30 font-medium">
                      {post.category}
                    </span>
                    {post.tags.slice(0, 2).map(tag => (
                      <span key={tag} className="chip text-xs bg-zinc-800/50 text-zinc-300 border-zinc-700/50">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Enhanced Title */}
                  <h2 className={`font-bold gradient-text group-hover:text-cyan-300 transition-colors duration-300 leading-tight mb-4 ${
                    viewMode === 'list' ? 'text-xl md:text-2xl' : 'text-xl'
                  }`}>
                    {post.title}
                  </h2>

                  {/* Enhanced Meta Info */}
                  <div className="flex items-center gap-4 text-zinc-400 text-sm mb-4">
                    <div className="flex items-center gap-1">
                      <User size={14} className="text-cyan-400" />
                      <span className="font-medium">{post.author}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar size={14} className="text-cyan-400" />
                      <span>{new Date(post.date).toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'short', 
                        day: 'numeric' 
                      })}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock size={14} className="text-cyan-400" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  {/* Enhanced Summary */}
                  <p className={`text-zinc-300 mb-6 leading-relaxed ${
                    viewMode === 'list' ? 'text-sm md:text-base' : 'text-sm'
                  }`}>
                    {post.summary}
                  </p>

                  {/* Enhanced Action Buttons */}
                  <div className="flex items-center justify-between mt-auto">
                    <Link 
                      to={`/blog/${post.id}`} 
                      className="btn-secondary group-hover:bg-cyan-600 group-hover:text-white transition-all duration-300 flex items-center gap-2 group/link"
                    >
                      Read More
                      <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform duration-300" />
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Enhanced No Posts Message */}
        {filteredPosts.length === 0 && (
          <div className="text-center py-16">
            <div className="mb-6">
              <BookOpen className="w-16 h-16 text-zinc-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-zinc-300 mb-2">
                No posts found
              </h3>
              <p className="text-zinc-400 text-lg mb-6">
                No posts found in the "{selectedCategory}" category.
              </p>
            </div>
            <button
              onClick={() => setSelectedCategory('All')}
              className="btn-primary"
            >
              View All Posts
            </button>
          </div>
        )}

        {/* Enhanced Blog Stats Section */}
        {filteredPosts.length > 0 && (
          <div className="mt-16 pt-8 border-t border-zinc-800/50">
            <div className="text-center">
              <p className="text-zinc-400 mb-4">
                Showing <span className="text-cyan-400 font-semibold">{filteredPosts.length}</span> of <span className="text-cyan-400 font-semibold">{blogPosts.length}</span> posts
              </p>
              
              {/* CTA Section */}
              <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-xl p-6 max-w-md mx-auto">
                <h3 className="text-lg font-semibold text-zinc-200 mb-2">Enjoyed the content?</h3>
                <p className="text-zinc-400 text-sm mb-4">Let's connect and discuss your next project</p>
                <Link to="/contact" className="btn-primary text-sm px-4 py-2">
                  Get In Touch
                </Link>
              </div>
            </div>
          </div>
        )}
      </section>
    </>
  );
}

