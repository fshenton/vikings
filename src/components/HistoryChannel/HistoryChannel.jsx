import React, { useContext } from "react";
import Link from "COMPONENTS/Link/";
import { ClientContext as Client } from "COMPONENTS/App/";
import { s } from "./";

export default function HistoryChannel(){

	const {
		isSmall
	} = useContext(Client).state;

	return (
		!isSmall &&	
			<Link
				className={ s.history }
				destination="https://www.history.co.uk/"
				aria-label="The History Channel"
			/>
	);
}// HistoryChannel
