import React, { useState } from "react";
import "./Footer.css";
import { NavLink } from "react-router-dom";
import { 
  FaFacebookF, 
  FaInstagram, 
  FaTwitter, 
  FaLinkedinIn,
  FaYoutube,
  FaWhatsapp,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaArrowRight,
  FaCertificate,
  FaUsers,
  FaRocket
} from "react-icons/fa";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail("");
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  return (
    <footer className="custom-footer">
      
      <div className="footer-main">
        <div className="footer-container container">
          <div className="row gy-4">

            {/* Company Branding */}
            <div className="col-lg-4 col-md-6">
              <div className="footer-section">
                <div className="footer-brand-section">
                  <h5 className="footer-brand">FinTradify</h5>
                  <span className="brand-tagline">Digital Excellence</span>
                </div>
                
                <p className="footer-desc">
                  Leading digital marketing agency specializing in transforming businesses 
                  through innovative <strong>SEO strategies</strong>, <strong>Social Media Marketing</strong>, 
                  <strong>PPC Campaigns</strong>, <strong>Web Development</strong>, and 
                  <strong>Brand Design</strong> solutions.
                </p>

                <div className="company-features">
                  <div className="feature-item">
                    <span className="feature-dot"></span>
                    <span>Google Certified Partners</span>
                  </div>
                  <div className="feature-item">
                    <span className="feature-dot"></span>
                    <span>24/7 Customer Support</span>
                  </div>
                  <div className="feature-item">
                    <span className="feature-dot"></span>
                    <span>Proven ROI Results</span>
                  </div>
                </div>
              </div>
            </div>

        

            {/* Company Links */}
            <div className="col-lg-2 col-md-6">
              <div className="footer-section">
                <h6 className="footer-title">
                  <span className="title-icon"></span>
                  Company
                </h6>
                <ul className="footer-links list-unstyled">
                  <li><NavLink to="/">Home</NavLink></li>
                  <li><NavLink to="/about">About Us</NavLink></li>
                  
           
                  <li><NavLink to="/blog/page">Blog</NavLink></li>
                  
                  <li><NavLink to="/contact">Contact Us</NavLink></li>
                </ul>
              </div>
            </div>

            {/* Newsletter Subscription */}
            <div className="col-lg-4 col-md-6">
              <div className="footer-section">
                <h6 className="footer-title">
                  <span className="title-icon"></span>
                  Stay Updated
                </h6>
                <p className="footer-desc">
                  Get the latest digital marketing trends, insights, and exclusive 
                  strategies delivered to your inbox weekly.
                </p>
                
                <form className="newsletter-form" onSubmit={handleSubscribe}>
                  <div className="input-group">
                    <input
                      type="email"
                      className="subscribe-input"
                      placeholder="Enter your email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                    <button type="submit" className="subscribe-btn">
                      <FaArrowRight />
                    </button>
                  </div>
                  {isSubscribed && (
                    <div className="subscription-success">
                      ✓ Successfully subscribed!
                    </div>
                  )}
                </form>

                <div className="newsletter-benefits">
                  <small>Join 10,000+ marketers who trust our insights</small>
                </div>
              </div>
            </div>

            {/* Contact & Social */}
            <div className="col-lg-2 col-md-6">
              <div className="footer-section">
                <h6 className="footer-title">
                  <span className="title-icon"></span>
                  Get In Touch
                </h6>

                <div className="contact-info">
                  <div className="contact-item">
                    <FaPhone className="contact-icon" />
                    <div>
                      <small>Call Us</small>
                      <p><a href="tel:+917836009907">+91 78360 09907</a></p>
                    </div>
                  </div>

                  <div className="contact-item">
                    <FaWhatsapp className="contact-icon whatsapp" />
                    <div>
                      <small>WhatsApp</small>
                      <p><a href="https://wa.me/917836009907">Quick Support</a></p>
                    </div>
                  </div>

                  <div className="contact-item">
                    <FaEnvelope className="contact-icon" />
                    <div>
                      <small>Email</small>
                      <p><a href="mailto:support@fintradify.com">support@fintradify.com</a></p>
                    </div>
                  </div>

                  <div className="contact-item">
                    <FaMapMarkerAlt className="contact-icon" />
                    <div>
                      <small>Address</small>
                      <p>C6, C Block, Sector 7<br />Noida, UP 201301</p>
                    </div>
                  </div>
                </div>

                {/* Social Media */}
                <div className="social-section">
                  <h6 className="social-title">Follow Us</h6>
                  <div className="social-icons">
                    <a href="https://www.facebook.com/FinTradify" target="_blank" rel="noopener noreferrer" className="social-link facebook">
                      <FaFacebookF />
                    </a>
                    <a href="https://www.instagram.com/fintradify/" target="_blank" rel="noopener noreferrer" className="social-link instagram">
                      <FaInstagram />
                    </a>
                   
                    <a href="https://linkedin.com/company/fintradify" target="_blank" rel="noopener noreferrer" className="social-link linkedin">
                      <FaLinkedinIn />
                    </a>
                    
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <p className="footer-copy mb-0">
                © {new Date().getFullYear()} FinTradify. All rights reserved.
              </p>
            </div>
            <div className="col-md-6">
              <div className="footer-bottom-links">
                <NavLink to="/privacy" className="footer-bottom-link">Privacy Policy</NavLink>
                <NavLink to="/terms" className="footer-bottom-link">Terms & Conditions</NavLink>
                <NavLink to="/sitemap" className="footer-bottom-link">Sitemap</NavLink>
              </div>
            </div>
          </div>
          
         
        </div>
      </div>
    </footer>
  );
};

export default Footer;