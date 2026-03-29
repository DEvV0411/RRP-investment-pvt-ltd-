// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { Shield, TrendingUp, Target } from 'lucide-react';
import './Pages.css';

export default function About() {
  const PILLARS = [
    {
      icon: Target,
      title: "Quantitative Rigor",
      desc: "Directional engagement anchored in rigorous statistical modeling and exhaustive backtesting across multi-cycle historical datasets."
    },
    {
      icon: TrendingUp,
      title: "Private Capital",
      desc: "Identifying and nurturing high-potential enterprises through strategic equity investments and institutional-grade operational support."
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
      bio: "With over 15 years of experience, she provides strategic direction and oversight to the company’s evolving approach to algorithmic trading. With a strong foundation in finance and analytics, she focuses on building a disciplined, research-oriented framework that integrates equity investing (fundamental and technical), futures and options trading, and structured risk management practices.\n\nHer leadership emphasizes a balanced and well-governed transition toward data-driven and automated trading systems, incorporating techniques such as machine learning, advanced analytics, and options strategies involving Greeks. Alongside this, she ensures that equity research - both fundamental and technical - remains an integral part of strategy development, supported by prudent hedging frameworks. She is committed to fostering a culture of continuous learning and disciplined execution, aligned with the evolving dynamics of the markets."
    },
    {
      name: "Mr. Jiten Waghela",
      role: "Director",
      initials: "JW",
      color: "#006D6D",
      bio: "The Director of Quantitative Research is responsible for developing and refining the company’s trading models across equity, futures, and options markets. Bringing more than 15 years of experience, he focuses on translating market data into systematic and scalable trading strategies with statistical analysis and financial data modeling.\n\nHis work spans time series modeling, machine learning techniques, and technical indicators, alongside the development of options strategies driven by Greek exposures (Delta-neutral, Gamma-based, and volatility trading). He also integrates fundamental signals and macroeconomic indicators into quantitative frameworks to enhance decision-making. A key part of his role is conducting rigorous backtesting, scenario analysis, and risk-adjusted performance evaluation, ensuring that strategies remain robust across varying market conditions while maintaining effective hedging and drawdown control."
    },
    {
      name: "Mrs. Queenjal Vira",
      role: "Director",
      initials: "QV",
      color: "#006D6D",
      bio: "With over 15 years of experience in the stock market, she has worked with reputed firms such as Religare Securities, Greeksoft Technologies, Gajanand Stock Brokers, and Jainam Securities. She specializes in active trading using technical analysis and advanced charting tools. Her approach combines deep market insight with data-driven strategies to deliver consistent results.\n\nThe Director of Technology leads the development of the company’s trading infrastructure and execution capabilities, enabling seamless deployment of equity, futures, and options-based strategies. She is responsible for building reliable systems that support real-time data processing, automated execution, and continuous monitoring of positions and risk.\n\nHer role includes integrating quantitative models into production environments, ensuring that execution systems are aligned with strategy requirements, including hedging mechanisms and real-time monitoring of exposures such as positions, margins, and option Greeks. She focuses on creating scalable, efficient, and robust platforms that allow the company to execute complex trading strategies with precision and control across NSE markets."
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

        {/* Vision, Mission, Who We Are */}
        <section className="mb-24 py-12" style={{ background: 'linear-gradient(180deg, rgba(240,252,252,0) 0%, rgba(234,244,244,0.6) 100%)', borderRadius: '24px', padding: '4rem 2rem' }}>
          <div className="grid-3-cols" style={{ gap: '3rem' }}>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#006D6D', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '1rem' }}>Vision</h3>
              <p style={{ color: '#2d5c5c', fontSize: '1.05rem', lineHeight: 1.7 }}>To enable people to contribute to and share wealth of a nation through high professional excellence in capital markets.</p>
            </motion.div>
            
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#006D6D', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '1rem' }}>Mission</h3>
              <p style={{ color: '#2d5c5c', fontSize: '1.05rem', lineHeight: 1.7 }}>To provide unparalleled service with integrity to our clients to create value.</p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#006D6D', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '1rem' }}>Who We Are</h3>
              <p style={{ color: '#2d5c5c', fontSize: '1.05rem', lineHeight: 1.7 }}>We are a group of highly experienced professionals who strive to create value through our expertise in capital markets.</p>
            </motion.div>
          </div>
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
        <section className="mb-24" style={{ paddingTop: '8rem' }}>
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
                    <p style={{ color: '#2d5c5c', lineHeight: 1.9, fontSize: '1.05rem', margin: 0, fontWeight: 300, whiteSpace: 'pre-line' }}>{leader.bio}</p>
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
