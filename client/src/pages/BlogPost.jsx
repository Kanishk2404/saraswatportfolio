import { blogPosts } from '@/data/blog.js';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, User, Tag, Share2, BookOpen } from 'lucide-react';
import SEO from '@/components/SEO.jsx';

export default function BlogPost() {
  const { id } = useParams();
  const post = blogPosts.find(p => p.id === id);

  if (!post) {
    return (
      <>
        <SEO 
          title="Blog Post Not Found"
          description="The requested blog post could not be found."
          url={`/blog/${id}`}
        />
        <section className="container py-16">
          <div className="text-center">
            <BookOpen className="w-16 h-16 text-zinc-600 mx-auto mb-6" />
            <h1 className="text-3xl font-bold mb-4 text-red-400">Blog post not found</h1>
            <p className="text-zinc-400 mb-8">The post you're looking for doesn't exist or has been moved.</p>
            <Link to="/blog" className="btn-secondary flex items-center gap-2 w-fit mx-auto">
              <ArrowLeft size={16} />
              Back to Blog
            </Link>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <SEO 
        title={post.title}
        description={post.summary}
        keywords={post.tags}
        url={`/blog/${post.id}`}
        ogImage={post.featuredImage}
        type="article"
        author={post.author}
        publishedTime={post.date}
        modifiedTime={post.date}
        section={post.category}
        tags={post.tags}
      />
      <section className="container py-16 max-w-4xl mx-auto">
        {/* Enhanced Breadcrumb */}
        <nav className="mb-8">
          <Link to="/blog" className="text-zinc-400 hover:text-cyan-300 transition-colors flex items-center gap-2 w-fit group">
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            <span>Back to Blog</span>
          </Link>
        </nav>

        {/* Enhanced Article Header */}
        <header className="mb-12">
          <div className="flex gap-2 flex-wrap mb-6">
            <span className="chip text-sm bg-cyan-600/20 text-cyan-300 border-cyan-600/30 font-medium">
              {post.category}
            </span>
            {post.tags.map(tag => (
              <span key={tag} className="chip text-sm bg-zinc-800/50 text-zinc-300 border-zinc-700/50">
                {tag}
              </span>
            ))}
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-8 gradient-text leading-tight">
            {post.title}
          </h1>
          
          <div className="flex items-center gap-6 text-zinc-400 mb-8">
            <div className="flex items-center gap-2">
              <User size={18} className="text-cyan-400" />
              <span className="font-medium">{post.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar size={18} className="text-cyan-400" />
              <span>{new Date(post.date).toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={18} className="text-cyan-400" />
              <span>{post.readTime}</span>
            </div>
          </div>
          
          <p className="text-xl text-zinc-300 leading-relaxed border-l-4 border-cyan-500 pl-6 py-4 bg-cyan-500/5 rounded-r-lg">
            {post.summary}
          </p>
        </header>

        {/* Enhanced Featured Image */}
        {post.featuredImage && (
          <div className="mb-12">
            <div className="relative overflow-hidden rounded-2xl">
              <img 
                src={post.featuredImage} 
                alt={post.title}
                className="w-full h-64 md:h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
            </div>
          </div>
        )}

        {/* Enhanced Article Content */}
        <div 
          className="prose prose-lg max-w-none prose-invert prose-headings:text-zinc-100 prose-p:text-zinc-300 prose-strong:text-cyan-300 prose-code:text-cyan-300 prose-pre:bg-zinc-900 prose-blockquote:border-cyan-500 prose-blockquote:text-zinc-300 prose-a:text-cyan-400 prose-a:no-underline hover:prose-a:text-cyan-300"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Enhanced Article Footer */}
        <footer className="mt-16 pt-8 border-t border-zinc-800">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <span className="text-zinc-400 font-medium">Share this post:</span>
              <div className="flex gap-3">
                <a 
                  href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(window.location.href)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg hover:bg-zinc-800 transition-colors text-zinc-400 hover:text-cyan-400"
                  aria-label="Share on Twitter"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
                <a 
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg hover:bg-zinc-800 transition-colors text-zinc-400 hover:text-cyan-400"
                  aria-label="Share on LinkedIn"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <button
                  onClick={() => navigator.clipboard.writeText(window.location.href)}
                  className="p-3 rounded-lg hover:bg-zinc-800 transition-colors text-zinc-400 hover:text-cyan-400"
                  aria-label="Copy link"
                >
                  <Share2 size={20} />
                </button>
              </div>
            </div>
            
            <Link to="/blog" className="btn-secondary flex items-center gap-2 group">
              <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
              Back to Blog
            </Link>
          </div>
        </footer>
      </section>
    </>
  );
}
