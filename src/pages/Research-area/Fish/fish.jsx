import React from "react";
import "./fish.css";

export default function FishStock() {
  return (
    <main className="fishstock-wrapper">
      {/* Title */}
      <h1 className="fishstock-title">Fish Catch and Stock Assessment</h1>

      {/* Introduction */}
      <section className="fishstock-section">
        <h2>Overview</h2>
        <p>
          Our <strong>Fish Catch and Stock Assessment</strong> research focuses on
          evaluating fish populations, monitoring catch data, and analyzing
          stock health. This work helps ensure sustainable fishing practices
          while supporting Zanzibar’s fisheries management and long-term food
          security.
        </p>
      </section>

      {/* Key Themes */}
      <section className="fishstock-section">
        <h2>What We Focus On</h2>
        <ul className="fishstock-key-themes">
          <li>🐟 Monitoring catch data across different fishing zones.</li>
          <li>📊 Stock assessment to determine fish population health.</li>
          <li>🌍 Evaluating ecosystem impacts on fish stocks.</li>
          <li>⚖️ Supporting policy and management strategies for sustainable fisheries.</li>
        </ul>
      </section>

      {/* Why It Matters */}
      <section className="fishstock-section">
        <h2>Why It Matters</h2>
        <p>
          Fish is the backbone of Zanzibar’s diet and economy. Reliable stock
          assessments guide sustainable fishing regulations, prevent overfishing,
          and protect the livelihoods of local communities while conserving
          marine ecosystems for future generations.
        </p>
      </section>

      {/* Featured Projects */}
      <section className="fishstock-section">
        <h2>Featured Projects</h2>
        <div className="fishstock-projects-grid">
          <div className="fishstock-project-card">
            <h3>Annual Fish Stock Survey</h3>
            <p>
              Comprehensive surveys across Zanzibar waters to analyze species
              abundance, diversity, and sustainability trends.
            </p>
          </div>
          <div className="fishstock-project-card">
            <h3>Community Catch Data Monitoring</h3>
            <p>
              Engaging local fishers in data collection to improve fisheries
              management and promote co-management strategies.
            </p>
          </div>
        </div>
      </section>

      {/* Partnerships */}
      <section className="fishstock-section">
        <h2>Partnerships & Collaborations</h2>
        <p>
          This research area is strengthened through collaboration with local
          fishing communities, the Department of Fisheries, universities, and
          international partners such as FAO and WorldFish.
        </p>
      </section>

      {/* Call to Action */}
      <div className="fishstock-buttons">
        <a href="/contact" className="fishstock-explore-btn">Contact Our Experts </a>
        <a href="/area" className="fishstock-contact-btn">Back to Research Areas </a>
      </div>
    </main>
  );
}
