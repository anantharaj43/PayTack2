import React from "react";
// import { Link } from "react-router-dom";
import Logo from "../../images/greenLogo.png";
import DkFlag from "../../images/footer-images/dk-flag.png";
import SeFlag from "../../images/footer-images/se-flag.png";
// import CirclefBg from "../../images/footer-images/greyshape.svg";
// import styled from "styled-components";
import "../../styles/footer.css";
import Subcribtion from "../Home/Subcribtion";

const Footer = (props) => {
  const { handleClickFAQ } = props;
  return (
    <>
      <Subcribtion />
      <section className="footer-container">
        <div className="footer-container-section">
          <div className="container">
            <div className="footer-container__section company-logo">
              <img id="footerLogo" src={Logo} alt="" className="mb-3" />
              <p className="loyaltyCompany">A digital loyalty company</p>

              <div className="company-social__media">
                <a
                  className="company-social__media-link"
                  href="https://www.facebook.com/paytackdanish/"
                >
                  <i className="fab fa-facebook-square"></i>
                </a>
                <a
                  className="company-social__media-link"
                  href="https://www.linkedin.com/company/paytack"
                >
                  <i className="fab fa-linkedin"></i>
                </a>
                <a
                  className="company-social__media-link"
                  href="https://www.instagram.com/paytack_loyalty/"
                >
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>

            <div className="footer-container__section company-address">
              <div className="company-address__left">
                <div className="flag-title">
                  <h6 className="country-name"> Sweden</h6>
                  <img src={SeFlag} alt="dk-flag" className="flag" />
                </div>
                <p className="address-field">PayTack AB </p>
                <p className="address-field">
                  Anckargripsgatan 3, <br />
                  211 19 Malmö
                </p>
                <p className="address-mail">info@paytack.se</p>
              </div>

              <div className="company-address__right">
                <div className="flag-title">
                  <h6 className="country-name"> Denmark</h6>
                  <img src={DkFlag} alt="dk-flag" className="ml-2" />
                </div>
                <p className="address-field">PayTack IVS </p>
                <p className="address-field">
                  Højbro Pl. 10, <br />
                  1200 København K
                </p>
                <p className="address-field">CVR: 40209751</p>
                <p className="address-mail">info@paytack.se</p>
              </div>
            </div>

            <div className="footer-container__section navigation-links">
              <li className="nav-item">
                <a className="footerLink" href="/aboutus">
                  About us
                </a>
              </li>
              <li className=" nav-item">
                <a className="footerLink" href="/becomepartner">
                  Become a Partner
                </a>
              </li>
              <li className=" nav-item">
                <a className="footerLink " href="/privacypolicy">
                  Privacy Policy & GDPR
                </a>
              </li>
              <li className=" nav-item">
                <a className="footerLink" href="/terms&conditions">
                  Terms & Conditions
                </a>
              </li>
              <li onClick={handleClickFAQ} className="faqLink nav-item">
                <a className="footerLink" href="/terms&conditions">
                  FAQ {">"}
                </a>
              </li>
            </div>

            <div className="footer-container__section app-details">
              <div className="app-details__btns">
                <a
                  className="share__link"
                  href="https://apps.apple.com/us/app/paytack/id1502442601?ls=1"
                >
                  <div className="app-details__btn apple-share"></div>
                </a>{" "}
                <br />
                <a
                  className="share__link"
                  href="https://play.google.com/store/apps/details?id=com.paytack.application&hl=en_US"
                >
                  <div className="app-details__btn playstore-share"></div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Footer;
