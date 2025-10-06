import React from "react";
import "./ResearchServices.css";

export default function ResearchServices() {
  return (
    <main className="research-services-wrapper">
      {/* Title */}
      <h1 className="research-services-title">Research Services</h1>

      {/* What is Our Research Service */}
      <section className="research-services-section">
        <h2>What is Our Research Service</h2>
        <p>
          ZAFIRI is committed to advancing{" "}
          <strong>fisheries, aquaculture, and marine science research</strong> 
          to support sustainable resource management in Zanzibar and beyond. 
          Our research services provide evidence-based solutions for government, 
          communities, and international stakeholders.
        </p>
      </section>

      {/* What We Offer */}
      <section className="research-services-section">
        <h2>What We Offer</h2>
        <ul>
          <li>🌊 Fisheries & Aquaculture Research – enhancing food security and livelihoods.</li>
          <li>🐠 Marine Biodiversity & Conservation – protecting fragile ecosystems.</li>
          <li>🌍 Oceanographic & Climate Change Studies – understanding global and local impacts.</li>
          <li>👥 Socio-Economic & Policy Research – supporting community development.</li>
          <li>⚙️ Technology & Innovation – applying new methods in marine sciences.</li>
        </ul>
      </section>

      {/* Why Choose Our Research */}
      <section className="research-services-section">
        <h2>Why Choose Our Research?</h2>
        <ul>
          <li>✅ Cutting-edge research facilities and modern research vessel.</li>
          <li>✅ Evidence-based recommendations trusted by policymakers.</li>
          <li>✅ Strong partnerships with international organizations.</li>
          <li>✅ Commitment to sustainability and marine innovation.</li>
        </ul>
      </section>

      {/* Featured Projects */}
      <section className="research-services-section">
        <h2>Featured Research Projects</h2>
        <div className="research-services-projects-grid">
          <div className="research-services-project-card">
            <h3>Coral Reef Restoration</h3>
            <p>
              A community-driven project restoring degraded coral reefs in Zanzibar’s coastal waters.
            </p>
          </div>
          <div className="research-services-project-card">
            <h3>Climate & Fisheries Study</h3>
            <p>
              Researching the impact of climate change on fisheries production and food security.
            </p>
          </div>
          <div className="research-services-project-card">
            <h3>Blue Economy & Livelihoods</h3>
            <p>
              Supporting coastal communities through sustainable aquaculture and eco-tourism research.
            </p>
          </div>
        </div>
      </section>

      {/* Buttons */}
      <div className="research-services-buttons">
        <a href="/area" className="research-services-explore-btn">
          Explore Research Areas →
        </a>
        <a href="/contact" className="research-services-contact-btn">
          Contact Research Team →
        </a>
      </div>
    </main>
  );
}
