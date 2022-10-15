import React from "react";
import "./HeroSection.css";
import OurServices from "../OurServices/OurServices";
import OurReach from "../OurReach/OurReach";
import SpecializedSector from "../SpecializedSectors/SpecializedSector";
import WhyUs from "../WhyUs/WhyUs";
import { NavLink } from "react-router-dom";

import Fade from "react-reveal/Fade";

const HersoSection = () => {
  return (
    <>
      <section id="hero1" className="hero">
        <div className="hero-section">
          <div className="hero-content">
            <Fade bottom>
              <div className="hero-left">
                <h1 className="hero-primary-text">AVI IT Services</h1>
                <p className="hero-secondry-text">
                  Envision, Execute, Lead.
                  <br />
                  <br />
                  We came into existence keeping the fact in mind that it is
                  also important to be objective and make an unbiased hiring
                  decision.
                </p>

                <div className="upload-cv-btn-container">
                  <NavLink exact to="/contact">
                    <button className="upload-cv-btn">UPLOAD CV</button>
                  </NavLink>
                </div>
              </div>
            </Fade>
          </div>
        </div>
      </section>

      <section className="about-us-section">
        <div className="about-us">
          <Fade left>
            <div className="aboutus-left">
              <h1 className="aboutus-primary-text">About Us</h1>

              <h3 className="aboutus-secondry-text">
                Founded in 2022, AVI IT Services Private Limited is a fast
                growing company in recruitment industry. Our focus is always on
                innovative, measurable and value-added recruitment solutions to
                maximize client returns through our unique state-of-the-art
                recruitment model.
              </h3>

              <div className="aboutus-btn-container">
                <NavLink exact to="/about">
                  <button className="read-more-btn">Read More</button>
                </NavLink>
              </div>
            </div>
          </Fade>
          <Fade right>
            <div className="aboutus-right">
              <div className="aboutus-image-container">
                <img
                  src="../../assests/aboutus.jpg"
                  className="aboutus-image"
                  alt=""
                />
              </div>
            </div>
          </Fade>
        </div>
      </section>

      <OurServices />

      <OurReach />

      {/* <Clients /> */}

      <WhyUs />
      <SpecializedSector />
    </>
  );
};

export default HersoSection;
