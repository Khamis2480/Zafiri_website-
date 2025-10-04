import React from "react";
import { Link } from "react-router-dom";
import "./FishFarmingProcessing.css";

export default function FishFarmingProcessing() {
  return (
    <main className="ffp-wrapper">
      {/* Title */}
      <h1 className="ffp-title">Fish Farming and Processing Technologies</h1>

      {/* Overview */}
      <section className="ffp-section">
        <h2>Overview</h2>
        <p>
          Fish farming and processing technologies are at the core of 
          <strong> sustainable aquaculture and fisheries development</strong>. 
          At ZAFIRI, we focus on improving farming systems, harvesting techniques, 
          storage, and value addition to ensure food security, quality, and 
          economic growth in Zanzibar and beyond.
        </p>
      </section>

      {/* Key Themes */}
      <section className="ffp-section">
        <h2>What We Focus On</h2>
        <ul>
          <li>🐟 Innovative fish farming techniques for increased productivity.</li>
          <li>⚙️ Modern processing and preservation technologies.</li>
          <li>❄️ Cold chain systems to maintain fish quality and safety.</li>
          <li>📦 Value addition and product diversification.</li>
          <li>📊 Market access and distribution innovations.</li>
        </ul>
      </section>

      {/* Why It Matters */}
      <section className="ffp-section">
        <h2>Why It Matters</h2>
        <p>
          Improving fish farming and processing technologies helps reduce 
          post-harvest losses, enhances food security, and supports the 
          <strong>Blue Economy</strong>. It provides local communities with 
          sustainable livelihoods and boosts Zanzibar’s role in regional and 
          international seafood markets.
        </p>
      </section>

      {/* Featured Projects */}
      <section className="ffp-section">
        <h2>Featured Projects</h2>
        <div className="ffp-projects">
          <div className="ffp-project-card">
            <h3>Eco-Friendly Fish Farms</h3>
            <p>
              Establishing sustainable aquaculture systems with low 
              environmental impact while improving productivity.
            </p>
          </div>
          <div className="ffp-project-card">
            <h3>Cold Chain Infrastructure</h3>
            <p>
              Developing efficient cold storage and transport systems 
              to reduce fish spoilage and losses.
            </p>
          </div>
          <div className="ffp-project-card">
            <h3>Value-Added Fish Products</h3>
            <p>
              Promoting fish processing into fillets, dried fish, and 
              ready-to-cook products to improve market access.
            </p>
          </div>
        </div>
      </section>

      {/* Partnerships */}
      <section className="ffp-section">
        <h2>Partnerships & Collaborations</h2>
        <p>
          We collaborate with fisheries industries, universities, and 
          development partners to improve technology adoption, 
          processing efficiency, and training for local communities.
        </p>
      </section>

      {/* Call to Action */}
      <div className="ffp-buttons">
        <Link to="/contact" className="ffp-btn ffp-contact">
          Contact Our Experts →
        </Link>
        <Link to="/area" className="ffp-btn ffp-back">
          ← Back to Research Areas
        </Link>
      </div>
    </main>
  );
}
