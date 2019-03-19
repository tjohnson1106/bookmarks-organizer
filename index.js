import React from "react";
import ReactDom from "react-dom";

import { Main } from "./src/Main";

import "./main.css";

const App = () => {
  return <Main />;
};

ReactDom.render(<App />, document.getElementById("app"));
