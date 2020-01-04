import React, { useContext, useEffect, useState } from "react";
import RENDER from "SHARED/renderUtils.jsx";
import { data, s } from "./";
import { ClientContext as Client } from "COMPONENTS/Client/";
import { NavContext as Nav } from "COMPONENTS/Navigation/";

export default function About(){
	document.title = 'Vikings | About';

	// CONTEXT
	// -----------------------
	const {
		open: isNavOpen
	} = useContext(Nav).state;

	const {
		isSafari
	} = useContext(Client).state;

	// STATE AND EFFECTS
	// ----------------------
	const [active, setActive] = useState(false);

	useEffect(fireTransition, []);

	function fireTransition() {
		const delay = setTimeout(() => {
			setActive(true);
		}
		, 200);

		return () => clearTimeout(delay);
	}// fireTransition

	// DATA
	// -----------------------
	const { 
		image: heroImg, 
		title, 
		subtitle, 
		body: bodyData
	} = data;

	const { 
		src: {
			small: smallSrc = "",
			medium: mediumSrc = "",
			large: largeSrc = ""
		},
		description 
	} = heroImg;

	// RENDER
	// -----------------------
	const body = RENDER.body(bodyData, 
		{
			className: s.paragraph,
			scope: "about"
		}
	); //comp name for key

	const isHidden = isNavOpen;

	return (
		<article className={ `${s.wrapper} ${active ? s.active : s.inactive}` }>
			<picture className={ s.hero }>
				<source 
					srcSet={mediumSrc} //using medium for quality
					media="(max-width: 767px)"
					alt={description}
				/>
				<source 
					srcSet={mediumSrc} 
					media="(min-width: 768px) and (max-width: 1199px)"
					alt={description}
				/>
				<source 
					srcSet={largeSrc} 
					media="(min-width: 1200px)"
					alt={description}
				/>
				<img 
					src={mediumSrc} 
					alt={description}
				/>
			</picture>
			<div 
				className={ s.textContainer }
				aria-hidden={ isHidden }	
			>	
				<h1 className={ s.heading }>
					{ title }
				</h1>
				<h2 className={ s.subheading }>
					<q>
						{ subtitle }
					</q>
				</h2>
				<div className={ s.body }>
					{ body }
				</div>
				{ !isSafari &&
					<div className={ s.fade }/>
				}
			</div>	
		</article>
	);
}// About
