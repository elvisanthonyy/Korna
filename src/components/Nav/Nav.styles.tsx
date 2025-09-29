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
`;

export const MenuContainer = styled.div`
  display: flex;
  height: 20px;
  width: 20px;
  align-items: center;
  font-size: 26px;
  color: #777777;
`;

export const StyledName = styled.h2`
  color: black;
  font-family: Georgia, "Times New Roman", Times, serif;
  margin: 0 8px;
`;

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  border-radius: 8px;
  padding: 0 10px;
  width: 150px;
  height: 30px;
  background-color: #f1f1f1;
`;

export const SerachIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20px;
  width: 20px;
  color: #777777;
  margin-right: 3px;
  font-size: 26px;
`;

export const Search = styled.h3`
  display: flex;
  height: 20px;
  width: fit;
  align-items: center;
  font-size: 12px;
  color: #777777;
`;
export const RightNavContainer = styled.div`
  display: flex;
  width: 300px;
  justify-content: space-between;
  align-items: center;
  width: 200px;
`;

export const ProfileImage = styled.div`
  height: 35px;
  width: 35px;
  border-radius: 50%;
  background-color: black;
`;

export const NavEdit = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 40px;
  font-size: 1.5em;
  margin-right: 3px;
  color: gray;
`;

export const EditText = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 40px;
  font-size: 0.6em;
`;

export const NotificatioIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  font-size: 1.7em;
  color: gray;
`;
