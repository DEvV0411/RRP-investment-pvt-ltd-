import { useState } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { Target, TrendingUp, Code, Database, Cpu, Server, HeartHandshake, CheckCircle2, X } from 'lucide-react';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { db, storage } from '../firebase';
import './Pages.css';
import { Link } from 'react-router-dom';

export default function Careers() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const roles = [
    { 
      title: "Quantitative Analysts", 
      icon: <Target size={24} />,
      overview: "The Quantitative Analyst will be responsible for developing, testing, and refining data-driven trading strategies across equity, futures, and options markets on NSE. The role focuses on applying statistical methods, machine learning models, and financial theory to generate robust and scalable trading signals.",
      responsibilities: [
        "Develop quantitative models using time series analysis, ML/DL techniques, and statistical methods",
        "Design and evaluate equity, futures, and options-based strategies, including Greek-driven frameworks",
        "Conduct backtesting, scenario analysis, and performance evaluation",
        "Integrate fundamental, technical, and macroeconomic factors into model development",
        "Work closely with technology teams to deploy models into production systems",
        "Continuously refine models based on market conditions and risk parameters"
      ],
      skills: [
        "Strong background and Masters in Finance, Mathematics, Statistics, or Engineering",
        "Proficiency in Python (NumPy, Pandas, SciPy, scikit-learn)",
        "Knowledge of financial markets, derivatives, and options Greeks",
        "Experience in time series modeling and machine learning frameworks",
        "Strong analytical and problem-solving ability"
      ]
    },
    { 
      title: "Algorithmic Traders", 
      icon: <TrendingUp size={24} />,
      overview: "The Algorithmic Trader will be responsible for executing and monitoring automated trading strategies, managing positions, and ensuring adherence to defined risk management frameworks. The role bridges strategy and execution, focusing on real-time market interaction.",
      responsibilities: [
        "Execute algorithmic trading strategies in equity, futures, and options segments",
        "Monitor live positions, P&L, and risk exposures",
        "Manage intraday and positional trades, including hedging activities",
        "Track market developments, news, and macro indicators impacting trades",
        "Ensure compliance with risk limits, margin requirements, and execution protocols",
        "Provide feedback to research teams for strategy refinement"
      ],
      skills: [
        "Strong background and Masters in Finance, Mathematics, Statistics, or Engineering",
        "Strong understanding of equity, futures, and options markets",
        "Knowledge of options strategies and Greek management",
        "Familiarity with trading platforms, APIs, and order execution systems",
        "Ability to make quick, data-driven decisions under pressure",
        "Basic programming knowledge (Python preferred)"
      ]
    },
    { 
      title: "Software Developers (Trading Systems)", 
      icon: <Code size={24} />,
      overview: "The Software Developer will design and maintain the company’s algorithmic trading infrastructure, including data pipelines, execution systems, and model deployment frameworks. The role focuses on building scalable, reliable, and efficient systems for real-time trading.",
      responsibilities: [
        "Develop and maintain low-latency trading systems and execution engines",
        "Build real-time data ingestion and processing pipelines",
        "Integrate quantitative models into production environments",
        "Design systems for order management, risk monitoring, and reporting",
        "Ensure system reliability, fault tolerance, and performance optimization",
        "Collaborate with quant and trading teams to translate strategies into code"
      ],
      skills: [
        "Strong background and Masters in Computer Science",
        "Strong programming skills in Python, C++, or Java",
        "Experience with APIs, databases, and distributed systems",
        "Understanding of financial markets and trading workflows (preferred)",
        "Knowledge of low-latency systems and real-time processing",
        "Familiarity with cloud platforms and scalable architectures"
      ]
    }
  ];

  const whyWorkWithUs = "Working with the company offers the opportunity to operate at the intersection of finance, technology, and data science, where ideas are translated into real market applications. The environment encourages analytical thinking, disciplined execution, and continuous learning, with exposure to algorithmic trading, AI/ML-driven strategies, derivatives, and risk management frameworks. Team members work on meaningful problems with direct impact on trading outcomes, supported by a culture that values research, collaboration, and accountability. Alongside professional growth, the company emphasizes a healthy work-life balance, structured work practices, and a supportive team environment. Regular team interactions, knowledge-sharing sessions, and social engagements foster collaboration and a positive workplace culture. Overall, the company provides a platform to build deep expertise in systematic trading and financial markets, while maintaining a balanced and engaging work experience.";

  return (
    <div className="page-wrapper pb-16">
      <div className="page-header mt-8">
        <div className="container text-center">
          <div className="section-subtitle">Full Time Careers</div>
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
            className="page-subtitle max-w-4xl mx-auto text-lg leading-relaxed text-gray-300 mb-8"
          >
            {whyWorkWithUs}
          </motion.p>


        </div>
      </div>

      <div className="container mt-12">
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <button
            onClick={() => setIsModalOpen(true)}
            style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', padding: '16px 40px', background: 'linear-gradient(135deg, #006D6D 0%, #005858 100%)', color: 'white', fontWeight: 'bold', fontSize: '1.2rem', borderRadius: '10px', boxShadow: '0 4px 20px rgba(0, 109, 109,0.35)', border: 'none', cursor: 'pointer', transition: 'transform 0.2s, box-shadow 0.2s' }} onMouseOver={(e) => { e.currentTarget.style.transform = 'scale(1.03)'; e.currentTarget.style.boxShadow = '0 8px 30px rgba(0, 109, 109,0.5)'; }} onMouseOut={(e) => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 109, 109,0.35)'; }}
          >
            Apply Now
          </button>
        </div>

        <div className="flex flex-col gap-12 mb-24">
          {roles.map((role, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="fin-card" style={{ borderTop: '4px solid #006D6D', padding: '3.5rem', background: 'linear-gradient(160deg, #f0f8f8 0%, white 100%)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem', paddingBottom: '1.5rem', borderBottom: '1px solid rgba(0, 109, 109,0.12)' }}>
                  <div style={{ width: '52px', height: '52px', background: 'rgba(0, 109, 109,0.08)', border: '1px solid rgba(0, 109, 109,0.2)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#006D6D' }}>
                    {role.icon}
                  </div>
                  <h2 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#011f1f' }}>{role.title}</h2>
                </div>
                
                <div style={{ marginBottom: '2rem' }}>
                  <h3 style={{ fontSize: '1.1rem', color: '#006D6D', marginBottom: '0.8rem', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px' }}>Role Overview</h3>
                  <p style={{ color: '#2d5c5c', lineHeight: '1.8', fontSize: '1.05rem' }}>{role.overview}</p>
                </div>
                
                <div className="grid-2-cols" style={{ gap: '3rem', alignItems: 'flex-start' }}>
                  <div>
                    <h3 style={{ fontSize: '1.1rem', color: '#006D6D', marginBottom: '1rem', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px' }}>Key Responsibilities</h3>
                    <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', padding: 0, margin: 0, listStyle: 'none' }}>
                      {role.responsibilities.map((req, ridx) => (
                        <li key={ridx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.8rem', color: '#2d5c5c' }}>
                          <div style={{ width: '8px', height: '8px', backgroundColor: '#006D6D', borderRadius: '2px', marginTop: '8px', flexShrink: 0, transform: 'rotate(45deg)' }}></div>
                          <span style={{ lineHeight: 1.6 }}>{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.1rem', color: '#006D6D', marginBottom: '1rem', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px' }}>Skills & Qualifications</h3>
                    <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', padding: 0, margin: 0, listStyle: 'none' }}>
                      {role.skills.map((skill, sidx) => (
                        <li key={sidx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.8rem', color: '#2d5c5c' }}>
                          <div style={{ width: '8px', height: '8px', backgroundColor: '#006D6D', borderRadius: '2px', marginTop: '8px', flexShrink: 0, transform: 'rotate(45deg)' }}></div>
                          <span style={{ lineHeight: 1.6 }}>{skill}</span>
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

      {/* Application Modal */}
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
            <h2 style={{ fontSize: '2rem', fontWeight: 800, color: '#011f1f', marginBottom: '0.5rem' }}>Application Form</h2>
            <p style={{ color: '#2d5c5c', marginBottom: '2rem', lineHeight: '1.6' }}>
              Thank you for your interest in joining our company.<br/>
              Please provide details about your educational background and professional experience. Shortlisted candidates will be contacted for further stages.
            </p>
            
            <form onSubmit={async (e) => { 
                e.preventDefault(); 
                const formData = new FormData(e.target);
                const data = Object.fromEntries(formData.entries());
                const file = data.resume;
                delete data.resume; 
                try {
                  let resumeUrl = null;
                  if (file && file.size > 0) {
                    if (file.size > 1024 * 1024) {
                      alert("File size exceeds 1 MB limit.");
                      return;
                    }
                    const storageRef = ref(storage, `resumes/careers/${Date.now()}_${file.name}`);
                    const snapshot = await uploadBytes(storageRef, file);
                    resumeUrl = await getDownloadURL(snapshot.ref);
                  }
                  await addDoc(collection(db, "career_applications"), { ...data, resumeUrl, timestamp: serverTimestamp() });
                  alert("Application Submitted successfully! Our HR team will review your profile and contact you soon."); 
                  setIsModalOpen(false); 
                } catch (err) { console.error(err); alert("Error submitting application."); }
              }} style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              
              {/* SECTION 1: Personal Information */}
              <div>
                <h3 style={{ color: '#006D6D', fontSize: '1.1rem', fontWeight: 'bold', marginBottom: '1rem', borderBottom: '1px solid rgba(0, 109, 109,0.2)', paddingBottom: '0.5rem' }}>SECTION 1: Personal Information</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <div>
                    <label style={{ display: 'block', color: '#2d5c5c', marginBottom: '0.5rem', fontSize: '0.8rem', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px' }}>Full Name *</label>
                    <input name="fullName" type="text" required                        style={{ width: '100%', padding: '12px', borderRadius: '8px', background: '#f0f8f8', border: '1.5px solid rgba(0, 109, 109,0.15)', color: '#011f1f', outline: 'none', boxSizing: 'border-box' }} />
                  </div>
                  <div className="form-grid-2">
                    <div>
                      <label style={{ display: 'block', color: '#2d5c5c', marginBottom: '0.5rem', fontSize: '0.8rem', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px' }}>Email Address *</label>
                      <input name="email" type="email" required                        style={{ width: '100%', padding: '12px', borderRadius: '8px', background: '#f0f8f8', border: '1.5px solid rgba(0, 109, 109,0.15)', color: '#011f1f', outline: 'none', boxSizing: 'border-box' }} />
                    </div>
                    <div>
                      <label style={{ display: 'block', color: '#2d5c5c', marginBottom: '0.5rem', fontSize: '0.8rem', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px' }}>Mobile Number *</label>
                      <input name="phone" type="tel" required                        style={{ width: '100%', padding: '12px', borderRadius: '8px', background: '#f0f8f8', border: '1.5px solid rgba(0, 109, 109,0.15)', color: '#011f1f', outline: 'none', boxSizing: 'border-box' }} />
                    </div>
                  </div>
                  <div>
                    <label style={{ display: 'block', color: '#2d5c5c', marginBottom: '0.5rem', fontSize: '0.8rem', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px' }}>Current Location (City, Country) *</label>
                    <input name="location" type="text" required                        style={{ width: '100%', padding: '12px', borderRadius: '8px', background: '#f0f8f8', border: '1.5px solid rgba(0, 109, 109,0.15)', color: '#011f1f', outline: 'none', boxSizing: 'border-box' }} />
                  </div>
                </div>
              </div>

              {/* SECTION 2: Educational Background */}
              <div>
                <h3 style={{ color: '#006D6D', fontSize: '1.1rem', fontWeight: 'bold', marginBottom: '1rem', borderBottom: '1px solid rgba(0, 109, 109,0.2)', paddingBottom: '0.5rem' }}>SECTION 2: Educational Background</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <div className="form-grid-2">
                    <div>
                      <label style={{ display: 'block', color: '#2d5c5c', marginBottom: '0.5rem', fontSize: '0.8rem', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px' }}>Highest Qualification *</label>
                      <select name="qualification" required                        style={{ width: '100%', padding: '12px', borderRadius: '8px', background: '#f0f8f8', border: '1.5px solid rgba(0, 109, 109,0.15)', color: '#011f1f', outline: 'none', cursor: 'pointer', boxSizing: 'border-box' }}>
                        <option value="">Select...</option>
                        <option value="Bachelors">Bachelors</option>
                        <option value="Masters">Masters</option>
                        <option value="MBA">MBA</option>
                        <option value="PhD">PhD</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label style={{ display: 'block', color: '#2d5c5c', marginBottom: '0.5rem', fontSize: '0.8rem', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px' }}>Field of Study *</label>
                      <input name="fieldOfStudy" type="text" required                        style={{ width: '100%', padding: '12px', borderRadius: '8px', background: '#f0f8f8', border: '1.5px solid rgba(0, 109, 109,0.15)', color: '#011f1f', outline: 'none', boxSizing: 'border-box' }} />
                    </div>
                  </div>
                  <div>
                    <label style={{ display: 'block', color: '#2d5c5c', marginBottom: '0.5rem', fontSize: '0.8rem', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px' }}>Name of Institution / University *</label>
                    <input name="university" type="text" required                        style={{ width: '100%', padding: '12px', borderRadius: '8px', background: '#f0f8f8', border: '1.5px solid rgba(0, 109, 109,0.15)', color: '#011f1f', outline: 'none', boxSizing: 'border-box' }} />
                  </div>
                  <div className="form-grid-2">
                    <div>
                      <label style={{ display: 'block', color: '#2d5c5c', marginBottom: '0.5rem', fontSize: '0.8rem', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px' }}>Year of Completion *</label>
                      <input name="yearOfCompletion" type="text" required                        style={{ width: '100%', padding: '12px', borderRadius: '8px', background: '#f0f8f8', border: '1.5px solid rgba(0, 109, 109,0.15)', color: '#011f1f', outline: 'none', boxSizing: 'border-box' }} />
                    </div>
                    <div>
                      <label style={{ display: 'block', color: '#2d5c5c', marginBottom: '0.5rem', fontSize: '0.8rem', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px' }}>Academic Performance (CGPA / Percentage)</label>
                      <input name="academicPerformance" type="text"                        style={{ width: '100%', padding: '12px', borderRadius: '8px', background: '#f0f8f8', border: '1.5px solid rgba(0, 109, 109,0.15)', color: '#011f1f', outline: 'none', boxSizing: 'border-box' }} />
                    </div>
                  </div>
                </div>
              </div>

              {/* SECTION 3: Professional Experience */}
              <div>
                <h3 style={{ color: '#006D6D', fontSize: '1.1rem', fontWeight: 'bold', marginBottom: '1rem', borderBottom: '1px solid rgba(0, 109, 109,0.2)', paddingBottom: '0.5rem' }}>SECTION 3: Professional Experience</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <div>
                    <label style={{ display: 'block', color: '#2d5c5c', marginBottom: '0.5rem', fontSize: '0.8rem', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px' }}>Total Work Experience (Years) *</label>
                    <select name="experienceYears" required style={{ width: '100%', padding: '12px', borderRadius: '8px', background: 'rgba(15, 23, 42, 1)', border: '1px solid rgba(255,255,255,0.1)', color: 'white', outline: 'none' }}>
                      <option value="">Select...</option>
                      <option value="<1">less than one year</option>
                      <option value="1-3">Between one to three years</option>
                      <option value="3-5">Between three to five years</option>
                      <option value=">5">More than 5 years</option>
                    </select>
                  </div>
                  <div className="form-grid-2">
                    <div>
                      <label style={{ display: 'block', color: '#2d5c5c', marginBottom: '0.5rem', fontSize: '0.8rem', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px' }}>Current / Most Recent Organization *</label>
                      <input name="recentOrg" type="text" required                        style={{ width: '100%', padding: '12px', borderRadius: '8px', background: '#f0f8f8', border: '1.5px solid rgba(0, 109, 109,0.15)', color: '#011f1f', outline: 'none', boxSizing: 'border-box' }} />
                    </div>
                    <div>
                      <label style={{ display: 'block', color: '#2d5c5c', marginBottom: '0.5rem', fontSize: '0.8rem', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px' }}>Current / Last Designation *</label>
                      <input name="lastDesignation" type="text" required                        style={{ width: '100%', padding: '12px', borderRadius: '8px', background: '#f0f8f8', border: '1.5px solid rgba(0, 109, 109,0.15)', color: '#011f1f', outline: 'none', boxSizing: 'border-box' }} />
                    </div>
                  </div>
                  <div>
                    <label style={{ display: 'block', color: '#2d5c5c', marginBottom: '0.5rem', fontSize: '0.8rem', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px' }}>Duration of Employment (Start–End) *</label>
                    <input name="employmentDuration" type="text" required                        style={{ width: '100%', padding: '12px', borderRadius: '8px', background: '#f0f8f8', border: '1.5px solid rgba(0, 109, 109,0.15)', color: '#011f1f', outline: 'none', boxSizing: 'border-box' }} placeholder="e.g. Jan 2020 - Present" />
                  </div>
                  <div>
                    <label style={{ display: 'block', color: '#2d5c5c', marginBottom: '0.5rem', fontSize: '0.8rem', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px' }}>Previous Organizations (if any)</label>
                    <textarea name="previousOrgs" rows="2" style={{ width: '100%', padding: '12px', borderRadius: '8px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', color: 'white', outline: 'none', resize: 'vertical' }}></textarea>
                  </div>
                  <div>
                    <label style={{ display: 'block', color: '#2d5c5c', marginBottom: '0.5rem', fontSize: '0.8rem', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px' }}>Brief Description of Roles & Responsibilities *</label>
                    <textarea name="rolesDesc" rows="3" required style={{ width: '100%', padding: '12px', borderRadius: '8px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', color: 'white', outline: 'none', resize: 'vertical' }}></textarea>
                  </div>
                </div>
              </div>

              {/* SECTION 4: Role Preference */}
              <div>
                <h3 style={{ color: '#006D6D', fontSize: '1.1rem', fontWeight: 'bold', marginBottom: '1rem', borderBottom: '1px solid rgba(0, 109, 109,0.2)', paddingBottom: '0.5rem' }}>SECTION 4: Role Preference</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <div>
                    <label style={{ display: 'block', color: '#2d5c5c', marginBottom: '0.5rem', fontSize: '0.8rem', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px' }}>Position Applying For *</label>
                    <select name="applyingFor" required style={{ width: '100%', padding: '12px', borderRadius: '8px', background: 'rgba(15, 23, 42, 1)', border: '1px solid rgba(255,255,255,0.1)', color: 'white', outline: 'none' }}>
                      <option value="">Select...</option>
                      <option value="Quantitative Analyst">Quantitative Analyst</option>
                      <option value="Algorithmic Trader">Algorithmic Trader</option>
                      <option value="Software Developer">Software Developer</option>
                    </select>
                  </div>
                  <div className="form-grid-2">
                    <div>
                      <label style={{ display: 'block', color: '#2d5c5c', marginBottom: '0.5rem', fontSize: '0.8rem', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px' }}>Notice Period</label>
                      <input name="noticePeriod" type="text"                        style={{ width: '100%', padding: '12px', borderRadius: '8px', background: '#f0f8f8', border: '1.5px solid rgba(0, 109, 109,0.15)', color: '#011f1f', outline: 'none', boxSizing: 'border-box' }} />
                    </div>
                    <div>
                      <label style={{ display: 'block', color: '#2d5c5c', marginBottom: '0.5rem', fontSize: '0.8rem', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px' }}>Expected Salary (INR per annum)</label>
                      <input name="expectedSalary" type="text"                        style={{ width: '100%', padding: '12px', borderRadius: '8px', background: '#f0f8f8', border: '1.5px solid rgba(0, 109, 109,0.15)', color: '#011f1f', outline: 'none', boxSizing: 'border-box' }} />
                    </div>
                  </div>
                </div>
              </div>

              {/* SECTION 5: CV Upload */}
              <div>
                <h3 style={{ color: '#006D6D', fontSize: '1.1rem', fontWeight: 'bold', marginBottom: '1rem', borderBottom: '1px solid rgba(0, 109, 109,0.2)', paddingBottom: '0.5rem' }}>SECTION 5: CV Upload</h3>
                <div>
                  <label style={{ display: 'block', color: '#cbd5e1', marginBottom: '0.5rem', fontSize: '0.85rem', fontWeight: 'bold' }}>Upload your CV (PDF / DOC, Max size: 1 MB) *</label>
                  <input name="resume" type="file" accept=".pdf,.doc,.docx" required style={{ width: '100%', padding: '12px', borderRadius: '8px', background: 'rgba(255,255,255,0.02)', border: '1px dashed rgba(212,175,55,0.5)', color: '#94a3b8', cursor: 'pointer' }} />
                </div>
              </div>

              {/* SECTION 6: Final Declaration */}
              <div>
                <h3 style={{ color: '#006D6D', fontSize: '1.1rem', fontWeight: 'bold', marginBottom: '1rem', borderBottom: '1px solid rgba(0, 109, 109,0.2)', paddingBottom: '0.5rem' }}>SECTION 6: Final Declaration</h3>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                  <input type="checkbox" name="declaration" id="declaration" required style={{ width: '18px', height: '18px', cursor: 'pointer' }} />
                  <label htmlFor="declaration" style={{ color: '#cbd5e1', fontSize: '0.9rem' }}>I confirm that the information provided is accurate *</label>
                </div>
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
