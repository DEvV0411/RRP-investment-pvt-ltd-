// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

export default function GlassCard({ children, className = '', delay = 0, hoverable = true }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: delay }}
      className={`glass-card p-6 md:p-8 ${className}`}
      style={{
        transition: hoverable ? 'box-shadow 0.3s ease, border-color 0.3s ease' : 'none',
        transformStyle: "preserve-3d",
      }}
      whileHover={hoverable ? { 
        y: -8, 
        rotateX: 2, 
        rotateY: -2,
        borderColor: 'rgba(212, 175, 55, 0.6)',
        boxShadow: "0 20px 40px rgba(0, 0, 0, 0.4), 0 0 20px rgba(37, 99, 235, 0.2)"
      } : {}}
    >
      {children}
    </motion.div>
  );
}
