import React from "react";
import styled from "styled-components";

import { useGlobalContext } from "../../../context/GlobalProvider";

const ResultStyled = styled.div`
  background-color: ${(props) => props.theme.colors.white};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Result = () => {
  const { apiResult, method } = useGlobalContext();

  return (
    <ResultStyled>
      <div className="title">Result</div>
      {method.data === null ? (
        <div className="placeholder">
          Upload and click scan to see the result
        </div>
      ) : (
        <div className="preview">
          {method.data === "upload" ? (
            <div>upload result</div>
          ) : (
            <div> webcam result</div>
          )}
        </div>
      )}
    </ResultStyled>
  );
};

export default Result;
