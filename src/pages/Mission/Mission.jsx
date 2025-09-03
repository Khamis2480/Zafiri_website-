import React from 'react';
import './Mission.css';

// Import image (adjust path as needed)
import heroImage from '../../assets/mission/vision and mission.jfif';

const Mission = () => {
  return (
    <>
      {/* Hero Section */}
      <section 
        className="hero" 
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="overlay"></div>
        <div className="hero-content">
          <h1>MISSION AND VISION</h1>
          <div className="breadcrumb">
            <a href="../../../Home page/home/home.html">HOME</a> <span>&gt;</span>
            <span>MISSION AND VISION</span>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="block">
          <h2>Our Mission</h2>
          <p>
            ZAFIRI is dedicated to conducting state-of-the-Art researches on fisheries and marine resources, and
            promoting the cutting-edge innovations to unleash opportunities of Blue Economy for sustainable economic
            development of Zanzibar
          </p>
        </div>

        <div className="block">
          <h2>Our Vision</h2>
          <p>
            To be a centre of excellence for fisheries and marine resources research in the Western Indian Ocean.
          </p>
        </div>
      </section>
    </>
  );
};

export default Mission;