import React from 'react';
import './History.css';

// Import images (adjust paths as needed)
import heroImage from '../../assets/histo/history image.jpg';
import zafiriBuilding from '../../assets/histo/history image.jpg';

const History = () => {
  return (
    <>
      {/* Hero Section */}
      <section 
        className="hero" 
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="overlay"></div>
        <div className="hero-content">
          <h1>OUR PRIDGE HISTORY</h1>
          <div className="breadcrumb">
            <a href="../../../Home page/home/home.html">HOME</a> <span>&gt;</span>
            <span>OUR OWN HISTORY </span>
          </div>
        </div>
      </section>

      <section className="history-section">
        <h2 className="section-title">
          History of the Zanzibar Fisheries and Marine Resources Research Institute (ZAFIRI)
        </h2>
        <div className="history-container">
          <div className="history-image">
            <img src={zafiriBuilding} alt="Fisheries Institute Building" />
          </div>
          <div className="history-text">
            <p>Zanzibar Fisheries and Marine Resources Research Institute (ZAFIRI), is a public research institute
              under the Ministry of Blue Economy and Fisheries Zanzibar. ZAFIRI was established in April 2019 with
              focus of conducting and promoting fisheries research, aquaculture research and other marine
              resources and marine sciences research to ensure sustainable use of its oceans and natural
              resources, while protecting the marine environment and its ecology. The institute got its full
              mandates after signing of its Act No.11 of 2023 by Ho. President of Zanzibar and the Chair of
              Revolutionary Council, Dr Hussein Ali Mwinyi.</p>
            <p>ZAFIRI is mandated to conducting basic and applied research and promoting better methods, techniques,
              technology and innovation of fishing, aquaculture and processing of fish products; establish fish
              quality control, post-harvest preservation and value addition technologies and innovation;
              communicate and disseminate research findings; and advise the government on policy and decisions
              based on evidenced-based research. </p>
            <p>ZAFIRI is located at Maruhubi street in Urban District of Zanzibar. The institute is headed by the
              General Director, who is the overseer of the day-to-day activities. The institute is
              administratively composed of three departments, which are Department of Research, Innovation and
              Outreach, Department of Laboratory and Department of Human Resources, Administration and Planning.
              The institute has adequate working research facilities, including laboratories involving
              microbiology and chemistry labs; research equipment involving computers, underwater cameras and
              drones as well as tablets for data collection.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default History;