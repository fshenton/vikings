import React from "react";
import ReactDOM from "react-dom";
import App from "COMPONENTS/App/";
import { ClientProvider } from "COMPONENTS/Client/";
import "SHARED/global.scss";
import "SHARED/reset.scss";

window.addEventListener("DOMContentLoaded", init);

function init(){
	ReactDOM.render(
		<ClientProvider>
			<App />
		</ClientProvider>,
		document.getElementById("app")
	);
}// init
