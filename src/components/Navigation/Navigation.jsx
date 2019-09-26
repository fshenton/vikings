import React, { useContext } from "react";
import Socials from "COMPONENTS/Socials/";
import NavToggle from "COMPONENTS/NavToggle";
import { 
	RENDER, 
	NavContext as Nav
} from "./";
import { s } from "./";

export default function Navigation(){

	//CONTEXT
	//---------------------------
	const {
		open
	} = useContext(Nav).state;


	//RENDER
	//----------------------------
	const linkData = [
		{
			label: "Home",
			destination: "/home"
		}, {
			label: "About",
			destination: "/about"
		}, {
			label: "Characters",
			destination: "/characters"
		}, {
			label: "Episodes",
			destination: "/episodes"
		}, {
			label: "Watch Now",
			destination: "https://www.history.co.uk/shows/vikings"
		}
	];

	const links      = linkData.map(RENDER.item);
	const expanded   = open.toString();

	return (
		<nav className={ s.wrapper }>
			<NavToggle />
			<ul 
				id="navigation__links"
				className={ s.itemContainer }
				aria-expanded={ expanded }
			>
				{ links }
			</ul>
			<div className={ s.socials }>
				<Socials />
			</div>
		</nav>
	);
}// Navigation
