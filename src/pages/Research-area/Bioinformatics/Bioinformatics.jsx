import React from "react";
import { Link } from "react-router-dom";
import "./Bioinformatics.css";

export default function Bioinformatics() {
  return (
    <main className="bio-wrapper">
      {/* Title */}
      <h1 className="bio-title">Bioinformatics in Fisheries and Aquatic Sciences</h1>

      {/* Overview */}
      <section className="bio-section">
        <h2>Overview</h2>
        <p>
          Bioinformatics combines <strong>biology, computer science, and statistics</strong> 
          to analyze and interpret large sets of biological data. At ZAFIRI, 
          we apply bioinformatics to study fish genetics, marine biodiversity, 
          and molecular data that support sustainable aquaculture and 
          conservation practices.
        </p>
      </section>

      {/* Key Themes */}
      <section className="bio-section">
        <h2>What We Focus On</h2>
        <ul>
          <li>🧬 Genome sequencing of aquatic species.</li>
          <li>💻 Data analysis for population genetics and biodiversity.</li>
          <li>🔬 Molecular markers for disease diagnosis and breeding.</li>
          <li>📊 Computational modeling for fisheries and aquaculture.</li>
        </ul>
      </section>

      {/* Why It Matters */}
      <section className="bio-section">
        <h2>Why It Matters</h2>
        <p>
          Bioinformatics provides critical insights into the genetic diversity of 
          fish populations, helping improve aquaculture breeding, detect diseases, 
          and conserve endangered marine species. It bridges traditional fisheries 
          science with cutting-edge molecular technology.
        </p>
      </section>

      {/* Featured Projects */}
      <section className="bio-section">
        <h2>Featured Projects</h2>
        <div className="bio-projects">
          <div className="bio-project-card">
            <h3>Fish Genome Mapping</h3>
            <p>
              Genetic sequencing of key fish species to support selective breeding 
              and biodiversity management.
            </p>
          </div>
          <div className="bio-project-card">
            <h3>Pathogen DNA Analysis</h3>
            <p>
              Using molecular techniques to identify fish pathogens and improve 
              disease management in aquaculture.
            </p>
          </div>
          <div className="bio-project-card">
            <h3>Marine Biodiversity Database</h3>
            <p>
              Developing digital resources to document and analyze marine species 
              in Zanzibar waters.
            </p>
          </div>
        </div>
      </section>

      {/* Partnerships */}
      <section className="bio-section">
        <h2>Partnerships & Collaborations</h2>
        <p>
          We work with universities, biotechnology institutes, and international 
          organizations to strengthen bioinformatics capacity in marine and 
          fisheries sciences.
        </p>
      </section>

      {/* Call to Action */}
      <div className="bio-buttons">
        <Link to="/contact" className="bio-btn bio-contact">
          Contact Our Experts →
        </Link>
        <Link to="/area" className="bio-btn bio-back">
          ← Back to Research Areas
        </Link>
      </div>
    </main>
  );
}
