import { motion } from 'framer-motion';
import { Mail, MapPin, Phone } from 'lucide-react';
import './Pages.css';

export default function Contact() {
  return (
    <div className="page-wrapper pb-24">
      <div className="container relative z-10">
        <div className="page-header mt-12">
          <div className="section-subtitle">Secure Communications</div>
          <h1 className="page-title">Contact Our Desk</h1>
          <p className="page-subtitle">
            Whether inquiring about recruitment, institutional partnerships, or general corporate information, all communications are routed securely.
          </p>
        </div>

        <div className="grid-2-cols mt-16">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <div className="fin-card">
              <h2 className="text-2xl font-bold text-white mb-8 border-b pb-4" style={{ borderColor: 'rgba(255,255,255,0.1)' }}>Global Headquarters</h2>
              
              <div className="flex flex-col gap-8">
                <div className="flex items-start gap-4">
                  <div className="fin-card-icon" style={{ width: '40px', height: '40px', marginBottom: 0 }}><MapPin size={20} /></div>
                  <div>
                    <h3 className="text-white font-bold text-lg mb-1">Financial District, Tower 1</h3>
                    <p className="text-gray-400">Level 45, Commercial Flow<br/>Mumbai, India 400001</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="fin-card-icon" style={{ width: '40px', height: '40px', marginBottom: 0 }}><Mail size={20} /></div>
                  <div>
                    <h3 className="text-white font-bold text-lg mb-1">Electronic Mail</h3>
                    <p className="text-gray-400">Trading: desk@rrpinvestments.in<br/>Careers: hr@rrpinvestments.in</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="fin-card-icon" style={{ width: '40px', height: '40px', marginBottom: 0 }}><Phone size={20} /></div>
                  <div>
                    <h3 className="text-white font-bold text-lg mb-1">Direct Lines</h3>
                    <p className="text-gray-400">+91 (22) 1234-5678</p>
                  </div>
                </div>
              </div>
              
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
