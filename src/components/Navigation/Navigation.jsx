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

	const isOpen = open ? s.open : "";

	return (
		<nav 
			className={ `${s.wrapper} ${isOpen}` }
		>
			<NavToggle />
			<ul 
				id="navigation__links"
				className={ s.container }
				aria-expanded={ open }
			>
				{ links }
			</ul>
			<Socials className={ s.socials }/>
		</nav>
	);
}// Navigation
