import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  align-items: center;

  width: 100%;
  min-height: 280px;
  height: fit-content;
  border-bottom: 1px solid gray;
  margin: 30px 0;
`;

export const WriteUpAndIcons = styled.div`
  display: flex;
  flex-direction: column;
  height: 70%;
  width: 80%;
`;

export const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
  height: 130px;
  background-color: #d3d3d3;
`;

export const AuthorContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 0;
  width: 90%;
  height: 30px;
  margin-bottom: 0.8em;
`;

export const Authordetails = styled.h4`
  height: 30px;
  display: flex;
  align-items: center;
  font-size: 0.9em;
  color: #3d3d3d;
`;

export const AuthorLogo = styled.div`
  height: 20px;
  width: 25px;
  margin-right: 12px;
  background-color: #ff506d;
`;

export const CardTitle = styled.h1`
  display: flex;
  align-items: center;
  margin: 0;
  width: 90%;
  min-height: 60px;
  max-height: 80px;
  font-size: 1.2em;
  font-weight: 800;
  color: #1b1b1b;
  margin-bottom: 0.3em;
`;

export const CardDescription = styled.h3`
  display: flex;
  margin: 0;
  align-items: center;
  width: 90%;
  min-height: 30px;
  font-size: 0.9em;
  font-weight: 500;
  color: #424242;
  margin-bottom: 2em;
  flex-shrink: 0;
`;

export const CardIcons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 60px;
  margin: 0;
  width: 90%;
  height: 30px;
`;

export const LeftIcons = styled.div`
  display: flex;
  align-items: center;
  width: 250px;
  height: 100%;
`;

export const RightIcons = styled(LeftIcons)`
  justify-content: end;
`;

export const PostedAt = styled.h3`
  display: flex;
  min-width: fit-content;
  height: 40px;
  justify-content: center;
  align-items: center;
  font-size: 0.7em;
  margin-right: 2em;
  color: gray;
`;

export const IconContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 30px;
  width: 50px;
  margin-right: 20px;
  font-size: 0.8em;
`;

export const IconText = styled.p`
  font-size: 0.8em;
  color: gray;
`;
