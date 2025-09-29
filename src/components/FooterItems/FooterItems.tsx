import { FooterItemContainer } from "./FooterItems.styles";

interface ChildProps {
  itemText: string;
}

const FooterItems = ({ itemText }: ChildProps) => {
  return <FooterItemContainer>{itemText}</FooterItemContainer>;
};

export default FooterItems;
