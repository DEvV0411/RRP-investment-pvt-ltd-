import { useState } from 'react';
import { motion } from 'framer-motion';
import { Target, TrendingUp, Code, Database, Cpu, Server, HeartHandshake, CheckCircle2, X } from 'lucide-react';
import './Pages.css';
import { Link } from 'react-router-dom';

export default function Careers() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const roles = [
    { title: "Quantitative Analysts", icon: <Target size={20} /> },
    { title: "Algorithmic Traders", icon: <TrendingUp size={20} /> },
    { title: "Software Developers (Low Latency)", icon: <Code size={20} /> },
    { title: "Data Scientists / ML Engineers", icon: <Database size={20} /> },
    { title: "DevOps & Infrastructure Engineers", icon: <Server size={20} /> }
  ];

  const benefits = [
    "Exposure to real-world high-frequency trading systems",
    "Work with cutting-edge AI and financial technologies",
    "Performance-driven growth opportunities",
    "Collaborative and innovation-focused culture"
  ];

  return (
    <div className="page-wrapper pb-16">
      <div className="page-header mt-8">
        <div className="container text-center">
          <div className="section-subtitle">Join the Engine</div>
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="page-title text-5xl mb-6"
          >
            Careers at RRP
          </motion.h1>
          <div className="title-underline center"></div>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="page-subtitle max-w-4xl mx-auto text-lg leading-relaxed text-gray-300 mb-16"
          >
            Join a team where technology meets finance at the highest level. We are always looking for passionate individuals who thrive in high-performance environments and are eager to solve complex problems.
          </motion.p>
        </div>
      </div>

      <div className="container mt-16">
        <div className="grid-2-cols mb-24 gap-12">
          {/* Roles We Hire For */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="fin-card h-full" style={{ borderTop: '4px solid #3b82f6', padding: '3.5rem' }}>
              <div className="flex items-center gap-4 mb-8 border-b border-gray-700/50 pb-6">
                <div className="w-14 h-14 bg-blue-900/40 border border-blue-500/30 rounded-xl flex items-center justify-center text-blue-400">
                  <Cpu size={28} />
                </div>
                <h2 className="text-3xl font-bold text-white">Roles We Hire For</h2>
              </div>
              
              <div className="flex flex-col gap-4">
                {roles.map((role, idx) => (
                  <motion.div key={idx} whileHover={{ x: 10 }} className="flex items-center gap-4 text-gray-200 p-4 bg-white/5 rounded-lg border border-white/5 hover:border-blue-500/30 transition-all cursor-default">
                    <span className="text-blue-400 w-10 h-10 bg-blue-900/40 flex items-center justify-center rounded-lg border border-blue-500/20">{role.icon}</span>
                    <span className="font-semibold text-lg">{role.title}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Why Work With Us */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="fin-card h-full" style={{ borderTop: '4px solid #d4af37', padding: '3.5rem' }}>
              <div className="flex items-center gap-4 mb-8 border-b border-gray-700/50 pb-6">
                <div className="w-14 h-14 bg-yellow-900/40 border border-yellow-500/30 rounded-xl flex items-center justify-center text-yellow-500">
                  <Target size={28} />
                </div>
                <h2 className="text-3xl font-bold text-white">Why Work With Us</h2>
              </div>
              
              <div className="flex flex-col gap-6">
                {benefits.map((benefit, idx) => (
                  <motion.div key={idx} whileHover={{ x: 10 }} className="flex items-start gap-4 text-gray-200 p-4 bg-white/5 rounded-lg border border-white/5 hover:border-yellow-500/30 transition-all cursor-default">
                    <span className="text-yellow-500 mt-1"><CheckCircle2 size={24} /></span>
                    <span className="text-lg leading-relaxed">{benefit}</span>
                  </motion.div>
                ))}
              </div>

              <div className="mt-12 pt-8 border-t border-gray-700/50">
                <button 
                  onClick={() => setIsModalOpen(true)} 
                  style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', padding: '16px 0', background: 'linear-gradient(135deg, #d4af37 0%, #b48608 100%)', color: 'black', fontWeight: 'bold', fontSize: '1.2rem', borderRadius: '8px', boxShadow: '0 0 20px rgba(212,175,55,0.4)', border: 'none', cursor: 'pointer', transition: 'transform 0.2s' }} onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.03)'} onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                >
                  Submit Resume to HR
                </button>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
        >
          <div className="fin-card relative overflow-hidden" style={{ padding: '5rem 4rem', textAlign: 'center', borderTop: '4px solid #3b82f6', background: 'linear-gradient(135deg, rgba(30, 58, 138, 0.15) 0%, rgba(8, 12, 20, 0.95) 100%)' }}>
            {/* Background glow effect */}
            <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '300px', height: '300px', borderRadius: '50%', background: 'rgba(59, 130, 246, 0.06)', filter: 'blur(48px)', pointerEvents: 'none' }} />
            <div style={{ position: 'relative', zIndex: 1 }}>
              <div style={{ width: '80px', height: '80px', borderRadius: '20px', background: 'rgba(59,130,246,0.08)', border: '1px solid rgba(59,130,246,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 2.5rem' }}>
                <HeartHandshake size={40} style={{ color: '#60a5fa', filter: 'drop-shadow(0 0 10px rgba(59,130,246,0.6))' }} />
              </div>
              <h3 style={{ fontSize: '2.5rem', fontWeight: 800, color: 'white', margin: '0 0 1.5rem' }}>Execution Requires Excellence</h3>
              <p style={{ color: '#94a3b8', fontSize: '1.15rem', lineHeight: 1.8, maxWidth: '700px', margin: '0 auto 2.5rem' }}>
                Candidates are selected and promoted purely based on merits. Our engineers and researchers are inspired by working alongside the most talented people in the industry, delivering solutions that redefine the future of algorithmic finance.
              </p>
              <span style={{ display: 'inline-block', color: '#d4af37', fontWeight: 800, fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '3px', borderBottom: '2px solid #d4af37', paddingBottom: '4px' }}>
                Uncompromising Standards.
              </span>
            </div>
          </div>
        </motion.div>

      </div>

      {/* Application Modal */}
      {isModalOpen && (
        <div style={{ position: 'fixed', inset: 0, zIndex: 9999, display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(0, 0, 0, 0.8)', backdropFilter: 'blur(8px)' }}>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="fin-card relative"
            style={{ width: '90%', maxWidth: '600px', padding: '3rem', borderTop: '4px solid #d4af37', background: 'linear-gradient(180deg, rgba(15, 23, 42, 0.95) 0%, rgba(8, 12, 20, 1) 100%)', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)' }}
          >
            <button onClick={() => setIsModalOpen(false)} style={{ position: 'absolute', top: '25px', right: '25px', background: 'transparent', border: 'none', color: '#94a3b8', cursor: 'pointer', transition: 'color 0.2s' }} onMouseOver={(e) => e.currentTarget.style.color = 'white'} onMouseOut={(e) => e.currentTarget.style.color = '#94a3b8'}>
              <X size={28} />
            </button>
            <h2 style={{ fontSize: '2rem', fontWeight: 800, color: 'white', marginBottom: '0.5rem' }}>Application Form</h2>
            <p style={{ color: '#94a3b8', marginBottom: '2rem' }}>Submit your details and CV for consideration.</p>
            
            <form onSubmit={(e) => { e.preventDefault(); alert("Application Submitted successfully! Our HR team will review your profile and contact you soon."); setIsModalOpen(false); }} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div>
                <label style={{ display: 'block', color: '#cbd5e1', marginBottom: '0.5rem', fontSize: '0.85rem', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px' }}>Full Name</label>
                <input type="text" required style={{ width: '100%', boxSizing: 'border-box', padding: '14px 16px', borderRadius: '8px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', color: 'white', outline: 'none', fontSize: '1rem' }} placeholder="John Doe" />
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                <div>
                  <label style={{ display: 'block', color: '#cbd5e1', marginBottom: '0.5rem', fontSize: '0.85rem', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px' }}>Email</label>
                  <input type="email" required style={{ width: '100%', boxSizing: 'border-box', padding: '14px 16px', borderRadius: '8px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', color: 'white', outline: 'none', fontSize: '1rem' }} placeholder="john@example.com" />
                </div>
                <div>
                  <label style={{ display: 'block', color: '#cbd5e1', marginBottom: '0.5rem', fontSize: '0.85rem', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px' }}>Phone Number</label>
                  <input type="tel" required style={{ width: '100%', boxSizing: 'border-box', padding: '14px 16px', borderRadius: '8px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', color: 'white', outline: 'none', fontSize: '1rem' }} placeholder="+91 98765 43210" />
                </div>
              </div>
              <div>
                <label style={{ display: 'block', color: '#cbd5e1', marginBottom: '0.5rem', fontSize: '0.85rem', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px' }}>Applying For</label>
                <select required style={{ width: '100%', boxSizing: 'border-box', padding: '14px 16px', borderRadius: '8px', background: 'rgba(15, 23, 42, 1)', border: '1px solid rgba(255,255,255,0.1)', color: 'white', outline: 'none', cursor: 'pointer', fontSize: '1rem' }}>
                  <option value="">Select a role...</option>
                  <option value="quant">Quantitative Analyst</option>
                  <option value="algo">Algorithmic Trader</option>
                  <option value="dev">Software Developer (Low Latency)</option>
                  <option value="data">Data Scientist / ML Engineer</option>
                  <option value="devops">DevOps & Infrastructure Engineer</option>
                </select>
              </div>
              <div>
                <label style={{ display: 'block', color: '#cbd5e1', marginBottom: '0.5rem', fontSize: '0.85rem', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px' }}>Resume / CV (PDF)</label>
                <input type="file" accept=".pdf,.doc,.docx" required style={{ width: '100%', boxSizing: 'border-box', padding: '12px', borderRadius: '8px', background: 'rgba(255,255,255,0.02)', border: '1px dashed rgba(212,175,55,0.5)', color: '#94a3b8', cursor: 'pointer', fontSize: '0.9rem' }} />
              </div>
              <button type="submit" className="btn-gold-solid" style={{ marginTop: '1rem', padding: '16px', border: 'none', fontSize: '1.2rem', fontWeight: 'bold', borderRadius: '8px', cursor: 'pointer' }}>
                Submit Application
              </button>
            </form>
          </motion.div>
        </div>
      )}
    </div>
  );
}
