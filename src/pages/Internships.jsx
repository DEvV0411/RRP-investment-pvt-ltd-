import { useState } from 'react';
import { motion } from 'framer-motion';
import { Target, CheckCircle2, Navigation, Laptop, BrainCircuit, X } from 'lucide-react';
import './Pages.css';

export default function Internships() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const gains = [
    "Hands-on experience with live trading environments",
    "Training in algorithmic trading and AI models",
    "Mentorship from industry experts",
    "Exposure to platforms like Falcon and Bloomberg systems",
    "Opportunity for full-time placement based on performance"
  ];

  const requirements = [
    "Students pursuing Engineering, Computer Science, Finance, Mathematics, or related fields",
    "Strong analytical and problem-solving skills",
    "Basic knowledge of programming (Python, C++, or similar) is preferred"
  ];

  return (
    <div className="page-wrapper pb-24">
      <div className="container relative z-10">
        <div className="page-header mt-12 mb-16">
          <div className="section-subtitle">Early Careers</div>
          <h1 className="page-title">HFT Internships</h1>
          <p className="page-subtitle max-w-4xl mx-auto mb-8" style={{ textAlign: 'center' }}>
             We offer structured internship programs for college students who are passionate about finance, technology, and data. Experience the raw intersection of high-frequency engineering and quantitative modeling.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem', marginBottom: '6rem' }}>
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
             <div className="fin-card" style={{ padding: '4rem', borderTop: '5px solid #d4af37', background: 'linear-gradient(180deg, rgba(15, 23, 42, 0.7) 0%, rgba(8, 12, 20, 0.95) 100%)' }}>
                
                {/* Header Section */}
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flexWrap: 'wrap', gap: '2rem', marginBottom: '4rem', borderBottom: '1px solid rgba(255, 255, 255, 0.05)', paddingBottom: '3rem' }}>
                  <div style={{ flex: '1 1 500px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                      <div style={{ width: '60px', height: '60px', backgroundColor: 'rgba(212, 175, 55, 0.1)', border: '1px solid rgba(212, 175, 55, 0.3)', borderRadius: '14px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#d4af37' }}>
                        <BrainCircuit size={32} />
                      </div>
                      <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: 'white', margin: 0 }}>Quantitative & <span style={{ color: '#d4af37' }}>Systems Engineering</span></h2>
                    </div>
                    <p style={{ color: '#94a3b8', fontSize: '1.2rem', lineHeight: 1.6, marginTop: '1rem', maxWidth: '800px', margin: 0 }}>
                      Join the core algorithms and systems team. Help build and deploy ultra-low latency frameworks directly connected to institutional liquidity pools.
                    </p>
                  </div>
                  
                  <div style={{ minWidth: '220px', display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '0.75rem' }}>
                     <span style={{ color: '#64748b', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '2px', fontWeight: 'bold' }}>Cycle</span>
                     <span style={{ color: 'white', fontWeight: 800, fontSize: '1.5rem', backgroundColor: 'rgba(255,255,255,0.05)', padding: '0.5rem 1.5rem', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)' }}>Rolling Application</span>
                     <button onClick={() => setIsModalOpen(true)} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', marginTop: '0.5rem', padding: '14px 0', background: 'linear-gradient(135deg, #d4af37 0%, #b48608 100%)', color: 'black', fontWeight: 'bold', fontSize: '1.1rem', borderRadius: '6px', boxShadow: '0 0 15px rgba(212,175,55,0.3)', border: 'none', cursor: 'pointer', transition: 'transform 0.2s' }} onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.04)'} onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}>
                        Apply Now <Navigation size={18} style={{ marginLeft: '8px' }} />
                     </button>
                  </div>
                </div>

                {/* Body Content */}
                <div className="grid-2-cols" style={{ gap: '4rem' }}>
                  
                  {/* Left Column: What You'll Gain */}
                  <div>
                    <h3 style={{ fontSize: '1.6rem', fontWeight: 800, color: 'white', marginBottom: '2.5rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                       <span style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'rgba(59, 130, 246, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid rgba(59, 130, 246, 0.3)', color: '#60a5fa' }}><Laptop size={20} /></span>
                       What You’ll Gain
                    </h3>
                    <ul style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', padding: 0, margin: 0, listStyle: 'none' }}>
                       {gains.map((gain, idx) => (
                          <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '1.2rem', color: '#cbd5e1' }}>
                             <CheckCircle2 size={24} style={{ color: '#3b82f6', flexShrink: 0, marginTop: '2px' }} />
                             <span style={{ lineHeight: 1.6, fontSize: '1.1rem' }}>{gain}</span>
                          </li>
                       ))}
                    </ul>
                  </div>

                  {/* Right Column: Requirements */}
                  <div>
                     <h3 style={{ fontSize: '1.6rem', fontWeight: 800, color: 'white', marginBottom: '2.5rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                        <span style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'rgba(212, 175, 55, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid rgba(212, 175, 55, 0.3)', color: '#d4af37' }}><Target size={20} /></span>
                        Who Can Apply
                     </h3>
                     <ul style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', padding: 0, margin: '0 0 2.5rem 0', listStyle: 'none' }}>
                       {requirements.map((req, idx) => (
                          <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '1.2rem', color: '#cbd5e1' }}>
                             <div style={{ width: '10px', height: '10px', backgroundColor: '#d4af37', borderRadius: '2px', marginTop: '8px', flexShrink: 0, transform: 'rotate(45deg)' }}></div>
                             <span style={{ lineHeight: 1.6, fontSize: '1.1rem' }}>{req}</span>
                          </li>
                       ))}
                     </ul>
                  </div>
                  
                </div>

             </div>
          </motion.div>
        </div>
      </div>

      {/* Internship Application Modal */}
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
            <h2 style={{ fontSize: '2rem', fontWeight: 800, color: 'white', marginBottom: '0.5rem' }}>Internship Application Form</h2>
            <p style={{ color: '#94a3b8', marginBottom: '2rem' }}>We review intern applications on a rolling basis.</p>
            
            <form onSubmit={(e) => { e.preventDefault(); alert("Internship Application Submitted successfully! Our campus recruitment team will review your profile."); setIsModalOpen(false); }} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div>
                <label style={{ display: 'block', color: '#cbd5e1', marginBottom: '0.5rem', fontSize: '0.85rem', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px' }}>Full Name</label>
                <input type="text" required style={{ width: '100%', boxSizing: 'border-box', padding: '14px 16px', borderRadius: '8px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', color: 'white', outline: 'none', fontSize: '1rem' }} placeholder="John Doe" />
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                <div>
                  <label style={{ display: 'block', color: '#cbd5e1', marginBottom: '0.5rem', fontSize: '0.85rem', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px' }}>Email</label>
                  <input type="email" required style={{ width: '100%', boxSizing: 'border-box', padding: '14px 16px', borderRadius: '8px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', color: 'white', outline: 'none', fontSize: '1rem' }} placeholder="john@university.edu" />
                </div>
                <div>
                  <label style={{ display: 'block', color: '#cbd5e1', marginBottom: '0.5rem', fontSize: '0.85rem', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px' }}>University/College</label>
                  <input type="text" required style={{ width: '100%', boxSizing: 'border-box', padding: '14px 16px', borderRadius: '8px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', color: 'white', outline: 'none', fontSize: '1rem' }} placeholder="Stanford University" />
                </div>
              </div>
              <div>
                <label style={{ display: 'block', color: '#cbd5e1', marginBottom: '0.5rem', fontSize: '0.85rem', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px' }}>Degree Focus</label>
                <select required style={{ width: '100%', boxSizing: 'border-box', padding: '14px 16px', borderRadius: '8px', background: 'rgba(15, 23, 42, 1)', border: '1px solid rgba(255,255,255,0.1)', color: 'white', outline: 'none', cursor: 'pointer', fontSize: '1rem' }}>
                  <option value="">Select current degree...</option>
                  <option value="cs">Computer Science / Software Eng</option>
                  <option value="math">Mathematics / Statistics</option>
                  <option value="fin">Quantitative Finance</option>
                  <option value="other">Other STEM Field</option>
                </select>
              </div>
              <div>
                <label style={{ display: 'block', color: '#cbd5e1', marginBottom: '0.5rem', fontSize: '0.85rem', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px' }}>Resume / CV (PDF)</label>
                <input type="file" accept=".pdf,.doc,.docx" required style={{ width: '100%', boxSizing: 'border-box', padding: '12px', borderRadius: '8px', background: 'rgba(255,255,255,0.02)', border: '1px dashed rgba(212,175,55,0.5)', color: '#94a3b8', cursor: 'pointer', fontSize: '0.9rem' }} />
              </div>
              <button type="submit" className="btn-gold-solid" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '1rem', padding: '16px', background: 'linear-gradient(135deg, #d4af37 0%, #b48608 100%)', color: 'black', border: 'none', fontSize: '1.2rem', fontWeight: 'bold', borderRadius: '8px', cursor: 'pointer' }}>
                Submit Internship Application
              </button>
            </form>
          </motion.div>
        </div>
      )}
    </div>
  );
}
