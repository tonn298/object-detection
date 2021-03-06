import React, { useRef } from "react";
import styled from "styled-components";
import Webcam from "react-webcam";

import { useGlobalContext } from "../../../context/GlobalProvider";
import { objectDetectionRequest } from "../../../services/requests";

import Button from "../../../components/Button";

const WebcamStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 32px;
  border-bottom: 1px solid ${(props) => props.theme.colors.darkGrey};
  > .captureButtonWrapper {
    margin: 20px;
  }
  > .previewImageWrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    > .previewTitle {
      font-size: 52px;
      font-weight: bold;
      margin: 40px 0;
    }
    > .previewImage {
      min-height: 200px;
      box-shadow: 0 5px 50px #333;

      /* max-height: 500px; */
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
  const { image, apiResult, method } = useGlobalContext();
  const webcamRef = useRef(null);

  const handleTakePhoto = () => {
    const screenShot = webcamRef.current.getScreenshot();
    image.setImageForQuery(screenShot);
    method.setWebcamPreview(screenShot);
    apiResult.setWebcamResult(null);
  };

  const detectPhoto = async () => {
    if (image.base64 === null) {
      alert("please take a photo first");
      return;
    }
    const imageProperty = document.getElementById("previewImage");
    image.height = imageProperty.height;
    image.width = imageProperty.width;

    const dataPrep = prepBase64Data();
    const apiResponse = await objectDetectionRequest(dataPrep);
    apiResult.setWebcamResult(apiResponse);
  };

  const prepBase64Data = () => {
    const stringLength = image.base64.length;
    const dataPrep = image.base64.slice(23, stringLength);
    return dataPrep;
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
        {!method.webcamPreview ? (
          <div className="previewMessage">
            {" "}
            no photo yet <br /> ...
          </div>
        ) : (
          <img
            className="previewImage"
            src={method.webcamPreview}
            alt=""
            id="previewImage"
          />
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
