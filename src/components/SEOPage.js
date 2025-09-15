import React from "react";
import { Container, Button } from "react-bootstrap"; // ✅ Added missing imports
import "./SEOPage.css";
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import AOS from 'aos';


const seoData = [
  {
    title: "OnPage SEO",
    image: "https://www.samyakonline.net/images/on-page-seo.jpg",
    alt: "OnPage SEO",
    content:
      "Optimize your website’s content and structure to rank higher and attract more visitors with our expert OnPage SEO services.",
  },
  {
    title: "OffPage SEO",
    image: "https://www.stanventures.com/blog/wp-content/uploads/2018/03/off_page_seo.png",
    alt: "OffPage SEO",
    contentList: [
      "Build high-quality backlinks to enhance your website’s authority and visibility with our OffPage SEO strategies.",

    ],
  },
  {
    title: "Local SEO",
    image: "https://www.icecubedigital.com/wp-content/uploads/2023/06/local-seo.jpg",
    alt: "Local SEO",
    contentListBold: [
      { title: "", desc: "Boost your business’s presence in local search results to attract more customers in your area." },

    ],
  },
  {
    title: "eCommerce SEO",
    image: "https://www.webindiamaster.com/public/uploads/ecommerce-seo-company.jpg",
    alt: "eCommerce SEO",
    orderedList: [
      "Optimize your online store to rank higher and drive more sales with our specialized eCommerce SEO services.",

    ],
  },
  {
    title: "Technical SEO",
    image: "https://5.imimg.com/data5/SELLER/Default/2023/9/344481693/LO/UQ/LO/196028373/technical-seo-service.jpeg",
    alt: "Technical SEO",
    contentList: [
      "Enhance your website’s performance and user experience with our Technical SEO services for better rankings.",

    ],
  },
  {
    title: "SEO Analytics",
    image: "https://www.newbreedrevenue.com/hs-fs/hubfs/shutterstock_1579304977.jpeg?width=2500&name=shutterstock_1579304977.jpeg",
    alt: "SEO Analytics",
    content:
      "SEO is a continuous process that helps improve your website’s ranking and attracts more visitors. By implementing best SEO practices, you can enhance your online presence and grow your business effectively.",
  },
];

