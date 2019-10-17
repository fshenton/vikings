import React, { useContext } from "react";
import Socials from "COMPONENTS/Socials/";
import NavToggle from "COMPONENTS/NavToggle";
import { 
	RENDER, 
	NavContext as Nav,
	s,
	data
} from "./";

export default function Navigation(){

	//CONTEXT
	//---------------------------
	const {
		open
	} = useContext(Nav).state;

	//RENDER
	//----------------------------
	const links = data.map(RENDER.item);

	return (
		<nav className={ s.wrapper }>
			<NavToggle />
			<ul 
				id="navigation__links"
				className={ s.container }
				aria-expanded={ open }
			>
				{ links }
			</ul>
			<Socials />
		</nav>
	);
}// Navigation
