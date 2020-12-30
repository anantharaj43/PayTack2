import React from "react";
import Bubble from "../../images/home/bubble1.png";
import Icon1 from "../../images/home/retain1.svg";
import Icon2 from "../../images/home/retain2.svg";
import Icon3 from "../../images/home/retain3.svg";
import Icon4 from "../../images/home/retain4.svg";
// import "../styles/EngageCustomer.css";

const HomeRetain = () => {
  return (
    <section className="container home-retain">
      <div className="container-heading">
        <img className="container-heading__image" src={Bubble} alt="bubble" />
        <h1 className="container-heading__title">
          Seamlessly engage and retain customers
        </h1>
      </div>
      <div className="container-body">
        <div className="container-body__card">
          <div className="container-body__card-left text-center p-30">
            <img className="icons" src={Icon1} alt="icon1" />
          </div>
          <div className="container-body__card-right">
            <h2 className="container-body__card-title">
              Loyalty and rewards in real time
            </h2>
            <p>
              No loyalty cards,coupons or offer codes..just great experience{" "}
            </p>
          </div>
        </div>
        <div className="container-body__card grid-order__change">
          <div className="container-body__card-left p-30">
            <h2 className="container-body__card-title">
              The most affordable solution
            </h2>
            <p>No subscriptions , no setup fee , pay us only when you grow </p>
          </div>
          <div className="container-body__card-right">
            <img className="icons" src={Icon2} alt="icon1" />
          </div>
        </div>
        <div className="container-body__card">
          <div className="container-body__card-left text-right p-30">
            <img className="icons" src={Icon3} alt="icon1" />
          </div>
          <div className="container-body__card-right">
            <h2 className="container-body__card-title">
              Increase Customer Lifetime value
            </h2>
            <p>
              Capture increased transaction share by ensuring your brand is
              always top-of-mind, and competitively incentivised, so consumers
              choose your brand first{" "}
            </p>
          </div>
        </div>
        <div className="container-body__card grid-order__change">
          <div className="container-body__card-left p-30">
            <h2 className="container-body__card-title">
              Access exclusive relationship
            </h2>
            <p>
              Offers are displayed on the app , website and digital campaigns
              with access to millions of customers, increasing your brand's
              reach and visibility{" "}
            </p>
          </div>
          <div className="container-body__card-right">
            <img className="icons" src={Icon4} alt="icon1" />
          </div>
        </div>
      </div>
    </section>
  );
};
export default HomeRetain;
