import React from "react";
import styled from "styled-components";

import Content from "./sections/content/Content";
import Result from "./sections/result/Result";
import Welcome from "./sections/welcome/Welcome";

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
