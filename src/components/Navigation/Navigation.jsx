import React, { useState } from "react";
import Socials from "COMPONENTS/Socials/";
import { RENDER } from "./";
import { s } from "./";

export default function Navigation(){

	//HOOKS
	//----------------------------
	const [ open, setOpen ] = useState(false);


	//EVENT HANDLING
	//---------------------------
	function toggleOpen(){
		setOpen(!open);
	}// toggleOpen


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
			<button 
				className={ s.button }
				role="switch"
				aria-checked={ ariaOpen }
				aria-controls="navigation__links"
				onClick={ toggleOpen }
			>
				<span 
					className={ s.label }
					aria-hidden="true"
				>
					menu
				</span>
				<span 
					className={ s.label }
					aria-hidden="false"
				>
					close
				</span>
			</button>
			<ul 
				id="navigation__links"
				className={ s.menu }
				aria-expanded={ ariaOpen }
			>
				{ links }
			</ul>
			<Socials />
		</nav>
	);
}// Navigation
