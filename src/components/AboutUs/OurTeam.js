import React from "react";
import LogoElement from "../../images/home/benefits-images/rectangle-30.svg";

import avatar from "../../images/aboutus/avatar.svg";
import Santosh from "../../images/aboutus/Santosh-Kumar.jpg";
// import Georgia from "../../images/aboutus/Georgia-Santucci.jpg";
import Fredrik from "../../images/aboutus/Fredrik-Jonsson.jpg";
// import Thomas from "../../images/aboutus/Thomas-Knudssøn.jpg";
import Sudip from "../../images/aboutus/Sudip-Samanta.jpg";
import Tapas from "../../images/aboutus/Tapas-Nayak.jpg";
// import Sofia from "../../images/aboutus/Sofia-Gudmundsson.jpg";

const OurTeam = () => {
  return (
    <div className="our-team">
      <section className="container our-teams">
        <div className="container-heading">
          <img
            className="container-heading__image"
            src={LogoElement}
            alt="bubble"
          />
          <h1 className="container-heading__title">Out Team</h1>
        </div>
        <div className="container-body ">
          <div className="container-body__card w-75 py-100 m-auto">
            <div className="container-body__card-avatar w-25 p-25 text-center">
              <img
                className="container-avatar__image"
                src={Santosh}
                alt="Santosh Kumar"
              />
              <h3>Santosh Kumar</h3>
              <p>
                Founder&CEO <br />
                Product Management, Sales
              </p>
            </div>
            <div className="container-body__card-avatar w-25 p-25 text-center">
              <img
                className="container-heading__image"
                src={Fredrik}
                alt="Fredrik Jonsson"
              />
              <h3>Fredrik Jonsson</h3>
              <p>
                COO <br />
                Business Development, Funding
              </p>
            </div>
            <div className="container-body__card-avatar w-25 p-25 text-center">
              <img
                className="container-heading__image"
                src={Sudip}
                alt="bubble"
              />
              <h3>Sudip Samanta</h3>
              <p>Senior Backend Developer</p>
            </div>
            <div className="container-body__card-avatar w-25 p-25 text-center">
              <img
                className="container-heading__image"
                src={Tapas}
                alt="bubble"
              />
              <h3>Tapas Nayak</h3>
              <p>Senior Backend Developer</p>
            </div>
            <div className="container-body__card-avatar w-25 p-25 text-center">
              <img
                className="container-heading__image"
                src={avatar}
                alt="bubble"
              />
              <h3>Santosh Kumar</h3>
              <p>
                Founder&CEO <br />
                Product Management, Sales
              </p>
            </div>
            <div className="container-body__card-avatar w-25 p-25 text-center">
              <img
                className="container-heading__image"
                src={avatar}
                alt="bubble"
              />
              <h3>Santosh Kumar</h3>
              <p>
                Founder&CEO <br />
                Product Management, Sales
              </p>
            </div>
            <div className="container-body__card-avatar w-25 p-25 text-center">
              <img
                className="container-heading__image"
                src={avatar}
                alt="bubble"
              />
              <h3>Santosh Kumar</h3>
              <p>
                Founder&CEO <br />
                Product Management, Sales
              </p>
            </div>
            <div className="container-body__card-avatar w-25 p-25 text-center">
              <img
                className="container-heading__image"
                src={avatar}
                alt="bubble"
              />
              <h3>Santosh Kumar</h3>
              <p>
                Founder&CEO <br />
                Product Management, Sales
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurTeam;
