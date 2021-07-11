import React, { useEffect } from "react";
import styled from "styled-components";

//get size of an image
const ImageResultStyled = styled.div`
  background-color: ${(props) => props.theme.colors.grey};

  body {
    text-align: center;
    background: #f2f6f8;
  }
  .img {
    position: absolute;
  }

  > .container {
    display: inline-block;
    margin: 0 auto;
    background: black;
    position: relative;
    box-shadow: 0 5px 50px #333;
  }

  #canvas {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0px;
    left: 0px;
    background-color: rgba(255, 255, 255, 0.01);
  }
`;

const ImageResult = ({ image, coordinate, width, height }) => {
  useEffect(() => {
    if (coordinate.detected_objects === undefined) {
      alert("notthing is in the picture");
      return;
    }
    drawFrame(coordinate);
  });
  const drawFrame = (coordinateArray) => {
    const arrayOfCanvasCoordinate = coordinateArray.detected_objects;
    arrayOfCanvasCoordinate.map((each) => {
      var canvas = document.getElementById("canvas");
      if (canvas.getContext) {
        const draw = each.bounding_box;
        var ctx = canvas.getContext("2d");
        ctx.beginPath();
        ctx.moveTo(draw.left, draw.top);
        ctx.lineTo(draw.right, draw.top);
        ctx.lineTo(draw.right, draw.bottom);
        ctx.lineTo(draw.left, draw.bottom);
        ctx.font = "20px";
        ctx.fillText(each.name, draw.left, draw.top);
        ctx.closePath();
        ctx.stroke();
      }
    });
  };

  return (
    <ImageResultStyled className="RESULT-BITCHES">
      {coordinate.detected_objects === undefined ? (
        <div className="note">Nothig is in the picture</div>
      ) : null}
      <div className="container" style={{ width: width, height: height }}>
        <img src={image} alt="" className="img" />
        <canvas id="canvas" width={width} height={height}></canvas>
      </div>
    </ImageResultStyled>
  );
};

export default ImageResult;
