import React, { useContext } from "react";
import { RENDER, s, data } from "./";
// import { NavContext as Nav } from "COMPONENTS/Navigation/";

export default function Socials(){

	
		//used for navmenu
	//CONTEXT
	//---------------------------
	// console.log(Nav);

	// const {
	// 	open
	// } = useContext(Nav).state;

	// RENDER
	// ---------------------------------
	const links = data.map(RENDER.item);

	//s.open / s.closed needed for navmenu?

	return (
		<ul className={ `${s.wrapper}` }>
			{ links }
		</ul>
	);
} //Socials
