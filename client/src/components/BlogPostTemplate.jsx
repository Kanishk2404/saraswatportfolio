import React from 'react';

// This is a template component to help you create new blog posts
// Copy this structure and modify the content for new posts
const BlogPostTemplate = () => {
  return (
    <article className="prose prose-lg max-w-3xl mx-auto">
      {/* Header Section */}
      <header className="mb-8">
        <h1 className="text-3xl font-bold mb-4">Your Blog Post Title</h1>
        <div className="flex items-center gap-4 text-zinc-400 mb-4">
          <span>By Kanishk Saraswat</span>
          <span>•</span>
          <span>January 27, 2025</span>
          <span>•</span>
          <span>5 min read</span>
        </div>
        <div className="flex gap-2 flex-wrap">
          <span className="chip text-xs">Category</span>
          <span className="chip text-xs">Tag1</span>
          <span className="chip text-xs">Tag2</span>
        </div>
      </header>

      {/* Introduction */}
      <div className="mb-6">
        <blockquote className="border-l-4 border-cyan-500 pl-4 italic text-zinc-300">
          <p>Your introduction or hook goes here. This should grab the reader's attention and explain what the post is about.</p>
        </blockquote>
      </div>

      {/* Main Content */}
      <p className="mb-4">Start your content here. This is the first paragraph of your blog post.</p>

      {/* Section with H2 */}
      <h2 className="text-xl font-semibold mt-6 mb-2">First Major Section</h2>
      <p className="mb-4">Content for your first major section goes here.</p>

      {/* Subsection with H3 */}
      <h3 className="text-lg font-medium mt-4 mb-2">Subsection Title</h3>
      <p className="mb-4">Content for your subsection goes here.</p>

      {/* Unordered List */}
      <ul className="mb-4 list-disc list-inside space-y-1">
        <li>First list item</li>
        <li>Second list item</li>
        <li>Third list item</li>
      </ul>

      {/* Ordered List */}
      <ol className="mb-4 list-decimal list-inside space-y-1">
        <li>First step</li>
        <li>Second step</li>
        <li>Third step</li>
      </ol>

      {/* Code Block */}
      <div className="bg-zinc-900 p-4 rounded-lg mb-4">
        <code className="text-cyan-300">
          // Your code here<br/>
          console.log('Hello World');<br/>
          const example = 'code block';
        </code>
      </div>

      {/* Tip/Note Block */}
      <blockquote className="border-l-4 border-green-500 pl-4 italic text-zinc-300 mb-4">
        <p><strong>💡 Tip:</strong> This is a helpful tip or note for your readers.</p>
      </blockquote>

      {/* Warning Block */}
      <blockquote className="border-l-4 border-yellow-500 pl-4 italic text-zinc-300 mb-4">
        <p><strong>⚠️ Warning:</strong> This is an important warning or caution for your readers.</p>
      </blockquote>

      {/* FAQ Section */}
      <h2 className="text-xl font-semibold mt-6 mb-2">Frequently Asked Questions</h2>
      
      <details className="mb-4">
        <summary className="cursor-pointer font-medium text-cyan-300 hover:text-cyan-200">
          What is the first question?
        </summary>
        <p className="mt-2 text-zinc-300">This is the answer to the first question.</p>
      </details>

      <details className="mb-4">
        <summary className="cursor-pointer font-medium text-cyan-300 hover:text-cyan-200">
          What is the second question?
        </summary>
        <p className="mt-2 text-zinc-300">This is the answer to the second question.</p>
      </details>

      {/* Conclusion */}
      <h2 className="text-xl font-semibold mt-6 mb-2">Conclusion</h2>
      <p className="mb-4">Wrap up your blog post with a conclusion that summarizes the key points.</p>
      
      <p className="mb-4">End with a call to action or final thought for your readers.</p>
    </article>
  );
};

export default BlogPostTemplate;
