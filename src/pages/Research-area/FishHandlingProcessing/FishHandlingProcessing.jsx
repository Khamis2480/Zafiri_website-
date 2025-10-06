import React from "react";
import { Link } from "react-router-dom";
import "./FishHandlingProcessing.css";

export default function FishHandlingProcessing() {
  return (
    <main className="fhsp-wrapper">
      {/* Title */}
      <h1 className="fhsp-title">
        Fish Handling, Storage, Processing, Marketing & Distribution Facilities
      </h1>

      {/* Overview */}
      <section className="fhsp-section">
        <h2>Overview</h2>
        <p>
          The <strong>Fish Handling, Storage, Processing, Marketing and Distribution</strong> research area focuses
          on improving post-harvest practices to minimize losses, maintain quality, and enhance value
          addition in fisheries products. ZAFIRI supports innovation in preservation, cold chain systems,
          and market development for both local and international trade.
        </p>
      </section>

      {/* Key Themes */}
      <section className="fhsp-section">
        <h2>What We Focus On</h2>
        <ul>
          <li>🧊 Development of cold storage and freezing technologies.</li>
          <li>🏭 Processing and packaging innovations for high-value products.</li>
          <li>🚚 Efficient fish distribution and transportation systems.</li>
          <li>💰 Market research and promotion for local fish products.</li>
          <li>♻️ Sustainable post-harvest handling to reduce waste and ensure food safety.</li>
        </ul>
      </section>

      {/* Why It Matters */}
      <section className="fhsp-section">
        <h2>Why It Matters</h2>
        <p>
          Effective handling, processing, and marketing are essential for the <strong>Blue Economy</strong> of Zanzibar.
          By reducing post-harvest losses and improving market systems, we empower local fishers, enhance food safety,
          and increase income opportunities across coastal communities.
        </p>
      </section>

      {/* Featured Projects */}
      <section className="fhsp-section">
        <h2>Featured Projects</h2>
        <div className="fhsp-projects">
          <div className="fhsp-project-card">
            <h3>Fish Cold Chain Improvement Project</h3>
            <p>
              Establishing community-based cold storage and transport facilities to preserve catch quality.
            </p>
          </div>
          <div className="fhsp-project-card">
            <h3>Value Addition and Processing Initiative</h3>
            <p>
              Training small-scale fish processors in packaging, branding, and hygiene standards.
            </p>
          </div>
          <div className="fhsp-project-card">
            <h3>Fisheries Market Linkages Study</h3>
            <p>
              Identifying new market opportunities for Zanzibar’s fish products regionally and internationally.
            </p>
          </div>
        </div>
      </section>

      {/* Partnerships */}
      <section className="fhsp-section">
        <h2>Partnerships & Collaborations</h2>
        <p>
          ZAFIRI collaborates with <strong>FAO, WIOMSA, Zanzibar Ministry of Blue Economy,</strong> and various private sector 
          partners to develop efficient, sustainable fish handling and marketing systems.
        </p>
      </section>

      {/* Buttons */}
      <div className="fhsp-buttons">
        <Link to="/contact" className="fhsp-btn fhsp-contact">
          Contact Our Experts 
        </Link>
        <Link to="/area" className="fhsp-btn fhsp-back">
           Back to Research Areas
        </Link>
      </div>
    </main>
  );
}
