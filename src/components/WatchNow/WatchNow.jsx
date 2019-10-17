import React, { useContext } from "react";
import Link from "COMPONENTS/Link/";
import { ClientContext as Client } from "COMPONENTS/App/";
import { s } from "./";

export default function WatchNow(){

	const {
		isSmall
	} = useContext(Client).state;

	return (
		!isSmall &&
			<Link 
				className={ s.watch }
				destination="https://www.history.co.uk/shows/vikings">
				Watch Now
			</Link>
	);
}// WatchNow
