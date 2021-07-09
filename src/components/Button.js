import React from "react";
import styled from "styled-components";

const ButtonStyled = styled.button``;

const Button = ({ text, handleClick }) => {
  return <ButtonStyled onClick={() => handleClick()}> {text} </ButtonStyled>;
};

export default Button;
