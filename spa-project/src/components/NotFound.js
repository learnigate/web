import React from "react";
import styled from "styled-components";


const Content = styled.div`
display: flex;
flex-direction: column;
align-items: center;
height: 20vh;
`;

const Text = styled.div`
  margin-top: 10px;
  font-size:18px;
  font-weight: 400;
  color: 23D7FF;
`;

const NotFound = () => (
  <>
    <Content>
      <>
        <img src={window.location.origin + "/not-found-icon.svg"} alt="Not Found Icon" style={{width:"100px"}} ></img>   
        <Text> Still working on it!  Please come back later </Text>
      </>
    </Content>

  </>
);

export default NotFound;
