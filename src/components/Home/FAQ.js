import React from "react";
// import { Component } from "react";
import headIcon from "../../images/home/how-it-works-images/logo_element.svg";

const panels = [
  {
    label: "What is a loyalty program?",
    content: `A loyalty program is a marketing tool which generates rewards
    and creates essential incentives for your customers based on
    their repeat purchases. In exchange for these purchases,
    customers will accumulate assets (such as reward points or
    stamps) which they can then exchange for products and
    services.`,
  },
  {
    label: `How does PayTack’s loyalty program work?`,
    content: `We, at PayTack, have created two different apps: one for
    businesses and one for consumers. Consumers can access your
    loyalty program through our PayTack App, whereas you are
    provided with our PayTack Shop app. Through this app, you can
    create an account, add your own logo, and choose the rewards
    programs and promotional tools that work best for your
    business. Once the consumer visits your shop/restaurant and is
    about to pay, they will be able to scan a QR code or request
    an activation code from the cashier in order to download the
    app. The consumer will then be able to create an account in
    our app and connect with your business. Once they have created
    an account, they can use your PayTack loyalty tablet in order
    to check-in. This is how new customer relationships are built!`,
  },
  {
    label: `What do I get with a PayTack Shop membership?`,
    content: `The PayTack membership:
    <br /> - Allows you to customise rewards plans that work best
    for your business
    <br /> - Gives you the opportunity to share your promotions
    directly with your customers through the app <br />- Includes
    different features which will improve your customers’
    experience, such as in-app table booking and food ordering{" "}
    <br /> - Monitors your loyal customer visits <br /> - Lets
    your customers check-in by themselves, using the PayTack
    tablet`,
  },
  {
    label: `What do I need in my store/restaurant to be able to
    usePayTack?`,
    content: `The PayTack Shop app runs on a tablet which we can provide you
    with if requested. With this tablet, you can control your
    loyalty program and use all its features. Besides that, you
    will need a stable internet connection in order to use the
    app.`,
  },
  {
    label: `How can a PayTack loyalty program benefit my business?`,
    content: `A successful loyalty program will lead to customer retention
    as well as boosted profits. Loyal customers will keep coming
    back to you based on the positive, delightful experiences they
    have had with your brand. Our app will also help you build
    stronger relationships with your customers. Loyal customers
    will stick with you through better or worse and will be more
    likely to share with their network the positive experiences
    they have had with your business.`,
  },
  {
    label: `How much does it cost to get started with PayTack?`,
    content: `It costs absolutely nothing to get started with PayTack! We
    offer a free trial including all premium features for up to 4
    weeks. There are also no additional installation or setup
    fees. If you would like to hear more about our long-term
    memberships, please contact us through the contact form at the
    bottom of the page.`,
  },
  {
    label: `What happens to our customer data?`,
    content: `Your customer data belongs to you and you will be able to
    access it via your profile in our app. Since PayTack is the
    provider of the operating system, we too have access to the
    data, however, we will never share it with other parties
    without your consent. You can find more information about this
    and our GDPR compliance in our Privacy Policy.`,
  },
  {
    label: `What is PayTack App?`,
    content: `PayTack App is our user app which has been created for your
    customers. Through this app, your customers as well as other
    consumers will be able to connect with your business. This is
    where they can be the first ones to hear about your promotions
    and collect their rewards. The app also allows customers to
    book a table and order food from you directly through the app!`,
  },
  {
    label: `How do the table booking and food ordering features work?`,
    content: `PayTack offers two additional features which lets your
    customers order food and book a table directly through their
    PayTack app. This way, we avoid mediating platforms, and
    instead you will have more direct contact with your customers.
    The customers will be able to access your restaurant’s menu
    and can place an order accordingly. On top of that, they can
    book a table through our app, which contributes to PayTack’s
    all-in-one smart solution to customer loyalty!`,
  },
  {
    label: `Do you also work with businesses that are outs of your current
    business areas?`,
    content: `Yes! We see many possibilities in different sectors for
    loyalty programs. In order to find out if we can make a good
    fit, please feel free to contact us through the contact form
    at the bottom of the page.`,
  },
];

class Panel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      height: 0,
    };
  }

  componentDidMount() {
    window.setTimeout(() => {
      const height = document.querySelector(".panel__inner").scrollHeight;
      this.setState({
        height,
      });
    }, 333);
  }

  render() {
    const { label, content, activeTab, index, activateTab } = this.props;
    const { height } = this.state;
    const isActive = activeTab === index;
    const innerStyle = {
      height: `${isActive ? height : 0}px`,
    };

    return (
      <div className="panel" role="tabpanel" aria-expanded={isActive}>
        <button className="panel__label" role="tab" onClick={activateTab}>
          {label}
        </button>
        <div
          className="panel__inner"
          style={innerStyle}
          aria-hidden={!isActive}
        >
          <p className="panel__content">{content}</p>
        </div>
      </div>
    );
  }
}

export default class FAQ extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeTab: 0,
    };

    this.activateTab = this.activateTab.bind(this);
  }

  activateTab(index) {
    this.setState((prev) => ({
      activeTab: prev.activeTab === index ? -1 : index,
    }));
  }

  render() {
    const { activeTab } = this.state;
    return (
      <section className="container faqs">
        <div className="container-heading">
          <img
            className="container-heading__image"
            src={headIcon}
            alt="bubble"
          />
          <h1 className="container-heading__title">FAQs</h1>
        </div>
        <div className="container-body">
          <div className="accordion" role="tablist">
            {panels.map((panel, index) => (
              <Panel
                key={index}
                activeTab={activeTab}
                index={index}
                {...panel}
                activateTab={this.activateTab.bind(null, index)}
              />
            ))}
          </div>
        </div>
      </section>
    );
  }
}
