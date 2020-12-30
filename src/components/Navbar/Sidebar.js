import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { menuData } from "../../data/MenuData";

const SidebarContainer = styled.div`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: #2bc5b4;
  top: 0;
  left: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({ isMenuOpen }) => (isMenuOpen ? "1" : "0")};
  top: ${({ isMenuOpen }) => (isMenuOpen ? "80px" : "-100%")};
`;
// const SidebarWrapper = styled.div``;
const SidebarMenu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 50px 0;
`;
const SidebarMenuLink = styled(Link)`
  display: block;
  padding: 20px 0;
  width: 100%;
  text-align: center;
  font-size: 22px;
  color: #fff;
  font-weight: 600;
`;

const Sidebar = ({ isMenuOpen, menuToggle }) => {
  return (
    <>
      <SidebarContainer isMenuOpen={isMenuOpen} onClick={menuToggle}>
        <SidebarMenu>
          {menuData.map((item, index) => (
            <SidebarMenuLink to={item.link} key={index}>
              {item.title}
            </SidebarMenuLink>
          ))}
        </SidebarMenu>
      </SidebarContainer>
    </>
  );
};

export default Sidebar;
