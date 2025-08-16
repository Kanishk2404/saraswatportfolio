import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

export default function BlogPreview() {
  // Mock blog posts - replace with real data when you have a blog
  const blogPosts = [
    {
      id: 1,
      title: "Building Scalable Web Applications with React and Node.js",
      excerpt: "Learn how to build high-performance web applications that can handle thousands of users...",
      date: "2024-01-15",
      readTime: "5 min read",
      category: "Web Development",
      slug: "building-scalable-web-applications"
    },
    {
      id: 2,
      title: "SEO Strategies That Actually Work in 2024",
      excerpt: "Discover the latest SEO techniques that can help your website rank higher in search results...",
      date: "2024-01-10",
      readTime: "8 min read",
      category: "SEO",
      slug: "seo-strategies-2024"
    },
    {
      id: 3,
      title: "From Athlete to Developer: My Journey in Tech",
      excerpt: "How my background in sports helped me develop the discipline and strategic thinking needed in tech...",
      date: "2024-01-05",
      readTime: "6 min read",
      category: "Career",
      slug: "athlete-to-developer-journey"
    }
  ];

  return (
    <section className="container py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="section-title text-white">Latest Blog Posts</h2>
        <p className="text-lg text-zinc-300 max-w-3xl mx-auto">
          Sharing insights on web development, SEO, and my journey in tech
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogPosts.map((post, i) => (
          <motion.div
            key={post.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="neo hover:scale-[1.02] transition-transform duration-300"
          >
            <div className="inner p-6 h-full flex flex-col">
              <div className="mb-4">
                <span className="chip text-xs">{post.category}</span>
              </div>
              
              <h3 className="text-xl font-bold text-zinc-100 mb-3 line-clamp-2">
                {post.title}
              </h3>
              
              <p className="text-zinc-300 text-sm mb-4 flex-grow line-clamp-3">
                {post.excerpt}
              </p>
              
              <div className="flex items-center justify-between text-xs text-zinc-400 mb-4">
                <div className="flex items-center gap-2">
                  <Calendar size={14} />
                  {new Date(post.date).toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'short', 
                    day: 'numeric' 
                  })}
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={14} />
                  {post.readTime}
                </div>
              </div>
              
              <Link 
                to={`/blog/${post.slug}`}
                className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-medium text-sm transition-colors"
              >
                Read more <ArrowRight size={16} />
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
      
      <div className="text-center mt-10">
        <Link to="/blog" className="btn-secondary">
          View All Posts
        </Link>
      </div>
    </section>
  );
}
