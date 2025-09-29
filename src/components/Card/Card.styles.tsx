import styled from "styled-components";

interface Type {
  type?: string;
  name?: string;
  authColor?: string;
}

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: 210px;
  border-bottom: 1px solid gray;
  margin: 30px 0;
  position: relative;
  @media (max-width: 820px) {
    min-height: 170px;
  }
`;

export const MainCardContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: start;
  height: 90%;
`;

export const TitleDescriptionCont = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0;
`;

export const WriteUpAndIcons = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  margin: 0;
  min-height: 70%;
  width: 70%;
`;

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  flex-shrink: 0;
  flex-direction: column;
  aspect-ratio: 16 / 10;
  width: 25%;
  background-color: #d3d3d3;
  overflow: hidden;
`;

export const Image = styled.img`
  height: 110%;
`;

export const AuthorContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 0;
  width: 100%;
  height: 30px;
  margin-bottom: 0.8em;
  @media (max-width: 820px) {
  }
`;

export const Authordetails = styled.h4`
  height: 30px;
  display: flex;
  align-items: center;
  font-size: 0.9em;
  color: #3d3d3d;
  @media (max-width: 820px) {
    font-size: 0.6em;
  }
`;

export const AuthorLogo = styled.div<Type>`
  height: 20px;
  width: 25px;
  margin-right: 12px;
  background-color: ${(props) => props.authColor};
  @media (max-width: 820px) {
    height: 15px;
    width: 20px;
  }
`;

export const CardTitle = styled.h1`
  display: flex;
  word-break: break-word;
  align-items: start;
  margin: 0;
  width: 90%;
  font-size: 1.2em;
  font-weight: 800;
  color: #1b1b1b;
  margin-bottom: 0.8em;
  @media (max-width: 820px) {
    font-size: 0.7em;
  }
`;

export const CardDescription = styled.h3`
  display: flex;
  margin: 0;
  align-items: start;
  overflow: hidden;
  width: 90%;
  height: 40px;
  font-size: 0.9em;
  font-weight: 500;
  color: #424242;
  margin-bottom: 0;
  flex-shrink: 0;

  @media (max-width: 820px) {
    width: 80%;
    height: 20px;
    font-size: 0.6em;
  }
`;

export const CardIcons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0;
  width: 95%;
  height: 30px;

  @media (max-width: 820px) {
    position: absolute;
    width: 100%;
    bottom: 16px;
    left: 0;
    height: 15px;
  }
`;

export const LeftIcons = styled.div`
  display: flex;
  align-items: center;

  width: 250px;
  height: 100%;
  @media (max-width: 820px) {
    width: 70%;
  }
`;

export const RightIcons = styled(LeftIcons)`
  justify-content: end;
  @media (max-width: 820px) {
    width: 30%;
  }
`;

export const PostedAt = styled.h3`
  display: flex;
  min-width: fit-content;
  height: 40px;
  justify-content: center;
  align-items: center;
  font-size: 0.7em;
  margin: 0 8px;
  color: gray;
  @media (max-width: 820px) {
    font-size: 0.5em;
  }
`;

export const IconContainer = styled.div<Type>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 30px;
  min-width: 20px;
  margin-right: ${(props) => (props.type === "navigation" ? "4px" : "16px")};
  font-size: 0.8em;
  padding: 4px 12px;
  border-radius: 1em;
  transition: all 0.3s ease-in;
  cursor: pointer;
  &:hover {
    background-color: #f0eeee;
  }
  @media (max-width: 820px) {
    display: ${(props) => (props.name === "bookMark" ? "none" : "flex")};
    background-color: ${(props) =>
      props.type === "navigation" ? "15px" : "30px"};
    margin-right: ${(props) => (props.type === "navigation" ? "2px" : "8px")};
    height: 15px;
    flex-shrink: 0;
    width: 35px;
    padding: 3px;
  }
`;

export const IconText = styled.p`
  font-size: 0.8em;
  margin-right: 4px;
  color: #5e5e5e;
  margin-left: 6px;
  @media (max-width: 820px) {
    font-size: 0.6em;
  }
`;
