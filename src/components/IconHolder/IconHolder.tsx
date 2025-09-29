import type { IconType } from "react-icons";
import { IconContainer } from "./IconHolder.styles";

interface ChildProps {
  Icon: IconType;
}

const IconHolder = ({ Icon }: ChildProps) => {
  return <IconContainer>{<Icon />}</IconContainer>;
};

export default IconHolder;
