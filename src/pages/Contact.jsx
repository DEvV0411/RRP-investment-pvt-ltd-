// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { Mail, Building2, Phone, Clock, ExternalLink } from 'lucide-react';
import './Pages.css';

export default function Contact() {
  return (
    <div className="page-wrapper pb-24">
      <div className="container relative z-10">

        <div className="page-header mt-12 mb-16">
          <h1 className="page-title">Contact Our Desk</h1>
          <p className="page-subtitle max-w-3xl mx-auto" style={{ textAlign: 'center' }}>
            Whether you're inquiring about partnerships, recruitment, or general corporate information — we're here to help.
          </p>
        </div>

        <div className="grid-2-cols" style={{ gap: '3rem', alignItems: 'flex-start' }}>

          {/* Left: Contact Details */}
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <div style={{ background: 'linear-gradient(160deg, #eaf4f4 0%, white 100%)', border: '1px solid rgba(0, 109, 109, 0.15)', borderRadius: '16px', padding: 'clamp(1.5rem, 5vw, 3.5rem)', height: '100%', borderTop: '4px solid #006D6D', boxShadow: '0 4px 24px rgba(0, 109, 109, 0.07)' }}>
              <h2 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#011f1f', marginBottom: '2.5rem', paddingBottom: '1.5rem', borderBottom: '1px solid rgba(0, 109, 109, 0.1)' }}>Headquarters</h2>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1.2rem' }}>
                  <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(0, 109, 109, 0.08)', border: '1px solid rgba(0, 109, 109, 0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#006D6D', flexShrink: 0 }}>
                    <Building2 size={22} />
                  </div>
                  <div>
                    <p style={{ color: '#006D6D', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '2px', fontWeight: 'bold', marginBottom: '0.4rem' }}>Registered Office</p>
                    <p style={{ color: '#011f1f', fontWeight: 600, fontSize: '1rem', lineHeight: 1.6 }}>RRP Investments Private Limited</p>
                    <p style={{ color: '#2d5c5c', lineHeight: 1.7, marginTop: '0.25rem', fontSize: '0.95rem' }}>7th Floor, B Wing, Khandelwal House,<br/>Poddar Rd, Near Poddar Park,<br/>Malad (E), Mumbai-400097</p>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1.2rem' }}>
                  <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(0, 109, 109, 0.08)', border: '1px solid rgba(0, 109, 109, 0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#006D6D', flexShrink: 0 }}>
                    <Mail size={22} />
                  </div>
                  <div>
                    <p style={{ color: '#006D6D', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '2px', fontWeight: 'bold', marginBottom: '0.4rem' }}>Electronic Mail</p>
                    <a href="mailto:desk@rrpinvestments.in" style={{ color: '#011f1f', textDecoration: 'none', fontWeight: 600, fontSize: '1rem', display: 'block' }}>desk@rrpinvestments.in</a>
                    <a href="mailto:hr@rrpinvestments.in" style={{ color: '#2d5c5c', textDecoration: 'none', fontSize: '0.9rem', display: 'block', marginTop: '0.25rem' }}>hr@rrpinvestments.in <span style={{ fontSize: '0.8rem', color: '#5a9090' }}>(Careers)</span></a>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1.2rem' }}>
                  <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(0, 109, 109, 0.08)', border: '1px solid rgba(0, 109, 109, 0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#006D6D', flexShrink: 0 }}>
                    <Phone size={22} />
                  </div>
                  <div>
                    <p style={{ color: '#006D6D', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '2px', fontWeight: 'bold', marginBottom: '0.4rem' }}>Direct Lines</p>
                    <p style={{ color: '#2d5c5c', fontWeight: 500, fontSize: '1rem' }}>—</p>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1.2rem' }}>
                  <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(0, 109, 109, 0.08)', border: '1px solid rgba(0, 109, 109, 0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#006D6D', flexShrink: 0 }}>
                    <Clock size={22} />
                  </div>
                  <div>
                    <p style={{ color: '#006D6D', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '2px', fontWeight: 'bold', marginBottom: '0.4rem' }}>Trading Hours</p>
                    <p style={{ color: '#011f1f', fontWeight: 600, fontSize: '1rem' }}>Mon – Fri: 9:15 AM – 3:30 PM IST</p>
                    <p style={{ color: '#5a9090', fontSize: '0.85rem', marginTop: '0.2rem' }}>NSE / BSE Market Hours</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Inquiry Form Replacement */}
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.15 }}>
            <div style={{ background: '#ffffff', border: '1px solid rgba(0, 109, 109, 0.12)', borderRadius: '16px', padding: 'clamp(1.5rem, 5vw, 3.5rem)', borderTop: '4px solid #006D6D', boxShadow: '0 4px 24px rgba(0, 109, 109, 0.07)', textAlign: 'center' }}>
              <h2 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#011f1f', marginBottom: '1.5rem', paddingBottom: '1.5rem', borderBottom: '1px solid rgba(0, 109, 109, 0.1)' }}>Send an Inquiry</h2>
              
              <p style={{ color: '#2d5c5c', fontSize: '1.1rem', lineHeight: 1.7, marginBottom: '2.5rem' }}>
                Please use our official inquiry form to reach out for partnerships, recruitment, or general information. Our team will review your message and respond within 1–2 business days.
              </p>

              <a 
                href="https://docs.google.com/forms/d/e/1FAIpQLSfB6D9GmKXral0rGxJCGn9kg-DPTPSokWHQ4XFcQAim4Afd0w/viewform?usp=send_form" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem', padding: '18px 40px', background: 'linear-gradient(135deg, #006D6D 0%, #005858 100%)', color: 'white', fontWeight: 800, fontSize: '1.2rem', borderRadius: '10px', border: 'none', cursor: 'pointer', boxShadow: '0 4px 16px rgba(0, 109, 109, 0.3)', transition: 'transform 0.2s, box-shadow 0.2s', textDecoration: 'none', width: '100%', boxSizing: 'border-box' }}
                onMouseOver={e => { e.currentTarget.style.transform = 'scale(1.02)'; e.currentTarget.style.boxShadow = '0 8px 28px rgba(0, 109, 109, 0.4)'; }}
                onMouseOut={e => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.boxShadow = '0 4px 16px rgba(0, 109, 109, 0.3)'; }}
              >
                Open Inquiry Form <ExternalLink size={22} />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
