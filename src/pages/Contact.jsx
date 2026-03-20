import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send, Clock, Building2 } from 'lucide-react';
import './Pages.css';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="page-wrapper pb-24">
      <div className="container relative z-10">

        <div className="page-header mt-12 mb-16">
          <div className="section-subtitle">Secure Communications</div>
          <h1 className="page-title">Contact Our Desk</h1>
          <p className="page-subtitle max-w-3xl mx-auto" style={{ textAlign: 'center' }}>
            Whether you're inquiring about institutional partnerships, recruitment, or general corporate information — all communications are routed securely.
          </p>
        </div>

        <div className="grid-2-cols" style={{ gap: '3rem', alignItems: 'flex-start' }}>

          {/* Left: Contact Details */}
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <div className="fin-card" style={{ padding: '3.5rem', borderTop: '4px solid #d4af37', height: '100%' }}>
              <h2 style={{ fontSize: '2rem', fontWeight: 800, color: 'white', marginBottom: '2.5rem', paddingBottom: '1.5rem', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
                Headquarters
              </h2>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1.2rem' }}>
                  <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(212,175,55,0.1)', border: '1px solid rgba(212,175,55,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#d4af37', flexShrink: 0 }}>
                    <Building2 size={22} />
                  </div>
                  <div>
                    <p style={{ color: '#d4af37', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '2px', fontWeight: 'bold', marginBottom: '0.4rem' }}>Registered Office</p>
                    <p style={{ color: '#e2e8f0', fontWeight: 600, fontSize: '1.05rem', lineHeight: 1.6 }}>RRP Investments Private Limited</p>
                    <p style={{ color: '#94a3b8', lineHeight: 1.7, marginTop: '0.25rem' }}>Mumbai, Maharashtra, India</p>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1.2rem' }}>
                  <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(59,130,246,0.08)', border: '1px solid rgba(59,130,246,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#60a5fa', flexShrink: 0 }}>
                    <Mail size={22} />
                  </div>
                  <div>
                    <p style={{ color: '#60a5fa', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '2px', fontWeight: 'bold', marginBottom: '0.4rem' }}>Electronic Mail</p>
                    <a href="mailto:desk@rrpinvestments.in" style={{ color: '#e2e8f0', textDecoration: 'none', fontWeight: 600, fontSize: '1.05rem', display: 'block' }}>desk@rrpinvestments.in</a>
                    <a href="mailto:hr@rrpinvestments.in" style={{ color: '#94a3b8', textDecoration: 'none', fontSize: '0.95rem', display: 'block', marginTop: '0.25rem' }}>hr@rrpinvestments.in <span style={{ fontSize: '0.8rem', color: '#64748b' }}>(Careers)</span></a>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1.2rem' }}>
                  <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(34,197,94,0.08)', border: '1px solid rgba(34,197,94,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#4ade80', flexShrink: 0 }}>
                    <Phone size={22} />
                  </div>
                  <div>
                    <p style={{ color: '#4ade80', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '2px', fontWeight: 'bold', marginBottom: '0.4rem' }}>Direct Lines</p>
                    <p style={{ color: '#e2e8f0', fontWeight: 600, fontSize: '1.05rem' }}>+91 (22) 1234-5678</p>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1.2rem' }}>
                  <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(168,85,247,0.08)', border: '1px solid rgba(168,85,247,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#c084fc', flexShrink: 0 }}>
                    <Clock size={22} />
                  </div>
                  <div>
                    <p style={{ color: '#c084fc', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '2px', fontWeight: 'bold', marginBottom: '0.4rem' }}>Trading Hours</p>
                    <p style={{ color: '#e2e8f0', fontWeight: 600, fontSize: '1.05rem' }}>Mon – Fri: 9:15 AM – 3:30 PM IST</p>
                    <p style={{ color: '#64748b', fontSize: '0.9rem', marginTop: '0.2rem' }}>NSE / BSE Market Hours</p>
                  </div>
                </div>

              </div>
            </div>
          </motion.div>

          {/* Right: Inquiry Form */}
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.15 }}>
            <div className="fin-card" style={{ padding: '3.5rem', borderTop: '4px solid #3b82f6' }}>
              <h2 style={{ fontSize: '2rem', fontWeight: 800, color: 'white', marginBottom: '2.5rem', paddingBottom: '1.5rem', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
                Send an Inquiry
              </h2>

              {submitted ? (
                <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} style={{ textAlign: 'center', padding: '4rem 2rem' }}>
                  <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: 'rgba(212,175,55,0.1)', border: '2px solid #d4af37', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 2rem' }}>
                    <Send size={36} style={{ color: '#d4af37' }} />
                  </div>
                  <h3 style={{ color: 'white', fontSize: '1.8rem', fontWeight: 800, marginBottom: '1rem' }}>Message Received</h3>
                  <p style={{ color: '#94a3b8', fontSize: '1.1rem', lineHeight: 1.7 }}>Our team will review your inquiry and get back to you within 1–2 business days.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                    <div>
                      <label style={{ display: 'block', color: '#94a3b8', fontSize: '0.8rem', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '0.6rem' }}>First Name</label>
                      <input type="text" required style={{ width: '100%', boxSizing: 'border-box', padding: '14px 16px', borderRadius: '8px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', color: 'white', outline: 'none', fontSize: '1rem', transition: 'border-color 0.2s' }} onFocus={e => e.target.style.borderColor = '#d4af37'} onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.1)'} placeholder="John" />
                    </div>
                    <div>
                      <label style={{ display: 'block', color: '#94a3b8', fontSize: '0.8rem', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '0.6rem' }}>Last Name</label>
                      <input type="text" required style={{ width: '100%', boxSizing: 'border-box', padding: '14px 16px', borderRadius: '8px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', color: 'white', outline: 'none', fontSize: '1rem', transition: 'border-color 0.2s' }} onFocus={e => e.target.style.borderColor = '#d4af37'} onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.1)'} placeholder="Doe" />
                    </div>
                  </div>
                  <div>
                    <label style={{ display: 'block', color: '#94a3b8', fontSize: '0.8rem', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '0.6rem' }}>Email Address</label>
                    <input type="email" required style={{ width: '100%', boxSizing: 'border-box', padding: '14px 16px', borderRadius: '8px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', color: 'white', outline: 'none', fontSize: '1rem', transition: 'border-color 0.2s' }} onFocus={e => e.target.style.borderColor = '#d4af37'} onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.1)'} placeholder="john@company.com" />
                  </div>
                  <div>
                    <label style={{ display: 'block', color: '#94a3b8', fontSize: '0.8rem', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '0.6rem' }}>Nature of Inquiry</label>
                    <select required style={{ width: '100%', boxSizing: 'border-box', padding: '14px 16px', borderRadius: '8px', background: 'rgba(15,23,42,1)', border: '1px solid rgba(255,255,255,0.1)', color: 'white', outline: 'none', cursor: 'pointer', fontSize: '1rem' }}>
                      <option value="">Select topic...</option>
                      <option value="institutional">Institutional Partnership</option>
                      <option value="careers">Careers / Recruitment</option>
                      <option value="trading">Trading Enquiry</option>
                      <option value="general">General Information</option>
                    </select>
                  </div>
                  <div>
                    <label style={{ display: 'block', color: '#94a3b8', fontSize: '0.8rem', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '0.6rem' }}>Message</label>
                    <textarea required rows={5} style={{ width: '100%', boxSizing: 'border-box', padding: '14px 16px', borderRadius: '8px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', color: 'white', outline: 'none', fontSize: '1rem', resize: 'vertical', fontFamily: 'inherit', transition: 'border-color 0.2s' }} onFocus={e => e.target.style.borderColor = '#d4af37'} onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.1)'} placeholder="Please describe your inquiry..." />
                  </div>
                  <button type="submit" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem', padding: '16px 32px', background: 'linear-gradient(135deg, #d4af37 0%, #b48608 100%)', color: 'black', fontWeight: 800, fontSize: '1.1rem', borderRadius: '8px', border: 'none', cursor: 'pointer', boxShadow: '0 0 20px rgba(212,175,55,0.3)', transition: 'transform 0.2s, box-shadow 0.2s' }} onMouseOver={e => { e.currentTarget.style.transform='scale(1.02)'; e.currentTarget.style.boxShadow='0 0 30px rgba(212,175,55,0.5)'; }} onMouseOut={e => { e.currentTarget.style.transform='scale(1)'; e.currentTarget.style.boxShadow='0 0 20px rgba(212,175,55,0.3)'; }}>
                    <Send size={20} />
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
}