const SEOPage = () => {

  useEffect(() => {
    AOS.init({ duration: 1000, once: true }); // once:true means animation only happens once
  }, []);
  return (

    <>

      <section className="hero-section">
        <div className="hero-slider">
          <Carousel fade interval={4000} controls indicators>
            {/* Slide 1 */}
            <Carousel.Item>
              <div
                className="slide slide-1 sle text-white text-center d-flex align-items-center"
                style={{ minHeight: "400px" }}
              >
                <Container>
                  <h1 className="display-4 fw-bold"> Grow Your Business with Google Ads</h1>
                  <p className="lead text-white">
                    Promote on Facebook, Instagram, and YouTube for maximum reach
                  </p>
                  <Button variant="light" size="lg" className="mt-3 fw-bold">
                    Join Social Spark Hub
                  </Button>
                </Container>
              </div>
            </Carousel.Item>

            {/* Slide 2 */}
            <Carousel.Item>
              <div
                className="slide slide-2 sle text-white text-center d-flex align-items-center"
                style={{ minHeight: "400px" }}
              >
                <Container>
                  <h1 className="display-4 fw-bold"> Facebook & Instagram Ads</h1>
                  <p className="lead text-white">Boost conversions with smart audience targeting</p>
                  <Button variant="light" size="lg" className="mt-3 fw-bold">
                    Start Today
                  </Button>
                </Container>
              </div>
            </Carousel.Item>

            {/* Slide 3 */}
            <Carousel.Item>
              <div
                className="slide slide-3 sle text-white text-center d-flex align-items-center"
                style={{ minHeight: "400px" }}
              >
                <Container>
                  <h1 className="display-4 fw-bold"> YouTube Video Promotions</h1>
                  <p className="lead text-white">
                    Get discovered with compelling videos & brand storytelling
                  </p>
                  <Button variant="light" size="lg" className="mt-3 fw-bold">
                    Launch Now
                  </Button>
                </Container>
              </div>
            </Carousel.Item>

            {/* Slide 4 */}
            <Carousel.Item>
              <div
                className="slide slide-4 sle text-white text-center d-flex align-items-center"
                style={{ minHeight: "400px" }}
              >
                <Container>
                  <h1 className="display-4 fw-bold"> Best SEO Agency in India</h1>
                  <p className="lead text-white">
                    Transform your online presence with <strong>FiTradify</strong>, Noida’s top
                    SEO agency. Tailored strategies that boost visibility & leads.
                  </p>
                  <Button variant="light" size="lg" className="mt-3 fw-bold">
                    Join Social Spark Hub
                  </Button>
                </Container>
              </div>
            </Carousel.Item>
          </Carousel>
        </div>
      </section>


      <div className="text-center py-5  ">
        <h1 className="section-heading text-black"> <span className='bg-yellow'>Our  </span> SEO Services</h1>
      </div>

      <section className="seo-grid container py-4" role="list">
        {seoData.map((section, idx) => (
          <article
            className="card my-3 p-3 shadow-sm"
            key={idx}
            role="listitem"
            tabIndex={0}
            aria-label={section.title}
            data-aos="fade-up"
            data-aos-delay={idx * 100} // stagger effect
          >
            <img
              src={section.image}
              className="seo-card-img mb-3"
              alt={section.alt || "SEO illustration"}
              loading="lazy"
              width="64"
              height="64"
              aria-hidden="true"
            />
            <div className="card-body">
              <h2 className="card-title">{section.title}</h2>

              {section.content && <p className="card-text">{section.content}</p>}

              {section.contentList && (
                <ul className="card-list">
                  {section.contentList.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              )}

              {section.contentListBold && (
                <ul className="card-list">
                  {section.contentListBold.map((item, i) => (
                    <li key={i}>
                      <strong>{item.title}</strong> {item.desc}
                    </li>
                  ))}
                </ul>
              )}

              {section.orderedList && (
                <ol className="card-list">
                  {section.orderedList.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ol>
              )}
            </div>
          </article>
        ))}
      </section>

      <section className="container py-5 seo-section">
        <div className="row align-items-center">
          {/* Left Side */}
          <div className="col-md-6 mb-5 mb-md-0" data-aos="fade-right">
            <h2 className="section-heading text-black">
              <span className='bg-yellow'>FinTradify </span>  Your Partner in SEO Success
            </h2>
            <p>
              SEO is a long-term journey requiring collaboration and persistence. With over 3.5 billion daily Google searches, securing top SERP positions demands advanced keyword research and optimization techniques.
            </p>
            <p>
              We align our SEO strategies with your business goals, whether it’s driving traffic, generating leads, or boosting sales. Our team conducts in-depth research to understand user behavior and optimize your website for organic results.
            </p>
            <p>
              Partner with <strong>FinTradify</strong> for collaborative, result-oriented SEO services. We prioritize your objectives to ensure sustained growth.
            </p>
          </div>

          {/* Right Side */}
          <div className="col-md-6" data-aos="fade-left">
            <h3 className="mb-4 text-primary">Our Expertise</h3>
            <div className="row">
              {/* Each expertise item is placed manually (no map used) */}
              <div className="col-6 mb-4 d-flex align-items-center" data-aos="zoom-in">
                <img src="https://cdn-icons-png.flaticon.com/512/190/190411.png" alt="OnPage SEO" className="expertise-icon me-2" />
                <span>OnPage SEO</span>
              </div>
              <div className="col-6 mb-4 d-flex align-items-center" data-aos="zoom-in">
                <img src="https://cdn-icons-png.flaticon.com/512/1087/1087983.png" alt="OffPage SEO" className="expertise-icon me-2" />
                <span>OffPage SEO</span>
              </div>
              <div className="col-6 mb-4 d-flex align-items-center" data-aos="zoom-in">
                <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="Local SEO" className="expertise-icon me-2" />
                <span>Local SEO</span>
              </div>
              <div className="col-6 mb-4 d-flex align-items-center" data-aos="zoom-in">
                <img src="https://cdn-icons-png.flaticon.com/512/2913/2913462.png" alt="eCommerce SEO" className="expertise-icon me-2" />
                <span>eCommerce SEO</span>
              </div>
              <div className="col-6 mb-4 d-flex align-items-center" data-aos="zoom-in">
                <img src="https://cdn-icons-png.flaticon.com/512/1025/1025681.png" alt="Technical SEO" className="expertise-icon me-2" />
                <span>Technical SEO</span>
              </div>
              <div className="col-6 mb-4 d-flex align-items-center" data-aos="zoom-in">
                <img src="https://cdn-icons-png.flaticon.com/512/2921/2921222.png" alt="Link Building" className="expertise-icon me-2" />
                <span>Link Building</span>
              </div>
              <div className="col-6 mb-4 d-flex align-items-center" data-aos="zoom-in">
                <img src="https://cdn-icons-png.flaticon.com/512/747/747376.png" alt="Keyword Research" className="expertise-icon me-2" />
                <span>Keyword Research</span>
              </div>
              <div className="col-6 mb-4 d-flex align-items-center" data-aos="zoom-in">
                <img src="https://cdn-icons-png.flaticon.com/512/2899/2899744.png" alt="SEO Analytics" className="expertise-icon me-2" />
                <span>SEO Analytics</span>
              </div>
              <div className="col-6 mb-4 d-flex align-items-center" data-aos="zoom-in">
                <img src="https://cdn-icons-png.flaticon.com/512/2910/2910766.png" alt="Competitor Analysis" className="expertise-icon me-2" />
                <span>Competitor Analysis</span>
              </div>
              <div className="col-6 mb-4 d-flex align-items-center" data-aos="zoom-in">
                <img src="https://cdn-icons-png.flaticon.com/512/2331/2331932.png" alt="Conversion Optimization" className="expertise-icon me-2" />
                <span>Conversion Optimization</span>
              </div>
              <div className="col-6 mb-4 d-flex align-items-center" data-aos="zoom-in">
                <img src="https://cdn-icons-png.flaticon.com/512/2910/2910782.png" alt="SEO Content Writing" className="expertise-icon me-2" />
                <span>SEO Content Writing</span>
              </div>
              <div className="col-6 mb-4 d-flex align-items-center" data-aos="zoom-in">
                <img src="https://cdn-icons-png.flaticon.com/512/1828/1828919.png" alt="More Services" className="expertise-icon me-2" />
                <span>More Services</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-light py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fw-bold">Our Methodology</h2>
            <p className="lead">8-Step Approach to Boosting Leads & Sales</p>
          </div>
          <div className="row g-4">
            <div className="col-md-6">
              <div className="card h-100 text-center">
                <img
                  src="https://ezranking.s3.eu-west-2.amazonaws.com/blog/wp-content/uploads/2021/05/20071449/Site-Audit-Cost.jpg"
                  alt="Research"
                  className="card-img-top mx-auto"
                  style={{ width: "400px", padding: "1rem", objectFit: "contain" }}
                />
                <div className="card-body">
                  <h5 className="card-title">Audit & Optimization</h5>
                  <p className="card-text">
                    Comprehensive website audits to optimize performance and align with industry best practices.

                    In-depth analysis of HTML, speed, keywords, and content structure.
                    Technical optimization to meet growth objectives and outpace competitors.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="card h-100 text-center">
                <img
                  src="https://5.imimg.com/data5/SELLER/Default/2024/6/424709450/XC/CS/XV/206441889/keyword-research-service.png"
                  alt="Strategy"
                  className="card-img-top mx-auto"
                  style={{ width: "400px", padding: "1rem", objectFit: "contain" }}
                />
                <div className="card-body">
                  <h5 className="card-title">Keyword Research</h5>
                  <p className="card-text">Extensive keyword research to drive targeted traffic to your website.

                    Identify high-quality, relevant keywords for maximum impact.
                    Monitor search engine behavior to optimize keyword performance.</p>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="card h-100 text-center">
                <img
                  src="https://phdcompetencemodel.nl/images/pdhcm.png"
                  alt="Branding"
                  className="card-img-top mx-auto"
                  style={{ width: "400px", padding: "1rem", objectFit: "contain" }}
                />
                <div className="card-body">
                  <h5 className="card-title">Personal Modeling</h5>
                  <p className="card-text">
                    Create detailed persona models to understand visitor behavior and preferences.

                    Analyze search, purchase, and interaction patterns.
                    Align SEO campaigns with audience behavior for optimal results.

                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="card h-100 text-center">
                <img
                  src="https://media.vyaparify.com/vcards/blogs/67392/Services-(4).png"
                  alt="Content Creation"
                  className="card-img-top mx-auto"
                  style={{ width: "400px", padding: "1rem", objectFit: "contain" }}
                />
                <div className="card-body">
                  <h5 className="card-title">Integrated SEO Marketing</h5>
                  <p className="card-text">Holistic SEO strategies to drive traffic and conversions across platforms.

                    Combine social media, content, and PR for maximum reach.
                    Platform-agnostic approach for consistent business growth.</p>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="card h-100 text-center">
                <img
                  src="https://trend.media/wp-content/uploads/2016/09/content-marketing-img-1.jpg"
                  alt="Promotion"
                  className="card-img-top mx-auto"
                  style={{ width: "400px", padding: "1rem", objectFit: "contain" }}
                />
                <div className="card-body">
                  <h5 className="card-title">Content Marketing</h5>
                  <p className="card-text">
                    Engaging content to sustain traffic and amplify your audience reach.

                    Create blogs, infographics, and social posts for engagement.
                    Transparent reporting for sustained business relationships.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="card h-100 text-center">
                <img
                  src="https://l450v.alamy.com/450v/2y33dyf/book-and-magnifying-glass-book-search-on-online-platforms-in-depth-academic-research-and-reference-pixel-perfect-editable-stroke-vector-icon-2y33dyf.jpg"
                  alt="Lead Generation"
                  className="card-img-top mx-auto"
                  style={{ width: "400px", padding: "1rem", objectFit: "contain" }}
                />
                <div className="card-body">
                  <h5 className="card-title">In-Depth Analysis</h5>
                  <p className="card-text">
                    Continuous monitoring and analytics for data-driven SEO performance.

                    Use tools like Google Analytics for custom reports and goals.
                    Deliver result-driven outcomes with integrated analytics.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="card h-100 text-center">
                <img
                  src="https://www.globalmediainsight.com/asset/images/negative-seo-recovery.jpg"
                  alt="Analytics"
                  className="card-img-top mx-auto"
                  style={{ width: "400px", padding: "1rem", objectFit: "contain" }}
                />
                <div className="card-body">
                  <h5 className="card-title">Link Audit & Recovery</h5>
                  <p className="card-text">Identify and remove toxic links to recover from penalties and boost rankings.

                    Manual backlink audits to detect harmful links.
                    High-DA link-building to restore traffic and authority.</p>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="card h-100 text-center">
                <img
                  src="https://img.freepik.com/premium-vector/illustration-analytics-monitoring-with-business-team-monitoring-reporting-dashboard_675567-3090.jpg"
                  alt="Optimization"
                  className="card-img-top mx-auto"
                  style={{ width: "400px", padding: "1rem", objectFit: "contain" }}
                />
                <div className="card-body">
                  <h5 className="card-title">Monitoring & Reporting</h5>
                  <p className="card-text">
                    Regular updates and detailed reports to track SEO performance.

                    Monthly analysis of traffic, rankings, and campaign results.
                    Actionable insights to optimize future strategies.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> 
    </>
  );
};

export default SEOPage;
