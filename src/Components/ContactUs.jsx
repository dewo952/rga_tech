/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "../Styles/contact.css";
import homevideo from "../Assets/homevideo1.mp4";
import { CiFacebook, CiMail, CiLinkedin } from "react-icons/ci";
const ContactUs = () => {
  return (
    <>
      <div className="landing_page">
        <div className="responsive-container-block big-container">
          <video className="bg-img" id="iq5bf" src={homevideo}></video>
          <div className="responsive-container-block container">
            <div className="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12 left-one">
              <div className="content-box">
                <p className="text-blk section-head">Get In Touch</p>
                <p className="text-blk section-subhead">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis volupta
                </p>
                <div className="icons-container">
                  <a
                    className="share-icon"
                    href="https://www.linkedin.com/company/rgs-tech/"
                  >
                    <CiLinkedin className="img" />
                  </a>
                  <a
                    className="share-icon"
                    href="https://www.facebook.com/RGSDigital/?view_public_for=280342016002143"
                  >
                    <CiFacebook className="img" />
                  </a>
                  <a className="share-icon" href="mailto:info@rgs-tech.com">
                    <CiMail className="img" />
                  </a>
                </div>
              </div>
            </div>
            <div
              className="responsive-cell-block wk-ipadp-6 wk-tab-12 wk-mobile-12 wk-desk-6 right-one"
              id="i1zj"
            >
              <form className="form-box">
                <div className="container-block form-wrapper">
                  <p className="text-blk contactus-head">
                    <a className="link" href></a>
                  </p>
                
                  <div className="responsive-container-block">
                    <div
                      className="responsive-cell-block wk-tab-12 wk-mobile-12 wk-desk-12 wk-ipadp-12"
                      id="i10mt-7"
                    >
                      <input
                        className="input"
                        id="ijowk-7"
                        name="FirstName"
                        placeholder="First Name"
                      />
                    </div>
                    <div
                      className="responsive-cell-block wk-tab-12 wk-mobile-12 wk-desk-12 wk-ipadp-12"
                      id="i1ro7"
                    >
                      <input
                        className="input"
                        id="indfi-5"
                        name="Last Name"
                        placeholder="Last Name"
                      />
                    </div>
                    <div
                      className="responsive-cell-block wk-tab-12 wk-mobile-12 wk-desk-6 wk-ipadp-6 emial"
                      id="ityct"
                    >
                      <input
                        className="input"
                        id="ipmgh-7"
                        name="Email"
                        placeholder="Email"
                      />
                    </div>
                    <div className="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
                      <input
                        className="input"
                        id="imgis-6"
                        name="PhoneNumber"
                        placeholder="Phone Number"
                      />
                    </div>
                    <div
                      className="responsive-cell-block wk-tab-12 wk-mobile-12 wk-desk-12 wk-ipadp-12"
                      id="i634i-7"
                    >
                      <textarea
                        aria-placeholder="Type message here"
                        className="textinput"
                        id="i5vyy-7"
                        placeholder="Type message here"
                      ></textarea>
                    </div>
                  </div>
                  <button className="submit-btn">Send Message</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
