import { useState } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { BookOpen, GraduationCap, Code, Rocket, Clock, CheckCircle2, X, BrainCircuit, Navigation, Laptop, Target } from 'lucide-react';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { db, storage } from '../firebase';
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
          <h1 className="page-title">Quantitative Internships</h1>
          <p className="page-subtitle max-w-4xl mx-auto mb-8" style={{ textAlign: 'center' }}>
             We offer structured internship programs for college students who are passionate about finance, technology, and data. Experience the raw intersection of financial engineering and quantitative modeling.
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
        <div style={{ position: 'fixed', inset: 0, zIndex: 9999, display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(0, 0, 0, 0.8)', backdropFilter: 'blur(8px)', padding: '2rem 1rem' }}>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="fin-card relative"
            style={{ width: '100%', maxWidth: '600px', maxHeight: '100%', overflowY: 'auto', padding: '3rem', borderTop: '4px solid #d4af37', background: 'linear-gradient(180deg, rgba(15, 23, 42, 0.95) 0%, rgba(8, 12, 20, 1) 100%)', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)', borderRadius: '16px' }}
          >
            <button onClick={() => setIsModalOpen(false)} style={{ position: 'absolute', top: '25px', right: '25px', background: 'transparent', border: 'none', color: '#94a3b8', cursor: 'pointer', transition: 'color 0.2s', zIndex: 10 }} onMouseOver={(e) => e.currentTarget.style.color = 'white'} onMouseOut={(e) => e.currentTarget.style.color = '#94a3b8'}>
              <X size={28} />
            </button>
            <h2 style={{ fontSize: '2rem', fontWeight: 800, color: 'white', marginBottom: '0.5rem' }}>Internship Application Form</h2>
            <p style={{ color: '#94a3b8', marginBottom: '2rem' }}>We review intern applications on a rolling basis.</p>
            
            <form onSubmit={async (e) => { 
                e.preventDefault(); 
                const formData = new FormData(e.target);
                const data = Object.fromEntries(formData.entries());
                const file = data.resume;
                delete data.resume; 
                try {
                  let resumeUrl = null;
                  if (file && file.size > 0) {
                    const storageRef = ref(storage, `resumes/internships/${Date.now()}_${file.name}`);
                    const snapshot = await uploadBytes(storageRef, file);
                    resumeUrl = await getDownloadURL(snapshot.ref);
                  }
                  await addDoc(collection(db, "internship_applications"), { ...data, resumeUrl, timestamp: serverTimestamp() });
                  alert("Internship Application Submitted successfully!"); 
                  setIsModalOpen(false); 
                } catch (err) { console.error(err); alert("Error submitting application."); }
              }} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div>
                <label style={{ display: 'block', color: '#cbd5e1', marginBottom: '0.5rem', fontSize: '0.85rem', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px' }}>Full Name *</label>
                <input name="fullName" type="text" required style={{ width: '100%', boxSizing: 'border-box', padding: '14px 16px', borderRadius: '8px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', color: 'white', outline: 'none', fontSize: '1rem' }} placeholder="John Doe" />
              </div>
              <div className="form-grid-2">
                <div>
                  <label style={{ display: 'block', color: '#cbd5e1', marginBottom: '0.5rem', fontSize: '0.85rem', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px' }}>Email *</label>
                  <input name="email" type="email" required style={{ width: '100%', boxSizing: 'border-box', padding: '14px 16px', borderRadius: '8px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', color: 'white', outline: 'none', fontSize: '1rem' }} placeholder="john@university.edu" />
                </div>
                <div>
                  <label style={{ display: 'block', color: '#cbd5e1', marginBottom: '0.5rem', fontSize: '0.85rem', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px' }}>Phone Number *</label>
                  <input name="phone" type="tel" required style={{ width: '100%', boxSizing: 'border-box', padding: '14px 16px', borderRadius: '8px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', color: 'white', outline: 'none', fontSize: '1rem' }} placeholder="+91 98765 43210" />
                </div>
              </div>

              {/* Education Info */}
              <div style={{ padding: '1.5rem', background: 'rgba(255,255,255,0.02)', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
                <h3 style={{ color: '#d4af37', fontSize: '1.1rem', fontWeight: 'bold', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  Academic Profile
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                  <div className="form-grid-2">
                    <div>
                      <label style={{ display: 'block', color: '#cbd5e1', marginBottom: '0.5rem', fontSize: '0.85rem', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px' }}>University/College *</label>
                      <input name="university" type="text" required style={{ width: '100%', boxSizing: 'border-box', padding: '14px 16px', borderRadius: '8px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', color: 'white', outline: 'none', fontSize: '1rem' }} placeholder="e.g. Stanford University" />
                    </div>
                    <div>
                      <label style={{ display: 'block', color: '#cbd5e1', marginBottom: '0.5rem', fontSize: '0.85rem', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px' }}>Year of Study *</label>
                      <select name="yearOfStudy" required style={{ width: '100%', boxSizing: 'border-box', padding: '14px 16px', borderRadius: '8px', background: 'rgba(15, 23, 42, 1)', border: '1px solid rgba(255,255,255,0.1)', color: 'white', outline: 'none', cursor: 'pointer', fontSize: '1rem' }}>
                        <option value="">Select year...</option>
                        <option value="1">1st Year</option>
                        <option value="2">2nd Year</option>
                        <option value="3">3rd Year (Penultimate)</option>
                        <option value="4">4th Year / Final Year</option>
                        <option value="grad">Already Graduated</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-grid-2">
                    <div>
                      <label style={{ display: 'block', color: '#cbd5e1', marginBottom: '0.5rem', fontSize: '0.85rem', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px' }}>Degree Major *</label>
                      <input name="degreeMajor" type="text" required style={{ width: '100%', boxSizing: 'border-box', padding: '14px 16px', borderRadius: '8px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', color: 'white', outline: 'none', fontSize: '1rem' }} placeholder="e.g. Computer Science" />
                    </div>
                    <div>
                      <label style={{ display: 'block', color: '#cbd5e1', marginBottom: '0.5rem', fontSize: '0.85rem', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px' }}>CGPA / Percentage *</label>
                      <input name="cgpa" type="text" required style={{ width: '100%', boxSizing: 'border-box', padding: '14px 16px', borderRadius: '8px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', color: 'white', outline: 'none', fontSize: '1rem' }} placeholder="e.g. 8.5/10" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Preferences & Links */}
              <div style={{ padding: '1.5rem', background: 'rgba(255,255,255,0.02)', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
                <h3 style={{ color: '#d4af37', fontSize: '1.1rem', fontWeight: 'bold', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  Availability & Links
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                  <div className="form-grid-2">
                    <div>
                      <label style={{ display: 'block', color: '#cbd5e1', marginBottom: '0.5rem', fontSize: '0.85rem', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px' }}>Duration *</label>
                      <select name="duration" required style={{ width: '100%', boxSizing: 'border-box', padding: '14px 16px', borderRadius: '8px', background: 'rgba(15, 23, 42, 1)', border: '1px solid rgba(255,255,255,0.1)', color: 'white', outline: 'none', cursor: 'pointer', fontSize: '1rem' }}>
                        <option value="">Select duration...</option>
                        <option value="2mo">2 Months (Summer)</option>
                        <option value="6mo">6 Months (Semester Placement)</option>
                        <option value="part">Part-Time (During semester)</option>
                      </select>
                    </div>
                    <div>
                      <label style={{ display: 'block', color: '#cbd5e1', marginBottom: '0.5rem', fontSize: '0.85rem', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px' }}>Core Tech Stack</label>
                      <input name="techStack" type="text" style={{ width: '100%', boxSizing: 'border-box', padding: '14px 16px', borderRadius: '8px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', color: 'white', outline: 'none', fontSize: '1rem' }} placeholder="e.g. C++, Python, DSA" />
                    </div>
                  </div>

                  <div className="form-grid-2">
                    <div>
                      <label style={{ display: 'block', color: '#cbd5e1', marginBottom: '0.5rem', fontSize: '0.85rem', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px' }}>LinkedIn Profile *</label>
                      <input name="linkedin" type="url" required style={{ width: '100%', boxSizing: 'border-box', padding: '14px 16px', borderRadius: '8px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', color: 'white', outline: 'none', fontSize: '1rem' }} placeholder="https://linkedin.com/in/..." />
                    </div>
                    <div>
                      <label style={{ display: 'block', color: '#cbd5e1', marginBottom: '0.5rem', fontSize: '0.85rem', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px' }}>GitHub / Portfolio *</label>
                      <input name="github" type="url" required style={{ width: '100%', boxSizing: 'border-box', padding: '14px 16px', borderRadius: '8px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', color: 'white', outline: 'none', fontSize: '1rem' }} placeholder="https://github.com/..." />
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <label style={{ display: 'block', color: '#cbd5e1', marginBottom: '0.5rem', fontSize: '0.85rem', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px' }}>Resume / CV (PDF) *</label>
                <input name="resume" type="file" accept=".pdf,.doc,.docx" required style={{ width: '100%', boxSizing: 'border-box', padding: '12px', borderRadius: '8px', background: 'rgba(255,255,255,0.02)', border: '1px dashed rgba(212,175,55,0.5)', color: '#94a3b8', cursor: 'pointer', fontSize: '0.9rem' }} />
              </div>
              <button type="submit" className="btn-gold-solid" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '0.5rem', padding: '16px', background: 'linear-gradient(135deg, #d4af37 0%, #b48608 100%)', color: 'black', border: 'none', fontSize: '1.2rem', fontWeight: 'bold', borderRadius: '8px', cursor: 'pointer', flexShrink: 0 }}>
                Submit Internship Application
              </button>
            </form>
          </motion.div>
        </div>
      )}
    </div>
  );
}
