import React from "react";
import "./Footer.css";
import { assets } from "../../assets/frontend_assets/assets";

export default function Footer() {
  return (
    <footer className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="" />
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            odio, eum animi dolore quasi autem maxime velit ipsum dignissimos
            magnam, ullam enim iure. Modi totam soluta libero similique ex
            praesentium.
          </p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-right">
            <h2>COMPANY</h2>
            <ul>
                <li>home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
            </ul>
        </div>
        <div className="footer-content-center">
            <h2>
                GATE IN TOUCH
            </h2>
            <ul>
                <li>+977-9804386059</li>
                <li>tomato@gmail.com</li>
            </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">Copyright 2024 @ tomato.com - All Right Reserved</p>
    </footer>
  );
}
