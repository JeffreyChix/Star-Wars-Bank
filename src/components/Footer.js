import React from "react";
import { Link } from "react-router-dom";

import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={`py-4 px-5 ${classes.footer}`}>
      <div className={`row ${classes.footer_first}`}>
        <div className={`col-md-4 ${classes.brand}`}>
          <Link to="/">
            STAR WARS BANK &nbsp; <i className="fab fa-galactic-republic"></i>
          </Link>
        </div>
        <div className={`col-md-8 ${classes.links}`}>
          <Link to="/about">About</Link>
          <Link to="/about-the-creator">About the Creator</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
      <div className={`row py-2 my-4 border-top ${classes.footer_last}`}>
        <p className="col-md-7">
          Created and maintained by Jeffrey Nwankwo &copy;{" "}
          {new Date().getFullYear()}
        </p>
        <ul className="col-md-5 list-unstyled ">
          <li>Follow me on: </li>
          <li className="ms-3">
            <a
              href="https://www.linkedin.com/in/jeffsalive/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-linkedin"></i>
            </a>
          </li>
          <li className="ms-3">
            <a
              href="https://twitter.com/JeffreySunny1"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-twitter-square"></i>
            </a>
          </li>
          <li className="ms-3">
            <a
              href="https://www.instagram.com/jeffcodey/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-instagram-square"></i>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
