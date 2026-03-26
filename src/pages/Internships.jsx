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

  const internships = [
    {
      title: "Equity Research Intern",
      icon: <Laptop size={24} />,
      color: "#006D6D",
      overview: "The intern will support equity analysis by combining fundamental and technical research to identify potential trading and investment opportunities in Indian markets.",
      responsibilities: [
        "Conduct fundamental analysis including financial statements, sector trends, and macroeconomic factors",
        "Perform technical analysis using price patterns, indicators, and momentum signals",
        "Track and analyze company news, earnings, and market developments",
        "Assist in preparing research reports and trading ideas",
        "Maintain data and support ongoing research initiatives"
      ],
      skills: [
        "Basic understanding of equity markets",
        "Interest in financial analysis",
        "Familiarity with Excel / basic data tools"
      ]
    },
    {
      title: "Derivatives Intern",
      icon: <Target size={24} />,
      color: "#006D6D",
      overview: "The intern will gain exposure to futures and options markets, focusing on strategy development, market tracking, and risk management concepts.",
      responsibilities: [
        "Assist in monitoring index and stock futures and options positions",
        "Support development of options strategies (spreads, hedging, income strategies)",
        "Track option chain data and key metrics (OI, IV, Greeks basics)",
        "Analyze market movements and identify trading opportunities",
        "Prepare basic reports on strategy performance and risk exposure"
      ],
      skills: [
        "Basic understanding of derivatives markets",
        "Interest in options trading and strategies",
        "Analytical mindset"
      ]
    },
    {
      title: "Quantitative Research Intern",
      icon: <BrainCircuit size={24} />,
      color: "#005858",
      overview: "The intern will work on developing and testing data-driven trading models, focusing on structured analysis and systematic approaches.",
      responsibilities: [
        "Assist in building quantitative models using market data",
        "Perform data analysis and basic backtesting of strategies",
        "Work with time series data and statistical techniques",
        "Support development of algorithmic trading ideas",
        "Document findings and assist in improving model performance"
      ],
      skills: [
        "Basic knowledge of statistics and financial markets",
        "Familiarity with Python (preferred but not mandatory)",
        "Strong problem-solving ability"
      ]
    },
    {
      title: "Business Development Intern",
      icon: <Rocket size={24} />,
      color: "#006D6D",
      overview: "The intern will support the company’s growth initiatives by working on client outreach, partnerships, and market positioning.",
      responsibilities: [
        "Assist in identifying and engaging with potential clients and partners",
        "Support creation of presentations, proposals, and communication materials",
        "Conduct research on market trends and competitor positioning",
        "Maintain and update client databases and outreach records",
        "Coordinate with internal teams for business and marketing initiatives"
      ],
      skills: [
        "Strong communication and interpersonal skills",
        "Basic understanding of financial markets (preferred)",
        "Interest in business development and client interaction"
      ]
    }
  ];

  return (
    <div className="page-wrapper pb-24">
      <div className="container relative z-10">
        <div className="page-header mt-12 mb-16">
          <div className="section-subtitle">Early Careers</div>
          <h1 className="page-title">Structured Internships</h1>
          <p className="page-subtitle max-w-4xl mx-auto mb-8" style={{ textAlign: 'center', lineHeight: 1.8 }}>
            Gaining practical exposure through an internship is essential before entering a full-time role, especially in dynamic fields like financial markets and trading. While academic learning provides conceptual clarity, real-world experience helps develop decision-making ability, market understanding, risk awareness, and discipline. An internship allows candidates to apply theoretical knowledge in live market environments, understand workflows, and build the analytical and professional skills required to perform effectively in high-responsibility roles.
          </p>
        </div>

        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <button
            onClick={() => setIsModalOpen(true)}
            style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', padding: '16px 40px', background: 'linear-gradient(135deg, #006D6D 0%, #005858 100%)', color: 'white', fontWeight: 'bold', fontSize: '1.2rem', borderRadius: '10px', boxShadow: '0 4px 20px rgba(0, 109, 109,0.35)', border: 'none', cursor: 'pointer', transition: 'transform 0.2s, box-shadow 0.2s' }} onMouseOver={(e) => { e.currentTarget.style.transform = 'scale(1.03)'; e.currentTarget.style.boxShadow = '0 8px 30px rgba(0, 109, 109,0.5)'; }} onMouseOut={(e) => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 109, 109,0.35)'; }}
          >
            Apply for Internship
          </button>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem', marginBottom: '6rem' }}>
          {internships.map((internship, idx) => (
            <motion.div key={idx} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
               <div className="fin-card" style={{ padding: '3.5rem', borderTop: `5px solid ${internship.color}`, background: 'linear-gradient(160deg, #f0f8f8 0%, white 100%)' }}>
                  
                  {/* Header Section */}
                  <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flexWrap: 'wrap', gap: '2rem', marginBottom: '3rem', borderBottom: '1px solid rgba(0, 109, 109,0.1)', paddingBottom: '2.5rem' }}>
                    <div style={{ flex: '1 1 500px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                        <div style={{ width: '60px', height: '60px', backgroundColor: `${internship.color}12`, border: `1px solid ${internship.color}30`, borderRadius: '14px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: internship.color }}>
                          {internship.icon}
                        </div>
                        <h2 style={{ fontSize: '2.2rem', fontWeight: 800, color: '#011f1f', margin: 0 }}>{internship.title}</h2>
                      </div>
                      <p style={{ color: '#2d5c5c', fontSize: '1.1rem', lineHeight: 1.6, marginTop: '1rem', maxWidth: '800px', margin: 0 }}>
                        {internship.overview}
                      </p>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="grid-2-cols" style={{ gap: '4rem' }}>
                    
                    {/* Left Column: Responsibilities */}
                    <div>
                      <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#011f1f', marginBottom: '1.5rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
                         Key Responsibilities
                      </h3>
                      <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem', padding: 0, margin: 0, listStyle: 'none' }}>
                         {internship.responsibilities.map((resp, ridx) => (
                            <li key={ridx} style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', color: '#2d5c5c' }}>
                               <div style={{ width: '8px', height: '8px', backgroundColor: internship.color, borderRadius: '2px', marginTop: '6px', flexShrink: 0, transform: 'rotate(45deg)' }}></div>
                               <span style={{ lineHeight: 1.6, fontSize: '1.05rem' }}>{resp}</span>
                            </li>
                         ))}
                      </ul>
                    </div>

                    {/* Right Column: Requirements */}
                    <div>
                       <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#011f1f', marginBottom: '1.5rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
                          Skills Required
                       </h3>
                       <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem', padding: 0, margin: 0, listStyle: 'none' }}>
                         {internship.skills.map((req, ridx) => (
                            <li key={ridx} style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', color: '#2d5c5c' }}>
                               <CheckCircle2 size={20} style={{ color: internship.color, flexShrink: 0, marginTop: '2px' }} />
                               <span style={{ lineHeight: 1.6, fontSize: '1.05rem' }}>{req}</span>
                            </li>
                         ))}
                       </ul>
                    </div>
                    
                  </div>

               </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Internship Application Modal */}
      {isModalOpen && (
        <div style={{ position: 'fixed', inset: 0, zIndex: 9999, display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(13, 46, 43, 0.55)', backdropFilter: 'blur(8px)', padding: '2rem 1rem' }}>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="fin-card relative"
            style={{ width: '100%', maxWidth: '600px', maxHeight: '100%', overflowY: 'auto', padding: '3rem', borderTop: '4px solid #006D6D', background: '#ffffff', boxShadow: '0 25px 60px rgba(0, 109, 109,0.25)', borderRadius: '16px' }}
          >
            <button onClick={() => setIsModalOpen(false)} style={{ position: 'absolute', top: '25px', right: '25px', background: 'transparent', border: 'none', color: '#5a9090', cursor: 'pointer', transition: 'color 0.2s', zIndex: 10 }} onMouseOver={(e) => e.currentTarget.style.color = '#011f1f'} onMouseOut={(e) => e.currentTarget.style.color = '#5a9090'}>
              <X size={28} />
            </button>
            <h2 style={{ fontSize: '2rem', fontWeight: 800, color: '#011f1f', marginBottom: '0.5rem' }}>Internship Application Form</h2>
            <p style={{ color: '#2d5c5c', marginBottom: '2rem' }}>We review intern applications on a rolling basis.</p>
            
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
              {/* Personal Info */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div>
                  <label style={{ display: 'block', color: '#2d5c5c', marginBottom: '0.5rem', fontSize: '0.8rem', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px' }}>Full Name *</label>
                  <input name="fullName" type="text" required                    style={{ width: '100%', boxSizing: 'border-box', padding: '14px 16px', borderRadius: '8px', background: '#f0f8f8', border: '1.5px solid rgba(0, 109, 109,0.15)', color: '#011f1f', outline: 'none', fontSize: '1rem' }} placeholder="John Doe" />
                </div>
                <div className="form-grid-2">
                  <div>
                    <label style={{ display: 'block', color: '#2d5c5c', marginBottom: '0.5rem', fontSize: '0.8rem', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px' }}>Email *</label>
                    <input name="email" type="email" required                    style={{ width: '100%', boxSizing: 'border-box', padding: '14px 16px', borderRadius: '8px', background: '#f0f8f8', border: '1.5px solid rgba(0, 109, 109,0.15)', color: '#011f1f', outline: 'none', fontSize: '1rem' }} placeholder="john@university.edu" />
                  </div>
                  <div>
                    <label style={{ display: 'block', color: '#2d5c5c', marginBottom: '0.5rem', fontSize: '0.8rem', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px' }}>Phone Number *</label>
                    <input name="phone" type="tel" required                    style={{ width: '100%', boxSizing: 'border-box', padding: '14px 16px', borderRadius: '8px', background: '#f0f8f8', border: '1.5px solid rgba(0, 109, 109,0.15)', color: '#011f1f', outline: 'none', fontSize: '1rem' }} placeholder="+91 98765 43210" />
                  </div>
                </div>
                <div>
                  <label style={{ display: 'block', color: '#2d5c5c', marginBottom: '0.5rem', fontSize: '0.8rem', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px' }}>Applying For *</label>
                  <select name="applyingFor" required style={{ width: '100%', padding: '12px', borderRadius: '8px', background: 'rgba(15, 23, 42, 1)', border: '1px solid rgba(255,255,255,0.1)', color: 'white', outline: 'none' }}>
                    <option value="">Select...</option>
                    <option value="Equity Research Intern">Equity Research Intern</option>
                    <option value="Derivatives Intern">Derivatives Intern</option>
                    <option value="Quantitative Research Intern">Quantitative Research Intern</option>
                    <option value="Business Development Intern">Business Development Intern</option>
                  </select>
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
                      <label style={{ display: 'block', color: '#2d5c5c', marginBottom: '0.5rem', fontSize: '0.8rem', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px' }}>University/College *</label>
                      <input name="university" type="text" required                    style={{ width: '100%', boxSizing: 'border-box', padding: '14px 16px', borderRadius: '8px', background: '#f0f8f8', border: '1.5px solid rgba(0, 109, 109,0.15)', color: '#011f1f', outline: 'none', fontSize: '1rem' }} placeholder="e.g. Stanford University" />
                    </div>
                    <div>
                      <label style={{ display: 'block', color: '#2d5c5c', marginBottom: '0.5rem', fontSize: '0.8rem', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px' }}>Year of Study *</label>
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
                      <label style={{ display: 'block', color: '#2d5c5c', marginBottom: '0.5rem', fontSize: '0.8rem', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px' }}>Degree Major *</label>
                      <input name="degreeMajor" type="text" required                    style={{ width: '100%', boxSizing: 'border-box', padding: '14px 16px', borderRadius: '8px', background: '#f0f8f8', border: '1.5px solid rgba(0, 109, 109,0.15)', color: '#011f1f', outline: 'none', fontSize: '1rem' }} placeholder="e.g. Computer Science" />
                    </div>
                    <div>
                      <label style={{ display: 'block', color: '#2d5c5c', marginBottom: '0.5rem', fontSize: '0.8rem', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px' }}>CGPA / Percentage *</label>
                      <input name="cgpa" type="text" required                    style={{ width: '100%', boxSizing: 'border-box', padding: '14px 16px', borderRadius: '8px', background: '#f0f8f8', border: '1.5px solid rgba(0, 109, 109,0.15)', color: '#011f1f', outline: 'none', fontSize: '1rem' }} placeholder="e.g. 8.5/10" />
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
                      <label style={{ display: 'block', color: '#2d5c5c', marginBottom: '0.5rem', fontSize: '0.8rem', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px' }}>Duration *</label>
                      <select name="duration" required style={{ width: '100%', boxSizing: 'border-box', padding: '14px 16px', borderRadius: '8px', background: 'rgba(15, 23, 42, 1)', border: '1px solid rgba(255,255,255,0.1)', color: 'white', outline: 'none', cursor: 'pointer', fontSize: '1rem' }}>
                        <option value="">Select duration...</option>
                        <option value="2mo">2 Months (Summer)</option>
                        <option value="6mo">6 Months (Semester Placement)</option>
                        <option value="part">Part-Time (During semester)</option>
                      </select>
                    </div>
                    <div>
                      <label style={{ display: 'block', color: '#2d5c5c', marginBottom: '0.5rem', fontSize: '0.8rem', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px' }}>Core Tech Stack</label>
                      <input name="techStack" type="text"                    style={{ width: '100%', boxSizing: 'border-box', padding: '14px 16px', borderRadius: '8px', background: '#f0f8f8', border: '1.5px solid rgba(0, 109, 109,0.15)', color: '#011f1f', outline: 'none', fontSize: '1rem' }} placeholder="e.g. C++, Python, DSA" />
                    </div>
                  </div>

                  <div className="form-grid-2">
                    <div>
                      <label style={{ display: 'block', color: '#2d5c5c', marginBottom: '0.5rem', fontSize: '0.8rem', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px' }}>LinkedIn Profile *</label>
                      <input name="linkedin" type="url" required                    style={{ width: '100%', boxSizing: 'border-box', padding: '14px 16px', borderRadius: '8px', background: '#f0f8f8', border: '1.5px solid rgba(0, 109, 109,0.15)', color: '#011f1f', outline: 'none', fontSize: '1rem' }} placeholder="https://linkedin.com/in/..." />
                    </div>
                    <div>
                      <label style={{ display: 'block', color: '#2d5c5c', marginBottom: '0.5rem', fontSize: '0.8rem', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px' }}>GitHub / Portfolio *</label>
                      <input name="github" type="url" required                    style={{ width: '100%', boxSizing: 'border-box', padding: '14px 16px', borderRadius: '8px', background: '#f0f8f8', border: '1.5px solid rgba(0, 109, 109,0.15)', color: '#011f1f', outline: 'none', fontSize: '1rem' }} placeholder="https://github.com/..." />
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
