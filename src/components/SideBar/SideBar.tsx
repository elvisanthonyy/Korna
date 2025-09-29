import {
  SideBarContainer,
  SideBarItems,
  StaffPickConatainer,
  StaffPickHeading,
  StaffSeeFull,
  RecommendedTopicsContainer,
  TopicsContainer,
  TopicsTitle,
  TopicsMoreTopics,
  WhoToFollowContainer,
  WhoToFollowTitle,
  WhoToFollowSeeMore,
  ReadingList,
  ReadingListTitle,
  ReadingListText,
  ReadingListBookmarkIcon,
  SideBarFooter,
} from "./SideBar.styles";
import StaffPickCard from "../StaffPickCard/StaffPickCard";
import TopicButton from "../TopicButton/TopicButton";
import User from "../UserCard/User";
import { MdOutlineBookmarkAdd } from "react-icons/md";
import FooterItems from "../FooterItems/FooterItems";

const SideBar = () => {
  return (
    <SideBarContainer>
      <SideBarItems>
        <StaffPickConatainer>
          <StaffPickHeading>Staff Picks</StaffPickHeading>
          <StaffPickCard />
          <StaffPickCard />
          <StaffPickCard />
          <StaffSeeFull>See full list</StaffSeeFull>
        </StaffPickConatainer>
        <RecommendedTopicsContainer>
          <TopicsTitle>Recommended topics</TopicsTitle>
          <TopicsContainer>
            <TopicButton text="Data Science" />
            <TopicButton text="React" />
            <TopicButton text="Coding" />
            <TopicButton text="Mental Health" />
            <TopicButton text="UX" />
            <TopicButton text="Python" />
            <TopicButton text="Productivity" />
          </TopicsContainer>
          <TopicsMoreTopics>See more topics</TopicsMoreTopics>
        </RecommendedTopicsContainer>
        <WhoToFollowContainer>
          <WhoToFollowTitle>Who to follow</WhoToFollowTitle>

          <User />
          <User />
          <User />
          <WhoToFollowSeeMore>See more suggestion</WhoToFollowSeeMore>
        </WhoToFollowContainer>
        <ReadingList>
          <ReadingListTitle>Reading List</ReadingListTitle>
          <ReadingListText>
            Click on the
            <ReadingListBookmarkIcon>
              <MdOutlineBookmarkAdd />
            </ReadingListBookmarkIcon>
            one any story to easily add it to your reading list or a custom list
            you can share.
          </ReadingListText>
        </ReadingList>
        <SideBarFooter>
          <FooterItems itemText="Help" />
          <FooterItems itemText="Status" />
          <FooterItems itemText="About" />
          <FooterItems itemText="Careers" />
          <FooterItems itemText="Press" />
          <FooterItems itemText="Blog" />
          <FooterItems itemText="Privacy" />
          <FooterItems itemText="Rules" />
          <FooterItems itemText="Terms" />
          <FooterItems itemText="Help" />
          <FooterItems itemText="Text to speech" />
        </SideBarFooter>
      </SideBarItems>
    </SideBarContainer>
  );
};

export default SideBar;
