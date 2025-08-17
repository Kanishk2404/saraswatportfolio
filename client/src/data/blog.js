export const blogCategories = [
  'SEO Daily',
  'Personal',
  'Projects',
  'Experiences',
  'Explorations',
  'Tech Tips',
  'DevOps',
  'Web Development'
];

export const blogPosts = [
  {
    id: 'seo-pillar-2025',
    title: 'The Ultimate Guide to SEO in 2025: Complete Playbook',
    category: 'SEO Daily',
    date: '2025-08-18',
    author: 'Kanishk Saraswat',
    readTime: '12 min read',
    summary: 'A comprehensive, future-proof roadmap for SEO, AEO, and GEO in 2025. Covers search engine mechanics, keyword research, technical/on-page/off-page/local SEO, content strategy, and analytics.',
    tags: ['SEO', 'AEO', 'GEO', 'Guide', 'Pillar', '2025'],
    content: `
      <article class="prose prose-lg max-w-3xl mx-auto">
        <header class="mb-8">
          <h1 class="text-3xl font-bold mb-4">The Ultimate Guide to SEO in 2025: Complete Playbook</h1>
          <div class="flex items-center gap-4 text-zinc-400 mb-4">
            <span>By Kanishk Saraswat</span>
            <span>•</span>
            <span>August 18, 2025</span>
            <span>•</span>
            <span>12 min read</span>
          </div>
          <div class="flex gap-2 flex-wrap">
            <span class="chip text-xs">SEO</span>
            <span class="chip text-xs">AEO</span>
            <span class="chip text-xs">GEO</span>
            <span class="chip text-xs">Guide</span>
            <span class="chip text-xs">2025</span>
          </div>
        </header>

        <!-- Compelling Hook -->
        <div class="mb-8 p-6 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-xl">
          <p class="text-lg font-semibold text-cyan-300 mb-2">🚀 New Series Alert!</p>
          <p class="text-zinc-200 leading-relaxed">
            <strong>Go from beginner to expert:</strong> I'm starting a new series to teach you everything you need to know about SEO, including how to dominate local search (GEO) and optimize for AI (AEO).
          </p>
        </div>

        <div class="mb-6">
          <blockquote class="border-l-4 border-cyan-500 pl-4 italic text-zinc-300">
            <p>Search Engine Optimization (SEO) in 2025 is no longer just about keywords — it's about experience, trust, and adaptability. Search engines now evaluate how well your website serves users through E-E-A-T (Expertise, Experience, Authoritativeness, Trustworthiness), Core Web Vitals, and structured data.</p>
          </blockquote>
        </div>

        <p class="mb-4">This complete playbook is designed for developers, founders, marketers, and creators who want a practical, future-proof roadmap. We'll cover:</p>

        <ul class="mb-6 list-disc list-inside space-y-2">
          <li>How search engines actually work in 2025</li>
          <li>Modern keyword research strategies</li>
          <li>On-page, technical, and off-page SEO</li>
          <li>Local SEO (GEO) and Answer Engine Optimization (AEO)</li>
          <li>Content planning & interlinking strategies</li>
          <li>Analytics & performance tracking</li>
        </ul>

        <h2 class="text-xl font-semibold mt-6 mb-2">How Search Engines Work in 2025</h2>
        
        <h3 class="text-lg font-medium mt-4 mb-2">Crawling & Indexing</h3>
        <p class="mb-4">Search engines use:</p>
        <ul class="mb-4 list-disc list-inside space-y-1">
          <li>XML sitemaps to find pages</li>
          <li>robots.txt rules to control crawling</li>
          <li>canonical tags to handle duplicates</li>
        </ul>

        <blockquote class="border-l-4 border-cyan-500 pl-4 italic text-zinc-300 mb-4">
          <p><strong>Tip:</strong> Always submit your sitemap via Google Search Console and Bing Webmaster Tools.</p>
        </blockquote>

        <h3 class="text-lg font-medium mt-4 mb-2">Ranking Factors</h3>
        <p class="mb-4">Key ranking signals include:</p>
        <ul class="mb-4 list-disc list-inside space-y-1">
          <li><strong>E-E-A-T:</strong> Google rewards content written by experts with proven experience.</li>
          <li><strong>Freshness:</strong> Recently updated or regularly maintained content ranks higher.</li>
          <li><strong>User experience:</strong> Click-through rate, dwell time, and Core Web Vitals matter.</li>
        </ul>

        <h2 class="text-xl font-semibold mt-6 mb-2">Keyword Research Fundamentals</h2>
        
        <h3 class="text-lg font-medium mt-4 mb-2">Understanding Search Intent</h3>
        <ul class="mb-4 list-disc list-inside space-y-1">
          <li><strong>Informational:</strong> "What is SEO in 2025?"</li>
          <li><strong>Transactional:</strong> "Buy SEO tool subscription"</li>
          <li><strong>Navigational:</strong> "Yoast SEO plugin download"</li>
          <li><strong>Local:</strong> "SEO agency near me"</li>
        </ul>

        <h3 class="text-lg font-medium mt-4 mb-2">Short-Tail vs. Long-Tail Keywords</h3>
        <ul class="mb-4 list-disc list-inside space-y-1">
          <li><strong>Short-tail:</strong> High volume, broad competition (e.g., "SEO")</li>
          <li><strong>Long-tail:</strong> Specific, lower volume, higher conversion (e.g., "best SEO tools for startups 2025")</li>
        </ul>

        <h2 class="text-xl font-semibold mt-6 mb-2">Technical SEO Basics</h2>
        
        <h3 class="text-lg font-medium mt-4 mb-2">Core Web Vitals (2025 Benchmarks)</h3>
        <ul class="mb-4 list-disc list-inside space-y-1">
          <li>Largest Contentful Paint (LCP) < 2.5s</li>
          <li>Interaction to Next Paint (INP) < 200ms</li>
          <li>Cumulative Layout Shift (CLS) < 0.1</li>
        </ul>

        <h3 class="text-lg font-medium mt-4 mb-2">Structured Data (Schema Markup)</h3>
        <p class="mb-4">Schema helps search engines understand your content. Examples:</p>
        <ul class="mb-4 list-disc list-inside space-y-1">
          <li>Article Schema for blogs</li>
          <li>FAQ Schema for snippets</li>
          <li>LocalBusiness Schema for local visibility</li>
          <li>Product/Review Schema for e-commerce</li>
        </ul>

        <blockquote class="border-l-4 border-green-500 pl-4 italic text-zinc-300 mb-4">
          <p><strong>✅ Pro Tip:</strong> Implement JSON-LD (Google's preferred format). Use Google's Rich Results Test to validate.</p>
        </blockquote>

        <h2 class="text-xl font-semibold mt-6 mb-2">Recommended SEO Toolkit (2025 Edition)</h2>
        <ul class="mb-4 list-disc list-inside space-y-1">
          <li><strong>Ahrefs / SEMrush</strong> → Keyword & backlink research</li>
          <li><strong>SurferSEO / Clearscope</strong> → Content optimization</li>
          <li><strong>Screaming Frog / Sitebulb</strong> → Technical audits</li>
          <li><strong>PageSpeed Insights / GTMetrix</strong> → Core Web Vitals</li>
          <li><strong>Google Search Console (GSC)</strong> → Crawl & index data</li>
          <li><strong>Google Analytics 4 (GA4)</strong> → Performance tracking</li>
        </ul>

        <h2 class="text-xl font-semibold mt-6 mb-2">Frequently Asked Questions</h2>
        
        <details class="mb-4">
          <summary class="cursor-pointer font-medium text-cyan-300 hover:text-cyan-200">Is SEO still relevant in 2025?</summary>
          <p class="mt-2 text-zinc-300">Yes — SEO has evolved, but it remains essential for visibility, credibility, and organic growth.</p>
        </details>

        <details class="mb-4">
          <summary class="cursor-pointer font-medium text-cyan-300 hover:text-cyan-200">How long does SEO take to work?</summary>
          <p class="mt-2 text-zinc-300">Typically 3–6 months, depending on competition and content quality.</p>
        </details>

        <details class="mb-4">
          <summary class="cursor-pointer font-medium text-cyan-300 hover:text-cyan-200">Do backlinks still matter?</summary>
          <p class="mt-2 text-zinc-300">Yes, but quality > quantity. One authoritative backlink outweighs dozens of low-value links.</p>
        </details>

        <details class="mb-4">
          <summary class="cursor-pointer font-medium text-cyan-300 hover:text-cyan-200">What's the difference between SEO and AEO?</summary>
          <p class="mt-2 text-zinc-300">SEO optimizes for search engines; AEO optimizes for AI-powered assistants and snippets.</p>
        </details>

        <details class="mb-4">
          <summary class="cursor-pointer font-medium text-cyan-300 hover:text-cyan-200">Should I use AI for SEO content?</summary>
          <p class="mt-2 text-zinc-300">Yes — use AI for drafts and ideation, but always edit for accuracy, tone, and originality.</p>
        </details>

        <h2 class="text-xl font-semibold mt-6 mb-2">Conclusion</h2>
        <p class="mb-4">SEO in 2025 is about balancing technical excellence, human-first content, and AI-driven changes in search. By building pillar pages, supporting clusters, structured data, and AEO/GEO-ready strategies, you'll future-proof your visibility.</p>
        
        <p class="mb-4">Keep testing, keep iterating, and remember: the best SEO strategy is one that evolves with the web.</p>
      </article>
    `
  }
];