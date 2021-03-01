import "./index.css";

import React from "react";
// @ts-ignore
import ReactBreakpoints from "react-breakpoints";
import ReactDOM from "react-dom";

import App from "./App";
import { breakpoints } from "./constants/breakpoints";

ReactDOM.render(
  <ReactBreakpoints breakpoints={breakpoints}>
    <App />
  </ReactBreakpoints>,
  document.getElementById("root")
);
