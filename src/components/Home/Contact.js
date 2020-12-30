import React, { Component } from "react";
import LogoElement from "../../images/home/customers/logo-element-orange.svg";
import contactImageBg from "../../images/home/customers/contactus-bg.svg";

// import Modal from "react-bootstrap/Modal";

import styled from "styled-components";

const Button = styled.button``;

class ContactUs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      companyName: "",
      email: "",
      message: "",
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }
  state = {
    modalShow: false,
    errorMessage: false,
  };

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  }

  setInput = (key, value) => {
    this.setState({ ...this.state.formState, [key]: value });
  };

  render() {
    return (
      <section className="container contact-us">
        <div className="container-heading">
          <img
            className="container-heading__image"
            src={LogoElement}
            alt="bubble"
          />
          <h1 className="container-heading__title">
            {" "}
            Want to know more about us?{" "}
          </h1>
          <p>
            Leave your details in the form below and we will contact you shortly
          </p>
        </div>
        <div className="container-body">
          <div className="container-body__from grid-order__change">
            <form action="" className="container-body__from-sectoin">
              <label className="form-label">First Name</label>
              <input
                className="inputField"
                name="name"
                type="text"
                placeholder=""
                value={this.state.name}
                onChange={this.handleInputChange}
                required
              />
              <label className="form-label">Company Name</label>
              <input
                className="inputField"
                name="name"
                type="text"
                placeholder=""
                value={this.state.name}
                onChange={this.handleInputChange}
                required
              />
              <label className="form-label">Email</label>
              <input
                className="inputField"
                type="email"
                name="email"
                placeholder=""
                value={this.state.email}
                onChange={this.handleInputChange}
                required
              />
              <label className="form-label">Message</label>
              <textarea
                className="inputField"
                name="message"
                cols="30"
                rows="10"
                placeholder=""
                value={this.state.message}
                onChange={this.handleInputChange}
                required
              ></textarea>
              {this.state.errorMessage ? (
                <p className="text-left text-danger">
                  Please fill all the required fields
                </p>
              ) : (
                ""
              )}
              <div className="form-button">
                <Button
                  className=" form-submit btn-primary"
                  type="button"
                  value="Send"
                >
                  Send
                </Button>
              </div>
            </form>
            <div className="contactImage">
              <img src={contactImageBg} alt="" />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default ContactUs;
