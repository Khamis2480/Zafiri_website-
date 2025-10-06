import React from "react";
import "./Oceanography.css";

export default function Oceanography() {
  return (
    <main className="ocean-wrapper">
      {/* Title */}
      <h1 className="ocean-title">Oceanography</h1>

      {/* Introduction */}
      <section className="ocean-section">
        <h2>Overview</h2>
        <p>
          The <strong>Oceanography Research</strong> program at ZAFIRI explores
          the physical, chemical, and biological processes of the ocean and
          their influence on marine life and human activities. This research
          helps predict changes in the marine environment and supports
          sustainable resource management.
        </p>
      </section>

      {/* Key Themes */}
      <section className="ocean-section">
        <h2>What We Focus On</h2>
        <ul className="ocean-key-themes">
          <li>🌊 Ocean circulation, currents, and tides.</li>
          <li>🌡️ Impacts of ocean warming and acidification.</li>
          <li>🌍 Interaction between climate change and marine systems.</li>
          <li>🧪 Monitoring chemical composition of seawater.</li>
          <li>🐠 Influence of oceanographic changes on fish stocks.</li>
        </ul>
      </section>

      {/* Why It Matters */}
      <section className="ocean-section">
        <h2>Why It Matters</h2>
        <p>
          Oceanography provides critical insights into the health of marine
          ecosystems and their role in regulating climate. For Zanzibar,
          understanding ocean dynamics is key to sustaining fisheries,
          protecting coastlines, and supporting the blue economy.
        </p>
      </section>

      {/* Featured Projects */}
      <section className="ocean-section">
        <h2>Featured Projects</h2>
        <div className="ocean-projects-grid">
          <div className="ocean-project-card">
            <h3>Indian Ocean Current Mapping</h3>
            <p>
              A project to track ocean currents and their impact on fisheries
              productivity in Zanzibar waters.
            </p>
          </div>
          <div className="ocean-project-card">
            <h3>Seawater Quality Monitoring</h3>
            <p>
              Continuous monitoring of chemical and biological parameters to
              assess the health of marine ecosystems.
            </p>
          </div>
          <div className="ocean-project-card">
            <h3>Climate-Ocean Interaction Study</h3>
            <p>
              Researching how climate variability influences local ocean
              processes and coastal resilience.
            </p>
          </div>
        </div>
      </section>

      {/* Partnerships */}
      <section className="ocean-section">
        <h2>Partnerships & Collaborations</h2>
        <p>
          We collaborate with global oceanographic institutions, universities,
          and regional marine programs to expand knowledge and build local
          capacity in ocean science.
        </p>
      </section>

      {/* Call to Action */}
      <div className="ocean-buttons">
        <a href="/contact" className="ocean-contact-btn">
          Contact Our Experts 
        </a>
        <a href="/area" className="ocean-back-btn">
          Back to Research Areas 
        </a>
      </div>
    </main>
  );
}
