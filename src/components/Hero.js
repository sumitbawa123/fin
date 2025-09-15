import React, { useEffect, useState } from 'react';
import './Hero.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { BsCheck2All } from 'react-icons/bs';
import { TypeAnimation } from "react-type-animation";
import { Modal, Button, Form, Container, Row, Col } from "react-bootstrap";



const statsData = [
  {
    icon: "bi-emoji-smile",
    color: "blue",
    target: 232,
    label: "Happy Clients",
  },
  {
    icon: "bi-journal-richtext",
    color: "orange",
    target: 521,
    label: "Projects Completed",
  },
  {
    icon: "bi-headset",
    color: "green",
    target: 1463,
    label: "Support Hours",
  },
  {
    icon: "bi-people",
    color: "pink",
    target: 15,
    label: "Team Members",
  },
];


const Hero = () => {
  const [category, setCategory] = useState("React");

  // 👉 Popup state
  const [show, setShow] = useState(false);
  const [popupCount, setPopupCount] = useState(0); // track count

  // 👉 Functions
  const handleClose = () => {
    setShow(false);

    // open again after delay if less than 3
    if (popupCount < 2) { // 🔑 0,1,2 → total 3 बार
      setTimeout(() => {
        setShow(true);
        setPopupCount((prev) => prev + 1);
      }, 4000); // अगला popup 4 sec बाद
    }
  };

  const handleShow = () => setShow(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form Submitted Successfully!");
    handleClose();
  };

  // 👉 Counter + AOS
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });

    const counters = document.querySelectorAll(".counter");
    const speed = 100;
    let timeouts = [];

    counters.forEach((counter) => {
      const animate = () => {
        const target = Number(counter.getAttribute("data-target"));
        const count = Number(counter.innerText);
        const increment = Math.ceil(target / speed);

        if (count < target) {
          counter.innerText =
            count + increment > target ? target : count + increment;
          const t = setTimeout(animate, 30);
          timeouts.push(t);
        } else {
          counter.innerText = target;
        }
      };
      animate();
    });

    return () => timeouts.forEach((t) => clearTimeout(t));
  }, []);

  // 👉 First auto open
  useEffect(() => {
    setTimeout(() => {
      setShow(true);
      setPopupCount(1);
    }, 2000); // पहली बार 2 sec बाद खुलेगा
  }, []);

  return (
    <>
      <section id="hero" className="hero section position-relative">
        <div className="container">
          <div className="row align-items-center">
            {/* Left: Text Content */}
            <div className="col-lg-6 text-content">
              <h5 className="sub-heading">Innovative Solutions for Business Growth</h5>
              <h2 className="main-heading">
                <TypeAnimation
                  sequence={[
                    "DIGITAL SOLUTIONS & IT SERVICES FOR SUCCESS", // text to type
                    2000, // pause 2 seconds
                    "",   // clear text
                  ]}
                  speed={60} // typing speed
                  repeat={Infinity} // loop
                  wrapper="span"
                  className="blue-text"
                />
              </h2>

              {/* Features */}
              <ul className="features">
                <li><i className="bi bi-bullseye me-2 text-primary"></i> Result-Driven Digital Marketing Solutions</li>
                <li><i className="bi bi-graph-up-arrow me-2 text-success"></i> SEO, Social Media & PPC Campaigns</li>
                <li><i className="bi bi-envelope-paper me-2 text-warning"></i> Content Marketing & Email Automation</li>
                <li><i className="bi bi-star-fill me-2 text-danger"></i> Branding & Online Reputation Management</li>
              </ul>

              {/* Social Media Icons */}
              <div className="social-icons my-3">
                <a
                  href="https://www.facebook.com/FinTradify"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  <i className="bi bi-facebook"></i>
                </a>

                <a
                  href="https://www.instagram.com/fintradify/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  <i className="bi bi-instagram"></i>
                </a>

                <a
                  href="https://linkedin.com/company/YourCompanyName"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  <i className="bi bi-linkedin"></i>
                </a>
              </div>


              {/* Small Service Cards in Row */}
              <div className="row g-3 mt-3">
                <div className="col-3">
                  <div className="service-card p-2 text-center shadow-sm rounded">
                    <i className="bi bi-laptop fs-4 text-info"></i>
                    <p className="mt-1 mb-0 small">Website Development</p>
                  </div>
                </div>
                <div className="col-3">
                  <div className="service-card p-2 text-center shadow-sm rounded">
                    <i className="bi bi-share fs-4 text-primary"></i>
                    <p className="mt-1 mb-0 small">Social Media</p>
                  </div>
                </div>
                <div className="col-3">
                  <div className="service-card p-2 text-center shadow-sm rounded">
                    <i className="bi bi-search fs-4 text-success"></i>
                    <p className="mt-1 mb-0 small">SEO</p>
                  </div>
                </div>
                <div className="col-3">
                  <div className="service-card p-2 text-center shadow-sm rounded">
                    <i className="bi bi-megaphone fs-4 text-warning"></i>
                    <p className="mt-1 mb-0 small">Google Ads</p>
                  </div>
                </div>
              </div>

              {/* Tagline */}
              <p className="hero-tagline mt-3">
                <TypeAnimation
                  sequence={[
                    "Grow your business with powerful digital marketing — from SEO to social media, and targeted campaigns designed to boost visibility and drive results.",
                    2000, // pause 2 sec after typing
                    "",   // reset
                  ]}
                  speed={50} // typing speed
                  repeat={Infinity} // loop infinitely
                  wrapper="span"
                />
              </p>


              {/* Buttons */}
              <div className="hero-buttons mt-4">
                {/* <a href="#demo" className="btn btn-primary me-3 px-4 py-2">
                  GET A FREE DEMO
                </a>
                <a href="#read" className="btn btn-outline-dark px-4 py-2">
                  READ MORE
                </a> */}
              </div>
            </div>

            {/* Right: Image */}
            <div className="col-lg-6 text-center">
              <img
                src="https://mbamarketingwala.com/wp-content/uploads/2023/10/MBA-Marketing-Wala-Best-Digital-Marketing-Company-Digital-Marketing-png.webp"
                alt="Digital Solutions Illustration"
                className="img-fluid hero-image"
              />
            </div>
          </div>
        </div>
      </section>




      <section className="py-5 bg-light">
        <Container>
          <Row className="align-items-center">
            <Col md={6} className="mb-4 mb-md-0">
              <h2 className="fw-bold">Grow Your Business with Digital Marketing</h2>
              <p className="mt-3">
                Boost your brand visibility, generate more leads, and increase ROI
                with our proven{" "}
                <strong>SEO, PPC, Social Media, and Content Marketing</strong>{" "}
                services. Get a free consultation today!
              </p>
              <Button variant="primary" size="lg" onClick={handleShow}>
                Get Free Consultation
              </Button>
            </Col>

            <Col md={6}>
              <img
                src="https://venkateshwarawebs.com/wp-content/uploads/2019/09/about-01.png"
                alt="Digital Marketing"
                className="img-fluid rounded shadow"
              />
            </Col>
          </Row>
        </Container>

        {/* Popup Modal */}
        <Modal show={show} onHide={handleClose} size="lg" centered>
          <Modal.Header closeButton>
            <Modal.Title>Digital Marketing Enquiry Form</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {/* 🔑 Direct submit to FormSubmit */}
            <form
              action="https://formsubmit.co/sumitkumar95985@gmail.com"
              method="POST"
            >
              {/* 👇 Hidden fields for extra options */}
              <input type="hidden" name="_captcha" value="false" />
              <input
                type="hidden"
                name="_next"
                value=""
              />

              <Row>
                <Col md={6} className="mb-3">
                  <label className="form-label">Full Name *</label>
                  <input
                    type="text"
                    name="fullName"
                    className="form-control"
                    required
                  />
                </Col>
                <Col md={6} className="mb-3">
                  <label className="form-label">Email *</label>
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    required
                  />
                </Col>
              </Row>

              <Row>
                <Col md={6} className="mb-3">
                  <label className="form-label">Phone *</label>
                  <input
                    type="tel"
                    name="phone"
                    className="form-control"
                    required
                  />
                </Col>
                <Col md={6} className="mb-3">
                  <label className="form-label">Company</label>
                  <input
                    type="text"
                    name="company"
                    className="form-control"
                  />
                </Col>
              </Row>

              <Row>
                <Col md={6} className="mb-3">
                  <label className="form-label">Service *</label>
                  <select name="service" className="form-select" required>
                    <option value="">-- Select Service --</option>
                    <option>SEO</option>
                    <option>PPC / Google Ads</option>
                    <option>Social Media Marketing</option>
                    <option>Email Marketing</option>
                    <option>WhatsApp / Telegram Marketing</option>
                    <option>Content Marketing</option>
                    <option>Influencer Marketing</option>
                    <option>OTT / YouTube Ads</option>
                    <option>Website Development</option>
                  </select>
                </Col>
                <Col md={6} className="mb-3">
                  <label className="form-label">Budget *</label>
                  <select name="budget" className="form-select" required>
                    <option value="">-- Select Budget --</option>
                    <option>₹10,000 - ₹25,000</option>
                    <option>₹25,000 - ₹50,000</option>
                    <option>₹50,000 - ₹1,00,000</option>
                    <option>₹1,00,000 - ₹5,00,000</option>
                    <option>Above ₹5,00,000</option>
                  </select>
                </Col>
              </Row>

              <Row>
                <Col md={12} className="mb-3">
                  <label className="form-label">Message</label>
                  <textarea
                    name="message"
                    className="form-control"
                    rows="3"
                  ></textarea>
                </Col>
              </Row>

              <div className="text-center">
                <button type="submit" className="btn btn-success px-5">
                  Submit
                </button>
              </div>
            </form>
          </Modal.Body>
        </Modal>
      </section>







      <section id="services-2" className="services-2 section light-background">
        <div className="container section-title" data-aos="fade-up">
          <h2 className="section-heading" data-aos="fade-up"> <span className='bg-yellow'> My </span> Services</h2>
          <p> CHECK OUR SERVICES</p>
        </div>


      </section>


      <section className="container my-5">
        <div
          id="servicesCarousel"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">

            {/* Slide 1 */}
            <div className="carousel-item active">
              <div className="row">
                {/* SEO */}
                <div className="col-md-4 mb-4">
                  <div className="card h-100 shadow-sm d-flex flex-column">
                    <img
                      src="https://amikasoftwares.com/wp-content/uploads/2024/01/seo.jpg"
                      className="card-img-top object-fit-cover"
                      alt="SEO"
                      style={{ height: "220px" }}
                    />
                    <div className="card-body text-center d-flex flex-column justify-content-between flex-grow-1">
                      <h5 className="card-title">SEO</h5>
                      <p>Boost your online visibility with smart SEO strategies.</p>
                    </div>
                  </div>
                </div>

                {/* Social Media */}
                <div className="col-md-4 mb-4">
                  <div className="card h-100 shadow-sm d-flex flex-column">
                    <img
                      src="https://www.springboard.com/blog/wp-content/uploads/2022/06/digital-marketing-vs.-social-media-marketing.jpg"
                      className="card-img-top object-fit-cover"
                      alt="Social Media"
                      style={{ height: "220px" }}
                    />
                    <div className="card-body text-center d-flex flex-column justify-content-between flex-grow-1">
                      <h5 className="card-title">Social Media Marketing</h5>
                      <p>Grow your brand with expert social media campaigns.</p>
                    </div>
                  </div>
                </div>

                {/* Email Marketing */}
                <div className="col-md-4 mb-4">
                  <div className="card h-100 shadow-sm d-flex flex-column">
                    <img
                      src="https://thecommsavenue.com/wp-content/uploads/2021/07/Email-marketing-The-Comms-Avenue.png"
                      className="card-img-top object-fit-cover"
                      alt="Email Marketing"
                      style={{ height: "220px" }}
                    />
                    <div className="card-body text-center d-flex flex-column justify-content-between flex-grow-1">
                      <h5 className="card-title">Email Marketing</h5>
                      <p>Engage customers with targeted email campaigns.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Slide 2 */}
            <div className="carousel-item">
              <div className="row">
                {/* Content Writing */}
                <div className="col-md-4 mb-4">
                  <div className="card h-100 shadow-sm d-flex flex-column">
                    <img
                      src="https://contentwriters.com/blog/wp-content/uploads/content-writer.jpg"
                      className="card-img-top object-fit-cover"
                      alt="Content Writing"
                      style={{ height: "220px" }}
                    />
                    <div className="card-body text-center d-flex flex-column justify-content-between flex-grow-1">
                      <h5 className="card-title">Content Writing</h5>
                      <p>Create impactful content that connects with users.</p>
                    </div>
                  </div>
                </div>

                {/* Web Development */}
                <div className="col-md-4 mb-4">
                  <div className="card h-100 shadow-sm d-flex flex-column">
                    <img
                      src="https://www.uplers.com/wp-content/uploads/2021/12/shutterstock_1918015178-Converted.png"
                      className="card-img-top object-fit-cover"
                      alt="Web Development"
                      style={{ height: "220px" }}
                    />
                    <div className="card-body text-center d-flex flex-column justify-content-between flex-grow-1">
                      <h5 className="card-title">Web Development</h5>
                      <p>Build responsive and modern websites with ease.</p>
                    </div>
                  </div>
                </div>

                {/* Graphic Design */}
                <div className="col-md-4 mb-4">
                  <div className="card h-100 shadow-sm d-flex flex-column">
                    <img
                      src="https://futurevisioncomputers.com/wp-content/uploads/2022/02/graphic-design-course-graphic-designing-classes-e1680766441483.webp"
                      className="card-img-top object-fit-cover"
                      alt="Graphic Design"
                      style={{ height: "220px" }}
                    />
                    <div className="card-body text-center d-flex flex-column justify-content-between flex-grow-1">
                      <h5 className="card-title">Graphic Design</h5>
                      <p>Attract your audience with creative graphic designs.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Slide 3 */}
            <div className="carousel-item">
              <div className="row">
                {/* Content Marketing */}
                <div className="col-md-4 mb-4">
                  <div className="card h-100 shadow-sm d-flex flex-column">
                    <img
                      src="https://www.digitalmogli.com/wp-content/uploads/2018/03/content-marketing.png"
                      className="card-img-top object-fit-cover"
                      alt="Content Marketing"
                      style={{ height: "220px" }}
                    />
                    <div className="card-body text-center d-flex flex-column justify-content-between flex-grow-1">
                      <h5 className="card-title">Content Marketing</h5>
                      <p>Deliver valuable content to attract and retain customers.</p>
                    </div>
                  </div>
                </div>

                {/* Blogging */}
                <div className="col-md-4 mb-4">
                  <div className="card h-100 shadow-sm d-flex flex-column">
                    <img
                      src="https://www.tutorialspoint.com/social_media_marketing/images/blogging.jpg"
                      className="card-img-top object-fit-cover"
                      alt="Blogging"
                      style={{ height: "220px" }}
                    />
                    <div className="card-body text-center d-flex flex-column justify-content-between flex-grow-1">
                      <h5 className="card-title">Blogging</h5>
                      <p>Share insights & ideas to build authority.</p>
                    </div>
                  </div>
                </div>

                {/* Paid Advertising */}
                <div className="col-md-4 mb-4">
                  <div className="card h-100 shadow-sm d-flex flex-column">
                    <img
                      src="https://blog.thomasnet.com/hubfs/shutterstock_630306113.jpg"
                      className="card-img-top object-fit-cover"
                      alt="Paid Advertising"
                      style={{ height: "220px" }}
                    />
                    <div className="card-body text-center d-flex flex-column justify-content-between flex-grow-1">
                      <h5 className="card-title">Paid Advertising</h5>
                      <p>Drive instant traffic with targeted paid ads.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Slide 4 */}
            <div className="carousel-item">
              <div className="row">
                {/* Email Marketing 2 */}
                <div className="col-md-4 mb-4">
                  <div className="card h-100 shadow-sm d-flex flex-column">
                    <img
                      src="https://magemail.co/wp-content/uploads/2024/08/Email-Marketing.jpg"
                      className="card-img-top object-fit-cover"
                      alt="Email Marketing"
                      style={{ height: "220px" }}
                    />
                    <div className="card-body text-center d-flex flex-column justify-content-between flex-grow-1">
                      <h5 className="card-title">Email Marketing</h5>
                      <p>Engage customers with personalized campaigns.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Controls */}
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#servicesCarousel"
            data-bs-slide="prev"
          >
            <span aria-hidden="true">
              <i className="bi bi-chevron-left fs-2 text-dark"></i>
            </span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#servicesCarousel"
            data-bs-slide="next"
          >
            <span aria-hidden="true">
              <i className="bi bi-chevron-right fs-2 text-dark"></i>
            </span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </section>




      <section className="why-choose-us py-5">
        <div className="container">
          <div className="row align-items-center">

            {/* Left Content */}
            <div className="col-lg-5 mb-4 mb-lg-0">
              <h5 className="sub-heading text-uppercase text-primary bordered-text">
                You have finally found the right marketing agency
              </h5>
              <h2 className="main-heading fw-bold bordered-text">
                Let Us Do the <span className="text-highlight">Rest Now!</span>
              </h2>
              <p className="lead text-muted mt-3 bordered-text">
                From fresh ideas to flawless execution, our team ensures
                your growth journey is smooth, effective, and ROI-driven.
              </p>
            </div>

            {/* Right Content (USP Cards) */}
            <div className="col-lg-7">
              <div className="row g-4">

                <div className="col-md-6">
                  <div className="usp-card p-4 h-100 shadow-sm rounded text-center">
                    <i className="bi bi-graph-up-arrow fs-2 text-primary"></i>
                    <h5 className="mt-3 bordered-text">Wishing for 3x ROI?</h5>
                    <p className='big-paragraph'>Our growth genies will fulfil all your wishes.</p>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="usp-card p-4 h-100 shadow-sm rounded text-center">
                    <i className="bi bi-lightbulb fs-2 text-warning"></i>
                    <h5 className="mt-3 bordered-text">Tired of boring content?</h5>
                    <p className='big-paragraph'  >We brew fresh & unique ideas every time!</p>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="usp-card p-4 h-100 shadow-sm rounded text-center">
                    <i className="bi bi-check2-circle fs-2 text-success"></i>
                    <h5 className="mt-3 bordered-text">Failed executions?</h5>
                    <p className='big-paragraph' >Our team has mastery from strategy to execution.</p>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="usp-card p-4 h-100 shadow-sm rounded text-center">
                    <i className="bi bi-clock-history fs-2 text-danger"></i>
                    <h5 className="mt-3 bordered-text">Chasing deliverables?</h5>
                    <p className='big-paragraph'>Our managers run ahead of your timelines.</p>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="usp-card p-4 h-100 shadow-sm rounded text-center">
                    <i className="bi bi-stars fs-2 text-info"></i>
                    <h5 className="mt-3 bordered-text">Copy-paste strategies?</h5>
                    <p className='big-paragraph'>We build customized growth plans, not templates.</p>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="usp-card p-4 h-100 shadow-sm rounded text-center">
                    <i className="bi bi-shield-check fs-2 text-success"></i>
                    <h5 className="mt-3 bordered-text">Empty promises?</h5>
                    <p className='big-paragraph'>Our commitments are built to secure your growth.</p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>






      <section className="stats-section" id="stats">
        <div className="container text-center">
          <div className="section-title mb-5" data-aos="fade-up">
            <h2 className="section-heading" data-aos="fade-up"> <span className='bg-yellow'> Our </span> Achievements</h2>
            <p>Trusted by clients for quality, support, and excellence.</p>
          </div>

          <div className="row justify-content-center">
            {statsData.map((item, index) => (
              <div className="col-6 col-md-3 mb-4" key={index} data-aos="zoom-in" data-aos-delay={index * 150}>
                <div className="stats-card p-4 shadow-sm rounded-4">
                  <div className="icon-wrapper mb-3">
                    <i className={`bi ${item.icon} icon ${item.color}`}></i>
                  </div>
                  <span className="counter display-5 fw-bold" data-target={item.target}>0</span>
                  <p className="mt-2">{item.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="about-section">

        <div className="container section-title" data-aos="fade-up">
          <h2 className="section-heading" data-aos="fade-up">
            <span className="bg-yellow">Our</span> About
          </h2>
          <p>Our team specializes in building scalable IT infrastructures that are robust, secure, and future-ready.</p>
        </div>

        <div className="container">
          <div className="row gy-4 align-items-center">

            <div className="col-lg-6 position-relative" data-aos="fade-up" data-aos-delay="100">
              <div id="aboutCarousel" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner rounded-3">
                  <div className="carousel-item active">
                    <img src="https://images.unsplash.com/photo-1626785774573-4b799315345d?fm=jpg&q=60&w=3000" className="d-block w-100 img-fluid" alt="Slide 1" />
                  </div>
                  <div className="carousel-item">
                    <img src="https://images.pexels.com/photos/414974/pexels-photo-414974.jpeg?cs=srgb&dl=pexels-pixabay-414974.jpg&fm=jpg" className="d-block w-100 img-fluid" alt="Slide 2" />
                  </div>
                  <div className="carousel-item">
                    <img src="https://img.freepik.com/free-photo/top-view-desk-with-keyboard-drawing-pad_23-2148397872.jpg " className="d-block w-100 img-fluid" alt="Slide 3" />
                  </div>
                </div>

                {/* Carousel Controls */}
                <button className="carousel-control-prev" type="button" data-bs-target="#aboutCarousel" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#aboutCarousel" data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>

            <div className="col-lg-6 content" data-aos="fade-up" data-aos-delay="200">
              <h3>Marketing is no longer about</h3>
              <p>
                Your customers are online. Is your brand there too <br />
                Clicks. Leads. Sales. Repeat. That’s smart marketing.  <br />
                Don’t just advertise. Build relationships, build trust, build results.”OnlineSuccess <br />
                Digital is not the future. It’s the present. Embrace it.
              </p>

              <ul className="list-unstyled">
                <li><BsCheck2All className="text-primary" /> Search Engine Optimization</li>
                <li><BsCheck2All className="text-primary" /> Filtering customers</li>
                <li><BsCheck2All className="text-primary" /> Increase your profile</li>
                <li><BsCheck2All className="text-primary" /> Switch to digital marketing</li>
              </ul>
            </div>

          </div>
        </div>

      </section>


      <section className="trendy-blogs py-5">
        <div className="container">
          <h2 className="text-center mb-4" data-aos="fade-up"><span className='bg-yellow'> Trendy </span>  Blogs</h2>

          {/* Category Buttons */}
          <div className="text-center mb-4" data-aos="zoom-in">
            <button className={`btn mx-2 ${category === "React" ? "btn-dark" : "btn-outline-dark"}`} onClick={() => setCategory("React")}>React</button>
            <button className={`btn mx-2 ${category === "Blogging" ? "btn-dark" : "btn-outline-dark"}`} onClick={() => setCategory("Blogging")}>Blogging</button>
            <button className={`btn mx-2 ${category === "WebDev" ? "btn-dark" : "btn-outline-dark"}`} onClick={() => setCategory("WebDev")}>Web Dev</button>
          </div>

          {/* Blog Cards */}
          <div className="row">
            {/* React Blogs */}
            {category === "React" && (
              <>
                <div className="col-md-4 mb-4" data-aos="fade-right">
                  <div className="blog-card h-100 shadow-sm">
                    <img src="https://www.etatvasoft.com/blog/wp-content/uploads/2023/05/React-Fundamentals.jpg" className="img-fluid rounded-top" alt="React Basics" />
                    <div className="p-3">
                      <h5>React Basics</h5>
                      <p>Understand JSX, props, and component structure.</p>

                    </div>
                  </div>
                </div>
                <div className="col-md-4 mb-4" data-aos="fade-up">
                  <div className="blog-card h-100 shadow-sm">
                    <img src="https://media2.dev.to/dynamic/image/width=1080,height=1080,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Ffhq29nvkpgs6zz97e62d.jpg" className="img-fluid rounded-top" alt="React Hooks" />
                    <div className="p-3">
                      <h5>React Hooks</h5>
                      <p>Learn useState, useEffect and custom hooks.</p>

                    </div>
                  </div>
                </div>
                <div className="col-md-4 mb-4" data-aos="fade-left">
                  <div className="blog-card h-100 shadow-sm">
                    <img src="https://miro.medium.com/v2/resize:fit:1400/0*Zb9Uoad33rLb7v03.png" className="img-fluid rounded-top" alt="React Router" />
                    <div className="p-3">
                      <h5>React Router</h5>
                      <p>Navigate pages easily with React Router v6.</p>

                    </div>
                  </div>
                </div>
              </>
            )}

            {/* Blogging Blogs */}
            {category === "Blogging" && (
              <>
                <div className="col-md-4 mb-4" data-aos="fade-right">
                  <div className="blog-card h-100 shadow-sm">
                    <img src="https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2018/08/how-to-start-a-blog-2.png" className="img-fluid rounded-top" alt="Start Blogging" />
                    <div className="p-3">
                      <h5>Start Blogging</h5>
                      <p>How to choose your niche and platform.</p>


                    </div>
                  </div>
                </div>
                <div className="col-md-4 mb-4" data-aos="fade-up">
                  <div className="blog-card h-100 shadow-sm">
                    <img src="https://thecontentpanel.com/wp-content/uploads/2021/11/Our-Ultimate-List-101-Education-Blog-Post-Ideas-img1.jpg" className="img-fluid rounded-top" alt="Content Ideas" />
                    <div className="p-3">
                      <h5>Content Ideas</h5>
                      <p>Get inspired with content ideas for your blog.</p>

                    </div>
                  </div>
                </div>
                <div className="col-md-4 mb-4" data-aos="fade-left">
                  <div className="blog-card h-100 shadow-sm">
                    <img src="https://www.blogtyrant.com/wp-content/uploads/2019/08/seo-for-bloggers.png" className="img-fluid rounded-top" alt="SEO Blogging" />
                    <div className="p-3">
                      <h5>SEO for Blogging</h5>
                      <p>Boost your blog traffic with SEO tips.</p>

                    </div>
                  </div>
                </div>
              </>
            )}

            {/* WebDev Blogs */}
            {category === "WebDev" && (
              <>
                <div className="col-md-4 mb-4" data-aos="fade-right">
                  <div className="blog-card h-100 shadow-sm">
                    <img src="https://camo.githubusercontent.com/21bb8ae3629c4852404841252c65baa38426e4c0d01a68a0f7e6fd121d4649dc/68747470733a2f2f7777772e69696d2e66722f65636f6c652d7765622f77702d636f6e74656e742f75706c6f6164732f323031372f30312f48544d4c352e6a7067" className="img-fluid rounded-top" alt="HTML & CSS" />
                    <div className="p-3">
                      <h5>HTML & CSS</h5>
                      <p>Build structure and style your webpages.</p>

                    </div>
                  </div>
                </div>
                <div className="col-md-4 mb-4" data-aos="fade-up">
                  <div className="blog-card h-100 shadow-sm">
                    <img src="https://miro.medium.com/v2/resize:fit:1400/1*LyZcwuLWv2FArOumCxobpA.png" className="img-fluid rounded-top" alt="JavaScript Basics" />
                    <div className="p-3">
                      <h5>JavaScript Basics</h5>
                      <p>Master the basics of interactive web pages.</p>

                    </div>
                  </div>
                </div>
                <div className="col-md-4 mb-4" data-aos="fade-left">
                  <div className="blog-card h-100 shadow-sm">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIbP-zge5pndFrOs0l5Xza9nhO3Tzidr5VjA&s" className="img-fluid rounded-top" alt="Website Launch" />
                    <div className="p-3">
                      <h5>Launch Your Website</h5>
                      <p>Host and publish your site live online.</p>

                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </section>


      <section className="ak-section py-5">
        <div className="container">
          <h2 className="text-center mb-5 " data-aos="fade-down">
            <span className="bg-yellow"> My </span> Creations
          </h2>
          <div className="row justify-content-center">
            {/* Image 1 */}
            <div className="col-md-6 col-lg-4 mb-4" data-aos="zoom-in" data-aos-delay="100">
              <div className="ak-image-card p-3 shadow-sm rounded">
                <img
                  src="https://www.imsolutions.co/uploads/2019/12/creative-design-7.jpg"
                  alt="Creative Design"
                  className="img-fluid rounded"
                />
                <h5 className="text-center mt-3" data-aos="fade-up" data-aos-delay="300">
                  Creative Design
                </h5>
                <p className="text-center" data-aos="fade-up" data-aos-delay="400">
                  Bringing imagination to life with visually stunning and innovative
                  designs that leave a lasting impact.
                </p>
              </div>
            </div>

            {/* Image 2 */}
            <div className="col-md-6 col-lg-4 mb-4" data-aos="fade-up" data-aos-delay="200">
              <div className="ak-image-card p-3 shadow-sm rounded">
                <img
                  src="https://thumbs.dreamstime.com/b/windows-modern-ui-design-layout-colorful-user-interface-vector-flat-simple-square-forms-buttons-widgets-navigation-32844531.jpg"
                  alt="Modern Interface"
                  className="img-fluid rounded"
                />
                <h5 className="text-center mt-3" data-aos="fade-up" data-aos-delay="400">
                  Modern Interface
                </h5>
                <p className="text-center" data-aos="fade-up" data-aos-delay="500">
                  Sleek and modern UI designs that enhance user experience with
                  simplicity and functionality.
                </p>
              </div>
            </div>

            {/* Image 3 */}
            <div className="col-md-6 col-lg-4 mb-4" data-aos="zoom-in-up" data-aos-delay="300">
              <div className="ak-image-card p-3 shadow-sm rounded">
                <img
                  src="https://img.freepik.com/premium-vector/cms-coder-concept-man-programmer-develops-user-friendly-interface-vector-illustration_677329-93.jpg"
                  alt="User Friendly"
                  className="img-fluid rounded"
                />
                <h5 className="text-center mt-3" data-aos="fade-up" data-aos-delay="500">
                  User Friendly
                </h5>
                <p className="text-center" data-aos="fade-up" data-aos-delay="600">
                  Intuitive and easy-to-navigate interfaces designed for smooth
                  usability and customer satisfaction.
                </p>
              </div>
            </div>

            {/* Image 4 */}
            <div className="col-md-6 col-lg-4 mb-4" data-aos="flip-left" data-aos-delay="400">
              <div className="ak-image-card p-3 shadow-sm rounded">
                <img
                  src="https://uxdworld.com/wp-content/uploads/2023/04/responsive-design-1024x683.jpeg"
                  alt="Responsive Layout"
                  className="img-fluid rounded"
                />
                <h5 className="text-center mt-3" data-aos="fade-up" data-aos-delay="600">
                  Responsive Layout
                </h5>
                <p className="text-center" data-aos="fade-up" data-aos-delay="700">
                  Fully responsive layouts that adapt seamlessly to all screen sizes
                  and devices.
                </p>
              </div>
            </div>

            {/* Image 5 */}
            <div className="col-md-6 col-lg-4 mb-4" data-aos="zoom-in-down" data-aos-delay="500">
              <div className="ak-image-card p-3 shadow-sm rounded">
                <img
                  src="https://www.creativefabrica.com/wp-content/uploads/2021/08/23/Clean-code-coding-icon-Graphics-16223993-1.jpg"
                  alt="Clean Code"
                  className="img-fluid rounded"
                />
                <h5 className="text-center mt-3" data-aos="fade-up" data-aos-delay="700">
                  Clean Code
                </h5>
                <p className="text-center" data-aos="fade-up" data-aos-delay="800">
                  Writing structured, optimized, and easy-to-maintain code for better
                  performance and scalability.
                </p>
              </div>
            </div>

            {/* Image 6 */}
            <div className="col-md-6 col-lg-4 mb-4" data-aos="zoom-in-right" data-aos-delay="600">
              <div className="ak-image-card p-3 shadow-sm rounded">
                <img
                  src="https://unblast.com/wp-content/uploads/2021/10/SEO-Optimization-Illustration.jpg"
                  alt="SEO Optimized"
                  className="img-fluid rounded"
                />
                <h5 className="text-center mt-3" data-aos="fade-up" data-aos-delay="800">
                  SEO Optimized
                </h5>
                <p className="text-center" data-aos="fade-up" data-aos-delay="900">
                  Creating websites optimized for search engines to improve visibility
                  and drive organic traffic.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>



      <section className="container my-5">
        <div className="row align-items-center">
          {/* Left Side Image */}
          <div className="col-lg-6 mb-4 mb-lg-0">
            <img
              src="https://imageio.forbes.com/specials-images/imageserve/61ffec2d637d7cf26fb672f0/In-many-organizations--the-employees-are-working-for-more-than-money--They-are/960x0.jpg?format=jpg&width=960"
              alt="Marketing Strategy"
              className="img-fluid rounded shadow"
            />
          </div>

          {/* Right Side Text */}
          <div className="col-lg-6">
            <h4 className="fw-bold mb-3">Work with your dream team and</h4>
            <h1 className="text-primary mb-4">Speed Up Your
              Business Growth</h1>
            <a href="/contact" className="btn btn-primary px-4 py-2 animated-btn">
              Let’s Talk!
            </a>
          </div>
        </div>
      </section>



    </>
  );
};

export default Hero;
