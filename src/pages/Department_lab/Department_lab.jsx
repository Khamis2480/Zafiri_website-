import React from "react";
import "./Department_lab.css";
import heroImage from "../../assets/laboratory/laboratory-equipment.jpeg";
import doctor1 from "../../assets/event/event1.JPG";
import doctor2 from "../../assets/event/event2.JPG";
import doctor3 from "../../assets/event/event3.JPG";
import doctor4 from "../../assets/event/event4.JPG";
import researchImage from "../../assets/laboratory/lab_service_images.jfif";
import researchPapers from "../../assets/laboratory/bab_report_images.jfif";
import promoImage from "../../assets/laboratory/strategic.webp"

function LaboratoryHero() {
  return (
    <section
      className="hero-lab-dept"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="overlay-lab-dept"></div>
      <div className="hero-lab-content">
        <h1>Department of Laboratory</h1>
        <p>
          The Laboratory Department is dedicated to providing high-quality diagnostic, analytical,
          and testing services that support research, education, and decision-making in fisheries,
          aquaculture, and marine ecosystems.
        </p>
      </div>
    </section>
  );
}

function LaboratoryDescription() {
  return (
    <section className="lab-description-section">
      <h2>Precision, innovation, and integrity at the heart of our laboratory</h2>
      <p>
        Our Laboratory Department ensures the highest standards of testing and analysis
        through modern technologies and skilled professionals. We serve as a center for scientific excellence and innovation.
      </p>
      <p>
        We conduct chemical, biological, and environmental analyses to ensure sustainable fisheries,
        safe aquaculture practices, and protection of marine resources. Our facilities are equipped with
        advanced instruments that meet international standards.
      </p>
      <p>
        Key partners include government ministries, research institutions, and international organizations.
        Together, we guarantee reliable, accurate, and impactful laboratory services that inform decision-making and policy development.
      </p>
      <hr />
    </section>
  );
}

function LaboratoryProjects() {
  const projects = [
    {
      title: "Water Quality Monitoring",
      description:
        "Regular assessment of water quality in aquaculture systems and marine environments to ensure sustainability, fish health, and food safety.",
    },
    {
      title: "Marine Pathogen Detection",
      description:
        "A project aimed at early detection and prevention of marine and aquaculture-related diseases through advanced laboratory diagnostics.",
    },
    {
      title: "Food Safety and Quality",
      description:
        "Laboratory analysis of fisheries and aquaculture products to ensure compliance with international food safety standards and market requirements.",
    },
  ];
  return (
    <section className="projects-section-lab">
      <h2>Our Division</h2>
      
      <div className="projects-grid-lab">
        {projects.map((p, i) => (
          <div className="project-card-lab" key={i}>
            <h3>{p.title}</h3>
            <p>{p.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function LaboratoryInfo() {
  return (
    <section className="lab-info-section">
      <div className="lab-image">
        <img src={researchImage} alt="Laboratory Department" />
      </div>
      <div className="lab-content">
        <h2>Excellence in Laboratory Services</h2>
        <p> The Laboratory Department plays a central role in supporting scientific research, innovation,
          and evidence-based decision-making through accurate and reliable testing services.
        </p>
        <p> Our laboratory staff collaborates with national agencies and global partners to conduct high-impact
          analyses that support fisheries, aquaculture, marine conservation, and food security.
        </p>
        <a href="#" className="lab-btn">
          Learn More →
        </a>
      </div>
    </section>
  );
}

function LaboratoryRecommendations() {
  return (
    <div className="lab-container">
      <div className="lab-text">
        <h2>Laboratory Reports</h2>
        <div className="underline" />
        <p>
          Access our laboratory publications, technical briefs, and reports generated from ongoing analyses.
          These documents guide stakeholders, policymakers, and researchers with evidence-based data.
        </p>
        <a href="" className="lab-button">
          Access laboratory Reports 
        </a>
      </div>
      <div className="lab-image-container">
        <img src={researchPapers} alt="Laboratory reports" />
      </div>
    </div>
  );
}

function PromoSection() {
  return (
    <section className="promo-lab-section">
      <div className="promo-lab-container">
        <div className="promo-lab-content">
          <h2>
            Our <span className="promo-lab-highlight">Strategies</span> in Laboratory Services
          </h2>
          <ul>
            <li>Adopt cutting-edge laboratory technologies</li>
            <li>Ensure compliance with global testing standards</li>
            <li>Provide timely and reliable laboratory results</li>
            <li>Support fisheries, aquaculture, and marine conservation</li>
          </ul>
        </div>
        <div className="promo-lab-image">
          <img src={promoImage} alt="Laboratory strategies" />
        </div>
      </div>
    </section>
  );
}


function MedicalTeam() {
  return (
    <section className="lab-team">
      <h2>Our Experts</h2>
      <h3>Meet Our Laboratory Specialists
      </h3>
      <p>
        Our skilled team of laboratory professionals and scientists ensure high standards of accuracy,
        innovation, and service delivery.
      </p>
      <div className="lab-doctors-grid">
        {[doctor1, doctor2, doctor3, doctor4].map((doc, i) => (
          <div className="lab-doctor-card" key={i}>
            <img src={doc} alt={`Specialist ${i + 1}`} />
            <h4>Specialist {i + 1}</h4>
            <p>Laboratory Science</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function LaboratoryDepartment() {
  return (
    <>
      <LaboratoryHero />
      <LaboratoryDescription />
      <LaboratoryProjects />
      <LaboratoryInfo />
      <LaboratoryRecommendations />
      <PromoSection />
      <MedicalTeam />
    </>
  );
}
