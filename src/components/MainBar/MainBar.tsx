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
          postedAt="5d ago"
          imageUrl="/brick.jpeg"
          authColor="indigo"
        />
        <Card
          title="Welcome To Dream-Driven Development Where Nothing Works "
          description="Half-baked diagrams, featuresthat make no sense, Milkado architecture. You've lived it and it has a name..."
          authorDetails="In Level Up Coding by Attlia Vago"
          clapAmount="700"
          commentAmount="16"
          postedAt="4d ago"
          imageUrl="/lego.jpeg"
          authColor="pink"
        />
        <Card
          title="Future-Proof Careers in the Age of AI:What You Should Learn in 2026"
          description="What if I told you that by this time next year, you could land a job that pays over $100,000-and it won't be  threatend by AI?"
          authorDetails="In Prict Iswarya Writes"
          clapAmount="37k"
          commentAmount="165"
          postedAt="July 30"
          imageUrl="/oneWay.jpeg"
          authColor="blue"
        />
        <Card
          title="20 Java Collections Tricks Only Seniors Know"
          description="If you've been coding in Java for a while, you probably use List, Set, and Map every single day. But here's the thing most..."
          authorDetails="Clean Compiler"
          clapAmount="52"
          commentAmount="5"
          postedAt="3d ago"
          imageUrl="/java.jpeg"
          authColor="yellow"
        />
        <Card
          title="Want to see how insanely stupid AI really is? Ask ChatGPT to answer in just one word "
          description="Limiting output length AI isn't intelligient-it's chatty!"
          authorDetails="In The Generator by Jim AI Whisperer"
          clapAmount="2k"
          commentAmount="36"
          postedAt="3d ago"
          imageUrl="geene.webp"
          authColor="green"
        />
      </MainBarItemContainer>
    </MainBarContainer>
  );
};

export default MainBar;
