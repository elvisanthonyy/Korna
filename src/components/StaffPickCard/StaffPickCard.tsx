import {
  StaffPickCardContainer,
  StaffPickCardAuthor,
  StaffPickCardTitle,
  StaffPickCardPosted,
} from "./StaffPickCard.styles";

const StaffPickCard = () => {
  return (
    <StaffPickCardContainer>
      <StaffPickCardAuthor>
        In The Medium Handbook by Zulie @Medium
      </StaffPickCardAuthor>
      <StaffPickCardTitle>
        How this brand strategist uses Medium to explore ideas, repurpose
        context, and land clients
      </StaffPickCardTitle>
      <StaffPickCardPosted>2d ago</StaffPickCardPosted>
    </StaffPickCardContainer>
  );
};

export default StaffPickCard;
