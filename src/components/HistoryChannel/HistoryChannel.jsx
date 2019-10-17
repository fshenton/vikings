import React, { useContext } from "react";
import Link from "COMPONENTS/Link/";
import { ClientContext as Client } from "COMPONENTS/App/";
import { NavContext as Nav } from "COMPONENTS/Navigation/";
import { s } from "./";

export default function HistoryChannel(){

	//CONTEXT
	//----------------------------

	const {
		isSmall
	} = useContext(Client).state;

	const {
		open
	} = useContext(Nav).state;

	//RENDER
	//----------------------------

	const isVisible = !isSmall && !open;

	return (
		isVisible &&	
			<Link
				className={ s.history }
				destination="https://www.history.co.uk/"
				aria-label="The History Channel"
			/>
	);
}// HistoryChannel
