import Container from "react-bootstrap/esm/Container";
import { BrowserRouter, Routes, Router } from "react-router-dom";
import Header from "./components/header";
import ImgCover from "./components/imgCover";
const App = () => {
  return (
    <div>
      <Header />
      <ImgCover />
    </div>
  );
};

export default App;
