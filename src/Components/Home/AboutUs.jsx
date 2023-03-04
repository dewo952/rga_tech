import React from "react";
import "../../Styles/about.css";
import { BsArrowRightCircle } from "react-icons/bs";
import { Link } from "react-router-dom";
import { Container } from "@mui/system";

const AboutsUs = () => {
  return (
    <>
      <div className="abouts__container">
        <Container>
          <div className="aboutus__content">
            <p>/EXPERTISE</p>

            <h2>
              Your digital <br />
              solutions in one <br />
              place
            </h2>
          </div>
          <div className="aboutus__button">
            <h4>What we do</h4>
            <Link to="/about">
              <BsArrowRightCircle size={30} color="black" />
            </Link>
          </div>
        </Container>
      </div>
    </>
  );
};

export default AboutsUs;
