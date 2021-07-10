import React from "react";
import styled from "styled-components";

import { useGlobalContext } from "../../../context/GlobalProvider";
import ByUpload from "./UploadByUpload";
import ByWebcam from "./UploadByWebcam";

const UploadStyled = styled.div`
  background-color: ${(props) => props.theme.colors.white};
  display: flex;
  justify-content: center;
`;

const Upload = () => {
  const { method } = useGlobalContext();

  return (
    <UploadStyled>
      {method.data === "upload" ? <ByUpload /> : <ByWebcam />}
    </UploadStyled>
  );
};

export default Upload;
