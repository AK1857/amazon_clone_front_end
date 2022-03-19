import React from "react";
import ReactDom from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import store from "./components/redux/stores";

ReactDom.render(<App />, document.getElementById("root"));
