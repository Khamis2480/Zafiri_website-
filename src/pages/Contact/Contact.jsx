import React from 'react';
import './Contact.css';
import heroImage from '../../assets/histo/contant.jpg';

const ContactPage = () => {
  return (
    <>
      {/* Hero Section */}
      <section
        className="hero"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="overlay"></div>
        <div className="hero-content">
          <h1>WE’RE HERE TO LISTEN</h1>
          <div className="breadcrumb">
            <a href="../../../Home page/home/home.html">HOME</a> <span>&gt;</span>
            <span>CONTACT US </span>
          </div>
        </div>
      </section>

      <div className="contact-container">
        <h2>Contact</h2>
        <p className="subtext">
          Stop wasting time and money designing and managing a website that doesn't get results. Happiness guaranteed!
        </p>

        <div className="contact-info">
          <div className="info-box">
            <i className="fas fa-envelope"></i>
            <h3>Email Us</h3>
            <p>www.zafiri.go.tz</p>
          </div>
          <div className="info-box">
            <i className="fas fa-phone-alt"></i>
            <h3>Call Us</h3>
            <p>
              <a href="tel:+255624505872">+255 624 505 872</a>
            </p>

          </div>
          <div className="info-box">
            <i className="fab fa-whatsapp"></i>
            <h3>WhatsApp Us</h3>
            <p>
              <a
                href="https://wa.me/61882343555?text=Hello%2C%20I%27d%20like%20to%20know%20more%20about%20your%20services"
                target="_blank"
                rel="noopener noreferrer"
              >
                +255 624 505 872
              </a>
            </p>
          </div>

          <div className="info-box">
            <i className="fas fa-map-marker-alt"></i>
            <h3>Address</h3>
            <p>26. MALAWI ROAD MARUHUBI <br />70473 MJINI MAGHARIBI</p>
          </div>
        </div>

        <div className="form-map-container">
          <div className="map-box">
            <iframe
              title="ZAFIRI Location"
              src="https://www.google.com/maps?q=V635%2B7Q9,+Zanzibar,+Tanzania&output=embed"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              style={{ width: '100%', height: '100%', border: 0, borderRadius: '8px' }}
            ></iframe>
          </div>

          <form
            className="contact-form"
            action="https://formsubmit.co/samirdehamix@gmail.com"
            method="POST"
          >
            <input type="text" name="name" placeholder="Name" required />
            <input type="email" name="email" placeholder="Email" required />
            <textarea name="message" placeholder="Message" required></textarea>

            {/* Optional: Prevent spam */}
            <input type="hidden" name="_captcha" value="false" />

            <button type="submit">SUBMIT</button>
          </form>

        </div>
      </div>
    </>
  );
};

export default ContactPage;