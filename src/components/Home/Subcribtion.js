import React from "react";

const Subcribtion = () => {
  return (
    <section className="container contact-us">
      <div className="container-heading">
        <h1 className="container-heading__title">Subscribe to our newslette</h1>
        <p>
          Subscribe to Paytack to get updates on new places and offers in your
          town.
        </p>
      </div>
      <div className="container-body">
        <div className="container-body__from">
          <form action="" className="container-body__from-subscribtion">
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Email"
                aria-label="Email"
                aria-describedby="basic-addon2"
              ></input>
              <div className="input-group-append">
                <span
                  className=" input-group-text subscribeButton"
                  id="basic-addon2"
                >
                  Subscribe
                </span>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Subcribtion;
