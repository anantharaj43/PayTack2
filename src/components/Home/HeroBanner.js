import React from "react";
// import { Link } from "react-router-dom";
// import styled from "styled-components";
import "../../styles/Home.css";

import herobannerImage from "../../images/home/phone2.svg";

const HeroBanner = () => {
  return (
    <section className="hero-banner" id="home">
      <div className="hero-banner__container">
        <div className="hero-banner_container-left">
          <img src={herobannerImage} alt="" className="phone-img" />
        </div>
        <div className="hero-banner_container-right">
          <h1 className="hero-main__title">The all-in-one smart</h1>
          <h1 className="hero-main__title hero-bold primary-color">
            LOYALTY SOLUTION
          </h1>
          <h1 className="hero-main__title">to grow your business</h1>
          <div className="hero-paragraph">
            <strong>PayTack</strong> is a loyalty platform that connects
            customers to our network of loyalty partners to earn cashback that
            can be used across our partners, increasing repeat purchases.
          </div>
          <button className="btn-primary">Join Now</button>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
