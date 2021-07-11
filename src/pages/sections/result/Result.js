import React from "react";
import styled from "styled-components";

import { useGlobalContext } from "../../../context/GlobalProvider";
import ImageResult from "./ImageResult";

const ResultStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  > .title {
    font-size: 52px;
    font-weight: bold;
    margin: 40px 0;
  }
`;

const Result = () => {
  const { image, apiResult, method } = useGlobalContext();

  return (
    <ResultStyled>
      <div className="title">Result</div>
      {method.name === null ? (
        <div className="placeholder">
          Upload and click scan to see the result
        </div>
      ) : (
        <div className="preview">
          {method.name === "upload" ? (
            <div>
              {apiResult.uploadResult ? (
                <ImageResult
                  image={method.uploadPreview}
                  coordinate={apiResult.uploadResult}
                  width={image.width}
                  height={image.height}
                />
              ) : (
                <div className="placeholder">click scan now to view result</div>
              )}
            </div>
          ) : (
            <div>
              {apiResult.webcamResult ? (
                <ImageResult
                  image={method.webcamPreview}
                  coordinate={apiResult.webcamResult}
                />
              ) : (
                <div classname="placeholder">click scan now to view result</div>
              )}
            </div>
          )}
        </div>
      )}
    </ResultStyled>
  );
};

export default Result;
