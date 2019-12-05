import React, { useContext } from "react";
import RENDER from "SHARED/renderUtils.jsx";
import { data } from "./";
import { s } from "./";
import { NavContext as Nav } from "COMPONENTS/Navigation/";

export default function About(){

	//CONTEXT
	//------------------------

	const {
		open: isNavOpen
	} = useContext(Nav).state;

	//DATA
	//------------------------

	const { 
		image: heroImg, 
		title, 
		subtitle, 
		body: bodyData
	} = data;

	const { 
		src, 
		description 
	} = heroImg;


	//RENDER
	//------------------------

	const body = RENDER.body(bodyData, "about"); //comp name for key

	const isHidden = isNavOpen;

	return (
		<article className={ s.wrapper }>
			<img 
				className={ s.hero }
				src={ src } 
				alt={ description }
			/>
			<div className={ s.textContainer }
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
				<div className={ s.fade } />
			</div>	
		</article>
	);
} //About
