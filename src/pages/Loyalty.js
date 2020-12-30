import React from "react";

import Group7455 from "../images/customers/Group-7455.png";
import Group7354 from "../images/customers/Group7354.png";
import Group7511 from "../images/customers/Group-7511.png";
import Group7553 from "../images/customers/Group7553.png";
import Group7554 from "../images/customers/Group7554.png";
import Group7555 from "../images/customers/Group7555.png";
import Group7379 from "../images/customers/Group7379.png";
import Group7382 from "../images/customers/Group7382.png";
import Group7556 from "../images/customers/Group7556.png";
import Group7384 from "../images/customers/Group7384.png";
import Group7557 from "../images/customers/Group7557.png";
import Group7558 from "../images/customers/Group7558-new.png";
import Group7559 from "../images/customers/Group7559.png";

import FAQ from "../components/Home/FAQ";

import "../styles/Localty.css";

const Loyalty = () => {
  return (
    <div className="localty-app loyalty head-bg">
      <section className="hero-banner">
        <div className="hero-banner__container grid-order__change">
          <div className="hero-banner_container-left">
            <h1 className="hero-main__title">
              Earning cashback is made simple and automatic!
            </h1>
            <div className="hero-paragraph">
              Visit our partners locations and receive cashback benefits
              directly into your bank account
            </div>
            <div className="btn-group__flex">
              <button className="btn-primary">Explore</button>
              <div className="btn-image">
                <img
                  height="40px"
                  src={Group7354}
                  alt=""
                  className="mobile-customers-img"
                />
              </div>
            </div>
          </div>
          <div className="hero-banner_container-right">
            <img src={Group7455} alt="" className="phone-img" />
          </div>
        </div>
      </section>

      <section className="loyalty-banner">
        <div className="hero-banner__container pt-50">
          <div className="hero-banner_container-left px-50">
            <img src={Group7511} alt="" className="img" />
          </div>
          <div className="hero-banner_container-right">
            <h1 className="hero-main__title">
              Organize your purchases, every month!
            </h1>
            <div className="hero-paragraph">
              Better visibility of your spendings to help you analyse and save
              them for other purpose.
              <br />
              Organize your receipts or purchases this month
            </div>
          </div>
        </div>
      </section>

      <section className="loyalty-banner">
        <div className="hero-banner__container pt-50 grid-order__change">
          <div className="hero-banner_container-left">
            <h1 className="hero-main__title">Redeem your cashback anwhere!</h1>
            <div className="hero-paragraph">
              Our unique loyality membership allows you to redeem your earned
              cash back at any of the participating merchants within our network
            </div>
          </div>
          <div className="hero-banner_container-right px-50">
            <img src={Group7553} alt="" className="img" />
          </div>
        </div>
      </section>

      <section className="loyalty-banner">
        <div className="hero-banner__container pt-50">
          <div className="hero-banner_container-left px-50">
            <img src={Group7554} alt="" className="img" />
          </div>
          <div className="hero-banner_container-right">
            <h1 className="hero-main__title">
              Get your cashback into your bank or give back
            </h1>
            <div className="hero-paragraph">
              PayTack rewards app allows your to shop at your favorite brands
              and the earned cashbacks can be directly tranferred to your bank
              account or give it back for a noble cause. It's up to you
            </div>

            <button className="btn-primary">Send me app link</button>
          </div>
        </div>
      </section>

      <section className="container loyalty-how-it-works pt-50">
        <div className="container-heading">
          <h1 className="container-heading__title">How it works?</h1>
        </div>
        <div className="container-body">
          <div className="container-body__card py-25">
            <div className="container-body__card-left">
              <img className="number-icons" src={Group7379} alt="icon1" />

              <div className="container-body__card-content">
                <h2 className="container-body__card-title">
                  Download payTack app
                </h2>
                <p>
                  Download PayTack app and allow location service and
                  notification to be enabled so we can send you closest offers
                  and cashback available near you{" "}
                </p>

                <div className="btn-group__flex">
                  <button type="button" class="btn-primary">
                    App Store
                  </button>
                  <button type="button" class="btn-primary">
                    Google Play
                  </button>
                </div>
              </div>
            </div>
            <div className="container-body__card-right">
              <img src={Group7555} alt="icon1" />
            </div>
          </div>
          <div className="container-body__card py-25">
            <div className="container-body__card-left">
              <img className="number-icons" src={Group7382} alt="icon1" />

              <div className="container-body__card-content">
                <h2 className="container-body__card-title">
                  Discover places near you
                </h2>
                <p>
                  You can find all participating partners using map or list view
                  and can check the rewards that are waiting for you
                </p>
              </div>
            </div>
            <div className="container-body__card-right">
              <img src={Group7556} alt="icon1" />
            </div>
          </div>
          <div className="container-body__card py-25">
            <div className="container-body__card-left">
              <img className="number-icons" src={Group7384} alt="icon1" />

              <div className="container-body__card-content">
                <h2 className="container-body__card-title">
                  Shop online or offline
                </h2>
                <p>
                  Simply use our app to pay to earn automatic ashbacks or pay at
                  the shop and scan the bill using our app to earn cashbacks.
                  You can redeem or transfer it directly into your
                </p>
              </div>
            </div>
            <div className="container-body__card-right">
              <img src={Group7557} alt="icon1" />
            </div>
          </div>
        </div>
      </section>

      <section className="container join-us pb-0">
        <div className="container-heading">
          <h1 className="container-heading__title">
            Join us in helping hyperlocal community
          </h1>
        </div>
        <div className="container-body">
          <img
            width="94%"
            src={Group7558}
            alt=""
            className="mobile-customers-img"
          />

          <div className="join-us__bottom">
            <p className="py-1">
              The money you earn through PayTack's reward can help to make our
              underprivileged children educated. Join us in supporting an
              important UnitedNations projects in India
            </p>
            <button type="button" class="btn btn-primary">
              Read more
            </button>
          </div>
        </div>
      </section>

      <section className="container join-us">
        <div className="container-heading">
          <h1 className="container-heading__title">
            Secure and private - PayTack value your security and privacy above
            all else.
          </h1>
        </div>
        <div className="container-body loyalty-security">
          <div className="container-body__card pb-0">
            <div className="container-body__card-left">
              <img src={Group7559} alt="icon1" />
            </div>
            <div className="container-body__card-right">
              <div className="loyalty-security_titlle">
                Payment data encryption
              </div>
              <p className="mt-3">
                We don't store any payment card data and all the payment details
                are 256 bit encrypted for end to end communication with the help
                of our global fintech partners
              </p>

              <div className="loyalty-security_titlle">
                Secure personal data
              </div>
              <p className="mt-3">
                Your data is only shared with our partners that your choose to
                get cashback from, others will never have any access to your
                private data
              </p>

              <div className="loyalty-security_titlle">
                Cloud security to data access
              </div>
              <p className="mt-3">
                Our secure cloud based architecture makes it impossible for
                unauthorized access to our system and data are masked to protect
                individual information being stolen or misused
              </p>
            </div>
          </div>
        </div>
      </section>

      <FAQ />
    </div>
  );
};

export default Loyalty;
