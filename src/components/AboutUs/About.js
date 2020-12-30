import React from "react";
import LogoElement from "../../images/home/benefits-images/rectangle-30.svg";

import about1 from "../../images/aboutus/about-icon1.svg";
import about2 from "../../images/aboutus/about-icon2.svg";
import about3 from "../../images/aboutus/about-icon3.svg";
import about4 from "../../images/aboutus/about-icon4.svg";

const About = () => {
  return (
    <>
      <section className="container about-us pt-100">
        <div className="container-heading">
          <img
            className="container-heading__image"
            src={LogoElement}
            alt="bubble"
          />
          <h1 className="container-heading__title">About Us</h1>
        </div>
        <div className="container-body about-section">
          <div className="container-body__card justify-flex__center">
            <div className="container-body__left w-25 px-75">
              <img className="container-body__icon" src={about1} alt="" />
            </div>
            <div className="container-body__left w-50">
              <p>
                PayTack was founded by Santosh Kumar in 2018 in Malmö, Sweden
                and later registered in Copenhagen as PayTack IVS in January
                2019. We were a part of Minc incubation and Copenhagen fast
                track Nordics incubation programs and have had received numerous
                feedbacks that helped us to validate product-market fit.
              </p>
            </div>
          </div>
          <div className="container-body__card justify-flex__end">
            <div className="container-body__left w-25 px-50">
              <img className="container-body__icon" src={about2} alt="" />
            </div>
            <div className="container-body__left w-50">
              <p>
                PayTack was founded by Santosh Kumar in 2018 in Malmö, Sweden
                and later registered in Copenhagen as PayTack IVS in January
                2019. We were a part of Minc incubation and Copenhagen fast
                track Nordics incubation programs and have had received numerous
                feedbacks that helped us to validate product-market fit.
              </p>
            </div>
          </div>
          <div className="container-body__card justify-flex__center">
            <div className="container-body__left w-25 px-50">
              <img className="container-body__icon" src={about3} alt="" />
            </div>
            <div className="container-body__left w-50">
              <p>
                PayTack was founded by Santosh Kumar in 2018 in Malmö, Sweden
                and later registered in Copenhagen as PayTack IVS in January
                2019. We were a part of Minc incubation and Copenhagen fast
                track Nordics incubation programs and have had received numerous
                feedbacks that helped us to validate product-market fit.
              </p>
            </div>
          </div>
          <div className="container-body__card justify-flex__end">
            <div className="container-body__left w-25 px-50">
              <img className="container-body__icon" src={about4} alt="" />
            </div>
            <div className="container-body__left w-50">
              <p>
                PayTack was founded by Santosh Kumar in 2018 in Malmö, Sweden
                and later registered in Copenhagen as PayTack IVS in January
                2019. We were a part of Minc incubation and Copenhagen fast
                track Nordics incubation programs and have had received numerous
                feedbacks that helped us to validate product-market fit.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
