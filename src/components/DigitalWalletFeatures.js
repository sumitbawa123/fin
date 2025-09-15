import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./DigitalWalletFeatures.css";

const DigitalWalletFeatures = () => {
    useEffect(() => {
        AOS.init({ duration: 1200, once: true });
    }, []);

    return (

        <>
            <section className="banner-section " data-aos="fade-up" data-aos-delay="100"  >
                <div className="banner-content">
                    <h1>Digital Wallet</h1>
                    <p>Grow your brand with our creative marketing solutions.</p>
                    <button className="banner-btn">Get Started</button>
                </div>
            </section>

            <section id="services" className="services section">
                {/* Section Title */}
                <div className="container section-title" data-aos="fade-up">
                    <h2>Services</h2>
                    <p>
                        <span>Check Our</span>{" "}
                        <span className="description-title">Services</span>
                    </p>
                </div>

                <div className="container">
                    <div className="row gy-4 ">

                        <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
                            <div className="service-item position-relative">
                                <div className="icon">
                                    <i className="bi bi-wallet2"></i>
                                </div>
                                <a href="#" className="stretched-link">
                                    <h3>Digital Wallet</h3>
                                </a>
                                <p>
                                    Secure and seamless transactions with our advanced digital wallet. Store, send, and manage money with ease and safety anytime, anywhere.
                                </p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
                            <div className="service-item position-relative">
                                <div className="icon">
                                    <i className="bi bi-credit-card"></i>
                                </div>
                                <a href="#" className="stretched-link">
                                    <h3>Payment Gateway</h3>
                                </a>
                                <p>
                                    Fast and reliable payment gateway integration for businesses. Accept payments from customers across the globe with complete security.
                                </p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
                            <div className="service-item position-relative">
                                <div className="icon">
                                    <i className="bi bi-phone"></i>
                                </div>
                                <a href="#" className="stretched-link">
                                    <h3>Mobile Banking</h3>
                                </a>
                                <p>
                                    Manage your finances on the go with our mobile banking solution. View balances, transfer money, and pay bills securely via smartphone.
                                </p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="400">
                            <div className="service-item position-relative">
                                <div className="icon">
                                    <i className="bi bi-shield-lock"></i>
                                </div>
                                <a href="#" className="stretched-link">
                                    <h3>Fraud Protection</h3>
                                </a>
                                <p>
                                    Stay protected from online threats with our AI-powered fraud detection. We monitor transactions to ensure maximum safety and trust.
                                </p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="500">
                            <div className="service-item position-relative">
                                <div className="icon">
                                    <i className="bi bi-cash-coin"></i>
                                </div>
                                <a href="#" className="stretched-link">
                                    <h3>Cashback Offers</h3>
                                </a>
                                <p>
                                    Enjoy exciting cashback and rewards on every transaction. Save more with exclusive deals tailored just for you.
                                </p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="600">
                            <div className="service-item position-relative">
                                <div className="icon">
                                    <i className="bi bi-qr-code-scan"></i>
                                </div>
                                <a href="#" className="stretched-link">
                                    <h3>QR Code Payments</h3>
                                </a>
                                <p>
                                    Make quick and contactless payments by scanning QR codes. Simple, fast, and secure payment method for modern needs.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>


           <section className="digital-wallet-section py-6">
  <div className="container">
    <h2 className="section-title text-center mb-5" data-aos="fade-down">
      Digital Wallet Features
    </h2>
    <div className="row gy-5">

      {/* Secure Transactions */}
      <div className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="100">
        <div className="feature-card shadow-lg rounded-4 p-4 h-100 d-flex flex-column align-items-center text-center">
          <div className="feature-img-wrapper mb-3">
            <img
              src="https://sanctamaria.in/wp-content/uploads/2022/02/electronic-transactions-more-secure.png"
              alt="Secure Transactions"
              className="feature-img rounded-3"
            />
          </div>
          <h5 className="feature-title mb-2">Secure Transactions</h5>
          <p className="feature-desc">
            Your money is protected with bank-grade encryption and multi-factor authentication.
          </p>
        </div>
      </div>

      {/* Instant Transfers */}
      <div className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="250">
        <div className="feature-card shadow-lg rounded-4 p-4 h-100 d-flex flex-column align-items-center text-center">
          <div className="feature-img-wrapper mb-3">
            <img
              src="https://www.europeanpaymentscouncil.eu/sites/default/files/inline-images/EPC_Infographics_092019.jpg"
              alt="Instant Transfers"
              className="feature-img rounded-3"
            />
          </div>
          <h5 className="feature-title mb-2">Instant Transfers</h5>
          <p className="feature-desc">
            Send and receive money instantly with zero delays and minimal fees.
          </p>
        </div>
      </div>

      {/* Easy Top-up */}
      <div className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="400">
        <div className="feature-card shadow-lg rounded-4 p-4 h-100 d-flex flex-column align-items-center text-center">
          <div className="feature-img-wrapper mb-3">
            <img
              src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80"
              alt="Easy Top-up"
              className="feature-img rounded-3"
            />
          </div>
          <h5 className="feature-title mb-2">Easy Top-up</h5>
          <p className="feature-desc">
            Add funds quickly from your bank account or cards anytime, anywhere.
          </p>
        </div>
      </div>

      {/* Rewards & Cashback */}
      <div className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="550">
        <div className="feature-card shadow-lg rounded-4 p-4 h-100 d-flex flex-column align-items-center text-center">
          <div className="feature-img-wrapper mb-3">
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=400&q=80"
              alt="Rewards & Cashback"
              className="feature-img rounded-3"
            />
          </div>
          <h5 className="feature-title mb-2">Rewards & Cashback</h5>
          <p className="feature-desc">
            Get exciting rewards and cashback on every transaction you make.
          </p>
        </div>
      </div>

      {/* Multi-Currency Support */}
      <div className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="700">
        <div className="feature-card shadow-lg rounded-4 p-4 h-100 d-flex flex-column align-items-center text-center">
          <div className="feature-img-wrapper mb-3">
            <img
              src="https://images.unsplash.com/photo-1523978591478-c753949ff840?auto=format&fit=crop&w=400&q=80"
              alt="Multi-Currency Support"
              className="feature-img rounded-3"
            />
          </div>
          <h5 className="feature-title mb-2">Multi-Currency Support</h5>
          <p className="feature-desc">
            Manage and transact in multiple currencies with ease and transparency.
          </p>
        </div>
      </div>

      {/* 24/7 Customer Support */}
      <div className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="850">
        <div className="feature-card shadow-lg rounded-4 p-4 h-100 d-flex flex-column align-items-center text-center">
          <div className="feature-img-wrapper mb-3">
            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=400&q=80"
              alt="24/7 Customer Support"
              className="feature-img rounded-3"
            />
          </div>
          <h5 className="feature-title mb-2">24/7 Customer Support</h5>
          <p className="feature-desc">
            Our dedicated team is always available to help you with any issues.
          </p>
        </div>
      </div>

    </div>
  </div>
</section>

        </>

    );
};

export default DigitalWalletFeatures;
