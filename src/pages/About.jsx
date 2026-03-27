// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { Shield, Zap, Target } from 'lucide-react';
import './Pages.css';

export default function About() {
  const PILLARS = [
    {
      icon: Target,
      title: "Quantitative Rigor",
      desc: "Directional engagement anchored in rigorous statistical modeling and exhaustive backtesting across multi-cycle historical datasets."
    },
    {
      icon: Zap,
      title: "Technological Edge",
      desc: "Low-latency execution pipelines built on high-performance compute architectures for sub-millisecond market entry."
    },
    {
      icon: Shield,
      title: "Risk Discipline",
      desc: "Absolute capital preservation protocols utilizing dynamic hedging and real-time drawdown monitoring."
    }
  ];

  const leadership = [
    {
      name: "Mrs. Rupal Parmar",
      role: "Director",
      initials: "RP",
      color: "#006D6D",
      bio: "Strategically steering the firm's evolution into automated trading. With a master's-level focus on finance and analytics, she builds the disciplined governance framework that integrates machine learning and advanced Greek-based options strategies."
    },
    {
      name: "Mr. Jiten Waghela",
      role: "Director of Quant Research",
      initials: "JW",
      color: "#006D6D",
      bio: "Architecting the core trading models across Indian derivative markets. He translates complex market dynamics into systematic strategies using advanced time-series modeling to extract Alpha from volatility mispricing."
    },
    {
      name: "Queenjal Vira",
      role: "Director",
      initials: "QV",
      color: "#006D6D",
      bio: "A trading veteran with over 15 years in Indian equity markets. Having served at firms like Religare and Greeksoft, she brings deep tactical insight and charting expertise, bridging quantitative models and real-world liquidity."
    }
  ];

  return (
    <div className="page-wrapper pb-24">
      <div className="container relative z-10 pt-16">
        
        {/* Elite Profile Header */}
        <section className="text-center mb-16">
          <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="section-subtitle">Corporate Profile</span>
            <h1 className="page-title mt-4 mb-6">Institutional Integrity <br/>in Financial Markets</h1>
            <div className="title-underline center"></div>
            <p className="page-subtitle max-w-3xl" style={{ fontSize: '1.25rem', color: '#2d5c5c', fontWeight: 300, lineHeight: 1.8 }}>
              RRP Investments is a technology-driven, research-oriented trading organization. We combine systematic algorithmic intelligence with deep market expertise to deliver sustainable performance.
            </p>
          </motion.div>
        </section>

        {/* Methodology Strip — Clean and Open */}
        <section className="mb-24 py-12 border-y" style={{ borderColor: 'rgba(0, 109, 109, 0.08)' }}>
          <div className="grid-3-cols" style={{ gap: '4rem' }}>
            {PILLARS.map((pillar, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * i }}
                style={{ textAlign: 'center' }}
              >
                <div style={{ color: '#006D6D', marginBottom: '1.5rem', display: 'flex', justifyContent: 'center' }}>
                  <pillar.icon size={32} strokeWidth={1.5} />
                </div>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#011f1f', marginBottom: '0.8rem', textTransform: 'uppercase', letterSpacing: '1px' }}>{pillar.title}</h3>
                <p style={{ color: '#5a9090', fontSize: '0.95rem', lineHeight: 1.6, margin: 0 }}>{pillar.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Leadership — Vertical Formal List */}
        <section className="mb-24 pt-16">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ textAlign: 'center', marginBottom: '5rem' }}>
            <h2 className="section-title text-4xl">Board of Directors</h2>
            <p className="text-gray-400 mt-2">Guiding our strategic transition into automated capital markets.</p>
          </motion.div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
            {leadership.map((leader, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * i }}
              >
                <div className="institutional-row">
                  <div style={{ width: '120px', height: '120px', borderRadius: '50%', background: '#f0fcfc', border: '1px solid rgba(0, 109, 109, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <span style={{ color: '#006D6D', fontSize: '1.8rem', fontWeight: 900 }}>{leader.initials}</span>
                  </div>
                  <div style={{ borderBottom: '1px solid rgba(0, 109, 109, 0.08)', paddingBottom: '3rem' }}>
                    <div className="flex flex-col md:flex-row justify-between items-baseline mb-6 gap-2">
                      <h3 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#011f1f', margin: 0 }}>{leader.name}</h3>
                      <p style={{ color: '#008888', fontWeight: 700, fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '2px' }}>{leader.role}</p>
                    </div>
                    <p style={{ color: '#2d5c5c', lineHeight: 1.9, fontSize: '1.05rem', margin: 0, fontWeight: 300 }}>{leader.bio}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Operating Partnership Strip */}
        <section className="py-12 border-t" style={{ borderColor: 'rgba(0, 109, 109, 0.1)' }}>
          <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-16 opacity-0.7">
            <p style={{ color: '#5a9090', fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '3px', margin: 0 }}>Strategic Operating Partner</p>
            <div className="hidden md:block" style={{ height: '1px', width: '60px', background: 'rgba(0, 109, 109, 0.2)' }}></div>
            <img src="/nirmal-bang-logo.png" alt="Nirmal Bang" style={{ height: '42px', width: 'auto', objectFit: 'contain' }} />
          </div>
        </section>

      </div>
    </div>
  );
}
