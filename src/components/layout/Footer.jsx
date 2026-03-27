import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone, Linkedin, Twitter, Facebook } from 'lucide-react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <Link to="/" className="nav-logo">
            <img src="/Logo.png?v=3" alt="RRP Investments Logo" className="logo-image-footer" />
          </Link>
          <p className="footer-desc">
            Creating wealth through expertise in capital markets. Driven by experience, powered by strategy, delivering consistent financial growth.
          </p>
        </div>

        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/business">Our Business</Link></li>
            <li><Link to="/careers">Careers</Link></li>
            <li><Link to="/internships">Internships</Link></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h4>Contact Us</h4>
          <ul>
            <li>
              <MapPin size={18} className="contact-icon" style={{ flexShrink: 0, marginTop: '4px' }}/>
              <span style={{ lineHeight: '1.5' }}>7th Floor, B Wing, Khandelwal House, Poddar Rd, Near Poddar Park, Malad (E), Mumbai-400097</span>
            </li>
            <li>
              <Mail size={18} className="contact-icon" style={{ flexShrink: 0, marginTop: '4px' }}/>
              <a href="mailto:hr@rrpinvestments.com">hr@rrpinvestments.com</a>
            </li>
            <li>
              <Phone size={18} className="contact-icon" style={{ flexShrink: 0, marginTop: '4px' }}/>
              <a href="tel:"></a>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} RRP Investments Pvt Ltd. All rights reserved.</p>
          <div className="footer-legal">
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
