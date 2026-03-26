// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { Cpu } from 'lucide-react';
import './Pages.css';

export default function About() {
  const leadership = [
    {
      name: "Mrs. Rupal Parmar",
      role: "Chairperson",
      initials: "RP",
      color: "#006D6D",
      borderColor: "#006D6D",
      bio: "She provides strategic direction and oversight to the company's evolving approach to algorithmic trading. With a strong foundation in finance and analytics, she focuses on building a disciplined, research-oriented framework that integrates equity investing (fundamental and technical), futures and options trading, and structured risk management practices. Her leadership emphasizes a balanced and well-governed transition toward data-driven and automated trading systems, incorporating machine learning, advanced analytics, and options strategies involving Greeks."
    },
    {
      name: "Mr. Jiten Waghela",
      role: "Director — Quantitative Research & Strategy",
      initials: "JW",
      color: "#006D6D",
      borderColor: "#006D6D",
      bio: "The Director of Quantitative Research is responsible for developing and refining the company's trading models across equity, futures, and options markets. He focuses on translating market data into systematic and scalable trading strategies with statistical analysis and financial data modeling. His work spans time series modeling, machine learning techniques, and technical indicators, alongside the development of options strategies driven by Greek exposures. He also integrates fundamental signals and macroeconomic indicators into quantitative frameworks to enhance decision-making."
    },
    {
      name: "Name to be Added by Nihar",
      role: "Director — Technology & Execution Systems",
      initials: "TBA",
      color: "#5a9090",
      borderColor: "#5a9090",
      bio: "The Director of Technology leads the development of the company's trading infrastructure and execution capabilities, enabling seamless deployment of equity, futures, and options-based strategies. He is responsible for building reliable systems that support real-time data processing, automated execution, and continuous monitoring of positions and risk. His role includes integrating quantitative models into production environments, ensuring that execution systems are aligned with strategy requirements, including hedging mechanisms and real-time monitoring of exposures."
    }
  ];

  return (
    <div className="page-wrapper pb-24">
      <div className="container relative z-10">

        {/* Header */}
        <div className="page-header mt-12 mb-16">
          <div className="section-subtitle">Firm Profile</div>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '2rem' }}>
            <img src="/logo.png?v=2" alt="RRP Investments Logo" style={{ maxWidth: '100%', width: '400px', filter: 'drop-shadow(0 4px 16px rgba(0, 109, 109,0.15))' }} />
          </div>
          <p className="page-subtitle max-w-4xl mx-auto" style={{ textAlign: 'center', lineHeight: '1.9', fontSize: '1.15rem' }}>
            A technology-driven, research-oriented trading organization integrating algorithmic models, AI/ML techniques, and disciplined risk management to deliver systematic performance in Indian financial markets.
          </p>

          {/* Strategic Partnership */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ marginTop: '3rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <p style={{ color: '#5a9090', fontSize: '0.8rem', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '1.2rem' }}>In Strategic Partnership With</p>
            <div style={{ background: '#ffffff', padding: '1rem 2.5rem', borderRadius: '12px', display: 'inline-flex', boxShadow: '0 4px 20px rgba(0, 109, 109,0.1)', alignItems: 'center', justifyContent: 'center', border: '1px solid rgba(0, 109, 109,0.12)' }}>
              <img src="/nirmal-bang-logo.png" alt="Nirmal Bang" style={{ height: '50px', objectFit: 'contain' }} />
            </div>
          </motion.div>
        </div>

        {/* Domain Tags Bar */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ marginBottom: '5rem' }}>
          <div className="fin-card" style={{ padding: '2rem 2.5rem', background: 'linear-gradient(135deg, #eaf4f4 0%, #daf0f0 100%)', border: '1px solid rgba(0, 109, 109,0.15)' }}>
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', justifyContent: 'center' }}>
              {[
                'Algorithmic Trading', 'AI & Machine Learning', 'Quantitative Finance',
                'Options & Derivatives', 'Risk Management',
              ].map((tag, i) => (
                <div key={i} style={{ padding: '8px 22px', borderRadius: '999px', background: 'white', border: '1px solid rgba(0, 109, 109,0.25)', boxShadow: '0 2px 8px rgba(0, 109, 109,0.06)' }}>
                  <span style={{ color: '#006D6D', fontSize: '0.82rem', fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase' }}>{tag}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* What We Do */}
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ marginBottom: '6rem' }}>
          <div className="fin-card" style={{ padding: '0', overflow: 'hidden', borderTop: '4px solid #006D6D', background: 'linear-gradient(135deg, #f0f8f8 0%, #eaf4f4 100%)' }}>
            <div className="about-grid-mixed">
              <div style={{ padding: '4rem', borderRight: '1px solid rgba(0, 109, 109,0.1)', display: 'flex', flexDirection: 'column', justifyContent: 'center', background: 'linear-gradient(160deg, rgba(0, 109, 109,0.06) 0%, rgba(0, 109, 109,0.04) 100%)' }}>
                <div style={{ width: '60px', height: '60px', borderRadius: '14px', background: 'rgba(0, 109, 109,0.1)', border: '1px solid rgba(0, 109, 109,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '2rem' }}>
                  <Cpu size={30} style={{ color: '#006D6D' }} />
                </div>
                <h3 style={{ fontSize: '2.2rem', fontWeight: 800, color: '#011f1f', lineHeight: 1.2, margin: 0 }}>What <br /><span style={{ color: '#006D6D' }}>We Do</span></h3>
              </div>
              <div style={{ padding: '4rem' }}>
                <p style={{ color: '#2d5c5c', fontSize: '1.1rem', lineHeight: 1.85, margin: '0 0 1.5rem 0' }}>
                  The leadership team combines strategic oversight, quantitative expertise, and technological capability to establish a comprehensive and structured approach to trading. The company integrates equity research, futures and options strategies, algorithmic models, and advanced AI/ML methodologies, supported by disciplined risk management and hedging practices.
                </p>
                <p style={{ color: '#2d5c5c', fontSize: '1.1rem', lineHeight: 1.85, margin: 0 }}>
                  The overarching objective is to build systematic, research-driven, and risk-aware trading solutions, ensuring consistency, adaptability, and long-term performance in the Indian financial markets.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Leadership Section */}
        <div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div className="section-subtitle">The Team</div>
            <h2 style={{ fontSize: '2.8rem', fontWeight: 800, color: '#011f1f', margin: '0.5rem 0 0' }}>Firm Leadership</h2>
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
                <div className="fin-card" style={{ padding: '3rem', borderLeft: `5px solid ${leader.color}`, background: 'linear-gradient(135deg, #f0f8f8 0%, white 100%)' }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '2rem' }}>
                    <div style={{ width: '72px', height: '72px', borderRadius: '16px', background: `${leader.color}15`, border: `2px solid ${leader.color}30`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <span style={{ color: leader.color, fontSize: '1.4rem', fontWeight: 900 }}>{leader.initials}</span>
                    </div>
                    <div style={{ flex: 1 }}>
                      <h3 style={{ fontSize: '1.7rem', fontWeight: 800, color: '#011f1f', margin: '0 0 0.4rem' }}>{leader.name}</h3>
                      <p style={{ color: leader.color, fontWeight: 700, fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '2px', margin: '0 0 1.5rem' }}>{leader.role}</p>
                      <p style={{ color: '#2d5c5c', lineHeight: 1.8, fontSize: '1rem', margin: 0, borderTop: `1px solid ${leader.color}20`, paddingTop: '1.5rem' }}>{leader.bio}</p>
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
