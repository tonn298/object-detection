import React, { useEffect } from "react";
import styled from "styled-components";

//get size of an image
const ImageResultStyled = styled.div`
  background-color: ${(props) => props.theme.colors.grey};
`;

const ImageResult = ({ image, coordinate }) => {
  useEffect(() => {
    // console.log("image", image);
    console.log("coordinate", coordinate);
  }, []);
  const drawFrame = () => {
    console.log("yooooo");
  };

  return (
    <ImageResultStyled>
      {coordinate.detected_objects === undefined ? (
        <div className="note">Nothig is in the picture</div>
      ) : null}
      <img src={image} alt="" />
    </ImageResultStyled>
  );
};

export default ImageResult;
