import React from "react";
import "./App.css";
import Root from "./Root";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./config/redux/store";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
  return (
    // TODO add providers here
    <>
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <BrowserRouter>
            <Root />
          </BrowserRouter>
        </Provider>
      </QueryClientProvider>
    </>
  );
}

export default App;
