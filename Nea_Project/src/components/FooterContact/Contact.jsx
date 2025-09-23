import React from "react";
import "./Contact.css";
import { FaFacebookF, FaInstagram, FaXTwitter, FaThreads, FaLinkedinIn } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="sidebar-footer">
      <h4 className="footer-title">Contact Us</h4>
      <div className="social-icons">
        <a href="#" aria-label="Facebook">
          <FaFacebookF />
        </a>
        <a href="#" aria-label="Instagram">
          <FaInstagram />
        </a>
        <a href="#" aria-label="Twitter">
          <FaXTwitter />
        </a>
        <a href="#" aria-label="Threads">
          <FaThreads />
        </a>
        <a href="#" aria-label="LinkedIn">
          <FaLinkedinIn />
        </a>
      </div>
    </footer>
  );
}
