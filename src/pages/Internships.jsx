// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { CheckCircle2, BrainCircuit, Laptop, Target, Rocket, Star } from 'lucide-react';
import './Pages.css';

export default function Internships() {
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
      ],
      benefits: [
        "Certificate of Internship",
        "Exposure to real datasets for model building / technical analysis",
        "Hand-holding for research and trading in your own account"
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
      ],
      benefits: [
        "Certificate of Internship",
        "Exposure to real datasets, valuation models and strategies",
        "Hand-holding for research and trading in your own account"
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
      ],
      benefits: [
        "Certificate of Internship",
        "Exposure to real datasets for quant research",
        "Hand-holding for research and trading in your own account"
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
      ],
      benefits: [
        "Certificate of Internship",
        "Exposure to real-time Behavioral Finance",
        "Hand-holding for research and trading in your own account"
      ]
    },
    {
      title: "Live Projects",
      icon: <Star size={24} />,
      color: "#006D6D",
      overview: "The Live Project is designed to provide students with structured, real-world exposure to financial markets, where they work on practical assignments spanning equity, derivatives, quantitative analysis, and business understanding. It focuses on applied learning, enabling participants to connect academic concepts with actual market practices in a disciplined and research-oriented environment.",
      responsibilities: [
        "Work on structured assignments related to equity, futures, and options markets",
        "Analyze market data, trends, and price movements using basic analytical techniques",
        "Support development of trading ideas and strategy frameworks",
        "Assist in data collection, interpretation, and documentation of insights",
        "Contribute to tasks involving risk awareness, hedging concepts, and market observations",
        "Prepare reports, presentations, or summaries based on assigned work"
      ],
      skills: [
        "Basic understanding of financial markets (equity, derivatives preferred)",
        "Interest in trading, research, and analytical thinking",
        "Familiarity with Excel or basic data analysis tools like Python",
        "Strong learning orientation and attention to detail",
        "Good communication and documentation skills"
      ],
      benefits: [
        "Certificate of Live Project", 
        "Exposure to real-world market workflows and structured trading practices",
        "Development of analytical, research, and decision-making skills with deep understanding of equity, derivatives, and / or quant research",
        "Hand-holding for research and trading in your own account"
      ]
    }
  ];

  return (
    <div className="page-wrapper pb-24">
      <div className="container relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="fin-card overflow-hidden mb-16"
          style={{ padding: 0, marginTop: '2rem' }}
        >
          <div className="grid-2-cols" style={{ gap: 0 }}>
            {/* Left Content */}
            <div style={{ padding: 'clamp(2rem, 5vw, 4rem)' }}>
              <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 800, color: '#011f1f', marginBottom: '2rem', lineHeight: 1.2 }}>Structured Internships <br/><span style={{ color: '#006D6D' }}>and Live Projects</span></h1>
              <p style={{ color: '#2d5c5c', fontSize: '1.1rem', lineHeight: 1.8, marginBottom: 0 }}>
                Gaining practical exposure through an internship / live project is essential before entering a full-time role, especially in dynamic fields like financial markets and trading. While academic learning provides conceptual clarity, real-world experience helps develop decision-making ability, market understanding, risk awareness, and discipline. An internship / live project allows candidates to apply theoretical knowledge in live market environments, understand workflows, and build the analytical and professional skills required to perform effectively in high-responsibility roles. Internship / live projects also offers an opportunity to candidates and the company to test the waters before the deep dive.
              </p>
            </div>

            {/* Right Image Container */}
            <div style={{ position: 'relative', width: '100%', minHeight: '320px', background: '#011f1f' }}>
               <img 
                 src="/hero-trading.png" 
                 alt="Professional Trading Environment" 
                 style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.85 }} 
               />
               <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to left, transparent 0%, rgba(1, 31, 31, 0.4) 100%)' }}></div>
            </div>
          </div>
        </motion.div>

        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSdz3AZ5GNRgLTM8KxMwnXWxhDRs8OvrXKqPBGrRAMs-_mQtDg/viewform?usp=send_form"
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', padding: '16px 40px', background: 'linear-gradient(135deg, #006D6D 0%, #005858 100%)', color: 'white', fontWeight: 'bold', fontSize: '1.2rem', borderRadius: '10px', boxShadow: '0 4px 20px rgba(0, 109, 109,0.35)', border: 'none', cursor: 'pointer', transition: 'transform 0.2s, box-shadow 0.2s', textDecoration: 'none' }} 
            onMouseOver={(e) => { e.currentTarget.style.transform = 'scale(1.03)'; e.currentTarget.style.boxShadow = '0 8px 30px rgba(0, 109, 109,0.5)'; }} 
            onMouseOut={(e) => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 109, 109,0.35)'; }}
          >
            Apply for Internship / Live Project
          </a>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem md:gap-4rem', marginBottom: '6rem' }}>
          {internships.map((internship, idx) => (
            <motion.div key={idx} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
               <div className="fin-card" style={{ padding: 'clamp(1.5rem, 5vw, 3.5rem)', borderTop: `5px solid ${internship.color}`, background: 'linear-gradient(160deg, #f0f8f8 0%, white 100%)' }}>
                  
                  {/* Header Section */}
                  <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1.5rem md:gap-2rem', marginBottom: '2.5rem', borderBottom: '1px solid rgba(0, 109, 109,0.1)', paddingBottom: '2.5rem' }}>
                    <div style={{ flex: '1 1 300px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                        <div style={{ width: '52px', height: '52px', backgroundColor: `${internship.color}12`, border: `1px solid ${internship.color}30`, borderRadius: '14px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: internship.color, flexShrink: 0 }}>
                          {internship.icon}
                        </div>
                        <h2 style={{ fontSize: 'clamp(1.6rem, 5vw, 2.2rem)', fontWeight: 800, color: '#011f1f', margin: 0 }}>{internship.title}</h2>
                      </div>
                      <p style={{ color: '#2d5c5c', fontSize: '1.05rem', lineHeight: 1.6, marginTop: '1rem', maxWidth: '800px', margin: 0 }}>
                        {internship.overview}
                      </p>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="grid-2-cols" style={{ gap: '2rem md:gap-4rem' }}>
                    
                    {/* Left Column: Responsibilities */}
                    <div>
                      <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#011f1f', marginBottom: '1.2rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
                         Key Responsibilities
                      </h3>
                      <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', padding: 0, margin: 0, listStyle: 'none' }}>
                         {internship.responsibilities.map((resp, ridx) => (
                            <li key={ridx} style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', color: '#2d5c5c' }}>
                               <div style={{ width: '8px', height: '8px', backgroundColor: internship.color, borderRadius: '2px', marginTop: '6px', flexShrink: 0, transform: 'rotate(45deg)' }}></div>
                               <span style={{ lineHeight: 1.6, fontSize: '1rem' }}>{resp}</span>
                            </li>
                         ))}
                      </ul>
                    </div>

                    {/* Right Column: Requirements & Benefits */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                       <div>
                         <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#011f1f', marginBottom: '1.2rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
                            Skills Required
                         </h3>
                         <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', padding: 0, margin: 0, listStyle: 'none' }}>
                           {internship.skills.map((req, ridx) => (
                              <li key={ridx} style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', color: '#2d5c5c' }}>
                                 <CheckCircle2 size={18} style={{ color: internship.color, flexShrink: 0, marginTop: '2px' }} />
                                 <span style={{ lineHeight: 1.6, fontSize: '1rem' }}>{req}</span>
                              </li>
                           ))}
                         </ul>
                       </div>
                       
                       <div>
                         <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#011f1f', marginBottom: '1.2rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
                            Candidate Benefits
                         </h3>
                         <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', padding: 0, margin: 0, listStyle: 'none' }}>
                           {internship.benefits.map((benefit, bidx) => (
                              <li key={bidx} style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', color: '#2d5c5c' }}>
                                 <Star size={18} style={{ color: "#d4af37", fill: "#d4af37", flexShrink: 0, marginTop: '2px' }} />
                                 <span style={{ lineHeight: 1.6, fontSize: '1rem', fontWeight: 600 }}>{benefit}</span>
                              </li>
                           ))}
                         </ul>
                       </div>
                    </div>
                    
                  </div>

               </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
