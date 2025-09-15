import React, { useState } from "react";
import "./PeerToPeerTransfer.css"; // CSS file import karna na bhoolen

const PeerToPeerTransfer = () => {
  const [formData, setFormData] = useState({
    sender: "",
    receiver: "",
    amount: "",
    note: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.sender || !formData.receiver || !formData.amount) {
      alert("Please fill in all required fields.");
      return;
    }
    if (isNaN(formData.amount) || Number(formData.amount) <= 0) {
      alert("Please enter a valid amount.");
      return;
    }

    setSubmitted(true);
  };

  return (
    <>

      <section className="bannerr-section" data-aos="fade-up" data-aos-delay="250">
        <div className="bannerr-content">
          <h1>Peer to Peer Connection</h1>
          <p>Grow your brand with our creative marketing solutions.</p>
          <button className="bannerr-btn">Get Started</button>
        </div>
      </section>


      <section id="about" className="about section py-5 mt-5">
        <div className="container">
          <div className="row gy-4">
            {/* Left Column */}
            <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
              <h3 className="section-heading text-black">
                Peer to Peer Connections Empowering Direct Interactions
              </h3>
              <img
                src="https://media.istockphoto.com/id/1203728704/vector/social-networking-and-business-team-connection-concept-digital-web-network-of-people.jpg?s=612x612&w=0&k=20&c=zzHI5MrNe1GLF7XMhjQTPkkxb1C9ZTrUHcFnJxQHAEw="
                className="img-fluid rounded-4 mb-4 about-img"
                alt="Peer to Peer Concept"
              />
              <p>
                Peer to peer (P2P) systems allow direct data or service exchange between users,
                bypassing intermediaries and promoting transparency.
              </p>
              <p>
                This decentralized model fosters collaboration, trust, and efficiency
                in digital transactions and content sharing.
              </p>
            </div>

            {/* Right Column */}
            <div className="col-lg-6" data-aos="fade-up" data-aos-delay="250">
              <div className="content ps-0 ps-lg-5">
                <p className="fst-italic about-italic">
                  Seamless, direct, and secure connections forming the backbone of modern peer interactions.
                </p>
                <ul className="about-list">
                  <li>
                    <i className="bi bi-check-circle-fill"></i>
                    <span>Decentralized and secure data exchange.</span>
                  </li>
                  <li>
                    <i className="bi bi-check-circle-fill"></i>
                    <span>Increased transparency without middlemen.</span>
                  </li>
                  <li>
                    <i className="bi bi-check-circle-fill"></i>
                    <span>Enhanced collaboration through direct communication.</span>
                  </li>
                </ul>
                <p>
                  Peer-to-peer networks empower users worldwide by enabling faster
                  communication, data sharing, and cooperative projects without central authority.
                </p>

                <div className="position-relative mt-4 about-video-wrapper">
                  <img
                    src="https://www.ryadel.com/wp-content/uploads/2023/04/p2p-peer-to-peer-network.jpg"
                    className="img-fluid rounded-4 about-img"
                    alt="P2P Video Thumbnail"
                  />
                  <a
                    href="https://www.youtube.com/watch?v=Y7f98aduVJ8"
                    className="glightbox pulsating-play-btn"
                    aria-label="Play video"
                  ></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="p2p-section py-5" id="p2p">
        <div className="container">
          <div className="text-center mb-5" data-aos="fade-down">
            <h2 className="section-heading text-black">Peer to Peer Services</h2>
            <p className="section-subtitle">
              Direct user-to-user service exchange without middlemen.
            </p>
          </div>

          <div className="row g-4">
            {/* Card 1 */}
            <div className="col-md-4" data-aos="fade-up" data-aos-delay="100">
              <div className="card peer-card shadow">
                <img src="https://www.itarian.com/assets-new/images/why-use-a-managed-service-provider.png" className="card-img-top" alt="Peer 1" />
                <div className="card-body">
                  <h5 className="card-title">User A - Service Provider</h5>
                  <p className="card-text">
                    Offers digital services like web development, design, or support.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="col-md-4" data-aos="fade-up" data-aos-delay="200">
              <div className="card peer-card shadow">
                <img src="https://i.ytimg.com/vi/nRsVb1j9jyo/maxresdefault.jpg" className="card-img-top" alt="Peer 2" />
                <div className="card-body">
                  <h5 className="card-title">User B - Service Receiver</h5>
                  <p className="card-text">
                    Connects directly with User A to get services, pay securely, and collaborate.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="col-md-4" data-aos="fade-up" data-aos-delay="300">
              <div className="card peer-card shadow">
                <img src="https://cdn.prod.website-files.com/63c5e29f1b5bc83fe0af2489/6748e93dd21558f07de972a6_66a4ff7ce01146a210b4021f_63c5e29f1b5bc89542af2aff_1%252520-%252520Marketing%252520Management.jpeg" className="card-img-top" alt="Peer 3" />
                <div className="card-body">
                  <h5 className="card-title">User C - Content Creator</h5>
                  <p className="card-text">
                    Shares creative content directly with followers and clients.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 4 */}
            <div className="col-md-4" data-aos="fade-up" data-aos-delay="400">
              <div className="card peer-card shadow">
                <img src="https://www.campaigncreators.com/hubfs/How-to-Research-Develop-and-Successfully-Use-Buyer-Personas.png" className="card-img-top" alt="Peer 4" />
                <div className="card-body">
                  <h5 className="card-title">User D - Buyer</h5>
                  <p className="card-text">
                    Purchases digital or physical goods directly from sellers.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 5 */}
            <div className="col-md-4" data-aos="fade-up" data-aos-delay="500">
              <div className="card peer-card shadow">
                <img src="https://media.licdn.com/dms/image/v2/C4E0DAQGw3tZhwYMdmg/learning-public-crop_288_512/learning-public-crop_288_512/0/1568665221673?e=2147483647&v=beta&t=Nw8PYgN4bfgWb_EpkiGcD53qRxHvlS5Bp72zbDVwYpE" className="card-img-top" alt="Peer 5" />
                <div className="card-body">
                  <h5 className="card-title">User E - Freelancer</h5>
                  <p className="card-text">
                    Offers professional skills like writing, coding, or consulting directly.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 6 */}
            <div className="col-md-4" data-aos="fade-up" data-aos-delay="600">
              <div className="card peer-card shadow">
                <img src="https://www.nolanbusinesssolutions.co.uk/storage/uploads/Blog/why-microsoft-dynamics-365-business-central-is-ideal-for-the-professional-services-industry/pexels-fauxels-3184338-min_judgc.jpg" className="card-img-top" alt="Peer 6" />
                <div className="card-body">
                  <h5 className="card-title">User F - Service Collaborator</h5>
                  <p className="card-text">
                    Collaborates with other peers for joint projects and services.
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

export default PeerToPeerTransfer;
