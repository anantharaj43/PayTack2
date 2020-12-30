import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Navbar/Sidebar";
import home from "./pages/Home";
import loyalty from "./pages/Loyalty";
import faqPage from "./pages/FaqPage";

import Footer from "./components/Footer/Footer";
import AboutUs from "./pages/AboutUs";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import ContactUs from "./pages/ContactUs";
import Partner from "./pages/Partner";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="PayTackApp">
      <Router>
        <Navbar menuToggle={menuToggle} />
        <Sidebar isMenuOpen={isMenuOpen} menuToggle={menuToggle} />
        <Switch>
          <Route exact path="/" component={home} />
          <Route path="/loyalty" component={loyalty} />
          <Route path="/faq" component={faqPage} />
          <Route path="/aboutus" component={AboutUs} />
          <Route path="/privacypolicy" component={PrivacyPolicy} />
          <Route path="/contactus" component={ContactUs} />
          <Route path="/becomepartner" component={Partner} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
