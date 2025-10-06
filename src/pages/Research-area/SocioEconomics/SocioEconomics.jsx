import React from "react";
import { Link } from "react-router-dom";
import "./SocioEconomics.css";

export default function SocioEconomics() {
  return (
    <main className="socio-wrapper">
      {/* Title */}
      <h1 className="socio-title">Socio-economics of Fisheries and Aquaculture</h1>

      {/* Overview */}
      <section className="socio-section">
        <h2>Overview</h2>
        <p>
          The socio-economic dimension of fisheries and aquaculture focuses on 
          the well-being of fishing communities, market dynamics, livelihoods, 
          and policies that influence sustainable development. At ZAFIRI, 
          we assess how fisheries contribute to food security, poverty 
          reduction, and the blue economy in Zanzibar and beyond.
        </p>
      </section>

      {/* Key Themes */}
      <section className="socio-section">
        <h2>What We Focus On</h2>
        <ul>
          <li>📊 Economic valuation of fisheries and aquaculture.</li>
          <li>👥 Livelihoods and social resilience of fishing communities.</li>
          <li>🏝️ Policy analysis and governance for sustainable fisheries.</li>
          <li>🌍 Blue economy development and market linkages.</li>
        </ul>
      </section>

      {/* Why It Matters */}
      <section className="socio-section">
        <h2>Why It Matters</h2>
        <p>
          Understanding socio-economics helps ensure fisheries and aquaculture 
          are not only ecologically sustainable but also socially equitable. 
          This area is key to improving income, reducing poverty, and empowering 
          coastal communities in Zanzibar while strengthening national food security.
        </p>
      </section>

      {/* Featured Projects */}
      <section className="socio-section">
        <h2>Featured Projects</h2>
        <div className="socio-projects">
          <div className="socio-project-card">
            <h3>Fisherfolk Livelihoods Assessment</h3>
            <p>
              A study on how fishing households adapt to market fluctuations and 
              climate impacts on resources.
            </p>
          </div>
          <div className="socio-project-card">
            <h3>Blue Economy Value Chain Study</h3>
            <p>
              Research focused on identifying opportunities in aquaculture, 
              processing, and sustainable trade.
            </p>
          </div>
        </div>
      </section>

      {/* Partnerships */}
      <section className="socio-section">
        <h2>Partnerships & Collaborations</h2>
        <p>
          We collaborate with universities, government ministries, NGOs, and 
          local fishing associations to strengthen the socio-economic impact of 
          fisheries and aquaculture development.
        </p>
      </section>

      {/* Call to Action */}
      <div className="socio-buttons">
        <Link to="/contact" className="socio-btn socio-contact">
          Contact Our Experts 
        </Link>
        <Link to="/area" className="socio-btn socio-back">
           Back to Research Areas
        </Link>
      </div>
    </main>
  );
}
