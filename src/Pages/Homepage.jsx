import React from "react";
import { Slide } from "react-reveal";
import AboutsUs from "../Components/Home/AboutUs";
import Herobanner from "../Components/Home/Herobanner";
import Industries from "../Components/Home/Industries";
import Services from "../Components/Home/Services";

const Homepage = () => {
  return (
    <>
      <Slide top>
        <Herobanner />
      </Slide>
      <Slide left>
        <AboutsUs />
      </Slide>
      <Slide left>
        <Services />
      </Slide>
      <Slide left>
        <Industries />
      </Slide>
    </>
  );
};

export default Homepage;
