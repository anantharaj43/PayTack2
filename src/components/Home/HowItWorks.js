import React from "react";
import headIcon from "../../images/home/how-it-works-images/logo_element.svg";
import howItsWorksBg from "../../images/home/how-it-works-images/how_it_works_bg_image.png";

const HowItWorks = () => {
  return (
    <section className="container how-it-works pb-0">
      <div className="container-heading">
        <img className="container-heading__image" src={headIcon} alt="bubble" />
        <h1 className="container-heading__title">How it works?</h1>
      </div>
      <div className="container-body">
        <img className="container-body__bg-image" src={howItsWorksBg} alt="" />
        <div className="container-body__card-left">
          <div className="container-body__card">
            <h2 className="container-body__card-heading">1. Enrolment</h2>
            <p>
              Your customer connects their preferred Visa, Amex, China Union Pay
              or Mastercard payment card inside paytack app . Multiple cards can
              be connected.
            </p>
          </div>
          <div className="container-body__card pb-0">
            <h2 className="container-body__card-heading">2. Payment</h2>
            <p>
              Whilst in-store, your customer taps their loyalty connected
              payment card at the till.
            </p>
          </div>
        </div>
        <div className="container-body__card-right">
          <div className="container-body__card pb-0">
            <h2 className="container-body__card-heading">3. Rewards</h2>
            <p>
              The updated loyalty cashback or rewards balance will be made
              visible to your customer, consistent with how your reward
              programme has been set up.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
