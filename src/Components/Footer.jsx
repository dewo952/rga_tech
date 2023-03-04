/* eslint-disable jsx-a11y/anchor-is-valid */
import { Container } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";
import logo from "../Assets/logo.png";
import "../Styles/footer.css";
const Footer = () => {
  return (
    <>
      <div className="footer__main">
        <Container>
          <footer>
            <div className="footer__container">
              <div className="footer__wrapper">
                <div className="footer__widget">
                  <Link to="/">
                    <img
                      src={logo}
                      alt="home"
                      className="footer__logo"
                      color="black"
                    />
                  </Link>
                  <p className="footer__desc">
                    We deliver data, digital and cloud technology transformation
                    and services from strategy to implementation.
                  </p>
                  <ul className="footer__social">
                    <li>
                      <a href="https://www.linkedin.com/company/rgs-tech/">
                        <i className="fab fa-linkedin-in"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.facebook.com/RGSDigital/?view_public_for=280342016002143">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                    </li>
                    <li>
                      <a href="mailto:info@rgs-tech.com">
                        <i className="fas fa-envelope"></i>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="footer__widget">
                  <h6>Quick Links</h6>
                  <ul className="footer__links">
                    <li>
                      <Link>
                        <a href>Home</a>
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        <a>Services</a>
                      </Link>
                    </li>
                    <li>
                      <Link to="/about">
                        <a>About</a>
                      </Link>
                    </li>
                    <li>
                      <Link to="/contact">
                        <a>Contact</a>
                      </Link>
                    </li>
                  </ul>
                </div>

                <div className="footer__widget">
                  <h6>Services</h6>
                  <ul className="footer__links">
                    <li>
                      <a href="/">Data Engineering</a>
                    </li>
                    <li>
                      <a href="/">Digit Engineering</a>
                    </li>
                    <li>
                      <a href="/">Clound Engineering</a>
                    </li>
                    <li>
                      <a href="/">Consulting and Advisory</a>
                    </li>
                  </ul>
                </div>
                <div className="footer__widget">
                  <h6>Help &amp; Support</h6>
                  <ul className="footer__links">
                    <li>
                      <a href="/">Legal Policy</a>
                    </li>
                    <li>
                      <Link to="/privacy-policy">
                        <a href="/">Privacy Policy</a>
                      </Link>
                    </li>

                    <li>
                      <a href="/">Terms of Services</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="footer__copyright-wrapper">
                <p>
                  All Rights Reserved, Copyright{" "}
                  <a href target="blank">
                    RGS-Tech
                  </a>
                </p>
              </div>
            </div>
          </footer>
        </Container>
      </div>
    </>
  );
};

export default Footer;
