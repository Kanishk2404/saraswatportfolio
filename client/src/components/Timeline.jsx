import { motion } from 'framer-motion';
import { Trophy, Code, TrendingUp, Shield } from 'lucide-react';

export default function Timeline() {
  const timelineData = [
    {
      year: "2012",
      title: "Early Web Learning",
      description: "Learned to make simple websites using HTML, CSS, and JS in 5th grade.",
      icon: Code,
      color: "text-cyan-400"
    },
    {
      year: "2018-2022",
      title: "Sports Career",
      description: "Table tennis, basketball, and cricket player.",
      icon: Trophy,
      color: "text-yellow-400"
    },
    {
      year: "2022-2026",
      title: "BTech Journey",
      description: "Pursued BTech, explored web development, content creation, and programming fundamentals.",
      icon: Code,
      color: "text-cyan-400"
    },
    {
      year: "2023",
      title: "Cybersecurity",
      description: "Focused on cybersecurity, CTFs, and security research.",
      icon: Shield,
      color: "text-purple-400"
    },
    {
      year: "2023",
      title: "Anicafe Launch",
      description: "Built and scaled Anicafe to 100k+ users, learned SEO and community management.",
      icon: TrendingUp,
      color: "text-green-400"
    },
    {
      year: "2025",
      title: "DevOps",
      description: "Specialized in DevOps, AWS, Docker, and cloud infrastructure.",
      icon: Shield,
      color: "text-purple-400"
    }
  ];

  return (
    <section className="container py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="section-title text-white">My Journey</h2>
        <p className="text-lg text-zinc-300 max-w-3xl mx-auto">
          From sports to tech professional - here's how I got here
        </p>
      </motion.div>

      <div className="timeline max-w-4xl mx-auto">
        {timelineData.map((item, index) => (
          <motion.div
            key={item.year}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className={`timeline-item ${index % 2 === 0 ? 'text-left' : 'text-right'}`}
          >
            <div className="timeline-dot"></div>
            <div className={`bg-zinc-800/70 p-6 rounded-xl border border-zinc-700 max-w-sm ${
              index % 2 === 0 ? 'ml-0 mr-auto' : 'ml-auto mr-0'
            }`}>
              <div className="flex items-center gap-3 mb-3">
                <item.icon size={24} className={item.color} />
                <h3 className="text-xl font-bold text-zinc-100">{item.title}</h3>
              </div>
              <div className="text-sm text-cyan-400 font-mono mb-2">{item.year}</div>
              <p className="text-zinc-300 text-sm leading-relaxed">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
