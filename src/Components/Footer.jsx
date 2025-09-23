import React from 'react';
import './Footer.css'; 

// Import images (adjust path as needed)
import zafiriLogo from '../assets/logo/zafiri.png';
import footerBg from '../assets/histo/zafir-building.jpg';

const Footer = () => {
  return (
    <footer 
      className="footer parallax-footer" 
      style={{ backgroundImage: `url(${footerBg})` }}
    >
      <div className="footer-overlay">
        <div className="footer-container">

          {/* University Info */}
          <div className="footer-column">
            <img src={zafiriLogo} alt="Zafiri Logo" width="70" />
            <h3>ZAFIRI</h3>
            <p>Center of excellence for fisheries and Marine Resource Research in the Western Indian Ocean</p>
          </div>

          {/* Contact Info */}
          <div className="footer-column">
            <h3>CONTACT US</h3>
            <p><i className="fas fa-phone"></i> +255 624505872</p>
            <p><i className="fas fa-envelope"></i> Info@zafiri.go.tz</p>
            <p><i className="fas fa-globe"></i> www.zafiri.go.tz</p>
            <p><i className="fas fa-map-marker-alt"></i> Maruhubi - Zanzibar</p>
          </div>

          {/* Useful Links */}
          <div className="footer-column">
            <h3>USEFUL LINKS</h3>
            <p><a href="#">Tanzania Fisheries Research Institute</a></p>
            <p><a href="#">Ministry of Blue Economy and Fisheries</a></p>
            <p><a href="#">World Fish</a></p>
          </div>

          {/* Social Media */}
          <div className="footer-column">
            <h3>SOCIAL MEDIA</h3>
            <div className="social-icons">
              <a href="#"><i className="fab fa-facebook-f"></i></a>
              <a href="#"><i className="fab fa-twitter"></i></a>
              <a href="https://www.youtube.com/@ZAFIRIWUBU"><i className="fab fa-youtube"></i></a>
              <a href="https://www.instagram.com/zafiriwubu"><i className="fab fa-instagram"></i></a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p>ZAFIRI © 2025. All Rights Reserved. Designed by ICT Department</p>
          <p><a href="#">Privacy Policy</a> · <a href="#">Terms & Conditions</a></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
