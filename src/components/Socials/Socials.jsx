import React, { useContext } from "react";
import { RENDER, s, data } from "./";
// import { NavContext as Nav } from "COMPONENTS/Navigation/";
import { ClientContext as Client } from "COMPONENTS/App/";

export default function Socials(){

	//CONTEXT
	//---------------------------
	const {
		isSmall
	} = useContext(Client).state;

	//used for navmenu
	// const {
	// 	open
	// } = useContext(Nav).state;

	// RENDER
	// ---------------------------------
	const links = data.map(RENDER.item);

	//s.open / s.closed needed for navmenu?

	return (
		!isSmall && 
			<ul className={ `${s.wrapper}` }>
				{ links }
			</ul>
	);
} //Socials
