import React from "react";
import { GrInstagram, GrTwitter, GrFacebook } from "react-icons/gr";
import Divider from "@mui/material/Divider";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer_links">
        <div className="footer_col">
          <p>PROFILE</p>
          <ul>
            <li>
              <a href="/">FAQs</a>
            </li>
            <li>
              <a href="/">Pricing plans</a>
            </li>
            <li>
              <a href="/">Order tracking</a>
            </li>
          </ul>
        </div>
        <div className="footer_col">
          <p>RECENT POSTS</p>
          <ul>
            <li>
              <a href="/">Touch of uniqueness</a>
            </li>
            <li>
              <a href="/">Offices you won't forget</a>
            </li>
          </ul>
        </div>
        <div className="footer_col">
          <p>CUSTOMERS</p>
          <ul>
            <li>
              <a href="/">Help & contact us</a>
            </li>
            <li>
              <a href="/">Online stores</a>
            </li>
            <li>
              <a href="/">Terms & conditions</a>
            </li>
          </ul>
        </div>
        <div className="footer_col">
          <p>CONTACT</p>
          <ul className="footer_social">
            <li>
              <a href="/">
                <GrInstagram />
              </a>
            </li>
            <li>
              <a href="/">
                <GrTwitter />
              </a>
            </li>
            <li>
              <a href="/">
                <GrFacebook />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <Divider className="footer_divider" />
      <div className="rights">
        <p>C 2023 • All Rights Reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
