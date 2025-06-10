import React from "react";
import "../index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faLine, faYoutube } from "@fortawesome/free-brands-svg-icons";

const Footer = () => (
  <footer className="footer-section">
    <div className="footer-content">
      <div className="footer-brand">
        <div className="footer-title">
          <span>Luqmanul<br />Hakim<br />Polban</span>
        </div>
        <div className="footer-desc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet elit non diam porttitor cursus. Nulla facilisi. Aliquam at commodo justo.
        </div>

<div className="footer-socials">
  <a href="#" aria-label="Instagram" className="footer-icon">
    <FontAwesomeIcon icon={faInstagram} />
  </a>
  <a href="#" aria-label="Line" className="footer-icon">
    <FontAwesomeIcon icon={faLine} />
  </a>
  <a href="#" aria-label="YouTube" className="footer-icon">
    <FontAwesomeIcon icon={faYoutube} />
  </a>
</div>
      </div>
      <div className="footer-contact">
        <div className="footer-contact-title">Contact</div>
        <div className="footer-contact-item">
          <span className="footer-contact-icon" role="img" aria-label="location">📍</span>
          <span>Jl. Ciwaruga, Parongpong, Bandung</span>
        </div>
        <div className="footer-contact-item">
          <span className="footer-contact-icon" role="img" aria-label="phone">📞</span>
          <span>+62 </span>
        </div>
      </div>
      <div className="footer-location">
        <div className="footer-location-title">Lokasi</div>
        <div className="footer-location-map">
          <iframe
            title="Lokasi Masjid Luqmanul Hakim POLBAN"
            src="https://www.google.com/maps?q=Masjid+Luqmanul+Hakim+Polban&output=embed"
            width="150"
            height="120"
            style={{ border: 0, borderRadius: "4px" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
    <div className="footer-copyright">
      Copyright © Luqmanul Hakim POLBAN. All rights reserved, 2025
    </div>
  </footer>
);

export default Footer;