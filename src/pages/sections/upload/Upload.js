import React from "react";
import styled from "styled-components";
// TODOS add loading when scan

import { useGlobalContext } from "../../../context/GlobalProvider";
import ByUpload from "./UploadByUpload";
import ByWebcam from "./UploadByWebcam";

const UploadStyled = styled.div`
  display: flex;
  justify-content: center;
`;

const Upload = () => {
  const { method } = useGlobalContext();

  return (
    <UploadStyled>
      {method.name === "upload" ? <ByUpload /> : <ByWebcam />}
    </UploadStyled>
  );
};

export default Upload;
