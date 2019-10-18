import React from "react";
import App from "COMPONENTS/App/";
import { ClientProvider } from "./";

export default function Client(){

	return (
		<ClientProvider>
			<App />
		</ClientProvider>
	);
}//Client
