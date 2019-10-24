import React, { useContext } from "react";
import { NavContext as Nav } from "COMPONENTS/Navigation/";
import Link from "COMPONENTS/Link/";
import { s } from "./";

export default function WatchNow(){

	// CONTEXT
	// --------------------------
	const { open } = useContext(Nav).state;

	// RENDER
	// --------------------------

	if(open) return null;
	else {
		return (
			<Link 
				className={ s.watch }
				destination="https://www.history.co.uk/shows/vikings">
				Watch Now
			</Link>
		);
	}
}// WatchNow
