import React, { useState } from "react";
import RENDER from "SHARED/renderUtils.jsx";
import Socials from "COMPONENTS/Socials/";

export default function Navigation(){

	//HOOKS
	//----------------------------
	const [ open, setOpen ] = useState(false);


	//EVENT HANDLING
	//---------------------------
	function toggleOpen(){
		setOpen(!open);
	}//toggleOpen


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


	const links       = linkData.map(RENDER.item.bind(true, "navigation"));
	const ariaOpen    = open.toString();

	return (
		<nav>
			<button 
				role="switch"
				aria-checked={ariaOpen}
				aria-controls="navigation__links"
				onClick={toggleOpen}
			>
				<span>
					Menu
				</span>
				<span>
					Close
				</span>
			</button>
			<ul 
				id="navigation__links"
				aria-expanded={ariaOpen}
			>
				{links}
			</ul>
			<Socials />
		</nav>
	);
}//Navigation
