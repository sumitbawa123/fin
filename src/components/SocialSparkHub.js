import React, { useEffect } from 'react';
import { Container, Row, Col, Card, Button, Carousel } from 'react-bootstrap';
import './SocialSparkHub.css';
import AOS from 'aos';


function SocialSparkHub() {

    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

    return (
        <>
            {/* Hero Section */}
            <div className="bg-dark text-white text-center py-5">
                <Container>
                    <h1 className="display-4 fw-bold">Social Media Marketing</h1>
                    <p className="lead">Grow your business with Facebook, Instagram, and YouTube Promotions</p>
                    <Button variant="primary" size="lg">Join Social Spark Hub</Button>
                </Container>
            </div>

            <Container className="py-5">
                <Row className="align-items-center custom-row">
                    <Col md={6} className="text-center" data-aos="fade-right">
                        <img
                            src="https://www.salesforce.com/in/blog/wp-content/uploads/sites/9/2024/10/social-media-marketing.png"
                            alt="Social Media Marketing"
                            className="custom-image"
                        />
                    </Col>
                    <Col md={6} data-aos="fade-left">
                        <h2 className="custom-title text-black">Boost Your Brand with Expert Social Media Marketing</h2>
                        <p className="custom-text">
                            Leverage our proven strategies to increase your brand awareness, engage your audience,
                            and drive more sales across Facebook, Instagram, YouTube, and more.
                        </p>
                        <Button variant="primary" data-aos="zoom-in" data-aos-delay="300">Get Started Now</Button>
                    </Col>
                </Row>
            </Container>

            {/* Services */}
            <Container className="py-5">
                <h2  className="section-heading text-black" data-aos="zoom-in">Our Expertise</h2>

                <Row>
                    <Col md={4} className="mb-4" data-aos="fade-up" data-aos-delay="0">
                        <Card className="h-100 shadow-sm text-center p-3 expertise-card">
                            <Card.Img
                                variant="top"
                                src="https://cdn-icons-png.flaticon.com/512/733/733547.png"
                                alt="Facebook"
                                style={{ width: '200px', height: '200px', objectFit: 'contain', margin: '0 auto 15px' }}
                            />
                            <Card.Body>
                                <Card.Title>Facebook</Card.Title>
                                <Card.Text>
                                    Boost your business with tailored Facebook ads. Use organic and paid tools for precise targeting.
                                    Engage vast communities through segmented campaigns.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col md={4} className="mb-4" data-aos="fade-up" data-aos-delay="100">
                        <Card className="h-100 shadow-sm text-center p-3 expertise-card">
                            <Card.Img
                                variant="top"
                                src="https://cdn-icons-png.flaticon.com/512/1384/1384063.png"
                                alt="Instagram"
                                style={{ width: '200px', height: '200px', objectFit: 'contain', margin: '0 auto 15px' }}
                            />
                            <Card.Body>
                                <Card.Title>Instagram</Card.Title>
                                <Card.Text>
                                    Grow your brand with powerful Instagram campaigns. Leverage influencers, captions, and visuals
                                    for engagement. Transform your presence with targeted content strategies.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col md={4} className="mb-4" data-aos="fade-up" data-aos-delay="200">
                        <Card className="h-100 shadow-sm text-center p-3 expertise-card">
                            <Card.Img
                                variant="top"
                                src="https://cdn-icons-png.flaticon.com/512/1384/1384060.png"
                                alt="YouTube"
                                style={{ width: '200px', height: '200px', objectFit: 'contain', margin: '0 auto 15px' }}
                            />
                            <Card.Body>
                                <Card.Title>YouTube</Card.Title>
                                <Card.Text>
                                    Create engaging video ads with viral potential. Build a compelling brand channel homepage.
                                    Capture attention with emotionally impactful videos.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

                <Row>
                    <Col md={4} className="mb-4" data-aos="fade-up" data-aos-delay="300">
                        <Card className="h-100 shadow-sm text-center p-3 expertise-card">
                            <Card.Img
                                variant="top"
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXeFK2NtY-Ljhq7Fo_sAhlGNjWABnNFVaWIQ&s"
                                alt="Twitter"
                                style={{ width: '200px', height: '200px', objectFit: 'contain', margin: '0 auto 15px' }}
                            />
                            <Card.Body>
                                <Card.Title>Twitter</Card.Title>
                                <Card.Text>
                                    Drive engagement with compelling Twitter messages. Promote news, launches, and more across
                                    industries. Deliver measurable results with expert strategies.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col md={4} className="mb-4" data-aos="fade-up" data-aos-delay="400">
                        <Card className="h-100 shadow-sm text-center p-3 expertise-card">
                            <Card.Img
                                variant="top"
                                src="https://ppcexpo.com/blog/wp-content/uploads/2024/05/what-is-a-business-model-canvas.jpg"
                                alt="Canva Business"
                                style={{ width: '200px', height: '200px', objectFit: 'contain', margin: '0 auto 15px' }}
                            />
                            <Card.Body>
                                <Card.Title>Canva Business</Card.Title>
                                <Card.Text>
                                    Craft visually stunning posts with Canva’s tools. Use templates and designs for appealing
                                    campaigns. Create flexible, high-impact digital marketing content.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col md={4} className="mb-4" data-aos="fade-up" data-aos-delay="500">
                        <Card className="h-100 shadow-sm text-center p-3 expertise-card">
                            <Card.Img
                                variant="top"
                                src="https://cronuts.digital/wp-content/uploads/2023/01/mailchimp-logo.jpg"
                                alt="Mailchimp"
                                style={{ width: '200px', height: '200px', objectFit: 'contain', margin: '0 auto 15px' }}
                            />
                            <Card.Body>
                                <Card.Title>Mailchimp</Card.Title>
                                <Card.Text>
                                    Automate and personalize your email marketing. Build strong customer journeys with Mailchimp tools.
                                    Track performance and boost conversions easily.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>

            <section className="container my-5">
                <h2  className="section-heading text-black" data-aos="zoom-in">Our Services</h2>
                <div className="row">

                    <div className="col-md-6 col-lg-3 mb-4" data-aos="fade-up" data-aos-delay="0">
                        <div className="card h-100 shadow-sm">
                            <img
                                src="https://media-insite.com/wp-content/uploads/2024/08/64e61db02107e22658f580b8_%D0%BE%D0%B1%D0%BA%D0%BB%D0%B0%D0%B4%D0%B8%D0%BD%D0%BA%D0%B0-%D0%B3%D0%B0%D0%B9%D0%B4-%D0%B7-%D1%81%D0%BE%D1%86%D1%96%D0%B0%D0%BB%D1%8C%D0%BD%D0%B8%D1%85-%D0%BC%D0%B5%D1%80%D0%B5%D0%B6.png"
                                className="card-img-top"
                                alt="Social Media Monitoring"
                                style={{ height: '180px', objectFit: 'cover' }}
                            />
                            <div className="card-body">
                                <h5 className="card-title">Social Media Monitoring</h5>
                                <p className="card-text">
                                    Track user sentiment about your brand and competitors.
                                    Analyze post and campaign performance with advanced tools.
                                    Gain insights into audience needs and brand perception.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6 col-lg-3 mb-4" data-aos="fade-up" data-aos-delay="100">
                        <div className="card h-100 shadow-sm">
                            <img
                                src="https://perrfectmarketing.com/wp-content/uploads/2020/06/perrfect-marketing-consultancy-social-media.svg"
                                className="card-img-top"
                                alt="Social Media Consultancy"
                                style={{ height: '180px', objectFit: 'cover' }}
                            />
                            <div className="card-body">
                                <h5 className="card-title">Social Media Consultancy</h5>
                                <p className="card-text">
                                    Receive expert insights on social media performance.
                                    Our team suggests strategies to optimize your pages.
                                    Define clear goals for your social media accounts.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6 col-lg-3 mb-4" data-aos="fade-up" data-aos-delay="200">
                        <div className="card h-100 shadow-sm">
                            <img
                                src="https://cdn.prod.website-files.com/66ab4f6675d4c65b05c9fbb2/677cd0d5733a9c528d4a5154_638dce6a2c427c7660ebb388_BlogPostInfographic-02.png"
                                className="card-img-top"
                                alt="Brand Management"
                                style={{ height: '180px', objectFit: 'cover' }}
                            />
                            <div className="card-body">
                                <h5 className="card-title">Brand Management</h5>
                                <p className="card-text">
                                    Shape how your audience perceives your brand.
                                    Create a unique identity for easy recognition.
                                    Ensure a cohesive brand look across all platforms.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6 col-lg-3 mb-4" data-aos="fade-up" data-aos-delay="300">
                        <div className="card h-100 shadow-sm">
                            <img
                                src="https://go4hosting.com/wp-content/uploads/2021/02/abc.jpg.png"
                                className="card-img-top"
                                alt="Cloud Solutions"
                                style={{ height: '180px', objectFit: 'cover' }}
                            />
                            <div className="card-body">
                                <h5 className="card-title">Cloud Solutions</h5>
                                <p className="card-text">
                                    Deploying scalable cloud infrastructure for business agility.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            <section className="fin-tradify-section container my-5">
                <div className="row align-items-center">
                    <article className="col-md-6 content-area" data-aos="fade-right">
                        <h2 className="section-title fw-bold mb-3">
                            FinTradify: Building Connections & Strengthening Brands
                        </h2>
                        <p>
                            Struggling to maximize your social media potential? <strong>FinTradify’s</strong> creative strategies and data-driven approach position your brand as an industry leader. Our tailored campaigns ensure your social media channels thrive in the evolving digital landscape.
                        </p>
                        <p>
                            From selecting the right platforms to crafting engaging posts, every step shapes your brand’s image. We specialize in increasing followers, promoting products, and fostering connections with your audience through custom social media strategies.
                        </p>
                        <p>
                            With years of expertise, <strong>FinTradify</strong> delivers impactful content to boost your online presence. Ready to transform your brand? Partner with us to drive growth and build lasting relationships.
                        </p>
                    </article>

                    <aside className="col-md-6 expertise-area" data-aos="fade-left">
                        <h3 className="expertise-title fw-bold mb-3">Our Areas of Expertise</h3>
                        <ul className="expertise-list">
                            <li data-aos="zoom-in" data-aos-delay="100">
                                <img src="https://img.icons8.com/ios/40/7a7a7a/visible--v1.png" alt="Social Media Monitoring" />
                                <span>Social Media Monitoring</span>
                            </li>
                            <li data-aos="zoom-in" data-aos-delay="150">
                                <img src="https://img.icons8.com/ios/40/7a7a7a/topic.png" alt="Social Media Consultancy" />
                                <span>Social Media Consultancy</span>
                            </li>
                            <li data-aos="zoom-in" data-aos-delay="200">
                                <img src="https://img.icons8.com/ios/40/7a7a7a/briefcase.png" alt="Brand Management" />
                                <span>Brand Management</span>
                            </li>
                            <li data-aos="zoom-in" data-aos-delay="250">
                                <img src="https://img.icons8.com/ios/40/7a7a7a/instagram-new.png" alt="Instagram Marketing" />
                                <span>Instagram Marketing</span>
                            </li>
                            <li data-aos="zoom-in" data-aos-delay="300">
                                <img src="https://img.icons8.com/ios/40/7a7a7a/facebook-new.png" alt="Facebook Marketing" />
                                <span>Facebook Marketing</span>
                            </li>
                            <li data-aos="zoom-in" data-aos-delay="350">
                                <img src="https://img.icons8.com/ios/40/7a7a7a/twitter.png" alt="Twitter Marketing" />
                                <span>Twitter Marketing</span>
                            </li>
                            <li data-aos="zoom-in" data-aos-delay="400">
                                <img src="https://img.icons8.com/ios/40/7a7a7a/linkedin.png" alt="LinkedIn Marketing" />
                                <span>LinkedIn Marketing</span>
                            </li>
                            <li data-aos="zoom-in" data-aos-delay="450">
                                <img src="https://img.icons8.com/ios/40/7a7a7a/youtube-play.png" alt="YouTube Marketing" />
                                <span>YouTube Marketing</span>
                            </li>
                            <li data-aos="zoom-in" data-aos-delay="500">
                                <img src="https://img.icons8.com/ios/40/7a7a7a/snapchat.png" alt="Snapchat Marketing" />
                                <span>Snapchat Marketing</span>
                            </li>
                            <li data-aos="zoom-in" data-aos-delay="550">
                                <img src="https://img.icons8.com/ios/40/7a7a7a/pinterest.png" alt="Pinterest Marketing" />
                                <span>Pinterest Marketing</span>
                            </li>
                            <li data-aos="zoom-in" data-aos-delay="600">
                                <img src="https://img.icons8.com/ios/40/7a7a7a/new-post.png" alt="Email Marketing" />
                                <span>Email Marketing</span>
                            </li>
                        </ul>
                    </aside>
                </div>
            </section>

           
            {/* Contact CTA */}
            <div className="bg-primary text-white text-center py-5">
                <Container>
                    <h2>Ready to Scale with Social Spark Hub?</h2>
                    <p>Contact us now and let’s build your online presence together.</p>
                    <Button variant="light" size="lg">Contact Social Spark Hub</Button>
                </Container>
            </div>
        </>
    );
}

export default SocialSparkHub;
