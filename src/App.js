
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WebDeveloperPage from './components/WebDeveloperPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 
import SEOPage from './components/SEOPage';
import BlogPage from './components/BlogPage';
import SocialSparkHub from './components/SocialSparkHub';
import GoogleAdsPage from './components/GoogleAdsPage';
import AKGraphicsDesign from './components/AKGraphicsDesign';
import PaymentGateway from './components/PaymentGateway';
import PeerToPeerTransfer from './components/PeerToPeerTransfer';
import DigitalWalletFeatures from './components/DigitalWalletFeatures';
import InternationalPayments from './components/InternationalPayments';
import ImageTextSection from './components/ImageTextSection';
import PrivacyPolicy from './components/PrivacyPolicy';
// import './styles/App.css';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/web/developer/page" element={<WebDeveloperPage />} />
        <Route path="/seo/page" element={<SEOPage />} />
        <Route path="/blog/page" element={<BlogPage />} />
        <Route path="/social/spark/hub" element={<SocialSparkHub />} />
        <Route path="/google/ads/page" element={<GoogleAdsPage />} />
        <Route path="/ak/graphics/design" element={<AKGraphicsDesign />} />
        <Route path="/payment/gateway" element={<PaymentGateway />} />
        <Route path="/peer/to/peer/transfer" element={<PeerToPeerTransfer />} />
        <Route path="/digital/wallet" element={<DigitalWalletFeatures />} />
        <Route path="/international/payment" element={<InternationalPayments />} />
        <Route path="/image" element={<ImageTextSection />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
       
        
        
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
