import React from "react";
import styled from "styled-components";

import Content from "./sections/content/Content";
import Result from "./sections/result/Result";

const HomeStyled = styled.div`
  background-color: #fff;
  display: flex;
  flex-direction: column;

  margin: 20px 40px;
`;

const Home = () => {
  return (
    <HomeStyled>
      <Content />
      <Result />
    </HomeStyled>
  );
};

export default Home;
