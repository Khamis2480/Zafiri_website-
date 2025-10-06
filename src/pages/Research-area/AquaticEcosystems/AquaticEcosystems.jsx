import React from "react";
import { Link } from "react-router-dom";
import "./AquaticEcosystems.css";

export default function AquaticEcosystems() {
  return (
    <main className="aeb-wrapper">
      {/* Title */}
      <h1 className="aeb-title">Aquatic Ecosystems and Biodiversity</h1>

      {/* Overview */}
      <section className="aeb-section">
        <h2>Overview</h2>
        <p>
          <strong>Aquatic ecosystems and biodiversity</strong> form the foundation of healthy oceans, rivers, and coastal zones. 
          At ZAFIRI, we conduct research to conserve marine habitats, protect endangered species, and 
          maintain ecological balance that sustains fisheries and local communities. 
        </p>
      </section>

      {/* Key Themes */}
      <section className="aeb-section">
        <h2>What We Focus On</h2>
        <ul>
          <li>🐠 Marine species diversity and population monitoring.</li>
          <li>🌿 Conservation of coral reefs, mangroves, and seagrass beds.</li>
          <li>🦀 Protecting endangered and vulnerable aquatic species.</li>
          <li>📊 Ecosystem-based management strategies.</li>
          <li>🌍 Sustainable use of aquatic biodiversity for livelihoods.</li>
        </ul>
      </section>

      {/* Why It Matters */}
      <section className="aeb-section">
        <h2>Why It Matters</h2>
        <p>
          Biodiversity underpins the <strong>Blue Economy</strong>, providing food, income, 
          climate resilience, and cultural heritage for Zanzibar and the world. 
          Conserving aquatic ecosystems ensures sustainable fisheries, thriving tourism, and 
          protection against climate change impacts such as rising seas and coral bleaching.
        </p>
      </section>

      {/* Featured Projects */}
      <section className="aeb-section">
        <h2>Featured Projects</h2>
        <div className="aeb-projects">
          <div className="aeb-project-card">
            <h3>Coral Reef Restoration</h3>
            <p>
              Reviving degraded reef ecosystems by transplanting corals and reducing human pressures.
            </p>
          </div>
          <div className="aeb-project-card">
            <h3>Mangrove Reforestation</h3>
            <p>
              Community-based restoration of mangroves to protect coastlines and enhance fish nursery habitats.
            </p>
          </div>
          <div className="aeb-project-card">
            <h3>Seagrass Monitoring</h3>
            <p>
              Long-term studies to assess the role of seagrass beds in carbon storage and biodiversity support.
            </p>
          </div>
        </div>
      </section>

      {/* Partnerships */}
      <section className="aeb-section">
        <h2>Partnerships & Collaborations</h2>
        <p>
          ZAFIRI works with universities, conservation NGOs, fishing communities, and 
          international bodies (such as UNEP and FAO) to strengthen marine biodiversity 
          research and conservation strategies.
        </p>
      </section>

      {/* Call to Action */}
      <div className="aeb-buttons">
        <Link to="/publication" className="aeb-btn aeb-publications">
          Explore Publications 
        </Link>
        <Link to="/area" className="aeb-btn aeb-back">
           Back to Research Areas
        </Link>
      </div>
    </main>
  );
}
