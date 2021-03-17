import React from "react";
import ReactDOM from "react-dom";
import Router from "./Router";
import "./main.css";
import { Provider } from "react-redux";
import { store, persistor } from "./store";
import { PersistGate } from "redux-persist/integration/react";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById("app")
);

if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("./sw.js")
    .then(() =>
      navigator.serviceWorker.ready.then((worker) => {
        worker.sync.register("syncdata");
      })
    )
    .catch((err) => console.log(err));
}
