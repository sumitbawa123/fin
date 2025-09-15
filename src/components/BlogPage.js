import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { FaBlog, FaCode, FaRocket, FaPenNib, FaTools, FaLightbulb } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import './BlogPage.css';



const BlogPage = () => {
  const [activeCategory, setActiveCategory] = useState("React");
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);



  return (
    <>

      <section className="blog-banner position-relative mb-5">
        <img
          src="https://i0.wp.com/www.esearchadvisors.com/blog/wp-content/uploads/2018/12/Blog-banner-1.jpg?fit=1903%2C549&ssl=1"
          alt="Blog Banner"
          className="img-fluid w-100 banner-img"
          data-aos="zoom-in"
        />
        <div className="banner-overlay d-flex flex-column justify-content-center align-items-center text-white text-center">
          <h1 className="mb-3" data-aos="fade-down">Explore Our Latest Blogs</h1>
          <p className="lead mb-4" data-aos="fade-up">Stay updated with web trends, tutorials & tech insights</p>
          <a href="#blogs" className="btn btn-outline-light" data-aos="fade-up">Browse Blogs</a>
        </div>
      </section>

      <section className="blog-section py-5">
        <div className="container">
          <h2  className="section-heading" data-aos="fade-up">Our Latest Blogs</h2>
          <div className="row">

            {/* Card 1 */}
            <div className="col-md-4 col-sm-6 mb-4" data-aos="fade-up">
              <div className="card h-100 blog-card shadow-sm">
                <img src="https://thebloggersource.com/wp-content/uploads/2020/01/How-to-Start-a-Blog-and-Make-Money-in-2020.jpg" alt="Blog 1" className="card-img-top blog-img" />
                <div className="card-body text-center">
                  <h5 className="card-title">How to Start Blogging</h5>
                  <p className="card-text">Kickstart your blogging journey with this ultimate guide.</p>
                 
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="col-md-4 col-sm-6 mb-4" data-aos="fade-up" data-aos-delay="100">
              <div className="card h-100 blog-card shadow-sm">
                <img src="https://learning-zone.github.io/react-basics/assets/react-features.png" alt="Blog 2" className="card-img-top blog-img" />
                <div className="card-body text-center">
                  <h5 className="card-title">React Basics Explained</h5>
                  <p className="card-text">Understand the fundamentals of React with examples.</p>
                 
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="col-md-4 col-sm-6 mb-4" data-aos="fade-up" data-aos-delay="200">
              <div className="card h-100 blog-card shadow-sm">
                <img src="https://smallbizclub.com/wp-content/uploads/2020/05/bigstock-Vector-Rocket-Launch-Website-C-349419904.jpg" alt="Blog 3" className="card-img-top blog-img" />
                <div className="card-body text-center">
                  <h5 className="card-title">Launching Your Website</h5>
                  <p className="card-text">Tips for launching your first project smoothly.</p>
                 
                </div>
              </div>
            </div>

            {/* Card 4 */}
            <div className="col-md-4 col-sm-6 mb-4" data-aos="fade-up" data-aos-delay="300">
              <div className="card h-100 blog-card shadow-sm">
                <img src="https://blog.mugafi.com/wp-content/uploads/2022/06/improve-creative-writing-skills.jpg" alt="Blog 4" className="card-img-top blog-img" />
                <div className="card-body text-center">
                  <h5 className="card-title">Creative Writing Tips</h5>
                  <p className="card-text">Boost your writing skills with creativity and structure.</p>
                 
                </div>
              </div>
            </div>

            {/* Card 5 */}
            <div className="col-md-4 col-sm-6 mb-4" data-aos="fade-up" data-aos-delay="400">
              <div className="card h-100 blog-card shadow-sm">
                <img src="https://www.smallbizdaily.com/wp-content/uploads/2019/04/shutterstock_149263820-min.jpg" alt="Blog 5" className="card-img-top blog-img" />
                <div className="card-body text-center">
                  <h5 className="card-title">Tech Tools You Must Know</h5>
                  <p className="card-text">Top tools every developer and creator should use.</p>
                 
                </div>
              </div>
            </div>

            {/* Card 6 */}
            <div className="col-md-4 col-sm-6 mb-4" data-aos="fade-up" data-aos-delay="500">
              <div className="card h-100 blog-card shadow-sm">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6wmB1TQJa3bnhpL1b2a0wL6-us6ea-zN5JQ&s" alt="Blog 6" className="card-img-top blog-img" />
                <div className="card-body text-center">
                  <h5 className="card-title">Idea to Execution</h5>
                  <p className="card-text">Turn your raw ideas into real projects with this roadmap.</p>
                 
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="all-blogs-section py-5">
        <div className="container">
          <h2 className="section-heading" data-aos="fade-up">All Blogs</h2>

          {/* Category Buttons */}
          <div className="text-center mb-4" data-aos="zoom-in">
            <button className={`btn mx-2 ${activeCategory === "React" ? "btn-primary" : "btn-outline-primary"}`} onClick={() => setActiveCategory("React")}>
              React
            </button>
            <button className={`btn mx-2 ${activeCategory === "Blogging" ? "btn-primary" : "btn-outline-primary"}`} onClick={() => setActiveCategory("Blogging")}>
              Blogging
            </button>
            <button className={`btn mx-2 ${activeCategory === "WebDev" ? "btn-primary" : "btn-outline-primary"}`} onClick={() => setActiveCategory("WebDev")}>
              Web Dev
            </button>
          </div>

          {/* Blog Cards */}
          <div className="row">
            {activeCategory === "React" && (
              <>
                <div className="col-md-4 mb-4" data-aos="fade-right">
                  <a href="/blog/react-basics" className="blog-link-card d-block shadow-sm text-decoration-none">
                    <img src="https://www.etatvasoft.com/blog/wp-content/uploads/2023/05/React-Fundamentals.jpg" alt="React Basics" className="img-fluid blog-img" />
                    <div className="p-3">
                      <h5 className="mb-2">React Basics</h5>
                      <p className="text-muted">Understand JSX, props, and components easily.</p>
                    </div>
                  </a>
                </div>
                <div className="col-md-4 mb-4" data-aos="fade-up">
                  <a href="/blog/react-hooks" className="blog-link-card d-block shadow-sm text-decoration-none">
                    <img src="https://media2.dev.to/dynamic/image/width=1080,height=1080,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Ffhq29nvkpgs6zz97e62d.jpg" alt="React Hooks" className="img-fluid blog-img" />
                    <div className="p-3">
                      <h5 className="mb-2">React Hooks</h5>
                      <p className="text-muted">Learn useState, useEffect with examples.</p>
                    </div>
                  </a>
                </div>
                <div className="col-md-4 mb-4" data-aos="fade-left">
                  <a href="/blog/react-router" className="blog-link-card d-block shadow-sm text-decoration-none">
                    <img src="https://miro.medium.com/v2/resize:fit:1400/0*Zb9Uoad33rLb7v03.png" alt="React Router" className="img-fluid blog-img" />
                    <div className="p-3">
                      <h5 className="mb-2">React Router</h5>
                      <p className="text-muted">Client-side routing with React Router v6.</p>
                    </div>
                  </a>
                </div>
              </>
            )}

            {activeCategory === "Blogging" && (
              <>
                <div className="col-md-4 mb-4" data-aos="fade-right">
                  <a href="/blog/start-blogging" className="blog-link-card d-block shadow-sm text-decoration-none">
                    <img src="https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2018/08/how-to-start-a-blog-2.png" alt="Start Blogging" className="img-fluid blog-img" />
                    <div className="p-3">
                      <h5 className="mb-2">Start Blogging</h5>
                      <p className="text-muted">How to choose niche, domain and platform.</p>
                    </div>
                  </a>
                </div>
                <div className="col-md-4 mb-4" data-aos="fade-up">
                  <a href="/blog/content-ideas" className="blog-link-card d-block shadow-sm text-decoration-none">
                    <img src="https://thecontentpanel.com/wp-content/uploads/2021/11/Our-Ultimate-List-101-Education-Blog-Post-Ideas-img1.jpg" alt="Content Ideas" className="img-fluid blog-img" />
                    <div className="p-3">
                      <h5 className="mb-2">Blog Content Ideas</h5>
                      <p className="text-muted">Generate blog content consistently with these tips.</p>
                    </div>
                  </a>
                </div>
                <div className="col-md-4 mb-4" data-aos="fade-left">
                  <a href="/blog/seo-blogging" className="blog-link-card d-block shadow-sm text-decoration-none">
                    <img src="https://www.blogtyrant.com/wp-content/uploads/2019/08/seo-for-bloggers.png" alt="SEO for Blogging" className="img-fluid blog-img" />
                    <div className="p-3">
                      <h5 className="mb-2">SEO for Blogging</h5>
                      <p className="text-muted">Get more traffic with basic SEO tricks.</p>
                    </div>
                  </a>
                </div>
              </>
            )}

            {activeCategory === "WebDev" && (
              <>
                <div className="col-md-4 mb-4" data-aos="fade-right">
                  <a href="/blog/html-css" className="blog-link-card d-block shadow-sm text-decoration-none">
                    <img src="https://camo.githubusercontent.com/21bb8ae3629c4852404841252c65baa38426e4c0d01a68a0f7e6fd121d4649dc/68747470733a2f2f7777772e69696d2e66722f65636f6c652d7765622f77702d636f6e74656e742f75706c6f6164732f323031372f30312f48544d4c352e6a7067" alt="HTML & CSS" className="img-fluid blog-img" />
                    <div className="p-3">
                      <h5 className="mb-2">HTML & CSS</h5>
                      <p className="text-muted">Start with basics of structure and styling.</p>
                    </div>
                  </a>
                </div>
                <div className="col-md-4 mb-4" data-aos="fade-up">
                  <a href="/blog/js-basics" className="blog-link-card d-block shadow-sm text-decoration-none">
                    <img src="https://miro.medium.com/v2/resize:fit:1400/1*LyZcwuLWv2FArOumCxobpA.png" alt="JavaScript Basics" className="img-fluid blog-img" />
                    <div className="p-3">
                      <h5 className="mb-2">JavaScript Basics</h5>
                      <p className="text-muted">Learn how JS powers the web with events and logic.</p>
                    </div>
                  </a>
                </div>
                <div className="col-md-4 mb-4" data-aos="fade-left">
                  <a href="/blog/website-launch" className="blog-link-card d-block shadow-sm text-decoration-none">
                    <img src="https://www.searchenginejournal.com/wp-content/uploads/2021/03/site-launch-guide-60643eb6d1445.jpg" alt="Website Launch" className="img-fluid blog-img" />
                    <div className="p-3">
                      <h5 className="mb-2">Launch Your Website</h5>
                      <p className="text-muted">Make your website live with hosting & domains.</p>
                    </div>
                  </a>
                </div>
                <div className="col-md-4 mb-4" data-aos="fade-left">
                  <a href="/blog/website-launch" className="blog-link-card d-block shadow-sm text-decoration-none">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIbP-zge5pndFrOs0l5Xza9nhO3Tzidr5VjA&s" alt="Website Launch" className="img-fluid blog-img" />
                    <div className="p-3">
                      <h5 className="mb-2"> Your Website</h5>
                      <p className="text-muted">Make your website live with hosting & domains.</p>
                    </div>
                  </a>
                </div>
              </>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogPage;
