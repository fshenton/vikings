import React from "react";
import ReactDOM from "react-dom";
import "SHARED/global.scss";
import "SHARED/reset.scss";
import App from "COMPONENTS/App/";
import { ClientProvider } from "COMPONENTS/Client/";

window.addEventListener("DOMContentLoaded", init);

function init(){
	ReactDOM.render(
		<ClientProvider>
			<App />
		</ClientProvider>,
		document.getElementById("app")
	);
}// init
