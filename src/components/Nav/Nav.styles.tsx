import styled from "styled-components";

export const StyledNavigation = styled.nav`
  position: fixed;
  box-sizing: border-box;
  display: flex;
  padding: 0 2%;
  justify-content: space-between;
  align-items: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
  border-bottom: 1px solid #c7c7c7;
  background-color: white;
  z-index: 10;
`;

export const LeftNavContainer = styled.div`
  display: flex;

  justify-content: space-between;
  align-items: center;
  width: 320px;
  @media (max-width: 820px) {
    width: 90%;
  }
`;

export const MenuContainer = styled.div`
  display: flex;
  height: 20px;
  width: 20px;
  align-items: center;
  justify-content: start;
  font-size: 26px;
  color: #777777;
  cursor: pointer;
`;

export const StyledName = styled.h2`
  color: black;
  font-family: Georgia, "Times New Roman", Times, serif;
  margin: 0 8px;
  @media (max-width: 820px) {
    font-size: 1.6em;
    margin-right: auto;
  }
`;

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  border-radius: 8px;
  padding: 0 10px;
  width: 150px;
  height: 30px;
  background-color: #f1f1f1;
  @media (max-width: 820px) {
    justify-content: end;
    width: 40px;
    height: 40px;
    background-color: white;
  }
`;

export const SearchIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20px;
  width: 20px;
  color: #777777;
  margin-right: 3px;
  font-size: 26px;
  @media (max-width: 820px) {
    width: 30px;
    font-size: 4em;
  }
`;

export const Search = styled.h3`
  display: flex;
  height: 20px;
  width: fit;
  align-items: center;
  font-size: 12px;
  color: #777777;
  @media (max-width: 820px) {
    display: none;
  }
`;
export const RightNavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 260px;
  @media (max-width: 820px) {
    justify-content: end;
    width: 15%;
    height: 50px;
    margin-left: 20px;
  }
`;

export const ProfileImage = styled.div`
  height: 35px;
  width: 35px;
  border-radius: 50%;
  background-color: black;
`;

export const NavEdit = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 80px;
  height: 40px;
  font-size: 1.4em;
  margin-right: 3px;
  color: #5e5e5e;
  padding: 0 16px;
  border-radius: 1em;
  transition: all 0.5s ease-in;
  &:hover {
    background-color: #f0eeee;
  }
  @media (max-width: 820px) {
    display: none;
  }
`;

export const EditText = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 40px;
  font-size: 0.6em;
  color: #5e5e5e;
`;

export const NotificatioIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  font-size: 1.6em;
  padding: 8px;
  border-radius: 100%;
  color: #5e5e5e;
  cursor: pointer;
  transition: all 0.5s ease-in;
  &:hover {
    background-color: #f0eeee;
  }
  @media (max-width: 820px) {
    display: none;
  }
`;
