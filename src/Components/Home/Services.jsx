import React from "react";
import "../../Styles/services.css";
import dataengine from "../../Assets/services/dataengine.png";
import datatransformation from "../../Assets/services/datatransformation.png";
import cloud from "../../Assets/services/cloud.png";
import consulting from "../../Assets/services/Consulting.png";
import ServicesContend from "./ServicesContend";
import { Slide } from "react-reveal";

const Services = () => {
  return (
    <>
      <div className="service__main_1">
        <div className="service__heading">
          <h1>Our tech expertise</h1>
        </div>
        <main className="service__main">
          <section className="service__section">
            <div className="service__container">
              <div className="service__card">
                <div className="service__content">
                  <div className="service__imgBox">
                    <img
                      src={dataengine}
                      alt="Data Engineering and Solutions"
                    />
                  </div>
                  <div className="service__contentBox">
                    <h3>Data Engineering and Solutions</h3>
                  </div>
                </div>{" "}
                <ul className="service__sci">
                  <li>
                    <a href>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </a>
                  </li>
                </ul>
              </div>
              <div className="service__card">
                <div className="service__content">
                  <div className="service__imgBox">
                    <img
                      src={datatransformation}
                      alt="Digital Engineering and Transformation"
                    />
                  </div>
                  <div className="service__contentBox">
                    <h3>Digital Engineering and Transformation</h3>
                  </div>
                </div>
                <ul className="service__sci">
                  <li>
                    <a href>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </a>
                  </li>
                </ul>
              </div>

              <div className="service__card">
                <div className="service__content">
                  <div className="service__imgBox">
                    <img src={cloud} alt="Cloud Engineering and Platforms" />
                  </div>
                  <div className="service__contentBox">
                    <h3>Cloud Engineering and Platforms</h3>
                  </div>
                </div>
                <ul className="service__sci">
                  <li>
                    <a href>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </a>
                  </li>
                </ul>
              </div>

              <div className="service__card">
                <div className="service__content">
                  <div className="service__imgBox">
                    <img src={consulting} alt="Consulting and Advisory" />
                  </div>
                  <div className="service__contentBox">
                    <h3>Consulting and Advisory</h3>
                  </div>
                </div>
                <ul className="service__sci">
                  <li>
                    <a href>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </main>
        <Slide left>
          <ServicesContend />
        </Slide>
      </div>
    </>
  );
};

export default Services;
