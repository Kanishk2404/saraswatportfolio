export const projectsIndexOrder = [
  'bungouarchive',
  'anicafe',
  'suitegenie',
  'cloud-bouncer',
  'dockerized-fullstack',
  'serverless-forms',
  'aws-infrastructure',
  'ec2-nginx-https',
  'ecs-dockerhub'
]

export const projects = {
  'bungouarchive': {
    title: 'BungouArchive',
    role: 'Full-Stack Builder and Live Ops',
    oneLiner: 'A curated fan platform for Bungo Stray Dogs with faction wars, 1v1 duels, AI-driven character assignment and an in-world moderation system.',
    description: 'Identity is earned through behavior signals, with lore, archive reads, duels, faction war state, and moderation all connected to one progression model.',
    status: 'Development paused due to infrastructure scaling limits.',
    live: 'https://bungou-stray-dogs.vercel.app',
    github: 'https://github.com/animecalssroom/bungoustraydogs',
    tech: ['Next.js 14 (App Router)', 'TypeScript', 'Supabase (Postgres, RLS, Realtime, RPC)', 'Redis', 'Gemini API', 'Vercel', 'Node 20'],
    image: '/images/home_bsd.png',
    images: [
      '/images/home_bsd.png',
      '/images/entracebsd.png',
      '/images/TODO-bungou-home-theme-switch.png',
      '/images/TODO-bungou-profile-character-reveal.png',
      '/images/TODO-bungou-duel-screen.png',
      '/images/TODO-bungou-guide-terminal.png',
      '/images/TODO-bungou-faction-room.png'
    ],
    highlights: [
      'Behavior-based character assignment with Gemini and rule-based fallback',
      'Round-based 1v1 duels with server-side move resolution and progression hooks',
      'Rules-driven faction war engine with guard and integrity mechanics',
      'Yokohama territory control map tied to live war outcomes',
      'In-world moderation model through Ango and separate owner operations'
    ]
  },
  'anicafe': {
  title: 'Anicafe',
  status: 'Sold',
  role: 'Founder, developer, content and community lead',
  dates: 'Built, scaled, and exited; exact start, pivot, and exit years not recorded',
  oneLiner: 'An anime community platform grown to 100k+ monthly organic visits, with AdSense revenue, a merch line that sold 800+ t-shirts, a 20k+ Telegram community, and a profitable exit.',
  description: 'Anicafe began as an anime streaming, downloading, and blogging site before pivoting to original and user-generated content. The rebuilt community platform focused on fan theories, anime news, recommendations, blogs, comments, and chat.',
  highlights: [
    '100k+ monthly organic visits driven by SEO, content, and community',
    '20k+ Telegram community that drove repeat visits and supported the merch launch',
    'Google AdSense approved after the platform pivoted to sustainable original content',
    'Anicafe merchandise line sold 800+ t-shirts',
    'Website and merch business sold in a profitable exit',
  ],
  metrics: [
    { id: 'visits', label: 'Monthly organic visits', value: '100k+', detail: 'SEO, content, and community-led growth' },
    { id: 'telegram', label: 'Telegram community', value: '20k+', detail: 'Repeat visits and merch launch audience' },
    { id: 'merch', label: 'Merch sold', value: '800+', detail: 'Anicafe t-shirts' },
  ],
  tech: ['React', 'Node.js', 'MongoDB', 'WordPress', 'SEO', 'Google Analytics', 'AdSense', 'Content Strategy', 'Community Management'],
  images: ['/images/anicafe1.jpeg', '/images/anicafe2.jpeg', '/images/anicafe3.jpeg'],
  github: null,
  live: null,
  tabs: {
    'Overview': 'Anicafe stayed a passion project from start to finish, but it was built and operated like a real product. Users could submit theories, read anime news, discover recommendations, publish blogs, and comment or chat with other fans.',
    'Growth & Monetisation': [
      'Reached 100k+ monthly organic visits through SEO, content, and community rather than paid acquisition.',
      'Ranked for terms including “anicafe”, “anime cafe”, anime news, and anime theory topics.',
      'Built a 20k+ Telegram community that drove repeat visits and supported the merch launch.',
      'Received Google AdSense approval after the content-model pivot.',
      'Designed and launched Anicafe t-shirts; 800+ units were sold. The exact production model and sales channel are not recorded here.',
    ],
    'Challenges & Impact': [
      'Compliance concerns required a complete business-model change instead of continuing the original streaming model.',
      'Handled content, community, SEO, development, and merchandising independently.',
      'The website and merch business were sold together in a profitable exit.',
    ],
  },
  journey: [
    'Launched as an anime streaming, downloading, and blogging site',
    'Pivoted to original and user-generated content after compliance concerns',
    'Built features for theories, news, recommendations, blogs, comments, and chat',
    'Grew organic traffic through SEO and content around anime topics',
    'Built and managed a 20k+ Telegram community',
    'Launched an Anicafe t-shirt line and sold 800+ units',
    'Sold the website and merch business in a profitable exit',
  ],
  learnings: [
    'Pivoting quickly when the original business model is no longer sustainable',
    'Growing traffic organically through content, SEO, and community',
    'Turning an audience into revenue through advertising and products',
    'Running a small e-commerce line end to end',
    'Building a product and audience to a point where someone else wanted to buy it',
  ],
  notes: 'Live/archive link: sold and no longer operated by me. The original start, pivot, and exit years, exact hosting/database architecture, merch production model, and AdSense earnings are not recorded in the portfolio. Screenshots can be added to the image gallery when available; earnings should be redacted before publishing.',
  },
  'cloud-bouncer': {
    title: 'Cloud Bouncer (2024) - SIH (MoD) DDoS/DoS Protection Tool',
    role: 'Team Lead',
    oneLiner: 'AI-powered DDoS/DoS protection tool with automated detection, response, and analysis. Built for Smart India Hackathon with comprehensive traffic monitoring and protection modules.',
    highlights: [
      'Built for Smart India Hackathon (MoD) with advanced DDoS/DoS protection',
      'AI-powered traffic classification and automated response modules',
      'Comprehensive analysis and visualization of attack patterns',
      'Modular design: Detector, Action, Analysis, and Filter modules',
      'Team: Kanishk Saraswat (Lead), Abhay Bharti, Prashant Yadav, SHIVAM KUMAR, Ashutosh Singh'
    ],
    modules: [
      'Detector AI: Classifies traffic into normal [0], potential DDoS [1], and peak hours [2]',
      'Action Module: Automatically applies rate limiting, reCAPTCHA, and dynamic IP blocking (15s fail window)',
      'Analysis Module: Tracks attack time, patterns, IP ranges, request types, and creates visualization graphs',
      'Filter Module (Future): Separate malicious IPs from normal traffic with >90% accuracy target',
    ],
    stack: ['React (frontend)', 'Node.js/Express (API)', 'Python (AI)', 'MongoDB (events)'],
    status: 'Local prototype; plan to stage on demo site before wider rollout',
    tech: ['React', 'Node.js', 'Python', 'MongoDB', 'AI', 'Cybersecurity', 'Machine Learning'],
    images: ['/images/cloudbouncer_!.jpeg', '/images/cloudbouncer_2.jpeg', '/images/cloudbouncer_3.jpeg'],
  github: 'https://github.com/CLOUD-BOUNCER-TOOL',
    live: null,
    team: [
      'Kanishk Saraswat - Team Lead',
      'Abhay Bharti',
      'Prashant Yadav', 
      'SHIVAM KUMAR',
      'Ashutosh Singh - AI Modules Support'
    ],
    functionality: [
      'Embed Detector in client websites to read logs directly or via Elasticsearch',
      'Traffic flows through tool after DDoS detection with load balancing',
      'Filter module separates malicious IPs for automated response',
      'Option to embed full tool or just Detector based on client preference',
      'Database adjustments needed for production deployment'
    ],
    futurePlans: [
      'Live testing on demo website before production rollout',
      'Achieve >90% accuracy in Filter module',
      'Replace Action module with blackholes for traffic management',
      'Scale to multiple client websites',
      'Continuous AI model improvement'
    ]
  },
  'dockerized-fullstack': {
    title: 'Dockerized Full‑Stack App (React/Node/MongoDB)',
    oneLiner: 'Containerized full-stack application with development and production-ready Docker setup, following security best practices.',
    setup: [
      'Separate containers for frontend (ReactJS), backend (Node.js + Express), and database (MongoDB)',
      'Docker network for seamless inter-container communication',
      'Bind mounts for real-time code updates during development',
      'Named volume for MongoDB data persistence across restarts',
      'Anonymous volume to prevent node_modules from being overridden',
      'Environment variables for MongoDB credentials (no hardcoding)',
    ],
    outcome: 'Reproducible environments; simpler path to ECS/EKS; production-ready containerization',
    tech: ['Docker', 'React', 'Node.js', 'Express', 'MongoDB', 'DevOps', 'Containerization'],
    images: ['/images/dockerized-fullstack.jpg'], // No direct match, keeping original
  github: null,
  live: null,
    achievements: [
      'Created separate containers for each service',
      'Set up Docker network for seamless communication',
      'Implemented bind mounts for real-time development',
      'Used named volumes for data persistence',
      'Added anonymous volumes for dependency protection',
      'Followed security best practices with environment variables',
      'Prepared for easy production deployment'
    ]
  },
  'serverless-forms': {
    title: 'Serverless Form Submission (2025)',
    oneLiner: 'AWS-powered serverless project that automates form submissions while ensuring scalability, security, and real-time notifications.',
    techStack: [
      'IAM – Created user with permissions for Lambda, API Gateway, SNS, DynamoDB',
      'DynamoDB – Designed table to store form submissions',
      'SNS – Configured topic and email subscription for real-time updates',
      'Lambda – Backend logic to process form data and trigger SNS notifications',
      'API Gateway – REST API (POST method) with CORS and Lambda integration',
      'AWS Amplify – Frontend application deployment'
    ],
    workflow: [
      'Frontend calls API Gateway (POST request)',
      'API Gateway triggers AWS Lambda for data processing',
      'Lambda stores data in DynamoDB',
      'SNS sends notification email with form submission details'
    ],
    learnings: [
      'Serverless architecture skills with multiple AWS services integration',
      'IAM best practices using ARNs and inline policies',
      'Real-time notifications implementation with SNS',
      'Scalable and cost-effective solution deployment with AWS Amplify'
    ],
    futurePlans: [
      'API authentication with Cognito',
      'Real-time dashboard for form analytics'
    ],
    tech: ['AWS Lambda', 'API Gateway', 'DynamoDB', 'SNS', 'IAM', 'AWS Amplify', 'Serverless'],
    images: ['/images/serverlessform_1.jpeg', '/images/serverlessform_2.jpeg', '/images/serverlessform_3.jpeg'],
    github: null,
    live: null,
  },
  'aws-infrastructure': {
    title: 'AWS Infrastructure with VPC, IAM, EC2 & nginx (2025)',
    oneLiner: 'Built a secure and scalable AWS infrastructure exploring IAM, VPC, EC2, nginx and networking best practices.',
    iamConfiguration: [
      'Created IAM user with programmatic access',
      'Assigned to custom IAM group with full EC2 & VPC access',
      'Designed custom policy to restrict access to other AWS services',
      'Allowed start, stop, and terminate actions on EC2 instances'
    ],
    vpcNetworking: [
      'Created VPC with public and private subnets',
      'Set up Internet Gateway and configured Route Table',
      'Launched EC2 instance in public subnet with SSH access',
      'Installed NGINX and served custom webpage with animation'
    ],
    nextSteps: [
      'Implementing NAT Gateway with Elastic IP for controlled outbound access from private subnet'
    ],
    learnings: [
      'AWS IAM security best practices',
      'VPC networking and subnet configuration',
      'EC2 instance management and configuration',
      'Network security and access control'
    ],
    tech: ['AWS IAM', 'VPC', 'EC2', 'nginx', 'Networking', 'Security', 'DevOps'],
  images: ['/images/nginx_deployment1.jpeg', '/images/nginx_deployment2.jpeg'],
    github: null,
    live: null,
  },
  'ec2-nginx-https': {
    title: 'EC2 + Route53 + Nginx + HTTPS Production Deployment (2025)',
    oneLiner: 'Full production deployment of SuiteGenie platform from localhost to https://saraswatportfolio.vercel.app with complete DevOps infrastructure.',
    infrastructure: [
      'AWS EC2 (Ubuntu) with proper security groups (ports 22, 80, 443)',
      'Route 53 DNS management with A records for saraswatportfolio.vercel.app',
      'Nginx reverse proxy configuration for static frontend and /api/* routing',
      'PM2 process management with systemd integration for auto-restart'
    ],
    sslSecurity: [
      'Let\'s Encrypt SSL with certbot automation',
      'HTTPS enforcement with auto-redirects from HTTP',
      'Mixed-content error resolution for API compatibility',
      'Security group hardening and port management'
    ],
    backendDeployment: [
      'Node.js API with environment-based configuration',
      'PM2 clustering for high availability and load balancing',
      'Nginx proxy_pass for /api/* routing to backend',
      'Auto-restart on server reboot with systemd integration'
    ],
    frontendDeployment: [
      'React + Vite production build optimization',
      'Static asset serving via Nginx for performance',
      'SPA routing with try_files fallback for client-side routing',
      'Relative API URLs for HTTPS compatibility'
    ],
    challengesSolved: [
      'Mixed content blocking (HTTP APIs on HTTPS site)',
      'SSL certificate domain binding and validation',
      'Nginx listening on both ports 80 and 443 simultaneously',
      'PM2 process persistence across server reboots'
    ],
    outcome: 'Successfully deployed from development to production-ready infrastructure with automated SSL, process management, and high availability.',
    tech: ['AWS EC2', 'Route53', 'Nginx', 'HTTPS', 'Certbot', 'PM2', 'systemd', 'React', 'Node.js', 'DevOps'],
  images: ['/images/route_53.png', '/images/route53_2.png'],
  github: null,
  live: null,
  },
  'ecs-dockerhub': {
    title: 'ECS + DockerHub (2025)',
    oneLiner: 'Deployed DockerHub images to ECS services.',
    notes: 'Foundation to evolve into ECR + GitHub Actions pipeline',
    tech: ['AWS ECS', 'DockerHub', 'CI/CD'],
  images: [],
    github: null,
    live: null,
  },
  'tweetgenie': {
    title: 'Tweet Genie',
    oneLiner: 'An X-native workflow for writing, scheduling, and auto-publishing posts and threads in the user’s own style.',
    role: 'Module — SuiteGenie Ecosystem',
    live: 'https://tweet.suitegenie.in',
    tech: ['React.js','Node.js','Express.js','PostgreSQL','Redis','Twitter OAuth 2.0','X / Twitter API','OAuth 2.0 (Twitter/X, LinkedIn)','Quill.js','BullMQ','AI content generation'],
    status: 'SuiteGenie module',
    ecosystem: true,
    image: '/images/tweetgenie.png',
    images: ['/images/tweetgenie.png','/images/tweetgenieanaltics.png','/images/tweetgeniehistory.png'],
    highlights: [
      'AI learns tone, structure, length, recurring themes, niche, and engagement signals from past posts',
      'Thread composer, calendar, publishing history, queue, and scheduled auto-publishing',
      'Optimal timing recommendations based on likes, replies, reposts, and other interactions',
      'Team and client approvals before anything goes live',
      'Analytics feed future timing, ideas, and content suggestions',
      'Recurring generation through credits or BYOK'
    ],
    description: 'Tweet Genie automates X/Twitter workflows with AI drafting, thread composition, scheduling, approvals, analytics, and queue-based publishing.',
    tabs: {
      'What It Does': 'Users connect their X account without sharing passwords, analyze their publishing patterns, generate drafts in their own voice, approve them, and schedule posts or threads for automatic publishing.',
      'Key Features': [
        'OAuth account connection; exact PKCE, token encryption, and refresh-token implementation details are not recorded here',
        'Account analysis for voice, niche, recurring themes, and posts that earned interactions',
        'AI tweet and thread drafting with a thread composer',
        'Optimal timing suggestions from engagement history',
        'Queue-based auto-posting, scheduling calendar, and publishing history',
        'Post performance analytics that feed the next round of suggestions',
        'Approvals for teams and clients',
        'Bulk generation and recurring automation through credits or BYOK'
      ],
      'What I Learned': [
        'OAuth flows and token lifecycle management',
        'Working within X API permissions and rate limits',
        'Reliable scheduling and queue-based publishing',
        'Turning engagement data into timing and content recommendations'
      ]
    }
  },
  'linkedingenie': {
    title: 'LinkedIn Genie',
    oneLiner: 'A professional publishing workflow for thought leadership, strategy, and consistent B2B posting.',
    role: 'Module — SuiteGenie Ecosystem',
    live: 'https://linkedin.suitegenie.in',
    tech: ['React.js','Node.js','Express.js','PostgreSQL','Redis','LinkedIn OAuth 2.0','LinkedIn API','OAuth 2.0 (Twitter/X, LinkedIn)','Quill.js','AI content generation'],
    status: 'SuiteGenie module',
    ecosystem: true,
    image: '/images/linkedingeniecompose.png',
    images: ['/images/linkedingeniecompose.png'],
    highlights: [
      'Strategy Builder with prompt packs and content plans',
      'Account analysis for niche, audience, positioning, and real profile context',
      'Professional-tone drafting with LinkedIn-specific formatting and hooks',
      'Optimal timing, scheduled auto-publishing, and analytics feedback loops',
      'Idea Bank, bulk generation, approvals, and team workflows',
      'Agency-ready publishing for internal teams and client work'
    ],
    description: 'LinkedIn Genie helps professionals and agencies plan, draft, approve, schedule, and improve B2B content through analytics feedback loops.',
    tabs: {
      'What It Does': 'LinkedIn Genie turns professional publishing into a repeatable workflow: analyze the account, build a strategy, draft in context, approve content, schedule it, and use performance data to improve the next cycle.',
      'Key Features': [
        'OAuth connection to LinkedIn profiles; company-page support is not confirmed in this case study',
        'Strategy Builder with prompt packs and content plans',
        'Account analysis for niche, audience, positioning, and past-post context',
        'Professional-tone AI drafting with LinkedIn formatting and hooks',
        'Optimal timing suggestions and scheduled auto-publishing',
        'Idea Bank and bulk generation for weeks of planned content',
        'Analytics loops that feed performance back into strategy',
        'Approvals for individuals, internal teams, and agency clients'
      ],
      'What I Learned': [
        'LinkedIn API permissions and approval requirements',
        'Content strategy for B2B and professional audiences',
        'Connecting analytics feedback to content generation',
        'Designing workflows for individuals, teams, and client work'
      ]
    }
  },
  'metagenie': {
    title: 'Meta Genie (Social Genie)',
    oneLiner: 'A shared social workflow for Threads, Instagram, and YouTube, with Threads live and the other platforms staged for rollout.',
    role: 'Module — SuiteGenie Ecosystem',
    live: 'https://suitegenie.vercel.app/blogs',
    liveLabel: 'Hosted Frontend / Blog Archive',
    status: 'SuiteGenie module — staged rollout',
    ecosystem: true,
    image: '/images/suitegeniefeatures.png',
    images: ['/images/suitegeniefeatures.png','/images/suitegenie_frontedn.png','/images/suitegenieresults.png'],
    tech: ['Threads', 'Instagram (staged)', 'Instagram', 'YouTube (staged)', 'YouTube', 'Meta OAuth', 'Google OAuth', 'Node.js', 'Redis', 'AI', 'AI content generation'],
    highlights: [
      'Threads drafting, scheduling, and auto-posting workflow',
      'Instagram and YouTube prepared as staged rollout paths rather than claimed fully live',
      'Shared brand context keeps content consistent across platforms',
      'Niche and style learning applied to each platform format',
      'Engagement-based timing suggestions and performance tracking',
      'Agency workspace context flows into posts automatically'
    ],
    description: 'Meta Genie, also called Social Genie, extends SuiteGenie’s shared content engine to Threads, Instagram, and YouTube while keeping platform readiness explicit.',
    tabs: {
      'What It Does': 'Social Genie provides one workspace for platform-aware content workflows. Threads was the live path; Instagram and YouTube were staged rollout paths and are not represented here as fully shipped features.',
      'Key Features': [
        'Meta and Google OAuth flows prepared for Threads, Instagram, and YouTube',
        'Threads drafting, scheduling, and auto-posting',
        'One workspace carrying brand context across platforms',
        'Niche and style learning adapted to each platform format',
        'Optimal timing suggestions from past interactions',
        'Idea Bank, bulk generation, and scheduling shared with the other Genies',
        'Agency-aware launch context so workspace data flows into each post',
        'Instagram capabilities and cross-platform analytics are not claimed beyond the documented rollout stage'
      ],
      'What I Learned': [
        'Meta’s permission and app-review model',
        'Token handling for Meta APIs',
        'Gradual publishing and platform-safe rollout',
        'How to stage integrations safely when only some platforms are approved or fully available'
      ]
    }
  },
  'suitegenie': {
    title: 'SuiteGenie - AI Social Media Management Platform',
    status: 'Closed (wrapped up)',
    role: 'Solo founder, full-stack developer, product and growth',
    dates: 'July 2025 – September 2026',
    oneLiner: 'An AI social media operating system for creators, teams, and agencies, with INR-first pricing.',
    description: 'Built the platform I wanted while running Anicafe: an affordable system for planning, writing, approving, scheduling, and publishing social content across multiple channel modules.',
    live: 'https://suitegenie.vercel.app/blogs',
    links: {
      main: 'https://suitegenie.in',
      hostedFrontend: 'https://suitegenie.vercel.app/blogs',
      tweet: 'https://tweet.suitegenie.in',
      linkedin: 'https://linkedin.suitegenie.in'
    },
    liveLabel: 'Hosted Frontend / Blog Archive',
    tech: ['Node.js', 'Express.js', 'PostgreSQL (Supabase)', 'Redis (Upstash)', 'JWT Authentication', 'Razorpay', 'Resend', 'Microservices', 'OpenAI', 'Gemini', 'Perplexity', 'AI content generation', 'BullMQ', 'API keys between services', 'Encrypted tokens and keys', 'Multi-subdomain hosting'],
    notes: 'SuiteGenie.in was sold. The frontend is currently hosted at https://suitegenie.vercel.app/blogs as an archive/demo location and is not presented as the active sold product. The exact GitHub repository, closure date, and acquisition details are not recorded in the portfolio.',
    ecosystemModules: [
      {
        name: 'Tweet Genie',
        description: 'Twitter/X content generation, scheduling, analytics, and team workflows.',
        platforms: ['Twitter/X'],
        projectId: 'tweetgenie'
      },
      {
        name: 'LinkedIn Genie',
        description: 'B2B content generation, scheduling, analytics, and multi-profile workflows.',
        platforms: ['LinkedIn'],
        projectId: 'linkedingenie'
      },
      {
        name: 'Meta Genie',
        description: 'Social content workflows for video and community platforms in the SuiteGenie ecosystem.',
        platforms: ['YouTube', 'Threads', 'Instagram'],
        projectId: 'metagenie'
      }
    ],
      images: [
        '/images/suitegenie-heropage.png',
        '/images/suitegeniefeatures.png',
        '/images/suitegenie_frontedn.png',
        '/images/linkedingeniecompose.png',
        '/images/strategybuilder.png',
        '/images/tweetgenie.png',
        '/images/tweetgenieanaltics.png',
        '/images/tweetgeniehistory.png',
        '/images/teams2suitegenie.png',
        '/images/teamssuitegenie.png',
        '/images/apikeysubmission.png',
        '/images/bulkgenpage.png',
        '/images/suitegenieresults.png'
      ],
    metrics: [
      { id: 'visitors', label: 'Website Visitors', value: '2.1k', detail: 'Unique visitors who reached the website', icon: 'Users' },
      { id: 'accounts', label: 'Accounts Created', value: '100–110', detail: 'Visitors who converted into registered accounts', icon: 'Users' },
      { id: 'impressions', label: 'Total Impressions', value: '19k', detail: 'Search and website impressions', icon: 'Search' },
      { id: 'time_save', label: 'Workflow Time', value: '3h → 5m', detail: 'Manual workflow automated from 3 hours to 5 minutes', icon: 'Clock' },
        { id: 'cost', label: 'Redis Cost', value: 'Reduced', detail: 'Significant Redis cost reduction after removing BullMQ', icon: 'Zap' },
        { id: 'api_calls', label: 'API Calls', value: 'Reduced', detail: 'Substantially fewer API calls after credit refresh optimization', icon: 'Zap' },
        { id: 'db_writes', label: 'DB Writes', value: 'Reduced', detail: 'Fewer database writes due to Redis batching and periodic sync', icon: 'Database' }
    ],
    highlights: [
      'Built and shipped solo across development, product, deployment, outreach, and growth',
      'Three channel modules: Tweet Genie, LinkedIn Genie, and Social Genie',
      'Agency Mode with client workspaces, roles, pooled credits, calendars, and analytics',
      'No-login client approval portal and client onboarding links',
      'Brand-aware AI with BYOK keys and automatic multi-provider fallback',
      '2.1k website visitors, 100–110 accounts created, and 19k total impressions',
      'University capstone project and completed codebase hardening sprint',
    ],
    tabs: {
      'Overview': {
        summary: `SuiteGenie was an AI social media operating system for creators, teams, and agencies. It was shipped to production at suitegenie.in, reached 2.1k website visitors, converted 100–110 visitors into accounts, and recorded 19k total impressions before the project was wrapped up.`,
        problem: `During my time at Anicafe, I spent hours manually creating and scheduling social media posts. Existing tools like Hootsuite ($99/mo), Sprout Social ($249/mo), and Buffer lack bulk AI content generation (30-50 posts at once) and bulk scheduling with custom frequencies.`,
        solution: `SuiteGenie combined AI-powered bulk generation, intelligent scheduling, approvals, agency workspaces, and BYOK pricing in one modular platform.`,
        results: [
          '2.1k website visitors',
          '100–110 accounts created',
          '19k total impressions',
          'Production deployment at suitegenie.in',
          'University capstone project (CSE 435)',
          'Closed after the solo product cycle was wrapped up'
        ]
      },
      'Features': {
        tweetGenie: [
          'X-native OAuth account connection without sharing passwords; exact PKCE, encryption, and refresh-token details are not recorded here',
          'Analyses past posts to learn tone, structure, length, recurring themes, niche, and engagement signals',
          'AI drafts tweets and threads in the user’s style, with composer, calendar, queue, and publishing history',
          'Optimal timing recommendations based on likes, replies, reposts, and other interactions',
          'Approved drafts move into an automated publishing queue',
          'Analytics feed future timing, ideas, and content suggestions',
          'Team and client approvals before anything goes live',
          'Recurring generation through credits or BYOK'
        ],
        linkedinGenie: [
          'OAuth connection to LinkedIn profiles; company-page support is not confirmed in this case study',
          'Strategy Builder with prompt packs and content plans',
          'Account analysis for niche, audience, positioning, and real profile context',
          'Professional-tone drafting with LinkedIn-specific formatting and hooks',
          'Optimal timing, scheduled auto-publishing, and analytics feedback loops',
          'Idea Bank, bulk generation, approvals, and workflows for individuals, teams, and agency clients'
        ],
        metaGenie: [
          'Shared Social Genie workflow for Threads, Instagram, and YouTube',
          'Threads publishing was live; Instagram and YouTube were staged rollout paths rather than fully claimed live features',
          'Meta and Google OAuth flows were prepared for the staged platform rollout',
          'Niche and style learning, Idea Bank, bulk generation, scheduling, and engagement-based timing',
          'Agency workspace context flows into posts automatically',
          'Platform-specific analytics and Instagram capabilities are not claimed beyond the documented rollout stage'
        ],
        agencyMode: [
          'Individual Free mode: a couple of connected accounts, manual publishing, and starter AI drafting',
          'Pro mode: up to 8 accounts, cross-posting, bulk generation, advanced analytics, and internal teams of up to 5 members',
          'Agency mode: separate client workspaces with connected accounts, approvals, shared calendar, and pooled credits',
          'Client workspaces with brand, logo, timezone, pause, and archive controls',
          'Admin, Editor, and Viewer roles with per-workspace analytics',
          'Cross-product handoff to Tweet Genie, LinkedIn Genie, or Social Genie'
        ],
        sharedEngine: [
          'Brand context stores tone, themes, competitors, and account signals once and reuses them in every draft',
          'BYOK encrypted OpenAI, Gemini, and Perplexity keys with automatic multi-AI fallback',
          'Credit metering applies to AI-heavy actions while publishing and approvals remain operational',
          'Idea Bank stores AI-generated ideas for user review and approval before drafting',
          'Pro bulk generation creates many prompts and generates content one by one for the queue',
          'Documentation, onboarding, customer support, and mobile-friendly UI were built for people beyond the founder'
        ]
      },
      'Technical Highlights': [
        'Microservices architecture with each Genie running as its own service',
        'Internal API-key header pattern for service-to-service communication',
        'JWT authentication and a central login requirement across product subdomains',
        'Users authenticated on the main SuiteGenie website before accessing another Genie, keeping identity and account records consistent in the database',
        'Redis (Upstash) used for fast token handling and credit tracking; the exact distinction between OAuth tokens and rate-limit tokens is not recorded here',
        'BullMQ jobs backed by Redis were used for delayed scheduling, retries, and reliable queue-based publishing before the scheduler was optimized',
        'Gradual publishing included a documented 10-second gap between Threads posts to respect platform limits; X and LinkedIn limit handling varied by API permissions',
        'Niche and style learning combined engagement signals with AI analysis; the exact scoring split is not recorded here',
        'Migrated from BullMQ after identifying high Redis command usage during constant polling',
        'Built custom PostgreSQL scheduler, reducing reliance on Redis and lowering costs',
        'Polling every 10-15s with retry controls (up to 5 attempts)',
        'Exponential backoff: 60s → 900s',
        'Instant credit deduction: <50ms UI feedback',
        'PostgreSQL batch sync every 30s to reduce write amplification',
        'Progressive bulk generation streaming: improved perceived latency for initial results',
        'OTP caching with TTL-based expiration',
        'Credit refresh: 30s → 5min (reduced API call frequency)',
        'Multi-layer caching: analytics (20s client + 2min server), scheduling (15s TTL)'
      ],
      'Challenges Solved': [
        'BullMQ cost explosion → replaced with conditional PostgreSQL scheduler resulting in substantial cost reduction',
        'Slow bulk generation → Redis streaming with progressive results (much faster initial feedback)',
        'Credit system latency → Redis instant deduction + batch PostgreSQL sync (<50ms UI feedback)',
        'PostgreSQL INTEGER overflow for Twitter IDs → migrated columns to BIGINT (zero downtime)',
        'Editor approval bypass → 3-state approval workflow (approved/pending/rejected)',
        'Fragmented subdomain identity → central authentication flow so module access maps to one database user'
      ],
      'Business Model': [
        'INR-first pricing: Free, Pro (Rs 499/month), and Agency (Rs 2,499/month)',
        'Credit-based metering for AI-heavy actions while publishing, approvals, and scheduling remained operational',
        'Automation add-ons (Rs 799 and Rs 2,999 per 30 days) and one-time Agency packs',
        'Razorpay for payments and Resend for transactional email',
        'Positioned against Hootsuite, Buffer, Later, and Sprout Social'
      ],
      'Platform Architecture': [
        'Common engine: niche detection from post history and interactions, style learning, timing recommendations, and feedback from analytics',
        'Idea Bank keeps AI in a suggest-and-user-approves role instead of posting blindly',
        'Approved content moves through queue-based scheduling and auto-posting',
        'Separate Genie services communicate through an internal API-key header pattern',
        'Encrypted keys and tokens, JWT authentication, and central login protect the shared account model'
      ],
      'Impact & Learning': [
        'Built entirely solo: development, product design, deployment, outreach, and growth',
        'Received an acquisition inquiry; details are intentionally not specified',
        'Became a university capstone project documented in a full report',
        'Learned multi-tenant product design, billing, credit metering, and third-party API integrations',
        'Learned to require login on the main website before users access other Genie subdomains, maintaining consistent identity and cleaner database relationships',
        'Completed a codebase audit and hardening sprint before scaling'
      ],
      'Roadmap Not Shipped': [
        'WordPress module was listed on the roadmap but was never built',
        'A proprietary LLM was listed on the roadmap but was never built'
      ],
      'Metrics & Impact': {
        users: ['2.1k website visitors', '100–110 accounts created', '19k total impressions'],
        performance: ['Substantially fewer API calls (credit refresh optimization)', 'Fewer DB writes (Redis batching)', 'Significant Redis cost reduction (BullMQ removal)', 'Improved initial response times (from ~15–20s to around 2s for progressive results)'],
        productivity: ['3 hours → 5 minutes (manual workflow automation)', '30-50 posts bulk scheduled at once', '~5 min strategy generation flow']
      }
    }
  },
};

