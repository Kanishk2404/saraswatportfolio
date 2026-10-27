import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Github } from 'lucide-react';
import SEO from '@/components/SEO.jsx';

function createFallbackSvg(label) {
  const safeLabel = String(label || 'Screenshot TODO');
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="1400" height="700" viewBox="0 0 1400 700">
      <defs>
        <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#0f172a"/>
          <stop offset="100%" stop-color="#1f2937"/>
        </linearGradient>
      </defs>
      <rect width="1400" height="700" fill="url(#g)"/>
      <rect x="90" y="90" width="1220" height="520" rx="20" fill="none" stroke="#22d3ee" stroke-opacity="0.45" stroke-dasharray="10 10"/>
      <text x="700" y="332" font-family="Arial, sans-serif" font-size="42" fill="#e5e7eb" text-anchor="middle">${safeLabel}</text>
      <text x="700" y="386" font-family="Arial, sans-serif" font-size="24" fill="#94a3b8" text-anchor="middle">Asset pending</text>
    </svg>
  `;
  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

const stack = [
  'Next.js 14 (App Router)',
  'TypeScript',
  'Supabase (Postgres, RLS, Realtime, RPC)',
  'Redis',
  'Gemini API',
  'Vercel',
  'Node 20'
];

const featureSections = [
  {
    title: '1. Behavior-based character assignment (Gemini)',
    description: 'Players are not assigned a character at signup. After about 20 qualifying events, the system assigns one, with a fast-track at 10 events if one trait strongly dominates. A quiz baseline and ongoing events feed Power, Intel, Loyalty, and Control scores. Inputs include trait scores, reading patterns, duel style, move speed, writing sample, recent events, and dominant quiz trait. Gemini output has a rule-based fallback if generation fails. The profile shows assignment rationale, and a reveal screen plays on reassignment. Only visible factions can auto-assign, reserved characters are excluded, and Special Division assignment is manual only.',
    screenshot: {
      src: '/images/TODO-bungou-profile-character-reveal.png',
      alt: 'BungouArchive profile page showing character reveal and assignment rationale',
      label: 'Profile character reveal [TODO image path]'
    }
  },
  {
    title: '2. 1v1 duel system',
    description: 'Players can invite by username search or use a global matchmaker. In each timed round, both players secretly choose Gambit, Strike, or Stance. If time expires, Stance is auto-applied. Character passives and specials change combat behavior. A server-side resolver validates moves, applies abilities, calculates two-way damage, updates HP, and broadcasts results to both players through Supabase Realtime. Duel outcomes apply progression rules for wins, comeback wins, losses, draws, and forfeits. Duel history also feeds back into character assignment signals such as duel style and move speed.',
    screenshot: {
      src: '/images/TODO-bungou-duel-screen.png',
      alt: 'BungouArchive duel interface showing round controls and combat state',
      label: 'Duel screen [TODO image path]'
    }
  },
  {
    title: '3. Faction wars',
    description: 'A rules-driven war engine models factions, operatives, guards, vanguards, bosses, and integrity. Guard logic is bidirectional: defender guards must be cleared before vanguards can be targeted unless an ability bypasses guards. Integrity is directional, where 0 means capture and 100 means repel. Combat supports Frontal Assault, Outmaneuver, and Ability Overload. Stat resolution uses a three-tier fallback: equipped character stats, archive catalog fallback, then defaults. Lifecycle methods cover start, day transition, boss activation, resolution, stop, and retreat, with Redis and Supabase synchronization. War duel wins award AP and war points to the faction.',
    screenshot: {
      src: '/images/TODO-bungou-faction-room.png',
      alt: 'BungouArchive faction war room with roles, integrity state, and strike options',
      label: 'Faction room [TODO image path]'
    }
  },
  {
    title: '4. Interactive Yokohama territory map (Districts page)',
    description: 'A HUD-style districts map displays Yokohama zones such as Minato Mirai, Kannai, Chinatown, Port, Honmoku, and Tsurumi. District colors reflect controlling faction, with live city clock, status indicators, and a city registry terminal. War outcomes can update district control.',
    screenshot: {
      src: '/images/TODO-bungou-districts-map-hero.png',
      alt: 'BungouArchive districts map showing faction-controlled Yokohama territories',
      label: 'Districts territory map [TODO image path]'
    }
  },
  {
    title: '5. Global chat and faction chat',
    description: 'The platform includes public global chat and private faction transmission logs accessible only to valid members. Chat is refresh-based, not real-time. Chat participation awards AP and is tracked as a character-assignment event.',
    screenshot: {
      src: '/images/TODO-bungou-faction-chat.png',
      alt: 'BungouArchive chat panel with global and faction channels',
      label: 'Faction chat [TODO image path]'
    }
  },
  {
    title: '6. Automated bots',
    description: 'Two automated bots keep the world active so players always have interaction momentum. [TODO: exact bot behaviors to be confirmed.]',
    screenshot: {
      src: '/images/TODO-bungou-bot-activity.png',
      alt: 'BungouArchive feed showing bot-assisted activity cadence',
      label: 'Bot activity view [TODO image path]'
    }
  },
  {
    title: '7. Guide Terminal (Gemini)',
    description: 'The Guide Terminal stores the full game knowledge base and responds using the player\'s live profile context including username, faction, character, AP, rank, quiz and assignment state, and event count. Suggestions adapt to player state, responses stream into terminal UI, and history persists across refreshes. A daily cap of 5 queries applies. Dismissing the terminal requires typing CONFIRM. Unresolved issues fall back to support tickets. User prompts are sanitized before send.',
    screenshot: {
      src: '/images/TODO-bungou-guide-terminal.png',
      alt: 'BungouArchive Guide Terminal showing personalized streamed responses',
      label: 'Guide terminal [TODO image path]'
    }
  },
  {
    title: '8. Ango: in-world moderation and live-ops',
    description: 'Ango is a public Special Division handler account with mod role for live operations. A hidden owner account is infrastructure-only, with separate panels and permissions. Ango can silently draft users into Special Division, resolve tickets and flags, post faction bulletins, and publish district events as canon. Owner-only tools include a reserved/manual character assignment desk. Moderation is embedded into world narrative rather than a generic admin surface.',
    screenshot: {
      src: '/images/TODO-bungou-ango-ops.png',
      alt: 'BungouArchive moderation interface themed as Ango live-ops console',
      label: 'Ango live-ops console [TODO image path]'
    }
  },
  {
    title: '9. Progression system',
    description: 'AP drives ranks from 1 to 6 with thresholds at 0, 100, 500, 1,500, 4,000, and 10,000 AP. AP never drops below 0 and rank never decreases. Reward values are explicit and rules-based, including duel penalties and comeback bonuses. Late-game City Tokens support Yokohama Veteran perks.',
    screenshot: {
      src: '/images/TODO-bungou-profile-progression.png',
      alt: 'BungouArchive profile panel showing AP totals, rank, and progression status',
      label: 'Progression panel [TODO image path]'
    }
  },
  {
    title: '10. Content layer',
    description: 'Archive provides searchable case files with read events tied to progression. Lore offers public writing lanes for essays, theory, analysis, and symbolism with a minimum of 50 words, a 200-word cap at rank 1, and a 500-word cap at rank 2 and above, plus comments. Registry contains staff-filed field notes, incident reports, classified reports, and chronicle submissions with read/save/comment support. Support tickets and content flags flow into an owner/Ango queue.',
    screenshot: {
      src: '/images/TODO-bungou-registry-content.png',
      alt: 'BungouArchive registry and archive content surfaces with in-world case files',
      label: 'Archive and registry [TODO image path]'
    }
  },
  {
    title: '11. Onboarding and UX',
    description: 'Onboarding includes a role exam quiz, result page, once-per-session entrance splash, faction-based default themes (Dawn, Twilight, Midnight), mobile drawer navigation, notification bell, sound toggle, and a daily login ritual.',
    screenshot: {
      src: '/images/entracebsd.png',
      alt: 'BungouArchive homepage rendered in one of the faction-driven visual themes',
      label: 'Entrance splash and onboarding screen'
    }
  }
];

const engineeringChallenges = [
  'Realtime broadcast storms: introduced surgical realtime with SQL-level filtered subscriptions in faction room and duel matchmaker, cutting redundant messages by about 80%.',
  'Database health: added targeted and partial indexes (user events, active duels, unread notifications, faction and role lookups). Added get_faction_space_data RPC to replace several reads with one round trip on faction room load, plus a multi-event count function to avoid repeated scans.',
  'Middleware performance: added a session-hint cookie so non-sensitive page navigations can skip a mandatory DB auth check, reducing disk IO.',
  'Production OAuth bug: fixed oauth_failed errors caused by protocol mismatch behind Vercel proxy in the auth callback.',
  'War logic correctness: rewrote the core faction war model to fix guard blocking, integrity direction, and stat resolution.',
  'Security baseline: sanitized all public write surfaces (lore, registry, comments, tickets, flags, faction messages, bulletins, guide prompts), blocked external and script paths in flags, applied RLS on per-user tables, and used Supabase SDK queries instead of string-built SQL.',
  'Release discipline: maintained a deployment readiness checklist, changelog, and SQL smoke checks before expanding access.'
];

const limitations = [
  'Supabase repeatedly hit very high CPU and IO usage as activity grew, slowing the full app. Optimizations reduced load but did not fully resolve infrastructure-level limits.',
  'Chat is refresh-based, which increases query load. Real-time chat was not implemented.',
  'Development paused due to infrastructure scaling limits.'
];

const rebuildPlan = [
  'Redis caching for hot reads (leaderboards, chat, map state).',
  'Rate limiting on heavy endpoints.',
  'A lighter pub/sub layer for chat.',
  'More aggressive pagination on feed-like surfaces.',
  'Load testing before opening to more players.'
];

const processNotes = [
  'Used Claude as a design sounding board while iterating game mechanics, with friends as early playtesters.',
  'Built character and faction dossiers from public fandom wiki references, then structured and rewritten with AI assistance into a consistent in-world format.',
  'All architecture, implementation, and system design decisions were mine, and I ran live game operations through the Ango account.'
];

export default function BungouArchiveCaseStudy() {
  return (
    <>
      <SEO
        title="BungouArchive Case Study"
        description="Detailed case study of BungouArchive: faction wars, duels, behavior-based character assignment, and in-world moderation systems."
        keywords={[
          'BungouArchive case study',
          'Next.js game platform',
          'Supabase Realtime',
          'Gemini character assignment',
          'Faction wars system design'
        ]}
        url="/projects/bungouarchive"
      />

      <div className="bg-grid min-h-screen">
        <section className="container py-16 md:py-20">
          <Link to="/projects" className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-medium mb-8">
            <ArrowLeft size={18} />
            Back to Projects
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="neo"
          >
            <div className="inner p-8 md:p-10">
              <p className="chip text-xs mb-4 inline-flex">Featured Project</p>
              <h1 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight text-zinc-100">
                BungouArchive
              </h1>
              <p className="text-lg md:text-xl text-zinc-300 mt-4 leading-relaxed max-w-4xl">
                A curated fan platform for Bungo Stray Dogs with faction wars, 1v1 duels, AI-driven character assignment and an in-world moderation system.
              </p>

              <div className="flex flex-wrap gap-2 mt-6">
                {stack.map((item) => (
                  <span key={item} className="chip text-xs">{item}</span>
                ))}
              </div>

              <div className="flex flex-wrap gap-3 mt-8">
                <a
                  href="https://bungou-stray-dogs.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary inline-flex items-center gap-2"
                  aria-label="Open BungouArchive live site"
                >
                  <ExternalLink size={16} />
                  Live Site
                </a>
                <a
                  href="https://github.com/animecalssroom/bungoustraydogs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary inline-flex items-center gap-2"
                  aria-label="Open BungouArchive source code on GitHub"
                >
                  <Github size={16} />
                  GitHub Repository
                </a>
              </div>

              <div className="mt-8 rounded-2xl overflow-hidden border border-zinc-700 bg-zinc-900/50">
                <img
                  src="/images/home_bsd.png"
                  alt="BungouArchive hero screenshot showing the Yokohama districts territory map"
                  className="w-full h-[260px] md:h-[420px] object-cover"
                  loading="eager"
                  onError={(e) => {
                    e.currentTarget.src = createFallbackSvg('BungouArchive Hero Image TODO');
                  }}
                />
              </div>
              <p className="text-xs text-zinc-400 mt-3">Hero image: using current available screenshot (replace with districts map when ready).</p>
            </div>
          </motion.div>
        </section>

        <section className="container pb-8">
          <div className="card p-4 border border-cyan-800/40 bg-cyan-950/20">
            <p className="text-sm text-cyan-200">
              Media status: 2 live screenshots integrated; remaining slots intentionally kept as TODO placeholders.
            </p>
          </div>
        </section>

        <section className="container pb-8">
          <div className="neo">
            <div className="inner p-8">
              <h2 className="section-title mb-4">Overview</h2>
              <p className="text-zinc-300 leading-relaxed">
                BungouArchive is a full-stack community platform designed to feel like an official Yokohama ability-user record, not a generic forum. Players take a role exam, join a faction, write lore, read archive case files, duel each other, chat, and earn rank through real activity. Identity is earned, not selected at signup: character assignment is behavior-based. The platform supports three full visual themes (Dawn, Twilight, Midnight), with faction-aware default presentation.
              </p>
            </div>
          </div>
        </section>

        <section className="container py-8">
          <h2 className="section-title mb-6">Feature Sections</h2>
          <div className="grid gap-6">
            {featureSections.map((feature, index) => (
              (() => {
                const isTodoShot = feature.screenshot.src.includes('TODO-');
                return (
              <motion.article
                key={feature.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.04 }}
                className="neo"
              >
                <div className="inner p-7">
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <h3 className="text-xl font-bold text-zinc-100">{feature.title}</h3>
                    {isTodoShot && <span className="chip text-[11px]">TODO image</span>}
                  </div>
                  <p className="text-zinc-300 leading-relaxed mb-5">{feature.description}</p>

                  <figure className={`rounded-xl overflow-hidden border ${isTodoShot ? 'border-dashed border-cyan-700/70 bg-cyan-950/10' : 'border-zinc-700 bg-zinc-900/50'}`}>
                    <img
                      src={feature.screenshot.src}
                      alt={feature.screenshot.alt}
                      className="w-full h-[220px] md:h-[360px] object-cover"
                      loading="lazy"
                      onError={(e) => {
                        e.currentTarget.src = createFallbackSvg('Screenshot TODO');
                      }}
                    />
                    <figcaption className="text-xs text-zinc-400 px-3 py-2">
                      {feature.screenshot.label}
                    </figcaption>
                  </figure>
                </div>
              </motion.article>
                );
              })()
            ))}
          </div>
        </section>

        <section className="container py-8">
          <div className="neo">
            <div className="inner p-8">
              <h2 className="section-title mb-6">Game Design At A Glance</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-left border-collapse">
                  <thead>
                    <tr className="border-b border-zinc-700 text-zinc-200">
                      <th className="py-3 pr-4">System</th>
                      <th className="py-3 pr-4">Value</th>
                      <th className="py-3 pr-4">Notes</th>
                    </tr>
                  </thead>
                  <tbody className="text-zinc-300">
                    <tr className="border-b border-zinc-800">
                      <td className="py-3 pr-4">Rank thresholds (AP)</td>
                      <td className="py-3 pr-4">0, 100, 500, 1,500, 4,000, 10,000</td>
                      <td className="py-3 pr-4">Rank never decreases; AP never below 0</td>
                    </tr>
                    <tr className="border-b border-zinc-800">
                      <td className="py-3 pr-4">Character assignment target</td>
                      <td className="py-3 pr-4">~20 qualifying events</td>
                      <td className="py-3 pr-4">Fast-track at 10 when one trait dominates</td>
                    </tr>
                    <tr className="border-b border-zinc-800">
                      <td className="py-3 pr-4">Guide Terminal daily limit</td>
                      <td className="py-3 pr-4">5 queries/day</td>
                      <td className="py-3 pr-4">Dismiss requires typing CONFIRM</td>
                    </tr>
                    <tr className="border-b border-zinc-800">
                      <td className="py-3 pr-4">AP rewards</td>
                      <td className="py-3 pr-4">+5 login, +2 chat, +3 archive read, +25 approved registry post, +50 duel win, +75 comeback win, +5 arena vote, -20 duel loss</td>
                      <td className="py-3 pr-4">Rules-based progression economy</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        <section className="container py-8">
          <div className="neo">
            <div className="inner p-8">
              <h2 className="section-title mb-4">Architecture And Engineering Challenges</h2>
              <ul className="space-y-3 text-zinc-300">
                {engineeringChallenges.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-cyan-400 mt-2 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="container py-8">
          <div className="neo">
            <div className="inner p-8">
              <h2 className="section-title mb-4">Challenges And Limitations</h2>
              <ul className="space-y-3 text-zinc-300">
                {limitations.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-cyan-400 mt-2 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="container py-8">
          <div className="neo">
            <div className="inner p-8">
              <h2 className="section-title mb-4">If I Rebuilt It</h2>
              <ul className="space-y-3 text-zinc-300">
                {rebuildPlan.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-cyan-400 mt-2 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="container py-8">
          <div className="neo">
            <div className="inner p-8">
              <h2 className="section-title mb-4">Process And Transparency</h2>
              <ul className="space-y-3 text-zinc-300">
                {processNotes.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-cyan-400 mt-2 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="container pt-8 pb-16">
          <div className="neo">
            <div className="inner p-8">
              <h2 className="section-title mb-4">Disclaimers And Credits</h2>
              <p className="text-zinc-300 leading-relaxed">
                Fan project. Based on Bungo Stray Dogs by Kafka Asagiri and Sango Harukawa. Not affiliated with or endorsed by the creators or publishers. Character data referenced from the Bungo Stray Dogs Wiki (Fandom), CC BY-SA.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
