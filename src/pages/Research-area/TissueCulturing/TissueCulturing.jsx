import React from "react";
import { Link } from "react-router-dom";
import "./TissueCulturing.css";

export default function TissueCulturing() {
  return (
    <main className="tissue-wrapper">
      {/* Title */}
      <h1 className="tissue-title">
        Tissue Culturing of Seaweed and Other Marine Cultured Species
      </h1>

      {/* Overview */}
      <section className="tissue-section">
        <h2>Overview</h2>
        <p>
          ZAFIRI’s <strong>Tissue Culturing Research</strong> focuses on developing sustainable and
          innovative techniques for seaweed and other marine organisms. Through biotechnology,
          we aim to enhance production, quality, and resilience of marine cultured species, supporting
          Zanzibar’s Blue Economy and global aquaculture sustainability.
        </p>
      </section>

      {/* What We Focus On */}
      <section className="tissue-section">
        <h2>What We Focus On</h2>
        <ul>
          <li>🧫 Developing tissue culture techniques for seaweed propagation.</li>
          <li>🌿 Enhancing growth rates and resilience to environmental stress.</li>
          <li>🧬 Applying biotechnology to improve marine species productivity.</li>
          <li>🏝️ Promoting sustainable mariculture practices and innovation.</li>
          <li>📈 Supporting economic empowerment for coastal seaweed farmers.</li>
        </ul>
      </section>

      {/* Why It Matters */}
      <section className="tissue-section">
        <h2>Why It Matters</h2>
        <p>
          Seaweed cultivation is one of Zanzibar’s key livelihood activities. By advancing tissue
          culture and biotechnology, we contribute to increased productivity, climate adaptation,
          and sustainable resource utilization — strengthening the Blue Economy and global marine innovation.
        </p>
      </section>

      {/* Featured Projects */}
      <section className="tissue-section">
        <h2>Featured Projects</h2>
        <div className="tissue-projects">
          <div className="tissue-project-card">
            <h3>Seaweed Biotechnology Initiative</h3>
            <p>
              Researching genetic improvement of seaweed for higher yield and disease resistance.
            </p>
          </div>
          <div className="tissue-project-card">
            <h3>Marine Cultured Species Innovation Project</h3>
            <p>
              Enhancing aquaculture practices through modern tissue culturing and biotechnology.
            </p>
          </div>
          <div className="tissue-project-card">
            <h3>Women in Seaweed Farming Program</h3>
            <p>
              Empowering women seaweed farmers through scientific training and improved cultivation techniques.
            </p>
          </div>
        </div>
      </section>

      {/* Partnerships */}
      <section className="tissue-section">
        <h2>Partnerships & Collaborations</h2>
        <p>
          We work with <strong>WIOMSA, FAO, local universities,</strong> and coastal communities to develop
          eco-friendly, high-tech approaches for seaweed and marine species cultivation.
        </p>
      </section>

      {/* Buttons */}
      <div className="tissue-buttons">
        <Link to="/contact" className="tissue-btn tissue-contact">
          Contact Our Experts →
        </Link>
        <Link to="/area" className="tissue-btn tissue-back">
          ← Back to Research Areas
        </Link>
      </div>
    </main>
  );
}
