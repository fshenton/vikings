import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App/";
import "SHARED/global.scss";
import "SHARED/reset.scss";
import "SHARED/fonts.scss";

window.addEventListener("DOMContentLoaded", init);

function init(){
	ReactDOM.render(
		<App />,
		document.getElementById("app")
	);
}// init
