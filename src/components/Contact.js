import React from "react";
import "./contactStyles.css";

const Contact = () => {
  return (
    <section className="container my-5 contact-section">
      <div className="row">
        {/* Left Side - Contact Info */}
        <div className="col-md-5 mb-4">
          <h2 className="text-primary">Contact Us</h2>

          <p>
            Your feedback is invaluable to us. If you have questions and
            suggestions, we're here to listen. Please reach out to us below:
          </p>

          <p>
            <i className="bi bi-telephone-fill me-2"></i>
            <strong>Technical Support</strong>
            <br />
            +91 78360 09907
          </p>

          {/* Social Media Icons */}
          <div className="social-icons mt-3">
            <a href="#"><i className="bi bi-facebook"></i></a>
            <a href="#"><i className="bi bi-instagram"></i></a>
            <a href="#"><i className="bi bi-twitter-x"></i></a>
            <a href="#"><i className="bi bi-youtube"></i></a>
            <a href="#"><i className="bi bi-linkedin"></i></a>
            <a href="#"><i className="bi bi-pinterest"></i></a>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <div className="col-md-7">
          <div className="card shadow-sm p-4">
            <h5 className="mb-3">Contact Form</h5>
            <form
              action="https://formsubmit.co/sumitkumar95985@gmail.com"
              method="POST"
              className="contact-form"
            >
              <div className="row mb-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    placeholder="Name *"
                    required
                  />
                </div>
                <div className="col">
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    placeholder="Email *"
                    required
                  />
                </div>
              </div>

              <div className="row mb-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    name="mobile"
                    placeholder="Mobile No *"
                    required
                  />
                </div>
                <div className="col">
                  <select
                    name="service"
                    className="form-select"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      My Service
                    </option>

                    {/* Website & SEO */}
                    <option value="website">Website Development</option>
                    <option value="seo">SEO (Search Engine Optimization)</option>

                    {/* Digital Marketing Group */}
                    <optgroup label="Digital Marketing Services">
                      <option value="digital-overall">Complete Digital Marketing</option>
                      <option value="smm">Social Media Marketing</option>
                      <option value="ppc">Google Ads / PPC / Meta</option>
                      <option value="email">Email Marketing</option>
                      <option value="whatsapp">WhatsApp / Telegram Marketing</option>
                      <option value="content">Content Marketing</option>
                      <option value="influencer">Influencer Marketing</option>
                      <option value="ott">OTT / YouTube Ads</option>
                      <option value="branding">Branding & Creative Design</option>
                      <option value="analytics">Web Analytics & Tracking</option>
                      <option value="crm">CRM & Marketing Automation</option>
                    </optgroup>
                  </select>
                </div>



              </div>

              <div className="mb-3">
                <textarea
                  className="form-control"
                  name="message"
                  rows="3"
                  placeholder="Message"
                  required
                ></textarea>
              </div>

              {/* Simple Captcha */}


              <button type="submit" className="btn btn-primary">
                Submit Now
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
