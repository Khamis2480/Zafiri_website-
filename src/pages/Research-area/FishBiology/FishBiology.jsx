import React from "react";
import "./FishBiology.css";

export default function FishBiology() {
  return (
    <main className="bio-wrapper">
      {/* Title */}
      <h1 className="bio-title">Fish Biology</h1>

      {/* Introduction */}
      <section className="bio-section">
        <h2>Overview</h2>
        <p>
          <strong>Fish Biology</strong> research at ZAFIRI focuses on the
          physiology, genetics, reproduction, and behavior of fish species. This
          knowledge supports conservation, aquaculture, and sustainable fisheries
          management in Zanzibar and beyond.
        </p>
      </section>

      {/* Key Themes */}
      <section className="bio-section">
        <h2>What We Focus On</h2>
        <ul className="bio-key-themes">
          <li>🧬 Genetics and molecular biology of key fish species.</li>
          <li>🐟 Reproductive biology and life cycle studies.</li>
          <li>🔬 Fish physiology and adaptation to environments.</li>
          <li>📈 Population dynamics and species interactions.</li>
          <li>🌍 Conservation strategies for endangered species.</li>
        </ul>
      </section>

      {/* Why It Matters */}
      <section className="bio-section">
        <h2>Why It Matters</h2>
        <p>
          Understanding fish biology is crucial for managing fisheries resources,
          protecting biodiversity, and supporting aquaculture innovations. It
          helps Zanzibar preserve marine ecosystems while strengthening food
          security and livelihoods.
        </p>
      </section>

      {/* Featured Projects */}
      <section className="bio-section">
        <h2>Featured Projects</h2>
        <div className="bio-projects-grid">
          <div className="bio-project-card">
            <h3>Genetic Diversity of Local Fish</h3>
            <p>
              Studying the genetic makeup of Zanzibar’s native fish species to
              guide conservation and selective breeding programs.
            </p>
          </div>
          <div className="bio-project-card">
            <h3>Reproductive Biology of Tuna</h3>
            <p>
              Researching spawning patterns and reproductive strategies to
              support sustainable tuna fisheries.
            </p>
          </div>
          <div className="bio-project-card">
            <h3>Endangered Species Studies</h3>
            <p>
              Investigating the biology of endangered fish to develop effective
              protection and management strategies.
            </p>
          </div>
        </div>
      </section>

      {/* Partnerships */}
      <section className="bio-section">
        <h2>Partnerships & Collaborations</h2>
        <p>
          Our Fish Biology research is conducted in collaboration with
          universities, marine research institutes, and conservation NGOs
          working to preserve aquatic biodiversity.
        </p>
      </section>

      {/* Call to Action */}
      <div className="bio-buttons">
        <a href="/contact" className="bio-contact-btn">
          Contact Our Experts 
        </a>
        <a href="/area" className="bio-back-btn">
          Back to Research Areas 
        </a>
      </div>
    </main>
  );
}
