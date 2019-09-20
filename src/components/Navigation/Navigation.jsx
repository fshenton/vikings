import React, { useState } from "react";
import Socials from "COMPONENTS/Socials/";
import NavToggle from "COMPONENTS/NavToggle";
import { RENDER, NavProvider } from "./";
import { s } from "./";

export default function Navigation(){

	//HOOKS
	//----------------------------
	const [ open, setOpen ] = useState(false);


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


	const links       = linkData.map(RENDER.item);
	const ariaOpen    = open.toString();

	return (
		<nav className={ s.wrapper }>
			<NavProvider>
				<NavToggle isOpen={ ariaOpen } openMenu={ setOpen } />
			</NavProvider>
			<ul 
				id="navigation__links"
				className={ s.itemContainer }
				aria-expanded={ ariaOpen }
			>
				{ links }
			</ul>
			<Socials />
		</nav>
	);
}// Navigation
