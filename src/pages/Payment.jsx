import { motion } from 'framer-motion';
import { Lock } from 'lucide-react';
import './Pages.css';

export default function Payment() {
  return (
    <div className="page-wrapper flex items-center justify-center">
      <div className="container relative z-10">
        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="fin-card max-w-lg mx-auto mt-16 p-12">
            <div className="text-center mb-8">
              <div className="fin-card-icon mx-auto"><Lock size={32} /></div>
              <h1 className="text-3xl font-bold text-white mb-2">Client Portal</h1>
              <p className="text-gray-400 text-sm border-b pb-6" style={{ borderColor: 'rgba(255,255,255,0.1)' }}>Secured via Institutional Encryption</p>
            </div>
            
            <div className="text-center">
               <p className="text-gray-300 text-lg mb-8">Authentication infrastructure is currently restricted to active trading partners only.</p>
               <button className="section-subtitle bg-transparent" style={{ border: '1px solid #d4af37', padding: '0.75rem 2rem' }}>Secure Login Unavailable</button>
            </div>
        </motion.div>
      </div>
    </div>
  );
}
