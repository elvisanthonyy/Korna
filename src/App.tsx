import "./index.css";
import Nav from "./components/Nav/Nav";
import Main from "./components/Main/Main";
import MainBar from "./components/MainBar/MainBar";
import SideBar from "./components/SideBar/SideBar";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    font-family: "Roboto", sans-serif;
  }
`;

function App() {
  return (
    <>
      <div>
        <div>Hello</div>
        <GlobalStyle />
        <Nav />
        <MainBar />
        <SideBar />
      </div>
    </>
  );
}

export default App;
