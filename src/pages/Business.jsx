// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { Network, Activity, PieChart, Layers, Briefcase } from 'lucide-react';
import './Pages.css';

export default function Business() {
  const operations = [
    {
      title: "Algorithmic Trading, AI & Data-Driven Systems",
      icon: <Activity size={28} />,
      accent: "#006D6D",
      desc: "The company develops and deploys automated trading systems powered by Artificial Intelligence, Machine Learning, Deep Learning, and Reinforcement Learning. These models process large volumes of market data, identify patterns, and execute trades systematically with minimal manual intervention. The focus is on building adaptive strategies that continuously evolve with changing market conditions on the National Stock Exchange of India, supported by robust data analytics and backtesting frameworks."
    },
    {
      title: "Equity, Futures & Derivatives Trading",
      icon: <Network size={28} />,
      accent: "#006D6D",
      desc: "The company follows a structured approach across equity, index, and stock futures markets, combining fundamental analysis (financials, macro trends, sector insights) with technical analysis (price action, indicators, momentum signals). Futures are used for both directional trading and portfolio hedging, enabling efficient capital utilization and tactical positioning in response to market movements."
    },
    {
      title: "Options & Greek-Based Strategies",
      icon: <Layers size={28} />,
      accent: "#005858",
      desc: "A core focus area is options trading, where strategies are constructed using Greek parameters such as Delta, Gamma, Vega, and Theta. The company designs delta-neutral, volatility-based, and income-generating strategies, aiming to capture market inefficiencies while maintaining controlled exposure. These strategies are integrated with broader trading models to enhance consistency and risk-adjusted returns."
    },
    {
      title: "Private Equity",
      icon: <Briefcase size={28} />,
      accent: "#006D6D",
      desc: "We offer strategic investment solutions tailored for companies seeking to unlock value and accelerate growth through capital market opportunities. Our expertise spans Initial Public Offerings (IPOs), reverse mergers, and structured instruments such as preference shares. Each opportunity is carefully evaluated and designed with a focus on delivering superior risk-adjusted returns. By leveraging in-depth market insights, rigorous due diligence, and innovative structuring, we aim to consistently outperform broader market benchmarks. Our approach combines strategic advisory with disciplined execution, enabling businesses to access capital efficiently while creating meaningful value for investors."
    }
  ];

  return (
    <div className="page-wrapper">
      <div className="container relative z-10">
        
        {/* Header */}
        <div className="page-header mt-12">
          <h1 className="page-title">Market Strategy & Intelligence</h1>
          <p className="page-subtitle max-w-5xl mx-auto" style={{ textAlign: 'center', lineHeight: 1.8, fontSize: 'clamp(1rem, 3vw, 1.2rem)', color: '#1a3a3a' }}>
            The company operates as a technology-driven, research-oriented trading organization, integrating algorithmic models, AI/ML techniques, and data-driven systems with equity, futures, and options trading strategies. By combining fundamental and technical research, derivatives trading, and Greek-based risk management within a robust execution and infrastructure framework, the company aims to deliver systematic, disciplined, and adaptive trading solutions, with a strong focus on risk control, hedging, and consistent long-term performance in Indian financial markets.
          </p>
        </div>

        {/* Operations Grid */}
        <div className="grid-2-cols" style={{ gap: '2rem', marginTop: 'clamp(3rem, 8vw, 6rem)', marginBottom: 'clamp(4rem, 10vw, 8rem)' }}>
          {operations.map((op, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              style={idx === operations.length - 1 && operations.length % 2 !== 0 ? { gridColumn: '1 / -1' } : {}}
            >
              <div className="fin-card" style={{ height: '100%', borderTop: `4px solid ${op.accent}`, background: 'linear-gradient(160deg, #f0f8f8 0%, white 100%)', padding: 'clamp(1.5rem, 5vw, 3rem)' }}>
                <div style={{ width: '56px', height: '56px', borderRadius: '16px', background: `${op.accent}12`, border: `1px solid ${op.accent}30`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: op.accent, marginBottom: '2rem' }}>
                  {op.icon}
                </div>
                <h3 style={{ fontSize: 'clamp(1.3rem, 4vw, 1.6rem)', fontWeight: 800, color: '#011f1f', marginBottom: '1.5rem', lineHeight: 1.3 }}>{op.title}</h3>
                <p style={{ color: '#2d5c5c', lineHeight: 1.9, fontSize: '1rem', borderLeft: `4px solid ${op.accent}25`, paddingLeft: '1.5rem', whiteSpace: 'pre-line' }}>{op.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
