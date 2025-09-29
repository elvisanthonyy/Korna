import styled from "styled-components";

export const MainBarContainer = styled.main`
  margin-top: 40px;
  padding-top: 40px;
  width: 72%;
  min-height: 100dvh;
  display: flex;
  justify-content: center;
  border: 1px solid #c7c7c7;
  @media (max-width: 700px) {
    width: 100%;
  }
`;

export const MainBarItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 70%;
  min-height: 90dvh;
  @media (max-width: 700px) {
    width: 85%;
  }
`;

export const MainBarHeading = styled.div`
  display: flex;
  margin-bottom: 28px;
  height: 50px;
  width: 100%;
`;

export const ForYou = styled.div`
  display: flex;
  align-items: center;
  font-size: 0.9em;
  font-weight: 700;
  color: #4b4b4b;
  height: 50px;
  min-width: fit-content;
  border-bottom: 2px solid gray;
  cursor: pointer;
`;

export const StyledFeatured = styled.div`
  display: flex;
  cursor: pointer;
  align-items: center;
  height: 50px;
  width: 100%;
  color: #4b4b4b;
  font-size: 0.9em;
  padding-left: 3em;
  border-bottom: 1px solid #c0c0c0;
  transition: all 0.5s ease-in;
  &:hover {
    opacity: 0.5;
  }
`;
