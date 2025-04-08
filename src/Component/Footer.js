import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaYoutube,
  FaLinkedin,
  FaPhone,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <div className="Footer-main">
        <div className="Box1">
          <img className="Footerbox-1" src="Logo.png" alt="logo" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
            ipsum dolor sit amet, consectetur.
          </p>
          <div className="socialMedia-icon">
            <a href="#">
              <FaFacebook />
            </a>
            <a href="#">
              <FaLinkedin />
            </a>
            <a href="#">
              <FaTwitter />
            </a>
            <a href="#">
              <FaYoutube />
            </a>
          </div>
        </div>
        <div className="Box2">
          <div className="Footerbox-2">
            <h2>Quick Links</h2>
            <ul>
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#news">Our Services</a>
              </li>
              <li>
                <a href="#contact">Virtual Office</a>
              </li>
              <li>
                <a href="#about">About Us</a>
              </li>
              <li>
                <a href="#about">Contact Us</a>
              </li>
              <li>
                <a href="#about">FAQs</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="Box3">
          <h2>Contact Us</h2>
          <div className="Email-block">
            <input
              className="email-input"
              type="email"
              placeholder="Email"
            ></input>
            <button className="email-button">&gt;&gt;</button>
          </div>

          <ul className="Emaillist-area">
            <li>
              <a href="#home">
                <FaPhone className="fa-icon" />
                info@estatebook.com
              </a>
            </li>
            <li>
              <a href="#news">
                <FaYoutube className="fa-icon" /> +96 012 3456 789
              </a>
            </li>
            <li>
              <a href="#contact">
                <FaLinkedin className="fa-icon" />
                Office No. 329, Floor 23 A1, Burj Khalifa, Dubai
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
