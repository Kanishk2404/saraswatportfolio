import { blogCategories, blogPosts } from '@/data/blog.js';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const filteredPosts = selectedCategory === 'All'
    ? blogPosts
    : blogPosts.filter(post => post.category === selectedCategory);

  return (
    <section className="container py-16">
      <h1 className="text-3xl font-bold mb-6">Blog</h1>
      <div className="mb-8 flex flex-wrap gap-3">
        <button
          className={`chip ${selectedCategory === 'All' ? 'bg-cyan-600 text-white' : ''}`}
          onClick={() => setSelectedCategory('All')}
        >All</button>
        {blogCategories.map(cat => (
          <button
            key={cat}
            className={`chip ${selectedCategory === cat ? 'bg-cyan-600 text-white' : ''}`}
            onClick={() => setSelectedCategory(cat)}
          >{cat}</button>
        ))}
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        {filteredPosts.map(post => (
          <div key={post.id} className="card p-6 flex flex-col">
            <div className="text-xl font-bold mb-2 gradient-text">{post.title}</div>
            <div className="text-zinc-400 mb-1">{post.date} — <span className="chip text-xs">{post.category}</span></div>
            <div className="text-zinc-300 mb-3">{post.summary}</div>
            <div className="flex gap-2 flex-wrap mb-3">
              {post.tags.map(tag => (
                <span key={tag} className="chip text-xs">{tag}</span>
              ))}
            </div>
            <Link to={`/blog/${post.id}`} className="btn-secondary mt-auto">Read More</Link>
          </div>
        ))}
      </div>
    </section>
  );
}
