import IconHolder from "../IconHolder/IconHolder";
import {
  CardContainer,
  MainCardContainer,
  WriteUpAndIcons,
  ImageContainer,
  AuthorContainer,
  CardDescription,
  CardTitle,
  CardIcons,
  AuthorLogo,
  Authordetails,
  LeftIcons,
  RightIcons,
  PostedAt,
  IconContainer,
  IconText,
  Image,
} from "./Card.styles";

import { HiEllipsisHorizontal } from "react-icons/hi2";

interface ChildProps {
  title: string;
  description: string;
  authorDetails: String;
  clapAmount: string;
  commentAmount: string;
  postedAt: string;
  imageUrl: string;
  authColor: string;
}

import { FaComment } from "react-icons/fa";
import { MdOutlineBookmarkAdd } from "react-icons/md";
import { FaHandsClapping } from "react-icons/fa6";
import { IoRemoveCircleOutline } from "react-icons/io5";
import { RiSparklingFill } from "react-icons/ri";

const Card = ({
  title,
  description,
  authorDetails,
  clapAmount,
  commentAmount,
  postedAt,
  imageUrl,
  authColor,
}: ChildProps) => {
  return (
    <CardContainer>
      <AuthorContainer>
        <AuthorLogo authColor={authColor}></AuthorLogo>
        <Authordetails>{authorDetails}</Authordetails>
      </AuthorContainer>
      <MainCardContainer>
        <WriteUpAndIcons>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
          <CardIcons>
            <LeftIcons>
              <IconHolder iconColor="yellow" Icon={RiSparklingFill} />

              <PostedAt>{postedAt}</PostedAt>
              <IconContainer>
                <IconHolder Icon={FaHandsClapping} />
                <IconText>{clapAmount}</IconText>
              </IconContainer>
              <IconContainer>
                <IconHolder Icon={FaComment} />
                <IconText>{commentAmount}</IconText>
              </IconContainer>
            </LeftIcons>
            <RightIcons>
              <IconContainer type="navigation">
                <IconHolder Icon={IoRemoveCircleOutline} />
              </IconContainer>
              <IconContainer type="navigation" name="bookMark">
                <IconHolder Icon={MdOutlineBookmarkAdd} />
              </IconContainer>
              <IconContainer type="navigation">
                <IconHolder Icon={HiEllipsisHorizontal} />
              </IconContainer>
            </RightIcons>
          </CardIcons>
        </WriteUpAndIcons>
        <ImageContainer>
          <Image src={imageUrl} />
        </ImageContainer>
      </MainCardContainer>
    </CardContainer>
  );
};

export default Card;
