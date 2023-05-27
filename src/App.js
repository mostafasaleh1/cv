import React from "react";
import Header from "./components/header/Header";
import { BrowserRouter } from "react-router-dom";
function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
