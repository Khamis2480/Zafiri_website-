import React from "react";
import "./CoastalPollution.css";

export default function CoastalPollution() {
  return (
    <main className="pollution-wrapper">
      {/* Title */}
      <h1 className="pollution-title">Coastal and Marine Pollution</h1>

      {/* Introduction */}
      <section className="pollution-section">
        <h2>Overview</h2>
        <p>
          The <strong>Coastal and Marine Pollution Research</strong> program 
          focuses on identifying, monitoring, and mitigating pollutants that 
          threaten Zanzibar’s marine and coastal ecosystems. From plastic waste 
          to chemical contaminants, our research addresses critical challenges 
          affecting marine biodiversity and coastal livelihoods.
        </p>
      </section>

      {/* Key Themes */}
      <section className="pollution-section">
        <h2>What We Focus On</h2>
        <ul className="pollution-key-themes">
          <li>🗑️ Plastic and solid waste pollution in coastal zones.</li>
          <li>⚗️ Chemical pollutants from agriculture and industry.</li>
          <li>🚢 Oil spills and shipping-related pollution.</li>
          <li>🌊 Water quality monitoring and ecosystem impacts.</li>
          <li>🤝 Community awareness and waste management initiatives.</li>
        </ul>
      </section>

      {/* Why It Matters */}
      <section className="pollution-section">
        <h2>Why It Matters</h2>
        <p>
          Pollution threatens marine biodiversity, fisheries, and human health. 
          Addressing pollution challenges is vital for sustaining Zanzibar’s 
          blue economy, safeguarding food security, and protecting coastal 
          communities that depend on marine resources.
        </p>
      </section>

      {/* Featured Projects */}
      <section className="pollution-section">
        <h2>Featured Projects</h2>
        <div className="pollution-projects-grid">
          <div className="pollution-project-card">
            <h3>Plastic-Free Coastlines</h3>
            <p>
              A community initiative reducing single-use plastics and promoting 
              waste recycling along Zanzibar’s beaches.
            </p>
          </div>
          <div className="pollution-project-card">
            <h3>Water Quality Monitoring</h3>
            <p>
              Regular testing of coastal waters to detect pollutants and 
              protect marine biodiversity.
            </p>
          </div>
          <div className="pollution-project-card">
            <h3>Oil Spill Preparedness</h3>
            <p>
              Building capacity for emergency response to oil spill risks in 
              Zanzibar’s busy shipping lanes.
            </p>
          </div>
        </div>
      </section>

      {/* Partnerships */}
      <section className="pollution-section">
        <h2>Partnerships & Collaborations</h2>
        <p>
          We collaborate with environmental NGOs, government agencies, 
          universities, and international organizations to tackle pollution 
          challenges and promote sustainable solutions.
        </p>
      </section>

      {/* Call to Action */}
      <div className="pollution-buttons">
        <a href="/contact" className="pollution-contact-btn">
          Contact Our Experts 
        </a>
        <a href="/area" className="pollution-back-btn">
          Back to Research Areas 
        </a>
      </div>
    </main>
  );
}
