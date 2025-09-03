import React from "react";
import "./Department_lab.css";
import heroImage from "../../assets/laboratory/laboratory-equipment.jpeg";
import heartbeat from "../../assets/laboratory/heartbreack.jpg";
import pear from "../../assets/home/back1.jpg";
import watermelon from "../../assets/home/back2.jpg";
import promoImage from '../../assets/laboratory/strategic.webp';

// import doctorIcon from "../assets/icons/doctor.png";
// import visitIcon from "../assets/icons/visit.png";
// import adminIcon from "../assets/icons/admin.png";
// import pharmacyIcon from "../assets/icons/pharmacy.png";

import doctor1 from "../../assets/event/event1.JPG";
import doctor2 from "../../assets/event/event2.JPG";
import doctor3 from "../../assets/event/event3.JPG";
import doctor4 from "../../assets/event/event4.JPG";



function Partners() {
  return (
    <>
      <section
        className="hero-research"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="overlay-research"></div>
        <div className="hero-research-content">
          <h1>Department of Research</h1>
          <p>
            Our Research Department focuses on advancing knowledge, generating
            innovative solutions, and supporting evidence-based decision-making
            in fisheries, aquaculture, and marine ecosystems.
          </p>
        </div>
      </section>

      <section className="services">
        <div className="services-header">
          <h5 className="subtitle">What We Do</h5>
          <h2 className="title">What We Provide in Our Laboratory Services</h2>
          <p className="description">
            Lorem ipsum dolor sit amet, consectetur sadipscing elitr, sed dinonumy
            eirmod tempor invidunt ut labore et dolore magn.
          </p>
        </div>

        {/* Heartbeat line */}
        <div className="heartbeat">
          <img src={heartbeat} alt="heartbeat" />
        </div>

        {/* Service Items */}
        <div className="services-grid">
          <div className="service-card">
            {/* <img src={doctorIcon} alt="Specialist Doctors" /> */}
            <h4>Specialist Doctors</h4>
          </div>
          <div className="service-card">
            {/* <img src={visitIcon} alt="Frequent Visits" /> */}
            <h4>Frequent Visits</h4>
          </div>
          <div className="service-card">
            {/* <img src={adminIcon} alt="Cordial Administration" /> */}
            <h4>Cordial Administration</h4>
          </div>
          <div className="service-card">
            {/* <img src={pharmacyIcon} alt="Specialized Pharmacy" /> */}
            <h4>Specialized Pharmacy</h4>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="feature-row">
          <div className="feature-text">
            <h2>Scientific Testing & Analysis</h2>
            <p>A subheading for this section, as long or as short as you like</p>
          </div>
          <div className="feature-img">
            <img src={pear} alt="pear" />
          </div>
        </div>

        <div className="feature-row-reverse">
          <div className="feature-img">
            <img src={watermelon} alt="watermelon" />
          </div>
          <div className="feature-text">
            <h2>Quality Control</h2>
            <p>A subheading for this section, as long or as short as you like</p>
          </div>
        </div>
      </section>


      <section className="promo-section">
        <div className="promo-container">
          <div className="promo-content">
            <h2>
              Our <span className="highlight">Strategies</span> of Skillshare
            </h2>
            <ul>
              <li>Get unlimited access to thousands of inspiring classes</li>
              <li>Taught by industry leaders &amp; working professionals</li>
              <li>Topics include illustration, design, photography, and more</li>
            </ul>
          </div>
          <div className="promo-image">
            <img
              src={promoImage}
              alt="Skillshare learning experience"
            />
          </div>
        </div>
      </section>


      <section className="medical-team">
        <div className="container">
          <div className="section-header">
            <h2>Team</h2>
            <h3>Meet Our Technical</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur sadipscing elitr, sed dìnonumy
              eirmod tempor invidunt ut labore et dolore magn.
            </p>
          </div>

          <div className="doctors-grid">
            <div className="doctor-card">
              <div className="doctor-image">
                <img src={doctor1} alt="Dr. Hamir Jun." />
              </div>
              <div className="doctor-info">
                <h4>Dr. Hamir Jun.</h4>
                <p>Gastroenterology</p>
              </div>
            </div>

            <div className="doctor-card">
              <div className="doctor-image">
                <img src={doctor2} alt="Dr. Gideu Ds." />
              </div>
              <div className="doctor-info">
                <h4>Dr. Gideu Ds.</h4>
                <p>Neurology</p>
              </div>
            </div>

            <div className="doctor-card">
              <div className="doctor-image">
                <img src={doctor3} alt="Dr. Huduei Chy." />
              </div>
              <div className="doctor-info">
                <h4>Dr. Huduei Chy.</h4>
                <p>Orthopedics</p>
              </div>
            </div>

            <div className="doctor-card">
              <div className="doctor-image">
                <img src={doctor4} alt="Dr. Marke Ah." />
              </div>
              <div className="doctor-info">
                <h4>Dr. Marke Ah.</h4>
                <p>Gynecology</p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}

export default Partners;
