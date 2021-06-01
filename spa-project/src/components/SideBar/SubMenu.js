import React, { useState, useRef, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { colors, fontSizes } from "../../constants/StylingConstants";
import axios from "axios";
import * as BiIcons from "react-icons/bi"
import {MyContextData} from "../../contexts/PathContext"

const SidebarLink = styled(Link)`
  display: flex;
  color: #e1e9fc;
  justify-content: space-between;
  align-items: center;
  padding: 20px 20px 20px 40px;
  list-style: none;
  height: 60px;
  text-decoration: none;
  &:hover {
    cursor: pointer;
  }
`;

const SidebarLabel = styled.span`
  height: 60px;
  display: flex;
  align-items: center;
  margin-left: 16px;
  color: ${colors.TEXT_PRIMARY};
  font-size: ${fontSizes.font12};
  text-transform: uppercase;
  letter-spacing: 0.1em;
  line-height: 141%;
  font-weight: 500;
`;

const DropdownLink = styled(Link)`
  height: 60px;
  padding-left: 4rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #f5f5f5;
  z-index: 10;
  &:hover {
    cursor: pointer;
  }
`;

const TempWrapper =styled.div`
  display: flex;
  align-items: center;
`;

const Icon = styled.span`
height: 60px;
  font-size: 18px;
  display: flex;
  align-items: center;
  &:hover {
    color: #23d7ff;
  }
`;

const DivUnderNav = styled.div`
  position: absolute;
  left: 30px;
  width: 220px;
  z-index: -1;
  border-radius: 4px;
  top: ${({ top }) => `${top}px`};
  height: ${({ width }) => `${width}px`};
  margin-top: 400px;
  background: white;
  transition: all 0.5s ease-in-out;
`;
const SubMenu = ({ item }) => {
  const [subnav, setSubnav] = useState(false);

  const showSubnav = () => {
    setSubnav(!subnav);
  };

  const [indicatorPosition, setIndicatorPosition] = useState();
  const [indicatorWidth, setIndicatorWidth] = useState();
  const navElement = useRef();

  const {addingCounter} = useContext(MyContextData);
  const {setSelectedPath} = useContext(MyContextData);

  const [data, setData] = useState([]);

  useEffect( () => {
    axios
    .get("http://localhost:8090/user?username=liza")
    .then(res => { setData(res.data)})
    .catch(err => {console.log(err)})
  }, [addingCounter])


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
      <SidebarLink to={item.path} onClick={showSubnav}>
        <TempWrapper>
          <Icon>{item.icon}</Icon>
          <SidebarLabel>{item.title}</SidebarLabel>
        </TempWrapper>
        <div>
          {item.subNav && subnav
            ? item.iconOpened
            : item.subNav
            ? item.iconClosed
            : null}
        </div>
      </SidebarLink>
      <div ref={navElement}>
        {subnav && item.title === 'Learning pathes' &&
          data.paths.map((item, key) => {
              let path = `/learning_pathes/path/${item.id}`   
            return (
              <div>
                <DropdownLink to={path} key={item.id} onClick={(event) => { handleClick(event); setSelectedPath(item.pathName);}}>
                  <Icon><BiIcons.BiNotepad/></Icon>
                  <SidebarLabel>{item.pathName}</SidebarLabel>
                </DropdownLink>
              </div>
            )
          })}
        {subnav && (
          <DivUnderNav top={indicatorPosition} width={indicatorWidth} />
        )}
      </div>
    </>
  );
};

export default SubMenu;