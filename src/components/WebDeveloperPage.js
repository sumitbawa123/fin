import React, { useEffect, useRef, useState } from "react";
import { FaLaptopCode, FaMobileAlt, FaShoppingCart } from 'react-icons/fa';
import "./WebDeveloperPage.css";
import AOS from 'aos';
import 'aos/dist/aos.css';


const skills = [
  {
    name: "HTML5",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    description: "Semantic markup for structuring web content.",
  },
  {
    name: "CSS3",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    description: "Styling web pages with responsive layouts and animations.",
  },
  {
    name: "JavaScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    description: "Programming language for dynamic web content and interactivity.",
  },
  {
    name: "React",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    description: "JavaScript library for building component-based user interfaces.",
  },
  {
    name: "Node.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    description: "JavaScript runtime for building fast backend services.",
  },
  {
    name: "Express",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    description: "Minimalist backend web framework for Node.js.",
  },
  {
    name: "MongoDB",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    description: "NoSQL database for scalable and flexible data storage.",
  },
  {
    name: "Razorpay",
    icon: "https://upload.wikimedia.org/wikipedia/commons/5/5e/Razorpay_logo.svg",
    description: "Popular payment gateway integration for secure transactions.",
  },
  {
    name: "Git & GitHub",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    description: "Version control and collaborative code hosting platform.",
  },
  {
    name: "Bootstrap",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain.svg",
    description: "CSS framework for building responsive and mobile-first sites.",
  },

  {
  name: "WordPress",
  icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg",
  description: "Popular CMS for creating websites and blogs with plugins and themes.",
},
{
  name: "Laravel",
  icon: "https://avatars.githubusercontent.com/u/958072?v=4",
  description: "PHP framework for building secure and scalable web applications.",
},
{
  name: "Shopify",
  icon: "https://mailchimp.com/ctf/images/yzco4xsimv0y/5f4Ibw5D1wVaHuLDkmEWXZ/77d851bd0ce4738f67a867e9842624af/Shopify_logo.jpg?w=300&q=70",
  description: "E-commerce platform for creating and managing online stores easily.",
},
];

