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
    id: 'fixing-linkedin-analytics-udyam-meta-verification',
    title: 'Fixing LinkedIn Analytics, Udyam Registration & Meta Verification',
    category: 'Projects',
    date: '2026-02-21',
    author: 'Kanishk Saraswat',
    readTime: '10 min read',
    summary: 'The day I fixed fake analytics data, registered a business, and applied to three different platforms simultaneously.',
    tags: ['LinkedIn API', 'OAuth', 'Business Registration', 'Meta', 'SuiteGenie'],
    content: `
      <article class="prose prose-lg max-w-3xl mx-auto">
        <header class="mb-8">
          <h1 class="text-3xl font-bold mb-4">Fixing LinkedIn Analytics, Udyam Registration & Meta Verification</h1>
          <div class="flex items-center gap-4 text-zinc-400 mb-4">
            <span>By Kanishk Saraswat</span>
            <span>•</span>
            <span>February 21, 2026</span>
            <span>•</span>
            <span>10 min read</span>
          </div>
          <div class="flex gap-2 flex-wrap">
            <span class="chip text-xs">LinkedIn API</span>
            <span class="chip text-xs">OAuth</span>
            <span class="chip text-xs">Business Registration</span>
            <span class="chip text-xs">Meta</span>
            <span class="chip text-xs">SuiteGenie</span>
          </div>
        </header>

        <div class="mb-8 p-6 bg-cyan-500/10 border border-cyan-500/20 rounded-xl">
          <p class="text-lg font-semibold text-cyan-300 mb-2">The day I fixed fake analytics data, registered a business, and applied to three different platforms simultaneously</p>
          <p class="text-zinc-200 leading-relaxed">
            Some days you sit down to fix one small thing and end up going down five rabbit holes. This was one of those days.
          </p>
        </div>

        <h2 class="text-xl font-semibold mt-6 mb-2">LinkedIn Analytics Was Showing Fake Data</h2>
        <p class="mb-4">I'd built an analytics page for LinkedInGenie months ago. Beautiful charts, engagement breakdowns, top performing posts. One problem — the numbers were completely made up.</p>
        <p class="mb-4">Three bugs stacked on top of each other.</p>

        <h3 class="text-lg font-medium mt-4 mb-2">Bug 1 — Wrong OAuth scopes</h3>
        <p class="mb-4">My OAuth flow was only requesting:</p>
        <pre class="bg-zinc-900 p-4 rounded-lg mb-4"><code>openid profile email w_member_social</code></pre>
        <p class="mb-4">The analytics scopes — <code>r_organization_social</code> and <code>r_organization_admin</code> — were approved on my LinkedIn Developer app but never being requested during login. Users connected their LinkedIn but their token never had analytics permission.</p>
        <p class="mb-4"><strong>Fix:</strong></p>
        <pre class="bg-zinc-900 p-4 rounded-lg mb-4"><code class="language-javascript">const LINKEDIN_SCOPES = 'openid profile email w_member_social r_organization_social r_organization_admin w_organization_social';</code></pre>

        <h3 class="text-lg font-medium mt-4 mb-2">Bug 2 — Wrong API endpoint</h3>
        <p class="mb-4">Posts were stored as <code>urn:li:share:7425273073433636864</code>. My sync code was doing:</p>
        <pre class="bg-zinc-900 p-4 rounded-lg mb-4"><code class="language-javascript">shareId = postUrn.replace('urn:li:share:', '');
const url = \`/v2/ugcPosts/\${shareId}\`;</code></pre>
        <p class="mb-4">LinkedIn returned "Key parameter value is invalid" on all 9 posts. Every single one falling back to mock data.</p>
        <p class="mb-4">The correct endpoint URL-encodes the full URN:</p>
        <pre class="bg-zinc-900 p-4 rounded-lg mb-4"><code class="language-javascript">const encodedUrn = encodeURIComponent(postUrn);
const url = \`https://api.linkedin.com/v2/socialActions/\${encodedUrn}\`;</code></pre>
        <p class="mb-4"><code>urn:li:share:7425273073433636864</code> becomes <code>urn%3Ali%3Ashare%3A7425273073433636864</code>. That's what LinkedIn actually expects.</p>

        <h3 class="text-lg font-medium mt-4 mb-2">Bug 3 — Frontend bailing out early</h3>
        <p class="mb-4">Even after fixing the backend, dashboard showed zeros. Found this in LinkedInAnalytics.jsx:</p>
        <pre class="bg-zinc-900 p-4 rounded-lg mb-4"><code class="language-javascript">if (!selectedAccount?.id || !selectedAccount?.account_type) {
  setAnalyticsData({ overview: {}, daily: [], topPosts: [] });
  return; // never fetches anything
}</code></pre>
        <p class="mb-4">selectedAccount was always null on load because it came from window.AccountContext. Fixed by making it an optional filter:</p>
        <pre class="bg-zinc-900 p-4 rounded-lg mb-4"><code class="language-javascript">const params = { days: timeframe };
if (selectedAccount?.id && selectedAccount?.account_type) {
  params.account_id = selectedAccount.id;
  params.account_type = selectedAccount.account_type;
}
const response = await analytics.getOverview(params);</code></pre>
        <p class="mb-4">After all three fixes — real data. First sync: 5 out of 9 posts updated with real likes, comments, shares. The other 4 returned 404 — those posts had been deleted from LinkedIn. Added logic to automatically mark them as <code>status = 'deleted'</code> so they disappear from analytics permanently.</p>
        <p class="mb-4">Views still show zero because LinkedIn locks view counts behind their Marketing Developer Platform. Everything else is real.</p>

        <h2 class="text-xl font-semibold mt-6 mb-2">The Udyam Registration Adventure</h2>
        <p class="mb-4">To get Meta business verification I needed a legitimate business document. Sole proprietorship in India requires almost nothing — no GST needed under ₹20 lakh turnover. Just go to <strong>udyamregistration.gov.in</strong> and register with PAN and Aadhaar. Free, same day.</p>
        <p class="mb-4">The reality: the website is genuinely terrible.</p>
        <ul class="mb-4 list-disc list-inside space-y-2">
          <li>Attempt 1 — incognito mode. Submit button did nothing.</li>
          <li>Attempt 2 — normal Chrome. OTP never arrived.</li>
          <li>Attempt 3 — normal Chrome, different network. Finally worked.</li>
        </ul>
        <p class="mb-4">What I filled:</p>
        <ul class="mb-4 list-disc list-inside space-y-1">
          <li>Organisation type: Proprietary</li>
          <li>Business: SuiteGenie</li>
          <li>Activity: Services</li>
          <li>NIC Code: 62010 (Computer programming)</li>
          <li>Employees: 1</li>
          <li>Turnover: 0</li>
        </ul>
        <p class="mb-4">Got the certificate. One hour of fighting a broken government website for one PDF that unlocks everything.</p>

        <h2 class="text-xl font-semibold mt-6 mb-2">Meta Business Verification Submitted</h2>
        <p class="mb-4">Went to <strong>business.facebook.com → Settings → Security Centre → Business Verification</strong>. Entered the Udyam registration number, business name exactly as on certificate, SuiteGenie as trade name.</p>
        <p class="mb-4">Status: In Review. 2 working days. Once approved, Social Genie goes Live for public users.</p>

        <h2 class="text-xl font-semibold mt-6 mb-2">LinkedIn Community Management API Reapplication</h2>
        <p class="mb-4">Community Management API lets you post to LinkedIn company pages — essential for agency clients. Applied months ago, got rejected. Reapplied via LinkedIn's Zendesk support with a proper use case this time.</p>
        <p class="mb-4"><strong>Subject:</strong></p>
        <blockquote class="border-l-4 border-cyan-500 pl-4 italic text-zinc-300 mb-4">
          <p>Community Management API Access Request — SuiteGenie (Registered MSME, India)</p>
        </blockquote>
        <p class="mb-4"><strong>Attachments:</strong> Udyam certificate, GoDaddy domain invoice, PAN card, Aadhaar (middle digits masked)</p>
        <p class="mb-4">Having an actual business registration makes it look legitimate. Waiting to hear back.</p>

        <h2 class="text-xl font-semibold mt-6 mb-2">What's Next</h2>
        <p class="mb-4">Waiting on:</p>
        <ul class="mb-4 list-disc list-inside space-y-1">
          <li>Meta business verification — 2 working days</li>
          <li>LinkedIn Community Management API — unknown</li>
        </ul>
        <p class="mb-4">Building in parallel:</p>
        <ul class="mb-4 list-disc list-inside space-y-1">
          <li>Enterprise workspace architecture for agency clients</li>
          <li>Analytics paywall UI</li>
          <li>Instagram App Review once Meta verification clears</li>
        </ul>
        <p class="mb-4">One day, a lot of debugging, one government website, three platform submissions. This is what building in public actually looks like.</p>
        <p class="mb-4">Follow the SuiteGenie build at <a href="https://kanishksaraswat.me" class="text-cyan-300">kanishksaraswat.me</a></p>
      </article>
    `
  },
  {
    id: 'threads-app-review-submission',
    title: 'Getting Threads App Review Submitted: Container IDs vs Published Post IDs',
    category: 'Projects',
    date: '2026-02-21',
    author: 'Kanishk Saraswat',
    readTime: '8 min read',
    summary: 'The day I learned the difference between a container ID and a published post ID the hard way while submitting Threads App Review.',
    tags: ['Threads API', 'Meta', 'Graph API', 'App Review', 'SuiteGenie'],
    content: `
      <article class="prose prose-lg max-w-3xl mx-auto">
        <header class="mb-8">
          <h1 class="text-3xl font-bold mb-4">Getting Threads App Review Submitted: Container IDs vs Published Post IDs</h1>
          <div class="flex items-center gap-4 text-zinc-400 mb-4">
            <span>By Kanishk Saraswat</span>
            <span>•</span>
            <span>February 21, 2026</span>
            <span>•</span>
            <span>8 min read</span>
          </div>
          <div class="flex gap-2 flex-wrap">
            <span class="chip text-xs">Threads API</span>
            <span class="chip text-xs">Meta</span>
            <span class="chip text-xs">Graph API</span>
            <span class="chip text-xs">App Review</span>
            <span class="chip text-xs">SuiteGenie</span>
          </div>
        </header>

        <div class="mb-8 p-6 bg-cyan-500/10 border border-cyan-500/20 rounded-xl">
          <p class="text-lg font-semibold text-cyan-300 mb-2">The day I learned the difference between a container ID and a published post ID the hard way</p>
          <p class="text-zinc-200 leading-relaxed">
            Meta requires you to prove your app actually works before approving it for public access. All testing happens in <strong>Graph API Explorer</strong> at developers.facebook.com/tools/explorer.
          </p>
        </div>

        <h2 class="text-xl font-semibold mt-6 mb-2">Setting Up</h2>
        <p class="mb-4">First — switch the domain dropdown from <code>graph.facebook.com</code> to <code>graph.threads.net</code>. Then click <strong>Generate Threads Access Token</strong> and log in with the Threads test account. Without this you get permission errors on every call.</p>

        <h2 class="text-xl font-semibold mt-6 mb-2">The 4 Required Test Calls</h2>

        <h3 class="text-lg font-medium mt-4 mb-2">Test Call 1 — Profile fetch</h3>
        <p class="mb-4"><strong>Method:</strong> GET</p>
        <pre class="bg-zinc-900 p-4 rounded-lg mb-4"><code>me?fields=id,name</code></pre>
        <p class="mb-4"><strong>Response:</strong></p>
        <pre class="bg-zinc-900 p-4 rounded-lg mb-4"><code class="language-json">{
  "id": "26264170089882298",
  "name": "Kanishk Saraswat"
}</code></pre>
        <p class="mb-4">✅ <code>threads_basic</code> — Completed</p>

        <h3 class="text-lg font-medium mt-4 mb-2">Test Call 2 — Create post container</h3>
        <p class="mb-4"><strong>Method:</strong> POST</p>
        <pre class="bg-zinc-900 p-4 rounded-lg mb-4"><code>me/threads?media_type=TEXT&text=Testing SuiteGenie API</code></pre>
        <p class="mb-4"><strong>Response:</strong></p>
        <pre class="bg-zinc-900 p-4 rounded-lg mb-4"><code class="language-json">{
  "id": "17942868513116160"
}</code></pre>
        <p class="mb-4">This creates a container but doesn't publish yet. Save this ID — call it <strong>ID_A</strong>.</p>

        <h3 class="text-lg font-medium mt-4 mb-2">Test Call 3 — Publish the post</h3>
        <p class="mb-4"><strong>Method:</strong> POST</p>
        <pre class="bg-zinc-900 p-4 rounded-lg mb-4"><code>me/threads_publish?creation_id=17942868513116160</code></pre>
        <p class="mb-4"><strong>Response:</strong></p>
        <pre class="bg-zinc-900 p-4 rounded-lg mb-4"><code class="language-json">{
  "id": "18182286562367432"
}</code></pre>
        <p class="mb-4">Post is now live on Threads. Save this second ID — call it <strong>ID_B</strong>. It's completely different from ID_A and this distinction matters for the next step.</p>
        <p class="mb-4">✅ <code>threads_content_publish</code> — Completed</p>

        <h3 class="text-lg font-medium mt-4 mb-2">Test Call 4 — Delete the post</h3>
        <p class="mb-4">The mistake I made first time: tried deleting with <strong>ID_A</strong> (the container ID). Got:</p>
        <pre class="bg-zinc-900 p-4 rounded-lg mb-4"><code class="language-json">{
  "error": {
    "message": "Object does not exist or missing permissions",
    "code": 100
  }
}</code></pre>
        <p class="mb-4">You need <strong>ID_B</strong> — the <strong>published post ID</strong>, not the container ID. They're different. Classic two-step API trap.</p>
        <p class="mb-4"><strong>Method:</strong> DELETE</p>
        <pre class="bg-zinc-900 p-4 rounded-lg mb-4"><code>18182286562367432</code></pre>
        <p class="mb-4"><strong>Response:</strong></p>
        <pre class="bg-zinc-900 p-4 rounded-lg mb-4"><code class="language-json">{
  "success": true
}</code></pre>
        <p class="mb-4">✅ <code>threads_delete</code> — Completed</p>

        <h2 class="text-xl font-semibold mt-6 mb-2">Submitted</h2>
        <p class="mb-4">All 4 test calls complete. Submitted App Review with just:</p>
        <ul class="mb-4 list-disc list-inside space-y-1">
          <li>✅ threads_basic</li>
          <li>✅ threads_content_publish</li>
          <li>✅ threads_delete</li>
          <li>✅ public_profile</li>
        </ul>
        <p class="mb-4">Removed all Instagram permissions from the submission — keeping it clean, will do Instagram separately after business verification clears.</p>
        <p class="mb-4"><strong>Meta review:</strong> 3-7 business days.</p>

        <h2 class="text-xl font-semibold mt-6 mb-2">What's Next</h2>
        <p class="mb-4">Waiting on:</p>
        <ul class="mb-4 list-disc list-inside space-y-1">
          <li>Meta business verification — 2 working days</li>
          <li>Threads App Review — 3-7 business days</li>
          <li>LinkedIn Community Management API — unknown</li>
        </ul>
        <p class="mb-4">Building in parallel:</p>
        <ul class="mb-4 list-disc list-inside space-y-1">
          <li>Enterprise workspace architecture for agency clients</li>
          <li>Analytics paywall UI</li>
          <li>Instagram App Review once Meta verification clears</li>
        </ul>
        <p class="mb-4">Two days, a lot of debugging, one government website, three platform submissions. This is what building in public actually looks like.</p>
        <p class="mb-4">Follow the SuiteGenie build at <a href="https://kanishksaraswat.me" class="text-cyan-300">kanishksaraswat.me</a></p>
      </article>
    `
  },
  {
    id: 'linkedin-cross-posting-2026',
    title: 'How We Built LinkedIn Cross-Posting Into Tweet Genie — Kanishk Saraswat',
    category: 'Projects',
    date: '2026-02-18',
    author: 'Kanishk Saraswat',
    readTime: '12 min read',
    summary: 'A deep engineering post about adding LinkedIn cross-posting to Tweet Genie: architecture, bugs, and fixes.',
    tags: ['Node.js', 'React', 'LinkedIn API', 'Vercel', 'PostgreSQL', 'Microservices'],
    content: `
      <style>
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        :root {
          --bg: #0c0c0e;
          --surface: #141416;
          --surface2: #1c1c1f;
          --border: #2a2a2f;
          --text: #e8e8f0;
          --muted: #6b6b7b;
          --accent: #4f7fff;
          --accent2: #0A66C2;
          --green: #22c55e;
          --red: #ef4444;
          --yellow: #f59e0b;
          --code-bg: #111115;
        }

        html { scroll-behavior: smooth; }

        body {
          background: var(--bg);
          color: var(--text);
          font-family: 'Geist', sans-serif;
          font-size: 17px;
          line-height: 1.75;
          -webkit-font-smoothing: antialiased;
        }

        /* ── NOISE TEXTURE OVERLAY ── */
        body::before {
          content: '';
          position: fixed;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E");
          pointer-events: none;
          z-index: 0;
          opacity: 0.4;
        }

        /* ── HERO ── */
        .hero {
          position: relative;
          min-height: 60vh;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          padding: 80px 40px 60px;
          border-bottom: 1px solid var(--border);
          overflow: hidden;
        }

        .hero::after {
          content: '';
          position: absolute;
          top: -200px;
          right: -200px;
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, rgba(79,127,255,0.12) 0%, transparent 70%);
          pointer-events: none;
        }

        .hero-eyebrow {
          font-family: 'DM Mono', monospace;
          font-size: 11px;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: var(--accent);
          margin-bottom: 20px;
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .hero-eyebrow::before {
          content: '';
          width: 32px;
          height: 1px;
          background: var(--accent);
        }

        .hero h1 {
          font-family: 'Instrument Serif', serif;
          font-size: clamp(36px, 6vw, 72px);
          line-height: 1.1;
          font-weight: 400;
          max-width: 800px;
          margin-bottom: 28px;
        }

        .hero h1 em { font-style: italic; color: var(--accent); }

        .hero-meta { display: flex; gap: 24px; font-size: 13px; color: var(--muted); font-family: 'DM Mono', monospace; }
        .hero-meta span { display: flex; align-items: center; gap: 6px; }

        /* ── LAYOUT ── */
        .container { max-width: 740px; margin: 0 auto; padding: 0 24px; }
        .content { padding: 72px 0 120px; }

        /* ── TYPOGRAPHY ── */
        h2 { font-family: 'Instrument Serif', serif; font-size: 32px; font-weight: 400; margin: 64px 0 20px; line-height: 1.2; }
        h3 { font-size: 16px; font-weight: 600; letter-spacing: 0.02em; margin: 40px 0 12px; color: var(--text); }
        p { margin-bottom: 20px; color: #c8c8d8; }
        a { color: var(--accent); text-decoration: none; }
        a:hover { text-decoration: underline; }
        strong { color: var(--text); font-weight: 600; }

        /* ── CODE ── */
        code { font-family: 'DM Mono', monospace; font-size: 13px; background: var(--code-bg); border: 1px solid var(--border); border-radius: 4px; padding: 2px 6px; color: #a8c4ff; }
        pre { background: var(--code-bg); border: 1px solid var(--border); border-radius: 10px; padding: 24px; overflow-x: auto; margin: 24px 0; position: relative; }
        pre code { background: none; border: none; padding: 0; font-size: 13px; line-height: 1.7; color: #c8d8ff; }

        .code-label { font-family: 'DM Mono', monospace; font-size: 10px; letter-spacing: 0.1em; text-transform: uppercase; color: var(--muted); margin-bottom: 8px; }

        /* ── CALLOUT BOXES ── */
        .callout { border-radius: 10px; padding: 20px 24px; margin: 28px 0; border-left: 3px solid; font-size: 15px; }
        .callout.error { background: rgba(239,68,68,0.08); border-color: var(--red); color: #fca5a5; }
        .callout.success { background: rgba(34,197,94,0.08); border-color: var(--green); color: #86efac; }
        .callout.info { background: rgba(79,127,255,0.08); border-color: var(--accent); color: #93b4ff; }
        .callout-label { font-family: 'DM Mono', monospace; font-size: 10px; letter-spacing: 0.12em; text-transform: uppercase; margin-bottom: 6px; opacity: 0.7; }

        /* ── TIMELINE ── */
        .timeline { position: relative; margin: 40px 0; padding-left: 28px; }
        .timeline::before { content: ''; position: absolute; left: 0; top: 8px; bottom: 8px; width: 1px; background: linear-gradient(to bottom, var(--accent), var(--border)); }
        .timeline-item { position: relative; margin-bottom: 32px; }
        .timeline-item::before { content: ''; position: absolute; left: -32px; top: 8px; width: 8px; height: 8px; border-radius: 50%; background: var(--accent); border: 2px solid var(--bg); }
        .timeline-item.error::before { background: var(--red); }
        .timeline-item.success::before { background: var(--green); }
        .timeline-label { font-family: 'DM Mono', monospace; font-size: 11px; color: var(--muted); margin-bottom: 4px; }
        .timeline-title { font-size: 15px; font-weight: 600; color: var(--text); margin-bottom: 6px; }
        .timeline-desc { font-size: 14px; color: #8888a0; line-height: 1.6; }

        /* ── ARCH DIAGRAM ── */
        .arch { background: var(--surface); border: 1px solid var(--border); border-radius: 12px; padding: 32px; margin: 32px 0; font-family: 'DM Mono', monospace; font-size: 13px; }
        .arch-row { display: flex; align-items: center; gap: 12px; margin-bottom: 12px; }
        .arch-box { background: var(--surface2); border: 1px solid var(--border); border-radius: 7px; padding: 8px 14px; color: var(--text); white-space: nowrap; }
        .arch-box.blue { border-color: var(--accent); color: #93b4ff; }
        .arch-box.green { border-color: var(--green); color: #86efac; }
        .arch-box.linkedin { border-color: var(--accent2); color: #7ab8f5; }

        /* ── DIFF ── */
        .diff { background: var(--code-bg); border: 1px solid var(--border); border-radius: 10px; overflow: hidden; margin: 24px 0; font-family: 'DM Mono', monospace; font-size: 13px; }
        .diff-header { padding: 10px 16px; background: var(--surface2); border-bottom: 1px solid var(--border); font-size: 11px; color: var(--muted); letter-spacing: 0.08em; }
        .diff-line { padding: 2px 16px; line-height: 1.8; }
        .diff-line.removed { background: rgba(239,68,68,0.1); color: #fca5a5; }
        .diff-line.added { background: rgba(34,197,94,0.1); color: #86efac; }
        .diff-line.neutral { color: #6b6b7b; }

        /* ── SECTION DIVIDER ── */
        .divider { display: flex; align-items: center; gap: 16px; margin: 56px 0 0; color: var(--muted); font-family: 'DM Mono', monospace; font-size: 11px; letter-spacing: 0.1em; }
        .divider::before, .divider::after { content: ''; flex: 1; height: 1px; background: var(--border); }

        /* ── TAG CHIPS ── */
        .tags { display: flex; flex-wrap: wrap; gap: 8px; margin: 20px 0; }
        .tag { font-family: 'DM Mono', monospace; font-size: 11px; padding: 4px 10px; border-radius: 999px; border: 1px solid var(--border); color: var(--muted); }

        /* ── LOG LINE ── */
        .log { font-family: 'DM Mono', monospace; font-size: 12px; padding: 16px 20px; background: var(--code-bg); border: 1px solid var(--border); border-radius: 8px; margin: 16px 0; line-height: 1.8; }
        .log .ts { color: var(--muted); }
        .log .level-info { color: var(--accent); }
        .log .level-error { color: var(--red); }
        .log .level-warn { color: var(--yellow); }
        .log .level-success { color: var(--green); }
        .log .msg { color: var(--text); }

        /* ── FOOTER ── */
        .footer { border-top: 1px solid var(--border); padding: 48px 40px; display: flex; justify-content: space-between; align-items: center; font-family: 'DM Mono', monospace; font-size: 12px; color: var(--muted); }
        .footer-sig { font-family: 'Instrument Serif', serif; font-size: 20px; color: var(--text); }

        @media (max-width: 640px) {
          .hero { padding: 60px 24px 48px; }
          .footer { flex-direction: column; gap: 16px; text-align: center; }
          .arch-row { flex-wrap: wrap; }
        }
      </style>

      <!-- HERO -->
      <div class="hero">
        <div class="container">
          <div class="hero-eyebrow">Engineering Deep Dive</div>
          <h1>How We Built <em>LinkedIn Cross-Posting</em> Into Tweet Genie</h1>
          <div class="hero-meta">
            <span>📅 February 2026</span>
            <span>⏱ 12 min read</span>
            <span>🛠 Full-stack, Node.js, Vercel</span>
          </div>
        </div>
      </div>

      <!-- CONTENT -->
      <div class="container">
      <div class="content">

        <div class="tags">
          <span class="tag">Node.js</span>
          <span class="tag">React</span>
          <span class="tag">LinkedIn API</span>
          <span class="tag">Vercel</span>
          <span class="tag">PostgreSQL</span>
          <span class="tag">Microservices</span>
        </div>

        <p>
          <strong>SuiteGenie</strong> is a multi-product SaaS I'm building, Tweet Genie handles Twitter/X scheduling and composing, LinkedIn Genie handles LinkedIn posts. They're separate apps, separate backends, shared database. This post is the full story of how I wired them together so a single toggle in Tweet Genie can cross-post to LinkedIn, every bug, every wrong assumption, and the final elegant solution.
        </p>

        <h2>The Big Picture</h2>

        <p>You have two separate apps. Tweet Genie and LinkedIn Genie. They don't know about each other by default. Your job was to make them talk to each other securely when a user wants to post to both platforms at once. Think of it like two separate restaurants in the same building sharing one kitchen. How do you coordinate orders between them?</p>

        <h3>The Status Check, "Is LinkedIn Connected?"</h3>

        <p>When the compose page loads, the frontend needs to know if the user has LinkedIn connected so it can show the toggle as enabled or disabled. The naive approach would be to ask LinkedIn Genie directly from the browser. But the browser said no, CORS. It's like a rule that says "you can only talk to the same building you came from." So instead Tweet Genie's backend acts as a middleman. The browser asks Tweet Genie's backend, and Tweet Genie's backend checks the shared database directly. Same database, same answer, no CORS problem. The browser never leaves its own building.</p>

        <h3>The Cross-Post , "Post to Both"</h3>

        <p>When you hit Post Tweet with the toggle on, here's what happens in order:</p>
        <ol>
          <li>Browser sends the tweet content to Tweet Genie's backend, with a flag saying "also post to LinkedIn"</li>
          <li>Tweet Genie posts to Twitter  done</li>
          <li>Tweet Genie then calls LinkedIn Genie's backend directly, server to server, with the same content</li>
          <li>LinkedIn Genie looks up the user's LinkedIn token in the database and posts on their behalf</li>
          <li>Only after all that, Tweet Genie tells the browser "done, posted to both"</li>
        </ol>

        <p>The key insight — steps 3 and 4 happen between servers, not browsers. No CORS. No user involved. Just two backends talking to each other privately.</p>

        <h3>The Secret Handshake</h3>

        <p>But how does LinkedIn Genie know the request is really coming from Tweet Genie and not some random person trying to post on someone else's behalf? A shared secret. Both services have the same <code>INTERNAL_API_KEY</code> in their environment variables. Tweet Genie sends it in every request header. LinkedIn Genie checks it before doing anything. If it doesn't match, rejected immediately. It's like a password between two colleagues. Only they know it, the outside world doesn't.</p>

        <h3>The Vercel Problem, Why Fire-and-Forget Failed?</h3>

        <p>In regular Node.js (running on a VPS), the server is always on. You can start a task, send a response, and the task keeps running in the background. Vercel is different. It's serverless — the function only lives as long as the request is being handled. The moment you send a response, Vercel says "job done" and shuts the function down. Anything running in the background gets killed instantly. So our original code that said "send the tweet response immediately, post to LinkedIn in the background" — the background part never happened on Vercel. The fix was simple: wait for LinkedIn to finish before sending the response. The user waits an extra second or two, but everything actually happens.</p>

        <h3>The Full Journey in One Sentence</h3>

        <p>Browser asks backend → backend checks DB → toggle lights up → user posts → backend tweets → backend secretly calls LinkedIn Genie with a password → LinkedIn Genie posts → backend tells browser "done." That's the whole thing. Every bug we hit was just one of those arrows not working correctly — wrong URL, wrong file, Vercel killing things too early, CORS blocking direct calls.</p>

        <h2>The Idea</h2>

        <p>Simple enough on paper: add a "Post to LinkedIn" toggle in Tweet Genie's composer. When enabled and you hit Post Tweet, it also posts the same content to LinkedIn. One button, two platforms.</p>

        <div class="arch">
          <div style="font-size:11px;color:var(--muted);margin-bottom:20px;letter-spacing:0.08em;text-transform:uppercase;">Architecture</div>
          <div class="arch-row">
            <div class="arch-box blue">Tweet Genie Frontend<br><span style="font-size:10px;color:var(--muted)">tweet.suitegenie.in</span></div>
            <div class="arch-arrow">→</div>
            <div class="arch-box blue">Tweet Genie Backend<br><span style="font-size:10px;color:var(--muted)">tweetapi.suitegenie.in</span></div>
            <div class="arch-arrow">→</div>
            <div class="arch-box linkedin">LinkedIn Genie Backend<br><span style="font-size:10px;color:var(--muted)">apilinkedin.suitegenie.in</span></div>
          </div>
          <div class="arch-row" style="margin-top:16px;">
            <div class="arch-box green" style="font-size:11px;">Shared Postgres DB (Supabase)<br><span style="color:var(--muted)">linkedin_auth table</span></div>
          </div>
          <div style="margin-top:16px;font-size:11px;color:var(--muted);">
            Service-to-service auth via x-internal-api-key header
          </div>
        </div>

        <h2>Phase 1 — The LinkedIn Status Check</h2>

        <p>Before the toggle can do anything useful, it needs to know if the current user has a LinkedIn account connected. My first instinct was to call LinkedIn Genie's API directly from the frontend.</p>

        <div class="callout error">
          <div class="callout-label">❌ First Attempt</div>
          The frontend (localhost:5174) calling LinkedIn Genie (localhost:3004) directly → instant CORS error. Different ports = different origins = browser blocks it.
        </div>

        <p>The fix: instead of the frontend calling LinkedIn Genie, <strong>Tweet Genie's own backend</strong> does a direct database query. Same Postgres instance, zero CORS, instant result.</p>

        <div class="code-label">routes/linkedinStatus.js — Tweet Genie backend</div>
        <pre><code>router.get('/status', async (req, res) => {
  const userId = req.user?.id || req.user?.userId;
  if (!userId) return res.status(401).json({ connected: false });

  const { rows } = await pool.query(
    'SELECT linkedin_user_id, linkedin_display_name 
     FROM linkedin_auth WHERE user_id = $1 LIMIT 1',
    [userId]
  );

  res.json({
    connected: rows.length > 0,
    account: rows[0] || null,
  });
});</code></pre>

        <p>Frontend calls <code>/api/linkedin/status</code> (same origin, no CORS), gets back <code>{connected: true}</code> or <code>{connected: false}</code>. Toggle renders accordingly.</p>

        <h2>Phase 2 — Bug Hunt: Route Not Found</h2>

        <p>Even with the route written, the frontend was getting HTML back instead of JSON. Classic <code>SyntaxError: Unexpected token '&lt;'</code>. The browser console test confirmed it:</p>

        <div class="log">
          <span class="level-error">ERROR</span> <span class="msg">SyntaxError: Unexpected token '&lt;', "&lt;!DOCTYPE "... is not valid JSON</span>
        </div>

        <p>Three separate bugs caused this, found one by one:</p>

        <div class="timeline">
          <div class="timeline-item error">
            <div class="timeline-label">Bug #1</div>
            <div class="timeline-title">Wrong file being imported</div>
            <div class="timeline-desc">index.js was importing <code>linkedinStatus.js</code> but I created <code>linkedin.js</code>. The old proxy-heavy file was still running.</div>
          </div>
          <div class="timeline-item error">
            <div class="timeline-label">Bug #2</div>
            <div class="timeline-title">SSO catch-all swallowing the route</div>
            <div class="timeline-desc"><code>app.use('/', ssoRoutes)</code> was registered before the LinkedIn route and had a wildcard that caught everything, returning the React SPA's index.html.</div>
          </div>
          <div class="timeline-item error">
            <div class="timeline-label">Bug #3</div>
            <div class="timeline-title">No Vite proxy configured</div>
            <div class="timeline-desc">In development, <code>fetch('/api/linkedin/status')</code> resolves to <code>localhost:5174/api/...</code> (Vite) not <code>localhost:3002/api/...</code> (backend). Vite serves index.html for unknown routes.</div>
          </div>
          <div class="timeline-item success">
            <div class="timeline-label">Fix</div>
            <div class="timeline-title">Three targeted fixes</div>
            <div class="timeline-desc">Renamed file correctly. Moved LinkedIn route above SSO registration. Added Vite proxy config to forward <code>/api/*</code> to <code>localhost:3002</code>.</div>
          </div>
        </div>

        <div class="code-label">vite.config.js — proxy added</div>
        <pre><code>server: {
  port: 5174,
  proxy: {
    '/api': {
      target: 'http://localhost:3002',
      changeOrigin: true,
      secure: false,
    },
  },
},</code></pre>

        <p>After all three fixes, the DB query confirmed what we expected — the user IDs matched perfectly between <code>users</code> and <code>linkedin_auth</code> tables. Toggle now shows "Connected" correctly.</p>

        <h2>Phase 3 — The Cross-Post Architecture</h2>

        <p>Now the interesting part. When a tweet posts successfully, Tweet Genie needs to tell LinkedIn Genie to post the same content. Service-to-service communication, no user browser involved.</p>

        <p>The design: a shared secret key (<code>INTERNAL_API_KEY</code>) in both services' environment variables. Tweet Genie sends it in the <code>x-internal-api-key</code> header. LinkedIn Genie validates it using timing-safe comparison before processing.</p>

        <div class="code-label">middleware/internalAuth.js — LinkedIn Genie</div>
        <pre><code>const match = a.length === b.length && 
              crypto.timingSafeEqual(a, b);

if (!match) return res.status(401).json({ error: 'Invalid internal API key' });

req.isInternal = true;
req.internalCaller = req.headers['x-internal-caller'];
next();</code></pre>

        <p>The cross-post route sits between <code>internalAuth</code> and <code>requirePlatformLogin</code> in LinkedIn Genie's server — so it's authenticated internally but doesn't need a user session:</p>

        <div class="code-label">server.js — LinkedIn Genie route order</div>
        <pre><code>app.use(internalAuth);
app.use('/api/internal', crossPostRoutes); // ← internal only
app.use(requirePlatformLogin);
app.use('/api', apiRoutes);               // ← user sessions required</code></pre>

        <div class="code-label">routes/crossPost.js — LinkedIn Genie</div>
        <pre><code>router.post('/cross-post', async (req, res) => {
  if (!req.isInternal) return res.status(403).json({ error: 'Forbidden' });

  const { content } = req.body;
  const platformUserId = req.headers['x-platform-user-id'];

  // Look up their LinkedIn account
  const { rows } = await pool.query(
    'SELECT * FROM linkedin_auth WHERE user_id = $1 LIMIT 1',
    [platformUserId]
  );

  if (!rows.length) {
    return res.status(404).json({ code: 'LINKEDIN_NOT_CONNECTED' });
  }

  const authorUrn = &#96;urn:li:person:\${rows[0].linkedin_user_id}&#96;;
  await createLinkedInPost(rows[0].access_token, authorUrn, content, [], 'single_post');
  
  res.json({ success: true });
});</code></pre>

        <h2>Phase 4 — Production Breaks Everything</h2>

        <p>Development: works perfectly. Production: complete silence. No LinkedIn cross-post logs at all. Three more bugs to track down.</p>

        <div class="divider">Production Bug Hunt</div>

        <h3>Bug #4 — Vercel Frontend Had No API Proxy</h3>

        <p>The Vite proxy only exists in development. In production, Tweet Genie's frontend is a static build on Vercel. <code>fetch('/api/tweets')</code> hit Vercel, which served <code>index.html</code> — again.</p>

        <p>Fix: add a proper proxy rewrite to <code>vercel.json</code>:</p>

        <div class="code-label">vercel.json — Tweet Genie frontend</div>
        <pre><code>{
  "rewrites": [
    {
      "source": "/api/(.*)",
      "destination": "https://tweetapi.suitegenie.in/api/$1"
    },
    {
      "source": "/((?!api/).*)",
      "destination": "/index.html"
    }
  ]
}</code></pre>

        <h3>Bug #5 — Duplicate Content (LinkedIn API 422)</h3>

        <p>After fixing routing, we got this from LinkedIn:</p>

        <div class="callout error">
          <div class="callout-label">LinkedIn API 422</div>
          "Content is a duplicate of urn:li:share:7429862475279511552" — DUPLICATE_POST
        </div>

        <p>Not a bug in our code at all. We'd been testing with the same content string repeatedly, and LinkedIn's API blocks duplicate posts within a short time window. Posted with unique content — worked immediately.</p>

        <h3>Bug #6 — Vercel Kills Background Tasks</h3>

        <p>This was the subtle one. After the tweet posted to Twitter, the LinkedIn cross-post was running as fire-and-forget:</p>

        <div class="diff">
          <div class="diff-header">tweets.js — fire-and-forget pattern (BROKEN on Vercel)</div>
          <div class="diff-line removed">- (async () => {</div>
          <div class="diff-line removed">-   const status = await crossPostToLinkedIn({...});</div>
          <div class="diff-line removed">-   logger.info('Background cross-post', { status });</div>
          <div class="diff-line removed">- })(); // fires but nobody waits</div>
          <div class="diff-line removed">- linkedinStatus = 'pending';</div>
          <div class="diff-line removed">- res.json({...}); // response sent, Vercel freezes function</div>
          <div class="diff-line neutral">  </div>
          <div class="diff-line added">+ linkedinStatus = await crossPostToLinkedIn({...});</div>
          <div class="diff-line added">+ logger.info('Cross-post completed', { status: linkedinStatus });</div>
          <div class="diff-line added">+ res.json({ linkedin: linkedinStatus }); // sent AFTER LinkedIn responds</div>
        </div>

        <p>
          <strong>Why this breaks on Vercel:</strong> Vercel runs serverless functions. The moment <code>res.json()</code> is called, Vercel considers the function done and freezes the process. Any async work queued after that never executes. Fire-and-forget is a pattern that only works on long-running servers (like a VPS running Node.js with <code>pm2</code>).
        </p>

        <p>
          The fix adds ~1-2 seconds to the post response time since we now wait for LinkedIn before responding. Totally acceptable — the tweet is already saved to the DB at this point, so nothing is lost either way.
        </p>

        <div class="callout success">
          <div class="callout-label">✓ Final Result</div>
          After awaiting the cross-post, prod logs started showing exactly what we needed.
        </div>

        <div class="log">
          <div><span class="ts">12:26:35Z</span> <span class="level-info">INFO</span> <span class="msg">Single tweet posted</span> tweetId=2024098220415082776</div>
          <div><span class="ts">12:26:35Z</span> <span class="level-info">INFO</span> <span class="msg">[LinkedIn Cross-post] Config check</span> url=https://apilinkedin.suitegenie.in hasKey=true</div>
          <div><span class="ts">12:26:35Z</span> <span class="level-info">INFO</span> <span class="msg">[LinkedIn Cross-post] Sending request</span> userId=eeb49aab...</div>
          <div><span class="ts">12:26:37Z</span> <span class="level-success">INFO</span> <span class="msg">[LinkedIn Cross-post] Success ✓</span> userId=eeb49aab...</div>
          <div><span class="ts">12:26:37Z</span> <span class="level-success">INFO</span> <span class="msg">LinkedIn cross-post completed</span> status=posted</div>
        </div>

        <h2>The Complete Mental Model</h2>

        <p>Here's every layer of the system working together in the final version:</p>

        <div class="timeline">
          <div class="timeline-item">
            <div class="timeline-label">Step 1</div>
            <div class="timeline-title">Page Load — Status Check</div>
            <div class="timeline-desc">Frontend calls <code>/api/linkedin/status</code>. Tweet Genie backend queries <code>linkedin_auth</code> table directly. Toggle shows Connected/Not Connected.</div>
          </div>
          <div class="timeline-item">
            <div class="timeline-label">Step 2</div>
            <div class="timeline-title">User Toggles On and Posts</div>
            <div class="timeline-desc">Frontend sends <code>POST /api/tweets</code> with <code>postToLinkedin: true</code> in the body.</div>
          </div>
          <div class="timeline-item">
            <div class="timeline-label">Step 3</div>
            <div class="timeline-title">Tweet Posts to Twitter</div>
            <div class="timeline-desc">Tweet Genie backend posts to Twitter API, saves tweet to DB, gets back the tweet ID.</div>
          </div>
          <div class="timeline-item">
            <div class="timeline-label">Step 4</div>
            <div class="timeline-title">Cross-Post to LinkedIn Genie</div>
            <div class="timeline-desc">Tweet Genie calls LinkedIn Genie's internal endpoint with the content + tweet URL. Awaited — not fire-and-forget.</div>
          </div>
          <div class="timeline-item">
            <div class="timeline-label">Step 5</div>
            <div class="timeline-title">LinkedIn Genie Posts</div>
            <div class="timeline-desc">LinkedIn Genie validates the internal key, looks up the user's LinkedIn token, calls LinkedIn's UGC Posts API, returns success.</div>
          </div>
          <div class="timeline-item success">
            <div class="timeline-label">Step 6</div>
            <div class="timeline-title">Response Back to User</div>
            <div class="timeline-desc">Tweet Genie returns <code>{linkedin: "posted"}</code>. Frontend shows the right toast: "Posted to Twitter & LinkedIn ✓".</div>
          </div>
        </div>

        <h2>Key Lessons</h2>

        <h3>1. Fire-and-Forget Doesn't Work on Serverless</h3>
        <p>If you're on Vercel, Netlify, AWS Lambda, or any FaaS platform — background async tasks launched after <code>res.json()</code> will be killed. Either await everything before responding, or use a proper background job queue (Bull, Inngest, etc.).</p>

        <h3>2. Share the Database, Skip the Proxy</h3>
        <p>When two microservices share the same Postgres instance, a direct DB query is almost always better than an HTTP proxy for status checks. Fewer moving parts, no CORS, lower latency.</p>

        <h3>3. Vite Proxy ≠ Production Proxy</h3>
        <p>The Vite dev server proxy is development-only magic. In production you need to configure your actual reverse proxy (Vercel <code>rewrites</code>, nginx <code>proxy_pass</code>, etc.) to do the same job.</p>

        <h3>4. Duplicate Content Is a LinkedIn API Feature</h3>
        <p>LinkedIn's API returns 422 if you post identical content twice in a short window. Always test with unique strings — not <code>"test"</code> sent ten times in a row.</p>

        <h3>5. Timing-Safe Comparison for Shared Secrets</h3>
        <p>Always use <code>crypto.timingSafeEqual()</code> when comparing API keys, not <code>===</code>. Regular string comparison leaks timing information that can be used to brute-force secrets character by character.</p>

        <h2>What's Next</h2>

        <p>The cross-posting foundation is solid. Next up: LinkedIn carousels (PDFs uploaded as documents), scheduled cross-posts, and per-platform content customization so you can write a thread for Twitter and a longer-form version for LinkedIn — all from one composer.</p>

        <div class="callout info">
          <div class="callout-label">Try It</div>
          SuiteGenie is live at <a href="https://suitegenie.in">suitegenie.in</a>. Tweet Genie and LinkedIn Genie are both available — connect both and the toggle just works.
        </div>

      </div>
      </div>

      <!-- FOOTER -->
      <div class="footer">
        <div class="footer-sig">Kanishk Saraswat</div>
        <div>kanishksaraswat.me · February 2026</div>
      </div>

    `
  },
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
            <p>Search Engine Optimization (SEO) in 2025 is no longer just about keywords - it's about experience, trust, and adaptability. Search engines now evaluate how well your website serves users through E-E-A-T (Expertise, Experience, Authoritativeness, Trustworthiness), Core Web Vitals, and structured data.</p>
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
          <p class="mt-2 text-zinc-300">Yes - SEO has evolved, but it remains essential for visibility, credibility, and organic growth.</p>
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
          <p class="mt-2 text-zinc-300">Yes - use AI for drafts and ideation, but always edit for accuracy, tone, and originality.</p>
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
        <p>The memory hit me like a wave. My anime website days - the endless cycle of creating content for the site while spending hours crafting social media posts to promote it. The stress of maintaining presence across platforms while tools like Hootsuite demanded expensive monthly fees made it clear I wasn't alone in this struggle.</p>

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
  ,
  {
    id: 'from-3-hours-to-5-minutes',
    title: 'From 3 Hours to 5 Minutes: Why I Built SuiteGenie',
    category: 'Projects',
    date: '2026-02-16',
    author: 'Kanishk Saraswat',
    readTime: '8 min read',
    summary: 'I spent 3 hours every week manually creating social media posts at Anicafe. Here\'s how I built SuiteGenie to automate the entire workflow down to 5 minutes.',
    tags: ['SaaS','AI','SocialMedia','StartupJourney','SoloFounder'],
    content: `
      <article class="prose prose-lg max-w-3xl mx-auto">
        <header class="mb-8">
          <h1 class="text-3xl font-bold mb-4">From 3 Hours to 5 Minutes: Why I Built SuiteGenie</h1>
          <div class="flex items-center gap-4 text-zinc-400 mb-4">
            <span>By Kanishk Saraswat</span>
            <span>•</span>
            <span>February 16, 2026</span>
            <span>•</span>
            <span>8 min read</span>
          </div>
          <div class="flex gap-2 flex-wrap">
            <span class="chip text-xs">SaaS</span>
            <span class="chip text-xs">AI</span>
            <span class="chip text-xs">SocialMedia</span>
            <span class="chip text-xs">StartupJourney</span>
            <span class="chip text-xs">SoloFounder</span>
          </div>
        </header>

        <!-- Hook -->
        <div class="mb-8 p-6 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-xl">
          <p class="text-lg font-semibold text-cyan-300 mb-2">Every Tuesday morning at Anicafe, I'd sit down with the same dreaded task: creating and scheduling 30 social media posts for the week.</p>
          <p class="text-zinc-200 leading-relaxed">The routine was painfully manual: Open ChatGPT, paste prompts one by one, copy responses, switch to Buffer, paste and schedule each post — repeat 30 times. Three hours. Every. Single. Week. That frustration became SuiteGenie — an AI social media platform that does in 5 minutes what took me 3 hours. Today it serves 30 active users and is getting ~100 Google Search impressions per month.</p>
        </div>

        <h2 class="text-xl font-semibold mt-6 mb-2">The Problem I Couldn't Ignore</h2>
        <h3 class="text-lg font-medium mt-4 mb-2">The 3-Hour Social Media Grind</h3>
        <p class="mb-4">While working at Anicafe managing their social media, I discovered that existing tools like Hootsuite, Sprout Social, and Buffer are built for scheduling, not creation. My workflow was:</p>
        <ul class="mb-4 list-disc list-inside space-y-2">
          <li>Step 1: Content Strategy — manual brainstorming</li>
          <li>Step 2: AI Generation — ChatGPT in a separate tab, 30+ copy-paste cycles</li>
          <li>Step 3: Formatting — clean up each post individually</li>
          <li>Step 4: Scheduling — Buffer, one post at a time</li>
        </ul>
        <p class="mb-4">What I needed: bulk AI generation (30–50 posts in one click), bulk scheduling with frequency rules, and one unified workflow. Nothing on the market did this.</p>

        <h2 class="text-xl font-semibold mt-6 mb-2">The "Aha" Moment</h2>
        <h3 class="text-lg font-medium mt-4 mb-2">What If One Platform Did Everything?</h3>
        <p class="mb-4">After my 47th copy-paste between ChatGPT and Buffer, I realized: as a developer I could build a single platform combining AI generation and bulk scheduling. BYOK (bring your own keys) would keep costs low for power users. If I could save 3 hours/week, agencies managing many clients would save dozens of hours.</p>

        <h2 class="text-xl font-semibold mt-6 mb-2">Building SuiteGenie</h2>
        <h3 class="text-lg font-medium mt-4 mb-2">From Idea to 30 Active Users in 2 Months</h3>
        <p class="mb-4">I started building an MVP as a solo founder. Core features shipped included:</p>
        <ol class="mb-4 list-decimal list-inside space-y-2">
          <li><strong>Multi-Platform Support</strong> — Tweet Genie and LinkedIn Genie with seamless subdomain switching.</li>
          <li><strong>Bulk AI Generation</strong> — generate 30–50 posts from a strategy; progressive streaming gives the first result in under 2s.</li>
          <li><strong>Bulk Scheduling</strong> — select generated posts and schedule across a custom calendar with frequency rules.</li>
          <li><strong>Team Collaboration (RBAC)</strong> — Owner/Admin/Editor/Member roles; teams up to 15 members and 25 social accounts.</li>
          <li><strong>BYOK Mode</strong> — users plug in their OpenAI/Perplexity/Gemini keys to control costs.</li>
        </ol>
        <p class="mb-4"><strong>Tech stack:</strong> React + Tailwind, Node + Express, PostgreSQL (Supabase), Redis (Upstash), OAuth 2.0, Razorpay.</p>

        <h2 class="text-xl font-semibold mt-6 mb-2">The Technical Challenges</h2>
        <h3 class="text-lg font-medium mt-4 mb-2">What I Learned Building This Solo</h3>

        <h4 class="text-md font-semibold mt-3">BullMQ Cost & Scheduler</h4>
        <p class="mb-4">BullMQ caused high Redis command usage during constant polling. I replaced it with a PostgreSQL-backed scheduler that polls conditionally, which reduced Redis reliance and costs substantially.</p>

        <h4 class="text-md font-semibold mt-3">Slow Bulk Generation</h4>
        <p class="mb-4">Generating 30–50 posts took too long and left users staring at loaders. I implemented Redis streaming and progressive results so the first items appear quickly while the rest stream in.</p>

        <h4 class="text-md font-semibold mt-3">Credit System Latency</h4>
        <p class="mb-4">Synchronous DB credit checks slowed the UI. Moving instant deductions to Redis with periodic batch sync to PostgreSQL gave sub-50ms feedback to users and dramatically reduced DB write frequency.</p>

        <h4 class="text-md font-semibold mt-3">SEO for React SPA</h4>
        <p class="mb-4">I used React Helmet, XML sitemaps, robots.txt, and structured data to improve search visibility — leading to organic impressions and clicks during the early months.</p>

        <h2 class="text-xl font-semibold mt-6 mb-2">Early Results & Validation</h2>
        <p class="mb-4">Launch stats (first 2 months): 30 active users, ~100 Google impressions, ~30 organic clicks, and several demo requests from outreach. User feedback confirmed that bulk generation and scheduling solved a real pain point.</p>

        <h2 class="text-xl font-semibold mt-6 mb-2">Lessons for Other Founders</h2>
        <h3 class="text-lg font-medium mt-4 mb-2">What Worked</h3>
        <ul class="mb-4 list-disc list-inside space-y-2">
          <li>Build for your pain — I lived this problem at Anicafe.</li>
          <li>Ship an MVP fast; optimize later.</li>
          <li>Eat your own dog food — I manage SuiteGenie's accounts with SuiteGenie.</li>
          <li>Start SEO early — it brought organic traffic without paid ads.</li>
        </ul>

        <h3 class="text-lg font-medium mt-4 mb-2">What I'd Change</h3>
        <ul class="mb-4 list-disc list-inside space-y-2">
          <li>Avoid over-engineering early — BullMQ was overkill for the initial scale.</li>
          <li>Talk to users before building speculative features like AI images.</li>
          <li>Focus on one channel first before expanding.</li>
        </ul>

        <h2 class="text-xl font-semibold mt-6 mb-2">Closing</h2>
        <p class="mb-4">If you're tired of copy-paste social media workflows, try SuiteGenie: <a href="https://suitegenie.in" class="text-cyan-300">suitegenie.in</a>. I'm still iterating as a solo founder — if you have ideas or want to chat, reach out on Twitter/X or LinkedIn.</p>

        <footer class="mt-8">
          <p class="text-sm text-zinc-400">Appendix & links: deep dives on BullMQ removal, Redis streaming, and SEO optimizations available on this blog.</p>
        </footer>
      </article>
    `
  }
];