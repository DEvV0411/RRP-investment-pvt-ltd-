// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { ArrowRight, TrendingUp, ShieldCheck, BarChart2, Briefcase, Activity, Globe, ChevronRight } from 'lucide-react';
import TextReveal from '../components/ui/TextReveal';
import AnimatedCounter from '../components/ui/AnimatedCounter';
import { Link } from 'react-router-dom';
import './Pages.css';

export default function Home() {
  return (
    <div className="page-wrapper" style={{ paddingTop: 0, overflowX: 'hidden' }}>
      

      {/* Hero Section — Split Layout with Floating Cards */}
      <section style={{ position: 'relative', width: '100%', minHeight: '100vh', overflow: 'hidden', background: '#f5fafa', display: 'flex', alignItems: 'center' }}>
        
        {/* Background image — faded on right half */}
        <img
          src="/bulls-bears-hero.png"
          alt="Bulls and Bears"
          style={{ position: 'absolute', right: 0, top: 0, width: '58%', height: '100%', objectFit: 'cover', objectPosition: 'center', opacity: 0.18, pointerEvents: 'none' }}
        />
        {/* Radial overlay so left stays clean white */}
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(110deg, #f5fafa 40%, rgba(245,250,250,0.6) 65%, transparent 100%)' }} />
        {/* Top teal accent line */}
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', background: 'linear-gradient(90deg, transparent, #006D6D 30%, #008888 70%, transparent)', zIndex: 5 }} />

        <div className="container" style={{ position: 'relative', zIndex: 10, width: '100%', paddingTop: '160px', paddingBottom: '110px' }}>
          <div className="hero-grid" style={{ display: 'grid', gap: '3rem', alignItems: 'center' }}>

            {/* ── Headline + Tags + CTAs (Centrally Aligned) ── */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: 'easeOut' }}
              className="hero-content"
              style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', width: '100%', maxWidth: '900px', margin: '0 auto' }}
            >
              {/* Label pill */}
              <div className="hero-pill" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 16px', borderRadius: '999px', background: 'rgba(0,109,109,0.08)', border: '1px solid rgba(0,109,109,0.2)', marginBottom: '2rem' }}>
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#006D6D', display: 'inline-block', boxShadow: '0 0 8px rgba(0,109,109,0.6)' }} />
                <span style={{ color: '#006D6D', fontSize: '0.78rem', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase' }}>QUANTITATIVE TRADING AND INVESTMENT FIRM</span>
              </div>

              <h1 className="hero-title" style={{ fontSize: 'clamp(2.8rem, 5vw, 4.8rem)', fontWeight: 900, color: '#006D6D', lineHeight: 1.08, margin: '0 0 1.2rem', letterSpacing: '-1.5px' }}>
                RRP<br/>
                Investments
              </h1>
              
              <p style={{ color: '#011f1f', fontWeight: 700, fontSize: '1.25rem', letterSpacing: '3px', textTransform: 'uppercase', margin: '0 0 2rem', padding: '0 10px', display: 'flex', alignItems: 'center', gap: '15px' }} className="hero-tagline">
                <span style={{ height: '24px', width: '2px', background: '#011f1f' }}></span>
                INTELLIGENCE DELIVERED.
                <span style={{ height: '24px', width: '2px', background: '#011f1f' }}></span>
              </p>

              <p style={{ color: '#2d5c5c', fontSize: '1.15rem', lineHeight: 1.8, marginBottom: '2.5rem', maxWidth: '650px' }} className="hero-desc">
                A technology-driven, research-oriented trading organization integrating algorithmic models, AI/ML, and disciplined risk management in Indian financial markets.
              </p>

              {/* Domain tags */}
              <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '2.5rem', justifyContent: 'center' }} className="hero-tags">
                {['ALGO TRADING', 'MACHINE LEARNING', 'PRIVATE EQUITY'].map((tag, i) => (
                  <div key={i} style={{ padding: '6px 16px', borderRadius: '6px', background: 'white', border: '1px solid rgba(0,109,109,0.2)', boxShadow: '0 2px 8px rgba(0,109,109,0.06)' }}>
                    <span style={{ color: '#006D6D', fontSize: '0.78rem', fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase' }}>{tag}</span>
                  </div>
                ))}
              </div>

            </motion.div>

            {/* ── Right: Floating Staggered Cards ── */}
            <div className="hero-cards" style={{ position: 'relative', height: '520px' }}>

              {/* Card 1 — top left (Restored & Updated) */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.7 }}
                style={{ position: 'absolute', top: '20px', left: '0px', width: '240px', background: 'white', borderRadius: '16px', padding: '1.4rem', boxShadow: '0 8px 32px rgba(0,109,109,0.12)', border: '1px solid rgba(0,109,109,0.1)' }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.8rem' }}>
                  <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: 'rgba(0,109,109,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <BarChart2 size={18} style={{ color: '#006D6D' }} />
                  </div>
                  <span style={{ background: 'rgba(0,180,100,0.1)', color: '#00a060', fontSize: '0.72rem', fontWeight: 700, padding: '3px 10px', borderRadius: '999px' }}>● ACTIVE</span>
                </div>
                <p style={{ color: '#5a9090', fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px', margin: '0 0 0.3rem' }}>Statistical Edge</p>
                <p style={{ color: '#011f1f', fontSize: '1.6rem', fontWeight: 900, margin: '0 0 0.2rem', lineHeight: 1 }}>Alpha Gen</p>
                <p style={{ color: '#5a9090', fontSize: '0.76rem', margin: 0 }}>Systematic signal · NSE</p>
              </motion.div>

              {/* Card 2 — top right, offset lower */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.7 }}
                style={{ position: 'absolute', top: '0px', right: '0px', width: '230px', background: 'linear-gradient(135deg, #006D6D, #008080)', borderRadius: '16px', padding: '1.4rem', boxShadow: '0 8px 32px rgba(0,109,109,0.25)' }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.8rem' }}>
                  <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: 'rgba(255,255,255,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <TrendingUp size={18} style={{ color: 'white' }} />
                  </div>
                  <span style={{ background: 'rgba(255,255,255,0.2)', color: 'white', fontSize: '0.72rem', fontWeight: 700, padding: '3px 10px', borderRadius: '999px' }}>98% MATCH</span>
                </div>
                <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px', margin: '0 0 0.3rem' }}>Options Strategy</p>
                <p style={{ color: 'white', fontSize: '1.6rem', fontWeight: 900, margin: '0 0 0.2rem', lineHeight: 1 }}>Delta Neutral</p>
                <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.76rem', margin: 0 }}>Greeks-based · Hedged</p>
              </motion.div>

              {/* Card 3 — middle left, large */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45, duration: 0.7 }}
                style={{ position: 'absolute', top: '160px', left: '28px', width: '270px', background: 'white', borderRadius: '16px', padding: '1.6rem', boxShadow: '0 12px 40px rgba(0,109,109,0.14)', border: '1px solid rgba(0,109,109,0.1)' }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.8rem' }}>
                  <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: 'rgba(0,109,109,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <ShieldCheck size={18} style={{ color: '#006D6D' }} />
                  </div>
                  <span style={{ background: 'rgba(0,109,109,0.08)', color: '#006D6D', fontSize: '0.72rem', fontWeight: 700, padding: '3px 10px', borderRadius: '999px' }}>95% MATCH</span>
                </div>
                <p style={{ color: '#5a9090', fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px', margin: '0 0 0.3rem' }}>Quantitative Research</p>
                <p style={{ color: '#011f1f', fontSize: '1.5rem', fontWeight: 900, margin: '0 0 0.4rem', lineHeight: 1.1 }}>ML-Driven<br/>Signals</p>
                <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                  {['Python', 'TensorFlow', 'NSE'].map((t, i) => (
                    <span key={i} style={{ background: 'rgba(0,109,109,0.07)', color: '#006D6D', fontSize: '0.7rem', fontWeight: 700, padding: '3px 9px', borderRadius: '6px' }}>{t}</span>
                  ))}
                </div>
              </motion.div>

              {/* Card 4 — middle right */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.65, duration: 0.7 }}
                style={{ position: 'absolute', top: '175px', right: '8px', width: '210px', background: 'white', borderRadius: '16px', padding: '1.4rem', boxShadow: '0 8px 32px rgba(0,109,109,0.1)', border: '1px solid rgba(0,109,109,0.1)' }}
              >
                <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'flex-start', marginBottom: '0.8rem' }}>
                  <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: 'rgba(0,109,109,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Globe size={18} style={{ color: '#006D6D' }} />
                  </div>
                </div>
                <p style={{ color: '#5a9090', fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px', margin: '0 0 0.3rem' }}>Systematic Trading</p>
                <p style={{ color: '#011f1f', fontSize: '1.45rem', fontWeight: 900, margin: '0 0 0.2rem', lineHeight: 1.1 }}>360°<br/>Risk Cover</p>
                <p style={{ color: '#5a9090', fontSize: '0.76rem', margin: 0 }}>Dynamic Hedging</p>
              </motion.div>

              {/* Card 5 — bottom center */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.7 }}
                style={{ position: 'absolute', bottom: '0px', left: '40px', right: '0px', background: 'linear-gradient(135deg, #eaf4f4 0%, #f0f9f9 100%)', borderRadius: '16px', padding: '1.3rem 1.6rem', boxShadow: '0 4px 20px rgba(0,109,109,0.1)', border: '1px solid rgba(0,109,109,0.12)', display: 'flex', gap: '2rem', alignItems: 'center', justifyContent: 'space-around' }}
              >
                {[{ val: '100%', label: 'Research' }, { val: 'PE', label: 'Private Equity' }, { val: 'Multi', label: 'Asset' }].map((stat, i) => (
                  <div key={i} style={{ textAlign: 'center' }}>
                    <p style={{ color: '#006D6D', fontSize: '1.3rem', fontWeight: 900, margin: 0, lineHeight: 1 }}>{stat.val}</p>
                    <p style={{ color: '#5a9090', fontSize: '0.65rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px', margin: '4px 0 0' }}>{stat.label}</p>
                  </div>
                ))}
              </motion.div>

            </div>
          </div>
        </div>

        {/* Responsive: stack on mobile */}
        <style>{`
          .hero-grid { grid-template-columns: 1fr; }
          @media (max-width: 1024px) {
            .hero-grid { grid-template-columns: 1fr !important; text-align: center; padding-top: 40px; }
            .hero-content { display: flex; flex-direction: column; align-items: center; width: 100% !important; max-width: 100% !important; }
            .hero-desc { margin-left: auto; margin-right: auto; text-align: center; }
            .hero-title { font-size: 3.2rem !important; }
            .hero-tags, .hero-ctas { justify-content: center; }
            .hero-tagline { border-left: none !important; padding-left: 0 !important; text-align: center; justify-content: center; }
            .hero-cards { display: none !important; }
            .home-stat-grid { grid-template-columns: 1fr !important; }
          }
          @media (max-width: 480px) {
            .hero-title { font-size: 2.5rem !important; }
            .hero-pill { transform: scale(0.9); }
            .hero-tagline { font-size: 1rem !important; gap: 8px !important; }
            .hero-tagline span { height: 16px !important; }
          }
        `}</style>
      </section>




      {/* Excellence Delivered */}
      <section className="container" style={{ marginTop: '8rem', marginBottom: '8rem' }}>
        <motion.div 
           initial={{ opacity: 0, y: 50 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, amount: 0.2 }}
           transition={{ duration: 0.8 }}
           className="fin-card overflow-hidden"
           style={{ padding: 0 }}
        >
          <div className="grid-2-cols" style={{ gap: 0 }}>
            {/* Left Content */}
            <div style={{ padding: 'clamp(2rem, 8vw, 4rem)' }}>
              <div style={{ color: '#006D6D', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '3px', fontSize: '0.9rem', marginBottom: '1.5rem' }}>Excellence Delivered</div>
              <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 800, color: '#011f1f', marginBottom: '2rem', lineHeight: 1.2 }}>Elite Financial <br/><span style={{ color: '#006D6D' }}>Engineering.</span></h2>
              <p style={{ color: '#2d5c5c', fontSize: '1.1rem', lineHeight: 1.8, marginBottom: '2.5rem' }}>
                The company operates as a technology-driven, research-oriented trading organization, integrating algorithmic models, AI/ML techniques, and data-driven systems with equity, futures, and options trading strategies.
              </p>
            </div>

            {/* Right Image Container */}
            <div style={{ position: 'relative', width: '100%', minHeight: '320px' }}>
               <img src="/algo-network.png" alt="Algorithmic Trading Network" style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.9 }} />
            </div>
          </div>
        </motion.div>
      </section>

      {/* Our Core Architecture */}
      <section style={{ padding: '8rem 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem', maxWidth: '800px', margin: '0 auto 4rem auto' }}>
            <h2 className="text-4xl md:text-5xl font-bold" style={{ color: '#011f1f', margin: '0 0 1.5rem 0' }}>Our Core <span style={{ color: '#006D6D' }}>Architecture</span></h2>
            <p style={{ color: '#2d5c5c', fontSize: '1.2rem', lineHeight: 1.6, fontWeight: 300, margin: 0 }}>
              Advanced quantitative trading methodologies executed flawlessly by veterans.
            </p>
          </div>
          
          <div className="grid-2-cols">
            {[
              { icon: BarChart2, title: "Systematic Trading", desc: "High-performance trading capitalizing on market inefficiencies through data-driven, model-based execution.", color: '#006D6D' },
              { icon: Activity, title: "Equity Investment & Quant Research", desc: "Fundamental and quantitative research-driven equity investments targeting long-term value creation and sustainable growth.", color: '#006D6D' },
              { icon: ShieldCheck, title: "Options & Greeks", desc: "Executing advanced volatility strategies and Greek-based risk management to capture premium decay and capitalize on market mispricing.", color: '#006D6D' },
              { icon: Globe, title: "Risk & Hedging", desc: "Integrating dynamic hedging techniques and real-time portfolio-level risk controls to mitigate exposure and ensure systematic capital preservation.", color: '#006D6D' }
            ].map((pillar, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }}>
                <div className="fin-card" style={{ padding: '2.5rem', height: '100%', display: 'flex', flexDirection: 'column' }}>
                  <div style={{ width: '60px', height: '60px', background: 'rgba(0, 109, 109,0.08)', border: '1px solid rgba(0, 109, 109,0.2)', borderRadius: '15px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
                    <pillar.icon style={{ color: '#006D6D' }} size={30} />
                  </div>
                  <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#011f1f', margin: '0 0 1rem 0' }}>{pillar.title}</h3>
                  <p style={{ color: '#2d5c5c', fontSize: '1rem', lineHeight: 1.7, margin: 0 }}>{pillar.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* The Intelligent Choice */}
      <section className="container" style={{ marginTop: '8rem', marginBottom: '8rem' }}>
        <motion.div 
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           viewport={{ once: true }}
           className="fin-card"
           style={{ padding: 'clamp(2rem, 5vw, 5rem)', textAlign: 'center', position: 'relative', overflow: 'hidden', background: '#eaf4f4' }}
        >
             {/* Subtle internal grid */}
             <div style={{ position: 'absolute', inset: 0, opacity: 0.07, backgroundImage: 'linear-gradient(#006D6D 1px, transparent 1px), linear-gradient(90deg, #006D6D 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
             
             <div style={{ position: 'relative', zIndex: 10 }}>
                <h2 className="text-4xl md:text-5xl font-bold" style={{ color: '#011f1f', margin: '0 0 4rem 0' }}>The Intelligent Choice</h2>
                
                <div className="grid-3-cols" style={{ gap: '3rem', alignItems: 'flex-start' }}>
                  
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem', height: '80px' }}>
                      <span style={{ fontSize: 'clamp(3rem, 5vw, 4.5rem)', fontWeight: 'bold', color: '#011f1f', lineHeight: 1 }}><AnimatedCounter end={100} prefix="" suffix="" /></span>
                      <span style={{ fontSize: '2rem', color: '#006D6D', fontWeight: 'bold', marginLeft: '5px' }}>%</span>
                    </div>
                    <h4 style={{ fontSize: '1.1rem', fontWeight: 'bold', color: '#011f1f', margin: '0 0 1rem 0', textTransform: 'uppercase', letterSpacing: '2px' }}>Research-Driven</h4>
                    <p style={{ color: '#2d5c5c', lineHeight: 1.6, fontSize: '0.95rem', margin: 0 }}>Every directional decision is backed by deep analytical modeling and quantitative conviction.</p>
                  </div>

                  <div className="home-choice-mid" style={{ textAlign: 'center', padding: '0 1rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem', height: '80px' }}>
                      <span style={{ fontSize: 'clamp(3rem, 5vw, 4.5rem)', fontWeight: 'bold', color: '#011f1f', lineHeight: 1 }}><AnimatedCounter end={15} prefix="" suffix="+" /></span>
                      <span style={{ fontSize: '1.8rem', color: '#006D6D', fontWeight: 'bold', marginLeft: '5px' }}>Years</span>
                    </div>
                    <h4 style={{ fontSize: '1.1rem', fontWeight: 'bold', color: '#011f1f', margin: '0 0 1rem 0', textTransform: 'uppercase', letterSpacing: '2px' }}>Research and Trading</h4>
                    <p style={{ color: '#2d5c5c', lineHeight: 1.6, fontSize: '0.95rem', margin: 0 }}>Continuous engagement with evolving market dynamics, combining analytical rigor with disciplined execution.</p>
                  </div>

                  <div style={{ textAlign: 'center' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem', height: '80px' }}>
                      <span style={{ fontSize: 'clamp(3rem, 5vw, 4.5rem)', fontWeight: 'bold', color: '#011f1f', lineHeight: 1 }}><AnimatedCounter end={360} prefix="" suffix="" /></span>
                      <span style={{ fontSize: '2.5rem', color: '#006D6D', fontWeight: 'bold', marginLeft: '5px' }}>°</span>
                    </div>
                    <h4 style={{ fontSize: '1.1rem', fontWeight: 'bold', color: '#011f1f', margin: '0 0 1rem 0', textTransform: 'uppercase', letterSpacing: '2px' }}>Risk Management</h4>
                    <p style={{ color: '#2d5c5c', lineHeight: 1.6, fontSize: '0.95rem', margin: 0 }}>Strict dynamic hedging and absolute capital protection protocols securing downside tail risk.</p>
                  </div>

                </div>
             </div>
             <style>{`
               @media (min-width: 1025px) {
                 .home-choice-mid { border-left: 1px solid rgba(0, 109, 109,0.15); border-right: 1px solid rgba(0, 109, 109,0.15); }
               }
             `}</style>
        </motion.div>
      </section>
      
      {/* Final Tactical Anchor — Full Width Immersive CTA */}
      <section style={{ 
        position: 'relative', 
        width: '100vw', 
        marginLeft: '50%', 
        transform: 'translateX(-50%)', 
        padding: 'clamp(4rem, 10vw, 8rem) 0', 
        background: '#011f1f',
        overflow: 'hidden'
      }}>
        {/* Immersive background overlay */}
        <div style={{ position: 'absolute', inset: 0, opacity: 0.35 }}>
           <img src="/bulls-bears-hero.png" alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(100%) brightness(0.4)' }} />
        </div>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, #011f1f 30%, rgba(1, 31, 31, 0.8) 60%, transparent 100%)' }} />
        
        {/* Subtle motion-inspired grid */}
        <div style={{ position: 'absolute', inset: 0, opacity: 0.1, backgroundImage: 'linear-gradient(rgba(0, 175, 175, 0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 175, 175, 0.2) 1px, transparent 1px)', backgroundSize: '60px 60px' }}></div>

        <div className="container" style={{ position: 'relative', zIndex: 10 }}>
          <div className="grid-2-cols" style={{ alignItems: 'center' }}>
            
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >

              <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', fontWeight: 900, color: 'white', lineHeight: 1.1, margin: '0 0 2rem', letterSpacing: '-2px' }}>
                Insight Driven, <br/>
                <span style={{ color: '#00afaf' }}>Execution Focused Team:</span>
              </h2>
              <p style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: 'clamp(1.1rem, 2vw, 1.3rem)', lineHeight: 1.6, maxWidth: '600px', fontWeight: 300 }}>
                Collaborate and work with RRP Investments to harness advanced quantitative strategies across equity, derivatives for effective decision-making.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8 }}
              style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', alignItems: 'flex-start' }}
            >
              <Link 
                to="/careers" 
                style={{ 
                  width: '100%',
                  maxWidth: '320px',
                  textAlign: 'center',
                  background: 'transparent', 
                  color: 'white', 
                  padding: '18px 40px', 
                  borderRadius: '12px', 
                  fontWeight: 700, 
                  fontSize: '1.1rem', 
                  border: '1.5px solid rgba(255, 255, 255, 0.3)', 
                  textDecoration: 'none',
                  transition: 'background 0.2s'
                }}
              >
                Join the Team
              </Link>
            </motion.div>
            
          </div>
        </div>
      </section>
    </div>
  );
}
