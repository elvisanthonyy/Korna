import styled from "styled-components";

interface ButtonProps {
  variant?: string;
}

export const StyledButton = styled.button<ButtonProps>`
  background-color: ${(props) =>
    props.variant === "outline" ? "white" : "red"};
  border: ${(props) =>
    props.variant === "outline" ? "1px solid red" : "none"};
  height: 30px;
  margin-top: 50px;
`;

export const FancyButton = styled(StyledButton)`
  &:hover {
    background-color: green;
  }
  cursor: pointer;
  background-image: linear-gradient(to right, red, blue);
  border: none;
`;

export const SubmitButton = styled(StyledButton).attrs({
  type: "submit",
})`
  background-color: yellow;
`;
