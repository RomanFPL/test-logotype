import React from "react";
import "./App.css";
import Root from "./Root";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./config/redux/store";

function App() {
  return (
    // TODO add providers here
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Root />
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
