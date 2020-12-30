import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
// import { menuData } from "../../data/MenuData";
import hambugerIcon from "../../images/hamburger.svg";
import logo from "../../images/newlogo.png";
// import logo from "../../images/greenLogo.png";

import LanguageSwitcher from "./LanguageMenu";

import "../../styles/Navbar.css";

const Nav = styled.nav`
  padding: 10px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const MobileMenuBar = styled.i`
  display: none;

  @media screen and (max-width: 767px) {
    display: block;
    background-image: url(${hambugerIcon});
    width: 50px;
    background-repeat: no-repeat;
    height: 50px;
    cursor: pointer;
  }
`;
const Logo = styled(Link)`
  width: 185px;
  height: 60px;

  img {
    width: 100%;
  }
  @media screen and (max-width: 767px) {
    img {
      width: 85%;
    }
  }
`;
const NavMenu = styled.div`
  @media screen and (max-width: 767px) {
    display: none;
  }
`;
const NavItems = styled(Link)`
  padding: 10px 20px;
  font-family: "Poppins", sans-serif;
  font-size: 18px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: normal;
  text-align: left;
  color: #1c1d3e;
`;
const Container = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 767px) {
    width: 100%;
  }
`;

const Header = styled.header`
  background: ${({ scrollNav }) => (scrollNav ? "#2bc5b4" : "transparent")};
  position: fixed;
  z-index: 10;
  width: 100%;
  padding: 0 150px;
  transition: all .5s ease-in-out;

  @media screen and (max-width: 767px) {
    width: 100%;
    padding: 0 10px;
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    width: 100%;
    padding: 0 20px;
  }
`;

const NavMenuContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

function Navbar({ menuToggle }) {
  const [scrollNav, setScrollNav] = useState(false);

  const navScrollActive = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
      document.querySelector(".top-nav").classList.add("active-top");
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", navScrollActive);

    if (setScrollNav) {
    }
  }, []);

  return (
    <>
      <Container>
        <Header scrollNav={scrollNav} className="top-nav">
          <Nav>
            <Logo to="/">
              <img src={logo} alt="" className="logo" />
            </Logo>

            <NavMenuContainer>
              <NavMenu>
                <NavItems to="/business">Business</NavItems>
                <NavItems to="/loyalty">Loyalty App</NavItems>
                <NavItems to="/contactus">Contact</NavItems>
              </NavMenu>
              <LanguageSwitcher />
              <MobileMenuBar onClick={menuToggle} />
            </NavMenuContainer>
          </Nav>
        </Header>
      </Container>
    </>
  );
}

export default Navbar;
