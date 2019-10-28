import React, { useContext } from "react";
import { NavContext as Nav } from "COMPONENTS/Navigation/";
import Link from "COMPONENTS/Link/";
import { s } from "./";

export default function HomePermalink(){
	
	// CONTEXT
	// -----------------------
	const { open } = useContext(Nav).state;

	// RENDER 
	// -----------------------

	if(open) return null;
	else {
		return (
			<Link
				className={ s.home } 
				destination="/"
				aria-label="Home."
			/>
		);
	}
}// HomePermalink
