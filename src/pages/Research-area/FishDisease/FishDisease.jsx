import React from "react";
import "./FishDisease.css";

export default function FishDisease() {
  return (
    <main className="disease-wrapper">
      {/* Title */}
      <h1 className="disease-title">Fish Disease</h1>

      {/* Introduction */}
      <section className="disease-section">
        <h2>Overview</h2>
        <p>
          The <strong>Fish Disease Research</strong> program at ZAFIRI focuses on
          understanding fish pathogens, improving disease diagnostics, and
          developing sustainable management strategies to ensure the health of
          both wild and farmed fish populations.
        </p>
      </section>

      {/* Key Themes */}
      <section className="disease-section">
        <h2>What We Focus On</h2>
        <ul className="disease-key-themes">
          <li>🦠 Identification of fish pathogens (bacteria, viruses, parasites).</li>
          <li>🔬 Development of rapid diagnostic techniques.</li>
          <li>💊 Disease prevention and treatment methods.</li>
          <li>🌊 Health management in aquaculture systems.</li>
          <li>📈 Surveillance of emerging fish diseases in Zanzibar.</li>
        </ul>
      </section>

      {/* Why It Matters */}
      <section className="disease-section">
        <h2>Why It Matters</h2>
        <p>
          Fish health is vital for food security, aquaculture productivity, and
          ecosystem balance. Research on fish diseases protects livelihoods,
          ensures sustainable fisheries, and prevents economic losses for
          communities depending on aquatic resources.
        </p>
      </section>

      {/* Featured Projects */}
      <section className="disease-section">
        <h2>Featured Projects</h2>
        <div className="disease-projects-grid">
          <div className="disease-project-card">
            <h3>Tilapia Health Monitoring</h3>
            <p>
              Investigating common pathogens affecting tilapia farms and
              developing prevention strategies for small-scale farmers.
            </p>
          </div>
          <div className="disease-project-card">
            <h3>Marine Fish Pathogen Survey</h3>
            <p>
              A large-scale survey of pathogens in wild marine fish populations
              around Zanzibar.
            </p>
          </div>
          <div className="disease-project-card">
            <h3>Innovative Diagnostics</h3>
            <p>
              Developing affordable, rapid testing kits for early detection of
              fish diseases in aquaculture systems.
            </p>
          </div>
        </div>
      </section>

      {/* Partnerships */}
      <section className="disease-section">
        <h2>Partnerships & Collaborations</h2>
        <p>
          This program works closely with international universities, fisheries
          health institutes, and local communities to ensure sustainable
          aquaculture and fisheries management.
        </p>
      </section>

      {/* Call to Action */}
      <div className="disease-buttons">
        <a href="/contact" className="disease-contact-btn">
          Contact Our Experts 
        </a>
        <a href="/area" className="disease-back-btn">
          Back to Research Areas 
        </a>
      </div>
    </main>
  );
}
