import { Routes, Route, useLocation } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Business from './pages/Business';
import Careers from './pages/Careers';
import Internships from './pages/Internships';
import Contact from './pages/Contact';
import Payment from './pages/Payment';
import AdminDashboard from './pages/AdminDashboard';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import AmbientGlow from './components/ui/AmbientGlow';
import ScrollToTop from './components/utils/ScrollToTop';
import AIChatbot from './components/ui/AIChatbot';
import SEO from './components/utils/SEO';

const RouteSEO = () => {
  const location = useLocation();
  const seoData = {
      '/': { title: "RRP Investments | Quantitative Trading & Investments", description: "RRP Investments Private Limited is a premier quantitative trading and investment firm based in Mumbai." },
      '/about': { title: "About Us | RRP Investments", description: "Learn about the mission, philosophy, and quantitative technology powering RRP Investments." },
      '/business': { title: "Our Business | RRP Investments", description: "Explore our sophisticated algorithmic trading services." },
      '/careers': { title: "Careers | RRP Investments", description: "Join our team of elite quantitative analysts and software engineers in Mumbai." },
      '/internships': { title: "Internships | RRP Investments", description: "Apply for a rigorous internship in algorithmic trading." },
      '/contact': { title: "Contact | RRP Investments", description: "Get in touch for general inquiries or institutional partnerships." },
      '/payment': { title: "Secure Payments | RRP Investments", description: "Process your transactions securely." },
      '/admin': { title: "Executive Dashboard | RRP", description: "Secure administrative portal." },
      '/privacy': { title: "Privacy Policy | RRP Investments", description: "Learn about how we protect your data." },
      '/terms': { title: "Terms of Service | RRP Investments", description: "Legal terms for using our platform." }
  };
  const currentSeo = seoData[location.pathname] || seoData['/'];
  return <SEO {...currentSeo} />;
};

function App() {
  return (
    <>
      <RouteSEO />
      <ScrollToTop />
      <AmbientGlow />
      <AIChatbot />
      <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="business" element={<Business />} />
        <Route path="careers" element={<Careers />} />
        <Route path="internships" element={<Internships />} />
        <Route path="contact" element={<Contact />} />
        <Route path="payment" element={<Payment />} />
        <Route path="admin" element={<AdminDashboard />} />
        <Route path="privacy" element={<PrivacyPolicy />} />
        <Route path="terms" element={<TermsOfService />} />
      </Route>
    </Routes>
    </>
  );
}

export default App;
