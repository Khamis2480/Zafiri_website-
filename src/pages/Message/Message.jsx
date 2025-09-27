import React from 'react';
import './Message.css';

// Import images (adjust paths as needed)
import heroImage from '../../assets/histo/message two.jpg';
import directorPhoto from '../../assets/home/IMG_6209.JPG';

const DirectorMessage = () => {
  return (
    <>
      {/* Hero Section */}
      <section 
        className="hero" 
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="overlay"></div>
        <div className="hero-content">
          <h1>MESSAGE FROM THE DIRECTOR</h1>
          <div className="breadcrumb">
            <a href="../../../Home page/home/home.html">HOME</a> <span>&gt;</span>
            <span>MESSAGE</span>
          </div>
        </div>
      </section>

      <div className="message-card">
        <div className="message-header">
          <img src={directorPhoto} alt="Director Photo" className="message-img" />
        </div>
        <p className="message-meta">
          Dkt: <span className="name">Zakaria Ali Khamis</span>
        </p>
        <p className="message-position">
          DIRECTOR GENERAL
        </p>
        <p className="message-text">
          Assalamu Alaikum wa Rahmatullahi wa Barakatuh,
          It gives me great pleasure to welcome all to the official webpage
          of ZAFIRI. I wish to extend my special greetings to staff, students,
          alumni, partners, and regulators who support our mission of advancing
          research in fisheries and marine resources.
        </p>
      </div>
    </>
  );
};

export default DirectorMessage;