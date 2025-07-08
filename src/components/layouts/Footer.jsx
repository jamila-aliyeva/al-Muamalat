import React from "react";
import "./Footer.css";
import logo from "../../assets/images/futter-logo.svg";
import { NavLink } from "react-router-dom";
import { LiaTelegram } from "react-icons/lia";
import { SiInstagram } from "react-icons/si";
import { SlSocialFacebook } from "react-icons/sl";
import { SlSocialTwitter } from "react-icons/sl";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-logo">
          <img src={logo} alt="logo" />
        </div>
        <ul className="footer-links">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/">About</NavLink>
          </li>
          <li>
            <NavLink to="/">Services</NavLink>
          </li>
          <li>
            <NavLink to="/">Contact Us</NavLink>
          </li>
        </ul>
        <div className="social-links">
          <a href="">
            <LiaTelegram size={20} style={{ color: "#fff" }} />
          </a>
          <a href="#">
            {" "}
            <SiInstagram size={20} style={{ color: "#fff" }} />
          </a>
          <a href="">
            <SlSocialFacebook size={20} style={{ color: "#fff" }} />
          </a>
          <a href="instagram.com">
            {" "}
            <SlSocialTwitter size={20} style={{ color: "#fff" }} />
          </a>
        </div>
        <hr className="footer-line" />
        <p className="copyright">Copyright Satyam Studio</p>
      </div>
    </footer>
  );
};

export default Footer;
