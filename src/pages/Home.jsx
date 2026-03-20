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
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center p-4" style={{ background: '#080c14', position: 'relative' }}>
        {/* Dynamic Background */}
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'url(https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80)', backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.1, mixBlendMode: 'screen', filter: 'grayscale(80%) mt-4' }}></div>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(8,12,20,0.4) 0%, rgba(8,12,20,1) 100%)' }}></div>
        
        {/* Glowing Orbs */}
        <motion.div 
          animate={{ x: [0, 50, 0], y: [0, -30, 0], scale: [1, 1.1, 1] }} 
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          style={{ position: 'absolute', top: '25%', left: '20%', width: '350px', height: '350px', background: '#d4af37', borderRadius: '50%', filter: 'blur(120px)', opacity: 0.3, mixBlendMode: 'screen' }}
        />
        <motion.div 
          animate={{ x: [0, -40, 0], y: [0, 50, 0], scale: [1, 1.2, 1] }} 
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          style={{ position: 'absolute', bottom: '20%', right: '20%', width: '400px', height: '400px', background: '#3b82f6', borderRadius: '50%', filter: 'blur(140px)', opacity: 0.2, mixBlendMode: 'screen' }}
        />

        <div className="container" style={{ position: 'relative', zIndex: 10, textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: '160px', paddingBottom: '90px' }}>
          
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '8px 24px', borderRadius: '50px', marginBottom: '2rem', background: 'rgba(15, 23, 42, 0.6)', border: '1px solid rgba(212, 175, 55, 0.3)', backdropFilter: 'blur(10px)' }}
          >
            <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#22c55e', boxShadow: '0 0 10px #22c55e', animation: 'pulse 2s infinite' }}></span>
            <span style={{ color: '#d4af37', fontWeight: 600, letterSpacing: '2px', fontSize: '0.9rem', textTransform: 'uppercase' }}>Global Markets Active</span>
          </motion.div>
          
          <h1 style={{ fontWeight: 800, color: 'white', marginBottom: '2rem', lineHeight: 1.1, fontSize: 'clamp(3rem, 6vw, 5.5rem)', letterSpacing: '-1px' }}>
            <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>Creating Wealth</motion.span> <br />
            <motion.span 
               initial={{ opacity: 0, y: 20 }} 
               animate={{ opacity: 1, y: 0 }} 
               transition={{ duration: 0.8, delay: 0.3 }}
               style={{ background: 'linear-gradient(135deg, #fde047 0%, #d4af37 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', display: 'inline-block' }}
            >
               Through Precision.
            </motion.span>
          </h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            style={{ maxWidth: '800px', margin: '0 auto 3.5rem auto', fontSize: '1.25rem', color: '#94a3b8', lineHeight: 1.7, fontWeight: 300 }}
          >
            Proprietary capital driven by decades of institutional experience. Powered by sophisticated algorithmic and qualitative strategy. We execute flawlessly to extract absolute alpha.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' }}
          >
            <Link to="/business" className="btn-gold-solid" style={{ fontSize: '1.1rem', padding: '15px 35px', display: 'flex', alignItems: 'center', boxShadow: '0 0 30px rgba(212,175,55,0.4)', border: 'none' }}>
              Discover Strategies <Activity size={20} style={{ marginLeft: '12px' }} />
            </Link>
            <Link to="/about" className="btn-gold-outline" style={{ fontSize: '1.1rem', padding: '15px 35px', background: 'rgba(0,0,0,0.4)', backdropFilter: 'blur(10px)', display: 'flex', alignItems: 'center' }}>
              The Firm <ChevronRight size={20} style={{ marginLeft: '10px' }} />
            </Link>
          </motion.div>
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
                We are a group of highly experienced professionals striving to create value through our expertise in capital markets. We provide unparalleled service with absolute integrity to construct long-lasting wealth.
              </p>
              
              <div style={{ display: 'flex', gap: '3rem', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '2.5rem' }}>
                <div>
                  <h3 style={{ fontSize: '3rem', fontWeight: 800, color: 'white', margin: '0 0 0.5rem 0' }}><AnimatedCounter end={20} suffix="+" /></h3>
                  <p style={{ color: '#d4af37', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '2px', fontWeight: 600, margin: 0 }}>Years Experience</p>
                </div>
                <div>
                  <h3 style={{ fontSize: '3rem', fontWeight: 800, color: 'white', margin: '0 0 0.5rem 0' }}><AnimatedCounter end={100} suffix="%" /></h3>
                  <p style={{ color: '#d4af37', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '2px', fontWeight: 600, margin: 0 }}>Proprietary Capital</p>
                </div>
              </div>
            </div>

            {/* Right Image Container */}
            <div style={{ position: 'relative', width: '100%', minHeight: '400px', borderLeft: '1px solid rgba(255,255,255,0.1)' }}>
               <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80" alt="Corporate" style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.5, borderTopRightRadius: '15px', borderBottomRightRadius: '15px' }} />
               <div style={{ position: 'absolute', bottom: '2rem', left: '2rem', right: '2rem', background: 'rgba(255,255,255,0.05)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.1)', padding: '1.5rem', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                   <div>
                     <p style={{ color: 'white', fontWeight: 'bold', fontSize: '1.2rem', margin: '0 0 0.25rem 0' }}>Premium Operations</p>
                     <p style={{ color: '#d4af37', fontSize: '0.9rem', margin: 0 }}>Tier 1 Option Strategies</p>
                   </div>
                   <div style={{ width: '50px', height: '50px', background: 'rgba(212,175,55,0.2)', border: '1px solid rgba(212,175,55,0.5)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#d4af37' }}>
                     <TrendingUp size={24} />
                   </div>
               </div>
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
