import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import * as serviceWorker from "./serviceWorker";
import userReducer from "./store/reducers/Reducer";
import App from "./App";
import { Provider } from "react-redux";
import { createStore } from "redux";
import "./index.css";

const store = createStore(userReducer);
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
serviceWorker.unregister();
