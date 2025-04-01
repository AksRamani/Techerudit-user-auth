import React from "react";
import aboutBG from "../assets/about.png"; // Path to your About Us image
import sectionBG from "../assets/Rectangleabout-bg.png"; // Path to the section background image

const AboutUs = () => {
  return (
    <section className="about-us-section" style={{ backgroundImage: `url(${sectionBG})` }}>
      <div className="about-us-content">
        <div className="about-text">
          <h2>About us</h2>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor. Lorem ipsum dolor sit amet consetetur sadipscing elitr.
          </p>
          <button className="contact-button">Contact Us</button>
        </div>
        <div className="about-image">
          <img src={aboutBG} alt="About us" />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
