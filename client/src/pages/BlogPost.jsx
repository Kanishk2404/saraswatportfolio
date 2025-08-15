import { blogPosts } from '@/data/blog.js';
import { useParams, Link } from 'react-router-dom';

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

  return (
    <section className="container py-16 max-w-3xl mx-auto">
      <h1 className="text-4xl font-extrabold mb-4 gradient-text">Under Development</h1>
      <div className="text-lg text-zinc-300 mb-8">Updates will be live soon.</div>
      <div className="mt-8 text-center">
        <Link to="/blog" className="btn-secondary">← Back to Blog</Link>
      </div>
    </section>
  );
}
