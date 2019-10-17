import React, { useContext } from "react";
import Link from "COMPONENTS/Link/";
import { NavContext as Nav } from "COMPONENTS/Navigation/";
import { s } from "./";

export default function HomePermalink(){

	//CONTEXT
	//----------------------------

	const {
		open
	} = useContext(Nav).state;

	//RENDER
	//----------------------------

	const isVisible = !open;

	return (
		isVisible &&
			<Link
				className={ s.home } 
				destination="/"
				aria-label="Home."
			/>
	);
}// HomePermalink
