// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { Gavel, Globe, Award, ShieldCheck } from 'lucide-react';
import './Pages.css';

export default function TermsOfService() {
  return (
    <div className="page-wrapper pb-24">
      <div className="container relative z-10">
        <div className="page-header mt-12 mb-16">
          <h1 className="page-title">Terms of Service</h1>
          <p className="page-subtitle max-w-3xl mx-auto" style={{ textAlign: 'center' }}>
            Governing your access to and use of RRP Investments' digital platform and services.
          </p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5 }}
          style={{ 
            background: '#ffffff', 
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
                <Globe size={24} color="#006D6D" /> 1. Acceptance & Use
              </h2>
              <p>
                By accessing this website, you agree to be bound by these Terms of Service and all applicable laws and regulations. The content on this site is provided for informational purposes only and does not constitute financial, investment, or professional advice.
              </p>
            </section>

            <section>
              <h2 style={{ color: '#011f1f', fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <Award size={24} color="#006D6D" /> 2. Proprietary Intellectual Property
              </h2>
              <p>
                RRP Investments Private Limited holds exclusive rights to all quantitative strategies, software models, proprietary algorithms, and brand assets displayed on this site. No part of this website may be reproduced or distributed without our explicit written consent.
              </p>
            </section>

            <section>
              <h2 style={{ color: '#011f1f', fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <ShieldCheck size={24} color="#006D6D" /> 3. Disclaimer of Liability
              </h2>
              <p>
                While we strive for maximum accuracy, RRP Investments makes no guarantees regarding the completeness or timeliness of any information provided. We shall not be liable for any losses arising from the use of this website or reliance on any material contained herein.
              </p>
            </section>

            <section>
              <h2 style={{ color: '#011f1f', fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <Gavel size={24} color="#006D6D" /> 4. Jurisdiction & Governing Law
              </h2>
              <p>
                These terms are governed by and construed in accordance with the laws of India. Any disputes relating to these terms shall be subject to the exclusive jurisdiction of the courts located in Mumbai, Maharashtra.
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
