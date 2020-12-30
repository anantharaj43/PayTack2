import React from "react";
import LogoElement from "../images/home/customers/logo-element-orange.svg";
import "../styles/partner.css";
import { Link } from "react-router-dom";

const Partner = () => {
  return (
    <div className="head-bg">
      <section className="partner-container container">
        <section className="container-heading p-75">
          <img
            className="container-heading__image"
            src={LogoElement}
            alt="bubble"
          />
          <h1 className="container-heading__title p-10"> BECOME A PARTNER</h1>
          <p className="">
            PayTack for Business gives you valuable insights based on real-time
            transaction data to target both new and loyal customers
          </p>
        </section>
        <div className="container-body">
          <div className="form-container">
            <form action="" method="post" className="contact partner-form">
              <ul>
                <li>
                  <i class="fas fa-building"></i>
                  <label htmlFor="businessName">
                    Business Name <span className="asterisk">*</span>
                  </label>
                  <input
                    className=""
                    name="businessName"
                    type="text"
                    required
                  />
                </li>
                <li>
                  <i class="fas fa-building"></i>
                  <label htmlFor="cvr">
                    Company Registration num/CVR{" "}
                    <span className="asterisk">*</span>
                  </label>
                  <input
                    className=""
                    name="cvr"
                    type="text"
                    placeholder="e.g. 123456-7890"
                    required
                    pattern="[0-3][0-9][0-1][1-9]\d{2}-\d{4}?[^0-9]*"
                  />
                </li>
                <li>
                  <i class="fas fa-building"></i>
                  <label htmlFor="businessOwner">
                    Business Owner <span className="asterisk">*</span>
                  </label>
                  <input
                    className="className"
                    name="businessOwner"
                    type="text"
                    required
                  />
                </li>
                <li>
                  <i class="fas fa-building"></i>
                  <label htmlFor="businessAddress">
                    Business Address <span className="asterisk">*</span>
                  </label>
                  <input
                    className=""
                    name="businessAddress"
                    type="text"
                    required
                  />
                </li>
                <li>
                  <i class="fas fa-envelope"></i>
                  <label htmlFor="email">
                    Business Email Address <span className="asterisk">*</span>
                  </label>
                  <input className="" name="email" type="email" required />
                </li>
                <li>
                  <i class="fas fa-phone"></i>
                  <label htmlFor="phone">
                    Telephone Number Of The Business{" "}
                    <span className="asterisk">*</span>
                  </label>
                  <input
                    className=""
                    name="businessPhone"
                    type="tel"
                    placeholder="8 digits with no spaces"
                    required
                    pattern="[0-9]{8}"
                  />
                </li>
                <li>
                  <i class="fas fa-phone"></i>
                  <label htmlFor="phone">
                    Telephone Number Of The Business Owner{" "}
                    <span className="asterisk">*</span>
                  </label>
                  <input
                    className=""
                    name="businessPhoneOwner"
                    type="tel"
                    placeholder="8 digits with no spaces"
                    required
                    pattern="[0-9]{8}"
                  />
                </li>
                {/* <li>
									<i class="fas fa-pen"></i>
									<label htmlFor="msg">Message</label>
									<textarea
										className=""
										name="message"
										cols="30"
										rows="10"
										placeholder="Message"
									></textarea>
									<p>Please enter your message</p>
								</li> */}
              </ul>
              <div className="accept-conditions">
                <input
                  type="checkbox"
                  id="acceptConditions"
                  name="acceptConditions"
                  value="businessSignUp"
                />
                <label htmlFor="acceptConditions">
                  By submitting the form below, you accept{" "}
                  <Link to="/privacypolicy">Paytack's terms of trade</Link>
                </label>
              </div>
              <button className=" btn-primary" type="button" value="Send">
                Send
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Partner;