export const ventures = [
  {
    id: 'suitegenie',
    title: 'SuiteGenie',
    description: 'An AI social media operating system for creators, teams, and agencies with INR-first pricing, channel modules, agency workflows, and BYOK multi-LLM support.',
    role: 'Solo founder, full-stack developer, product and growth',
    dates: 'July 2025 – September 2026',
    status: 'Closed (wrapped up)',
    image: '/images/suitegenie-heropage.png',
    cta: 'View Hosted Frontend / Blog Archive',
    ctaLink: 'https://suitegenie.vercel.app/blogs',
    metrics: [
      { label: 'Website visitors', value: '2.1k', sub: 'reached the site' },
      { label: 'Accounts created', value: '100–110', sub: 'visitor conversions' },
      { label: 'Total impressions', value: '19k', sub: 'search and website visibility' }
    ]
  },
  {
    id: 'anicafe',
    title: 'Anicafe',
    description: 'Founder-led anime community platform that pivoted to original content, reached 100k+ monthly organic visits, launched a merch line selling 800+ t-shirts, and exited profitably.',
    status: 'Sold',
    role: 'Founder, developer, content and community lead',
    dates: 'Built, scaled, and exited; exact dates not recorded',
    image: '/images/anicafe2.jpeg',
    cta: 'View Anicafe Case Study',
    projectId: 'anicafe',
    metrics: [
      { label: 'Organic visits', value: '100k+', sub: 'monthly' },
      { label: 'Telegram community', value: '20k+', sub: 'members' },
      { label: 'Merch sold', value: '800+', sub: 't-shirts' },
    ],
  },
];
