import styled from "styled-components";

interface Variant {
  variant?: string;
}

export const IconContainer = styled.div<Variant>`
  display: flex;
  flex-shrink: 0;
  justify-content: center;
  align-items: center;
  height: 25px;
  width: 25px;
  color: ${(props) => (props.variant === "yellow" ? "yellow" : "#5e5e5e")};
  font-size: 1.3em;
  cursor: pointer;
  @media (max-width: 820px) {
    height: 10px;
    width: 10px;
  }
`;
