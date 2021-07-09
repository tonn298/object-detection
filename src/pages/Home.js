import React from "react";
import styled from "styled-components";

import Content from "./sections/Content";
import Result from "./sections/Result";
import Welcome from "./sections/Welcome";

const HomeStyled = styled.div`
  background-color: #fff;
  > * {
    margin: 20px;
  }
`;

const Home = () => {
  return (
    <HomeStyled>
      <Welcome />
      <Content />
      <Result />
    </HomeStyled>
  );
};

export default Home;
