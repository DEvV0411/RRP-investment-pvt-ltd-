import { motion } from 'framer-motion';
import { Target, Eye, ChevronRight, Cpu, Users } from 'lucide-react';
import './Pages.css';

export default function About() {
  const leadership = [
    {
      name: "Mrs. Rupal Waghela",
      role: "Chairperson",
      initials: "RW",
      color: "#d4af37",
      bio: "A visionary with great leadership quality, Mrs. Rupal is actively involved in managing the company. She augmented the business and set new standards of scalping, option strategies, and delta hedging. She was a driving force behind the growth and development of the proprietary investments. Variously described as focused, passionate, sincere, hard-working, and dynamic, she has infused the company with her own brand of energetic leadership, vision, and spirit over the years. With an illustrious career spanning across 20 years, she is held in high esteem professionally amongst market peers. She holds an MBA in Finance."
    },
    {
      name: "Mr. Jiten Waghela",
      role: "Director – Equity",
      initials: "JW",
      color: "#3b82f6",
      bio: "Mr. Jiten has a natural flair for cultivating out-of-the-box thinking. In his capacity as a Director, he is a key person behind strategic decision making and in the past has led many successful initiatives for the company. With substantial experience in the financial services industry, Mr. Jiten is responsible for the management and growth of the company's business. He is a quick problem solver for the company and is designated as a CMA by the Institute of Cost Accountants of India."
    },
    {
      name: "Mr. Nihar",
      role: "Director – Derivatives & Risk Management",
      initials: "N",
      color: "#8b5cf6",
      bio: "Overseeing the complex modeling and rapid execution of our algorithmic systems. Ensures strict adherence to hedging protocols, dynamic option greek balancing, and institutional-grade risk parameters across global liquidity pools."
    }
  ];

  const stats = [
    { value: "20+", label: "Years of Experience" },
    { value: "HFT", label: "Core Strategy" },
    { value: "AI", label: "Driven Execution" },
    { value: "24/7", label: "Systems Monitoring" }
  ];

  return (
    <div className="page-wrapper pb-24">
      <div className="container relative z-10">

        {/* Header */}
        <div className="page-header mt-12 mb-16">
          <div className="section-subtitle">Firm Profile</div>
          <h1 className="page-title mb-8">About Us</h1>
          <p className="page-subtitle max-w-4xl mx-auto" style={{ textAlign: 'center', lineHeight: '1.9', fontSize: '1.15rem' }}>
            We are a cutting-edge High-Frequency Trading (HFT) firm leveraging advanced AI-driven algorithms, ultra-low latency infrastructure, and institutional-grade trading platforms such as Falcon and Bloomberg Red Box.
          </p>
        </div>

        {/* Stats Bar */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ marginBottom: '5rem' }}>
          <div className="fin-card" style={{ padding: '0', overflow: 'hidden', background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.6) 0%, rgba(8, 12, 20, 0.9) 100%)' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)' }}>
              {stats.map((stat, i) => (
                <div key={i} style={{ padding: '2.5rem', textAlign: 'center', borderRight: i < stats.length - 1 ? '1px solid rgba(255,255,255,0.06)' : 'none' }}>
                  <div style={{ fontSize: '2.5rem', fontWeight: 900, color: '#d4af37', marginBottom: '0.5rem', letterSpacing: '-1px' }}>{stat.value}</div>
                  <div style={{ color: '#64748b', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '2px', fontWeight: 'bold' }}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Vision and Mission */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2.5rem', marginBottom: '6rem' }}>
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="fin-card" style={{ padding: '4rem', height: '100%', boxSizing: 'border-box', background: 'linear-gradient(180deg, rgba(15, 23, 42, 0.7) 0%, rgba(8, 12, 20, 0.95) 100%)', borderTop: '4px solid #3b82f6' }}>
              <div style={{ width: '64px', height: '64px', borderRadius: '16px', background: 'rgba(59,130,246,0.08)', border: '1px solid rgba(59,130,246,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '2rem' }}>
                <Eye size={32} style={{ color: '#60a5fa', filter: 'drop-shadow(0 0 8px rgba(59,130,246,0.5))' }} />
              </div>
              <h3 style={{ fontSize: '2rem', fontWeight: 800, color: 'white', marginBottom: '1rem', paddingBottom: '1.5rem', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>Vision</h3>
              <p style={{ color: '#cbd5e1', lineHeight: 1.85, fontSize: '1.05rem', marginTop: '1.5rem' }}>
                To become a global leader in algorithmic and high-frequency trading by continuously pushing the boundaries of technology, speed, and intelligence in financial markets.
              </p>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
            <div className="fin-card" style={{ padding: '4rem', height: '100%', boxSizing: 'border-box', background: 'linear-gradient(180deg, rgba(15, 23, 42, 0.7) 0%, rgba(8, 12, 20, 0.95) 100%)', borderTop: '4px solid #d4af37' }}>
              <div style={{ width: '64px', height: '64px', borderRadius: '16px', background: 'rgba(212,175,55,0.08)', border: '1px solid rgba(212,175,55,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '2rem' }}>
                <Target size={32} style={{ color: '#d4af37', filter: 'drop-shadow(0 0 8px rgba(212,175,55,0.5))' }} />
              </div>
              <h3 style={{ fontSize: '2rem', fontWeight: 800, color: 'white', marginBottom: '1rem', paddingBottom: '1.5rem', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>Mission</h3>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem', padding: 0, margin: '1.5rem 0 0 0', listStyle: 'none' }}>
                {[
                  "Deploy high-performance AI-powered trading strategies",
                  "Maintain ultra-low latency systems for optimal execution",
                  "Foster innovation in quantitative finance and machine learning",
                  "Create opportunities for young talent in financial technology",
                  "Uphold integrity, transparency, and excellence in all operations"
                ].map((item, idx) => (
                  <li key={idx} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start', color: '#cbd5e1' }}>
                    <div style={{ width: '8px', height: '8px', borderRadius: '2px', backgroundColor: '#d4af37', marginTop: '8px', flexShrink: 0, transform: 'rotate(45deg)' }}></div>
                    <span style={{ lineHeight: 1.7, fontSize: '1rem' }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        {/* What We Do */}
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ marginBottom: '6rem' }}>
          <div className="fin-card" style={{ padding: '0', overflow: 'hidden', borderTop: '4px solid #8b5cf6', background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.6) 0%, rgba(8, 12, 20, 0.9) 100%)' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 0 }}>
              <div style={{ padding: '4rem', borderRight: '1px solid rgba(255,255,255,0.06)', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <div style={{ width: '60px', height: '60px', borderRadius: '14px', background: 'rgba(139,92,246,0.08)', border: '1px solid rgba(139,92,246,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '2rem' }}>
                  <Cpu size={30} style={{ color: '#a78bfa' }} />
                </div>
                <h3 style={{ fontSize: '2.2rem', fontWeight: 800, color: 'white', lineHeight: 1.2, margin: 0 }}>What <br /><span style={{ color: '#a78bfa' }}>We Do</span></h3>
              </div>
              <div style={{ padding: '4rem' }}>
                <p style={{ color: '#94a3b8', fontSize: '1.1rem', lineHeight: 1.85, margin: 0 }}>
                  With a strong focus on innovation and precision, we operate in a fast-paced environment where technology and finance intersect. Our team consists of experienced traders, engineers, and data scientists committed to building scalable, intelligent trading solutions that perform across dynamic global markets. We combine quantitative research, machine learning, and high-speed execution systems to identify and capitalize on market inefficiencies in real time.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Leadership Section */}
        <div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div className="section-subtitle">Leadership</div>
            <h2 style={{ fontSize: '2.8rem', fontWeight: 800, color: 'white', margin: '0.5rem 0 0' }}>Firm Leadership</h2>
          </motion.div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {leadership.map((leader, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * i }}
              >
                <div className="fin-card" style={{ padding: '3rem', borderLeft: `5px solid ${leader.color}`, background: 'linear-gradient(135deg, rgba(15,23,42,0.7) 0%, rgba(8,12,20,0.95) 100%)' }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '2rem' }}>
                    <div style={{ width: '72px', height: '72px', borderRadius: '16px', background: `${leader.color}18`, border: `1px solid ${leader.color}44`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <span style={{ color: leader.color, fontSize: '1.4rem', fontWeight: 900 }}>{leader.initials}</span>
                    </div>
                    <div style={{ flex: 1 }}>
                      <h3 style={{ fontSize: '1.7rem', fontWeight: 800, color: 'white', margin: '0 0 0.4rem' }}>{leader.name}</h3>
                      <p style={{ color: leader.color, fontWeight: 700, fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '2px', margin: '0 0 1.5rem' }}>{leader.role}</p>
                      <p style={{ color: '#94a3b8', lineHeight: 1.8, fontSize: '1rem', margin: 0, borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '1.5rem' }}>{leader.bio}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
