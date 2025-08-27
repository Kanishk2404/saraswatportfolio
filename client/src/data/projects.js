export const projectsIndexOrder = [
  'anicafe',
  'cloud-bouncer',
  'dockerized-fullstack',
  'serverless-forms',
  'aws-infrastructure',
  'ec2-nginx-https',
  'ecs-dockerhub'
]

export const projects = {
  'anicafe': {
  title: 'Anicafe',
    dates: 'Built and scaled; exited; brand revival ongoing',
    oneLiner: 'Started as an anime/movies streaming site; pivoted to legal blogging due to copyright concerns; scaled to 100,000 users in 8 months; built 15,000+ community; managed 15 admins and 7 core admins; sold the property.',
    highlights: [
      '100,000 users in 8 months; 15,000+ community; 15 admins and 7 core admins',
      'Successfully pivoted from streaming to legal blogging format',
      'Achieved high SEO rankings for key terms like "anicafe," "anime cafe," "anime news"',
      'Built vibrant Telegram and Instagram communities',
      'Sold the property after significant growth',
    ],
  role: 'Founder',
    notes: 'Reviving brand as an anime merch store (see Ventures). Learned valuable lessons in compliance, team management, and business pivoting.',
    tech: ['React', 'Node.js', 'MongoDB', 'WordPress', 'SEO', 'Google Analytics', 'AdSense', 'Community Management'],
    images: ['/images/anicafe1.jpeg', '/images/anicafe2.jpeg', '/images/anicafe3.jpeg'],
  github: null,
  live: null,
    journey: [
      'Launched as anime/movies streaming site gaining quick traction',
      'Pivoted to legal blogging due to copyright concerns and Indian government policies',
      'Transitioned to anime news, reviews, recommendations, and fan theories',
      'Implemented user profiles, post submissions, and discussion features',
      'Optimized for SEO using Google Analytics to track performance',
      'Faced AdSense challenges including strikes and temporary freezes',
      'Managed vibrant Telegram and Instagram communities',
      'Coordinated team of 15 admins and 7 core admins',
      'Achieved high rankings for key search terms',
      'Successfully sold the property after significant growth'
    ],
    learnings: [
      'Blogging Techniques and Content Strategy',
      'Website Optimization and Performance',
      'Google Analytics and AdSense Management',
      'Policy Compliance and Legal Considerations',
      'Team Management and Coordination',
      'SEO Strategy and WordPress Development'
    ]
  },
  'cloud-bouncer': {
    title: 'Cloud Bouncer (2024) — SIH (MoD) DDoS/DoS Protection Tool',
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
    oneLiner: 'Full production deployment of Autoverse platform from localhost to https://kanishksaraswat.me with complete DevOps infrastructure.',
    infrastructure: [
      'AWS EC2 (Ubuntu) with proper security groups (ports 22, 80, 443)',
      'Route 53 DNS management with A records for kanishksaraswat.me',
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
};

export const ventures = [
  {
    id: 'autoverse',
    title: 'Autoverse',
    description: 'Building a platform that includes AI with modular tools for content and social workflows. Starting with separate modules; simple, logged‑in access. Also built a local AI for content development; will host publicly after traction (traffic, initial revenue, or grant).',
    status: 'Building',
    image: '/images/profile.jpg', // No direct match, using profile.jpg
    cta: 'Contact',
    ctaLink: '/contact',
  },
  {
    id: 'anicafe-merch',
    title: 'Anicafe — Merch',
    description: 'Reviving the Anicafe brand as an anime merchandise store with a modern e‑commerce stack and CI/CD.',
    status: 'In progress',
    image: '/images/anicafe2.jpeg',
    cta: 'Contact',
    ctaLink: '/contact',
  },
];
