import React from "react";
import "./Consultancy.css";

export default function Consultancy() {
  return (
    <main className="consultancy-wrapper">
      {/* Title */}
      <h1 className="consultancy-title">Consultancy Services</h1>

      {/* What is Consultancy */}
      <section className="consultancy-section">
        <h2>What is Our Consultancy Service?</h2>
        <p>
          At <strong>ZAFIRI</strong>, we provide expert <strong>consultancy services</strong> 
          to support sustainable fisheries, aquaculture, and marine resource management. 
          Our consultancy connects science with practice, delivering innovative solutions 
          for governments, NGOs, businesses, and communities.
        </p>
      </section>

      {/* What We Offer */}
      <section className="consultancy-section">
        <h2>What We Offer</h2>
        <ul>
          <li>Policy and strategy advisory for fisheries and marine management.</li>
          <li>Feasibility studies and project design for aquaculture and coastal development.</li>
          <li>Capacity building workshops and hands-on technical training.</li>
          <li>Environmental impact assessments and sustainability planning.</li>
          <li>Evidence-based recommendations tailored to client needs.</li>
        </ul>
      </section>

      {/* Why Choose Our Consultancy */}
      <section className="consultancy-section">
        <h2>Why Choose Our Consultancy?</h2>
        <ul>
          <li>✅ Experienced consultants with local and international expertise.</li>
          <li>✅ Solutions tailored to fisheries and marine industry challenges.</li>
          <li>✅ Strong partnerships with government, NGOs, and private sector.</li>
          <li>✅ Focus on sustainability, innovation, and practical impact.</li>
        </ul>
      </section>

      {/* Button */}
      <div className="consultancy-buttons">
        <a href="/contact" className="contact-btn">
          Contact Our Team 
        </a>
      </div>
    </main>
  );
}
