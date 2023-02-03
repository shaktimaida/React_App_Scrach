import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import store from "./store";
import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement as any);

root.render(
  <Provider store={store}>
      <App />
  </Provider>
);