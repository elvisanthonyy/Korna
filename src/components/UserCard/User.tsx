import {
  UserCardContainer,
  UserLeft,
  UserLeftImage,
  UserMiddle,
  UserName,
  UserDescription,
  UserRight,
  FollowButton,
} from "./User.styles";

const User = () => {
  return (
    <UserCardContainer>
      <UserLeft>
        <UserLeftImage></UserLeftImage>
      </UserLeft>
      <UserMiddle>
        <UserName>Dr.Derek Austin</UserName>
        <UserDescription>
          AI Content Engineer | teach LLMs to think - Full...
        </UserDescription>
      </UserMiddle>
      <UserRight>
        <FollowButton>Follow</FollowButton>
      </UserRight>
    </UserCardContainer>
  );
};

export default User;
