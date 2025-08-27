import { blogPosts } from '@/data/blog.js';
import ReactMarkdown from 'react-markdown';
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
      <h1 className="text-4xl font-extrabold mb-4 gradient-text">{post.title}</h1>
      <div className="prose prose-lg max-w-3xl mx-auto mb-8">
        <ReactMarkdown>{post.content}</ReactMarkdown>
      </div>
      <div className="mt-8 text-center">
        <Link to="/blog" className="btn-secondary">← Back to Blog</Link>
      </div>
    </section>
  );
}
