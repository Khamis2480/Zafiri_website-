import React from "react";
import "./lab.css";

export default function Laboratory() {
  return (
    <main className="lab-wrapper">
      {/* Title */}
      <h1 className="lab-title">Laboratory Services</h1>

      {/* What is Laboratory Service */}
      <section className="lab-section">
        <h2>What is Our Laboratory Service?</h2>
        <p>
          ZAFIRI provides <strong>modern laboratory facilities</strong> equipped with advanced 
          instruments to support research, monitoring, and innovation in fisheries, aquaculture, 
          and marine science. Our labs ensure accurate, reliable, and evidence-based results 
          that help policymakers, researchers, and communities make informed decisions.
        </p>
      </section>

      {/* What We Offer */}
      <section className="lab-section">
        <h2>What We Offer</h2>
        <ul>
          <li>Water quality testing for aquaculture and marine environments.</li>
          <li>Microbiology and pathology analysis for fish health studies.</li>
          <li>Genetic and biochemical analysis for fisheries and biodiversity.</li>
          <li>Environmental monitoring and pollution assessment.</li>
          <li>Consultancy and training in laboratory techniques.</li>
        </ul>
      </section>

      {/* Why Choose Our Lab */}
      <section className="lab-section">
        <h2>Why Choose Our Lab?</h2>
        <ul>
          <li>✅ Equipped with modern, internationally recognized facilities.</li>
          <li>✅ Experienced scientists and skilled technical staff.</li>
          <li>✅ Trusted partner for national and international research projects.</li>
          <li>✅ Commitment to sustainability and marine conservation.</li>
          <li>✅ High-quality and timely results for stakeholders.</li>
        </ul>
      </section>

      {/* Buttons */}
      <div className="lab-buttons">
        <button className="apply-btn">Apply Now</button>
        <a
          href="/files/sample-laboratory-brochure.pdf"
          download
          className="download-btn"
        >
          Download Lab Brochure
        </a>
      </div>
    </main>
  );
}
