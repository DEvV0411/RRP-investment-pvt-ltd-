import { useState } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send, Clock, Building2 } from 'lucide-react';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebase';
import './Pages.css';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    try {
      await addDoc(collection(db, "contact_inquiries"), { ...data, timestamp: serverTimestamp() });
      setSubmitted(true);
    } catch (error) {
      console.error("Error submitting contact form: ", error);
      alert("Failed to send message. Please try again.");
    }
  }

  const inputStyle = {
    width: '100%', boxSizing: 'border-box', padding: '14px 16px', borderRadius: '10px',
    background: '#f0f8f8', border: '1.5px solid rgba(0, 109, 109,0.15)',
    color: '#011f1f', outline: 'none', fontSize: '1rem',
    transition: 'border-color 0.2s, box-shadow 0.2s', fontFamily: 'inherit'
  };

  return (
    <div className="page-wrapper pb-24">
      <div className="container relative z-10">

        <div className="page-header mt-12 mb-16">
          <div className="section-subtitle">Reach Us</div>
          <h1 className="page-title">Contact Our Desk</h1>
          <p className="page-subtitle max-w-3xl mx-auto" style={{ textAlign: 'center' }}>
            Whether you&#39;re inquiring about partnerships, recruitment, or general corporate information — we&#39;re here to help.
          </p>
        </div>

        <div className="grid-2-cols" style={{ gap: '3rem', alignItems: 'flex-start' }}>

          {/* Left: Contact Details */}
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <div style={{ background: 'linear-gradient(160deg, #eaf4f4 0%, white 100%)', border: '1px solid rgba(0, 109, 109,0.15)', borderRadius: '16px', padding: '3.5rem', height: '100%', borderTop: '4px solid #006D6D', boxShadow: '0 4px 24px rgba(0, 109, 109,0.07)' }}>
              <h2 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#011f1f', marginBottom: '2.5rem', paddingBottom: '1.5rem', borderBottom: '1px solid rgba(0, 109, 109,0.1)' }}>Headquarters</h2>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1.2rem' }}>
                  <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(0, 109, 109,0.08)', border: '1px solid rgba(0, 109, 109,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#006D6D', flexShrink: 0 }}>
                    <Building2 size={22} />
                  </div>
                  <div>
                    <p style={{ color: '#006D6D', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '2px', fontWeight: 'bold', marginBottom: '0.4rem' }}>Registered Office</p>
                    <p style={{ color: '#011f1f', fontWeight: 600, fontSize: '1rem', lineHeight: 1.6 }}>RRP Investments Private Limited</p>
                    <p style={{ color: '#2d5c5c', lineHeight: 1.7, marginTop: '0.25rem', fontSize: '0.95rem' }}>7th Floor, B Wing, Khandelwal House,<br/>Poddar Rd, Near Poddar Park,<br/>Malad (E), Mumbai-400097</p>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1.2rem' }}>
                  <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(0, 109, 109,0.08)', border: '1px solid rgba(0, 109, 109,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#006D6D', flexShrink: 0 }}>
                    <Mail size={22} />
                  </div>
                  <div>
                    <p style={{ color: '#006D6D', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '2px', fontWeight: 'bold', marginBottom: '0.4rem' }}>Electronic Mail</p>
                    <a href="mailto:desk@rrpinvestments.in" style={{ color: '#011f1f', textDecoration: 'none', fontWeight: 600, fontSize: '1rem', display: 'block' }}>desk@rrpinvestments.in</a>
                    <a href="mailto:hr@rrpinvestments.in" style={{ color: '#2d5c5c', textDecoration: 'none', fontSize: '0.9rem', display: 'block', marginTop: '0.25rem' }}>hr@rrpinvestments.in <span style={{ fontSize: '0.8rem', color: '#5a9090' }}>(Careers)</span></a>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1.2rem' }}>
                  <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(0, 109, 109,0.08)', border: '1px solid rgba(0, 109, 109,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#006D6D', flexShrink: 0 }}>
                    <Phone size={22} />
                  </div>
                  <div>
                    <p style={{ color: '#006D6D', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '2px', fontWeight: 'bold', marginBottom: '0.4rem' }}>Direct Lines</p>
                    <p style={{ color: '#2d5c5c', fontWeight: 500, fontSize: '1rem' }}>—</p>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1.2rem' }}>
                  <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(0, 109, 109,0.08)', border: '1px solid rgba(0, 109, 109,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#006D6D', flexShrink: 0 }}>
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

          {/* Right: Inquiry Form */}
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.15 }}>
            <div style={{ background: '#ffffff', border: '1px solid rgba(0, 109, 109,0.12)', borderRadius: '16px', padding: '3.5rem', borderTop: '4px solid #006D6D', boxShadow: '0 4px 24px rgba(0, 109, 109,0.07)' }}>
              <h2 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#011f1f', marginBottom: '2.5rem', paddingBottom: '1.5rem', borderBottom: '1px solid rgba(0, 109, 109,0.1)' }}>Send an Inquiry</h2>

              {submitted ? (
                <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} style={{ textAlign: 'center', padding: '4rem 2rem' }}>
                  <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: 'rgba(0, 109, 109,0.1)', border: '2px solid #006D6D', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 2rem' }}>
                    <Send size={36} style={{ color: '#006D6D' }} />
                  </div>
                  <h3 style={{ color: '#011f1f', fontSize: '1.8rem', fontWeight: 800, marginBottom: '1rem' }}>Message Received</h3>
                  <p style={{ color: '#2d5c5c', fontSize: '1.1rem', lineHeight: 1.7 }}>Our team will review your inquiry and get back to you within 1–2 business days.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                  <div className="form-grid-2">
                    <div>
                      <label style={{ display: 'block', color: '#2d5c5c', fontSize: '0.8rem', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '0.6rem' }}>First Name</label>
                      <input name="firstName" type="text" required style={inputStyle} onFocus={e => { e.target.style.borderColor = '#006D6D'; e.target.style.boxShadow = '0 0 0 3px rgba(0, 109, 109,0.1)'; }} onBlur={e => { e.target.style.borderColor = 'rgba(0, 109, 109,0.15)'; e.target.style.boxShadow = 'none'; }} placeholder="John" />
                    </div>
                    <div>
                      <label style={{ display: 'block', color: '#2d5c5c', fontSize: '0.8rem', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '0.6rem' }}>Last Name</label>
                      <input name="lastName" type="text" required style={inputStyle} onFocus={e => { e.target.style.borderColor = '#006D6D'; e.target.style.boxShadow = '0 0 0 3px rgba(0, 109, 109,0.1)'; }} onBlur={e => { e.target.style.borderColor = 'rgba(0, 109, 109,0.15)'; e.target.style.boxShadow = 'none'; }} placeholder="Doe" />
                    </div>
                  </div>
                  <div>
                    <label style={{ display: 'block', color: '#2d5c5c', fontSize: '0.8rem', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '0.6rem' }}>Email Address</label>
                    <input name="email" type="email" required style={inputStyle} onFocus={e => { e.target.style.borderColor = '#006D6D'; e.target.style.boxShadow = '0 0 0 3px rgba(0, 109, 109,0.1)'; }} onBlur={e => { e.target.style.borderColor = 'rgba(0, 109, 109,0.15)'; e.target.style.boxShadow = 'none'; }} placeholder="john@company.com" />
                  </div>
                  <div>
                    <label style={{ display: 'block', color: '#2d5c5c', fontSize: '0.8rem', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '0.6rem' }}>Nature of Inquiry</label>
                    <select name="inquiryType" required style={{ ...inputStyle, cursor: 'pointer' }}>
                      <option value="">Select topic...</option>
                      <option value="institutional">Institutional Partnership</option>
                      <option value="careers">Careers / Recruitment</option>
                      <option value="trading">Trading Enquiry</option>
                      <option value="general">General Information</option>
                    </select>
                  </div>
                  <div>
                    <label style={{ display: 'block', color: '#2d5c5c', fontSize: '0.8rem', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '0.6rem' }}>Message</label>
                    <textarea name="message" required rows={5} style={{ ...inputStyle, resize: 'vertical' }} onFocus={e => { e.target.style.borderColor = '#006D6D'; e.target.style.boxShadow = '0 0 0 3px rgba(0, 109, 109,0.1)'; }} onBlur={e => { e.target.style.borderColor = 'rgba(0, 109, 109,0.15)'; e.target.style.boxShadow = 'none'; }} placeholder="Please describe your inquiry..." />
                  </div>
                  <button type="submit" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem', padding: '16px 32px', background: 'linear-gradient(135deg, #006D6D 0%, #005858 100%)', color: 'white', fontWeight: 800, fontSize: '1.1rem', borderRadius: '10px', border: 'none', cursor: 'pointer', boxShadow: '0 4px 16px rgba(0, 109, 109,0.3)', transition: 'transform 0.2s, box-shadow 0.2s' }} onMouseOver={e => { e.currentTarget.style.transform = 'scale(1.02)'; e.currentTarget.style.boxShadow = '0 8px 28px rgba(0, 109, 109,0.4)'; }} onMouseOut={e => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.boxShadow = '0 4px 16px rgba(0, 109, 109,0.3)'; }}>
                    <Send size={20} /> Send Message
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
