import styled from "styled-components";

export const StaffPickCardContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding: 10px 0;
  flex-direction: column;
  width: 100%;
  min-height: 130px;
  margin-bottom: 0;
`;

export const StaffPickCardAuthor = styled.h3`
  display: flex;
  align-items: center;
  font-size: 0.7em;
  margin-bottom: 16px;
  margin: 0;
  width: 100%;
  height: 30px;
  color: #2e2e2e;
  font-weight: 600;
`;

export const StaffPickCardTitle = styled.h2`
  display: flex;
  align-items: center;
  width: 100%;
  align-items: center;
  margin: 0;
  height: 70px;
  font-size: 0.9em;
  margin-bottom: 12px;
  color: #3f3f3f;
  font-weight: 900;
`;

export const StaffPickCardPosted = styled.p`
  display: flex;
  align-items: center;
  width: 100%;
  align-items: center;
  margin: 0;
  height: 30px;
  font-size: 0.8em;
  color: #5c5c5c;
  font-weight: 500;
`;
