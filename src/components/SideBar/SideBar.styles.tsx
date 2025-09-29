import styled from "styled-components";
import { MainBarItemContainer } from "../MainBar/MainBar.styles";
import { UserDescription } from "../UserCard/User.styles";

export const SideBarContainer = styled.div`
  position: fixed;
  overflow-y: scroll;
  top: 60px;
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 28%;
  height: 91%;
  @media (max-width: 700px) {
    display: none;
  }
`;

export const SideBarItems = styled(MainBarItemContainer)`
  width: 80%;
  margin-bottom: 40px;
  height: fit-content;
`;

export const StaffPickConatainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  width: 100%;
  height: 600px;
`;

export const StaffPickHeading = styled.h3`
  margin: 0;
  margin-top: 50px;
  display: flex;
  align-items: center;
  width: 100%;
  height: 20px;
  font-size: 1em;
`;

export const StaffSeeFull = styled.p`
  display: flex;
  flex-shrink: 0;
  align-items: center;
  width: 100%;
  height: 30px;
  font-size: 0.6em;
  color: gray;
`;

export const RecommendedTopicsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 400px;
`;

export const TopicsContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  grid-template-rows: 10px 10px 10px;
  column-gap: 0px;
  place-items: start;
  row-gap: 50px;
  width: 90%;
  height: 170px;
  margin: 0;
`;

export const TopicsTitle = styled.h2`
  display: flex;
  align-items: center;
  width: 100%;
  height: 20px;
  font-size: 1em;
`;

export const TopicsMoreTopics = styled(StaffSeeFull)`
  height: 20px;
`;

export const WhoToFollowContainer = styled(StaffPickConatainer)`
  height: 400px;
`;

export const WhoToFollowTitle = styled(StaffPickHeading)`
  margin-bottom: 2em;
`;

export const WhoToFollowSeeMore = styled(StaffSeeFull)``;

export const ReadingList = styled(StaffPickConatainer)`
  height: 130px;
`;

export const ReadingListTitle = styled(StaffPickHeading)`
  margin-bottom: 3em;
  margin: 0;
`;

export const ReadingListText = styled(UserDescription)`
  font-size: 0.8em;
  margin-top: 3em;
`;

export const ReadingListBookmarkIcon = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px;
  width: 30px;
`;

export const SideBarFooter = styled.span`
  display: flex;
  flex-wrap: wrap;
  row-gap: 0;
  align-items: center;
  flex-shrink: 0;
  height: 80px;
  width: 100%;
`;
