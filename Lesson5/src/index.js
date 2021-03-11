import React from "react";
import ReactDOM from "react-dom";
import Router from "./Router";
import "./main.css";
import { Provider } from "react-redux";
import store from "./store";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router />
    </Provider>
  </React.StrictMode>,
  document.getElementById("app")
);
