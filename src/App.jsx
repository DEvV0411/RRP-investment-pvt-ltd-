import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Business from './pages/Business';
import Careers from './pages/Careers';
import Internships from './pages/Internships';
import Contact from './pages/Contact';
import Payment from './pages/Payment';
import AmbientGlow from './components/ui/AmbientGlow';
import ScrollToTop from './components/utils/ScrollToTop';
import StockTicker from './components/ui/StockTicker';

function App() {
  return (
    <>
      <ScrollToTop />
      <AmbientGlow />
      <StockTicker />
      <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="business" element={<Business />} />
        <Route path="careers" element={<Careers />} />
        <Route path="internships" element={<Internships />} />
        <Route path="contact" element={<Contact />} />
        <Route path="payment" element={<Payment />} />
      </Route>
    </Routes>
    </>
  );
}

export default App;
