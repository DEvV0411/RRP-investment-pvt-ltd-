// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import GlassCard from '../components/ui/GlassCard';
import { GraduationCap, Building2, TrendingUp, Compass, UserPlus, HeartHandshake, ArrowRight } from 'lucide-react';
import './Pages.css';
import { Link } from 'react-router-dom';

export default function Careers() {
  const roles = [
    { title: "Option Trader", icon: <TrendingUp size={20} /> },
    { title: "Branch Manager", icon: <Building2 size={20} /> },
    { title: "Management Trainee / Intern", icon: <Compass size={20} /> },
  ];

  return (
    <div className="page-wrapper pb-16">
      <div className="page-header mt-8">
        <div className="container text-center">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="page-title text-5xl mb-6"
          >
            Careers at RRP
          </motion.h1>
          <div className="title-underline center"></div>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="page-subtitle max-w-4xl mx-auto text-lg leading-relaxed text-gray-300"
          >
            We, at RRP Investments Private Limited, empower our employees to contribute to our success with personal growth and overall development. We nurture the culture of leading with a zeal for teamwork showing high performance with honesty and integrity.
          </motion.p>
        </div>
      </div>

      <div className="container mt-16">
        {/* Recruitment Pathways */}
        <div className="grid-2-cols mb-16 gap-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="fin-card h-full" style={{ borderTop: '4px solid #3b82f6', padding: '3rem 2.5rem' }}>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-blue-900/40 border border-blue-500/30 rounded-xl flex items-center justify-center text-blue-400">
                  <GraduationCap size={28} />
                </div>
                <h2 className="text-3xl font-bold text-white">Campus Recruitment</h2>
              </div>
              <p className="text-gray-400 mb-8 border-b border-gray-700/50 pb-6 text-lg leading-relaxed">
                Kickstart your career with unparalleled training and real-market exposure straight out of university.
              </p>
              <div className="flex flex-col gap-5">
                {roles.map((role, idx) => (
                  <motion.div key={idx} whileHover={{ x: 10 }} className="flex items-center gap-4 text-gray-200 p-3 bg-white/5 rounded-lg border border-white/5 hover:border-blue-500/30 transition-all cursor-default">
                    <span className="text-blue-400">{role.icon}</span>
                    <span className="font-semibold text-lg">{role.title}</span>
                  </motion.div>
                ))}
              </div>
              <div className="mt-8 pt-6 border-t border-gray-700/50">
                <Link to="/contact" className="btn-gold-outline w-full flex justify-center text-blue-400 border-blue-500/50 hover:bg-blue-900/20 hover:text-blue-300">
                  Apply via Campus <ArrowRight size={18} className="ml-2" />
                </Link>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="fin-card h-full" style={{ borderTop: '4px solid #eab308', padding: '3rem 2.5rem' }}>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-yellow-900/40 border border-yellow-500/30 rounded-xl flex items-center justify-center text-yellow-500">
                  <UserPlus size={28} />
                </div>
                <h2 className="text-3xl font-bold text-white">Off-Campus Recruitment</h2>
              </div>
              <p className="text-gray-400 mb-8 border-b border-gray-700/50 pb-6 text-lg leading-relaxed">
                Bring your expertise and vision to a firm that values aggressive growth and strategic execution.
              </p>
              <div className="flex flex-col gap-5">
                {roles.map((role, idx) => (
                  <motion.div key={idx} whileHover={{ x: 10 }} className="flex items-center gap-4 text-gray-200 p-3 bg-white/5 rounded-lg border border-white/5 hover:border-yellow-500/30 transition-all cursor-default">
                    <span className="text-yellow-500">{role.icon}</span>
                    <span className="font-semibold text-lg">{role.title}</span>
                  </motion.div>
                ))}
              </div>
              <div className="mt-8 pt-6 border-t border-gray-700/50">
                <Link to="/contact" className="btn-gold-outline w-full flex justify-center text-yellow-500 border-yellow-500/50 hover:bg-yellow-900/20 hover:text-yellow-400">
                  Apply Off-Campus <ArrowRight size={18} className="ml-2" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Equal Opportunity & Culture */}
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
        >
          <div className="fin-card text-center p-12 relative overflow-hidden" style={{ borderTop: '1px solid rgba(59, 130, 246, 0.4)', background: 'linear-gradient(180deg, rgba(30, 58, 138, 0.15) 0%, rgba(13, 18, 30, 0.8) 100%)' }}>
            <HeartHandshake size={64} className="mx-auto text-blue-500 mb-6 opacity-80" />
            <h3 className="text-3xl font-bold text-white mb-6">Equal Opportunity Employer</h3>
            <p className="text-gray-300 text-lg leading-relaxed max-w-4xl mx-auto">
              Candidates are selected and promoted purely based on merits. Our employees are inspired by working alongside the most talented people in the industry and delivering imaginative new solutions that are redefining the future of finance. <br/><br/><span className="text-yellow-500 font-bold uppercase tracking-widest text-sm border-b border-yellow-500 pb-1">Our employees are valued for who they are.</span>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
