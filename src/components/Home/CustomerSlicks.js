import React, { Component } from "react";
import LogoElement from "../../images/home/customers/logo-element-orange.svg";
import Currybox from "../../images/home/customers/currybox3.png";
import Alfredo from "../../images/home/customers/alfredo3.png";
import Lila from "../../images/home/customers/lilla3.png";
import Sushi from "../../images/home/customers/sushi3.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CustomerSlick from "react-slick";

export default class CustomerSlicks extends Component {
  render() {
    var settings = {
      dots: true,
      arrows: false,
      infinite: true,
      autoplay: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      variableWidth: true,
      responsive: [
        {
          breakpoint: 2000,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },

        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <div className="customer-section">
        <section className="container customer-slick">
          <div className="container-heading">
            <img
              className="container-heading__image"
              src={LogoElement}
              alt="bubble"
            />
            <h1 className="container-heading__title">Our Customers</h1>
          </div>
          <div className="container-body">
            <CustomerSlick {...settings}>
              <div className="customerBox">
                <div
                  className="mobile-business-img"
                  style={{
                    backgroundImage: `url(${Currybox})`,
                  }}
                ></div>
                <h6 className="mb-4">Curry Box</h6>
              </div>
              <div className="customerBox">
                <div
                  className="mobile-business-img"
                  style={{
                    backgroundImage: `url(${Alfredo})`,
                  }}
                ></div>
                <h6 className="mb-4">Alfredo Pasta Fresca</h6>
              </div>
              <div className="customerBox">
                <div
                  className="mobile-business-img"
                  style={{
                    backgroundImage: `url(${Sushi})`,
                  }}
                ></div>
                <h6 className="mb-4">Sushi LP Herlev</h6>
              </div>
              <div className="customerBox">
                <div
                  className="mobile-business-img"
                  style={{
                    backgroundImage: `url(${Lila})`,
                  }}
                ></div>
                <h6 className="mb-4">lilla Husman</h6>
              </div>
            </CustomerSlick>
          </div>
        </section>
      </div>
    );
  }
}
