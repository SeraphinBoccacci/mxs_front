import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { breakpoints } from "./constants/breakpoints";
//@ts-ignore
import ReactBreakpoints from "react-breakpoints";

ReactDOM.render(
  <ReactBreakpoints breakpoints={breakpoints}>
    <App />
  </ReactBreakpoints>,
  document.getElementById("root")
);
