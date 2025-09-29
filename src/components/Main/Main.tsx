import { MainContainer } from "./Main.styles";
import MainBar from "../MainBar/MainBar";
import SideBar from "../SideBar/SideBar";

const Main = () => {
  return (
    <MainContainer>
      <MainBar />
      <SideBar />
    </MainContainer>
  );
};

export default Main;
