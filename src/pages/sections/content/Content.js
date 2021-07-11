import React from "react";
import styled from "styled-components";

import { useGlobalContext } from "../../../context/GlobalProvider";
import Upload from "../upload/Upload";
import Button from "../../../components/Button";

const ContentStyled = styled.div`
  > .wrapper {
    > .title {
      margin-top: 30px;
      font-size: 50px;
      text-align: center;
      font-weight: bold;
    }
    > .buttonContainer {
      margin: 30px 0;
      display: flex;
      justify-content: space-around;
      padding-bottom: 30px;
      border-bottom: 1px solid ${(props) => props.theme.colors.darkGrey};
    }
  }
  > .placeholder {
    font-size: 28px;
    text-align: center;
    /* background-color: ${(props) => props.theme.colors.white}; */
    /* background-color: ${(props) => props.theme.colors.grey}; */

    margin: 20px 0;
    padding: 80px 0;
    border-bottom: 1px solid ${(props) => props.theme.colors.darkGrey};
  }
`;

const Content = () => {
  const { method } = useGlobalContext();

  return (
    <ContentStyled>
      <div className="wrapper">
        <div className="title">
          Detect objects in your Photo
          <br />
          By ...
          <br />
        </div>
        <div className="buttonContainer">
          <Button
            text="Upload a Photo"
            handleClick={() => method.setMethodForUpload("upload")}
          />
          <Button
            text="Take a Photo"
            handleClick={() => method.setMethodForUpload("webcam")}
          />
        </div>
      </div>
      {method.name === null ? (
        <div className="placeholder">
          Please select your method of upload above
        </div>
      ) : (
        <Upload />
      )}
    </ContentStyled>
  );
};

export default Content;
