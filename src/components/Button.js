import React from "react";
import styled from "styled-components";

const ButtonStyled = styled.button`
  border: none;
  border-radius: 8px;
  padding: 20px;
  font-size: 28px;
  background-color: ${(props) => props.theme.colors.darkBlue};
  color: ${(props) => props.theme.colors.white};
`;

const Button = ({ text, handleClick }) => {
  return <ButtonStyled onClick={() => handleClick()}>{text}</ButtonStyled>;
};

export default Button;
