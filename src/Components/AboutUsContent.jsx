import React from "react";
import { Link } from "react-router-dom";
import "../Styles/aboutuscontent.css";
const AboutsUsContent = () => {
  return (
    <>
      <div className="about__bgImage">
        <section className="about__section">
          <div className="about__image">
            <img
              src="https://cdn.pixabay.com/photo/2017/08/26/23/37/business-2684758__340.png"
              alt=""
            />
          </div>

          <div className="about__content">
            <h2>Our Focus</h2>

            <p>
              At Rhombus Global Services, we deliver data, digital and cloud
              technology transformation and services from strategy to
              implementation.
              <br />
              We enable innovative solutions across variety of industry segments
              and cater to organizations of various sizes. We believe in
              long-term partnerships, and our services are designed for value
              and the specific needs of our clients
            </p>
            <span></span>
            <h2> Our Vision</h2>
            <p>
              To be unique in every part of the business we operate and provide
              exceptional value.
              <br />
              We specialize in helping organize eliminate blind spots by
              uncovering data and business insights, accelerating digital
              transformation, leveraging automation for optimization and ROI and
              taking a quantum leap in growth
            </p>
            <ul className="about__links">
              <li>
                <a href="/#servicecontent">Services</a>
              </li>
              <div className="about__vertical_line"></div>
              <li>
                <Link to="/#industries">service</Link>
              </li>
              <div className="about__vertical_line"></div>
              <li>
                <Link to="/contact">contact</Link>
              </li>
            </ul>
            <ul className="about__icons">
              <li>
                <a href="https://www.linkedin.com/company/rgs-tech/">
                  <i className="fa fa-linkedin"></i>
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/RGSDigital/?view_public_for=280342016002143">
                  <i className="fa fa-facebook"></i>
                </a>
              </li>

              <li>
                <a href="mailto:info@rgs-tech.com">
                  <i className="fa fa-envelope"></i>
                </a>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </>
  );
};

export default AboutsUsContent;