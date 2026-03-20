// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { Target, Eye, Users, ChevronRight } from 'lucide-react';
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
      name: "Mr. Nihar Waghela",
      role: "Director - Derivatives and Risk Management",
      bio: "Overseeing the complex modeling and rapid execution of our algorithmic systems. Ensures strict adherence to hedging protocols, dynamic option greek balancing, and institutional-grade risk parameters across global liquidity pools."
    }
  ];

  return (
    <div className="page-wrapper pb-24">
      <div className="container relative z-10">
        <div className="page-header mt-12 mb-16">
          <div className="section-subtitle">Firm Profile</div>
          <h1 className="page-title">Enabling Financial Excellence</h1>
        </div>

        {/* Vision, Mission, Who We Are */}
        <div className="grid-3-cols mt-8 mb-24">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="fin-card h-full text-center items-center">
              <Eye size={40} className="text-yellow-500 mb-6" />
              <h3 className="fin-card-title border-b border-gray-700/50 pb-4 w-full">Vision</h3>
              <p className="fin-card-desc pt-4">
                To enable people to contribute to and share the wealth of a nation through high professional excellence in capital markets.
              </p>
            </div>
          </motion.div>
          
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
            <div className="fin-card h-full text-center items-center">
              <Target size={40} className="text-yellow-500 mb-6" />
              <h3 className="fin-card-title border-b border-gray-700/50 pb-4 w-full">Mission</h3>
              <p className="fin-card-desc pt-4">
                To provide unparalleled service with integrity to our clients to create value.
              </p>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
            <div className="fin-card h-full text-center items-center">
              <Users size={40} className="text-yellow-500 mb-6" />
              <h3 className="fin-card-title border-b border-gray-700/50 pb-4 w-full">Who We Are</h3>
              <p className="fin-card-desc pt-4">
                We are a group of highly experienced professionals striving to create value through our expertise in capital markets.
              </p>
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
