// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { Target, TrendingUp, Code, CheckCircle2 } from 'lucide-react';
import './Pages.css';

export default function Careers() {
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
        "Develop and maintain high-performance institutional trading systems and execution engines",
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
        "Knowledge of high-performance systems and real-time processing",
        "Familiarity with cloud platforms and scalable architectures"
      ]
    }
  ];

  const whyWorkWithUs = "Working with the company offers the opportunity to operate at the intersection of finance, technology, and data science, where ideas are translated into real market applications. The environment encourages analytical thinking, disciplined execution, and continuous learning, with exposure to algorithmic trading, AI/ML-driven strategies, derivatives, and risk management frameworks. Team members work on meaningful problems with direct impact on trading outcomes, supported by a culture that values research, collaboration, and accountability. Alongside professional growth, the company emphasizes a healthy work-life balance, structured work practices, and a supportive team environment. Regular team interactions, knowledge-sharing sessions, and social engagements foster collaboration and a positive workplace culture. Overall, the company provides a platform to build deep expertise in systematic trading and financial markets, while maintaining a balanced and engaging work experience.";

  return (
    <div className="page-wrapper pb-16">
      <div className="page-header mt-8">
        <div className="container text-center">

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
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <div style={{ 
            display: 'inline-block', 
            padding: '2rem 3.5rem', 
            background: 'linear-gradient(135deg, #f0fcfc 0%, #ffffff 100%)', 
            borderRadius: '20px', 
            border: '1px solid rgba(0, 109, 109, 0.15)',
            boxShadow: '0 10px 30px rgba(0, 109, 109, 0.05)'
          }}>
            <p style={{ color: '#5a9090', fontSize: '0.9rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '1rem' }}>Interested in joining us?</p>
            <p style={{ fontSize: '1.25rem', color: '#011f1f', fontWeight: 600, margin: 0 }}>
              Send your CV/Resume to{' '}
              <a 
                href="mailto:hr@rrpinvestments.com" 
                style={{ color: '#006D6D', textDecoration: 'none', borderBottom: '2px solid rgba(0, 109, 109, 0.3)', transition: 'all 0.3s ease' }}
                onMouseOver={(e) => { e.currentTarget.style.borderColor = '#006D6D'; }}
                onMouseOut={(e) => { e.currentTarget.style.borderColor = 'rgba(0, 109, 109, 0.3)'; }}
              >
                hr@rrpinvestments.com
              </a>
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-8 md:gap-12 mb-24">
          {roles.map((role, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="fin-card" style={{ borderTop: '4px solid #006D6D', padding: 'clamp(1.5rem, 5vw, 3.5rem)', background: 'linear-gradient(160deg, #f0f8f8 0%, white 100%)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem', paddingBottom: '1.5rem', borderBottom: '1px solid rgba(0, 109, 109,0.12)' }}>
                  <div style={{ width: '52px', height: '52px', background: 'rgba(0, 109, 109,0.08)', border: '1px solid rgba(0, 109, 109,0.2)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#006D6D', flexShrink: 0 }}>
                    {role.icon}
                  </div>
                  <h2 style={{ fontSize: 'clamp(1.4rem, 4vw, 1.8rem)', fontWeight: 800, color: '#011f1f' }}>{role.title}</h2>
                </div>
                
                <div style={{ marginBottom: '2rem' }}>
                  <h3 style={{ fontSize: '1rem', color: '#006D6D', marginBottom: '0.8rem', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px' }}>Role Overview</h3>
                  <p style={{ color: '#2d5c5c', lineHeight: '1.8', fontSize: '1.05rem' }}>{role.overview}</p>
                </div>
                
                <div className="grid-2-cols" style={{ gap: '2rem md:gap-3rem', alignItems: 'flex-start' }}>
                  <div>
                    <h3 style={{ fontSize: '1rem', color: '#006D6D', marginBottom: '1rem', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px' }}>Key Responsibilities</h3>
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
                    <h3 style={{ fontSize: '1rem', color: '#006D6D', marginBottom: '1rem', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px' }}>Skills & Qualifications</h3>
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
    </div>
  );
}
