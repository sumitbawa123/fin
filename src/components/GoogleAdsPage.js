import React, { useEffect } from 'react';
import './GoogleAdsPage.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap'; // ✅ Correct import added
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import AOS from 'aos';



const adData = [
  {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdRVJ2-ueup1fiS350MR9Px9hrzE7uukV_iw&s',
    title: 'Measured Results',
    description: 'Track campaign performance with Google Ads and Analytics for data-driven insights.',
  },
  {
    image: 'https://www.fishsensedq.com/wp-content/uploads/2020/04/Internet-Traffic-SEOClerks.jpg',
    title: 'Quality Traffic',
    description: 'Drive high-potential traffic to boost revenue and leads.',
  },
  {
    image: 'https://bsmedia.business-standard.com/_media/bs/img/article/2018-06/14/full/1528966655-8748.jpg?im=FeatureCrop,size=(826,465) ',
    title: 'Instant Results',
    description: 'See measurable results within hours of launching your ads..',
  },
];

const GoogleAdsPage = () => {

  useEffect(() => {
    AOS.init({ duration: 1000, once: true }); // once:true means animation only happens once
  }, []);

  return (
      <>
       <section className="promo-banner-section d-flex align-items-center text-center " >
      <div className="container text-white" >
        <div className="banner-content p-5 rounded"  data-aos="zoom-in" >
          <h1 className="mb-3">Grow Your Business with Google Ads</h1>
          <p className="lead mb-4">
            Promote on Facebook, Instagram & YouTube with Smart Ad Strategies
          </p>
          <Button variant="light" size="lg">
            Join Social Spark Hub
          </Button>
        </div>
      </div>
    </section>
  
      <section className="container my-5 py-4">
        <div className="row align-items-center">
          <div
            className="col-md-6 mb-4 mb-md-0"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <img
              src="https://www.needmomentum.com/wp-content/uploads/2022/11/Benefits-of-Google-Ads-.jpg"
              alt="Grow with Ads"
              className="img-fluid rounded shadow"
            />
          </div>
          <div
            className="col-md-6"
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            <h3 className="mb-3 fw-bold text-success">
              Target the Right Audience at the Right Time
            </h3>
            <p className="text-muted">
              Hire our top Google Ads experts to maximize the value of your ad spend.
              With over 80% of internet users on Google, it’s the world’s most
              powerful advertising platform. Our Google Ads management services help
              you connect with interested customers at the perfect moment, driving
              conversions and growth.
            </p>
            <button className="btn btn-success mt-3 px-4 py-2">
              Start Advertising Now
            </button>
          </div>
        </div>
      </section>


      <section className="ad-section container py-5">
        <div className="row">
          {adData.map((ad, index) => (
            <div
              className="col-md-4 mb-4"
              key={index}
              data-aos="fade-up"
              data-aos-delay={`${index * 100}`}
              data-aos-duration="800"
            >
              <div className="card custom-card h-100 shadow-lg">
                <img src={ad.image} className="card-img-top" alt={ad.title} />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{ad.title}</h5>
                  <p className="card-text flex-grow-1">{ad.description}</p>
                 
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-5" style={{ background: '#f8f9fa' }}>
        <Container>
          <h2 className="text-center mb-4" data-aos="fade-up" data-aos-duration="800">
            Our Google Ads Campaign Types
          </h2>
          <Row className="g-4">
            <Col md={4} data-aos="fade-up" data-aos-delay="100" data-aos-duration="800">
              <Card className="h-100 shadow">
                <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA-Dj8c5DSEC0-g2gYA9O8Nt8fWtQ55Xq02Q&s" />
                <Card.Body>
                  <Card.Title>Search Ads</Card.Title>
                  <Card.Text>
                    Text-based ads that appear on Google search when users look for services.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4} data-aos="fade-up" data-aos-delay="200" data-aos-duration="800">
              <Card className="h-100 shadow">
                <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJIildH9p7q4y6QBLZDVDcJB2iPLa_UhbA9Q&ss" />
                <Card.Body>
                  <Card.Title>Display Ads</Card.Title>
                  <Card.Text>
                    Visual banner ads shown on websites to increase brand visibility.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4} data-aos="fade-up" data-aos-delay="300" data-aos-duration="800">
              <Card className="h-100 shadow">
                <Card.Img variant="top" src="https://www.marketing91.com/wp-content/uploads/2020/06/What-are-the-Latest-Trends-in-Video-Advertising.jpg" />
                <Card.Body>
                  <Card.Title>Video Ads</Card.Title>
                  <Card.Text>
                    Engaging videos shown on YouTube and partner sites.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col md={6} data-aos="fade-up" data-aos-delay="400" data-aos-duration="800">
              <Card className="h-100 shadow">
                <Card.Img variant="top" src="https://cdn.dribbble.com/userupload/29411383/file/original-f118d83f91686672a86a750d800a4cdb.jpg?resize=400x0" />
                <Card.Body>
                  <Card.Title>Shopping Ads</Card.Title>
                  <Card.Text>
                    Product ads with images, prices, and titles on Google Shopping.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col md={6} data-aos="fade-up" data-aos-delay="500" data-aos-duration="800">
              <Card className="h-100 shadow">
                <Card.Img variant="top" src="https://ads.apple.com/adsdam/app-store/us/en_us/images/basic/2024-11-19/basic_advanced_panel.jpg" />
                <Card.Body>
                  <Card.Title>App Promotion Ads</Card.Title>
                  <Card.Text>
                    Promote your mobile app on Google Search, Play Store, and YouTube.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      <section style={{ backgroundColor: '#ffffff', padding: '60px 0' }}>
        <Container>
          <div className="text-center mb-5" data-aos="fade-up" data-aos-duration="800">
            <h2 className="fw-bold display-5">Comprehensive Google Ads Solutions</h2>
            <p className="text-muted fs-5">
              Drive measurable results with our tailored advertising strategies across Google’s powerful network.
            </p>
          </div>

          <Row className="g-4">
            <Col md={4} data-aos="fade-up" data-aos-delay="100" data-aos-duration="800">
              <Card className="h-100 shadow border-0 rounded-4">
                <Card.Img
                  variant="top"
                  src="https://www.abstraktmg.com/nitropack_static/bbRzcsRJDGMWPqtQsfhJnIQsrmgxVPGl/assets/images/optimized/rev-f85cb72/www.abstraktmg.com/wp-content/uploads/2024/04/What-Is-Paid-Search_Main.png"
                  alt="Search Ads"
                  style={{ borderTopLeftRadius: '1rem', borderTopRightRadius: '1rem' }}
                />
                <Card.Body>
                  <Card.Title className="fw-semibold">Search Campaigns</Card.Title>
                  <Card.Text>
                    Get your business in front of users actively searching for your products or services on Google.
                  </Card.Text>
                  <Button variant="outline-primary">Learn More</Button>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4} data-aos="fade-up" data-aos-delay="200" data-aos-duration="800">
              <Card className="h-100 shadow border-0 rounded-4">
                <Card.Img
                  variant="top"
                  src="https://ppcexpo.com/blog/wp-content/uploads/2024/10/what-is-google-display-network-1-1.png"
                  alt="Display Ads"
                  style={{ borderTopLeftRadius: '1rem', borderTopRightRadius: '1rem' }}
                />
                <Card.Body>
                  <Card.Title className="fw-semibold">Display Campaigns</Card.Title>
                  <Card.Text>
                    Reach new audiences across millions of websites and apps with engaging visual ads.
                  </Card.Text>
                  <Button variant="outline-success">Explore Options</Button>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4} data-aos="fade-up" data-aos-delay="300" data-aos-duration="800">
              <Card className="h-100 shadow border-0 rounded-4">
                <Card.Img
                  variant="top"
                  src="https://cdn.prod.website-files.com/64bd17083f9cb6f972b1e03d/64bd22c34bea106fb56a2cad_why-video.webp"
                  alt="Video Ads"
                  style={{ borderTopLeftRadius: '1rem', borderTopRightRadius: '1rem' }}
                />
                <Card.Body>
                  <Card.Title className="fw-semibold">Video Campaigns</Card.Title>
                  <Card.Text>
                    Leverage the power of YouTube to deliver your message through captivating video content.
                  </Card.Text>
                  <Button variant="outline-danger">See Examples</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
  
    </>


  );
};

export default GoogleAdsPage;
