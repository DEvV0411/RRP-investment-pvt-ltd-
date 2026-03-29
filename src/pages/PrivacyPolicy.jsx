// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { Shield, Lock, Eye, FileText } from 'lucide-react';
import './Pages.css';

export default function PrivacyPolicy() {
  return (
    <div className="page-wrapper pb-24">
      <div className="container relative z-10">
        <div className="page-header mt-12 mb-16">
          <h1 className="page-title">Privacy Policy</h1>
          <p className="page-subtitle max-w-3xl mx-auto" style={{ textAlign: 'center' }}>
            Your privacy is of paramount importance to us. This policy outlines how we handle and protect your information.
          </p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5 }}
          style={{ 
            background: 'white', 
            borderRadius: '16px', 
            padding: 'clamp(1.5rem, 5vw, 3rem)', 
            border: '1px solid rgba(0, 109, 109, 0.1)',
            boxShadow: '0 4px 24px rgba(0, 109, 109, 0.05)',
            color: '#2d5c5c',
            lineHeight: 1.8
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
            <section>
              <h2 style={{ color: '#011f1f', fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <Shield size={24} color="#006D6D" /> 1. Information We Collect
              </h2>
              <p>
                We collect only the information necessary to provide our services and improve user experience. This includes information you provide via inquiry forms (name, email, institutional affiliation) and technical data (IP address, browser type) to help us ensure site performance and security.
              </p>
            </section>

            <section>
              <h2 style={{ color: '#011f1f', fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <Lock size={24} color="#006D6D" /> 2. Data Security
              </h2>
              <p>
                As a quantitative trading firm, security is at our core. We implement industry-leading encryption and security protocols to protect your personal data from unauthorized access, loss, or misuse. Our systems are regularly audited to maintain the highest standards of data integrity.
              </p>
            </section>

            <section>
              <h2 style={{ color: '#011f1f', fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <Eye size={24} color="#006D6D" /> 3. Third-Party Sharing
              </h2>
              <p>
                RRP Investments does not sell, rent, or trade your personal information to third parties. We may disclose information only when required by law or to trusted partners who assist us in operating our website, so long as those parties agree to keep this information confidential.
              </p>
            </section>

            <section>
              <h2 style={{ color: '#011f1f', fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <FileText size={24} color="#006D6D" /> 4. Compliance & Updates
              </h2>
              <p>
                This policy is subject to change to reflect updates in legal requirements or our operational practices. Significant changes will be posted on this page with an updated "Last Modified" date.
              </p>
              <p style={{ marginTop: '2rem', fontSize: '0.9rem', color: '#5a9090' }}>
                Last Updated: March 2026
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
