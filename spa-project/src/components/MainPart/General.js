import React, {useContext} from 'react';
import styled from "styled-components";
import TwitterTabs from "./Tabs";
import {MyContextData} from "../../contexts/PathContext"

const Container = styled.div`
padding:  0 35px 35px 335px;
height: 100vh;
width: 100%;
h1{
  font-size:24px;
  font-weight: 500;
  color: #414141;
}
`;

const Options = styled.div`
  height: 100px;
  margin-top: 20px;
  padding-left: 10px;
  display: flex;
  align-items: center;
  gap: 45px;
  img{
    height: 96px;
    border-radius:7px;
  }
`;


const General = () => {

const {selectedPath} = useContext(MyContextData);

  return (
    <React.Fragment>
      <Container>
      <h1> Learning path: {selectedPath} </h1>

      <Options>
        <img src="/table.svg" alt="Table" style={{border: "2px solid #23D7FF"}}></img>
        <img src="/road-map.svg" alt="RoadMap"></img>
      </Options>
      <TwitterTabs></TwitterTabs>
      </Container>
    </React.Fragment>
  )
}

export default General;