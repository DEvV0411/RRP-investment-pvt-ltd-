// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { Network, Activity, PieChart, Layers } from 'lucide-react';
import './Pages.css';

export default function Business() {
  const operations = [
    {
      title: "Algorithmic trading and Ai",
      icon: <Activity size={24} />,
      desc: "Developing and deploying automated trading models that leverage market data and statistical patterns. Focus on AI/ML-driven insights (where applicable) and systematic execution for efficiency and consistency."
    },
    {
      title: "Equity, futures and derivatives",
      icon: <Network size={24} />,
      desc: "Active participation in the cash, futures, and options segments of the NSE. Execution of both directional and non-directional strategies across asset classes."
    },
    {
      title: "Options and greek based synergies",
      icon: <Layers size={24} />,
      desc: "Designing strategies centered around options Greeks (Delta, Theta, Vega, Gamma). Focus on risk-defined trades, volatility analysis, and dynamic hedging to optimize returns."
    },
    {
      title: "Risk management and infrastructure",
      icon: <PieChart size={24} />,
      desc: "Maintaining robust risk frameworks to monitor exposures, drawdowns, and market volatility. Utilizing advanced infrastructure (e.g., Falcon) for low-latency execution and reliable trade management."
    }
  ];

  return (
    <div className="page-wrapper">
      <div className="container relative z-10">
        <div className="page-header mt-12">
          <div className="section-subtitle">Our Operations</div>
          <h1 className="page-title">Market Operations & Strategy</h1>
          <p className="page-subtitle text-lg text-left mx-auto">
            The company operates as a technology-driven, research-oriented trading organization, integrating algorithmic models, AI/ML techniques, and data-driven systems with equity, futures, and options trading strategies. By combining fundamental and technical research, derivatives trading, and Greek-based risk management within a robust execution and infrastructure framework, the company aims to deliver systematic, disciplined, and adaptive trading solutions, with a strong focus on risk control, hedging, and consistent long-term performance in Indian financial markets.
          </p>
        </div>

        <div className="grid-2-cols my-16">
          {operations.map((op, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15, duration: 0.6 }}
              className="fin-card"
            >
              <div className="fin-card-icon">
                {op.icon}
              </div>
              <h3 className="fin-card-title">{op.title}</h3>
              <p className="fin-card-desc border-l-4 pl-4" style={{ borderColor: 'rgba(212, 175, 55, 0.4)' }}>{op.desc}</p>
            </motion.div>
          ))}
        </div>
        

      </div>
    </div>
  );
}
