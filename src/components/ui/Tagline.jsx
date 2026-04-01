import React from 'react';
import { motion } from 'framer-motion';

/**
 * Custom Key Icon SVG - Matches RRP Investments logo exactly
 */
const KeyIcon = ({ size = 24, color = '#006D6D' }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke={color} 
    strokeWidth="2.2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <circle cx="6.5" cy="12" r="4.5" />
    <circle cx="6.5" cy="12" r="1.2" />
    <path d="M11 12h11" />
    <path d="M17 12l0 3.5" />
    <path d="M21 12l0 3.5" />
  </svg>
);

/**
 * Custom Data/File Icon SVG - Matches RRP Investments logo exactly
 */
const DataFileIcon = ({ size = 24, color = '#006D6D' }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 28 28" 
    fill="none" 
    stroke={color} 
    strokeWidth="2.2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    {/* Connection circuitry on left */}
    <path d="M2 9h4" />
    <path d="M2 14h4" />
    <path d="M2 19h4" />
    <circle cx="2" cy="9" r="0.5" fill={color} />
    <circle cx="2" cy="14" r="0.5" fill={color} />
    <circle cx="2" cy="19" r="0.5" fill={color} />
    
    {/* File shape */}
    <path d="M22 4H8a2 2 0 0 0-2 2v18a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V10z" />
    <path d="M22 10V4h-6" />
    
    {/* Internal lines */}
    <path d="M10 14h10" />
    <path d="M10 18h10" />
    <path d="M10 22h6" />
  </svg>
);

export default function Tagline({ size = '1.25rem', gap = '15px', color = '#011f1f', iconSize = 22 }) {
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
      <KeyIcon size={iconSize} />
      <span>INTELLIGENCE DELIVERED</span>
      <DataFileIcon size={iconSize} />
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
