// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { Network, Activity, PieChart, Layers } from 'lucide-react';
import './Pages.css';

export default function Business() {
  const operations = [
    {
      title: "Algorithmic Trading, AI & Data-Driven Systems",
      icon: <Activity size={28} />,
      accent: "#006D6D",
      desc: "Developing and deploying automated trading systems powered by Artificial Intelligence, Machine Learning, Deep Learning, and Reinforcement Learning. These models process large volumes of market data, identify patterns, and execute trades systematically with minimal manual intervention on the National Stock Exchange of India."
    },
    {
      title: "Equity, Futures & Derivatives Trading",
      icon: <Network size={28} />,
      accent: "#006D6D",
      desc: "A structured approach across equity, index, and stock futures markets, combining fundamental analysis (financials, macro trends, sector insights) with technical analysis (price action, indicators, momentum signals). Futures are used for both directional trading and portfolio hedging, enabling efficient capital utilization."
    },
    {
      title: "Options & Greek-Based Strategies",
      icon: <Layers size={28} />,
      accent: "#005858",
      desc: "A core focus area where strategies are constructed using Greek parameters such as Delta, Gamma, Vega, and Theta. The company designs delta-neutral, volatility-based, and income-generating strategies, aiming to capture market inefficiencies while maintaining controlled exposure and risk-adjusted returns."
    },
    {
      title: "Risk Management, Hedging & Execution Infrastructure",
      icon: <PieChart size={28} />,
      accent: "#006D6D",
      desc: "Risk management embedded across all activities through real-time monitoring of positions, strict exposure limits, drawdown controls, margin optimization, and dynamic hedging. The company operates on a strong technological backbone supporting real-time data processing, automated execution, and scalable trading systems."
    }
  ];

  return (
    <div className="page-wrapper">
      <div className="container relative z-10">
        
        {/* Header */}
        <div className="page-header mt-12">
          <div className="section-subtitle">Our Operations</div>
          <h1 className="page-title">Market Operations & Strategy</h1>
          <p className="page-subtitle max-w-4xl mx-auto" style={{ textAlign: 'center', lineHeight: 1.8 }}>
            The company operates as a technology-driven, research-oriented trading organization, integrating algorithmic models, AI/ML techniques, and data-driven systems with equity, futures, and options trading strategies. By combining fundamental and technical research, derivatives trading, and Greek-based risk management within a robust execution framework, the company delivers systematic, disciplined, and adaptive trading solutions in Indian financial markets.
          </p>
        </div>

        {/* Operations Grid */}
        <div className="grid-2-cols" style={{ gap: '2rem', marginTop: '4rem', marginBottom: '4rem' }}>
          {operations.map((op, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.12, duration: 0.5 }}
            >
              <div className="fin-card" style={{ height: '100%', borderTop: `4px solid ${op.accent}`, background: 'linear-gradient(160deg, #f0f8f8 0%, white 100%)' }}>
                <div style={{ width: '58px', height: '58px', borderRadius: '14px', background: `${op.accent}12`, border: `1px solid ${op.accent}30`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: op.accent, marginBottom: '1.5rem' }}>
                  {op.icon}
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#011f1f', marginBottom: '1rem', lineHeight: 1.3 }}>{op.title}</h3>
                <p style={{ color: '#2d5c5c', lineHeight: 1.8, fontSize: '0.97rem', borderLeft: `3px solid ${op.accent}40`, paddingLeft: '1rem' }}>{op.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
