import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import './styles/app.css';
import registerServiceWorker from "./registerServiceWorker";
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(<App />, document.getElementById("app"));
registerServiceWorker();
