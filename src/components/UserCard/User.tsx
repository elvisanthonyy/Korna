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

interface ChildProps {
  userName: string;
  description: string;
  userColor?: string;
}

const User = ({ userName, description, userColor }: ChildProps) => {
  return (
    <UserCardContainer>
      <UserLeft>
        <UserLeftImage userColor={userColor}></UserLeftImage>
      </UserLeft>
      <UserMiddle>
        <UserName>{userName}</UserName>
        <UserDescription>{description}</UserDescription>
      </UserMiddle>
      <UserRight>
        <FollowButton>Follow</FollowButton>
      </UserRight>
    </UserCardContainer>
  );
};

export default User;
