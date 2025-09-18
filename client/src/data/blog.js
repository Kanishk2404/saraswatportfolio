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
  },
  {
    id: 'suitegenie-story',
    title: 'From Rejection to Revolution: How I Built a Social Media Automation Platform',
    category: 'Projects',
    date: '2025-09-18',
    author: 'Kanishk Saraswat',
    readTime: '10 min read',
    summary: 'A journey from a rejected Twitter automator to a unified social media automation platform, with lessons, pivots, and real screenshots.',
    tags: ['SuiteGenie', 'Automation', 'Twitter', 'Startup', 'Journey', 'DevOps'],
    content: `
      <article class="prose prose-lg max-w-3xl mx-auto">
        <header class="mb-8">
          <div class="flex items-center gap-4 text-zinc-400 mb-4">
            <span>By Kanishk Saraswat</span>
            <span>•</span>
            <span>September 18, 2025</span>
            <span>•</span>
            <span>10 min read</span>
          </div>
          <div class="flex gap-2 flex-wrap">
            <span class="chip text-xs">SuiteGenie</span>
            <span class="chip text-xs">Automation</span>
            <span class="chip text-xs">Twitter</span>
            <span class="chip text-xs">Startup</span>
            <span class="chip text-xs">Journey</span>
          </div>
        </header>

        <h2>Chapter 1: The Beginning</h2>
        <p>It all started when I was building a Twitter Automator that used API keys to generate content and automatically post it on Twitter. I had built in scheduling, history tracking, bulk creation - everything a user would need. Users could either bring their own Twitter API keys or use the platform's built-in keys, with a smart fallback mechanism if multiple keys were added.</p>
        <p>I was proud of the work, but then came the blow - the app wasn't needed anymore. Instead of letting months of development go to waste, I made a decision that would change everything. I dockerized the entire solution, creating production Docker files so anyone could run their own personal tweet automator.</p>
        <img src="/images/dockered-tweetautomator.jpg" alt="Dockerized Tweet Automator" class="rounded-xl my-6" />

        <h2>Chapter 2: The First Sign</h2>
        <p>When I pushed the Docker images live, I didn't expect much at first. The pull counter climbed steadily - some users were friends or fellow developers I knew, but I guess at least 20 downloads came from outside our circle.</p>
        <img src="/images/dockerhub.png" alt="DockerHub Pulls" class="rounded-xl my-6" />
        <p>It felt encouraging to see real people interested in something that was supposed to be obsolete.</p>
        <p>The memory hit me like a wave. My anime website days — the endless cycle of creating content for the site while spending hours crafting social media posts to promote it. The stress of maintaining presence across platforms while tools like Hootsuite demanded expensive monthly fees made it clear I wasn't alone in this struggle.</p>

        <h2>Chapter 3: The Vision</h2>
        <p>After starting to build the Tweet Automator for multiple users and the platform, I contacted my teammates Abhay Bharti and Ashutosh Singh. We started ambitious: separate modules for the main platform, Twitter integration, and LinkedIn automation. We thought modularity meant smart architecture.</p>
        <p>We were wrong.</p>

        <h2>Chapter 4: The Crash</h2>
        <p>Integration became our nightmare. Our database knowledge was surface-level at best. Sure, individual modules worked in isolation, but together? They looked like three different companies had built them. No cohesion. No unified experience. Users would be confused, and rightly so.</p>
        <p>We had built something that worked but felt broken.</p>

        <h2>Chapter 5: The Restart</h2>
        <p>That failure taught me the most important lesson in product development: working features don't guarantee a working product. I made the hardest decision of my entrepreneurial journey - scrap everything and rebuild from scratch.</p>
        <p>This time, integration wasn't an afterthought. It was the foundation.</p>

        <h2>Chapter 6: The Test</h2>
        <p>Our first integrated release was Tweet Genie. The test was simple but crucial: seamless authentication flow. Non-logged users get redirected to platform login. Authenticated users access everything instantly.</p>
        <img src="/images/tweetgenie.png" alt="Tweet Genie Frontend" class="rounded-xl my-6" />
        <p>It worked.</p>
        <p>Next came the platform dashboard, then the full tweet automator. But our biggest challenge was yet to come.</p>

        <h2>Chapter 7: The Learning Curve</h2>
        <p>Deployment nearly broke us. We were in over our heads with cookies, cross-domain authentication, and OAuth implementations. Each error message felt like a personal attack on our competence.</p>
        <p>But desperation teaches you things no tutorial can. We learned by breaking things, fixing them, then breaking them again. Slowly, we became deployment experts through pure necessity.</p>

        <h2>Chapter 8: The Crisis</h2>
        <p>Just when everything seemed smooth, Twitter hit us with reality. Rate limits weren't just for users - they applied to developer apps too. I watched in horror as our OAuth implementation triggered limit after limit.</p>
        <p>The math was devastating: if we had 100 users generating content simultaneously, we'd hit limits constantly. Our entire model seemed doomed.</p>
        <p>I spent sleepless nights questioning everything. Had we built something fundamentally flawed?</p>

        <h2>Chapter 9: The Trade-off</h2>
        <p>Sometimes leadership means choosing between perfect and possible. I decided to implement manual key submission alongside our OAuth flow - not ideal for user experience, but necessary for functionality.</p>
        <p>The compromise stung, but I promised myself: once we have enterprise partnerships like Buffer and Hootsuite, we'll bring back seamless OAuth for everyone.</p>

        <h2>Chapter 10: The Analytics Challenge</h2>
        <p>Twitter's restrictive analytics endpoints presented another hurdle. But I knew data insights would be crucial for user success. We'd build analytics that mattered, even if we had to work within tight constraints.</p>

        <h2>Chapter 11: The Breakthrough</h2>
        <p>Everything clicked when I redesigned our database architecture and implemented BYOK (Bring Your Own Key) mode. Suddenly, users had choice. They could use their keys or ours. Short-term or committed. Credits or subscriptions.</p>
        <p>The platform finally felt complete.</p>

        <h2>Chapter 12: Today and Tomorrow</h2>
        <p>Users now enjoy a seamless experience: browse our interactive platform, sign up in seconds, access a comprehensive dashboard, and launch powerful automation tools.</p>
        <img src="/images/suitegenie_frontedn.png" alt="SuiteGenie Dashboard" class="rounded-xl my-6" />
        <p>They can choose BYOK or platform keys with 90-day commitment, purchase credits via Razorpay, and generate content individually or in bulk through Tweet Genie.</p>
        <p>Our analytics currently provide mathematical insights - engagement rates, optimal timing, performance trends. But we're building something revolutionary: AI that will guide users on what to post, when to post, and how to reach their ideal audience. We're even developing our own LLM specifically trained for content creation.</p>
        <p>The roadmap is ambitious: LinkedIn Genie for professional content, WordPress automation for seamless publishing, and intelligence that learns from each user's unique voice and goals.</p>

        <h2>Epilogue: The Team</h2>
        <p>Thanks to my teammates Abhay Bharti and Ashutosh Singh for working on this with me and helping me bring this vision to life. We will continue to make this platform better and are excited to roll out other modules we have planned - including LinkedIn Genie and WordPress automation.</p>
        <p>What started as an unwanted project became the foundation for something that could revolutionize how creators and businesses approach social media. Sometimes the best ventures rise from what others deemed unnecessary.</p>
        <p>The journey from rejection to revolution taught us that persistence, combined with the right team and unwavering focus on user needs, can transform any setback into a comeback.</p>
      </article>
    `
  }
];