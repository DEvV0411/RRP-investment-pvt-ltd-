// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

export default function AmbientGlow() {
  return (
    <div className="ambient-container">
      <motion.div 
        animate={{
          x: [0, -50, 100, 0],
          y: [0, 50, -50, 0],
          scale: [1, 1.1, 0.9, 1],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
        className="ambient-orb orb-1"
        style={{ background: 'radial-gradient(circle, rgba(30, 58, 138, 0.3) 0%, transparent 60%)' }}
      />
      <motion.div 
        animate={{
          x: [0, 100, -100, 0],
          y: [0, -100, 100, 0],
          scale: [1, 1.2, 0.8, 1],
        }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear', delay: 2 }}
        className="ambient-orb orb-2"
        style={{ background: 'radial-gradient(circle, rgba(184, 134, 11, 0.12) 0%, transparent 60%)' }}
      />
    </div>
  );
}
