import React from "react";
import { Link } from "react-router-dom";
import "./FishBreedingFeeding.css";

export default function FishBreedingFeeding() {
  return (
    <main className="fbf-wrapper">
      {/* Title */}
      <h1 className="fbf-title">Fish Breeding and Feeding</h1>

      {/* Overview */}
      <section className="fbf-section">
        <h2>Overview</h2>
        <p>
          The <strong>Fish Breeding and Feeding</strong> research area focuses on improving fish growth,
          survival, and productivity through selective breeding, nutrition optimization, and feed
          formulation. At ZAFIRI, our goal is to enhance aquaculture sustainability, reduce production
          costs, and support food security through scientifically guided breeding and feeding practices.
        </p>
      </section>

      {/* Key Themes */}
      <section className="fbf-section">
        <h2>What We Focus On</h2>
        <ul>
          <li>🐟 Selective breeding for fast-growing and disease-resistant fish species.</li>
          <li>🍽️ Development of affordable and eco-friendly feed formulations.</li>
          <li>🧬 Genetic improvement and broodstock management.</li>
          <li>🌱 Exploring alternative protein sources in fish diets.</li>
          <li>🔬 Monitoring nutritional value and feed efficiency performance.</li>
        </ul>
      </section>

      {/* Why It Matters */}
      <section className="fbf-section">
        <h2>Why It Matters</h2>
        <p>
          Fish breeding and feeding are key pillars of <strong>sustainable aquaculture</strong>. 
          By enhancing growth efficiency and feed conversion, we help local farmers increase 
          productivity while protecting marine environments. This contributes to Zanzibar’s 
          <strong>Blue Economy</strong> and supports long-term food and livelihood security.
        </p>
      </section>

      {/* Featured Projects */}
      <section className="fbf-section">
        <h2>Featured Projects</h2>
        <div className="fbf-projects">
          <div className="fbf-project-card">
            <h3>Tilapia Selective Breeding Program</h3>
            <p>
              Developing improved tilapia strains for higher growth and resistance to local diseases.
            </p>
          </div>
          <div className="fbf-project-card">
            <h3>Seaweed-based Feed Initiative</h3>
            <p>
              Innovating eco-friendly fish feeds using local seaweed and plant proteins.
            </p>
          </div>
          <div className="fbf-project-card">
            <h3>Broodstock Management Training</h3>
            <p>
              Training aquaculture farmers in proper fish breeding, hatchery management, and feed use.
            </p>
          </div>
        </div>
      </section>

      {/* Partnerships */}
      <section className="fbf-section">
        <h2>Partnerships & Collaborations</h2>
        <p>
          We collaborate with universities, feed manufacturers, and research institutions including 
          <strong> FAO, WIOMSA, and Sokoine University of Agriculture</strong> to promote innovative 
          and sustainable aquaculture technologies.
        </p>
      </section>

      {/* Call to Action */}
      <div className="fbf-buttons">
        <Link to="/contact" className="fbf-btn fbf-contact">
          Contact Our Experts →
        </Link>
        <Link to="/area" className="fbf-btn fbf-back">
          ← Back to Research Areas
        </Link>
      </div>
    </main>
  );
}
