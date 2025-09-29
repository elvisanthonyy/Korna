import IconHolder from "../IconHolder/IconHolder";
import {
  CardContainer,
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
} from "./Card.styles";

import { HiEllipsisHorizontal } from "react-icons/hi2";

interface ChildProps {
  title: string;
  description: string;
  authorDetails: String;
  clapAmount: string;
  commentAmount: string;
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
}: ChildProps) => {
  return (
    <CardContainer>
      <WriteUpAndIcons>
        <AuthorContainer>
          <AuthorLogo></AuthorLogo>
          <Authordetails>{authorDetails}</Authordetails>
        </AuthorContainer>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
        <CardIcons>
          <LeftIcons>
            <IconHolder Icon={RiSparklingFill} />

            <PostedAt>5d ago</PostedAt>
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
            <IconHolder Icon={IoRemoveCircleOutline} />
            <IconHolder Icon={MdOutlineBookmarkAdd} />
            <IconHolder Icon={HiEllipsisHorizontal} />
          </RightIcons>
        </CardIcons>
      </WriteUpAndIcons>
      <ImageContainer></ImageContainer>
    </CardContainer>
  );
};

export default Card;
