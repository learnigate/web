import React from 'react';
import NotFound from "../../components/NotFound";
import styled from "styled-components";

const Container = styled.div`
margin: 0 0 0 300px;
height: 80vh;
display: flex;
align-items: center;
justify-content: space-around;
`;

const Placeholder = () => {
  return (
    <Container>
      <NotFound></NotFound>
    </Container>
  );
};

export default Placeholder;
