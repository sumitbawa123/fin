import React from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';
import './PaymentGateway.css';


AOS.init();

const PaymentGateway = () => {
  return (
    <>


    <section className="payment-gateway-section py-5" id="payment">
      <div className="container">
        <div className="row align-items-center g-5">
          {/* Animated Image */}
          <div className="col-md-6 text-center">
            <div className="image-animate-wrapper">
              <img
                src="https://mindster.com/mindster-blogs/wp-content/uploads/2020/01/2018-11-29-1.jpg"
                alt="Secure Payment"
                className="img-fluid rounded shadow-lg floating-image"
              />
            </div>
          </div>

          {/* Content */}
          <div
            className="col-md-6 text-md-start text-center"
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            <h2 className="section-title mb-3">🔐 Secure & Fast Payment Gateway</h2>
            <p className="section-description">
              We support multiple payment methods including UPI, Cards, Net Banking, and Wallets.
              Your transactions are encrypted & protected for your peace of mind.
            </p>

            <ul className="payment-features list-unstyled mt-4">
              <li data-aos="fade-up" data-aos-delay="100">
                <i className="bi bi-shield-lock-fill me-2"></i> 100% Secure Transactions
              </li>
              <li data-aos="fade-up" data-aos-delay="200">
                <i className="bi bi-phone-fill me-2"></i> Mobile-Friendly Interface
              </li>
              <li data-aos="fade-up" data-aos-delay="300">
                <i className="bi bi-clock-history me-2"></i> Instant Payment Confirmation
              </li>
            </ul>

            <a
              href="#checkout"
              className="btn btn-primary mt-4 px-4 py-2"
              data-aos="zoom-in"
              data-aos-delay="400"
            >
              🚀 Proceed to Pay
            </a>
          </div>
        </div>
      </div>
    </section>

     <section id="payment-gateway" className="payment-gateway section">
      <div className="container">
        <div className="section-header text-center" data-aos="fade-up">
          <h2>Payment Gateway</h2>
          <p>Experience Secure, Fast, and Reliable Online Payments</p>
        </div>

        <div className="row g-4" data-aos="fade-up" data-aos-delay="100">
          
          <div className="col-md-6 col-lg-4" data-aos="zoom-in" data-aos-delay="200">
            <div className="card h-100 shadow-sm">
              <img src="https://wpmanageninja.com/wp-content/uploads/2021/05/Multiple-payment-method-1024x536.png" className="card-img-top" alt="Multiple Payments" />
              <div className="card-body">
                <h5 className="card-title">Multiple Payment Modes</h5>
                <p className="card-text">Accept UPI, Cards, Wallets, and Net Banking in one platform.</p>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-4" data-aos="zoom-in" data-aos-delay="300">
            <div className="card h-100 shadow-sm">
              <img src="https://www.isms.online/app/uploads/2020/12/pci-dss-1.png" className="card-img-top" alt="Secure Payments" />
              <div className="card-body">
                <h5 className="card-title">PCI-DSS Secured</h5>
                <p className="card-text">Enterprise-level encryption & global compliance to ensure protection.</p>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-4" data-aos="zoom-in" data-aos-delay="400">
            <div className="card h-100 shadow-sm">
              <img src="https://assets.qlik.com/image/upload/w_1408/q_auto/qlik/glossary/data-analytics/seo-hero-real-time-analytics_tawkcf.jpg" className="card-img-top" alt="Analytics" />
              <div className="card-body">
                <h5 className="card-title">Real-time Analytics</h5>
                <p className="card-text">Live dashboard to monitor transactions, settlements, and refunds.</p>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-4" data-aos="zoom-in" data-aos-delay="500">
            <div className="card h-100 shadow-sm">
              <img src="https://i0.wp.com/blogrevamp.cashfree.com/wp-content/uploads/2023/03/instant-settlement.png?fit=2500%2C1667&ssl=1" className="card-img-top" alt="Instant Settlement" />
              <div className="card-body">
                <h5 className="card-title">Instant Settlements</h5>
                <p className="card-text">Receive your money instantly with real-time settlement options.</p>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-4" data-aos="zoom-in" data-aos-delay="600">
            <div className="card h-100 shadow-sm">
              <img src="https://img.freepik.com/vector-premium/agente-servicio-al-cliente-configuraciones_24877-376.jpg" className="card-img-top" alt="24/7 Support" />
              <div className="card-body">
                <h5 className="card-title">24/7 Support</h5>
                <p className="card-text">Round-the-clock assistance via chat, email, or phone.</p>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-4" data-aos="zoom-in" data-aos-delay="700">
            <div className="card h-100 shadow-sm">
              <img src="https://lh6.googleusercontent.com/44MNd0eGfLmfnPxcv5qtzXJNoBSRezsIdVQ17IN24Q4znBUEnmalbyyBeTYqajls6PFp-z5_Aq8BATLDVDs-u1MLmP-i4hAoh5YBHqcAxU9dBuOmK_IY7vXTZetS9KP6779Erciwu_9ZqNKg7EJSLOUs2sCxbsoUJAD5-CQOmbpxxU7WH3GGyefaLQ" className="card-img-top" alt="Easy Integration" />
              <div className="card-body">
                <h5 className="card-title">Easy API Integration</h5>
                <p className="card-text">Fast plug & play SDKs for web and mobile platforms.</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

    </>
  );
};

export default PaymentGateway;
