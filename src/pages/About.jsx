// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { Target, Eye, ChevronRight, Cpu, Users } from 'lucide-react';
import './Pages.css';

export default function About() {
  const leadership = [
    {
      name: "Mrs. Rupal Parmar",
      role: "Chairperson",
      initials: "RP",
      color: "#d4af37",
      bio: "She provides strategic direction and oversight to the company’s evolving approach to algorithmic trading. With a strong foundation in finance and analytics, she focuses on building a disciplined, research-oriented framework that integrates equity investing (fundamental and technical), futures and options trading, and structured risk management practices. Her leadership emphasizes a balanced and well-governed transition toward data-driven, systematic strategies."
    },
    {
      name: "Mr. Jiten Waghela",
      role: "Chief Executive Officer (CEO)",
      initials: "JW",
      color: "#3b82f6",
      bio: "He brings extensive expertise in Indian financial markets, specializing in derivatives trading, options strategies (directional and non-directional), and Greek management. He leads the development and execution of trading strategies across equity and derivatives segments, with a focus on blending fundamental research, technical analysis, and systematic execution. His role involves active risk management, portfolio hedging, and optimizing trading models for consistent returns and long-term capital growth."
    },
    {
      name: "[To Be Appointed]",
      role: "Director – Technology & Execution Systems",
      initials: "TBA",
      color: "#8b5cf6",
      bio: ""
    }
  ];




  return (
    <div className="page-wrapper pb-24">
      <div className="container relative z-10">

        {/* Header */}
        <div className="page-header mt-12 mb-16">
          <div className="section-subtitle">Firm Profile</div>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '2rem' }}>
            <img src="/logo.png?v=2" alt="RRP Investments Logo" style={{ maxWidth: '100%', width: '450px', filter: 'drop-shadow(0 0 20px rgba(59,130,246,0.3))' }} />
          </div>
          <p className="page-subtitle max-w-4xl mx-auto" style={{ textAlign: 'center', lineHeight: '1.9', fontSize: '1.15rem' }}>
            We are a cutting-edge quantitative trading firm leveraging advanced AI-driven algorithms, ultra-low latency infrastructure, and institutional-grade trading platforms such as Falcon and Bloomberg Red Box.
          </p>

          {/* Strategic Partnership */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ marginTop: '4rem', marginBottom: '1rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <p style={{ color: '#94a3b8', fontSize: '0.9rem', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '1.5rem' }}>In Strategic Partnership With</p>
            <div style={{ background: '#ffffff', padding: '1.2rem 3rem', borderRadius: '12px', display: 'inline-flex', boxShadow: '0 8px 32px rgba(59, 130, 246, 0.1)', alignItems: 'center', justifyContent: 'center', border: '1px solid rgba(255,255,255,0.1)' }}>
              <img 
                src="/nirmal-bang-logo.png" 
                alt="Nirmal Bang" 
                style={{ height: '55px', objectFit: 'contain' }} 
              />
            </div>
          </motion.div>
        </div>

        {/* Domain Tags Bar */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ marginBottom: '5rem' }}>
          <div className="fin-card" style={{ padding: '2rem 2.5rem', overflow: 'hidden', background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.6) 0%, rgba(8, 12, 20, 0.9) 100%)' }}>
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', justifyContent: 'center' }}>
              {[
                'Algorithmic Trading',
                'Machine Learning',
                'Quantitative Finance',
                'Low Latency Systems',
                'Decades of Experience',
              ].map((tag, i) => (
                <div key={i} style={{ padding: '8px 22px', borderRadius: '6px', background: 'rgba(10,15,25,0.8)', border: '1px solid rgba(212,175,55,0.2)' }}>
                  <span style={{ color: '#d4af37', fontSize: '0.82rem', fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase' }}>{tag}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>




        {/* What We Do */}
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ marginBottom: '6rem' }}>
          <div className="fin-card" style={{ padding: '0', overflow: 'hidden', borderTop: '4px solid #8b5cf6', background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.6) 0%, rgba(8, 12, 20, 0.9) 100%)' }}>
            <div className="about-grid-mixed">
              <div style={{ padding: '4rem', borderRight: '1px solid rgba(255,255,255,0.06)', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <div style={{ width: '60px', height: '60px', borderRadius: '14px', background: 'rgba(139,92,246,0.08)', border: '1px solid rgba(139,92,246,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '2rem' }}>
                  <Cpu size={30} style={{ color: '#a78bfa' }} />
                </div>
                <h3 style={{ fontSize: '2.2rem', fontWeight: 800, color: 'white', lineHeight: 1.2, margin: 0 }}>What <br /><span style={{ color: '#a78bfa' }}>We Do</span></h3>
              </div>
              <div style={{ padding: '4rem' }}>
                <p style={{ color: '#94a3b8', fontSize: '1.1rem', lineHeight: 1.85, margin: '0 0 1rem 0' }}>
                  The leadership team combines strategic oversight, quantitative expertise, and technological capability to establish a comprehensive and structured approach to trading. The company integrates equity research, futures and options strategies, algorithmic models, and advanced AI/ML methodologies, supported by disciplined risk management and hedging practices.
                </p>
                <p style={{ color: '#94a3b8', fontSize: '1.1rem', lineHeight: 1.85, margin: 0 }}>
                  The overarching objective is to build systematic, research-driven, and risk-aware trading solutions, ensuring consistency, adaptability, and long-term performance in the Indian financial markets.
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
