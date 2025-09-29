import { TopicStyledButton } from "./Topicbutton.styles";

interface ChildProps {
  text: string;
}

const TopicButton = ({ text }: ChildProps) => {
  return <TopicStyledButton>{text}</TopicStyledButton>;
};

export default TopicButton;
