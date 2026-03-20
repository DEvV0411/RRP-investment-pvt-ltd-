// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { Target, Eye, ChevronRight } from 'lucide-react';
import './Pages.css';

export default function About() {
  const leadership = [
    {
      name: "Mrs. Rupal Waghela",
      role: "Chairperson",
      bio: "A visionary with great leadership quality, Mrs. Rupal is actively involved in managing the company. She augmented the business and set new standards of scalping, option strategies, and delta hedging. She was a driving force behind the growth and development of the proprietary investments. Variously described as focused, passionate, sincere, hard-working, and dynamic, she has infused the company with her own brand of energetic leadership, vision, and spirit over the years. With an illustrious career spanning across 20 years, she is held in high esteem professionally amongst market peers. She holds an MBA in Finance."
    },
    {
      name: "Mr. Jiten Waghela",
      role: "Director - Equity",
      bio: "Mr. Jiten has a natural flair for cultivating out-of-the-box thinking. In his capacity as a Director, he is a key person behind strategic decision making and in the past has led many successful initiatives for the company. With substantial experience in the financial services industry, Mr. Jiten is responsible for the management and growth of the company's business. He is a quick problem solver for the company and is designated as a CMA by the Institute of Cost Accountants of India."
    },
    {
      name: "Mr. Nihar",
      role: "Director - Derivatives and Risk Management",
      bio: "Overseeing the complex modeling and rapid execution of our algorithmic systems. Ensures strict adherence to hedging protocols, dynamic option greek balancing, and institutional-grade risk parameters across global liquidity pools."
    }
  ];

  return (
    <div className="page-wrapper pb-24">
      <div className="container relative z-10">
        <div className="page-header mt-12 mb-16">
          <div className="section-subtitle">Firm Profile</div>
          <h1 className="page-title mb-8">About Us</h1>
          <div className="max-w-4xl mx-auto" style={{ textAlign: 'center', lineHeight: '1.9', fontSize: '1.15rem', color: '#94a3b8' }}>
             <p className="mb-6">We are a cutting-edge High-Frequency Trading (HFT) firm leveraging advanced AI-driven algorithms, ultra-low latency infrastructure, and institutional-grade trading platforms such as Falcon and Bloomberg Red Box. Our core strength lies in combining quantitative research, machine learning, and high-speed execution systems to identify and capitalize on market inefficiencies in real time.</p>
             <p>With a strong focus on innovation and precision, we operate in a fast-paced environment where technology and finance intersect. Our team consists of experienced traders, engineers, and data scientists committed to building scalable, intelligent trading solutions that perform across dynamic global markets.</p>
          </div>
        </div>

        {/* Vision and Mission */}
        <div className="grid-2-cols mt-8 mb-24 gap-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="fin-card h-full text-center items-center" style={{ padding: '4rem', background: 'linear-gradient(180deg, rgba(15, 23, 42, 0.7) 0%, rgba(8, 12, 20, 0.95) 100%)', borderTop: '4px solid #3b82f6' }}>
              <Eye size={48} className="text-blue-500 mb-6 mx-auto" style={{ filter: 'drop-shadow(0 0 10px rgba(59, 130, 246, 0.5))' }} />
              <h3 className="fin-card-title border-b border-gray-700/50 pb-4 w-full text-3xl font-bold mb-6">Vision</h3>
              <p className="text-gray-300 leading-relaxed text-lg pt-2 mt-4">
                To become a global leader in algorithmic and high-frequency trading by continuously pushing the boundaries of technology, speed, and intelligence in financial markets.
              </p>
            </div>
          </motion.div>
          
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
            <div className="fin-card h-full text-left items-start" style={{ padding: '4rem', background: 'linear-gradient(180deg, rgba(15, 23, 42, 0.7) 0%, rgba(8, 12, 20, 0.95) 100%)', borderTop: '4px solid #d4af37' }}>
              <div className="text-center w-full">
                 <Target size={48} className="text-yellow-500 mb-6 mx-auto" style={{ filter: 'drop-shadow(0 0 10px rgba(212, 175, 55, 0.5))' }} />
                 <h3 className="fin-card-title border-b border-gray-700/50 pb-4 w-full text-3xl font-bold mb-6 text-center">Mission</h3>
              </div>
              <ul className="flex flex-col gap-4 mt-4 list-none p-0">
                {[
                  "To develop and deploy high-performance AI-powered trading strategies",
                  "To maintain ultra-low latency systems for optimal execution",
                  "To foster innovation through research in quantitative finance and machine learning",
                  "To create opportunities for young talent to excel in financial technology",
                  "To uphold integrity, transparency, and excellence in all our operations"
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-4 items-start text-gray-300">
                    <div className="w-2 h-2 rounded-full bg-yellow-500 mt-2 shrink-0"></div>
                    <span className="leading-relaxed text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Leadership Section */}
        <div className="mt-24">
          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}>
             <h2 className="text-4xl font-bold text-white mb-12 text-center">Firm Leadership</h2>
          </motion.div>

          <div className="flex flex-col gap-8">
            {leadership.map((leader, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }} 
                whileInView={{ opacity: 1, x: 0 }} 
                viewport={{ once: true }} 
                transition={{ delay: 0.1 * i }}
              >
                <div className="fin-card border-l-4 p-8" style={{ borderColor: '#d4af37' }}>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-yellow-900/30 border border-yellow-500/20 rounded-full flex items-center justify-center">
                      <ChevronRight className="text-yellow-500" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">{leader.name}</h3>
                      <p className="text-yellow-500 font-semibold text-sm uppercase tracking-widest mt-1">{leader.role}</p>
                    </div>
                  </div>
                  <p className="text-gray-300 leading-relaxed mt-4">
                    {leader.bio}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
