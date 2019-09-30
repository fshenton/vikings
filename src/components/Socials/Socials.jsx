import React, { useContext } from "react";
import { RENDER, s, data } from "./";
import { NavContext as Nav } from "COMPONENTS/Navigation/";

export default function Socials(props){

	//CONTEXT
	//---------------------------
	const {
		open
	} = useContext(Nav).state;

	// RENDER
	// ---------------------------------
	const links = data.map(RENDER.item);

	return (
		<ul className={ `${s.wrapper} ${open ? s.open : s.closed}` }>
			{ links }
		</ul>
	);
} //Socials
