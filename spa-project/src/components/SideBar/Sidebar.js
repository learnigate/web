import React, { useState, useRef } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import {} from "../../adapters/xhr";
import { SidebarData } from "./SidebarData";
import SubMenu from "./SubMenu";
import { IconContext } from "react-icons/lib";
import AddButton from "../Add";


const NavIcon = styled(Link)`
  width: 100px;
  margin-left: 2rem;
  font-size: 2rem;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  &:hover {
    color: #23d7ff;
  }
`;

const SidebarNav = styled.nav`
  background: #f4f5f7;
  width: 300px;
  overflow-y: scroll;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: ${({ sidebar }) => (sidebar ? "0" : "-100%")};
  transition: 350ms;
  z-index: 10;
  ::-webkit-scrollbar {
    width: 5px;
  }
  ::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 2px;
  }
  ::-webkit-scrollbar-thumb {
    background: #888;
  }
`;

const SidebarWrap = styled.div`
  width: 100%;
`;

const DivUnderNav = styled.div`
  position: absolute;
  left: 0;
  width: 5px;
  z-index: 15;
  border-radius: 2px;
  top: ${({ top }) => `${top}px`};
  height: ${({ width }) => `${width + 20}px`};
  margin-top: -5px;
  transition: all 0.5s ease-in-out;
`;

const UserRectangle = styled.div`
  img {
    width: 60px;
    height: 60px;
    margin: auto;
    border-radius: 7px;
  }
  h6{
    font-weight: 300;
  }
  span{
    font-weight: 500;
  }
  width: 100%;
  height: 100px;
  margin-bottom: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;



const Sidebar = () => {

  const [sidebar, setSidebar] = useState(true);

  

  const showSidebar = () => setSidebar(sidebar);

  const [indicatorPosition, setIndicatorPosition] = useState();
  const [indicatorWidth, setIndicatorWidth] = useState();
  const navElement = useRef();

  const handleClick = (event) => {
    const linkLeft = event.target.getBoundingClientRect().top;
    const navLeft = navElement.current.getBoundingClientRect().top;
    const linkWidth = event.target.getBoundingClientRect().height;
    const singleLinkWidth = linkWidth;
    const singleLinkLeft = linkLeft - navLeft;
    setIndicatorPosition(singleLinkLeft);
    setIndicatorWidth(singleLinkWidth);
  };

  return (
    <>
      <IconContext.Provider value={{ color: "#6F6F6F" }}>
        <NavIcon to="#">
          <FaIcons.FaBars onClick={showSidebar} />
        </NavIcon>
        <SidebarNav sidebar={sidebar} ref={navElement}>
          <SidebarWrap onClick={handleClick}>
            <NavIcon to="#">
              <AiIcons.AiOutlineClose onClick={showSidebar} />
            </NavIcon>
            <div>
              <UserRectangle>
              <img src="/user.jpg" alt="profile pic"></img>
              <h6>Welcome, <span>Sarah</span></h6> 
            </UserRectangle>
              {SidebarData.map((item, index) => {
                return <SubMenu item={item} key={index} />;
              })}
              <DivUnderNav top={indicatorPosition} width={indicatorWidth} />
            </div>
            <AddButton />
          </SidebarWrap>
        </SidebarNav>
      </IconContext.Provider>
    </>
  );
};

export default Sidebar;
