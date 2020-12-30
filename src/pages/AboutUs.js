import React from "react";

import OurTeam from "../components/AboutUs/OurTeam";
import About from "../components/AboutUs/About";

import "../styles/AboutUs.css";

const AboutUs = () => {
  return (
    <div className="about-section head-bg">
      <About />
      <OurTeam />
    </div>
  );
};

export default AboutUs;
