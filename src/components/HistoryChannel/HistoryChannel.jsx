import React, { useContext } from "react";
import { NavContext as Nav } from "COMPONENTS/Navigation/";
import Link from "COMPONENTS/Link/";
import { s } from "./";

export default function HistoryChannel(){

	// CONTEXT
	// -----------------------------

	const { open } = useContext(Nav);


	// RENDER 
	// ------------------------------

	if(open) return null;
	else {
		return (
			<Link
				className={ s.history }
				destination="https://www.history.co.uk/"
				aria-label="The History Channel"
			/>
		);
	}
}// HistoryChannel
