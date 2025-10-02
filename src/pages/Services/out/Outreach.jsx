import React from "react";
import "./Outreach.css";

export default function Outreach() {
  return (
    <main className="outreach-wrapper">
      {/* Title */}
      <h1 className="outreach-title">Outreach Services</h1>

      {/* What is Outreach Service */}
      <section className="outreach-section">
        <h2>What is Our Outreach Service?</h2>
        <p>
          At <strong>ZAFIRI</strong>, outreach is about <strong>connecting science with society</strong>. 
          We engage with local communities, schools, government, and stakeholders to raise awareness, 
          share knowledge, and promote sustainable practices in fisheries and marine resource management.
        </p>
      </section>

      {/* What We Offer */}
      <section className="outreach-section">
        <h2>What We Offer</h2>
        <ul>
          <li>Community awareness campaigns on marine conservation.</li>
          <li>Training and workshops for fishers, farmers, and youth.</li>
          <li>School programs and educational materials on ocean literacy.</li>
          <li>Collaborative projects with NGOs, local leaders, and institutions.</li>
          <li>Support for women and youth empowerment in marine resource use.</li>
        </ul>
      </section>

      {/* Why Choose Our Outreach */}
      <section className="outreach-section">
        <h2>Why Choose Our Outreach?</h2>
        <ul>
          <li>✅ Strong community connections and trust.</li>
          <li>✅ Programs tailored to local culture and needs.</li>
          <li>✅ Experienced facilitators and educators.</li>
          <li>✅ Focus on sustainable impact and long-term change.</li>
          <li>✅ Inclusive approach empowering women, youth, and vulnerable groups.</li>
        </ul>
      </section>

      {/* Button */}
      <div className="outreach-buttons">
        <a href="/contact" className="contact-btn">
          Contact Our Team →
        </a>
      </div>
    </main>
  );
}
