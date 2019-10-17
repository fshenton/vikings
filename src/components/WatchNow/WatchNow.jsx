import React, { useContext } from "react";
import Link from "COMPONENTS/Link/";
import { ClientContext as Client } from "COMPONENTS/App/";
import { NavContext as Nav } from "COMPONENTS/Navigation/";
import { s } from "./";

export default function WatchNow(){

	//CONTEXT
	//------------------------------

	const {
		isSmall
	} = useContext(Client).state;

	const {
		open
	} = useContext(Nav).state;

	//RENDER
	//------------------------------

	const isVisible = !isSmall && !open;

	return (
		isVisible &&
			<Link 
				className={ s.watch }
				destination="https://www.history.co.uk/shows/vikings">
				Watch Now
			</Link>
	);
}// WatchNow
