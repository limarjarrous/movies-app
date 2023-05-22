import React from "react";
import { GrInstagram, GrTwitter, GrFacebook } from "react-icons/gr";
import tmdbLogo from "../../assets/images/tmdb.png";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer_links">
        <div className="footer_col">
          <p>PAGES</p>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/trending">Trending</a>
            </li>
          </ul>
        </div>

        <div className="footer_col">
          <p>CUSTOMERS</p>
          <ul>
            <li>
              <a href="/">FAQs</a>
            </li>
            <li>
              <a href="/">Help & contact us</a>
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

      <div className="rights">
        <div className="copyrights">
          <a className="tmdb_logo" href="https://www.themoviedb.org/">
            <img src={tmdbLogo} alt="tmdb" />
          </a>
          <p>This product uses the TMDB API but is not endorsed or certified by TMDB</p>
        </div>
        <p>&copy; All Rights Reserved • {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
}

export default Footer;
