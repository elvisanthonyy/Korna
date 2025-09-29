import {
  StaffPickCardContainer,
  StaffPickCardAuthor,
  StaffPickCardTitle,
  StaffPickCardPosted,
} from "./StaffPickCard.styles";

interface ChildProps {
  postedBy: string;
  pickTitle: string;
  postedAt: string;
}

const StaffPickCard = ({ postedBy, pickTitle, postedAt }: ChildProps) => {
  return (
    <StaffPickCardContainer>
      <StaffPickCardAuthor>{postedBy}</StaffPickCardAuthor>
      <StaffPickCardTitle>{pickTitle}</StaffPickCardTitle>
      <StaffPickCardPosted>{postedAt}</StaffPickCardPosted>
    </StaffPickCardContainer>
  );
};

export default StaffPickCard;
