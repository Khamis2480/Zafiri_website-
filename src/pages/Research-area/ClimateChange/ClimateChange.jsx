import React from "react";
import "./ClimateChange.css";

export default function ClimateChange() {
  return (
    <main className="climate-wrapper">
      {/* Title */}
      <h1 className="climate-title">Climate Change and Environment</h1>

      {/* Introduction */}
      <section className="climate-section">
        <h2>Overview</h2>
        <p>
          The <strong>Climate Change and Environment Research</strong> program 
          at ZAFIRI examines the impacts of global warming, ocean acidification, 
          and changing ecosystems on marine life and coastal communities. Our goal 
          is to develop adaptation and mitigation strategies that safeguard both 
          biodiversity and livelihoods.
        </p>
      </section>

      {/* Key Themes */}
      <section className="climate-section">
        <h2>What We Focus On</h2>
        <ul className="climate-key-themes">
          <li>🌍 Ocean warming and acidification.</li>
          <li>🐠 Impacts of climate change on fish stocks and biodiversity.</li>
          <li>🏝️ Coastal erosion and community adaptation.</li>
          <li>🌱 Sustainable resource management practices.</li>
          <li>📊 Policy research for climate resilience in Zanzibar.</li>
        </ul>
      </section>

      {/* Why It Matters */}
      <section className="climate-section">
        <h2>Why It Matters</h2>
        <p>
          Climate change directly affects Zanzibar’s fisheries, food security, 
          and coastal livelihoods. By understanding these impacts, we can design 
          strategies that protect ecosystems, strengthen resilience, and support 
          the sustainability of the blue economy.
        </p>
      </section>

      {/* Featured Projects */}
      <section className="climate-section">
        <h2>Featured Projects</h2>
        <div className="climate-projects-grid">
          <div className="climate-project-card">
            <h3>Coastal Resilience Program</h3>
            <p>
              Working with local communities to build natural defenses against 
              sea-level rise and erosion.
            </p>
          </div>
          <div className="climate-project-card">
            <h3>Climate-Fisheries Impact Study</h3>
            <p>
              Assessing how rising sea temperatures influence fish populations 
              and fishing livelihoods.
            </p>
          </div>
          <div className="climate-project-card">
            <h3>Blue Carbon Initiative</h3>
            <p>
              Research on mangroves and seagrasses as natural carbon sinks for 
              climate change mitigation.
            </p>
          </div>
        </div>
      </section>

      {/* Partnerships */}
      <section className="climate-section">
        <h2>Partnerships & Collaborations</h2>
        <p>
          We collaborate with global climate research networks, universities, 
          conservation organizations, and government agencies to strengthen 
          Zanzibar’s resilience to climate change.
        </p>
      </section>

      {/* Call to Action */}
      <div className="climate-buttons">
        <a href="/contact" className="climate-contact-btn">
          Contact Our Experts 
        </a>
        <a href="/area" className="climate-back-btn">
          Back to Research Areas 
        </a>
      </div>
    </main>
  );
}
