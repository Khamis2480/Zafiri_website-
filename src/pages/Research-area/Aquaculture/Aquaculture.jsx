import React from "react";
import "./Aquaculture.css";

export default function Aquaculture() {
  return (
    <main className="aqua-wrapper">
      {/* Title */}
      <h1 className="aqua-title">Aquaculture</h1>

      {/* Introduction */}
      <section className="aqua-section">
        <h2>Overview</h2>
        <p>
          <strong>Aquaculture</strong> research at ZAFIRI explores sustainable
          methods of cultivating aquatic species including fish, seaweed, and
          shellfish. Our work supports food security, community livelihoods, and
          the blue economy of Zanzibar.
        </p>
      </section>

      {/* Key Themes */}
      <section className="aqua-section">
        <h2>What We Focus On</h2>
        <ul className="aqua-key-themes">
          <li>🐟 Developing sustainable fish farming systems.</li>
          <li>🌿 Seaweed and shellfish aquaculture for livelihoods.</li>
          <li>🧬 Selective breeding and genetic improvement.</li>
          <li>🍽️ Nutrition, feed formulation, and health management.</li>
          <li>⚙️ Innovative aquaculture technologies and practices.</li>
        </ul>
      </section>

      {/* Why It Matters */}
      <section className="aqua-section">
        <h2>Why It Matters</h2>
        <p>
          Aquaculture provides a sustainable alternative to overfishing, helping
          preserve marine biodiversity while boosting local economies. In
          Zanzibar, it empowers coastal communities, especially women and youth,
          with income-generating opportunities.
        </p>
      </section>

      {/* Featured Projects */}
      <section className="aqua-section">
        <h2>Featured Projects</h2>
        <div className="aqua-projects-grid">
          <div className="aqua-project-card">
            <h3>Seaweed Mariculture</h3>
            <p>
              Promoting seaweed farming as a sustainable income source for
              coastal women in Zanzibar.
            </p>
          </div>
          <div className="aqua-project-card">
            <h3>Fish Hatchery Development</h3>
            <p>
              Establishing hatchery techniques to improve fish seed quality for
              aquaculture farmers.
            </p>
          </div>
          <div className="aqua-project-card">
            <h3>Sustainable Aquafeeds</h3>
            <p>
              Researching local feed alternatives to reduce costs and ensure
              eco-friendly aquaculture practices.
            </p>
          </div>
        </div>
      </section>

      {/* Partnerships */}
      <section className="aqua-section">
        <h2>Partnerships & Collaborations</h2>
        <p>
          Our aquaculture research is conducted with universities, international
          organizations like FAO, local farming groups, and private sector
          partners who invest in blue economy initiatives.
        </p>
      </section>

      {/* Call to Action */}
      <div className="aqua-buttons">
        <a href="/contact" className="aqua-contact-btn">
          Contact Our Experts 
        </a>
        <a href="/area" className="aqua-back-btn">
          Back to Research Areas 
        </a>
      </div>
    </main>
  );
}
