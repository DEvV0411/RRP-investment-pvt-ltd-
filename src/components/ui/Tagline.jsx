import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

export default function Tagline({ size = '1.25rem', gap = '10px', color = '#011f1f' }) {
  const pipeStyle = { color: '#011f1f', fontWeight: 300, opacity: 0.8 };
  
  const content = (
    <div 
      style={{ 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center', 
        gap: gap,
        color: color,
        fontWeight: 850,
        fontSize: size,
        letterSpacing: '3px',
        textTransform: 'uppercase',
        width: 'fit-content',
        margin: '0 auto'
      }}
    >
      <span style={pipeStyle}>|</span>
      <span>INTELLIGENCE DELIVERED</span>
      <span style={pipeStyle}>|</span>
    </div>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      {content}
    </motion.div>
  );
}
