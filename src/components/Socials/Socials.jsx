import React from "react";
import { RENDER, s, data } from "./";

export default function Socials(props = {}){

	const { 
		navOpen: open = false
	} = props;

	let socialClass  = s.wrapper;

	// add styling if navigation is open
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
