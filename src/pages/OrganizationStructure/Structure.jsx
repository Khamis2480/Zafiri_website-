import React from 'react';
import './Structure.css';

const OrganizationChart = () => {
  return (
    <div className="org-structure-page">
      <section className="org-header">
        <h1>Organizational Structure</h1>
        <p>
          The organizational structure of ZAFIRI is designed to ensure effective
          leadership, efficient coordination of activities, and smooth communication
          across all departments. This structure supports our mission of advancing
          sustainable fisheries and marine resource management.
        </p>
      </section>

      {/* View / Download PDF Buttons */}
      <div className="org-buttons">
        <a
          href="src/assets/Organ structure.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="org-btn view-btn"
        >
          📄 View Organizational Structure
        </a>

        <a
          href="src/assets/Organ structure.pdf"
          download
          className="org-btn download-btn"
        >
          ⬇️ Download PDF File
        </a>
      </div>
    </div>

  );
};

export default OrganizationChart;