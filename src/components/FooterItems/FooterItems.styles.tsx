import styled from "styled-components";

export const FooterItemContainer = styled.p`
  display: flex;
  justify-content: left;
  align-items: center;
  min-width: 40px;
  margin-right: 10px;
  margin: 0;
  padding: 0;
  font-size: 0.7em;
  height: 20px;
  cursor: pointer;
  color: #3b3b3b;
  transition: all 0.3s ease-in;
  &:hover {
    opacity: 0.6;
  }
`;
