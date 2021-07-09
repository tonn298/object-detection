import React, { useState } from "react";
import styled from "styled-components";

import Upload from "../upload/Upload";

const ContentStyled = styled.div`
  > .holder {
    background-color: #00ff00;
  }
`;

const Content = () => {
  const [uploadMethod, setUploadMethod] = useState(null);
  const [isShowUploadSection, setIsShowUploadSection] = useState(false);

  const handleSetMethod = (name) => {
    setUploadMethod(name);

    // if (name === null) {
    //   setIsShowUploadSection(false);
    //   return;
    // }

    setIsShowUploadSection(true);
  };

  return (
    <ContentStyled>
      <div className="title">
        upload item by
        <button onClick={() => handleSetMethod("upload")}>by upload</button>
        <button onClick={() => handleSetMethod("webcam")}>by webcam</button>
        {/* <button onClick={() => handleSetMethod(null)}>back</button> */}
      </div>
      {/*  */}
      {isShowUploadSection ? (
        <Upload method={uploadMethod} />
      ) : (
        <div className="holder">Please select your method of uploading</div>
      )}
    </ContentStyled>
  );
};

export default Content;
