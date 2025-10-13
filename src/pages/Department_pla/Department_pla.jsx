import React from "react";
import "./Department_pla.css";
import heroImage from "../../assets/laboratory/hrm.jpg";
import promoImage from "../../assets/laboratory/strategic.webp";

import doctor1 from "../../assets/event/event1.JPG";
import researchImage from "../../assets/laboratory/respu.jpg";
import researchPapers from "../../assets/laboratory/Chart.jpg";

function HRAPHero() {
  return (
    <section
      className="hero-research"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="overlay-research-pla"></div>
      <div className="hero-research-content">
        <h1>Department of Human Resource, Administration & Planning</h1>
        <p>
          The HRAP Department ensures efficient organizational management by
          focusing on workforce development, institutional administration, and
          strategic planning to achieve ZAFIRI’s vision and mission.
        </p>
      </div>
    </section>
  );
}

function HRAPDescription() {
  return (
    <section className="research-description-section">
      <h2>Leadership, efficiency, and strategy at the core of our department</h2>
      <p>
        Our HRAP Department oversees human capital management, administrative
        functions, and strategic planning to strengthen organizational
        performance and service delivery.
      </p>
      <p>
        We develop policies, manage staff recruitment and welfare, and ensure
        that planning processes align with institutional goals and national
        development priorities.
      </p>
      <p>
        Through collaboration with government ministries, stakeholders, and
        development partners, we ensure effective human resource development,
        administrative systems, and long-term planning.
      </p>
      <hr />
    </section>
  );
}

function HRAPProjects() {
  const projects = [
    {
      title: "Division of Human Resourse and Administration",
      description:
        "The Division of Human Resources and Administration is responsible for managing staff welfare, discipline, and workplace safety, while also overseeing institutional administration.",
    },
    {
      title: "Division of Planning and Statistic",
      description:
        "The Division of Planning and Statistics coordinates institutional planning, budgeting, statistical activities, and the evaluation and monitoring of institutional performance.",
    },
    {
      title: "Division of Records Managment",
      description:
        "The division of Records Management is responsible for preserving and managing all institutional records, maintaining archives, and handling record requests from staff and government institutions.",
    },
  ];

  return (
    <section className="projects-section">
      <h2>Our Division</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function HRAPInfo() {
  return (
    <section className="research-info">
      <div className="research-image">
        <img src={researchPapers} alt="HRAP Department" />
      </div>

      <div className="research-content">
        <h2>Driving Excellence in Human Resource and Planning</h2>
        <p>
          The HRAP Department provides leadership in human capital management,
          administration, and institutional planning, ensuring efficiency and
          organizational success.
        </p>
        <p>
          Our team works with government agencies and international partners to
          develop robust administrative systems and sustainable workforce
          strategies.
        </p>
        <a
          href="#"
          className="research-btn"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn More →
        </a>
      </div>
    </section>
  );
}

function HRAPRecommendations() {
  return (
    <div className="research-container">
      <div className="research-text">
        <h2>Policies and Reports</h2>
        <div className="underline" />
        <p>
          Explore our policies, administrative guidelines, and strategic
          planning reports that shape institutional performance and future
          direction.
        </p>
        <a
          href=""
          target="_blank"
          rel="noopener noreferrer"
          className="research-button"
        >
          Access our HRAP resources  
        </a>
      </div>
      <div className="research-image-container">
        <img src={researchImage} alt="HRAP reports" />
      </div>
    </div>
  );
}

function PromoSection() {
  return (
    <section className="promo-section">
      <div className="promo-container">
        <div className="promo-content">
          <h2>
            Our <span className="highlight">Strategies</span> for HRAP Services
          </h2>
          <ul>
            <li>Promote continuous staff development and training</li>
            <li>Strengthen administrative efficiency and transparency</li>
            <li>Develop long-term institutional strategic plans</li>
            <li>Foster employee engagement and workplace harmony</li>
          </ul>
        </div>
        <div className="promo-image">
          <img src={promoImage} alt="HRAP strategies" />
        </div>
      </div>
    </section>
  );
}

function HRAPValues() {
  return (
    <div className="hr-values-container">
      <div className="hr-values-text">
        <h2>HR Values</h2>

        <div className="value-item">
          <span className="icon">➤</span>
          <div>
            <h3>PEOPLE FIRST</h3>
            <p>
              People are at the heart of all we do. We create an environment
              where all employees feel safe, engaged, and valued.
            </p>
          </div>
        </div>

        <div className="value-item">
          <span className="icon">➤</span>
          <div>
            <h3>PARTNERSHIP</h3>
            <p>
              We collaborate with internal and external stakeholders to achieve
              organizational goals and ensure employee success.
            </p>
          </div>
        </div>

        <div className="value-item">
          <span className="icon">➤</span>
          <div>
            <h3>INTEGRITY</h3>
            <p>
              We uphold transparency, honesty, and accountability in all our
              work and actions.
            </p>
          </div>
        </div>

        <div className="value-item">
          <span className="icon">➤</span>
          <div>
            <h3>INNOVATION</h3>
            <p>
              We promote continuous improvement and innovative thinking to
              develop people, processes, and organizational excellence.
            </p>
          </div>
        </div>
      </div>

    
    </div>
  );
}

function HRAPTeam() {
  return (
    <section className="medical-team">
      <div className="container">
        <div className="section-header">
          <h2>Our Experts</h2>
          <h3>Meet Our Human Resource Manager</h3>
          <p>
            Our dedicated professional brings expertise in human resource
            management, administration, and strategic planning to strengthen
            institutional performance.
          </p>
        </div>

        <div className="doctors-grid">
          <div className="doctor-card">
            <div className="doctor-image">
              <img src={doctor1} alt="Specialist" />
            </div>
            <div className="doctor-info">
              <h4>Specialist Name</h4>
              <p>HR & Administration</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Planning() {
  return (
    <>
      <HRAPHero />
      <HRAPDescription />
      <HRAPProjects />
      <HRAPInfo />
      <HRAPRecommendations />
      <PromoSection />
      <HRAPValues />
      <HRAPTeam />
    </>
  );
}
