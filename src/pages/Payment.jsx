import { motion } from 'framer-motion';
import { Lock } from 'lucide-react';
import './Pages.css';

export default function Payment() {
  return (
    <div className="page-wrapper flex items-center justify-center min-h-[70vh]">
      <div className="container relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }} 
          className="fin-card max-w-lg mx-auto p-12"
          style={{ borderTop: '4px solid #006D6D', textAlign: 'center' }}
        >
          <div className="mb-10">
            <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: '#f0fcfc', border: '1px solid rgba(0, 109, 109, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 2rem', color: '#006D6D' }}>
              <Lock size={36} strokeWidth={1.5} />
            </div>
            <h1 style={{ fontSize: '2.2rem', fontWeight: 800, color: '#011f1f', marginBottom: '0.8rem' }}>Client Portal</h1>
            <div className="title-underline center" style={{ width: '60px', marginBottom: '2rem' }}></div>
            <p style={{ color: '#5a9090', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '3px', fontWeight: 700 }}>Secured via Institutional Encryption</p>
          </div>
          
          <div className="pt-8" style={{ borderTop: '1px solid rgba(0, 109, 109, 0.08)' }}>
             <p style={{ color: '#2d5c5c', fontSize: '1.15rem', lineHeight: 1.8, marginBottom: '2.5rem', fontWeight: 300 }}>
               Authentication infrastructure is currently restricted to active trading partners only.
             </p>
             <div style={{ color: '#006D6D', fontWeight: 800, letterSpacing: '2px', textTransform: 'uppercase', fontSize: '0.85rem', padding: '12px 24px', background: '#f0fcfc', borderRadius: '8px', display: 'inline-block', border: '1px solid rgba(0, 109, 109, 0.1)' }}>
               Secure Login Restricted
             </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
