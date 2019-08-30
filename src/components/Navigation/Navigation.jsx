import React from "react";

export default function Navigation(){

	const links = [
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


	return (
		<nav>
			<button 
				role="switch"
				aria-checked="false"
				aria-controls="navigation__links">
				<span>
					Menu
				</span>
				<span>
					Close
				</span>
			</button>
			<ul 
				id="navigation__links"
				aria-expanded="false">
				<li>
					<a href="/">
						Home
					</a>	
				</li>
			</ul>
		</nav>
	);
}//Navigation
