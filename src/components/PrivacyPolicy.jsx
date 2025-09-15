import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./PrivacyPolicy.css";
import { FaUserShield, FaLock, FaExchangeAlt, FaGlobe, FaInfoCircle, FaUserCog, FaDatabase, FaBell, FaChild } from "react-icons/fa";

const PrivacyPolicy = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="privacy-policy container py-5">
      <h1 className="text-center mb-4" data-aos="fade-down">
        <FaUserShield className="me-2" />
        Privacy Policy
      </h1>

      <section data-aos="fade-up">
        <h4><FaInfoCircle className="me-2" /> Introduction</h4>
        <p>
          This Privacy Policy describes how Fintradify collects, uses, and shares your personal information when you visit or interact with our website www.fintradify.com and use our financial trading platform and related services.
        </p>
      </section>

      <section data-aos="fade-up">
        <h4><FaUserCog className="me-2" /> Information We Collect</h4>
        <ul>
          <li><strong>Personal Information:</strong> Name, email, phone, address, DOB, financial/tax info, ID, etc.</li>
          <li><strong>Usage Information:</strong> IP, browser, page views, login history, trading activity.</li>
          <li><strong>Cookies & Tracking:</strong> Cookies, web beacons – can be disabled in browser settings.</li>
          <li><strong>Device Information:</strong> Hardware model, OS, device IDs.</li>
        </ul>
      </section>

      <section data-aos="fade-up">
        <h4><FaGlobe className="me-2" /> How We Use Your Information</h4>
        <ul>
          <li><strong>Providing Services:</strong> Manage accounts, execute trades, offer support.</li>
          <li><strong>Compliance:</strong> KYC & AML regulations.</li>
          <li><strong>Communication:</strong> Notify about updates, offers, etc.</li>
          <li><strong>Security:</strong> Fraud prevention and platform integrity.</li>
          <li><strong>Analytics:</strong> Analyze patterns and improve features.</li>
          <li><strong>Personalization:</strong> Tailored financial insights.</li>
        </ul>
      </section>

      <section data-aos="fade-up">
        <h4><FaExchangeAlt className="me-2" /> Sharing Your Information</h4>
        <ul>
          <li><strong>Service Providers:</strong> For KYC, payments, analytics, support – under data protection agreements.</li>
          <li><strong>Financial Institutions:</strong> For transactions and banking operations.</li>
          <li><strong>Regulatory Authorities:</strong> When legally required.</li>
          <li><strong>Business Transfers:</strong> Data may transfer in mergers/acquisitions.</li>
        </ul>
      </section>

      <section data-aos="fade-up">
        <h4><FaLock className="me-2" /> Data Security</h4>
        <p>
          We use encryption, multi-factor authentication, and other security protocols to safeguard your data. However, no system is completely secure.
        </p>
      </section>

      <section data-aos="fade-up">
        <h4><FaUserCog className="me-2" /> Your Choices</h4>
        <ul>
          <li><strong>Access & Correction:</strong> Update your info via account or support.</li>
          <li><strong>Opt-Out:</strong> Unsubscribe from emails anytime.</li>
          <li><strong>Cookie Settings:</strong> Manage via browser settings.</li>
        </ul>
      </section>

      <section data-aos="fade-up">
        <h4><FaDatabase className="me-2" /> Data Retention</h4>
        <p>
          We retain your data as needed to provide services, comply with legal obligations, and resolve disputes.
        </p>
      </section>

      <section data-aos="fade-up">
        <h4><FaChild className="me-2" /> Children's Privacy</h4>
        <p>
          Our services are not intended for children under 18. We do not knowingly collect data from minors.
        </p>
      </section>

      <section data-aos="fade-up">
        <h4><FaBell className="me-2" /> Changes to This Policy</h4>
        <p>
          We may update this Privacy Policy periodically. All changes will be posted on this page.
        </p>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
