import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import AOS from 'aos';

const Navbar = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const [hoveredMenu, setHoveredMenu] = useState(null);

  const handleMouseEnter = (menu) => setHoveredMenu(menu);
  const handleMouseLeave = () => setHoveredMenu(null);

  return (
    <nav
      className="navbar navbar-expand-lg sticky-top shadow-sm custom-navbar"
      data-aos="slide-down"
    >
      <div className="container">
        {/* Logo */}
        <NavLink to="/" className="navbar-brand d-flex align-items-center gap-2 fs-3 fw-bold">
          <img
            src="https://i.ibb.co/n8Yy967T/Whats-App-Image-2025-06-16-at-16-09-13-951ea81f.png"
            alt="Logo"
            className="navbar-logo"
          />
        </NavLink>

        {/* Mobile Toggle */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto gap-lg-3 gap-1 align-items-lg-center">
            <NavItem to="/" label="Home" />
            <NavItem to="/about" label="About" />
            <NavItem to="/blog/page" label="Blog" />

            {/* Services Dropdown */}
            <DropdownMenu
              label="Services"
              isHovered={hoveredMenu === 'services'}
              onMouseEnter={() => handleMouseEnter('services')}
              onMouseLeave={handleMouseLeave}
              items={[
                { to: '/web/developer/page', label: 'Web & App Development' },
                { to: '/seo/page', label: 'SEO Optimization' },
                { to: '/social/spark/hub', label: 'Social Media Marketing' },
                { to: '/google/ads/page', label: 'Google Ads & Meta' },
                { to: '/ak/graphics/design', label: 'Graphic Design' },
              ]}
            />

            {/* Fintech Dropdown */}
            <DropdownMenu
              label="Fintech"
              isHovered={hoveredMenu === 'fintech'}
              onMouseEnter={() => handleMouseEnter('fintech')}
              onMouseLeave={handleMouseLeave}
              items={[
                { to: '/payment/gateway', label: 'Payment Gateway' },
                { to: '/peer/to/peer/transfer', label: 'Peer to Peer Transfer' },
                { to: '/digital/wallet', label: 'Digital Wallet' },
                { to: '/international/payment', label: 'International Payments' },
              ]}
            />

            {/* Contact Button */}
            <li className="nav-item contact-btn">
              <NavLink to="/contact" className="nav-link">
                Contact Us
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

// Reusable Nav Item (without icons)
const NavItem = ({ to, label }) => (
  <li className="nav-item">
    <NavLink
      to={to}
      end
      className={({ isActive }) =>
        `nav-link px-3 py-2 rounded fw-semibold ${
          isActive ? 'active-link' : 'nav-link-hover'
        }`
      }
    >
      {label}
    </NavLink>
  </li>
);

// Dropdown menu (without icons)
const DropdownMenu = ({ label, isHovered, onMouseEnter, onMouseLeave, items }) => (
  <li
    className={`nav-item dropdown position-relative ${isHovered ? 'show' : ''}`}
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
  >
    <span
      className="nav-link dropdown-toggle px-3 py-2 rounded nav-link-hover fw-semibold"
      role="button"
      aria-expanded={isHovered ? 'true' : 'false'}
    >
      {label}
    </span>
    <ul className={`dropdown-menu ${isHovered ? 'show' : ''}`}>
      {items.map((item, idx) => (
        <li key={idx}>
          <NavLink to={item.to} className="dropdown-item fw-medium">
            {item.label}
          </NavLink>
        </li>
      ))}
    </ul>
  </li>
);

export default Navbar;