const WebDeveloperPage = () => {
  const cardsRef = useRef([]);
  const [skillSearch, setSkillSearch] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => {
      cardsRef.current.forEach((card) => {
        if (card) observer.unobserve(card);
      });
    };
  }, []);


  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const filteredSkills = skills.filter((skill) =>
    skill.name.toLowerCase().includes(skillSearch.toLowerCase())
  );

    const [activeTab, setActiveTab] = useState("web");

  return (
    <div className="web-page">
      {/* Header */}
      <header
        className="text-center py-5 bg-dark text-white"
        role="banner"
      >
        <h1 className="display-4 fw-bold" tabIndex={0}>
          Web Developer
        </h1>
        <p className="lead" tabIndex={0}>
          Web Developer | App Developer | E-commerce Specialist
        </p>
        <a
          href="#contact"
          className="btn btn-outline-light mt-3"
          aria-label="Contact Me"
        >
          Contact Me
        </a>
      </header>

      {/* About Me Section */}
       <section id="about" className="about-section" aria-labelledby="about-heading">
      <div className="about-row">
        {/* Left: Image */}
        <div className="about-image fade-in-left">
          <img
            src="https://miro.medium.com/v2/resize:fit:1400/1*n5o350ZP9mM6s6KnqZsJcg.jpeg"
            alt="About me"
          />
        </div>

        {/* Right: Text with Icons */}
        <div className="about-text-content fade-in-right">
          <h2 id="about-heading" className="about-title"> <span className="bg-primary-blue"> My</span> About</h2>

          <div className="about-feature slide-up">
            <FaLaptopCode className="feature-icon" />
            <p>
              I'm a <strong>Web Developer</strong> specializing in React, Node.js, and MERN Stack, building modern, scalable apps.
            </p>
          </div>

          <div className="about-feature slide-up delay-1">
            <FaMobileAlt className="feature-icon" />
            <p>
              As an <strong>App Developer</strong>, I create responsive and intuitive web apps with smooth UI/UX and real-time features.
            </p>
          </div>

          <div className="about-feature slide-up delay-2">
            <FaShoppingCart className="feature-icon" />
            <p>
              I build complete <strong>E-commerce Solutions</strong> with Razorpay integration, product carts, and admin dashboards.
            </p>
          </div>
        </div>
      </div>
    </section>

       <section className="py-5 bg-light" id="web-services">
      <div className="container text-center">
        <h2 className="mb-5 fw-bold">  <span className="bg-primary-blue">Our Web</span> Development </h2>
        <div className="row">
          <div className="col-md-4 mb-4" data-aos="fade-up" data-aos-delay="100">
            <div className="card service-card h-100 shadow-sm">
              <div className="card-img-top img-animate">
                <img src="https://framerusercontent.com/images/qt2SEHOFMB8gSiIBBAo0zQuAU.png" className="img-fluid rounded-top" alt="Responsive Websites" />
              </div>
              <div className="card-body">
                <i className="fas fa-laptop-code fa-2x mb-3 text-primary"></i>
                <h5 className="card-title fw-semibold">Responsive Websites</h5>
                <p className="card-text">We build fast and responsive websites for all devices.</p>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4" data-aos="fade-up" data-aos-delay="200">
            <div className="card service-card h-100 shadow-sm">
              <div className="card-img-top img-animate">
                <img src="https://5.imimg.com/data5/SELLER/Default/2024/8/442416947/CL/EA/PJ/50884804/ecommerce-solutions-service.jpeg" className="img-fluid rounded-top" alt="E-commerce Solutions" />
              </div>
              <div className="card-body">
                <i className="fas fa-shopping-cart fa-2x mb-3 text-success"></i>
                <h5 className="card-title fw-semibold">E-commerce Solutions</h5>
                <p className="card-text">End-to-end online store development with payment integration.</p>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4" data-aos="fade-up" data-aos-delay="300">
            <div className="card service-card h-100 shadow-sm">
              <div className="card-img-top img-animate">
                <img src="https://cdn-cchkmpj.nitrocdn.com/CJXGnJvCvbQYOSNVvxpLvOYcHhpJDKbH/assets/images/optimized/rev-9af073b/ossisto.com/wp-content/uploads/2024/03/01-What-are-custom-web-applications.webp" className="img-fluid rounded-top" alt="Custom Web Apps" />
              </div>
              <div className="card-body">
                <i className="fas fa-code fa-2x mb-3 text-danger"></i>
                <h5 className="card-title fw-semibold">Custom Web Apps</h5>
                <p className="card-text">Tailor-made web applications for unique business needs.</p>
              </div>
            </div>
          </div>
          {/* Add remaining 3 cards similarly with increasing delay (400, 500, 600) */}
        </div>
      </div>
    </section>



     <section className="py-5 bg-light" id="services">
      <div className="container text-center">
        <h2 className="mb-5 fw-bold">  <span className="bg-primary-blue">Our</span>Services </h2>

        {/* Tab Buttons */}
        <div className="d-flex justify-content-center mb-4 gap-3">
          <button
            className={`btn ${activeTab === "web" ? "btn-primary" : "btn-outline-primary"}`}
            onClick={() => setActiveTab("web")}
          >
            Web Development
          </button>
          <button
            className={`btn ${activeTab === "app" ? "btn-primary" : "btn-outline-primary"}`}
            onClick={() => setActiveTab("app")}
          >
            App Development
          </button>
        </div>

        {/* Content Area */}
        <div className="row">
          {activeTab === "web" && (
            <>
              {/* 1 */}
              <div className="col-md-4 mb-4">
                <div className="card h-100 shadow-sm">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH5teG1nV99xBRp6mjFtgnhCyBNQETfg4kaA&s"
                    className="img-fluid w-100 rounded-top"
                    style={{ height: "200px", objectFit: "cover" }}
                    alt="Responsive Websites"
                  />
                  <div className="card-body">
                    <h5 className="fw-semibold">Responsive Websites</h5>
                    <p>Fast and responsive websites for all devices.</p>
                  </div>
                </div>
              </div>
              {/* 2 */}
              <div className="col-md-4 mb-4">
                <div className="card h-100 shadow-sm">
                  <img
                    src="https://www.jain.software/wp-content/uploads/2024/11/e-commerce-solutions.png"
                    className="img-fluid w-100 rounded-top"
                    style={{ height: "200px", objectFit: "cover" }}
                    alt="E-commerce"
                  />
                  <div className="card-body">
                    <h5 className="fw-semibold">E-commerce Solutions</h5>
                    <p>End-to-end online stores with payment integration.</p>
                  </div>
                </div>
              </div>
              {/* 3 */}
              <div className="col-md-4 mb-4">
                <div className="card h-100 shadow-sm">
                  <img
                    src="https://www.skynetindia.info/blog/wp-content/uploads/2020/08/web-application-development-1-742x557.jpg"
                    className="img-fluid w-100 rounded-top"
                    style={{ height: "200px", objectFit: "cover" }}
                    alt="Custom Web Apps"
                  />
                  <div className="card-body">
                    <h5 className="fw-semibold">Custom Web Apps</h5>
                    <p>Tailor-made web apps for unique business needs.</p>
                  </div>
                </div>
              </div>
              {/* 4 */}
              <div className="col-md-4 mb-4">
                <div className="card h-100 shadow-sm">
                  <img
                    src="https://www.europeanbusinessreview.com/wp-content/uploads/2021/04/shutterstock_393684265.jpg"
                    className="img-fluid w-100 rounded-top"
                    style={{ height: "200px", objectFit: "cover" }}
                    alt="CMS Development"
                  />
                  <div className="card-body">
                    <h5 className="fw-semibold">CMS Development</h5>
                    <p>WordPress, Shopify & custom CMS solutions.</p>
                  </div>
                </div>
              </div>
              {/* 5 */}
              <div className="col-md-4 mb-4">
                <div className="card h-100 shadow-sm">
                  <img
                    src="https://www.theinfinityhub.com/blog/wp-content/uploads/2023/08/website-maintenance-and-support-services.webp"
                    className="img-fluid w-100 rounded-top"
                    style={{ height: "200px", objectFit: "cover" }}
                    alt="Web Maintenance"
                  />
                  <div className="card-body">
                    <h5 className="fw-semibold">Web Maintenance</h5>
                    <p>Keep your site secure, fast & always updated.</p>
                  </div>
                </div>
              </div>
              {/* 6 */}
              <div className="col-md-4 mb-4">
                <div className="card h-100 shadow-sm">
                  <img
                    src="https://depalma.io/hubfs/api-integration.jpg"
                    className="img-fluid w-100 rounded-top"
                    style={{ height: "200px", objectFit: "cover" }}
                    alt="API Integration"
                  />
                  <div className="card-body">
                    <h5 className="fw-semibold">API Integration</h5>
                    <p>Third-party integrations to extend functionality.</p>
                  </div>
                </div>
              </div>
            </>
          )}

          {activeTab === "app" && (
            <>
              {/* 1 */}
              <div className="col-md-4 mb-4">
                <div className="card h-100 shadow-sm">
                  <img
                    src="https://www.advansoft.ae/wp-content/uploads/2017/06/Android-Applications.jpg"
                    className="img-fluid w-100 rounded-top"
                    style={{ height: "200px", objectFit: "cover" }}
                    alt="Android Apps"
                  />
                  <div className="card-body">
                    <h5 className="fw-semibold">Android Apps</h5>
                    <p>High-performance Android apps with modern UI/UX.</p>
                  </div>
                </div>
              </div>
              {/* 2 */}
              <div className="col-md-4 mb-4">
                <div className="card h-100 shadow-sm">
                  <img
                    src="https://www.lystloc.com/blog/wp-content/uploads/2024/04/5-Best-Productivity-Apps-for-IOS.webp"
                    className="img-fluid w-100 rounded-top"
                    style={{ height: "200px", objectFit: "cover" }}
                    alt="iOS Apps"
                  />
                  <div className="card-body">
                    <h5 className="fw-semibold">iOS Apps</h5>
                    <p>Custom iOS apps optimized for Apple ecosystem.</p>
                  </div>
                </div>
              </div>
              {/* 3 */}
              <div className="col-md-4 mb-4">
                <div className="card h-100 shadow-sm">
                  <img
                    src="https://www.addevice.io/storage/uploads/blog_post/meta_image/644780d43bb80_Cross-Platform%20App%20Development%20-%201600-1200.png"
                    className="img-fluid w-100 rounded-top"
                    style={{ height: "200px", objectFit: "cover" }}
                    alt="Cross Platform"
                  />
                  <div className="card-body">
                    <h5 className="fw-semibold">Cross Platform</h5>
                    <p>Flutter & React Native apps for Android & iOS.</p>
                  </div>
                </div>
              </div>
              {/* 4 */}
              <div className="col-md-4 mb-4">
                <div className="card h-100 shadow-sm">
                  <img
                    src="https://nandbox.com/wp-content/uploads/2022/11/hybrid-apps.jpg"
                    className="img-fluid w-100 rounded-top"
                    style={{ height: "200px", objectFit: "cover" }}
                    alt="Hybrid Apps"
                  />
                  <div className="card-body">
                    <h5 className="fw-semibold">Hybrid Apps</h5>
                    <p>Single codebase apps with native performance.</p>
                  </div>
                </div>
              </div>
              {/* 5 */}
              <div className="col-md-4 mb-4">
                <div className="card h-100 shadow-sm">
                  <img
                    src="https://img.freepik.com/free-vector/gradient-ui-ux-background_23-2149052117.jpg"
                    className="img-fluid w-100 rounded-top"
                    style={{ height: "200px", objectFit: "cover" }}
                    alt="UI/UX Design"
                  />
                  <div className="card-body">
                    <h5 className="fw-semibold">UI/UX Design</h5>
                    <p>Beautiful, user-friendly app designs.</p>
                  </div>
                </div>
              </div>
              {/* 6 */}
              <div className="col-md-4 mb-4">
                <div className="card h-100 shadow-sm">
                  <img
                    src="https://appinventiv.com/wp-content/uploads/2021/12/What-is-the-cost-of-maintaining-an-app-in-2023_-01-scaled.webp"
                    className="img-fluid w-100 rounded-top"
                    style={{ height: "200px", objectFit: "cover" }}
                    alt="App Maintenance"
                  />
                  <div className="card-body">
                    <h5 className="fw-semibold">App Maintenance</h5>
                    <p>Keep apps updated, secure & bug-free.</p>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </section>







      {/* Technologies & Skills Section */}
       <section id="skills" className="container py-5" aria-labelledby="skills-heading">
      <h2 id="skills-heading" className="section-heading text-center mb-4 text-black" tabIndex={-1}> <span className="bg-primary-blue">Our</span> Technologies & Skills</h2>

      <div className="mb-3 text-center">
        <input
          type="text"
          className="form-control w-50 mx-auto"
          placeholder="Search technologies..."
          value={skillSearch}
          onChange={(e) => setSkillSearch(e.target.value)}
          aria-label="Search technologies"
        />
      </div>

      <div className="row justify-content-center" role="list">
        {filteredSkills.length > 0 ? (
          filteredSkills.map(({ name, icon, description }, index) => (
            <div
              key={name}
              className="col-6 col-sm-4 col-md-3 mb-4 text-center skill-card"
              tabIndex={0}
              aria-describedby={`${name}-desc`}
              role="listitem"
              data-aos="zoom-in"
              ref={(el) => (cardsRef.current[index] = el)}
            >
              <div className="skill-icon-wrapper">
                <img src={icon} alt={`${name} logo`} width={60} height={60} className="img-fluid skill-icon" />
              </div>
              <h6 className="mt-2 fw-semibold">{name}</h6>
              <p id={`${name}-desc`} className="small text-muted">{description}</p>
            </div>
          ))
        ) : (
          <p className="text-center text-muted" tabIndex={0}>No technologies found.</p>
        )}
      </div>
    </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="container py-5 bg-light rounded"
        aria-labelledby="contact-heading"
      >
        <h2
          id="contact-heading"
          className="section-heading text-center mb-4 text-black"
          tabIndex={-1}
        >
           <span className="bg-primary-blue">Get</span> In Touch
        </h2>
        <p className="text-center mb-4" tabIndex={0}>
          Interested in working together? Feel free to reach out via email or
          social media!
        </p>
        <div className="text-center">
          <a
            href="mailto:rahulsharma@example.com"
            className="btn btn-primary me-3"
            aria-label="Send email to Rahul Sharma"
          >
            Email Me
          </a>
          <a
            href="https://linkedin.com/in/rahulsharma"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
            aria-label="Visit Rahul Sharma's LinkedIn profile"
          >
            LinkedIn
          </a>
        </div>
      </section>
    </div>
  );
};

export default WebDeveloperPage;
