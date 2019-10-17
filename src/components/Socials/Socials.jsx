import React, { useContext } from "react";
import { RENDER, s, data } from "./";
import { NavContext as Nav } from "COMPONENTS/Navigation/";
import { ClientContext as Client } from "COMPONENTS/App/";

export default function Socials(){

	//CONTEXT
	//---------------------------
	const {
		isSmall
	} = useContext(Client).state;

	const {
		open
	} = useContext(Nav).state;

	// RENDER
	// ---------------------------------
	const links = data.map(RENDER.item);

	const isVisible = !isSmall || open;

	return (
		isVisible &&
			<ul className={ `${s.wrapper} ${open ? s.open : s.closed}` }>
				{ links }
			</ul>
	);
} //Socials
