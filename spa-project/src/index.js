import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {MyContext} from "./contexts/PathContext";

ReactDOM.render(
  <React.StrictMode>
    <MyContext>
      <App />
    </MyContext>
  </React.StrictMode>,
  document.getElementById("root")
);


reportWebVitals();
