import { Container } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";
import "../../Styles/herobanner.css";
const Herobanner = () => {
  return (
    <main className="home__main">
      <Container>
        <div className="home__content">
          <div className="home__wrapper">
            <h1>Empowering our customers for the future</h1>
            <p>
              We work with our clients to solve their most complex business
              challenges, engineering technology that redefines industries and
              shapes the way people live.
            </p>
            <Link to="/contact">
              <button className="home__button">
                <span>Get In Touch</span>{" "}
              </button>
            </Link>
          </div>
        </div>
      </Container>
    </main>
  );
};

export default Herobanner;
