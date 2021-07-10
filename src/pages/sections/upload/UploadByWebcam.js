import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import Webcam from "react-webcam";

import { useGlobalContext } from "../../../context/GlobalProvider";
import { objectDetectionRequest } from "../../../services/requests";

import Button from "../../../components/Button";

const WebcamStyled = styled.div`
  background-color: ${(props) => props.theme.colors.white};
  display: flex;
  flex-direction: column;
  align-items: center;
  > .captureButtonWrapper {
    margin: 20px;
  }
  > .previewImageWrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    > .previewTitle {
      font-size: 32px;
    }
    > .previewImage {
      min-height: 200px;
      max-height: 500px;
    }
    .previewMessage {
      min-height: 200px;
      text-align: center;
    }
  }
  > .scanButtonWrapper {
    margin: 20px;
  }
`;

const ByWebcam = () => {
  const { image, apiResult } = useGlobalContext();
  const webcamRef = useRef(null);
  const [webcamPreview, setWebcamPreview] = useState(null);

  const handleTakePhoto = () => {
    const screenShot = webcamRef.current.getScreenshot();
    image.setImageForQuery(screenShot);
    setWebcamPreview(screenShot);
  };

  const detectPhoto = async () => {
    console.log("yeet");
    const stringLength = image.base64.length;
    const shouldSend = image.base64.slice(23, stringLength);
    const test = await objectDetectionRequest(shouldSend);
  };

  return (
    <WebcamStyled>
      <Webcam ref={webcamRef} screenshotFormat="image/jpeg" />
      <div className="captureButtonWrapper">
        <Button
          text="Capture"
          handleClick={() => {
            handleTakePhoto();
          }}
        />
      </div>

      <div className="previewImageWrapper">
        <p className="previewTitle">Preview here</p>
        {!webcamPreview ? (
          <div className="previewMessage">
            {" "}
            no photo yet <br /> ...
          </div>
        ) : (
          <img className="previewImage" src={webcamPreview} />
        )}
      </div>
      <div className="scanButtonWrapper">
        <Button
          text="SCAN NOW"
          handleClick={() => {
            detectPhoto();
          }}
        />
      </div>
    </WebcamStyled>
  );
};

export default ByWebcam;
