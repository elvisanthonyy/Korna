import styled from "styled-components";

export const TopicStyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  width: fit-content;
  padding: 0 1.8em;
  background-color: #e9e9e9;
  border: none;
  border-radius: 2em;
  font-size: 0.7em;
  cursor: pointer;
  color: #202020;
  font-weight: 500;
  transition: all 0.3s ease-in;
  &:hover {
    opacity: 0.6;
  }
`;
