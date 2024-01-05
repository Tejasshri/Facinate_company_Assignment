import "./index.css";

import { FaLinkedin, FaInstagramSquare, FaEnvelope } from "react-icons/fa";

export default function ContactUsSection() {
  return (
    <section className="contact-section" id="contactUs">
      <div className="icons">
        <FaInstagramSquare size={24} className="icon" />
        <FaLinkedin size={24} className="icon" />
        <FaEnvelope size={24} className="icon" />
      </div>
      <p>Copyright © 2024. All rights reserved</p>
    </section>
  );
}
