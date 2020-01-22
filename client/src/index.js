import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store/index";
import App from "./App";
import "semantic-ui-css/semantic.min.css";

ReactDOM.render(
  <Provider store={store}>
    {/* <style>
      {`
      html, body {
        background-color": #F5F5F5 !important;
      }
      `}
    </style> */}
    <App />
  </Provider>,
  document.getElementById("root")
);
