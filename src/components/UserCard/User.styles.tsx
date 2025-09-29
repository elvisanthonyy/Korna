import styled from "styled-components";

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

export const UserLeftImage = styled.div`
  display: flex;
  height: 40px;
  width: 40px;
  border-radius: 100%;
  background-color: #d8d8d8;
`;

export const UserMiddle = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  height: 90%;
`;

export const UserName = styled.h2`
  display: flex;
  align-items: center;
  height: 20px;
  width: 80%;
  font-size: 1em;
  margin: 0;
`;

export const UserDescription = styled.h4`
  display: flex;
  align-items: center;
  height: 30px;
  width: 80%;
  margin: 5px 0;
  font-size: 0.7em;
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
`;
