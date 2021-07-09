import React from "react";
import styled from "styled-components";

import { useGlobalContext } from "../../../context/GlobalProvider";

const ResultStyled = styled.div`
  background-color: #aaa;
`;

const Result = () => {
  const { apiResult } = useGlobalContext();

  return (
    <ResultStyled> result {`${apiResult.data}`} (process later) </ResultStyled>
  );
};

export default Result;
