import React, { useContext } from "react";
import Link from "COMPONENTS/Link/";
import { ClientContext as Client } from "COMPONENTS/App/";
import { s } from "./";

export default function HomePermalink(){

	const {
		isSmall
	} = useContext(Client).state;

	console.log(isSmall);

	return (
		!isSmall && 
			<Link
				className={ s.home } 
				destination="/"
				aria-label="Home."
			/>
	);
}// HomePermalink
