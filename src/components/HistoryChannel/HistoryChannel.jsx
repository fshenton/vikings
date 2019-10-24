import React, { useContext } from "react";
import { NavContext as Nav } from "COMPONENTS/Navigation/";
import Link from "COMPONENTS/Link/";

export default function HistoryChannel(){

	// CONTEXT
	// -----------------------------

	const { open } = useContext(Nav);

	if(open) return null
	else {
		return (
			<Link
				destination="https://www.history.co.uk/"
				aria-label="The History Channel"
			/>
		);
	}
}// HistoryChannel
