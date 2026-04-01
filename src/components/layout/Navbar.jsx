import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion';
import StockTicker from '../ui/StockTicker';
import './Navbar.css';

const NAV_LINKS = [
  { path: '/',            label: 'Home' },
  { path: '/about',       label: 'About Us' },
  { path: '/business',    label: 'Business' },
  { path: '/careers',     label: 'Careers' },
  { path: '/internships', label: 'Internships' },
  { path: '/contact',     label: 'Contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled]     = useState(false);
  const [mobileOpen, setMobileOpen]     = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);



  return (
    <>
      {/* ─── Unified Header Strip ─── */}
      <header className={`nav-brand-strip ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container nav-container">
          <Link to="/" className="nav-logo-link">
            <img src="/logo.png" alt="RRP Investments" className="logo-image" />
          </Link>

          {/* Desktop links inside the same bar */}
          <nav className="pill-links">
            {NAV_LINKS.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link key={item.path} to={item.path} className={`pill-link ${isActive ? 'active' : ''}`}>
                  {isActive && (
                    <motion.div
                      layoutId="pill-indicator"
                      className="pill-active-bg"
                      transition={{ type: 'spring', stiffness: 500, damping: 38 }}
                    />
                  )}
                  {isActive && <span className="pill-dot" />}
                  <span className="pill-label">{item.label}</span>
                </Link>
              );
            })}
          </nav>

          {/* Mobile hamburger */}
          <button
            className="pill-menu-btn"
            onClick={() => setMobileOpen(o => !o)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* ─── Mobile drawer ─── */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              className="mobile-drawer"
              initial={{ opacity: 0, y: -10, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.97 }}
              transition={{ duration: 0.22 }}
            >
              {NAV_LINKS.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`mobile-link ${isActive ? 'active' : ''}`}
                    onClick={() => setMobileOpen(false)}
                  >
                    {isActive && <span className="pill-dot" />}
                    {item.label}
                  </Link>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
