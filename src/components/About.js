import React from 'react';
import { useEffect } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';
import './About.css';

const About = () => {


  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <>
      <section id="about" className="about section">
        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="row gy-4 align-items-center justify-content-between">
            <div className="col-xl-5" data-aos="fade-up" data-aos-delay="200">
              <span className="about-meta">WHAT WE DO</span>
              <h2 className="">
                <span className="h2heding">Powerful Digital Marketing</span> for Business Growth
              </h2>
              <p className="about-description">
                We provide complete <strong>digital marketing solutions</strong> to help brands
                grow online. From SEO to social media, ads to content — our strategies are
                designed to boost visibility, generate leads, and maximize ROI.
              </p>

              <div className="row feature-list-wrapper">
                <div className="col-md-6">
                  <ul className="feature-list">
                    <li>
                      <span className="icon-box">
                        <i className="bi bi-search"></i>
                      </span>{" "}
                      Search Engine Optimization (SEO)
                    </li>
                    <li>
                      <span className="icon-box">
                        <i className="bi bi-bullseye"></i>
                      </span>{" "}
                      Pay Per Click (Google Ads / PPC)
                    </li>
                    <li>
                      <span className="icon-box">
                        <i className="bi bi-facebook"></i>
                      </span>{" "}
                      Social Media Marketing
                    </li>
                  </ul>
                </div>

                <div className="col-md-6">
                  <ul className="feature-list">
                    <li>
                      <span className="icon-box">
                        <i className="bi bi-envelope-paper-fill"></i>
                      </span>{" "}
                      Email & WhatsApp Marketing
                    </li>
                    <li>
                      <span className="icon-box">
                        <i className="bi bi-pencil-square"></i>
                      </span>{" "}
                      Content & Influencer Marketing
                    </li>
                    <li>
                      <span className="icon-box">
                        <i className="bi bi-youtube"></i>
                      </span>{" "}
                      YouTube & OTT Ads
                    </li>
                  </ul>
                </div>


              </div>

              <div className="info-wrapper mt-4">
                <div className="row gy-4 align-items-center">
                  {/* <div className="col-lg-5">
                    <div className="profile d-flex align-items-center gap-3">
                      <img src="assets/img/ceo-profile.webp" alt="CEO Profile" className="profile-image" />
                      <div>
                        <h4 className="profile-name">Ankit Verma</h4>
                        <p className="profile-position">CEO & Founder</p>
                      </div>
                    </div>
                  </div> */}
                  {/* <div className="col-lg-7">
                    <div className="contact-info d-flex align-items-center gap-3">
                      <div className="icon-circle"><i className="bi bi-telephone-fill"></i></div>
                      <div>
                        <p className="contact-label">Need Help?</p>
                        <p className="contact-number">+91 98765 43210</p>
                      </div>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>

            <div className="col-xl-6" data-aos="fade-up" data-aos-delay="300">
              <div className="image-wrapper">
                <div className="images position-relative" data-aos="zoom-out" data-aos-delay="400">
                  <img
                    src="https://png.pngtree.com/png-clipart/20220117/original/pngtree-digital-marketing-team-office-cooperation-png-image_7146756.png"
                    alt="IT Team Working"
                    className="img-fluid main-image rounded-4 animate-image"
                  />
                  {/* <img
                    src="https://wallpapers.com/images/hd/customer-support-contact-us-illustration-11aicfhwnyfusfzk.png"
                    alt="Data Security"
                    className="img-fluid small-image rounded-4 animate-image-small"
                  /> */}
                </div>
                <div className="experience-badge floating">
                  <h3>10+ <span>Years</span></h3>
                  <p>Of IT Excellence</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section id="features" className="features section py-5">
        <div className="container text-center section-title" data-aos="fade-up">
          <h2 className="section-heading" data-aos="fade-up">  <span className=' h2heding'>My </span>Features</h2>
          <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
        </div>

        <div className="container py-3">
          <div className="d-flex justify-content-center flex-wrap">
            <ul className="nav nav-tabs professional-tabs" role="tablist">
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link active "
                  id="features-tab-1-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#features-tab-1"
                  type="button"
                  role="tab"
                  aria-controls="features-tab-1"
                  aria-selected="true"
                >
                  Who We Are
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link "
                  id="features-tab-2-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#features-tab-2"
                  type="button"
                  role="tab"
                  aria-controls="features-tab-2"
                  aria-selected="false"
                >
                  WHY CHOOSE US
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link "
                  id="features-tab-3-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#features-tab-3"
                  type="button"
                  role="tab"
                  aria-controls="features-tab-3"
                  aria-selected="false"
                >
                  Explica
                </button>
              </li>
            </ul>
          </div>

          <div className="tab-content mt-4" data-aos="fade-up" data-aos-delay="200">
            {/* Tab 1 */}
            <div className="tab-pane fade show active" id="features-tab-1" role="tabpanel">
              <div className="row align-items-center">
                <div className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0">
                  <h3 className="section-heading text-black" data-aos="fade-up"> <span className=' h2heding'>Voluptatem</span> dignissimos provident</h3>
                  <p className="">
                    <strong>FINTRADIFY</strong> is a result-driven and award-winning digital agency dedicated to helping businesses thrive in the ever-evolving digital world.
                    We are a creative, innovative, and client-friendly digital agency aimed at delivering maximum results at the shortest TAT possible.
                    Unlike our contemporaries, our endeavors are aimed towards providing holistic digital solutions that steer engagement, boost conversions,
                    and skyrocket your business to the next level.
                  </p>
                  <ul>
                    <li><i className="bi bi-check2-all"></i>Delivering Excellence with Integrity and Purpose.</li>
                    <li><i className="bi bi-check2-all"></i>Providing Honorable and Reliable Solutions Tailored to You.</li>
                    <li><i className="bi bi-check2-all"></i>Crafted with Precision. Delivered with Dignity.</li>
                  </ul>
                </div>
                <div className="col-lg-6 order-1 order-lg-2 text-center">
                  <img
                    src="https://www.shutterstock.com/image-vector/person-moving-translucent-digital-elements-600nw-2144498163.jpg"
                    alt="Feature Illustration 1"
                    className="img-fluid feature-imgg"
                    data-aos="zoom-in"
                  />
                </div>
              </div>
            </div>

            {/* Tab 2 */}
            <div className="tab-pane fade" id="features-tab-2" role="tabpanel">
              <div className="row align-items-center">
                <div className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0">
                  <h3 className="section-heading text-black" data-aos="fade-up"> <span className=' h2heding'>Bespoke</span> Solutions</h3>
                  <p className=""> Our digital solutions and strategies are tailored to your specific business requirements, driving your brand goals high on the growth curve.
                  </p>
                  <ul>
                    <li><i className="bi bi-check2-all"></i>Custom-Crafted Solutions Designed for Your Unique Needs.</li>
                    <li><i className="bi bi-check2-all"></i>Where Innovation Meets Personalization.</li>
                    <li><i className="bi bi-check2-all"></i>Bespoke Solutions – Because One Size Doesn’t Fit All.</li>
                    <li><i className="bi bi-check2-all"></i>Precision-Engineered Services to Fit Your Goals.</li>
                  </ul>
                </div>
                <div className="col-lg-6 order-1 order-lg-2 text-center">
                  <img
                    src="https://static.vecteezy.com/system/resources/previews/002/302/911/non_2x/people-enjoy-online-learning-courses-to-add-new-skills-illustration-suitable-for-landing-page-ui-website-mobile-app-editorial-poster-flyer-article-and-banner-vector.jpg"
                    alt="Feature Illustration 2"
                    className="img-fluid feature-imgg"
                    data-aos="zoom-in"
                  />
                </div>
              </div>
            </div>

            {/* Tab 3 */}
            <div className="tab-pane fade" id="features-tab-3" role="tabpanel">
              <div className="row align-items-center">
                <div className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0">
                  <h3 className="section-heading text-black" data-aos="fade-up"> <span className=' h2heding'>Cost-Effective</span> Solutions</h3>
                  <ul>
                    <li><i className="bi bi-check2-all"></i> Ullamco laboris nisi ut aliquip...</li>
                    <li><i className="bi bi-check2-all"></i> Duis aute irure dolor in reprehenderit...</li>
                    <li><i className="bi bi-check2-all"></i> Provident mollitia neque rerum...</li>
                  </ul>
                  <p className=""> Our digital service packages are affordable and custom-built, ensuring businesses of all sizes can grow using our unparalleled expertise.

                    .</p>
                </div>
                <div className="col-lg-6 order-1 order-lg-2 text-center">
                  <img
                    src="https://img.freepik.com/free-vector/instruction-manual-guide-document-with-cogwheel-isolated-design-element-male-character-analyzing-file-business-analysis-data-processing-updating_335657-2607.jpg"
                    alt="Feature Illustration 3"
                    className="img-fluid feature-imgg"
                    data-aos="zoom-in"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Features Cards Section */}
      <section id="features-cards" className="features-cards section">
        <div className="container">
          <div className="row gy-4">
            {/* SEO */}
            <div
              className="col-xl-3 col-md-6"
              data-aos="zoom-in"
              data-aos-delay="100"
            >
              <div className="feature-box orange">
                <i className="bi bi-search"></i>
                <h4 className="section-headinng" data-aos="fade-up">
                  Search Engine Optimization (SEO)
                </h4>
                <p>
                  Boost your website’s ranking on Google with proven SEO strategies
                  that drive organic traffic.
                </p>
              </div>
            </div>

            {/* PPC */}
            <div
              className="col-xl-3 col-md-6"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              <div className="feature-box blue">
                <i className="bi bi-bullseye"></i>
                <h4>Pay Per Click (PPC / Google Ads)</h4>
                <p>
                  Run targeted ad campaigns on Google to get instant leads and maximum ROI.
                </p>
              </div>
            </div>

            {/* Social Media */}
            <div
              className="col-xl-3 col-md-6"
              data-aos="zoom-in"
              data-aos-delay="300"
            >
              <div className="feature-box green">
                <i className="bi bi-facebook"></i>
                <h4>Social Media Marketing</h4>
                <p>
                  Build brand awareness and engage customers with effective Facebook,
                  Instagram & LinkedIn campaigns.
                </p>
              </div>
            </div>

            {/* Content Marketing */}
            <div
              className="col-xl-3 col-md-6"
              data-aos="zoom-in"
              data-aos-delay="400"
            >
              <div className="feature-box red">
                <i className="bi bi-pencil-square"></i>
                <h4>Content Marketing</h4>
                <p>
                  Create blogs, videos, and creatives that educate, inspire, and
                  convert audiences into customers.
                </p>
              </div>
            </div>


          </div>
        </div>
      </section>

      {/* Features 2 Section */}
      <section id="features-2" className="features-2 section">
        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="row align-items-center">
            {/* Left column */}
            <div className="col-lg-4">
              <div
                className="feature-item text-end mb-5"
                data-aos="fade-right"
                data-aos-delay="200"
              >
                <div className="d-flex align-items-center justify-content-end gap-4">
                  <div className="feature-content">
                    <h3 className="section-heading text-black" data-aos="fade-up">  <span className=' h2heding'>Use</span> On Any Device</h3>
                    <p>
                      Vestibulum ante ipsum primis in faucibus orci luctus et
                      ultrices posuere cubilia Curae; In ac dui quis mi
                      consectetuer lacinia.
                    </p>
                  </div>
                  <div className="feature-icon flex-shrink-0">
                    <i className="bi bi-display"></i>
                  </div>
                </div>
              </div>

              <div
                className="feature-item text-end mb-5"
                data-aos="fade-right"
                data-aos-delay="300"
              >
                <div className="d-flex align-items-center justify-content-end gap-4">
                  <div className="feature-content">
                    <h2>Feather Icons</h2>
                    <p>
                      Phasellus ultrices nulla quis nibh. Quisque a lectus.
                      Donec consectetuer ligula vulputate sem tristique cursus.
                    </p>
                  </div>
                  <div className="feature-icon flex-shrink-0">
                    <i className="bi bi-feather"></i>
                  </div>
                </div>
              </div>

              <div
                className="feature-item text-end mb-5"
                data-aos="fade-right"
                data-aos-delay="400"
              >
                <div className="d-flex align-items-center justify-content-end gap-4">
                  <div className="feature-content">
                    <h2>Simple Setup</h2>
                    <p>
                      Praesent dapibus, neque id cursus faucibus, tortor neque
                      egestas augue, eu vulputate magna eros eu erat.
                    </p>
                  </div>
                  <div className="feature-icon flex-shrink-0">
                    <i className="bi bi-gear"></i>
                  </div>
                </div>
              </div>
            </div>

            {/* Right column with phone image */}
            <div className="col-lg-8 text-center">
              <img
                src="https://www.searchenginejournal.com/wp-content/uploads/2022/01/about-us-page-examples-1-61fd8f9784626-sej-1280x720.jpg"
                alt="Phone App Screen"
                className="img-fluid"
                data-aos="zoom-in"
                data-aos-delay="500"
              />
            </div>
          </div>
        </div>
      </section>

    </>

  );
};

export default About;
