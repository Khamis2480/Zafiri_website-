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

        <p className="message-position">DIRECTOR GENERAL</p>

        <div className="message-text">
          <p>Assalamu Alaikum wa Rahmatullahi wa Barakatuh,</p>

          <p>
            It is with great honor and commitment that I welcome you to the official
            website of the Zanzibar Fisheries and Marine Resources Research Institute (ZAFIRI).
          </p>

          <p>
            As an institution entrusted with safeguarding and advancing the sustainable use
            of our marine and fisheries resources, we are fully dedicated to supporting the
            Government’s vision of promoting the Blue Economy for the benefit of present
            and future generations.
          </p>

          <p>
            Our mission is to conduct high-quality scientific research, provide reliable data,
            and develop innovative solutions that guide informed decision-making and
            sustainable resource management. Through collaborative partnerships with local
            communities, national stakeholders, and international organizations, we aim to
            address the challenges facing our marine environment, including climate change,
            overfishing, and habitat degradation.
          </p>

          <p>
            We believe that science plays a critical role in shaping a resilient and prosperous
            future. ZAFIRI remains committed to building local capacity, strengthening research
            programs, and sharing knowledge to ensure our marine resources continue to support
            livelihoods, food security, and economic growth.
          </p>

          <p>
            I invite the public, private sector, researchers, and development partners to work
            hand in hand with us to achieve these goals. Together, we can protect, preserve, and
            sustainably utilize the ocean and its resources for generations to come.
          </p>
        </div>
      </div>

    </>
  );
};

export default DirectorMessage;