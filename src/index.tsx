import React from "react";
import ReactDOM from "react-dom";
import "./styles.scss";
import AppHtml from "./workshop/AppHtml";
import Countdown from "./workshop-solution/Countdown";
import AppComponentes from "./workshop-solution/AppComponents";

const rootElement = document.getElementById("root");
ReactDOM.render(<AppComponentes />, rootElement);
