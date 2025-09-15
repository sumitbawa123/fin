import React, { useEffect } from 'react';
import './AKGraphicsDesign.css';  // Custom CSS below
import AOS from 'aos';
import { Container, Button, Row, Col, Card } from "react-bootstrap";

const AKGraphicsDesign = () => {
    useEffect(() => {
        AOS.init({ once: true });
    }, []);
    return (
        <>
            <div className="gradient-heading text-center py-5">
                <h2>Graphics Design</h2>
                <p className="lead mb-4">
                    Grow your business with Facebook, Instagram, and YouTube Promotions
                </p>
                <button type="button" className="btn btn-primary btn-lg">
                    Join Social Spark Hub
                </button>
            </div>

            <section style={{ backgroundColor: '#f9f9f9', padding: '60px 0' }}>
                <Container>
                    <Row className="align-items-center g-4">
                        <Col md={6} data-aos="fade-right" data-aos-duration="800">
                            <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQKX7dUqStI0C1i-2ISAvYc1efEgGpE6oXjQ&s"
                                alt="Grow with Ads"
                                className="img-fluid rounded shadow hover-zoom"
                                style={{ width: '100%', maxHeight: '500px', objectFit: 'cover' }}
                            />
                        </Col>
                        <Col md={6} data-aos="fade-left" data-aos-duration="800">
                            <h3 className="mb-3 fw-bold">Our Graphic Design Services Speak For Themselves</h3>
                            <p className="text-muted">
                                Through our innovative designs, we have empowered prestigious clients to achieve unparalleled visibility for their brands and enterprises. Our graphic designs are a testament to exceptional branding, delivering the most impactful form of advertising.
                            </p>
                            <p className="text-muted">
                                As a leading graphic design company in Noida, <strong>FINTRADIFY</strong> excels in creating and curating any form of design. Contact us today, and we’ll ensure an extraordinary experience with unmatched graphic design services delivered promptly.
                            </p>
                            <Button className="btn-primary" size="md">Start Advertising Now</Button>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section id="services" className="py-5 bg-light">
                <Container>
                    <h2
                        className="text-center mb-5 fw-bold"
                        data-aos="fade-down"
                        data-aos-duration="800"
                    >
                        Our Services
                    </h2>

                    <Row className="g-4">
                        {/* Service 1 */}
                        <Col md={4} data-aos="fade-up" data-aos-delay="0">
                            <Card className="shadow-sm border-0 h-100 text-center rounded-4">
                                <Card.Img
                                    src="https://www.priority-press.com/wp-content/uploads/2020/09/Digital-Printing-Companies-in-Ras-Al-Khaimah-1024x576.jpg"
                                    alt="Printing Design"
                                    className="img-fluid rounded-top"
                                    style={{ height: '200px', objectFit: 'cover' }}
                                />
                                <Card.Body>
                                    <i className="bi bi-palette fs-1 text-primary mb-2"></i>
                                    <Card.Title className="fw-semibold">Printing Design</Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>

                        {/* Service 2 */}
                        <Col md={4} data-aos="fade-up" data-aos-delay="100">
                            <Card className="shadow-sm border-0 h-100 text-center rounded-4">
                                <Card.Img
                                    src="https://images.examples.com/wp-content/uploads/2017/10/family-services-brochure-template-screenshot-01-.jpg"
                                    alt="Brochures"
                                    className="img-fluid rounded-top"
                                    style={{ height: '200px', objectFit: 'cover' }}
                                />
                                <Card.Body>
                                    <i className="bi bi-vector-pen fs-1 text-primary mb-2"></i>
                                    <Card.Title className="fw-semibold">Brochures</Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>

                        {/* Service 3 */}
                        <Col md={4} data-aos="fade-up" data-aos-delay="200">
                            <Card className="shadow-sm border-0 h-100 text-center rounded-4">
                                <Card.Img
                                    src="https://cms-assets.tutsplus.com/cdn-cgi/image/width=630/uploads/users/1631/posts/35717/image/PosterTemplate03.jpg"
                                    alt="Posters"
                                    className="img-fluid rounded-top"
                                    style={{ height: '200px', objectFit: 'cover' }}
                                />
                                <Card.Body>
                                    <i className="bi bi-phone fs-1 text-primary mb-2"></i>
                                    <Card.Title className="fw-semibold">Posters</Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>

                        {/* Service 4 */}
                        <Col md={4} data-aos="fade-up" data-aos-delay="0">
                            <Card className="shadow-sm border-0 h-100 text-center rounded-4">
                                <Card.Img
                                    src="https://cms.cloudinary.vpsvc.com/image/upload/c_scale,dpr_auto,f_auto,q_70,w_auto:50:550/India%20LOB/Return%20Address%20Labels/IN-Return-Address-Labels-overview"
                                    alt="Labels"
                                    className="img-fluid rounded-top"
                                    style={{ height: '200px', objectFit: 'cover' }}
                                />
                                <Card.Body>
                                    <i className="bi bi-palette fs-1 text-primary mb-2"></i>
                                    <Card.Title className="fw-semibold">Labels</Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>

                        {/* Service 5 */}
                        <Col md={4} data-aos="fade-up" data-aos-delay="100">
                            <Card className="shadow-sm border-0 h-100 text-center rounded-4">
                                <Card.Img
                                    src="https://static.wixstatic.com/media/d61f66_425191ccf0414f638730ce11d6c42f86~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg"
                                    alt="Bottle Wrappers"
                                    className="img-fluid rounded-top"
                                    style={{ height: '200px', objectFit: 'cover' }}
                                />
                                <Card.Body>
                                    <i className="bi bi-vector-pen fs-1 text-primary mb-2"></i>
                                    <Card.Title className="fw-semibold">Bottle Wrappers</Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>

                        {/* Service 6 */}
                        <Col md={4} data-aos="fade-up" data-aos-delay="200">
                            <Card className="shadow-sm border-0 h-100 text-center rounded-4">
                                <Card.Img
                                    src="https://i0.wp.com/visualsculptors.com/wp-content/uploads/2024/05/19611-1-scaled.jpg?fit=640%2C569&ssl=1"
                                    alt="Standee Designs"
                                    className="img-fluid rounded-top"
                                    style={{ height: '200px', objectFit: 'cover' }}
                                />
                                <Card.Body>
                                    <i className="bi bi-phone fs-1 text-primary mb-2"></i>
                                    <Card.Title className="fw-semibold">Standee Designs</Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </section>


            <section id="brand-section" className="py-5 bg-white">
                <div className="container">
                    <div className="row align-items-center">

                        {/* Text Content */}
                        <div
                            className="col-md-6 mb-4 mb-md-0"
                            data-aos="fade-right"
                            data-aos-duration="1000"
                        >
                            <h2 className="display-5 fw-bold">
                                Elevate Your Brand with Our Designs
                            </h2>
                            <p className="lead mt-3 text-muted">
                                Our designs have transformed the visibility of numerous prestigious clients, making their brands stand out. We specialize in creating visually stunning graphics that resonate with your audience and reinforce your brand identity.
                                <br /><br />
                                <strong>FINTRADIFY</strong> is committed to delivering exceptional graphic design services tailored to your needs. Reach out to us, and let us create designs that leave a lasting impression.
                            </p>
                            <button className="btn btn-primary px-4 py-2 mt-3 shadow-sm">
                                Explore More
                            </button>
                        </div>

                        {/* Image Content */}
                        <div
                            className="col-md-6 text-center"
                            data-aos="fade-left"
                            data-aos-duration="1000"
                        >
                            <img
                                src="https://auth.typeflo.io/storage/v1/object/public/posts/public/5e612709-3da1-4eb5-98cd-dd7241b0845b/1b62e0fe-976e-4b18-9ad7-cef7fcdfd9a1/48gi9ah.webp?1733395545793"
                                alt="Brand Design"
                                className="img-fluid rounded-4 shadow-lg"
                                style={{ maxHeight: '400px', objectFit: 'cover' }}
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Portfolio */}

            <section id="portfolio" className="py-5 bg-light">
                <div className="container">
                    <h2
                        className="text-center mb-5 display-5 fw-bold text-uppercase text-primary"
                        data-aos="fade-up"
                    >
                        Our Portfolio
                    </h2>

                    <div className="row g-4">
                        {[
                            {
                                src: "https://bobstudio.imgix.net/wp-content/uploads/2023/08/univ8-boxes-fw.jpg?auto=format%2Ccompress&dpr=2&ixlib=imgixjs-4.0.0",
                                alt: "Label Printing",
                            },
                            {
                                src: "https://res.cloudinary.com/upwork-cloud/image/upload/c_scale,w_1000/v1696277037/catalog/1508856486734106624/gg8m0tnztxolokeh13qi.jpg",
                                alt: "Box Design",
                            },
                            {
                                src: "https://lionmedia.in/wp-content/uploads/2022/08/brochre-design.jpg",
                                alt: "Brochure Design",
                            },
                            {
                                src: "https://i0.wp.com/keondesigns.com/wp-content/uploads/2019/05/14-Connected-Speakers_Project-Page-Image-.jpg?fit=806%2C472&ssl=1",
                                alt: "Laser Cutting",
                            },
                            {
                                src: "https://www.designyourway.net/diverse/strangepackage/Doritos.jpg",
                                alt: "Packaging",
                            },
                            {
                                src: "https://images.ctfassets.net/7ckzofy2vw5p/5cmSvR7X0UekkM0ldqeCxd/69cba9f46c21e2deb5f299bafdc7e44e/en-XX_0757_Autumn-Fall_mini___PPP_banners_PPP_banners_1138x736_card.webp?w=850&h=400&fm=jpg&q=85&fl=progressive",
                                alt: "Promotional Banners",
                            },
                            {
                                src: "https://colorlib.com/wp/wp-content/uploads/sites/2/1_product-mockup.jpg",
                                alt: "Product Mockup",
                            },
                            {
                                src: "https://thedesignpeople.in/wp-content/uploads/2024/04/Coffee-packaging-design-in-India-2.jpg",
                                alt: "Coffee Packaging",
                            },
                        ].map((item, index) => (
                            <div
                                className="col-md-6 col-lg-3"
                                key={index}
                                data-aos="zoom-in"
                                data-aos-delay={index * 100}
                            >
                                <div className="portfolio-img-container position-relative overflow-hidden rounded shadow-sm">
                                    <img
                                        src={item.src}
                                        alt={item.alt}
                                        className="img-fluid portfolio-img"
                                    />
                                    <div className="portfolio-overlay d-flex align-items-center justify-content-center">
                                        <p className="text-white fw-bold mb-0">{item.alt}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

        </>
    );
};

export default AKGraphicsDesign;
