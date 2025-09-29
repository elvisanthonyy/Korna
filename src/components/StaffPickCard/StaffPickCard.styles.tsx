import styled from "styled-components";

export const StaffPickCardContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding: 10px 0;
  flex-direction: column;
  width: 100%;
  height: 130px;
  margin-bottom: 0;
`;

export const StaffPickCardAuthor = styled.h3`
  display: flex;
  align-items: center;
  font-size: 0.8em;
  margin: 0;
  width: 100%;
  height: 30px;
  color: #363636;
`;

export const StaffPickCardTitle = styled.h2`
  display: flex;
  align-items: center;
  width: 100%;
  align-items: center;
  margin: 0;
  height: 70px;
  font-size: 1em;
`;

export const StaffPickCardPosted = styled.p`
  display: flex;
  align-items: center;
  width: 100%;
  align-items: center;
  margin: 0;
  height: 30px;
  font-size: 0.6em;
  color: gray;
`;
