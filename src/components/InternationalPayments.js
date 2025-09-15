import React, { useEffect } from "react";
import "./InternationalPayments.css";
import AOS from "aos";
import "aos/dist/aos.css";

const InternationalPayments = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
     <section className="international-payments-section">
  {/* Top Banner */}
  <div className="banner text-white text-center p-5" data-aos="zoom-in">
    <h1 className="display-5 fw-bold">International Payments</h1>
    <p className="lead">
      Fast, secure, and reliable global payment solutions tailored for your business.
    </p>
  </div>

  {/* Why Choose Us */}
  <div className="container py-5" data-aos="fade-up">
    <h2 className="text-center mb-4">Why Choose Our International Payments?</h2>
    <div className="row g-4">
      <div className="col-md-4 text-center">
        <div className="feature-icon">
          <i className="bi bi-globe2"></i>
        </div>
        <h5>Global Reach</h5>
        <p>Send and receive payments in over 100 countries with ease.</p>
      </div>
      <div className="col-md-4 text-center">
        <div className="feature-icon">
          <i className="bi bi-shield-check"></i>
        </div>
        <h5>Secure Transactions</h5>
        <p>Top-tier encryption and fraud protection on every transaction.</p>
      </div>
      <div className="col-md-4 text-center">
        <div className="feature-icon">
          <i className="bi bi-clock-history"></i>
        </div>
        <h5>24/7 Support</h5>
        <p>Our global support team is here to assist you anytime, anywhere.</p>
      </div>
    </div>
  </div>

  {/* Key Features */}
  <div className="container py-5 key-features" data-aos="fade-up">
    <h2 className="text-center mb-4">Key Features</h2>
    <div className="row align-items-center g-4">
      <div className="col-lg-6">
        <ul className="feature-list">
          <li>
            <span className="icon-box">
              <i className="bi bi-check2-circle"></i>
            </span>
            Multi-currency transactions
          </li>
          <li>
            <span className="icon-box">
              <i className="bi bi-check2-circle"></i>
            </span>
            Real-time exchange rates
          </li>
          <li>
            <span className="icon-box">
              <i className="bi bi-check2-circle"></i>
            </span>
            Low transaction fees
          </li>
          <li>
            <span className="icon-box">
              <i className="bi bi-check2-circle"></i>
            </span>
            Instant payment tracking
          </li>
        </ul>
      </div>
      <div className="col-lg-6 text-center">
        <div className="image-box" data-aos="zoom-in">
          <img
            src="https://magnapro.ca/wp-content/uploads/2023/07/baseline-in-project-management-.webp"
            alt="International Transfer"
            className="features-image"
          />
        </div>
      </div>
    </div>
  </div>
</section>


      <section className="six-cards-section py-5">
        <div className="container">
          <div className="section-header text-center mb-5" data-aos="fade-down">
            <h2 className="fw-bold">Our Key Features</h2>
            <p className="text-muted">Explore benefits of international payments</p>
          </div>

          <div className="row g-4">
            <div className="col-md-6 col-lg-4" data-aos="zoom-in" data-aos-delay="100">
              <div className="card-box text-center p-4">
                <img src="https://cdn-icons-png.flaticon.com/512/744/744465.png" alt="Secure Payments" />
                <h5>Secure Payments</h5>
                <p>End-to-end encrypted international payment solutions.</p>
              </div>
            </div>

            <div className="col-md-6 col-lg-4" data-aos="zoom-in" data-aos-delay="200">
              <div className="card-box text-center p-4">
                <img src="https://cdn-icons-png.flaticon.com/512/2920/2920075.png" alt="Global Reach" />
                <h5>Global Reach</h5>
                <p>Send and receive money across 100+ countries easily.</p>
              </div>
            </div>

            <div className="col-md-6 col-lg-4" data-aos="zoom-in" data-aos-delay="300">
              <div className="card-box text-center p-4">
                <img src="https://cdn-icons-png.flaticon.com/512/3476/3476982.png" alt="Currency Conversion" />
                <h5>Currency Conversion</h5>
                <p>Real-time multi-currency support at competitive rates.</p>
              </div>
            </div>

            <div className="col-md-6 col-lg-4" data-aos="zoom-in" data-aos-delay="400">
              <div className="card-box text-center p-4">
                <img src="https://cdn-icons-png.flaticon.com/512/4290/4290854.png" alt="Easy Integration" />
                <h5>Easy Integration</h5>
                <p>Seamless API for e-commerce and mobile platforms.</p>
              </div>
            </div>

            <div className="col-md-6 col-lg-4" data-aos="zoom-in" data-aos-delay="500">
              <div className="card-box text-center p-4">
                <img src="https://cdn-icons-png.flaticon.com/512/3437/3437369.png" alt="Fast Transactions" />
                <h5>Fast Transactions</h5>
                <p>Enjoy quick processing for all cross-border payments.</p>
              </div>
            </div>

            <div className="col-md-6 col-lg-4" data-aos="zoom-in" data-aos-delay="600">
              <div className="card-box text-center p-4">
                <img src="https://cdn-icons-png.flaticon.com/512/5973/5973800.png" alt="24/7 Support" />
                <h5>24/7 Support</h5>
                <p>We’re here around the clock to support your business.</p>
              </div>
            </div>
          </div>
        </div>
      </section>


    </>


  );
};

export default InternationalPayments;
