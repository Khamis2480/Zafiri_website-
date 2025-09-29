import React from "react";
import "./Certificate.css";

export default function Certificate() {
  return (
    <main className="ethical-wrapper">
      {/* Title */}
      <h1 className="ethical-title">Ethical Certificate for Researchers</h1>

      {/* What is an Ethical Certificate */}
      <section className="ethical-section">
        <h2>What is an Ethical Certificate?</h2>
        <p>
          An <strong>Ethical Certificate</strong> is an official document issued by ZAFIRI 
          to ensure that research is conducted responsibly, safely, and in line with 
          recognized ethical standards. It confirms that the research proposal has been 
          reviewed for participant protection, environmental sustainability, and scientific 
          integrity.
        </p>
      </section>

      {/* Why it is Important */}
      <section className="ethical-section">
        <h2>Why it is Important?</h2>
        <ul>
          <li>Protects participants’ rights, dignity, and safety.</li>
          <li>Ensures research methods safeguard marine ecosystems.</li>
          <li>Supports compliance with institutional and national policies.</li>
          <li>Builds trust with stakeholders, funders, and communities.</li>
        </ul>
      </section>

      {/* Application Process */}
      <section className="ethical-section">
        <h2>Application Process</h2>
        <ol>
          <li>Prepare your research proposal, CV, and supporting documents.</li>
          <li>Submit your application to ZAFIRI Research Ethics Committee.</li>
          <li>The committee reviews and may request clarifications.</li>
          <li>Once approved, you receive the official Ethical Certificate.</li>
        </ol>
      </section>

      {/* Buttons */}
      <div className="ethical-buttons">
        <button className="apply-btn">Apply Now</button>
        <a
          href="/files/sample-ethical-certificate.pdf"
          download
          className="download-btn"
        >
          Download Sample Ethical Certificate
        </a>
      </div>
    </main>
  );
}
