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
      
      {/* Hero Section — Full-Screen Photo */}
      <section style={{ position: 'relative', width: '100%', height: '100vh', minHeight: '600px', overflow: 'hidden', background: '#050810' }}>
        {/* Primary full-bleed photo */}
        <img
          src="/hero-trading-wide.png"
          alt="RRP Investments HFT Trading Floor"
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', opacity: 0.85 }}
        />
        {/* Dark vignette overlay so edges don't distract */}
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at center, rgba(0,0,0,0) 30%, rgba(0,0,0,0.7) 100%)' }} />
        {/* Bottom gradient for info card readability */}
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(5,8,16,0.95) 0%, rgba(5,8,16,0.3) 50%, transparent 100%)' }} />
        {/* Top gold accent line */}
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', background: 'linear-gradient(90deg, transparent, #d4af37, transparent)', zIndex: 5 }} />

        {/* Floating info card — bottom left */}
        <div style={{ position: 'absolute', bottom: '80px', left: 0, right: 0, zIndex: 10 }}>
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
              style={{ maxWidth: '750px' }}
            >
              {/* Company name block */}
              <h1 style={{ fontSize: 'clamp(2.8rem, 5.5vw, 5rem)', fontWeight: 900, color: 'white', lineHeight: 1.1, margin: '0 0 0.5rem', letterSpacing: '-1px', textShadow: '0 4px 30px rgba(0,0,0,0.9)' }}>
                RRP Investments
              </h1>
              <p style={{ color: '#d4af37', fontWeight: 700, fontSize: '1.1rem', letterSpacing: '3px', textTransform: 'uppercase', margin: '0 0 2rem', textShadow: '0 2px 10px rgba(0,0,0,0.8)' }}>
                Private Limited
              </p>
              {/* Domain tags — what the firm works with, no proof needed */}
              <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
                {[
                  'Algorithmic Trading',
                  'Machine Learning',
                  'Quantitative Finance',
                  'Low Latency Systems',
                ].map((tag, i) => (
                  <div key={i} style={{ padding: '7px 18px', borderRadius: '6px', background: 'rgba(10,15,25,0.8)', border: '1px solid rgba(212,175,55,0.2)', backdropFilter: 'blur(10px)' }}>
                    <span style={{ color: '#d4af37', fontSize: '0.82rem', fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase' }}>{tag}</span>
                  </div>
                ))}
              </div>

              <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                <Link to="/business" style={{ display: 'inline-flex', alignItems: 'center', padding: '14px 32px', background: 'linear-gradient(135deg, #d4af37, #b48608)', color: 'black', fontWeight: 800, borderRadius: '8px', textDecoration: 'none', fontSize: '1rem', boxShadow: '0 0 25px rgba(212,175,55,0.5)', border: 'none', transition: 'transform 0.2s' }}>
                  Discover Strategies <Activity size={18} style={{ marginLeft: '10px' }} />
                </Link>
                <Link to="/about" style={{ display: 'inline-flex', alignItems: 'center', padding: '14px 32px', background: 'rgba(255,255,255,0.07)', color: 'white', fontWeight: 700, borderRadius: '8px', textDecoration: 'none', fontSize: '1rem', border: '1px solid rgba(255,255,255,0.2)', backdropFilter: 'blur(10px)' }}>
                  The Firm <ChevronRight size={18} style={{ marginLeft: '8px' }} />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>



      {/* Excellence Delivered */}
      <section className="container" style={{ position: 'relative', zIndex: 20, marginTop: '-60px', marginBottom: '80px' }}>
        <motion.div 
           initial={{ opacity: 0, y: 50 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, amount: 0.2 }}
           transition={{ duration: 0.8 }}
           className="fin-card"
        >
          <div className="grid-2-cols" style={{ padding: '0', gap: 0 }}>
            {/* Left Content */}
            <div style={{ padding: '4rem' }}>
              <div style={{ color: '#d4af37', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '3px', fontSize: '0.9rem', marginBottom: '1.5rem' }}>Excellence Delivered</div>
              <h2 style={{ fontSize: '3rem', fontWeight: 800, color: 'white', marginBottom: '2rem', lineHeight: 1.2 }}>Elite Financial <br/><span style={{ color: '#94a3b8' }}>Engineering.</span></h2>
              <p style={{ color: '#94a3b8', fontSize: '1.1rem', lineHeight: 1.8, marginBottom: '2.5rem' }}>
                The company operates as a technology-driven, research-oriented trading organization, integrating algorithmic models, AI/ML techniques, and data-driven systems with equity, futures, and options trading strategies.
              </p>
              
            </div>

            {/* Right Image Container */}
            <div style={{ position: 'relative', width: '100%', minHeight: '400px', borderLeft: '1px solid rgba(255,255,255,0.1)' }}>
               <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80" alt="Algorithmic Trading Network" style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.5, borderTopRightRadius: '15px', borderBottomRightRadius: '15px' }} />
            </div>
          </div>
        </motion.div>
      </section>

      {/* Our Core Architecture */}
      <section style={{ padding: '6rem 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '5rem', maxWidth: '800px', margin: '0 auto 5rem auto' }}>
            <h2 style={{ fontSize: '3.5rem', fontWeight: 800, color: 'white', margin: '0 0 1.5rem 0' }}>Our Core <span style={{ color: '#d4af37' }}>Architecture</span></h2>
            <p style={{ color: '#94a3b8', fontSize: '1.2rem', lineHeight: 1.6, fontWeight: 300, margin: 0 }}>
              Advanced quantitative trading methodologies executed flawlessly by industry veterans utilizing institutional-grade infrastructure.
            </p>
          </div>
          
          <div className="grid-2-cols" style={{ gap: '2rem' }}>
            {[
              { icon: BarChart2, title: "Proprietary Trading", desc: "Fully funded, high-performance trading capitalizing on market inefficiencies without client dependency." },
              { icon: Activity, title: "Algorithmic Scalping", desc: "Intraday liquidity-based trading focusing on high-volume markets to extract value from bid-ask spreads." },
              { icon: ShieldCheck, title: "Option Strategies", desc: "Risk-return optimization using synthetic positions and portfolio insurance for consistent absolute alpha." },
              { icon: Globe, title: "Delta Hedging", desc: "Risk-neutral portfolio management utilizing advanced subordinated derivatives models and Greeks." }
            ].map((pillar, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }}>
                <div className="fin-card" style={{ padding: '3rem', height: '100%', display: 'flex', flexDirection: 'column' }}>
                  <div style={{ width: '60px', height: '60px', background: 'rgba(37,99,235,0.1)', border: '1px solid rgba(37,99,235,0.3)', borderRadius: '15px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
                    <pillar.icon style={{ color: '#60a5fa' }} size={30} />
                  </div>
                  <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'white', margin: '0 0 1rem 0' }}>{pillar.title}</h3>
                  <p style={{ color: '#94a3b8', fontSize: '1rem', lineHeight: 1.7, margin: 0 }}>{pillar.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* The Intelligent Choice */}
      <section className="container" style={{ marginBottom: '8rem' }}>
        <motion.div 
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           viewport={{ once: true }}
           className="fin-card" 
           style={{ padding: '5rem', textAlign: 'center', position: 'relative', overflow: 'hidden' }}
        >
             {/* Subtle internal grid */}
             <div style={{ position: 'absolute', inset: 0, opacity: 0.05, backgroundImage: 'linear-gradient(#d4af37 1px, transparent 1px), linear-gradient(90deg, #d4af37 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
             
             <div style={{ position: 'relative', zIndex: 10 }}>
                <h2 style={{ fontSize: '3rem', fontWeight: 800, color: 'white', margin: '0 0 4rem 0' }}>The Intelligent Choice</h2>
                
                <div className="grid-3-cols" style={{ gap: '3rem', alignItems: 'flex-start' }}>
                  
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem', height: '80px' }}>
                      <span style={{ fontSize: '4.5rem', fontWeight: 'bold', color: 'white', lineHeight: 1 }}><AnimatedCounter end={100} prefix="" suffix="" /></span>
                      <span style={{ fontSize: '2rem', color: '#d4af37', fontWeight: 'bold', marginLeft: '5px' }}>%</span>
                    </div>
                    <h4 style={{ fontSize: '1.1rem', fontWeight: 'bold', color: 'white', margin: '0 0 1rem 0', textTransform: 'uppercase', letterSpacing: '2px' }}>Research-Driven</h4>
                    <p style={{ color: '#94a3b8', lineHeight: 1.6, fontSize: '0.95rem', margin: 0 }}>Every directional decision is backed by deep analytical modeling and quantitative conviction.</p>
                  </div>

                  <div style={{ textAlign: 'center', borderLeft: '1px solid rgba(255,255,255,0.1)', borderRight: '1px solid rgba(255,255,255,0.1)', padding: '0 1rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem', height: '80px' }}>
                      <span style={{ fontSize: '4.5rem', fontWeight: 'bold', color: 'white', lineHeight: 1 }}><AnimatedCounter end={3} prefix="" suffix="" /></span>
                      <span style={{ fontSize: '1.2rem', color: '#d4af37', fontWeight: 'bold', marginLeft: '10px', textTransform: 'uppercase', letterSpacing: '2px' }}>Core</span>
                    </div>
                    <h4 style={{ fontSize: '1.1rem', fontWeight: 'bold', color: 'white', margin: '0 0 1rem 0', textTransform: 'uppercase', letterSpacing: '2px' }}>Leadership Focus</h4>
                    <p style={{ color: '#94a3b8', lineHeight: 1.6, fontSize: '0.95rem', margin: 0 }}>Guided directly by visionaries with multi-decade proven market success in turbulent conditions.</p>
                  </div>

                  <div style={{ textAlign: 'center' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem', height: '80px' }}>
                      <span style={{ fontSize: '4.5rem', fontWeight: 'bold', color: 'white', lineHeight: 1 }}><AnimatedCounter end={360} prefix="" suffix="" /></span>
                      <span style={{ fontSize: '2.5rem', color: '#d4af37', fontWeight: 'bold', marginLeft: '5px' }}>°</span>
                    </div>
                    <h4 style={{ fontSize: '1.1rem', fontWeight: 'bold', color: 'white', margin: '0 0 1rem 0', textTransform: 'uppercase', letterSpacing: '2px' }}>Risk Management</h4>
                    <p style={{ color: '#94a3b8', lineHeight: 1.6, fontSize: '0.95rem', margin: 0 }}>Strict dynamic hedging and absolute capital protection protocols securing downside tail risk.</p>
                  </div>

                </div>
             </div>
        </motion.div>
      </section>
      
      {/* Massive CTA Band */}
      <section className="container" style={{ marginBottom: '8rem' }}>
         <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="fin-card"
            style={{ padding: '5rem 2rem', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', background: 'linear-gradient(180deg, rgba(15, 23, 42, 0.8) 0%, rgba(30, 27, 75, 0.9) 100%)', borderTop: '2px solid rgba(212, 175, 55, 0.5)' }}
         >
            <div style={{ position: 'absolute', top: 0, right: 0, width: '400px', height: '100%', background: 'rgba(212,175,55,0.05)', transform: 'skewX(-20deg) translateX(100px)' }}></div>
            
            <div style={{ position: 'relative', zIndex: 10, marginBottom: '2.5rem' }}>
               <div style={{ color: '#d4af37', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '3px', fontSize: '0.9rem', marginBottom: '1rem' }}>Step Forward</div>
               <h2 style={{ fontSize: '3rem', fontWeight: 800, color: 'white', margin: '0 0 1rem 0' }}>Ready to shape your future?</h2>
               <p style={{ color: '#bfdbfe', fontSize: '1.2rem', margin: '0 auto', lineHeight: 1.6, maxWidth: '800px' }}>Access elite proprietary trading models. Join our team of professionals or explore our management hierarchies.</p>
            </div>
            
            <div style={{ position: 'relative', zIndex: 10, display: 'flex', gap: '2rem', flexWrap: 'wrap', justifyContent: 'center' }}>
               <Link to="/contact" style={{ display: 'inline-block', background: 'linear-gradient(135deg, #d4af37 0%, #b48608 100%)', color: 'black', padding: '16px 40px', borderRadius: '8px', fontWeight: 'bold', fontSize: '1.1rem', textDecoration: 'none', boxShadow: '0 0 20px rgba(212,175,55,0.4)', border: '1px solid #fde047' }}>Contact the Desk</Link>
               <Link to="/careers" style={{ display: 'inline-block', background: 'transparent', color: 'white', padding: '16px 40px', borderRadius: '8px', fontWeight: 'bold', fontSize: '1.1rem', border: '1px solid rgba(255,255,255,0.3)' }}>View Careers</Link>
            </div>
         </motion.div>
      </section>

    </div>
  );
}
