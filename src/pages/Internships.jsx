import { motion } from 'framer-motion';
import { Target, CheckCircle2, Navigation } from 'lucide-react';
import './Pages.css';

export default function Internships() {
  const tracks = [
    { 
      title: "Equity Research", 
      intro: "We are looking for a management student who is a self-starter, proactive and flexible. He will assist Equity Research Analyst in various activities.",
      responsibilities: [
        "Helping lead Research Analyst in tracking and analysing various sectors",
        "Updating earning models and preparing reports periodically for companies under coverage",
        "Assisting in valuation and report writing of various companies for decision making",
        "Help lead analyst initiate coverage in any other sector as per requirement",
        "Support trade execution and post trade monitoring",
        "Support research analyst in publication of research report"
      ],
      requirements: [
        "Candidate pursuing management degree",
        "Basic understanding of capital markets",
        "Good Comprehension & Communication skills, both oral and written",
        "Highly analytical mind with a strong attention to detail",
        "Strong organisational and prioritisation skills",
        "Ability to work accurately and efficiently in a time pressured environment"
      ],
      goodToHave: [
        "Proficient in excel and PPT",
        "Some experience with large data sets",
        "Self-starter, proactive and flexible"
      ]
    },
    { 
      title: "Portfolio Management", 
      intro: "We are looking for a management student who is a self-starter, proactive and flexible. He will assist Portfolio Analyst in various activities.",
      responsibilities: [
        "Prepare client risk profile and investment mandate documents",
        "Recommend to portfolio analyst suitable portfolio actions including rebalancing for their review and approval",
        "Assist the portfolio analyst in researching and reviewing investments for decision making",
        "Support trade execution and post trade monitoring",
        "Interact with clients for obtaining approvals on non-discretionary trades",
        "Support client relationship teams and portfolio management teams in preparing fact sheets, portfolio risk and return analytics"
      ],
      requirements: [
        "Candidate pursuing management degree",
        "Basic understanding of capital markets",
        "Good Comprehension & Communication skills, both oral and written",
        "Highly analytical mind with a strong attention to detail",
        "Strong organisational and prioritisation skills",
        "Ability to work accurately and efficiently in a time pressured environment"
      ],
      goodToHave: [
        "Proficient in excel and PPT",
        "Some experience with large data sets",
        "Self-starter, proactive and flexible"
      ]
    },
    { 
      title: "Derivative Strategies", 
      intro: "We are looking for a management student who is a self-starter, proactive and flexible. He will assist Derivative Strategist in various activities.",
      responsibilities: [
        "Help to design, back test, and stress test various option strategies",
        "Support to hedge large equity portfolio",
        "Work closely with equity research and portfolio management teams",
        "Help in valuation and data analysis on derivatives products for decision making",
        "Support trade execution and post trade monitoring",
        "Interact with clients for obtaining approvals on non-discretionary trades",
        "Support derivative strategy team in publication of investment strategy"
      ],
      requirements: [
        "Candidate pursuing management degree",
        "Basic understanding of capital markets",
        "Good Comprehension & Communication skills, both oral and written",
        "Highly analytical mind with a strong attention to detail",
        "Strong organisational and prioritisation skills",
        "Ability to work accurately and efficiently in a time pressured environment"
      ],
      goodToHave: [
        "Proficient in excel and PPT",
        "Some experience with large data sets"
      ]
    }
  ];

  return (
    <div className="page-wrapper pb-24">
      <div className="container relative z-10">
        <div className="page-header mt-12 mb-16">
          <div className="section-subtitle">Early Careers</div>
          <h1 className="page-title">Management Internships</h1>
          <p className="page-subtitle max-w-4xl mx-auto mb-8" style={{ textAlign: 'center' }}>
            Internship is one of the best ways to find out if our company is the right place for you to begin your career. Internship programs are designed for you to work with us during your off-time and help you explore our firm and gain hands-on work experience before applying for one of our full-time jobs. 
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem', marginBottom: '6rem' }}>
          {tracks.map((track, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
              <div className="fin-card" style={{ padding: '3.5rem', borderTop: '5px solid #d4af37', background: 'linear-gradient(180deg, rgba(15, 23, 42, 0.7) 0%, rgba(8, 12, 20, 0.95) 100%)' }}>
                
                {/* Header Section */}
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flexWrap: 'wrap', gap: '2rem', marginBottom: '3rem', borderBottom: '1px solid rgba(255, 255, 255, 0.05)', paddingBottom: '2.5rem' }}>
                  <div style={{ flex: '1 1 500px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                      <div style={{ width: '50px', height: '50px', backgroundColor: 'rgba(212, 175, 55, 0.1)', border: '1px solid rgba(212, 175, 55, 0.3)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#d4af37' }}>
                        <Target size={28} />
                      </div>
                      <h2 style={{ fontSize: '2rem', fontWeight: 800, color: 'white', margin: 0 }}>Management Intern – <span style={{ color: '#d4af37' }}>{track.title}</span></h2>
                    </div>
                    <p style={{ color: '#94a3b8', fontSize: '1.1rem', lineHeight: 1.6, marginTop: '1rem', maxWidth: '800px', margin: 0 }}>{track.intro}</p>
                  </div>
                  
                  <div style={{ minWidth: '220px', display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '0.75rem' }}>
                     <span style={{ color: '#64748b', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '2px', fontWeight: 'bold' }}>Duration</span>
                     <span style={{ color: 'white', fontWeight: 800, fontSize: '1.5rem', backgroundColor: 'rgba(255,255,255,0.05)', padding: '0.5rem 1.5rem', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)' }}>2-3 Months</span>
                     <a href="mailto:hr@rrpinvestments.in" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', marginTop: '0.5rem', padding: '12px 0', background: 'linear-gradient(135deg, #d4af37 0%, #b48608 100%)', color: 'black', fontWeight: 'bold', borderRadius: '6px', textDecoration: 'none', boxShadow: '0 0 15px rgba(212,175,55,0.3)', border: 'none', cursor: 'pointer', transition: 'transform 0.2s' }} onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.02)'} onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}>
                        Apply Now <Navigation size={16} style={{ marginLeft: '8px' }} />
                     </a>
                  </div>
                </div>

                {/* Body Content */}
                <div className="grid-2-cols" style={{ gap: '4rem' }}>
                  
                  {/* Left Column: Responsibilities */}
                  <div>
                    <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: 'white', marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                       <span style={{ width: '35px', height: '35px', borderRadius: '50%', backgroundColor: 'rgba(59, 130, 246, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid rgba(59, 130, 246, 0.3)', color: '#60a5fa' }}>1</span>
                       Role & Responsibilities
                    </h3>
                    <ul style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem', padding: 0, margin: 0, listStyle: 'none' }}>
                       {track.responsibilities.map((resp, idx) => (
                          <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', color: '#cbd5e1' }}>
                             <CheckCircle2 size={20} style={{ color: '#3b82f6', flexShrink: 0, marginTop: '3px' }} />
                             <span style={{ lineHeight: 1.6 }}>{resp}</span>
                          </li>
                       ))}
                    </ul>
                  </div>

                  {/* Right Column: Requirements */}
                  <div>
                     <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: 'white', marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                        <span style={{ width: '35px', height: '35px', borderRadius: '50%', backgroundColor: 'rgba(212, 175, 55, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid rgba(212, 175, 55, 0.3)', color: '#d4af37' }}>2</span>
                        Requirements
                     </h3>
                     <ul style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem', padding: 0, margin: '0 0 2.5rem 0', listStyle: 'none' }}>
                       {track.requirements.map((req, idx) => (
                          <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', color: '#cbd5e1' }}>
                             <CheckCircle2 size={20} style={{ color: '#d4af37', flexShrink: 0, marginTop: '3px' }} />
                             <span style={{ lineHeight: 1.6 }}>{req}</span>
                          </li>
                       ))}
                     </ul>

                     <h4 style={{ fontSize: '1rem', fontWeight: 'bold', color: '#94a3b8', margin: '0 0 1.5rem 0', textTransform: 'uppercase', letterSpacing: '2px', borderLeft: '3px solid #64748b', paddingLeft: '1rem' }}>Good to Have</h4>
                     <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', padding: '0 0 0 1.2rem', margin: 0, listStyle: 'none' }}>
                       {track.goodToHave.map((good, idx) => (
                          <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: '#94a3b8', fontSize: '0.95rem' }}>
                             <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#64748b' }}></div>
                             {good}
                          </li>
                       ))}
                     </ul>
                  </div>
                  
                </div>

              </div>
            </motion.div>
          ))}
        </div>

        {/* Dynamic Working Programme Modal Banner */}
        <motion.div 
            whileHover={{ scale: 1.01 }}
            className="fin-card" 
            style={{ padding: '4rem', background: 'linear-gradient(135deg, rgba(30, 58, 138, 0.2) 0%, rgba(13, 18, 30, 0.9) 100%)', border: '1px solid rgba(59, 130, 246, 0.3)', textAlign: 'center', margin: '0 auto' }}
          >
              <h3 style={{ fontSize: '2.5rem', color: 'white', fontWeight: 800, margin: '0 0 1.5rem 0' }}>Dynamic Working Programme</h3>
              <p style={{ color: '#94a3b8', lineHeight: 1.8, fontSize: '1.15rem', maxWidth: '800px', margin: '0 auto 2.5rem auto' }}>
                  Our dynamic working programme has been set up to help colleagues achieve an optimal work/life balance. Arrangements we offer range from working at home and changing regular hours to taking career breaks. Our initiatives support colleagues at all stages of their lives, helping them with parenthood, caring, further studies, and hobbies.
              </p>
              <a href="mailto:hr@rrpinvestments.in" className="btn-gold-outline" style={{ display: 'inline-flex', padding: '15px 40px', fontSize: '1.1rem', background: 'rgba(0,0,0,0.5)' }}>Submit Application to HR</a>
        </motion.div>
      </div>
    </div>
  );
}
