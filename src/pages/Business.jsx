// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { Network, Activity, PieChart, Layers } from 'lucide-react';
import './Pages.css';

export default function Business() {
  const operations = [
    {
      title: "Scalping",
      icon: <Activity size={24} />,
      desc: "The execution cost of trading is smaller in more heavily traded markets and larger in markets that are more thinly traded. Thus, traded volume and liquidity has a direct relationship. Liquidity in a market is the primary determinant of the size of the bid-ask spread, the difference between the scalper's buy and sell offers."
    },
    {
      title: "Liquidity Analysis",
      icon: <Network size={24} />,
      desc: "Liquidity can be quantified through bid-ask spread. This amount of the spread is twice the square root of the opposite sign covariance of price changes. Another method does not precisely assess the bid-ask spread, but instead measures the cost of trading which is directly related to the bid-ask spread."
    },
    {
      title: "Option Strategies",
      icon: <Layers size={24} />,
      desc: "Option strategies not only enhances the performance of pure-stock portfolios, but options can also be used to synthetically create equivalent position of equity or futures with a significantly different risk and return profile. It is possible to alter risk and return profile of the portfolio as options have truncated pay-off owing to the contingent nature of claim."
    },
    {
      title: "Delta Hedging",
      icon: <PieChart size={24} />,
      desc: "Subordinated models are used to price contingent claims and model the dynamic nature of return process and value Option Greeks. Profit probability is higher even from non-normally distributed time series which have fat tails and negatively skewed returns."
    }
  ];

  return (
    <div className="page-wrapper">
      <div className="container relative z-10">
        <div className="page-header mt-12">
          <div className="section-subtitle">Our Operations</div>
          <h1 className="page-title">Market Operations & Strategy</h1>
          <p className="page-subtitle text-lg text-left mx-auto">
            Investments and trades of our managers are fully funded by us. There is no clientele business and thus, our managers don't depend upon client's approval before any trade, nor do they have any sales target. Through our robust and extensive training and insights on various models and research techniques, our managers make huge profits and share the wealth created. This is one of the most rewarding careers in the Finance domain ever sought after, wherein our staff have a perfect work-life balance.
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
        
        <div style={{ marginTop: '5rem', marginBottom: '5rem' }}>
            <div className="fin-card" style={{ padding: '0', overflow: 'hidden', borderTop: '4px solid #d4af37', background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.6) 0%, rgba(8, 12, 20, 0.9) 100%)' }}>
               <div className="grid-2-cols" style={{ gap: 0 }}>
                 
                 <div style={{ padding: '4rem', borderRight: '1px solid rgba(255,255,255,0.05)', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                   <div style={{ width: '60px', height: '60px', borderRadius: '12px', background: 'rgba(212,175,55,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#d4af37', marginBottom: '2rem' }}>
                     <Network size={32} />
                   </div>
                   <h3 style={{ fontSize: '2.5rem', fontWeight: 800, color: 'white', lineHeight: 1.2, margin: '0 0 1rem 0' }}>Advanced <br/><span style={{ color: '#d4af37' }}>Trading Methodologies</span></h3>
                   <p style={{ color: '#64748b', fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '2px', fontWeight: 'bold', margin: 0 }}>Proprietary Models & Frameworks</p>
                 </div>

                 <div style={{ padding: '4rem' }}>
                   <p style={{ color: '#94a3b8', fontSize: '1.1rem', lineHeight: 1.8, marginBottom: '2rem' }}>
                      Scalpers, as liquidity providers, apply various roundtrip trading strategies to intra-day prices for profitable trading opportunities. Further, various well researched and modelled, non-standard and personalized strategies are implemented in different market scenarios.
                   </p>
                   <div style={{ padding: '2rem', background: 'rgba(0,0,0,0.3)', borderLeft: '3px solid #3b82f6', borderRadius: '0 8px 8px 0' }}>
                     <p style={{ color: '#cbd5e1', fontSize: '1.05rem', lineHeight: 1.7, margin: 0 }}>
                        The performance is optimised using various tools like modified CAPM, mean-variance, stochastic dominance, Var etc. Under one of the models, intrinsic time is substituted in place of physical time, which provides tail shape of the distribution often observed in the market. The log price process "Z" is subordinated to a standard Wiener process by the independent intrinsic time process in frictionless markets.
                     </p>
                   </div>
                 </div>

               </div>
            </div>
        </div>
      </div>
    </div>
  );
}
