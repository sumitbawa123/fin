import React from 'react';

const Features = () => {
  return (
    <section id="features" className="py-5">
      <div className="container">
        <h2 className="text-center mb-5">Our Features</h2>
        <div className="row">
          <div className="col-md-4 mb-4">
            <div className="card feature-card">
              <div className="card-body text-center">
                <h5 className="card-title">Innovative Design</h5>
                <p className="card-text">Modern and responsive designs tailored to your needs.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card feature-card">
              <div className="card-body text-center">
                <h5 className="card-title">Fast Performance</h5>
                <p className="card-text">Optimized for speed and efficiency across all devices.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card feature-card">
              <div className="card-body text-center">
                <h5 className="card-title">24/7 Support</h5>
                <p className="card-text">Round-the-clock support to ensure your success.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;