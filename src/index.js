import React from "react";
import ReactDOM from "react-dom";
import Client from "COMPONENTS/Client/";
import "SHARED/global.scss";
import "SHARED/reset.scss";

window.addEventListener("DOMContentLoaded", init);

function init(){
	ReactDOM.render(
		<Client />, //Client wraps App
		document.getElementById("app")
	);
}// init
