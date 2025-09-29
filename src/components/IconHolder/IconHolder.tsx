import type { IconType } from "react-icons";
import { IconContainer } from "./IconHolder.styles";

interface ChildProps {
  Icon: IconType;
  iconColor?: string;
}

const IconHolder = ({ Icon, iconColor }: ChildProps) => {
  return <IconContainer variant={iconColor}>{<Icon />}</IconContainer>;
};

export default IconHolder;
