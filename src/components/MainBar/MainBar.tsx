import {
  MainBarContainer,
  MainBarItemContainer,
  MainBarHeading,
  ForYou,
  StyledFeatured,
} from "./MainBar.styles";

import Card from "../Card/Card";

const MainBar = () => {
  return (
    <MainBarContainer>
      <MainBarItemContainer>
        <MainBarHeading>
          <ForYou>For You</ForYou>
          <StyledFeatured>Featured</StyledFeatured>
        </MainBarHeading>
        <Card
          title="How Knowledge of Languages is More Valueble Than Ever on the Job Market "
          description="It's not a skill issue, but a marketing issue"
          authorDetails="In Language Lab by Benben"
          clapAmount="1.2k"
          commentAmount="45"
        />
        <Card
          title="How Knowledge of Languages is More Valueble Than Ever on the Job Market "
          description="It's not a skill issue, but a marketing issue"
          authorDetails="In Language Lab by Benben"
          clapAmount="1.2k"
          commentAmount="45"
        />
        <Card
          title="How Knowledge of Languages is More Valueble Than Ever on the Job Market "
          description="It's not a skill issue, but a marketing issue"
          authorDetails="In Language Lab by Benben"
          clapAmount="1.2k"
          commentAmount="45"
        />
        <Card
          title="How Knowledge of Languages is More Valueble Than Ever on the Job Market "
          description="It's not a skill issue, but a marketing issue"
          authorDetails="In Language Lab by Benben"
          clapAmount="1.2k"
          commentAmount="45"
        />
        <Card
          title="How Knowledge of Languages is More Valueble Than Ever on the Job Market "
          description="It's not a skill issue, but a marketing issue"
          authorDetails="In Language Lab by Benben"
          clapAmount="1.2k"
          commentAmount="45"
        />
      </MainBarItemContainer>
    </MainBarContainer>
  );
};

export default MainBar;
