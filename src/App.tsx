import React from "react";
import "./App.css";
import Root from "./Root";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    // TODO add providers here
    <>
      <BrowserRouter>
        <Root />
      </BrowserRouter>
    </>
  );
}

export default App;
