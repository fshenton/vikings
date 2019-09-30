import React from "react";
import { RENDER, s, data } from "./";

export default function Socials(props = {}){

	// IF NAV OPEN, CHANGE STYLING
	const { 
		navOpen: open = false
	} = props;

	let socialClass  = s.wrapper;

	if(open){
		const navOpenClass = s.navOpen;
		socialClass        = `${socialClass} ${s.navOpen}`;
	}

	// RENDER
	// ---------------------------------
	const links = data.map(RENDER.item);

	return (
		<ul className={ socialClass }>
			{ links }
		</ul>
	);
} //Socials
