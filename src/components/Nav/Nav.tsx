import {
  StyledNavigation,
  MenuContainer,
  StyledName,
  SearchContainer,
  SerachIcon,
  Search,
  LeftNavContainer,
  RightNavContainer,
  ProfileImage,
  NavEdit,
  EditText,
  NotificatioIcon,
} from "./Nav.styles";
import { MdMenu, MdSearch, MdEditSquare } from "react-icons/md";

import { HiOutlineBell } from "react-icons/hi2";
import { FaRegEdit } from "react-icons/fa";

export const Nav = () => {
  return (
    <StyledNavigation>
      <LeftNavContainer>
        <MenuContainer>
          <MdMenu />
        </MenuContainer>
        <StyledName>Medium</StyledName>
        <SearchContainer>
          <SerachIcon>
            <MdSearch />
          </SerachIcon>
          <Search>Search</Search>
        </SearchContainer>
      </LeftNavContainer>
      <RightNavContainer>
        <NavEdit>
          <FaRegEdit />
          <EditText>write</EditText>
        </NavEdit>
        <NotificatioIcon>
          <HiOutlineBell />
        </NotificatioIcon>
        <ProfileImage />
      </RightNavContainer>
    </StyledNavigation>
  );
};

export default Nav;
