import React from "react";
import Header from "./components/primary/header/Header";
import MainContainer from "./MainContainer";
import { BrowserRouter } from "react-router-dom";
function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Header />
        <MainContainer />
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
