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
  ReadingListTextContainer,
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
          <StaffPickCard
            postedBy="In The Medium Handbook by Zulie @Medium"
            pickTitle=" How this brand strategist uses Medium to explore ideas, repurpose
                  context, and land clients"
            postedAt="2d ago"
          />
          <StaffPickCard
            postedBy="Jud Brewer MD PHD"
            pickTitle="From 'I Have to 'Get To'; How One Word Change Rewires Your Brain"
            postedAt="5d ago"
          />
          <StaffPickCard
            postedBy="Linh Nguyen"
            pickTitle="Golden Design Lessons From Tokyo Metro"
            postedAt="Sep 3"
          />
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

          <User
            userName="Dr.Derek Austin"
            description="AI Content Engineer | teach LLMs to think - Full..."
            userColor="blue"
          />
          <User
            userName="ITNEXT"
            description="Publication INEXT is a program for IT developers & software..."
            userColor="green"
          />
          <User
            userName="Oliver Foster"
            description="Pimarily proficent in the Java programming..."
            userColor="yellow"
          />
          <WhoToFollowSeeMore>See more suggestion</WhoToFollowSeeMore>
        </WhoToFollowContainer>
        <ReadingList>
          <ReadingListTitle>Reading List</ReadingListTitle>
          <ReadingListTextContainer>
            <ReadingListText>Click on the</ReadingListText>
            <ReadingListBookmarkIcon>
              <MdOutlineBookmarkAdd />
            </ReadingListBookmarkIcon>
            <ReadingListText>
              one any story to easily add it to your
            </ReadingListText>
            <ReadingListText>
              reading list or a custom list you can share.
            </ReadingListText>
          </ReadingListTextContainer>
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
