import React from "react";
import { Component } from "react";
import { Link } from "react-router-dom";
import LogoElement from "../../images/home/benefits-images/rectangle-30.svg";
// import BenefitImg from "../../images/home/benefits-images/benefit-image.svg";
import styled, { keyframes } from "styled-components";
import { ReactComponent as BenefitSVG } from "../../images/home/how-it-works-images/benefit-image.svg";
// import Fade from "react-reveal/Fade";
// import Enrolment from "../../images/home/how-it-works-images/enrolment.svg";
// import Payment from "../../images/home/how-it-works-images/payment.svg";
// import Rewards from "../../images/home/how-it-works-images/rewards.svg";

// const test = [LogoElement, BenefitImg, Enrolment, Payment, Rewards];

const fade = keyframes`
from {
	transform: translateY(10px);
}
to {
	transform: translateY(0px);
}`;

const dash = keyframes`
	from {
		stroke-dashoffset: 100;
	}
	to {
		stroke-dashoffset: 0;
	}
}`;

const BenefitAnimation = styled(BenefitSVG)`
  // .paytack_logo {
  //   transform-origin: center;
  //   width:50px;
  // }
  // .heart {
  //   animation: ${fade} infinite alternate 3s ease;
  // }
  // .dash-line {
  //   animation: ${dash} infinite 8s linear;
  // }
  // .dollar {
  //   animation: ${fade} infinite alternate 4s ease;
  // }
  // .device {
  //   animation: ${fade} infinite alternate 2s ease;
  // }
  // .swipe {
  //   animation: ${fade} infinite alternate 5s ease;
  // }
  // .graph {
  //   animation: ${fade} infinite alternate 6s ease;
  // }
  // .people {
  //   animation: ${fade} infinite alternate 1s ease;
  // }
`;

class BenefitEveryone extends Component {
  state = {
    isSwitchOn: true,
  };
  render() {
    const isOn = this.state.isSwitchOn;
    return (
      <section className="container benefit-everyone">
        <div className="container-heading">
          <img
            className="container-heading__image"
            src={LogoElement}
            alt="bubble"
          />
          <h1 className="container-heading__title">Benefit For Everyone</h1>
        </div>
        <div className="container-body">
          <div className="container-body__heading">
            <button
              className={isOn ? "btn-benefit-business" : "btn-benefit-customer"}
              onClick={() => this.setState({ isSwitchOn: true })}
            >
              Benefits for businesses
            </button>
            <button
              className={isOn ? "btn-benefit-customer" : "btn-benefit-business"}
              onClick={() => this.setState({ isSwitchOn: false })}
            >
              Benefits for customers
            </button>
          </div>

          <section
            className={
              isOn
                ? "container-section business-section-show"
                : "container-section business-section-hide"
            }
          >
            <h2 className="container-section__title">
              <span>PayTack</span> loyalty will provide key benefits to your
              customers
            </h2>
            <div className="container-section__card grid-order__change">
              <div className="container-section__card-left">
                <ul className="container-section__benefit-list business-list">
                  <li>
                    Drive new customer acquisition: Provide a seamless way for
                    new customers to join their loyalty program through easy
                    sign up
                  </li>
                  <li>
                    Gain better data and insights: Capture their spending
                    behavior, location and other historical data to know their
                    returning customers
                  </li>
                  <li>
                    Increased Revenues: Helps to adjust their business offerings
                    according customer's visit pattern, which in turns increases
                    regular customers
                  </li>
                  <li>
                    Cost and time effective: Affordable monthly subscription
                    fits into every business' budget without any setup fee saves
                    physical card issuance costs
                  </li>
                </ul>
              </div>
              <div className="container-section__card-right">
                <BenefitAnimation className="benefit-img" />
              </div>
            </div>
          </section>
          <section
            className={
              isOn
                ? "container-section customer-section-hide"
                : "container-section customer-section-show"
            }
          >
            <h2 className="container-section__title">
              <span>PayTack</span> loyalty can help you to
            </h2>
            <div className="container-section__card grid-order__change">
              <div className="container-section__card-left">
                <ul className="container-section__benefit-list customer-list">
                  <li>
                    No more forgetting loyalty card: No need to carry multiple
                    physical cards or using single branded apps
                  </li>
                  <li>
                    Hassle free omnichannel experience The fastest way to pay,
                    both offline or in-app
                  </li>
                  <li>
                    Gain more rewards: customer is rewarded for every
                    transaction, increasing customer satisfaction
                  </li>
                  <li>
                    Access to exclusive network of our loyalty partners: freedom
                    to choose any participating merchants to redeem cashbacks
                  </li>
                </ul>
              </div>

              <div className="container-section__card-right">
                <BenefitAnimation className="benefit-img" />
              </div>
            </div>
          </section>
          <Link to="contact" className="btn-link">
            <button type="button" className="btn--primary--solid btn-primary">
              Join Now
            </button>
          </Link>
        </div>
      </section>
    );
  }
}

export default BenefitEveryone;
