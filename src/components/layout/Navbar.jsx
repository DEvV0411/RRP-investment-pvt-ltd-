import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import './Navbar.css';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      {/* Logo row — sits above the nav links, full-width with guaranteed dark contrast */}
      <div className="nav-logo-bar">
        <Link to="/" className="nav-logo">
          <img src="/logo.png?v=2" alt="RRP Investments Logo" className="logo-image" />
        </Link>
      </div>

      {/* Links row */}
      <div className="nav-links-bar">
        <div className="container nav-container">
          <div className={`nav-links ${mobileMenuOpen ? 'open' : ''}`}>
            {[
              { path: '/', label: 'Home' },
              { path: '/about', label: 'About Us' },
              { path: '/business', label: 'Our Business' },
              { path: '/careers', label: 'Careers' },
              { path: '/internships', label: 'Internships' },
              { path: '/contact', label: 'Contact' }
            ].map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`nav-link ${isActive ? 'active' : ''}`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {isActive && (
                    <motion.div
                      layoutId="nav-pill"
                      className="nav-pill"
                      transition={{ type: 'spring', stiffness: 450, damping: 35 }}
                    />
                  )}
                  <span className="relative z-10">{item.label}</span>
                </Link>
              );
            })}
          </div>

          <button className="mobile-menu-btn" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </nav>
  );
}
