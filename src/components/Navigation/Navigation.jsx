import React, { useState } from "react";
import Socials from "COMPONENTS/Socials/";
import NavToggle from "COMPONENTS/NavToggle";
import { 
	RENDER, 
	NavProvider 
} from "./";
import { s } from "./";

export default function Navigation(){

	let [expanded, setExpanded] = useState(false);

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

	const links      	  = linkData.map(RENDER.item);
	const ariaExpanded    = expanded.toString();

	return (
		<nav className={ s.wrapper }>
			<NavProvider>
				<NavToggle 
					setExpanded={ setExpanded }
				/>
			</NavProvider>
			<ul 
				id="navigation__links"
				className={ s.itemContainer }
				aria-expanded={ ariaExpanded }
			>
				{ links }
			</ul>
			<Socials />
		</nav>
	);
}// Navigation
