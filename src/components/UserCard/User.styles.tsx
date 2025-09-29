import styled from "styled-components";

interface ChildProps {
  userColor?: string;
}

export const UserCardContainer = styled.div`
  display: flex;
  align-items: top;
  justify-content: space-between;
  margin: 5px 0;
  width: 100%;
  height: 100px;
`;

export const UserLeft = styled.div`
  display: flex;
  justify-content: start;
  height: 90%;
  width: 13%;
`;

export const UserLeftImage = styled.div<ChildProps>`
  display: flex;
  height: 40px;
  width: 40px;
  border-radius: 100%;
  background-color: ${(props) => props.userColor};
`;

export const UserMiddle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  width: 60%;
  height: 90%;
`;

export const UserName = styled.h2`
  display: flex;
  align-items: center;
  height: 20px;
  width: 80%;
  font-size: 0.9em;
  margin: 0;
  font-weight: 900;
`;

export const UserDescription = styled.h4`
  display: flex;
  align-items: center;
  height: 30px;
  width: 80%;
  margin: 0;
  font-size: 0.6em;
  color: #2c2c2c;
`;

export const UserRight = styled.div`
  display: flex;
  justify-content: center;
  align-items: start;
  height: 90%;
  width: 20%;
`;

export const FollowButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 2em;
  height: 30px;
  width: 100%;
  border: 1px solid black;
  background-color: #ffffff;
  transition: all 0.3s ease-in;
  cursor: pointer;
  font-size: 0.6em;
  &:hover {
    background-color: black;
    color: white;
  }
`;
