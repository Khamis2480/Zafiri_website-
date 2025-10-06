import React from "react";
import "./CaptureFishery.css";

export default function CaptureFishery() {
  return (
    <main className="capturefish-wrapper">
      {/* Title */}
      <h1 className="capturefish-title">Capture Fishery</h1>

      {/* Introduction */}
      <section className="capturefish-section">
        <h2>Overview</h2>
        <p>
          The <strong>Capture Fishery</strong> research area focuses on wild fish
          harvesting techniques, monitoring fishing practices, and assessing
          their ecological and socio-economic impacts. Our work aims to balance
          fishing livelihoods with the long-term sustainability of Zanzibar’s
          marine ecosystems.
        </p>
      </section>

      {/* Key Themes */}
      <section className="capturefish-section">
        <h2>What We Focus On</h2>
        <ul className="capturefish-key-themes">
          <li>🎣 Evaluating traditional and modern fishing techniques.</li>
          <li>🌊 Studying the impact of capture fisheries on marine ecosystems.</li>
          <li>⚖️ Developing policies for sustainable harvesting practices.</li>
          <li>👥 Supporting fisher communities through training and data sharing.</li>
        </ul>
      </section>

      {/* Why It Matters */}
      <section className="capturefish-section">
        <h2>Why It Matters</h2>
        <p>
          Capture fisheries provide food, jobs, and cultural heritage for
          Zanzibar’s coastal communities. Sustainable management ensures that
          fish stocks remain healthy, marine biodiversity is preserved, and
          future generations continue benefiting from marine resources.
        </p>
      </section>

      {/* Featured Projects */}
      <section className="capturefish-section">
        <h2>Featured Projects</h2>
        <div className="capturefish-projects-grid">
          <div className="capturefish-project-card">
            <h3>Artisanal Fishing Survey</h3>
            <p>
              Studying small-scale fishing communities to improve livelihoods and
              promote sustainable resource use.
            </p>
          </div>
          <div className="capturefish-project-card">
            <h3>Marine Ecosystem Impact Study</h3>
            <p>
              Assessing the effects of capture fisheries on coral reefs,
              seagrass beds, and key marine habitats.
            </p>
          </div>
        </div>
      </section>

      {/* Partnerships */}
      <section className="capturefish-section">
        <h2>Partnerships & Collaborations</h2>
        <p>
          This research area is carried out with collaboration from local fishing
          cooperatives, government fisheries departments, NGOs, and international
          partners including FAO and WWF.
        </p>
      </section>

      {/* Call to Action */}
      <div className="capturefish-buttons">
        <a href="/contact" className="capturefish-contact-btn">
          Contact Our Experts 
        </a>
        <a href="/area" className="capturefish-back-btn">
          Back to Research Areas 
        </a>
      </div>
    </main>
  );
}
