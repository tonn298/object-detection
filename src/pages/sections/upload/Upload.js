import React from "react";
import styled from "styled-components";

import ByUpload from "./UploadByUpload";
import ByWebcam from "./UploadByWebcam";

const UploadStyled = styled.div`
  background-color: #00ff00;
`;

const Upload = ({ method }) => {
  return (
    <UploadStyled>
      {/* method: {method} */}
      {method === "upload" ? <ByUpload /> : <ByWebcam />}
    </UploadStyled>
  );
};

export default Upload;
