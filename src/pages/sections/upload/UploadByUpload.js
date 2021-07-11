import React from "react";
import styled from "styled-components";

import { useGlobalContext } from "../../../context/GlobalProvider";
import { objectDetectionRequest } from "../../../services/requests";
import Button from "../../../components/Button";

const ByUploadStyled = styled.div`
  /* background-color: ${(props) => props.theme.colors.white}; */
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 32px;
  border-bottom: 1px solid ${(props) => props.theme.colors.darkGrey};
  #upload {
    display: none;
  }
  > .uploadWrapper {
    > .uploadMessage {
      font-size: 30px;
      align-content: center;
      border: none;
      background-color: ${(props) => props.theme.colors.darkBlue};
      color: ${(props) => props.theme.colors.white};
      padding: 20px 32px;
      border-radius: 8px;
      margin-bottom: 30px;
      > .uploadPicture {
        padding-left: 30px;
        width: 30px;
      }
    }
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
  > .scanButton {
    margin: 20px;
  }
`;

const ByUpload = () => {
  const { image, apiResult, method } = useGlobalContext();

  const convertTo64base = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        let result = fileReader.result;
        let pureBase64Code = result.split(",")[1];
        resolve(pureBase64Code);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  const handleUploadImage = async (e) => {
    const base64 = await convertTo64base(e.target.files[0]);
    image.setImageForQuery(base64);
    method.setUploadPreview(URL.createObjectURL(e.target.files[0]));
    apiResult.setUploadResult(null);
  };

  const detectPhoto = async () => {
    if (image.base64 === null) {
      alert("please upload a photo first");
      return;
    }
    const apiResponse = await objectDetectionRequest(image.base64);
    apiResult.setUploadResult(apiResponse);
  };
  return (
    <ByUploadStyled>
      <label htmlFor="upload" className="uploadWrapper">
        <div className="uploadMessage">
          {method.uploadPreview
            ? "upload a new one"
            : "Click here to upload an image"}
        </div>
        <input type="file" id="upload" onChange={(e) => handleUploadImage(e)} />
      </label>

      <div className="previewImageWrapper">
        <p className="previewTitle">Preview here</p>

        {!method.uploadPreview ? (
          <div className="previewMessage">
            {" "}
            no photo yet <br /> ...
          </div>
        ) : (
          <img className="previewImage" src={method.uploadPreview} alt="" />
        )}
      </div>
      <div className="scanButton">
        <Button text="SCAN NOW" handleClick={() => detectPhoto()} />
      </div>
    </ByUploadStyled>
  );
};

export default ByUpload;
