import React from "react";
import "./Services.css";

// Images
import infra1 from "../../assets/histo/doctorservice.jpg";
import infra2 from "../../assets/histo/waterservice.jpg";
import infra3 from "../../assets/histo/waterservice.jpg";
import heroImage from "../../assets/histo/ser.jpg";

// ✅ WhyChooseServices component now merged here
function WhyChooseServices() {
  const points = [
    {
      icon: "🌊",
      title: "Specialized in Fisheries & Marine Research",
      desc: "Providing expert knowledge on Zanzibar’s marine ecosystems and resources."
    },
    {
      icon: "🧪",
      title: "Advanced Laboratory & Scientific Facilities",
      desc: "Offering reliable water quality testing, aquaculture studies, and fisheries monitoring."
    },
    {
      icon: "📊",
      title: "Evidence-Based Advisory",
      desc: "Delivering research-driven recommendations to support policy and decision-making."
    },
    {
      icon: "♻️",
      title: "Commitment to Sustainability",
      desc: "Promoting responsible fishing, aquaculture, and marine conservation practices."
    },
    {
      icon: "🤝",
      title: "Strong Partnerships",
      desc: "Collaborating with local communities, government institutions, and international organizations."
    },
    {
      icon: "📚",
      title: "Knowledge Sharing & Publications",
      desc: "Producing scientific reports, training materials, and educational resources."
    },
    {
      icon: "👨‍💻",
      title: "Skilled & Dedicated Experts",
      desc: "A professional team working to ensure innovation, accuracy, and excellence."
    }
  ];

  return (
    <section className="why-choose-section">
      <div className="container">
        <h2>Why Choose Our Services</h2>
        <p className="lead">
          ZAFIRI provides specialized, research-driven services to support sustainable marine resource management and
          community-focused solutions.
        </p>

        <div className="points-grid">
          {points.map((p, idx) => (
            <article className="point-card" key={idx}>
              <div className="point-icon">{p.icon}</div>
              <div className="point-body">
                <h3 className="point-title">{p.title}</h3>
                <p className="point-desc">{p.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

// ✅ Main Services component
export default function Services() {
  const infraCards = [
    {
      image: infra1,
      title: "Research infrastructures",
      desc: "We offer our laboratories, equipment, and data for use in research projects and by our partners.",
    },
    {
      image: infra2,
      title: "Quality and laboratory services",
      desc: "We act as national environmental reference laboratory appointed by the Ministry of the Environment.",
    },
    {
      image: infra3,
      title: "Research vessel Aranda",
      desc: "Aranda is a modern, ice-reinforced research vessel.",
    },
    {
      image: infra3,
      title: "Research vessel Aranda",
      desc: "Aranda is a modern, ice-reinforced research vessel.",
    },
    {
      image: infra3,
      title: "Research vessel Aranda",
      desc: "Aranda is a modern, ice-reinforced research vessel.",
    },
  ];

  return (
    <>
      <div>
        {/* Hero Section */}
        <section
          className="hero"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="overlay"></div>
          <div className="hero-content">
            <h1>OUR PROUD JOURNEY IN RESEARCH AND SERVICE</h1>
            <div className="breadcrumb">
              <a href="/">HOME</a> <span>&gt;</span>
              <span>OUR SERVICE</span>
            </div>
          </div>
        </section>

        {/* ✅ Why Choose Our Services */}
        <section>
          <div className="decision-info">
            <WhyChooseServices />
            <hr />
          </div>
        </section>

        {/* ✅ Research Infrastructure Section */}
        <section className="infra-section">
          <div className="infra-header">
            <h2>Our Services</h2>
            <p>
              At ZAFIRI, we are proud to offer a wide range of specialized services
              that support sustainable fisheries and marine resource management.
              From state-of-the-art laboratories to modern research vessels and
              advanced monitoring systems, our services are designed to deliver
              accurate data, innovative solutions, and real impact for communities,
              policymakers, and global partners.
            </p>
            <p>
              Whether it’s conducting water quality analysis, guiding aquaculture
              development, or providing evidence-based advisory, ZAFIRI’s services
              ensure excellence, reliability, and sustainability every step of the way.
            </p>
          </div>

          <div className="infra-cards">
            {infraCards.map((card, index) => (
              <div key={index} className="infra-card">
                <img src={card.image} alt={card.title} />
                <div className="infra-content">
                  <h3>{card.title}</h3>
                  <p>{card.desc}</p>
                   <a href="/area">Learn More →</a>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
